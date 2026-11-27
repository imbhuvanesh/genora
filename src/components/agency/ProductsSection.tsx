import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Package,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Palette,
  Terminal,
  ShieldCheck,
  Zap,
  Info,
  X,
  ExternalLink,
} from 'lucide-react';
import { productsData } from '../../data/agencyData';
import type { ProductItem } from '../../data/agencyData';
import { MaskedLineReveal, FadeUpParagraph, FadeUpText } from '../AnimatedText';

const productIcons: Record<string, React.ElementType> = {
  'genora-starter-suite': Package,
  'nexus-starter-suite': Package,
  'autoflow-crm-hub': Layers,
  'brandbox-design-system': Palette,
  'omnisync-billing-pos': Terminal,
  'synapse-copilot-rag': Zap,
  'saas-launchpad-pro': ShieldCheck,
};

export const ProductsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProductModal, setSelectedProductModal] = useState<ProductItem | null>(null);

  const categories = [
    'All',
    'Digital Infrastructure',
    'Automation & AI',
    'Branding & Creative',
  ];

  const filteredProducts = activeCategory === 'All'
    ? productsData
    : productsData.filter((p) => p.category === activeCategory);

  const handleInquire = (product: ProductItem) => {
    navigate('/contact', { state: { prefillService: `Product inquiry: ${product.name}` } });
  };

  return (
    <section id="products" className="relative w-full py-8 sm:py-12 md:py-16 px-4 sm:px-8 text-white bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 border-b border-white/20">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-3">
              <FadeUpText delay={0.05} className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-[#DFEF87] font-bold text-xs tracking-wider uppercase">
                <Package className="w-3.5 h-3.5" />
                <span>Proprietary Toolkits &amp; Frameworks</span>
              </FadeUpText>
            </div>

            <MaskedLineReveal
              lines={["PRE-ENGINEERED DIGITAL", "PRODUCTS & ACCELERATORS."]}
              className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.12]"
              delay={0.1}
            />
          </div>

          <div className="mt-4 md:mt-0 max-w-md">
            <FadeUpParagraph
              className="text-sm sm:text-base text-white/90 font-medium font-sans leading-relaxed"
              delay={0.25}
            >
              Battle-tested tools, software engines, and pre-built design systems crafted by Genora Studio to help companies launch in days instead of months.
            </FadeUpParagraph>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-sans tracking-wide transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#DFEF87] text-black font-bold shadow-md scale-[1.02]'
                  : 'bg-white/15 text-white/90 hover:bg-white/25 font-medium'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* =========================================================================
            PRODUCTS GRID (3 COLUMN RESPONSIVE)
           ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {filteredProducts.map((product, idx) => {
            const Icon = productIcons[product.id] || Package;

            return (
              <div key={product.id} className="relative group">
                <motion.div
                  initial={{
                    clipPath: shouldReduceMotion ? 'none' : 'inset(0% 0% 16% 0% round 24px)',
                    opacity: shouldReduceMotion ? 1 : 0,
                    y: shouldReduceMotion ? 0 : 28,
                  }}
                  whileInView={{
                    clipPath: shouldReduceMotion ? 'none' : 'inset(0% 0% 0% 0% round 32px)',
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: shouldReduceMotion ? 0.01 : 0.85,
                    delay: shouldReduceMotion ? 0 : (idx % 3) * 0.1,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.35, ease: [0.19, 1, 0.22, 1] } }}
                  className="relative h-full bg-white rounded-[32px] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-card-soft hover:shadow-card-hover border border-[#3670FF]/15 text-black overflow-hidden"
                  style={{ willChange: 'clip-path, transform, opacity' }}
                >
                  <div className="relative z-10">
                    {/* Top Row: Icon + Status Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#3670FF]/10 text-[#3670FF] flex items-center justify-center shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10.5px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#DFEF87] text-black border border-[#0C2B80]/[0.08]">
                        {product.badge}
                      </span>
                    </div>

                    {/* Metric Highlight Pill */}
                    <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#EFEFEF] text-black text-[11px] font-mono font-medium mb-3">
                      <span className="text-[#3670FF] font-bold">{product.previewStats.label}:</span>
                      <span>{product.previewStats.value}</span>
                    </div>

                    {/* Product Name */}
                    <h3 className="font-sans text-xl sm:text-[22px] font-bold tracking-tight text-black leading-snug">
                      {product.name}
                    </h3>

                    {/* Tagline */}
                    <p className="font-sans text-xs sm:text-[13px] text-black/75 font-medium mt-1 leading-snug">
                      {product.tagline}
                    </p>

                    {/* Description */}
                    <p className="font-sans text-xs text-black/65 mt-2.5 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {product.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#EFEFEF] text-black border border-[#0C2B80]/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Key Features List */}
                    <div className="mt-4 pt-3.5 border-t border-[#0C2B80]/[0.08] space-y-1.5">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-black">
                        Core Highlights
                      </div>
                      {product.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-2 text-xs text-black/85">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#3670FF] shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Area */}
                  <div className="relative z-10 mt-6 pt-4 border-t border-[#0C2B80]/[0.08] flex flex-col space-y-2.5">
                    <div className="text-[11px] font-mono text-black/60 truncate">
                      {product.pricingPlaceholder}
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleInquire(product)}
                        className="flex-1 group/btn bg-[#0C2B80] hover:bg-[#3670FF] text-white py-2.5 px-3.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-200 flex items-center justify-center space-x-1.5 shadow-sm cursor-pointer"
                      >
                        <span>{product.ctaText}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </button>

                      <button
                        onClick={() => setSelectedProductModal(product)}
                        className="p-2.5 rounded-xl bg-[#EFEFEF] hover:bg-[#3670FF]/15 text-black transition-colors cursor-pointer"
                        title="View Full Architecture Specs"
                      >
                        <Info className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE SPECIFICATION MODAL
         ========================================================================= */}
      <AnimatePresence>
        {selectedProductModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0C2B80]/70 backdrop-blur-md flex items-center justify-center p-4 select-text"
            onClick={() => setSelectedProductModal(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#3670FF]/25 text-black overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProductModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#EFEFEF] hover:bg-[#3670FF] text-black hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#3670FF] font-bold mb-2">
                <span>{selectedProductModal.category}</span>
                <span>•</span>
                <span className="px-2 py-0.5 rounded-full bg-[#DFEF87] text-black">
                  {selectedProductModal.badge}
                </span>
              </div>

              <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-black">
                {selectedProductModal.name}
              </h3>
              <p className="text-black/75 text-sm font-medium mt-1">
                {selectedProductModal.tagline}
              </p>

              <p className="text-black/70 text-xs sm:text-sm mt-3 leading-relaxed">
                {selectedProductModal.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-4 pt-3 border-t border-[#0C2B80]/[0.08]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-2">
                  Architecture &amp; Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProductModal.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-[#EFEFEF] text-black border border-[#0C2B80]/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div className="mt-4 pt-3 border-t border-[#0C2B80]/[0.08]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-2">
                  Deliverables Package Included
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProductModal.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center space-x-2 text-xs text-black/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3670FF] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="mt-6 pt-4 border-t border-[#0C2B80]/[0.08] flex items-center justify-between">
                <span className="text-xs font-mono text-black/60">
                  {selectedProductModal.pricingPlaceholder}
                </span>
                <button
                  onClick={() => {
                    const prod = selectedProductModal;
                    setSelectedProductModal(null);
                    handleInquire(prod);
                  }}
                  className="bg-[#DFEF87] hover:bg-[#3670FF] text-black hover:text-white px-6 py-2.5 rounded-xl text-xs font-bold tracking-tight flex items-center space-x-1.5 transition-all shadow-md cursor-pointer"
                >
                  <span>Inquire for Deployment</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
