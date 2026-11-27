import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/HeroSection';
import { TabContentToggle } from '../components/agency/TabContentToggle';
import { ServicesSection } from '../components/agency/ServicesSection';
import { ProductsSection } from '../components/agency/ProductsSection';
import { WhyChooseUsSection } from '../components/agency/WhyChooseUsSection';
import { ProcessSection } from '../components/agency/ProcessSection';
import { ContactSection } from '../components/agency/ContactSection';
import { ScrollMaskReveal } from '../components/ScrollMaskReveal';
import confetti from 'canvas-confetti';
import { useNavigate } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#39ff14', '#3670FF', '#FFFFFF'],
    });
    navigate('/contact');
  };

  const handleSelectService = (_serviceName: string) => {
    navigate('/contact');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="w-full flex flex-col items-center"
    >
      {/* =========================================================================
          STACKED CONTAINER 1: HERO CONTAINER (ULTRAMARINE BLUE #3670FF)
         ========================================================================= */}
      <ScrollMaskReveal
        id="home"
        delay={0.05}
        duration={1.0}
        threshold={0.1}
        className="w-full max-w-[1260px] bg-[#3670FF] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_25px_80px_rgba(54,112,255,0.35)] border border-white/20 my-3 sm:my-4 overflow-hidden relative"
      >
        <HeroSection
          onGetStarted={handleGetStarted}
          onExploreServices={() => navigate('/services')}
        />
      </ScrollMaskReveal>

      {/* =========================================================================
          STACKED CONTAINER 2: COLLABORATION FRAMEWORK (PURE WHITE #FFFFFF)
         ========================================================================= */}
      <ScrollMaskReveal
        id="framework"
        threshold={0.15}
        duration={1.05}
        className="w-full max-w-[1260px] bg-white rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_20px_60px_-15px_rgba(54,112,255,0.12)] border border-[#3670FF]/15 my-3 sm:my-4 overflow-hidden"
      >
        <TabContentToggle />
      </ScrollMaskReveal>

      {/* =========================================================================
          STACKED CONTAINER 3: CORE DISCIPLINES / SERVICES (GOLDEN #39ff14)
         ========================================================================= */}
      <ScrollMaskReveal
        id="services"
        threshold={0.15}
        duration={1.05}
        className="w-full max-w-[1260px] bg-[#39ff14] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_20px_60px_-15px_rgba(57, 255, 20,0.25)] border border-[#0C2B80]/[0.12] my-3 sm:my-4 overflow-hidden"
      >
        <ServicesSection onSelectService={handleSelectService} />
      </ScrollMaskReveal>

      {/* =========================================================================
          STACKED CONTAINER 4: PROPRIETARY PRODUCTS & TOOLS (ULTRAMARINE BLUE #3670FF)
         ========================================================================= */}
      <ScrollMaskReveal
        id="products"
        threshold={0.15}
        duration={1.05}
        className="w-full max-w-[1260px] bg-[#3670FF] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_25px_80px_rgba(54,112,255,0.35)] border border-white/20 my-3 sm:my-4 overflow-hidden"
      >
        <ProductsSection />
      </ScrollMaskReveal>

      {/* =========================================================================
          STACKED CONTAINER 5: WHY CHOOSE US (PURE WHITE #FFFFFF)
         ========================================================================= */}
      <ScrollMaskReveal
        id="why-us"
        threshold={0.15}
        duration={1.05}
        className="w-full max-w-[1260px] bg-white rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_20px_60px_-15px_rgba(54,112,255,0.12)] border border-[#3670FF]/15 my-3 sm:my-4 overflow-hidden"
      >
        <WhyChooseUsSection />
      </ScrollMaskReveal>

      {/* =========================================================================
          STACKED CONTAINER 6: 4-STAGE AGILE PROCESS (GOLDEN #39ff14)
         ========================================================================= */}
      <ScrollMaskReveal
        id="process"
        threshold={0.15}
        duration={1.05}
        className="w-full max-w-[1260px] bg-[#39ff14] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_20px_60px_-15px_rgba(57, 255, 20,0.25)] border border-[#0C2B80]/[0.12] my-3 sm:my-4 overflow-hidden"
      >
        <ProcessSection />
      </ScrollMaskReveal>

      {/* =========================================================================
          STACKED CONTAINER 7: CONTACT SECTION (ULTRAMARINE BLUE #3670FF)
         ========================================================================= */}
      <ScrollMaskReveal
        id="contact"
        threshold={0.15}
        duration={1.05}
        className="w-full max-w-[1260px] bg-[#3670FF] rounded-[36px] sm:rounded-[48px] md:rounded-[56px] shadow-[0_25px_80px_rgba(54,112,255,0.35)] border border-white/20 my-3 sm:my-4 overflow-hidden"
      >
        <ContactSection preselectedService="Web Development" />
      </ScrollMaskReveal>
    </motion.div>
  );
};
