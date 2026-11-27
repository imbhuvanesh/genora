import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const EASE_BEZIER = [0.19, 1, 0.22, 1] as const;

// Exact Golden Hand-Drawn Hashtag # symbol matching reference palette
export const HeroHashtag: React.FC<{ className?: string }> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.svg 
      viewBox="0 0 130 130" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: shouldReduceMotion ? 1 : 0, rotate: -18, opacity: 0 }}
      animate={{ 
        scale: 1, 
        rotate: shouldReduceMotion ? -4 : [-4, 2, -4], 
        y: shouldReduceMotion ? 0 : [-4, 4, -4],
        opacity: 1 
      }}
      transition={{
        scale: { type: 'spring', stiffness: 180, damping: 24, delay: 0.2 },
        opacity: { duration: 0.5, delay: 0.2 },
        rotate: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
        y: { repeat: Infinity, duration: 4.5, ease: 'easeInOut' },
      }}
      className={`select-none filter drop-shadow-[0_0_20px_rgba(249,214,1,0.8)] drop-shadow-[0_8px_16px_rgba(0,10,40,0.3)] ${className}`}
    >
      <motion.path 
        d="M 52 14 L 32 116" 
        stroke="#F9D601" 
        strokeWidth="16" 
        strokeLinecap="round"
        initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, delay: 0.25, ease: EASE_BEZIER }}
      />
      <motion.path 
        d="M 88 12 L 68 118" 
        stroke="#F9D601" 
        strokeWidth="16" 
        strokeLinecap="round" 
        initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, delay: 0.45, ease: EASE_BEZIER }}
      />
      <motion.path 
        d="M 12 44 L 118 40" 
        stroke="#F9D601" 
        strokeWidth="16" 
        strokeLinecap="round" 
        initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.85, delay: 0.65, ease: EASE_BEZIER }}
      />
      <motion.path 
        d="M 8 84 L 114 80" 
        stroke="#F9D601" 
        strokeWidth="16" 
        strokeLinecap="round" 
        initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.85, delay: 0.85, ease: EASE_BEZIER }}
      />
    </motion.svg>
  );
};

// Hand-Drawn Neon Green Top-Right Looping Arrow pointing toward pearl.eth card
export const TopRightArrow: React.FC<{ className?: string }> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.svg 
      viewBox="0 0 180 180" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        y: [-4, 4, -4],
        rotate: [-1.5, 2, -1.5],
      }}
      transition={{
        repeat: Infinity,
        duration: 7.5,
        ease: 'easeInOut',
      }}
      className={`select-none filter drop-shadow-[0_0_18px_rgba(249,214,1,0.7)] ${className}`}
    >
      <motion.path 
        d="M 50 110 C 35 25, 145 15, 140 85 C 136 125, 105 145, 80 160" 
        stroke="#F9D601" 
        strokeWidth="12" 
        strokeLinecap="round" 
        fill="none" 
        initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ 
          pathLength: { duration: 1.8, delay: 0.6, ease: EASE_BEZIER },
          opacity: { duration: 0.3, delay: 0.6 }
        }}
      />
      <motion.path 
        d="M 104 148 L 76 162 L 82 134" 
        stroke="#F9D601" 
        strokeWidth="12" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none" 
        initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ 
          pathLength: { duration: 0.6, delay: 2.1, ease: EASE_BEZIER },
          opacity: { duration: 0.2, delay: 2.1 }
        }}
      />
    </motion.svg>
  );
};

// Hand-Drawn Neon Green Bottom-Left Curving Arrow pointing toward baseclub.eth card
export const BottomLeftArrow: React.FC<{ className?: string }> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.svg 
      viewBox="0 0 180 180" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        y: [4, -4, 4],
        rotate: [1.5, -2, 1.5],
      }}
      transition={{
        repeat: Infinity,
        duration: 8.0,
        ease: 'easeInOut',
      }}
      className={`select-none filter drop-shadow-[0_0_18px_rgba(249,214,1,0.7)] ${className}`}
    >
      <motion.path 
        d="M 45 145 C 20 120, 25 75, 55 55 C 80 38, 115 50, 142 80" 
        stroke="#F9D601" 
        strokeWidth="13" 
        strokeLinecap="round" 
        fill="none" 
        initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ 
          pathLength: { duration: 1.8, delay: 0.75, ease: EASE_BEZIER },
          opacity: { duration: 0.3, delay: 0.75 }
        }}
      />
      <motion.path 
        d="M 116 78 L 144 80 L 138 108" 
        stroke="#F9D601" 
        strokeWidth="13" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none" 
        initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ 
          pathLength: { duration: 0.6, delay: 2.25, ease: EASE_BEZIER },
          opacity: { duration: 0.2, delay: 2.25 }
        }}
      />
    </motion.svg>
  );
};

