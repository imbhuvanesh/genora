import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onStartProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 pt-4 sm:pt-6">
      <div 
        className={`max-w-7xl mx-auto rounded-full px-5 sm:px-7 py-3 sm:py-3.5 flex items-center justify-between transition-all duration-300 ${
          scrolled 
            ? 'bg-[#0C2B80]/90 backdrop-blur-xl border border-white/20 shadow-[0_10px_35px_rgba(12,43,128,0.5)]' 
            : 'bg-[#0C2B80]/60 backdrop-blur-md border border-white/15 shadow-sm'
        }`}
      >
        {/* Brand Logo */}
        <a 
          href="#"
          className="flex items-center space-x-2.5 text-white group select-none"
        >
          <div className="w-8 h-8 rounded-xl bg-white text-black flex items-center justify-center font-display font-black text-sm shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-transform group-hover:scale-105">
            N
          </div>
          <span className="font-display font-bold text-base sm:text-lg tracking-tight text-white">
            NEXUS<span className="text-zinc-400 font-normal">STUDIO</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1.5 lg:space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs lg:text-sm font-medium text-zinc-300 hover:text-white px-3.5 py-1.5 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={onStartProject}
            className="group relative inline-flex items-center space-x-2 bg-white text-black font-display text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_4px_20px_rgba(255,255,255,0.25)] hover:shadow-[0_6px_25px_rgba(255,255,255,0.4)] transition-all duration-200 hover:scale-[1.02] active:scale-95"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center space-x-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden mt-3 max-w-7xl mx-auto bg-[#0C2B80]/95 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 shadow-2xl text-white"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-white/80 hover:text-white py-2 border-b border-white/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onStartProject();
                  }}
                  className="w-full py-3 bg-[#DFEF87] text-black font-display text-sm font-bold rounded-2xl flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start a Project</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
