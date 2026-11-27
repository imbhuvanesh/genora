import React, { useState } from 'react';
import { Send, CheckCircle, Clock, MessageSquare, Mail, ArrowUpRight } from 'lucide-react';
import { MaskedLineReveal, FadeUpParagraph, FadeUpText, SlowHighlight } from '../AnimatedText';

const servicesList = [
  'Web Development',
  'App & Software',
  'Creative Design',
  'Video Production',
  'Digital Marketing',
  'Automation Solutions',
];

interface ContactSectionProps {
  preselectedService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || 'Web Development',
    description: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [prevService, setPrevService] = useState(preselectedService);
  if (preselectedService && preselectedService !== prevService) {
    setPrevService(preselectedService);
    setFormData(prev => ({ ...prev, service: preselectedService }));
  }

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Valid email address is required';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.description.trim() || formData.description.length < 10) {
      errs.description = 'Please describe your project (minimum 10 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="relative w-full py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 text-white bg-transparent select-none overflow-hidden">
      {/* Subtle Tech Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 pb-5 border-b border-white/20">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-2.5">
              <FadeUpText delay={0.05} className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-[#39ff14] font-bold text-xs tracking-wider uppercase">
                <span>Let's Collaborate</span>
              </FadeUpText>
            </div>
            
            <div className="flex items-center space-x-3">
              <MaskedLineReveal
                lines={["HAVE A PROJECT IN MIND?", "START A CONVERSATION."]}
                className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.12]"
                delay={0.1}
              />
            </div>
          </div>
          
          <div className="mt-3 md:mt-0 max-w-md">
            <FadeUpParagraph
              className="text-sm sm:text-base text-white/90 font-normal font-sans leading-relaxed"
              delay={0.25}
            >
              Let's turn your ideas into something extraordinary. Tell us about your goals and our partners will reply with a detailed project proposal <SlowHighlight dark>within 2 hours</SlowHighlight>.
            </FadeUpParagraph>
          </div>
        </div>

        {/* =========================================================================
            PARENT CONTAINER WITH TIGHT BALANCED SPACING
           ========================================================================= */}
        <div className="relative bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 border border-[#3670FF]/15 shadow-card-soft text-black overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start relative z-10">

