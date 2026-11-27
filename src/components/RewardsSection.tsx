import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MaskedLineReveal, FadeUpParagraph, SlowHighlight } from './AnimatedText';
import { Code2, ArrowUpRight, Zap, TrendingUp } from 'lucide-react';

export const RewardsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-transparent pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-10 md:pb-12 px-4 sm:px-8 md:px-12 text-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Badge */}
        <div className="flex items-center justify-center mb-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#3670FF]/10 text-black font-bold text-xs tracking-wider uppercase shadow-sm">
            <span>Core Disciplines // Three Foundations</span>
          </div>
        </div>
        
        {/* The 3 Horizontal Reward / Pillar Cards Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* =========================================================================
              CARD 1: WE BUILD (Web & App Development)
             ========================================================================= */}
          <div className="relative group">
            <motion.div
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.85,
                delay: shouldReduceMotion ? 0 : 0.05,
                ease: [0.19, 1, 0.22, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.19, 1, 0.22, 1] } }}
              onClick={() => scrollTo('services')}
              className="relative h-full bg-white rounded-[32px] p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-card-soft hover:shadow-card-hover border border-[#3670FF]/10 cursor-pointer overflow-hidden"
            >
              <div>
                <div className="flex items-start justify-between">
                  <MaskedLineReveal
                    lines={["WE BUILD", "DIGITAL PRODUCTS"]}
                    className="font-sans text-xl sm:text-[22px] font-bold uppercase tracking-tight text-black leading-[1.1]"
                    delay={0.1}
                  />
                  <div className="w-8 h-8 rounded-full bg-[#3670FF]/10 text-[#3670FF] flex items-center justify-center">
                    <Code2 className="w-4 h-4" />
                  </div>
                </div>
                <FadeUpParagraph
                  className="font-sans text-xs sm:text-[13px] text-black/70 mt-2.5 font-normal leading-relaxed"
                  delay={0.25}
                >
                  high-performance <SlowHighlight>websites, apps &amp; custom software</SlowHighlight>
                </FadeUpParagraph>
              </div>

              {/* Bottom Graphic Badge */}
              <div className="mt-8 pt-4 pb-2 px-2 flex flex-col items-center justify-center">
                <div className="relative flex items-center justify-center pr-6 sm:pr-8">
                  <div className="relative bg-[#3670FF] text-white rounded-2xl px-4 py-3 flex items-center space-x-3 shadow-pill-blue transform -rotate-4 transition-all duration-300 hover:scale-[1.03]">
                    <div className="relative w-8 h-8 rounded-full bg-white/15 flex items-center justify-center border border-white/30 shadow-inner">
                      <Code2 className="w-4 h-4 text-[#39ff14]" />
                    </div>
                    <div>
                      <div className="font-sans text-xs font-bold leading-tight">genora.dev</div>
                      <div className="font-sans text-[10px] text-white/80 font-normal">100% custom code</div>
                    </div>
                  </div>

                  <div className="absolute -right-2 sm:-right-4 -bottom-3 bg-[#39ff14] text-black font-sans text-xs font-bold px-3 py-1 rounded-full shadow-pill-neon border border-[#0C2B80]/10 select-none">
                    FAST &amp; SCALABLE
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* =========================================================================
              CARD 2: WE CREATE (Creative Design & Video Production)
             ========================================================================= */}
          <div className="relative group">
            <motion.div
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.85,
                delay: shouldReduceMotion ? 0 : 0.1,
                ease: [0.19, 1, 0.22, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.19, 1, 0.22, 1] } }}
              onClick={() => scrollTo('work')}
              className="relative h-full bg-white rounded-[32px] p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-card-soft hover:shadow-card-hover border border-[#3670FF]/10 cursor-pointer overflow-hidden"
            >
              <div>
                <div className="flex items-start justify-between">
                  <MaskedLineReveal
                    lines={["WE CREATE", "POWERFUL BRANDS"]}
                    className="font-sans text-xl sm:text-[22px] font-bold uppercase tracking-tight text-black leading-[1.1]"
                    delay={0.15}
                  />
                  <div className="w-8 h-8 rounded-full bg-[#39ff14]/30 text-black flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                </div>
                <FadeUpParagraph
                  className="font-sans text-xs sm:text-[13px] text-black/70 mt-2.5 font-normal leading-relaxed"
                  delay={0.3}
                >
                  <SlowHighlight>brand identity</SlowHighlight>, graphic design &amp; <SlowHighlight>video production</SlowHighlight>
                </FadeUpParagraph>
              </div>

              {/* Bottom Graphic Badge */}
              <div className="mt-8 pt-4 pb-4 px-2 flex flex-col items-center justify-center">
                <div className="relative flex flex-col items-center">
                  <div className="inline-flex items-center rounded-full bg-[#0C2B80] p-1 shadow-card-soft border border-white/20">
                    <div className="bg-[#1E3A8A] text-white font-sans text-xs font-bold px-3.5 py-2 rounded-full">
                      CREATIVE
                    </div>
                    <div className="bg-[#3670FF] text-white font-sans text-xs font-bold px-3.5 py-2 rounded-full flex items-center space-x-1">
                      <span>MARKETING</span>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 right-2 bg-[#39ff14] text-black font-sans text-[11px] font-bold px-3 py-1 rounded-full shadow-md border border-[#0C2B80]/10 flex items-center space-x-1">
                    <span>AESTHETICS</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* =========================================================================
              CARD 3: WE GROW (Digital Marketing & Automation)
             ========================================================================= */}
          <div className="relative group">
            <motion.div
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.85,
                delay: shouldReduceMotion ? 0 : 0.15,
                ease: [0.19, 1, 0.22, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.19, 1, 0.22, 1] } }}
              onClick={() => scrollTo('contact')}
              className="relative h-full bg-white rounded-[32px] p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-300 shadow-card-soft hover:shadow-card-hover border border-[#3670FF]/10 cursor-pointer overflow-hidden"
            >
              <div>
                <div className="flex items-start justify-between">
                  <MaskedLineReveal
                    lines={["WE GROW", "YOUR BUSINESS"]}
                    className="font-sans text-xl sm:text-[22px] font-bold uppercase tracking-tight text-black leading-[1.1]"
                    delay={0.2}
                  />
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                </div>
                <FadeUpParagraph
                  className="font-sans text-xs sm:text-[13px] text-black/70 mt-2.5 font-normal leading-relaxed"
                  delay={0.35}
                >
                  <SlowHighlight>Meta ad funnels</SlowHighlight>, SEO ranking &amp; <SlowHighlight>intelligent automation</SlowHighlight>
                </FadeUpParagraph>
              </div>

              {/* Bottom Graphic Badge */}
              <div className="mt-8 pt-4 pb-2 px-2 flex flex-col items-center justify-center">
                <div className="relative bg-[#39ff14] text-black rounded-3xl p-4 sm:p-5 w-full max-w-[240px] shadow-pill-neon border border-[#0C2B80]/10 select-none">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-black/75">
                      Client ROI Boost
                    </span>
                    <TrendingUp className="w-4 h-4 text-black" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-black mt-1">
                    +310%
                  </div>
                  <div className="text-[11px] font-bold tracking-tight text-black/80">
                    SCALABLE GROWTH
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