// Circular Neon Green "START A PROJECT" Rotating Badge with Center Arrow
export const GetStartedBadge: React.FC<{ onClick?: () => void; className?: string }> = ({ 
  onClick, 
  className = '' 
}) => {
  return (
    <div 
      onClick={onClick}
      className={`relative rounded-full bg-neon-lime flex items-center justify-center cursor-pointer shadow-badge-neon transition-all duration-300 hover:scale-105 hover:shadow-[0_18px_45px_-6px_rgba(0,0,0,0.3),0_0_35px_rgba(168,255,0,0.65)] active:scale-95 group select-none ${className}`}
      title="Start a Project"
    >
      {/* Rotating Circular Text */}
      <svg 
        viewBox="0 0 200 200" 
        className="absolute inset-0 w-full h-full spin-slow group-hover:[animation-duration:8s]"
      >
        <path 
          id="badgeCirclePath" 
          d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" 
          fill="none"
        />
        <text className="font-archivo text-[14.5px] uppercase tracking-[0.22em] font-black fill-black">
          <textPath href="#badgeCirclePath" startOffset="0%">
            START A PROJECT • EXPLORE SERVICES •
          </textPath>
        </text>
      </svg>

      {/* Center Black Doodle Curved Arrow with speed lines */}
      <svg 
        viewBox="0 0 80 80" 
        fill="none" 
        className="w-12 h-12 md:w-16 md:h-16 transition-transform group-hover:rotate-12 duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
      >
        <path 
          d="M 26 54 C 30 40, 42 30, 58 26" 
          stroke="#080808" 
          strokeWidth="6" 
          strokeLinecap="round" 
        />
        <path 
          d="M 44 24 L 59 26 L 57 41" 
          stroke="#080808" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M 23 42 C 28 32, 36 26, 46 22" 
          stroke="#080808" 
          strokeWidth="4" 
          strokeLinecap="round" 
          opacity="0.85" 
        />
      </svg>
    </div>
  );
};

// Hand-drawn Black connector arrow between Card 1 and Card 2 (Exact curve matching user's image)
export const ConnectorArrow1: React.FC<{ className?: string }> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.svg 
      viewBox="0 0 70 70" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`w-9 h-9 lg:w-11 lg:h-11 select-none filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.08)] ${className}`}
    >
      {/* Arch curving up-right and pointing downwards into Card 2 */}
      <motion.path 
        d="M 14 50 C 16 22, 42 16, 52 38" 
        stroke="#080808" 
        strokeWidth="4.5" 
        strokeLinecap="round" 
        fill="none" 
        initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.2, ease: EASE_BEZIER }}
      />
      {/* Arrowhead pointing downwards */}
      <motion.path 
        d="M 40 32 L 53 40 L 55 24" 
        stroke="#080808" 
        strokeWidth="4.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none" 
        initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, delay: 0.75, ease: EASE_BEZIER }}
      />
    </motion.svg>
  );
};

// Hand-drawn Black connector arrow between Card 2 and Card 3 (Exact diagonal matching user's image)
export const ConnectorArrow2: React.FC<{ className?: string }> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.svg 
      viewBox="0 0 70 70" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`w-9 h-9 lg:w-11 lg:h-11 select-none filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.08)] ${className}`}
    >
      {/* Diagonal line pointing up-right into Card 3 */}
      <motion.path 
        d="M 16 52 L 52 18" 
        stroke="#080808" 
        strokeWidth="4.5" 
        strokeLinecap="round" 
        fill="none" 
        initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.3, ease: EASE_BEZIER }}
      />
      {/* Arrowhead */}
      <motion.path 
        d="M 34 16 L 54 17 L 53 36" 
        stroke="#080808" 
        strokeWidth="4.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        fill="none" 
        initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3, delay: 0.85, ease: EASE_BEZIER }}
      />
    </motion.svg>
  );
};