            {/* Left Column: Direct Channels & Guarantee */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">

              {/* Card 1: Fast Response Guarantee */}
              <div className="bg-[#EFEFEF] rounded-[28px] p-6 sm:p-7 border border-[#3670FF]/10 shadow-sm">
                <div className="w-10 h-10 rounded-2xl bg-[#3670FF] text-white flex items-center justify-center mb-3.5 shadow-md">
                  <Clock className="w-5 h-5 text-[#39ff14]" />
                </div>
                <h3 className="font-sans font-bold text-lg sm:text-xl text-black">
                  Fast-Track Discovery
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-black/75 leading-relaxed font-normal font-sans">
                  No automated ticket queues or endless back-and-forth. You speak directly with our senior creative technologist and growth director.
                </p>

                <div className="mt-4 pt-3.5 border-t border-[#3670FF]/15 flex items-center space-x-2 text-xs font-bold text-emerald-600 font-sans">
                  <span>Available for New Client Projects</span>
                </div>
              </div>

              {/* Card 2: Direct WhatsApp Chat */}
              <a
                href="https://wa.me/15551234567?text=Hello%20Genora%20Studio%2C%20I%20have%20a%20project%20in%20mind!"
                target="_blank"
                rel="noreferrer"
                className="bg-[#EFEFEF] rounded-[28px] p-5 sm:p-6 border border-emerald-300 shadow-sm hover:shadow-md transition-all duration-300 group flex items-center justify-between"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md">
                    <MessageSquare className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-[10.5px] font-bold uppercase tracking-wider text-emerald-600 font-sans">Direct Chat</div>
                    <div className="font-sans font-bold text-sm sm:text-base text-black">Chat on WhatsApp</div>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 group-hover:bg-emerald-500 group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>

              {/* Card 3: Direct Email */}
              <a
                href="mailto:hello@genora.agency"
                className="bg-[#EFEFEF] rounded-[28px] p-5 sm:p-6 border border-[#3670FF]/10 shadow-sm hover:shadow-md transition-all duration-300 group flex items-center justify-between"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#3670FF] text-white flex items-center justify-center shadow-md">
                    <Mail className="w-5 h-5 stroke-[2] text-[#39ff14]" />
                  </div>
                  <div>
                    <div className="text-[10.5px] font-bold uppercase tracking-wider text-black/60 font-sans">Email Directly</div>
                    <div className="font-sans font-bold text-xs sm:text-sm text-black break-all">hello@genora.agency</div>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#3670FF] text-black group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>

            </div>

            {/* Right Column: Clean Interactive Form */}
            <div className="lg:col-span-7 bg-[#EFEFEF] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 border border-[#3670FF]/10 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#39ff14] text-black flex items-center justify-center mb-4 shadow-md">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-sans font-bold text-2xl text-black">
                    Proposal Request Received!
                  </h3>
                  <p className="font-sans font-normal text-sm text-black/75 max-w-md mt-2 leading-relaxed">
                    Thank you, {formData.name}. Our partners have received your project details for <span className="font-bold text-[#3670FF]">{formData.service}</span>. We will review your goals and email you a tailored project proposal within 2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'Web Development',
                        description: '',
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full bg-[#3670FF] text-white text-xs font-bold font-sans hover:bg-[#2256DB] transition-colors"
                  >
                    Submit Another Project
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Select Service Pills */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-2 font-sans">
                      Select Required Service *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {servicesList.map((svc) => (
                        <button
                          type="button"
                          key={svc}
                          onClick={() => setFormData(prev => ({ ...prev, service: svc }))}
                          className={`text-xs font-sans px-3.5 py-1.5 rounded-xl transition-all duration-200 cursor-pointer ${
                            formData.service === svc
                              ? 'bg-[#3670FF] text-white font-bold shadow-md'
                              : 'bg-white text-black font-normal hover:bg-[#3670FF]/15'
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1 font-sans">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Alex Rivera"
                        value={formData.name}
                        onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm font-sans text-black focus:outline-none focus:ring-2 focus:ring-[#3670FF] transition-all ${
                          errors.name ? 'border-red-400' : 'border-[#3670FF]/15'
                        }`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1 font-sans">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1 font-sans">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm font-sans text-black focus:outline-none focus:ring-2 focus:ring-[#3670FF] transition-all ${
                          errors.email ? 'border-red-400' : 'border-[#3670FF]/15'
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1 font-sans">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone Number Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1 font-sans">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm font-sans text-black focus:outline-none focus:ring-2 focus:ring-[#3670FF] transition-all ${
                        errors.phone ? 'border-red-400' : 'border-[#3670FF]/15'
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 font-sans">{errors.phone}</p>}
                  </div>

                  {/* Project Details Textarea */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black mb-1 font-sans">
                      Project Goals &amp; Requirements *
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe what you'd like to build, your goals, or current bottlenecks..."
                      value={formData.description}
                      onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm font-sans text-black focus:outline-none focus:ring-2 focus:ring-[#3670FF] transition-all ${
                        errors.description ? 'border-red-400' : 'border-[#3670FF]/15'
                      }`}
                    />
                    {errors.description && <p className="text-red-500 text-xs mt-1 font-sans">{errors.description}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#39ff14] hover:bg-white text-black hover:text-black font-sans font-bold text-xs sm:text-sm py-3.5 rounded-full shadow-[0_8px_25px_rgba(57, 255, 20,0.35)] hover:shadow-[0_12px_35px_rgba(255,255,255,0.45)] transition-all hover:scale-[1.008] active:scale-98 flex items-center justify-center space-x-2 mt-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Your Request...</span>
                    ) : (
                      <>
                        <span>Submit Project Proposal Request</span>
                        <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
