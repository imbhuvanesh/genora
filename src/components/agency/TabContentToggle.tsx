import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Rocket, Palette, Terminal, CheckCircle2, ArrowUpRight, Zap, ShieldCheck } from 'lucide-react';
import { MaskedLineReveal, FadeUpParagraph, FadeUpText } from '../AnimatedText';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(SplitText);
}

interface RoleFeature {
  title: string;
  desc: string;
  metric: string;
  icon: React.ElementType;
}

interface TabItem {
  id: string;
  label: string;
  badge: string;
  text: string;
  features: RoleFeature[];
}

const TAB_CONTENT: TabItem[] = [
  {
    id: 'teams',
    label: 'Teams',
    badge: 'Enterprise Collaboration',
    text: 'Work that moves at the speed of trust. Shared language, aligned direction, and a battle-tested sprint cadence that makes cross-functional collaboration feel genuinely effortless.',
    features: [
      {
        title: 'Daily Async Velocity',
        desc: 'Dedicated Slack channels, Loom sprint walk-throughs, and real-time Figma updates.',
        metric: 'Zero-Blocker SLA',
        icon: Users,
      },
      {
        title: 'Two-Week Sprints',
        desc: 'Scoped backlog milestones delivered and demoed every 14 days without slippage.',
        metric: '100% On-Time',
        icon: Zap,
      },
      {
        title: 'Direct Partner Access',
        desc: 'Senior full-stack architects and design leads on every standup — no junior middlemen.',
        metric: '< 2h Response',
        icon: ShieldCheck,
      },
    ],
  },
  {
    id: 'founders',
    label: 'Founders',
    badge: 'Zero to Product-Market Fit',
    text: 'Turn early conviction into a commercial-grade product people genuinely want. From rough back-of-the-napkin concept to scalable market launch — without diluting your core vision.',
    features: [
      {
        title: '4-Week Rapid MVP',
        desc: 'Production-ready web application with auth, payments, database, and telemetry.',
        metric: 'Launch in 28 Days',
        icon: Rocket,
      },
      {
        title: 'Investor Demo Assets',
        desc: 'Clickable high-fidelity Figma prototypes and pitch deck visuals ready for funding rounds.',
        metric: 'Fundraise-Ready',
        icon: ArrowUpRight,
      },
      {
        title: 'Unit Economics Audit',
        desc: 'Architecture designed for low cloud overhead ($0-$50/mo startup infra costs).',
        metric: '80% Cost Savings',
        icon: Zap,
      },
    ],
  },
  {
    id: 'designers',
    label: 'Designers',
    badge: 'Design Systems & Motion',
    text: 'Craft interfaces that speak before a single word is read. Scalable visual design systems built with precision to carry emotion and clarity across every digital touchpoint.',
    features: [
      {
        title: 'Tokenized UI Libraries',
        desc: '400+ auto-layout Figma components mapped 1:1 to Tailwind tokens and CSS variables.',
        metric: '400+ Components',
        icon: Palette,
      },
      {
        title: 'Micro-Interactions',
        desc: 'Silky 60fps spring transitions, smooth SVG animations, and custom cursor physics.',
        metric: '60fps GPU Easing',
        icon: Zap,
      },
      {
        title: 'WCAG AAA Accessibility',
        desc: 'Rigorous color contrast ratios, keyboard navigation, and semantic DOM trees.',
        metric: '100% Accessible',
        icon: CheckCircle2,
      },
    ],
  },
  {
    id: 'engineers',
    label: 'Engineers',
    badge: 'Modern Architecture',
    text: 'Build with surgical precision on a foundation that scales effortlessly. Software architecture decisions that outlast the initial brief and hold up under heavy production workloads.',
    features: [
      {
        title: 'Strict TypeScript Core',
        desc: 'End-to-end type safety from database schemas to client state and API payloads.',
        metric: 'Zero Any Types',
        icon: Terminal,
      },
      {
        title: 'Lighthouse 95+ Guarantee',
        desc: 'Sub-second Core Web Vitals, dynamic asset compression, and edge caching.',
        metric: '98+ Vitals Core',
        icon: Zap,
      },
      {
        title: 'Automated CI/CD Test Pipeline',
        desc: 'GitHub Actions running linting, TypeScript compilation, and automated deploy scripts.',
        metric: 'Automated Deploy',
        icon: ShieldCheck,
      },
    ],
  },
];

const DURATION = 0.85;
const STAGGER = 0.08;
const OVERLAP = '<0.45';
const Y_OFFSET = 130;

