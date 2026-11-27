import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const FloatingBackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.scrollY > 200;
  });
  const shouldReduceMotion = useReducedMotion();

  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > 200);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: shouldReduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="fixed bottom-6 right-6 z-50 group flex items-center justify-center w-12 h-12 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#39ff14]/50 rounded-full bg-[#0C2B80] hover:bg-[#39ff14] text-[#39ff14] hover:text-black border border-white/20 hover:border-[#39ff14] shadow-[0_8px_30px_rgba(12,43,128,0.4)] hover:shadow-[0_8px_30px_rgba(57, 255, 20,0.5)] transition-all duration-300"
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          
          {/* Minimal Tooltip */}
          <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#0C2B80] text-white text-[10px] font-sans font-medium tracking-wide px-2 py-0.5 rounded-md border border-white/10 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            Back to Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
