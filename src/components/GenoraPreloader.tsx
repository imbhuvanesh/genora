import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion';

interface GenoraPreloaderProps {
  onComplete?: () => void;
}

const EASE_WOBBLE = [0.34, 1.56, 0.64, 1] as const;
const EASE_SETTLE = [0.19, 1, 0.22, 1] as const;

export const GenoraPreloader: React.FC<GenoraPreloaderProps> = ({ onComplete }) => {
  const shouldReduceMotion = useReducedMotion();
  // Starts directly with the typography animation without initial white screen delay
  const [phase, setPhase] = useState<'morph' | 'settled' | 'exit' | 'done'>('morph');

  useEffect(() => {
    // Lock body scrolling while preloader is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Sequence timeline:
    // Starts directly with fluid typography morph & staggered letter wave from 0s
    // At ~1.8s: Final elastic settle into perfectly sharp, stable logo
    const t1 = setTimeout(() => {
      setPhase('settled');
    }, shouldReduceMotion ? 200 : 1800);

    // At ~2.4s: Exit transition via smooth circular wipe revealing the site
    const t2 = setTimeout(() => {
      setPhase('exit');
    }, shouldReduceMotion ? 350 : 2400);

    // At ~2.85s: Complete, restore scrolling and unmount
    const t3 = setTimeout(() => {
      setPhase('done');
      document.body.style.overflow = originalOverflow;
      if (onComplete) onComplete();
    }, shouldReduceMotion ? 450 : 2850);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = originalOverflow;
    };
  }, [shouldReduceMotion, onComplete]);

  if (phase === 'done') return null;

  // Individual letter animation variants with playful fluid jelly wobble
  const letterVariants: Variants = {
    initial: {
      scale: 1,
      scaleY: 1,
      scaleX: 1,
      y: 0,
      opacity: 1,
    },
    morph: (i: number) => ({
      scale: [1, 1.06, 0.97, 1.02, 1],
      scaleY: [1, 1.15, 0.92, 1.03, 1],
      scaleX: [1, 0.91, 1.07, 0.98, 1],
      y: [0, -16, 5, -2, 0],
      transition: {
        duration: shouldReduceMotion ? 0.2 : 1.4,
        delay: shouldReduceMotion ? 0 : i * 0.08,
        ease: EASE_WOBBLE,
      },
    }),
    settled: {
      scale: 1,
      scaleY: 1,
      scaleX: 1,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: EASE_SETTLE,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        key="genora-preloader-overlay"
        initial={{
          clipPath: 'circle(150% at 50% 50%)',
        }}
        animate={
          phase === 'exit'
            ? {
                clipPath: 'circle(0% at 50% 50%)',
                transition: { duration: 0.45, ease: [0.77, 0, 0.175, 1] as const },
              }
            : {
                clipPath: 'circle(150% at 50% 50%)',
              }
        }
        className="fixed inset-0 z-[99999] bg-[#3670FF] flex flex-col items-center justify-center select-none overflow-hidden"
        style={{ willChange: 'clip-path' }}
      >
        <div className="relative w-full max-w-[1020px] px-4 sm:px-8 md:px-12 flex flex-col items-center justify-center overflow-visible">
          
          {/* Main Logo Container — Immediately visible */}
          <motion.div
            initial={{ scale: 0.95, opacity: 1 }}
            animate={{
              scale: phase === 'exit' ? 1.08 : phase === 'settled' ? 1 : 0.98,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              ease: [0.19, 1, 0.22, 1],
            }}
            className="w-full flex items-center justify-center overflow-visible"
          >
            {/*
              CUSTOM VECTOR ORGANIC BUBBLE TYPOGRAPHY: GENORA
              Inspired by chunky 70s psych-rock bubble lettering.
              Color: Radiant Golden #F9D601 on Ultramarine Blue #3670FF background.
              Directly visible with fluid stretching and organic settling.
            */}
            <svg
              viewBox="-40 -30 1180 350"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto max-h-[38vh] overflow-visible drop-shadow-[0_20px_50px_rgba(23,23,23,0.35)]"
            >
              <defs>
                {/* Radiant Golden Gradient from Reference Palette */}
                <linearGradient id="genoraGolden" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF275" />
                  <stop offset="50%" stopColor="#F9D601" />
                  <stop offset="100%" stopColor="#E5BE00" />
                </linearGradient>
              </defs>

              <g>
                {/* =========================================================
                    LETTER 1: 'G' (Chunky capital G with bold upright & inward crossbar)
                   ========================================================= */}
                <motion.g
                  custom={0}
                  variants={letterVariants}
                  initial="initial"
                  animate={phase === 'morph' ? 'morph' : 'settled'}
                  style={{ transformBox: 'fill-box', transformOrigin: 'center center' }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M170 75C155 38 132 26 106 26C48 26 16 72 16 148C16 224 48 270 108 270C165 270 205 236 212 188L214 135C214 122 204 115 190 115L120 115C108 115 98 125 98 138C98 151 108 161 120 161L162 161C164 176 162 188 154 198C142 212 128 216 108 216C74 216 64 184 64 148C64 112 76 80 108 80C128 80 144 88 152 98C160 108 174 104 178 92C181 83 177 78 170 75Z"
                    fill="#FFFFFF"
                  />
                </motion.g>

                {/* =========================================================
                    LETTER 2: 'E' (Curved squishy spine with 3 pillowy arms)
                   ========================================================= */}
                <motion.g
                  custom={1}
                  variants={letterVariants}
                  initial="initial"
                  animate={phase === 'morph' ? 'morph' : 'settled'}
                  style={{ transformBox: 'fill-box', transformOrigin: 'center center' }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M238 36C286 30 351 27 361 65C367 88 351 100 327 104C306 107 286 108 282 121C298 118 319 117 336 124C351 130 353 147 344 157C333 169 312 170 283 171C282 187 286 196 306 197C327 198 349 190 365 181C372 177 379 184 377 196C373 224 356 257 318 266C276 276 235 264 223 224C210 183 213 99 220 60C223 43 230 37 238 36Z"
                    fill="#FFFFFF"
                  />
                </motion.g>

                {/* =========================================================
                    LETTER 3: 'N' (Plump bulbous pillars & fluid diagonal)
                   ========================================================= */}
                <motion.g
                  custom={2}
                  variants={letterVariants}
                  initial="initial"
                  animate={phase === 'morph' ? 'morph' : 'settled'}
                  style={{ transformBox: 'fill-box', transformOrigin: 'center center' }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M400 42C420 36 443 46 447 67C451 86 452 110 455 137C471 105 494 65 519 44C541 26 569 36 575 64C581 92 578 189 576 228C575 251 558 265 539 264C520 263 514 246 515 226C517 195 519 152 520 131C503 162 478 210 456 241C442 260 422 267 408 255C394 245 392 226 393 202C396 156 395 89 392 58C391 50 394 45 400 42Z"
                    fill="#FFFFFF"
                  />
                </motion.g>

                {/* =========================================================
                    LETTER 4: 'O' (Tilted plump pebble with organic counter)
                   ========================================================= */}
                <motion.g
                  custom={3}
                  variants={letterVariants}
                  initial="initial"
                  animate={phase === 'morph' ? 'morph' : 'settled'}
                  style={{ transformBox: 'fill-box', transformOrigin: 'center center' }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M682 30C736 28 782 65 784 120C786 177 756 249 697 268C639 285 587 254 577 197C567 139 591 60 652 37C662 33 673 31 682 30ZM680 89C653 90 631 117 633 153C635 192 652 215 677 214C703 213 725 186 723 150C721 113 705 88 680 89Z"
                    fill="#FFFFFF"
                  />
                </motion.g>

                {/* =========================================================
                    LETTER 5: 'R' (Huge round head with sweeping flared leg)
                   ========================================================= */}
                <motion.g
                  custom={4}
                  variants={letterVariants}
                  initial="initial"
                  animate={phase === 'morph' ? 'morph' : 'settled'}
                  style={{ transformBox: 'fill-box', transformOrigin: 'center center' }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M804 38C853 31 922 32 928 80C933 117 913 145 875 155C895 172 915 201 929 234C940 256 926 272 906 269C888 266 874 251 863 230C848 202 833 179 818 175C813 174 811 179 811 189C810 210 810 241 808 254C807 266 797 272 784 269C772 266 767 254 767 239C769 187 769 95 774 59C777 44 788 40 804 38ZM813 87C812 105 812 126 813 138C829 138 853 136 862 126C871 116 874 102 869 92C862 80 840 81 824 83C819 84 815 85 813 87Z"
                    fill="#FFFFFF"
                  />
                </motion.g>

                {/* =========================================================
                    LETTER 6: 'A' (Plump dome with splayed feet & drop counter)
                   ========================================================= */}
                <motion.g
                  custom={5}
                  variants={letterVariants}
                  initial="initial"
                  animate={phase === 'morph' ? 'morph' : 'settled'}
                  style={{ transformBox: 'fill-box', transformOrigin: 'center center' }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1000 28C1038 26 1067 51 1072 87C1078 128 1080 198 1085 238C1087 256 1074 269 1055 268C1037 267 1029 252 1027 234C1025 216 1023 202 1022 190C1001 191 974 192 958 194C955 210 952 230 948 244C942 261 928 270 911 266C897 262 891 247 896 229C905 187 929 101 959 55C970 38 985 30 1000 28ZM996 91C983 116 971 148 965 165C980 163 1000 161 1015 160C1013 141 1011 120 1007 100C1005 91 1000 86 996 91Z"
                    fill="#FFFFFF"
                  />
                </motion.g>
              </g>
            </svg>
          </motion.div>


        </div>
      </motion.div>
    </AnimatePresence>
  );
};
