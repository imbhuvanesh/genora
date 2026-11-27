import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ProductsSection } from '../components/agency/ProductsSection';
import { DoodleStar, DoodleUnderline, DoodleCorner, DoodleSparkle } from '../components/Doodles';
import { MaskedLineReveal, FadeUpParagraph } from '../components/AnimatedText';
import { ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="w-full flex flex-col items-center"
    >
      {/* =========================================================================
          PAGE HERO BANNER: DEDICATED PRODUCTS HEADER (PURE WHITE #FFFFFF)
         ========================================================================= */}
      <div className="w-full max-w-[1260px] bg-white rounded-[36px] sm:rounded-[48px] md:rounded-[56px] p-6 sm:p-10 md:p-14 text-black text-center shadow-[0_20px_60px_-15px_rgba(54,112,255,0.12)] border border-[#3670FF]/15 my-2 sm:my-3 relative overflow-hidden">
        {/* Hand-Drawn Container Corners */}
        <div className="absolute top-3 left-4 z-20 opacity-70 pointer-events-none">
          <DoodleCorner position="top-left" color="#3670FF" className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>
        <div className="absolute top-3 right-4 z-20 opacity-70 pointer-events-none">
          <DoodleCorner position="top-right" color="#3670FF" className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>

        {/* Ambient Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#3670FF]/10 border border-[#3670FF]/20 text-[#3670FF] text-xs font-bold uppercase tracking-wider mb-4">
          <span>Production-Grade Accelerators</span>
          <DoodleStar className="w-3.5 h-3.5 text-[#F9D601]" />
        </div>

        <MaskedLineReveal
          lines={["PROPRIETARY DIGITAL TOOLS", "& ACCELERATION PACKAGES."]}
          className="font-sans text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-black leading-[1.08] max-w-4xl mx-auto"
          delay={0.1}
        />

        <div className="max-w-2xl mx-auto mt-4">
          <FadeUpParagraph
            className="text-black/80 text-sm sm:text-base md:text-lg leading-relaxed font-normal"
            delay={0.25}
          >
            Pre-built frameworks, automation engines, and production-tested toolkits engineered to accelerate your launch, cut development cycles by 70%, and scale without friction.
          </FadeUpParagraph>
          <DoodleUnderline className="w-56 h-4 text-[#F9D601] mx-auto mt-3" />
        </div>

        {/* Highlights Row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-black/85">
          <div className="flex items-center space-x-1.5 bg-[#EFEFEF] border border-[#3670FF]/10 px-3.5 py-1.5 rounded-full">
            <Zap className="w-3.5 h-3.5 text-[#3670FF]" />
            <span>Rapid 7-Day Deployment</span>
          </div>
          <div className="flex items-center space-x-1.5 bg-[#EFEFEF] border border-[#3670FF]/10 px-3.5 py-1.5 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-[#3670FF]" />
            <span>Commercial-Ready Codebase</span>
          </div>
          <div className="flex items-center space-x-1.5 bg-[#EFEFEF] border border-[#3670FF]/10 px-3.5 py-1.5 rounded-full">
            <DoodleSparkle color="#F9D601" className="w-3.5 h-3.5" />
            <span>Full Developer Handoff</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          STACKED CONTAINER 2: PRODUCTS SHOWCASE GRID (ULTRAMARINE BLUE #3670FF)
         ========================================================================= */}
      <div className="w-full max-w-[1260px] bg-[#3670FF] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_25px_80px_rgba(54,112,255,0.35)] border border-white/20 my-2 sm:my-3 overflow-hidden">
        <ProductsSection />
      </div>

      {/* =========================================================================
          STACKED CONTAINER 3: CUSTOM REQUIREMENTS CTA (GOLDEN #F9D601)
         ========================================================================= */}
      <div className="w-full max-w-[1260px] bg-[#F9D601] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] p-8 sm:p-10 md:p-12 text-black shadow-[0_20px_60px_-15px_rgba(249,214,1,0.25)] border border-[#0C2B80]/[0.12] my-2 sm:my-3 relative overflow-hidden text-center flex flex-col items-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#0C2B80]/10 border border-[#0C2B80]/20 text-black text-xs font-bold uppercase tracking-wider mb-3">
          <span>Need Something Custom?</span>
        </div>
        <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black max-w-xl">
          We engineer bespoke digital solutions tailored to your unique requirements.
        </h2>
        <p className="text-black/80 text-sm sm:text-base max-w-lg mt-3">
          From custom SaaS platforms and ERP automation to bespoke mobile apps, our team brings enterprise engineering directly to your business.
        </p>
        <button
          onClick={() => navigate('/contact')}
          className="mt-6 bg-[#3670FF] text-white hover:bg-[#2256DB] px-8 py-3.5 rounded-full text-sm font-bold tracking-tight transition-all duration-300 shadow-md flex items-center space-x-2 group cursor-pointer"
        >
          <span>Discuss Custom Architecture</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </motion.div>
  );
};
