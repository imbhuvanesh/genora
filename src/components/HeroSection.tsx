import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from 'framer-motion';
import {
  HeroHashtag,
  DoodleConnectorBracket,
  DoodleStar,
  DoodleSparkle,
  DoodleBurst,
  DoodleCorner,
  DoodleCrown,
  DoodleUnderline,
  BottomLeftArrow,
} from './Doodles';
import { SlowHighlight } from './AnimatedText';
import { ArrowUpRight, Compass } from 'lucide-react';

interface HeroSectionProps {
  onGetStarted?: () => void;
  onExploreServices?: () => void;
}

// Luxurious cubic-bezier matching power3.out / expo.out for silky editorial motion
const CINEMATIC_EASE = [0.16, 1, 0.3, 1] as const;

/**
 * CinematicMaskedWord
 * Renders an oversized word with an overflow-hidden clipping mask,
 * staggered letter-by-letter vertical emergence, blur-to-sharp resolution,
 * and subtle depth scaling.
 */
interface CinematicMaskedWordProps {
  text: string;
  delay?: number;
  letterStagger?: number;
  duration?: number;
  className?: string;
  highlight?: boolean;
}

const CinematicMaskedWord: React.FC<CinematicMaskedWordProps> = ({
  text,
  delay = 0,
  letterStagger = 0.038,
  duration = 1.15,
  className = '',
  highlight = false,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const characters = Array.from(text);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : letterStagger,
        delayChildren: shouldReduceMotion ? 0 : delay,
      },
    },
  };

  const letterVariants: Variants = {
    hidden: {
      y: shouldReduceMotion ? '0%' : '125%',
      opacity: shouldReduceMotion ? 1 : 0,
      scale: shouldReduceMotion ? 1 : 0.94,
      filter: shouldReduceMotion ? 'blur(0px)' : 'blur(9px)',
    },
    visible: {
      y: '0%',
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: shouldReduceMotion ? 0.01 : duration,
        ease: CINEMATIC_EASE,
      },
    },
  };

  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`inline-flex items-center overflow-hidden leading-[0.88] select-none ${className}`}
      style={{ willChange: 'transform, opacity, filter' }}
    >
      {characters.map((char, index) => (
        <span
          key={index}
          className="inline-block overflow-hidden py-1 px-[0.01em]"
          style={{ willChange: 'transform' }}
        >
          <motion.span
            variants={letterVariants}
            className={`inline-block ${
              highlight
                ? 'text-[#39ff14] drop-shadow-[0_0_28px_rgba(57, 255, 20,0.5)]'
                : 'text-white drop-shadow-[0_8px_24px_rgba(0,10,30,0.3)]'
            }`}
            style={{ willChange: 'transform, opacity, filter' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

export const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted, onExploreServices }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll-linked cinematic parallax transformations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Typography subtly ascends and softens as user scrolls toward the next section
  const typographyY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -65]);
  const typographyOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.88, shouldReduceMotion ? 1 : 0.22]);
  const typographyScale = useTransform(scrollYProgress, [0, 1], [1, shouldReduceMotion ? 1 : 0.965]);
  const doodleY = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : -45]);
  const doodleOpacity = useTransform(scrollYProgress, [0, 0.65], [1, shouldReduceMotion ? 1 : 0.3]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-8 sm:pt-10 md:pt-14 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8 select-none flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Decorative Container Hand-Drawn Corners */}
      <motion.div
        style={{ y: doodleY, opacity: doodleOpacity }}
        className="absolute top-3 left-4 sm:left-6 z-10 opacity-75 pointer-events-none"
      >
        <DoodleCorner position="top-left" color="#39ff14" className="w-8 h-8 sm:w-10 sm:h-10" />
      </motion.div>
      <motion.div
        style={{ y: doodleY, opacity: doodleOpacity }}
        className="absolute top-3 right-4 sm:right-6 z-10 opacity-75 pointer-events-none"
      >
        <DoodleCorner position="top-right" color="#39ff14" className="w-8 h-8 sm:w-10 sm:h-10" />
      </motion.div>

      {/* Centered Hero Composition with Scroll Parallax */}
      <motion.div
        style={{
          y: typographyY,
          opacity: typographyOpacity,
          scale: typographyScale,
          willChange: 'transform, opacity',
        }}
        className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center"
      >
        {/* =========================================================================
            1. TOP CATEGORY PILL BADGE (REVEAL 1: delay 0.08s)
           ========================================================================= */}
        <div className="relative mb-3 sm:mb-5 z-20 inline-flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -14, filter: shouldReduceMotion ? 'none' : 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.08, ease: CINEMATIC_EASE }}
            className="inline-flex items-center justify-center space-x-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-sans text-xs sm:text-[13px] font-semibold tracking-wide shadow-sm backdrop-blur-md"
          >
            <span className="uppercase tracking-wider">Creative Technology &amp; Digital Marketing</span>
            <DoodleStar className="w-3.5 h-3.5 text-[#39ff14] ml-1" />
          </motion.div>

          {/* Hand-Drawn Sparkle Accent */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: CINEMATIC_EASE }}
            className="absolute -right-8 -top-3 hidden sm:block pointer-events-none"
          >
            <DoodleSparkle color="#39ff14" className="w-6 h-6" />
          </motion.div>
        </div>

        {/* =========================================================================
            2. CINEMATIC OVERSIZED TYPOGRAPHY LOCKUP
            - Giant "WE" (Masked, Letter Emergence, Blur-to-Sharp)
            - Connector Bracket (Fluid emergence)
            - 3 Stacked Lines: BUILD. / CREATE. / GROW. (Staggered Mask Reveals)
           ========================================================================= */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 tracking-tight uppercase text-white my-3 sm:my-5 md:my-7">
          
          {/* Left: Giant "WE" with Mask Emergence & Hashtag Doodle */}
          <div className="relative flex items-center justify-center">
            {/* Playful Floating Hand-Drawn Crown over WE */}
            <motion.div
              initial={{ opacity: 0, y: -20, rotate: -12, scale: 0.6 }}
              animate={{ 
                opacity: 1, 
                y: shouldReduceMotion ? 0 : [-5, 3, -5], 
                rotate: shouldReduceMotion ? -6 : [-8, 2, -8],
                scale: 1 
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.38 },
                scale: { duration: 0.6, delay: 0.38 },
                y: { repeat: Infinity, duration: 4.2, ease: 'easeInOut' },
                rotate: { repeat: Infinity, duration: 5.5, ease: 'easeInOut' }
              }}
              className="absolute -top-7 sm:-top-9 md:-top-11 left-1/2 -translate-x-1/2 pointer-events-none z-20"
            >
              <DoodleCrown color="#39ff14" className="w-10 h-7 sm:w-13 sm:h-9 md:w-15 md:h-10 drop-shadow-[0_0_14px_rgba(57, 255, 20,0.65)]" />
            </motion.div>

            {/* Hand-Drawn Golden Hashtag Doodle with Floating Motion */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.88, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.3, ease: CINEMATIC_EASE }}
              className="absolute -left-8 sm:-left-14 md:-left-20 lg:-left-24 -top-6 sm:-top-8 md:-top-10 pointer-events-none"
            >
              <HeroHashtag className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" />
            </motion.div>

            {/* Overflow-Hidden Mask Wrapper for "WE" */}
            <div className="overflow-hidden py-1 px-2">
              <motion.div
                initial={{
                  y: shouldReduceMotion ? 0 : '120%',
                  opacity: shouldReduceMotion ? 1 : 0,
                  scale: shouldReduceMotion ? 1 : 0.92,
                  filter: shouldReduceMotion ? 'none' : 'blur(12px)',
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  filter: 'blur(0px)',
                }}
                transition={{
                  duration: shouldReduceMotion ? 0.01 : 1.25,
                  delay: 0.12,
                  ease: CINEMATIC_EASE,
                }}
                className="text-[86px] sm:text-[124px] md:text-[156px] lg:text-[192px] xl:text-[218px] font-extrabold tracking-tighter leading-none text-white drop-shadow-[0_16px_40px_rgba(0,10,50,0.4)] select-none flex items-center justify-center"
              >
                <span>W</span>
                <span>E</span>
              </motion.div>
            </div>
          </div>

          {/* Middle: Doodle Connector Bracket linking WE to BUILD / CREATE / GROW */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0.8 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1.0, delay: 0.32, ease: CINEMATIC_EASE }}
            className="hidden md:flex items-center justify-center shrink-0 origin-center"
          >
            <DoodleConnectorBracket className="w-8 lg:w-11 h-36 md:h-44 lg:h-52" />
          </motion.div>

          {/* Right: Stacked Column with Line-by-Line Masked Words */}
          <div className="flex flex-col items-center md:items-start justify-center leading-[0.88] text-[46px] sm:text-[66px] md:text-[84px] lg:text-[102px] xl:text-[116px] tracking-tight">
            
            {/* Line 1: BUILD. (Stagger delay: 0.22s, Duration: 1.15s) */}
            <div className="font-bold overflow-hidden">
              <CinematicMaskedWord
                text="BUILD."
                delay={0.22}
                duration={1.15}
                letterStagger={0.035}
              />
            </div>

            {/* Line 2: CREATE. (Stagger delay: 0.38s — exact 0.16s line stagger!) */}
            <div className="font-bold mt-1 md:mt-2 overflow-hidden">
              <CinematicMaskedWord
                text="CREATE."
                delay={0.38}
                duration={1.15}
                letterStagger={0.035}
              />
            </div>

            {/* Line 3: GROW. (Sunny Lime Accent, Stagger delay: 0.54s — exact 0.16s line stagger!) */}
            <div className="relative font-extrabold mt-1 md:mt-2 flex items-center overflow-visible">
              <div className="overflow-hidden">
                <CinematicMaskedWord
                  text="GROW."
                  delay={0.54}
                  duration={1.2}
                  letterStagger={0.04}
                  highlight
                />
              </div>

              {/* Hand-Drawn Animated Underline under GROW */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.85, delay: 0.8, ease: CINEMATIC_EASE }}
                className="absolute -bottom-2 sm:-bottom-3 left-0 w-full pointer-events-none origin-left"
              >
                <DoodleUnderline color="#39ff14" className="w-full h-3 sm:h-4 drop-shadow-[0_0_12px_rgba(57, 255, 20,0.6)]" />
              </motion.div>

              {/* Hand-Drawn Animated Burst Accent on GROW */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ 
                  opacity: 0.95, 
                  scale: shouldReduceMotion ? 1 : [1, 1.15, 1],
                  rotate: shouldReduceMotion ? 0 : [0, 8, -6, 0]
                }}
                transition={{ 
                  opacity: { duration: 0.9, delay: 0.72, ease: CINEMATIC_EASE },
                  scale: { repeat: Infinity, duration: 3.5, ease: 'easeInOut' },
                  rotate: { repeat: Infinity, duration: 6, ease: 'easeInOut' }
                }}
                className="absolute -right-10 -top-4 hidden sm:block pointer-events-none"
              >
                <DoodleBurst color="#39ff14" className="w-9 h-9 opacity-90 drop-shadow-[0_0_10px_rgba(57, 255, 20,0.5)]" />
              </motion.div>
            </div>

          </div>

        </div>

        {/* =========================================================================
            3. SUPPORTING PARAGRAPH (REVEAL 3: delay 0.85s, duration 0.8s)
            Emerges smoothly after main typography settles
           ========================================================================= */}
        <div className="overflow-hidden mt-4 sm:mt-6 px-4">
          <motion.p
            initial={{
              y: shouldReduceMotion ? 0 : 28,
              opacity: shouldReduceMotion ? 1 : 0,
              filter: shouldReduceMotion ? 'none' : 'blur(6px)',
            }}
            animate={{
              y: 0,
              opacity: 1,
              filter: 'blur(0px)',
            }}
            transition={{ duration: 0.85, delay: 0.85, ease: CINEMATIC_EASE }}
            className="relative z-20 max-w-xl text-center text-white/90 font-sans font-normal text-xs sm:text-sm md:text-base leading-relaxed mx-auto"
          >
            Your ideas deserve more than just an online presence. We turn them into powerful digital experiences through{' '}
            <SlowHighlight dark>technology</SlowHighlight>,{' '}
            <SlowHighlight dark>creativity</SlowHighlight> and{' '}
            <SlowHighlight dark>smart marketing</SlowHighlight>.
          </motion.p>
        </div>

        {/* =========================================================================
            4. HERO ACTION CTA BUTTONS (REVEAL 4: delay 1.05s, duration 0.65s)
            Fluid upward emergence with hover & active micro-interactions
           ========================================================================= */}
        <motion.div
          initial={{
            opacity: shouldReduceMotion ? 1 : 0,
            y: shouldReduceMotion ? 0 : 22,
            scale: shouldReduceMotion ? 1 : 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{ duration: 0.65, delay: 1.05, ease: CINEMATIC_EASE }}
          className="relative z-20 mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {/* Hand-Drawn Animated Arrow pointing toward Primary CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, x: -15 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: shouldReduceMotion ? 0 : [-3, 3, -3],
              y: shouldReduceMotion ? 0 : [2, -4, 2]
            }}
            transition={{
              opacity: { duration: 0.6, delay: 1.25 },
              scale: { duration: 0.6, delay: 1.25 },
              x: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
              y: { repeat: Infinity, duration: 3.2, ease: 'easeInOut' }
            }}
            className="absolute -left-14 sm:-left-20 -top-12 hidden lg:flex items-center space-x-1 pointer-events-none"
          >
            <BottomLeftArrow className="w-14 h-14 text-[#39ff14] drop-shadow-[0_0_12px_rgba(57, 255, 20,0.6)] -rotate-45" />
            <span className="font-sans text-[11px] font-black text-[#39ff14] uppercase tracking-widest drop-shadow-[0_0_8px_rgba(57, 255, 20,0.5)] whitespace-nowrap -rotate-6">
              Let's Build!
            </span>
          </motion.div>

          {/* Primary CTA: High-contrast Golden #39ff14 with Black font, hovers to White */}
          <button
            onClick={onGetStarted}
            className="group px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#39ff14] hover:bg-white text-black hover:text-black font-sans font-bold text-xs sm:text-sm tracking-tight flex items-center space-x-2 shadow-[0_8px_25px_rgba(57, 255, 20,0.35)] hover:shadow-[0_12px_35px_rgba(255,255,255,0.45)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2.5]" />
          </button>

          {/* Secondary CTA: Frosted Glass with Golden Accent */}
          <button
            onClick={onExploreServices}
            className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 font-sans font-semibold text-xs sm:text-sm tracking-tight flex items-center space-x-2 backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
          >
            <Compass className="w-4 h-4 text-[#39ff14]" />
            <span>Explore Services</span>
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
};
