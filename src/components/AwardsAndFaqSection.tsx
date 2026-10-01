import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AWARDS_LIST, FAQS } from '../data/tisData';
import { Award, ChevronDown, HelpCircle, ShieldCheck, Trophy, Star } from 'lucide-react';

const iconMap = {
  Award,
  Trophy,
  Star,
  ShieldCheck,
};

export const AwardsAndFaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="relative py-20 lg:py-28 bg-[#030c1b] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Awards Badges Showcase */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tis-gold-500/10 border border-tis-gold-500/30 text-tis-gold-400 text-xs font-bold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>National Accreditations & Rankings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white mt-3 tracking-tight">
            Recognized Among <br />
            <span className="text-gold-gradient">India's Premier Boarding Schools</span>
          </h2>
        </div>

        {/* Awards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AWARDS_LIST.map((award, idx) => {
            const IconComp = iconMap[award.icon as keyof typeof iconMap] || Award;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 border border-tis-gold-500/30 text-center flex flex-col items-center justify-between hover:border-tis-gold-500 transition-colors shadow-lg group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-tis-gold-500/20 to-amber-500/20 border border-tis-gold-500/40 flex items-center justify-center text-tis-gold-400 mb-4 group-hover:scale-110 transition-transform">
                  <IconComp className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-tis-gold-500/10 text-tis-gold-300 border border-tis-gold-500/20">
                    {award.badge}
                  </span>
                  <h4 className="text-base font-bold text-white font-serif mt-2.5">
                    {award.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 font-medium">
                    {award.organization}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 w-full text-[11px] font-mono text-tis-gold-400 font-bold">
                  {award.year}
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQs Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tis-gold-500/10 border border-tis-gold-500/30 text-tis-gold-400 text-xs font-bold uppercase tracking-widest">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif mt-2">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl glass-panel border border-tis-gold-500/20 overflow-hidden transition-all text-left"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white font-serif">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-tis-gold-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