// Small neon circular sticker with black doodle arrow pointing up-right ↗ (matching Card 2 in user's image)
export const SmallNeonSticker: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div 
      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-neon-lime flex items-center justify-center shadow-pill-neon transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_24px_rgba(249,214,1,0.65)] select-none border border-[#0C2B80]/15 ${className}`}
    >
      <svg 
        viewBox="0 0 32 32" 
        fill="none" 
        className="w-6 h-6 drop-shadow-[0_1px_2px_rgba(12,43,128,0.2)]"
      >
        {/* Curving arrow pointing up-right ↗ */}
        <path 
          d="M 10 22 C 12 16, 17 12, 23 9" 
          stroke="#0C2B80" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
        />
        <path 
          d="M 16 9 L 23 9 L 23 16" 
          stroke="#080808" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    </div>
  );
};

// Hand-drawn Neon Curly Bracket connecting single "WE" to BUILD / CREATE / GROW
export const DoodleConnectorBracket: React.FC<{ className?: string; color?: string }> = ({ 
  className = '', 
  color = '#F9D601' 
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.svg
      viewBox="0 0 54 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none filter drop-shadow-[0_0_12px_rgba(168,255,0,0.5)] ${className}`}
    >
      {/* Hand-drawn curly bracket embracing the 3 lines */}
      <motion.path
        d="M 44 12 C 24 20, 18 58, 19 92 C 19 104, 10 110, 4 110 C 10 110, 19 116, 19 128 C 18 162, 24 200, 44 208"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3, ease: EASE_BEZIER }}
      />
    </motion.svg>
  );
};

// Hand-drawn doodle scribbled underline
export const DoodleUnderline: React.FC<{ className?: string; color?: string }> = ({ 
  className = '', 
  color = '#F9D601' 
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.svg
      viewBox="0 0 240 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
    >
      <motion.path
        d="M 4 14 C 40 4, 110 20, 170 10 C 200 5, 225 15, 236 12"
        stroke={color}
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.35, ease: EASE_BEZIER }}
      />
    </motion.svg>
  );
};

// Hand-drawn circular doodle loop (circling a badge or number)
export const DoodleCircle: React.FC<{ className?: string; color?: string }> = ({ 
  className = '', 
  color = '#F9D601' 
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
    >
      <motion.path
        d="M 60 12 C 95 10, 112 35, 110 65 C 108 95, 80 112, 48 108 C 20 104, 10 75, 14 45 C 18 18, 52 8, 80 14"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: shouldReduceMotion ? 1 : 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.45, ease: EASE_BEZIER }}
      />
    </motion.svg>
  );
};

// Hand-drawn sketch 4-point doodle star
export const DoodleStar: React.FC<{ className?: string; color?: string }> = ({ 
  className = '', 
  color = '#F9D601' 
}) => {
  return (
    <motion.svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ rotate: 90, scale: 1.15 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`select-none inline-block ${className}`}
    >
      <path
        d="M 20 2 C 20 12, 28 20, 38 20 C 28 20, 20 28, 20 38 C 20 28, 12 20, 2 20 C 12 20, 20 12, 20 2 Z"
        fill={color}
      />
    </motion.svg>
  );
};

// Hand-drawn sketch arrow pointing down
export const DoodleArrowDown: React.FC<{ className?: string; color?: string }> = ({ 
  className = '', 
  color = '#080808' 
}) => {
  return (
    <svg viewBox="0 0 40 70" fill="none" className={`select-none ${className}`}>
      <path
        d="M 18 6 C 24 24, 20 44, 20 62"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M 8 50 L 20 64 L 32 50"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// =========================================================================
// HAND-DRAWN DOODLE EXTENSION SUITE FOR CONTAINERS & CARDS
// =========================================================================

// 1. Hand-Drawn Container Corner Accent
export const DoodleCorner: React.FC<{
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  color?: string;
}> = ({ position = 'top-left', className = '', color = '#080808' }) => {
  const rotationClass = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  }[position];

  return (
    <motion.svg
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.7, ease: EASE_BEZIER }}
      className={`select-none pointer-events-none ${rotationClass} ${className}`}
    >
      <motion.path
        d="M 6 38 C 6 20, 10 8, 38 6"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.25, ease: EASE_BEZIER }}
      />
      <circle cx="6" cy="6" r="3" fill={color} />
      <path d="M 14 14 L 20 20" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </motion.svg>
  );
};