export const TabContentToggle: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const splitsRef = useRef<any[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const queuedIndexRef = useRef<number | null>(null);
  const switchTabRef = useRef<(idx: number) => void>(() => { });

  const runTransition = useCallback((nextIndex: number) => {
    const currentSplit = splitsRef.current[activeIndexRef.current];
    const nextSplit = splitsRef.current[nextIndex];

    const currentLines = currentSplit?.lines;
    const nextLines = nextSplit?.lines;

    if (!currentLines || !nextLines) {
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
      isAnimatingRef.current = false;
      return;
    }

    gsap.killTweensOf(currentLines);
    gsap.killTweensOf(nextLines);

    gsap.set(currentLines, { yPercent: 0, opacity: 1 });
    gsap.set(nextLines, { yPercent: Y_OFFSET, opacity: 1 });

    tlRef.current?.kill();

    tlRef.current = gsap.timeline({
      onComplete: () => {
        activeIndexRef.current = nextIndex;
        setActiveIndex(nextIndex);
        isAnimatingRef.current = false;

        if (queuedIndexRef.current !== null && queuedIndexRef.current !== activeIndexRef.current) {
          const q = queuedIndexRef.current;
          queuedIndexRef.current = null;
          switchTabRef.current(q);
        }
      },
    });

    tlRef.current.to(currentLines, {
      yPercent: Y_OFFSET,
      duration: DURATION * 0.7,
      stagger: STAGGER * 0.75,
      ease: 'power2.in',
    });

    tlRef.current.to(
      nextLines,
      {
        yPercent: 0,
        duration: DURATION,
        stagger: STAGGER,
        ease: 'power3.out',
      },
      OVERLAP
    );
  }, []);

  const switchTab = useCallback((nextIndex: number) => {
    if (nextIndex === activeIndexRef.current) return;

    if (isAnimatingRef.current) {
      queuedIndexRef.current = nextIndex;
      return;
    }

    isAnimatingRef.current = true;
    setActiveIndex(nextIndex);
    runTransition(nextIndex);
  }, [runTransition]);

  useEffect(() => {
    switchTabRef.current = switchTab;
  }, [switchTab]);

  useEffect(() => {
    const panels = panelsRef.current.filter(Boolean) as HTMLDivElement[];
    if (panels.length === 0) return;

    splitsRef.current.forEach((split) => {
      try {
        split.revert();
      } catch {
        // ignore
      }
    });

    splitsRef.current = panels.map((el, i) => {
      try {
        return SplitText.create(el, {
          type: 'lines',
          mask: 'lines',
          linesClass: 'himaaax-split-line',
          autoSplit: true,
          onSplit(self: any) {
            gsap.set(el, { opacity: 1 });
            if (i === activeIndexRef.current) {
              gsap.set(self.lines, { yPercent: 0, opacity: 1 });
            } else {
              gsap.set(self.lines, { yPercent: Y_OFFSET, opacity: 1 });
            }
          },
        });
      } catch {
        return {
          lines: [el],
          revert: () => { },
        };
      }
    });

    splitsRef.current.forEach((split, i) => {
      if (split && split.lines) {
        if (i === activeIndexRef.current) {
          gsap.set(split.lines, { yPercent: 0, opacity: 1 });
        } else {
          gsap.set(split.lines, { yPercent: Y_OFFSET, opacity: 1 });
        }
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentSplit = splitsRef.current[activeIndexRef.current];
            if (currentSplit?.lines) {
              gsap.fromTo(
                currentSplit.lines,
                { yPercent: Y_OFFSET, opacity: 1 },
                {
                  yPercent: 0,
                  duration: DURATION + 0.2,
                  stagger: STAGGER,
                  ease: 'power3.out',
                }
              );
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      tlRef.current?.kill();
      splitsRef.current.forEach((split) => {
        try {
          split.revert();
        } catch {
          // ignore
        }
      });
    };
  }, []);

  const activeTab = TAB_CONTENT[activeIndex] || TAB_CONTENT[0];

  return (
    <section className="relative w-full py-8 sm:py-12 md:py-16 px-4 sm:px-8 bg-transparent overflow-hidden text-black">
      <div ref={containerRef} className="tabs-demo relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 border-b border-[#3670FF]/15">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-3">
              <FadeUpText delay={0.05} className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#3670FF]/10 border border-[#3670FF]/20 text-[#3670FF] font-bold text-xs tracking-wider uppercase">
                <Users className="w-3.5 h-3.5" />
                <span>Collaboration Framework</span>
              </FadeUpText>
            </div>

            <MaskedLineReveal
              lines={["TAILORED COLLABORATION", "FOR HIGH-VELOCITY TEAMS."]}
              className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black leading-[1.12]"
              delay={0.1}
            />
          </div>

          <div className="mt-4 md:mt-0 max-w-md">
            <FadeUpParagraph
              className="text-sm sm:text-base text-black/80 font-medium font-sans leading-relaxed"
              delay={0.25}
            >
              Whether you are an established engineering organization, a venture-backed founder, or a creative agency team, we adapt to your operational tempo.
            </FadeUpParagraph>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="tabs" id="tabs" role="tablist">
          {TAB_CONTENT.map((tab, idx) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeIndex === idx}
              onClick={() => switchTab(idx)}
              className={`px-5 py-2.5 rounded-full font-sans font-semibold text-xs sm:text-sm tracking-wide cursor-pointer transition-all ${
                activeIndex === idx
                  ? 'bg-[#3670FF] text-white font-bold shadow-md scale-[1.02]'
                  : 'bg-[#EFEFEF] text-black hover:bg-[#3670FF]/15 hover:text-[#3670FF]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Animated Headline Text Box */}
        <div className="content-wrapper relative bg-[#EFEFEF] rounded-3xl p-6 sm:p-8 md:p-10 border border-[#3670FF]/10 shadow-card-soft mb-6" id="contentWrapper">
          <div className="text-xs font-mono uppercase tracking-widest text-[#3670FF] font-bold mb-3 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#3670FF] animate-pulse" />
            <span>{activeTab.badge}</span>
          </div>

          {TAB_CONTENT.map((tab, idx) => (
            <div
              key={tab.id}
              ref={(el) => {
                panelsRef.current[idx] = el;
              }}
              className="role-content select-text text-lg sm:text-xl md:text-2xl font-light text-black leading-snug"
              style={{
                pointerEvents: activeIndex === idx ? 'auto' : 'none',
              }}
            >
              "{tab.text}"
            </div>
          ))}
        </div>

        {/* Populated Role Feature Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {activeTab.features.map((feat, fIdx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={fIdx}
                  className="bg-[#EFEFEF] rounded-2xl p-5 border border-[#3670FF]/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-white text-[#3670FF] flex items-center justify-center shadow-sm">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#F9D601] text-black">
                        {feat.metric}
                      </span>
                    </div>
                    <h4 className="font-sans font-bold text-sm text-black">
                      {feat.title}
                    </h4>
                    <p className="font-sans text-xs text-black/75 mt-1 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
