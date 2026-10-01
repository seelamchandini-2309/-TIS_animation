import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PILLARS_DATA } from '../data/tisData';
import { BrainCircuit, Trophy, Sparkles, Globe2, CheckCircle2, ArrowRight, Quote } from 'lucide-react';

const iconMap = {
  BrainCircuit: BrainCircuit,
  Trophy: Trophy,
  Sparkles: Sparkles,
  Globe2: Globe2,
};

export const WhyGurukulSection: React.FC<{ onOpenEnquiry: () => void }> = ({ onOpenEnquiry }) => {
  const [activeTab, setActiveTab] = useState(PILLARS_DATA[0].id);

  const currentPillar = PILLARS_DATA.find((p) => p.id === activeTab) || PILLARS_DATA[0];
  const IconComponent = iconMap[currentPillar.icon as keyof typeof iconMap] || BrainCircuit;

  return (
    <section id="why-gurukul" className="relative py-20 lg:py-28 bg-tis-navy-950/90 overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-tis-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tis-gold-500/10 border border-tis-gold-500/30 text-tis-gold-400 text-xs font-bold uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Modern Gurukul Ethos</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white mt-4 tracking-tight"
          >
            Where Ancient Wisdom Meets <br />
            <span className="text-gold-gradient">21st-Century Innovation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed font-normal"
          >
            At Tula's International School, education is not confined to textbooks. We revive the sacred Vedic Gurukul model with contemporary pedagogical infrastructure across four foundational pillars.
          </motion.p>
        </div>

        {/* 4 Pillars Interactive Tab Selector */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {PILLARS_DATA.map((pillar) => {
            const isSelected = activeTab === pillar.id;
            const TabIcon = iconMap[pillar.icon as keyof typeof iconMap] || BrainCircuit;

            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`relative p-4 rounded-2xl text-left transition-all duration-300 flex flex-col items-start gap-2.5 border ${
                  isSelected
                    ? 'bg-tis-navy-800/90 border-tis-gold-400 shadow-xl shadow-tis-gold-500/15'
                    : 'bg-tis-navy-900/40 border-slate-800 hover:border-slate-700 hover:bg-tis-navy-900/70'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activePillarGlow"
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-tis-gold-500/15 to-transparent pointer-events-none"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'bg-gradient-to-br from-tis-gold-500 to-amber-600 text-tis-navy-950 shadow-md'
                      : 'bg-slate-800/80 text-tis-gold-400'
                  }`}
                >
                  <TabIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-xs font-mono font-bold tracking-wider uppercase ${isSelected ? 'text-tis-gold-400' : 'text-slate-400'}`}>
                    Pillar
                  </div>
                  <div className={`text-base font-bold font-serif ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                    {pillar.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Deep Dive Showcase */}
        <div className="mt-8 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPillar.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-panel rounded-3xl p-6 sm:p-10 border border-tis-gold-500/30 shadow-2xl relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Content */}
                <div className="lg:col-span-7 flex flex-col items-start text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-tis-gold-500/20 border border-tis-gold-500/40 flex items-center justify-center text-tis-gold-400">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-semibold text-tis-gold-400 uppercase tracking-widest">
                        Holistic Dimension
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
                        {currentPillar.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-tis-gold-300/90 font-medium text-sm mt-3">
                    {currentPillar.tagline}
                  </p>

                  <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed font-normal">
                    {currentPillar.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="mt-6 space-y-3 w-full">
                    {currentPillar.bullets.map((bullet, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-900/40 border border-tis-gold-500/15"
                      >
                        <CheckCircle2 className="w-4 h-4 text-tis-gold-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-200 font-medium">{bullet}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote Banner */}
                  <div className="mt-6 p-4 rounded-xl bg-tis-gold-500/10 border-l-4 border-tis-gold-500 flex items-start gap-3">
                    <Quote className="w-5 h-5 text-tis-gold-400 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-tis-gold-200 italic font-serif">
                      "{currentPillar.quote}"
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex items-center gap-4">
                    <button
                      onClick={onOpenEnquiry}
                      className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-tis-gold-500 to-amber-500 text-tis-navy-950 flex items-center gap-2 hover:brightness-110 shadow-lg shadow-tis-gold-500/20"
                    >
                      <span>Join The Modern Gurukul</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Visual Image */}
                <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-tis-gold-500/30 group">
                  <img
                    src={currentPillar.image}
                    alt={currentPillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tis-navy-950/90 via-tis-navy-950/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-tis-gold-400">
                      TIS Experience
                    </span>
                    <h4 className="text-base font-bold text-white font-serif mt-0.5">
                      {currentPillar.tagline}
                    </h4>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