// 2. Hand-Drawn Notebook Washi Tape Strip
export const DoodleWashiTape: React.FC<{ className?: string; color?: string; text?: string }> = ({
  className = '',
  color = '#F9D601',
  text,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.65, ease: EASE_BEZIER }}
      className={`relative inline-flex items-center justify-center px-4 py-1 select-none pointer-events-none ${className}`}
    >
      <svg
        viewBox="0 0 120 30"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.08)]"
      >
        <path
          d="M 0 0 L 120 2 L 118 28 L 2 30 Z"
          fill={color}
          opacity="0.85"
        />
        {/* Torn edge zigzags */}
        <path
          d="M 0 0 L 3 8 L 0 15 L 4 23 L 0 30"
          stroke="#0C2B80"
          strokeWidth="1"
          strokeOpacity="0.2"
          fill="none"
        />
        <path
          d="M 120 0 L 117 8 L 120 15 L 116 23 L 120 30"
          stroke="#0C2B80"
          strokeWidth="1"
          strokeOpacity="0.2"
          fill="none"
        />
      </svg>
      {text && (
        <span className="relative z-10 font-mono text-[10px] sm:text-xs font-bold text-black uppercase tracking-wider">
          {text}
        </span>
      )}
    </motion.div>
  );
};

// 3. Hand-Drawn Sparkle / Cross-Star
export const DoodleSparkle: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#F9D601',
}) => {
  return (
    <motion.svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{
        scale: [1, 1.15, 1],
        rotate: [0, 8, -8, 0],
      }}
      transition={{
        duration: 6.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`select-none pointer-events-none ${className}`}
    >
      {/* 4-point sparkle with organic curve */}
      <path
        d="M 18 2 C 18 10, 22 18, 34 18 C 22 18, 18 26, 18 34 C 18 26, 14 18, 2 18 C 14 18, 18 10, 18 2 Z"
        fill={color}
      />
      <circle cx="30" cy="6" r="1.5" fill={color} />
      <circle cx="6" cy="30" r="1.5" fill={color} />
    </motion.svg>
  );
};

// 4. Hand-Drawn Sunburst / Radial Spark
export const DoodleBurst: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#080808',
}) => {
  return (
    <motion.svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileInView={{ rotate: [0, 15, 0] }}
      viewport={{ once: false }}
      transition={{ duration: 1.8, ease: EASE_BEZIER }}
      className={`select-none pointer-events-none ${className}`}
    >
      <path d="M 25 4 L 25 12" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M 25 38 L 25 46" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M 4 25 L 12 25" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M 38 25 L 46 25" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M 10 10 L 16 16" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
      <path d="M 34 34 L 40 40" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
      <path d="M 40 10 L 34 16" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
      <path d="M 10 40 L 16 34" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
    </motion.svg>
  );
};

// 5. Hand-Drawn Playful Squiggle Line
export const DoodleSquiggle: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#080808',
}) => {
  return (
    <motion.svg
      viewBox="0 0 100 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
    >
      <motion.path
        d="M 4 14 Q 16 2, 28 14 T 52 14 T 76 14 T 96 12"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.45, ease: EASE_BEZIER }}
      />
    </motion.svg>
  );
};

// 6. Hand-Drawn Floating Idea Cloud
export const DoodleCloud: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#080808',
}) => {
  return (
    <motion.svg
      viewBox="0 0 64 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [-4, 4, -4] }}
      transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
      className={`select-none pointer-events-none ${className}`}
    >
      <motion.path
        d="M 16 36 C 8 36, 4 30, 8 22 C 6 14, 16 8, 24 12 C 28 4, 40 4, 46 10 C 54 8, 60 16, 56 24 C 62 30, 56 36, 48 36 Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.35, ease: EASE_BEZIER }}
      />
    </motion.svg>
  );
};

