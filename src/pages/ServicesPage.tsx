import React from 'react';
import { motion } from 'framer-motion';
import { ServicesSection } from '../components/agency/ServicesSection';
import { ProcessSection } from '../components/agency/ProcessSection';
import { WhyChooseUsSection } from '../components/agency/WhyChooseUsSection';
import { DoodleStar, DoodleUnderline, DoodleCorner } from '../components/Doodles';
import { MaskedLineReveal, FadeUpParagraph } from '../components/AnimatedText';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectService = (_serviceName: string) => {
    navigate('/contact');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="w-full flex flex-col items-center"
    >
      {/* =========================================================================
          PAGE HERO BANNER: DEDICATED SERVICES HEADER (ULTRAMARINE BLUE #3670FF)
         ========================================================================= */}
      <div className="w-full max-w-[1260px] bg-[#3670FF] hero-grid rounded-[36px] sm:rounded-[48px] md:rounded-[56px] p-6 sm:p-10 md:p-12 text-white text-center shadow-[0_25px_80px_rgba(54,112,255,0.35)] border border-white/20 my-2 sm:my-3 relative overflow-hidden">
        {/* Hand-Drawn Container Corners */}
        <div className="absolute top-3 left-4 z-20 opacity-70 pointer-events-none">
          <DoodleCorner position="top-left" color="#39ff14" className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>
        <div className="absolute top-3 right-4 z-20 opacity-70 pointer-events-none">
          <DoodleCorner position="top-right" color="#39ff14" className="w-8 h-8 sm:w-10 sm:h-10" />
        </div>
        
        {/* Ambient Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-[#39ff14] text-xs font-bold uppercase tracking-wider mb-4">
          <span>Complete Digital Capabilities</span>
          <DoodleStar className="w-3.5 h-3.5 text-[#39ff14]" />
        </div>

        <MaskedLineReveal
          lines={["OUR 8 CORE DISCIPLINES", "& DIGITAL SERVICES."]}
          className="font-sans text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl mx-auto"
          delay={0.1}
        />

        <div className="max-w-2xl mx-auto mt-4">
          <FadeUpParagraph
            className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed font-normal"
            delay={0.25}
          >
            We provide full-lifecycle digital capabilities across web engineering, mobile apps, ERP &amp; CRM systems, custom software, AI &amp; ML automation, brand design, cinematic video production, and performance marketing — all under one roof.
          </FadeUpParagraph>
          <DoodleUnderline className="w-56 h-4 text-[#39ff14] mx-auto mt-3" />
        </div>

        {/* 8 Disciplines Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-sans font-semibold">
          {[
            'Web Design & Development',
            'Mobile App Development',
            'ERP, CRM & POS Systems',
            'Custom Software & SaaS',
            'AI, ML & Automation',
            'Creative Design & Branding',
            'Video Production & Motion',
            'Digital Marketing & SEO Ads',
          ].map((item) => (
            <div key={item} className="px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 text-white flex items-center space-x-1.5">
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main 6 Service Categories Container (Golden #39ff14 Stacked Card) */}
      <div className="w-full max-w-[1260px] bg-[#39ff14] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_20px_60px_-15px_rgba(57, 255, 20,0.25)] border border-[#0C2B80]/[0.12] my-2 sm:my-3 overflow-hidden">
        <ServicesSection onSelectService={handleSelectService} />
      </div>

      {/* 4-Stage Agile Delivery Process (Pure White #FFFFFF) */}
      <div className="w-full max-w-[1260px] bg-white rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_20px_60px_-15px_rgba(54,112,255,0.12)] border border-[#3670FF]/15 my-2 sm:my-3 overflow-hidden">
        <ProcessSection />
      </div>

      {/* Why Choose Us (Ultramarine Blue #3670FF) */}
      <div className="w-full max-w-[1260px] bg-[#3670FF] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_25px_80px_rgba(54,112,255,0.35)] border border-white/20 my-2 sm:my-3 overflow-hidden">
        <WhyChooseUsSection />
      </div>

      {/* Bottom Conversion Callout (Pure White #FFFFFF) */}
      <div className="w-full max-w-[1260px] bg-white rounded-[36px] sm:rounded-[48px] p-8 sm:p-12 text-black text-center shadow-[0_20px_60px_-15px_rgba(54,112,255,0.12)] border border-[#3670FF]/15 my-2 sm:my-3">
        <h3 className="font-sans font-bold text-2xl sm:text-4xl text-black mb-3">
          Need a Custom Solution for Your Brand?
        </h3>
        <p className="text-black/80 text-sm sm:text-base max-w-xl mx-auto mb-6">
          Schedule a discovery call with our team. We'll audit your digital ecosystem and outline a custom roadmap.
        </p>
        <button
          onClick={() => navigate('/contact')}
          className="px-7 py-3.5 rounded-full bg-[#39ff14] hover:bg-[#3670FF] text-black hover:text-white font-sans font-bold text-sm tracking-tight inline-flex items-center space-x-2 shadow-lg transition-colors cursor-pointer"
        >
          <span>Request Custom Proposal</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};
