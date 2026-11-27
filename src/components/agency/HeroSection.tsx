import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { agencyStats } from '../../data/agencyData';

interface HeroSectionProps {
  onStartProject: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartProject,
  onExploreServices,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full pt-32 sm:pt-40 md:pt-48 pb-20 sm:pb-28 md:pb-36 px-4 sm:px-8 select-none overflow-hidden bg-[#3670FF] bg-grid-pattern">
      
      {/* Ambient background glow highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-white/10 via-zinc-800/15 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="relative max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Top Floating Badge with Layered Container Shadow */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-2.5 px-4 sm:px-5 py-2 rounded-full bg-zinc-900/80 border border-white/15 text-xs sm:text-sm text-zinc-300 shadow-[0_4px_20px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.08)_inset] backdrop-blur-md mb-8 group hover:border-white/30 transition-all duration-300"
        >
          <span className="font-medium tracking-wide">Creative Technology & Digital Marketing Agency</span>
          <span className="hidden sm:inline-block text-zinc-500">•</span>
          <span className="hidden sm:inline-block text-white font-semibold">Accepting New Projects</span>
        </motion.div>

        {/* =========================================================================
            HERO HEADLINE: "We Build. We Create. We Grow."
           ========================================================================= */}
        <div className="relative max-w-5xl mx-auto">
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.08] uppercase">
            <div className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 gap-y-1 sm:gap-y-2">
              <span className="text-white">We Build.</span>
              <span className="text-zinc-400">We Create.</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 underline decoration-white/20 underline-offset-8">
                We Grow.
              </span>
            </div>
          </h1>
        </div>

        {/* Hero Description */}
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-zinc-400 font-normal leading-relaxed"
        >
          Your ideas deserve more than just an online presence. We turn them into powerful digital experiences through <span className="text-white font-medium">technology</span>, <span className="text-white font-medium">creativity</span> and <span className="text-white font-medium">smart marketing</span>.
        </motion.p>

        {/* Dual CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-11 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto"
        >
          {/* CTA 1: Start a Project */}
          <button
            onClick={onStartProject}
            className="w-full sm:w-auto group inline-flex items-center justify-center space-x-2.5 bg-white text-black font-display text-sm sm:text-base font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-[0_4px_25px_rgba(255,255,255,0.25)] hover:shadow-[0_8px_35px_rgba(255,255,255,0.45)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          {/* CTA 2: Explore Services */}
          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto group inline-flex items-center justify-center space-x-2 bg-zinc-900/90 text-white font-display text-sm sm:text-base font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/20 hover:border-white/50 hover:bg-zinc-800 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
          >
            <span>Explore Services</span>
            <span className="text-zinc-500 group-hover:text-white transition-colors">↓</span>
          </button>
        </motion.div>

        {/* =========================================================================
            LAYERED CONTAINER INSIDE CONTAINER: AGENCY STATS STRIP
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 sm:mt-24 w-full max-w-4xl"
        >
          {/* Parent Container with Layered Soft Shadow */}
          <div className="bg-zinc-950/80 rounded-3xl p-3 sm:p-4 border border-white/10 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.05)_inset] backdrop-blur-xl">
            {/* Grid of Inner Child Containers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
              {agencyStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-zinc-900/90 rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.5),0_1px_2px_rgba(0,0,0,0.6)] hover:border-white/25 hover:shadow-[0_8px_24px_rgba(0,0,0,0.7)] transition-all duration-200 group"
                >
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight group-hover:scale-105 transition-transform duration-200">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-zinc-400 font-medium mt-1 text-center">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>

    </section>
  );
};