// 7. Hand-Drawn Idea Lightbulb with Radiating Rays
export const DoodleLightbulb: React.FC<{ className?: string; color?: string; bulbColor?: string }> = ({
  className = '',
  color = '#080808',
  bulbColor = '#F9D601',
}) => {
  return (
    <motion.svg
      viewBox="0 0 54 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ scale: 1.15, rotate: 6 }}
      transition={{ type: 'spring', stiffness: 350 }}
      className={`select-none ${className}`}
    >
      {/* Bulb body */}
      <path
        d="M 17 38 C 12 34, 8 26, 8 19 C 8 9, 16 2, 27 2 C 38 2, 46 9, 46 19 C 46 26, 42 34, 37 38 L 36 46 L 18 46 Z"
        fill={bulbColor}
        fillOpacity="0.3"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Filament */}
      <path d="M 21 24 L 25 15 L 29 24 L 33 15" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Screw base */}
      <path d="M 20 46 L 34 46" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M 22 51 L 32 51" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M 24 56 L 30 56" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
      {/* Radiating idea rays */}
      <path d="M 27 0 L 27 -4" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
      <path d="M 3 10 L -1 7" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 51 10 L 55 7" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </motion.svg>
  );
};

// 8. Hand-Drawn Paper Aeroplane (Flight Path)
export const DoodlePaperPlane: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#F9D601',
}) => {
  return (
    <motion.svg
      viewBox="0 0 90 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [-3, 4, -3], rotate: [-1.5, 2.5, -1.5] }}
      transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut' }}
      className={`select-none pointer-events-none ${className}`}
    >
      {/* Plane */}
      <path
        d="M 40 18 L 84 8 L 60 46 L 50 28 Z"
        fill={color}
        fillOpacity="0.25"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M 84 8 L 50 28" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      {/* Dotted Loop flight trail */}
      <motion.path
        d="M 6 48 C 18 52, 28 36, 18 26 C 10 18, 20 6, 36 14 L 46 20"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.85, ease: EASE_BEZIER }}
      />
    </motion.svg>
  );
};

// 9. Hand-Drawn Target Bullseye
export const DoodleTarget: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#080808',
}) => {
  return (
    <motion.svg
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
    >
      {/* Outer imperfect circle */}
      <circle cx="27" cy="27" r="23" stroke={color} strokeWidth="3" strokeLinecap="round" strokeDasharray="140" />
      {/* Middle circle */}
      <circle cx="27" cy="27" r="14" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
      {/* Center hit dot */}
      <circle cx="27" cy="27" r="5" fill={color} />
      {/* Arrow hit shaft */}
      <path d="M 27 27 L 46 8" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 42 6 L 48 8 L 46 14" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  );
};

// 10. Hand-Drawn 3-Spike Royal Crown
export const DoodleCrown: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#080808',
}) => {
  return (
    <motion.svg
      viewBox="0 0 50 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ y: -3, scale: 1.1 }}
      className={`select-none ${className}`}
    >
      <path
        d="M 6 30 L 8 10 L 20 22 L 25 6 L 30 22 L 42 10 L 44 30 Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="8" cy="8" r="2" fill={color} />
      <circle cx="25" cy="4" r="2" fill={color} />
      <circle cx="42" cy="8" r="2" fill={color} />
      <path d="M 6 30 L 44 30" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </motion.svg>
  );
};

// 11. Hand-Drawn Blast-Off Rocket
export const DoodleRocket: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#080808',
}) => {
  return (
    <motion.svg
      viewBox="0 0 56 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [-3, 4, -3], rotate: [-2, 1.5, -2] }}
      transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut' }}
      className={`select-none ${className}`}
    >
      {/* Rocket fuselage */}
      <path
        d="M 28 4 C 36 12, 42 28, 40 46 L 16 46 C 14 28, 20 12, 28 4 Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Porch window */}
      <circle cx="28" cy="24" r="5" stroke={color} strokeWidth="2.5" />
      {/* Left Fin */}
      <path d="M 16 38 L 6 48 L 16 46" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Right Fin */}
      <path d="M 40 38 L 50 48 L 40 46" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* Flame trail */}
      <path d="M 22 48 L 28 60 L 34 48" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  );
};

// 12. Hand-Drawn Code Tag </>
export const DoodleCodeTag: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#080808',
}) => {
  return (
    <motion.svg
      viewBox="0 0 60 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
    >
      {/* Left bracket < */}
      <path d="M 18 10 L 6 20 L 18 30" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Slash / */}
      <path d="M 34 8 L 24 32" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
      {/* Right bracket > */}
      <path d="M 40 10 L 52 20 L 40 30" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  );
};

