import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Zap, Terminal, CheckCircle2, Layers, Target, ArrowUpRight } from 'lucide-react';
import { whyChooseUsData } from '../../data/agencyData';
import { MaskedLineReveal, FadeUpParagraph, FadeUpText, SlowHighlight } from '../AnimatedText';

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Terminal,
  CheckCircle2,
  Layers,
  Target,
};

const pillarTwoLines: Record<string, string[]> = {
  'Creative Thinking': ['CREATIVE', 'THINKING'],
  'Modern Technology': ['MODERN', 'TECHNOLOGY'],
  'Quality-Driven Work': ['QUALITY-DRIVEN', 'DELIVERY'],
  'All-in-One Solutions': ['ALL-IN-ONE', 'SOLUTIONS'],
  'Business-Focused Approach': ['BUSINESS-FIRST', 'ROI APPROACH'],
};

export const WhyChooseUsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="why-us" className="relative w-full py-8 sm:py-10 md:py-12 px-4 sm:px-8 text-black bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 pb-4 border-b border-[#3670FF]/15">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-3">
              <FadeUpText delay={0.05} className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#3670FF]/10 border border-[#3670FF]/25 text-[#3670FF] font-bold text-xs tracking-wider uppercase">
                <span>Competitive Edge</span>
              </FadeUpText>
            </div>
            
            <MaskedLineReveal
              lines={["WHY TOP BRANDS CHOOSE", "GENORA DIGITAL AGENCY."]}
              className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black leading-[1.12]"
              delay={0.1}
            />
          </div>
          
          <div className="mt-4 md:mt-0 max-w-md">
            <FadeUpParagraph
              className="text-sm sm:text-base text-black/80 font-normal font-sans leading-relaxed"
              delay={0.25}
            >
              We bridge the gap between <SlowHighlight>aesthetic brilliance</SlowHighlight>, robust <SlowHighlight>technical engineering</SlowHighlight>, and aggressive <SlowHighlight>commercial growth</SlowHighlight>.
            </FadeUpParagraph>
          </div>
        </div>

        {/* Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {whyChooseUsData.map((item, idx) => {
            const Icon = iconMap[item.icon] || Zap;
            const lines = pillarTwoLines[item.title] || [item.title, 'EXCELLENCE'];

            return (
              <div key={item.id} className="relative group">
                <motion.div
                  initial={{
                    clipPath: shouldReduceMotion ? 'none' : 'inset(0% 0% 16% 0% round 24px)',
                    opacity: shouldReduceMotion ? 1 : 0,
                    y: shouldReduceMotion ? 0 : 28,
                  }}
                  whileInView={{
                    clipPath: shouldReduceMotion ? 'none' : 'inset(0% 0% 0% 0% round 32px)',
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.01 : 0.9,
                    delay: shouldReduceMotion ? 0 : (idx % 3) * 0.1,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.19, 1, 0.22, 1] } }}
                  className="relative h-full bg-[#EFEFEF] rounded-[32px] p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-shadow duration-300 shadow-card-soft hover:shadow-card-hover border border-[#3670FF]/10 overflow-hidden"
                  style={{ willChange: 'clip-path, transform, opacity' }}
                >
                  <div>
                    {/* Top: Icon + Metric Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-2xl bg-[#3670FF] text-white flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5 stroke-[2] text-[#F9D601]" />
                      </div>
                      <span className="font-sans text-[11px] font-bold uppercase tracking-wider bg-[#F9D601] text-black px-3 py-1 rounded-full border border-[#0C2B80]/[0.08] shadow-sm">
                        {item.metric}
                      </span>
                    </div>

                    {/* Heading */}
                    <MaskedLineReveal
                      lines={lines}
                      className="font-sans text-xl sm:text-[22px] font-bold uppercase tracking-tight text-black leading-[1.1]"
                      delay={0.15}
                    />

                    {/* Subtitle & Description */}
                    <p className="font-sans text-xs sm:text-[13px] text-[#3670FF] font-semibold mt-2">
                      {item.subtitle}
                    </p>
                    <p className="font-sans text-xs sm:text-[13px] text-black/75 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Decorative Pill */}
                  <div className="mt-8 pt-4 border-t border-[#3670FF]/15 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-black/60 uppercase tracking-wider font-semibold">
                      Standard Practice
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center group-hover:bg-[#3670FF] text-black group-hover:text-white transition-colors shadow-sm">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
