import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Search, Compass, PenTool, Rocket } from 'lucide-react';
import { processSteps } from '../../data/agencyData';
import { MaskedLineReveal, FadeUpParagraph, FadeUpText, SlowHighlight } from '../AnimatedText';

const stepIcons = [Search, Compass, PenTool, Rocket];

const processTwoLines: Record<string, string[]> = {
  'Discovery & Research': ['DISCOVERY &', 'DEEP AUDIT'],
  'Strategy & Design': ['STRATEGY &', 'PROTOTYPING'],
  'Development & Testing': ['FULL-STACK', 'DEVELOPMENT'],
  'Launch & Growth': ['DEPLOYMENT &', 'SCALE ENGINE'],
};

export const ProcessSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="process" className="relative w-full py-8 sm:py-10 md:py-12 px-4 sm:px-8 text-black bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 pb-4 border-b border-[#0C2B80]/[0.15]">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-3">
              <FadeUpText delay={0.05} className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0C2B80]/10 text-black font-bold text-xs tracking-wider uppercase">
                <span>How We Work</span>
              </FadeUpText>
            </div>

            <MaskedLineReveal
              lines={["OUR 4-STAGE AGILE", "DEVELOPMENT PROCESS."]}
              className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black leading-[1.12]"
              delay={0.1}
            />
          </div>

          <div className="mt-4 md:mt-0 max-w-md">
            <FadeUpParagraph
              className="text-sm sm:text-base text-black/85 font-medium font-sans leading-relaxed"
              delay={0.25}
            >
              A battle-tested methodology designed to <SlowHighlight>eliminate ambiguity</SlowHighlight>, <SlowHighlight>ship on time</SlowHighlight>, and maximize <SlowHighlight>commercial impact</SlowHighlight>.
            </FadeUpParagraph>
          </div>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {processSteps.map((step, idx) => {
            const Icon = stepIcons[idx] || Search;
            const lines = processTwoLines[step.name] || [step.name, 'PHASE'];

            return (
              <div key={step.step} className="relative group">
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
                    duration: shouldReduceMotion ? 0.01 : 0.85,
                    delay: shouldReduceMotion ? 0 : idx * 0.1,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.19, 1, 0.22, 1] } }}
                  className="relative h-full bg-white rounded-[32px] p-6 sm:p-7 flex flex-col justify-between transition-shadow duration-300 shadow-card-soft hover:shadow-card-hover border border-[#0C2B80]/[0.08] overflow-hidden"
                  style={{ willChange: 'clip-path, transform, opacity' }}
                >
                  <div>
                    {/* Top Header: Step Number & Duration Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-2xl bg-[#3670FF] text-white flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5 stroke-[2] text-[#39ff14]" />
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-[#39ff14] text-black px-2.5 py-1 rounded-full border border-[#0C2B80]/[0.08] shadow-sm">
                          {step.duration}
                        </span>
                        <span className="font-sans font-bold text-xs text-black/40">
                          {step.step}
                        </span>
                      </div>
                    </div>

                    {/* Heading */}
                    <MaskedLineReveal
                      lines={lines}
                      className="font-sans text-lg sm:text-xl font-bold uppercase tracking-tight text-black leading-[1.1]"
                      delay={0.15}
                    />

                    {/* Description */}
                    <p className="font-sans text-xs sm:text-[13px] text-black/75 mt-2.5 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Activities List */}
                  <div className="mt-6 pt-4 border-t border-[#0C2B80]/[0.08]">
                    <div className="text-[10.5px] font-mono text-black/60 uppercase tracking-wider font-semibold mb-2">
                      Key Activities
                    </div>
                    <ul className="space-y-1.5">
                      {step.activities.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-center space-x-2 text-xs text-black/85">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3670FF] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