// 13. Hand-Drawn Organic Heart
export const DoodleHeart: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#F9D601',
}) => {
  return (
    <motion.svg
      viewBox="0 0 44 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ scale: 1.25 }}
      transition={{ type: 'spring', stiffness: 400 }}
      className={`select-none inline-block ${className}`}
    >
      <path
        d="M 22 10 C 18 2, 4 4, 4 16 C 4 26, 16 32, 22 36 C 28 32, 40 26, 40 16 C 40 4, 26 2, 22 10 Z"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.2"
      />
    </motion.svg>
  );
};

// 14. Hand-Drawn Speech Chat Bubble
export const DoodleChatBubble: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#080808',
}) => {
  return (
    <motion.svg
      viewBox="0 0 54 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ y: -3 }}
      className={`select-none ${className}`}
    >
      <path
        d="M 10 32 L 6 40 L 18 36 C 22 37, 26 38, 30 38 C 42 38, 50 30, 50 20 C 50 10, 42 4, 28 4 C 14 4, 6 11, 6 20 C 6 25, 8 29, 10 32 Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* 3 chat scribbles */}
      <path d="M 16 16 L 36 16" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 16 23 L 30 23" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </motion.svg>
  );
};

// 15. Hand-Drawn Camera / Film Frame
export const DoodleCamera: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#F9D601',
}) => {
  return (
    <motion.svg
      viewBox="0 0 50 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${className}`}
    >
      <rect x="4" y="10" width="42" height="28" rx="6" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <circle cx="25" cy="24" r="8" stroke={color} strokeWidth="3" />
      <circle cx="38" cy="16" r="2" fill={color} />
      <path d="M 14 10 L 18 4 L 28 4 L 32 10" stroke={color} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
    </motion.svg>
  );
};

// 16. Hand-Drawn Sparkling Diamond
export const DoodleDiamond: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#F9D601',
}) => {
  return (
    <motion.svg
      viewBox="0 0 46 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={{ rotate: 15, scale: 1.15 }}
      className={`select-none ${className}`}
    >
      <path
        d="M 12 6 L 34 6 L 42 16 L 23 36 L 4 16 Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M 4 16 L 42 16" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M 16 6 L 20 16 L 23 36" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M 30 6 L 26 16 L 23 36" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </motion.svg>
  );
};

// 17. Hand-Drawn Sketch Compass
export const DoodleCompass: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#080808',
}) => {
  return (
    <motion.svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ rotate: [0, 8, -6, 0] }}
      transition={{ duration: 8.5, repeat: Infinity, ease: 'easeInOut' }}
      className={`select-none pointer-events-none ${className}`}
    >
      <circle cx="25" cy="25" r="21" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M 25 8 L 30 22 L 25 25 L 20 22 Z" fill={color} stroke={color} strokeWidth="1.5" />
      <path d="M 25 42 L 20 28 L 25 25 L 30 28 Z" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="25" cy="25" r="2.5" fill={color} />
    </motion.svg>
  );
};

// 18. Hand-Drawn Imperfect Sketch Border Frame
export const DoodleCardBorder: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#080808',
}) => {
  return (
    <svg
      viewBox="0 0 400 300"
      preserveAspectRatio="none"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      fill="none"
    >
      <path
        d="M 12 18 C 120 14, 280 16, 388 14 C 392 100, 386 210, 390 284 C 270 286, 110 288, 10 284 C 8 200, 14 90, 12 18 Z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="6 4"
        opacity="0.35"
      />
    </svg>
  );
};

// 19. Hand-Drawn 100% Guaranteed Sketch Stamp
export const DoodleBadge100: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#080808',
}) => {
  return (
    <motion.div
      initial={{ scale: 0.9, rotate: -6 }}
      whileInView={{ scale: 1, rotate: -3 }}
      viewport={{ once: false }}
      transition={{ type: 'spring', stiffness: 280 }}
      className={`inline-flex items-center justify-center p-2 rounded-full border-2 border-dashed select-none pointer-events-none ${className}`}
      style={{ borderColor: color }}
    >
      <span className="font-mono text-xs font-black tracking-tighter uppercase px-2 py-0.5" style={{ color }}>
        ★ 100% AGILE
      </span>
    </motion.div>
  );
};
