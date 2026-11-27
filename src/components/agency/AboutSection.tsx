import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MaskedLineReveal, FadeUpParagraph, SlowHighlight } from '../AnimatedText';
import { Code2, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC<{ onExploreServices: () => void }> = ({ onExploreServices }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative w-full py-8 sm:py-10 md:py-12 px-4 sm:px-8 text-black bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 pb-4 border-b border-[#0C2B80]/[0.12]">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-3">
              <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#3670FF]/10 text-[#3670FF] font-bold text-xs tracking-wider uppercase">
                About Genora Studio
              </span>
            </div>
            
            <MaskedLineReveal
              lines={["WE COMBINE TECHNOLOGY,", "CREATIVITY & MARKETING."]}
              className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black leading-[1.12]"
              delay={0.1}
            />
          </div>
          
          <div className="mt-4 md:mt-0 max-w-sm">
            <p className="text-sm sm:text-base text-black/80 font-normal font-sans leading-relaxed">
              We are a creative technology and digital marketing agency providing complete digital solutions to businesses, startups and individuals.
            </p>
          </div>
        </div>

        {/* Big Narrative Highlight Banner */}
        <div className="relative bg-white rounded-[36px] p-6 sm:p-10 md:p-12 mb-8 border border-[#3670FF]/15 shadow-card-soft overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7">
              <h3 className="font-sans font-light text-2xl sm:text-3xl text-black leading-snug">
                "Our goal is to help brands <SlowHighlight>establish their online presence</SlowHighlight>, improve their digital identity and <SlowHighlight>grow their business</SlowHighlight>."
              </h3>
              
              <p className="mt-4 text-sm sm:text-base text-black/80 font-normal font-sans leading-relaxed">
                In today's digital landscape, generic websites and disconnected marketing fail to convert. Genora unites world-class <SlowHighlight>software engineering</SlowHighlight> with strategic design and high-yield <SlowHighlight>marketing funnels</SlowHighlight> so your company leads its market.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {['Verified Delivery Guarantee', 'Direct Partner Access', 'Rapid Turnarounds', 'Enterprise Architecture'].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center space-x-1.5 bg-[#EFEFEF] px-3.5 py-1.5 rounded-full text-xs font-medium text-black border border-[#3670FF]/10 shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3670FF]" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3.5">
              {[
                { number: '100%', label: 'End-to-End Delivery' },
                { number: '8-in-1', label: 'Unified Disciplines' },
                { number: '< 2h', label: 'Response Guarantee' },
                { number: '+310%', label: 'Average Client ROI' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#EFEFEF] rounded-2xl p-4 sm:p-5 border border-[#3670FF]/10 shadow-card-soft hover:shadow-card-hover transition-all"
                >
                  <div className="font-sans font-bold text-2xl sm:text-3xl text-black">{stat.number}</div>
                  <div className="text-xs text-black/60 font-normal font-sans mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The 3 Pillar Cards Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Modern Technology */}
          <div className="relative group">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.95, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.19, 1, 0.22, 1] } }}
              onClick={onExploreServices}
              className="h-full bg-white rounded-[32px] p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-shadow duration-300 shadow-card-soft hover:shadow-card-hover border border-[#3670FF]/10 cursor-pointer"
            >
              <div>
                <MaskedLineReveal
                  lines={["MODERN", "TECHNOLOGY"]}
                  className="font-sans text-xl sm:text-[22px] font-bold uppercase tracking-tight text-black leading-[1.1]"
                  delay={0.1}
                />
                <FadeUpParagraph
                  className="font-sans text-xs sm:text-[13px] text-black/70 mt-2.5 font-normal leading-relaxed"
                  delay={0.2}
                >
                  robust engineering, high-speed web apps &amp; custom software architectures
                </FadeUpParagraph>
              </div>

              {/* Bottom Badge Graphic */}
              <div className="mt-10 sm:mt-12 pt-4 pb-4 px-2 flex flex-col items-center justify-center">
                <div className="relative flex items-center justify-center pr-6 sm:pr-8">
                  <div className="relative bg-[#3670FF] text-white rounded-2xl px-4 py-3 flex items-center space-x-3 shadow-pill-blue transform -rotate-4 transition-all duration-200 hover:scale-[1.03]">
                    <div className="relative w-9 h-9 rounded-full bg-white/15 flex items-center justify-center border border-white/30 shadow-inner">
                      <Code2 className="w-5 h-5 text-[#DFEF87]" />
                    </div>
                    <div>
                      <div className="font-sans text-xs font-bold leading-tight">stack.dev</div>
                      <div className="font-sans text-[10.5px] text-white/80 font-normal">React • Next • Python</div>
                    </div>
                  </div>

                  <div className="absolute -right-2 sm:-right-4 -bottom-3 bg-[#DFEF87] text-black font-sans text-xs font-bold px-3.5 py-1.5 rounded-full shadow-pill-neon border border-[#0C2B80]/10 select-none">
                    HIGH PERFORMANCE
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Card 2: Bold Creativity */}
          <div className="relative group">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.95, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.19, 1, 0.22, 1] } }}
              onClick={onExploreServices}
              className="h-full bg-white rounded-[32px] p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-shadow duration-300 shadow-card-soft hover:shadow-card-hover border border-[#3670FF]/10 cursor-pointer"
            >
              <div>
                <MaskedLineReveal
                  lines={["BOLD", "CREATIVITY"]}
                  className="font-sans text-xl sm:text-[22px] font-bold uppercase tracking-tight text-black leading-[1.1]"
                  delay={0.15}
                />
                <FadeUpParagraph
                  className="font-sans text-xs sm:text-[13px] text-black/70 mt-2.5 font-normal leading-relaxed"
                  delay={0.25}
                >
                  distinctive brand systems, poster design &amp; high-converting video production
                </FadeUpParagraph>
              </div>

              {/* Bottom Badge Graphic */}
              <div className="mt-10 sm:mt-12 pt-4 pb-6 px-2 flex flex-col items-center justify-center">
                <div className="relative flex flex-col items-center">
                  <div className="inline-flex items-center rounded-full bg-[#3670FF] p-1 shadow-card-soft border border-white/20">
                    <div className="bg-[#2256DB] text-white font-sans text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full">
                      IDENTITY
                    </div>
                    <div className="bg-white text-[#3670FF] font-sans text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full flex items-center space-x-1">
                      <span>MEDIA</span>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 right-2 bg-[#DFEF87] text-black font-sans text-[11px] font-bold px-3 py-1 rounded-full shadow-md border border-[#0C2B80]/10 flex items-center space-x-1">
                    <span>AESTHETICS</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Card 3: Smart Marketing */}
          <div className="relative group">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.95, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.19, 1, 0.22, 1] } }}
              onClick={onExploreServices}
              className="h-full bg-white rounded-[32px] p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-shadow duration-300 shadow-card-soft hover:shadow-card-hover border border-[#3670FF]/10 cursor-pointer"
            >
              <div>
                <MaskedLineReveal
                  lines={["SMART", "MARKETING"]}
                  className="font-sans text-xl sm:text-[22px] font-bold uppercase tracking-tight text-black leading-[1.1]"
                  delay={0.2}
                />
                <FadeUpParagraph
                  className="font-sans text-xs sm:text-[13px] text-black/70 mt-2.5 font-normal leading-relaxed"
                  delay={0.3}
                >
                  Meta campaigns, organic growth &amp; intelligent automated sales pipelines
                </FadeUpParagraph>
              </div>

              {/* Bottom Badge Graphic */}
              <div className="mt-10 sm:mt-12 pt-4 pb-5 px-2 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-[250px]">
                  <div className="relative bg-[#DFEF87] rounded-[24px] px-5 py-4 shadow-bubble-neon border border-[#0C2B80]/15 flex flex-col items-center justify-center transition-transform duration-200 hover:scale-[1.03]">
                    <div className="font-sans text-[11px] font-bold text-black/75 tracking-wide uppercase">
                      CLIENT PIPELINE BOOST
                    </div>
                    <div className="font-sans text-2xl sm:text-[26px] font-bold text-black tracking-tight mt-0.5 flex items-center space-x-1">
                      <span>10X VELOCITY</span>
                      <ArrowUpRight className="w-5 h-5 text-black stroke-[3]" />
                    </div>
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
