import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DAILY_ROUTINE } from '../data/tisData';
import type { DayScheduleItem } from '../data/tisData';
import { Sun, Utensils, BookOpen, Coffee, Activity, Palette, Moon, Sparkles, Shield, HeartPulse, Home, Apple } from 'lucide-react';

const iconMap = {
  Sun,
  Utensils,
  BookOpen,
  Coffee,
  Activity,
  Palette,
  Moon,
  Sparkles
};

export const BoardingLifeSection: React.FC<{ onOpenEnquiry: () => void }> = ({ onOpenEnquiry }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeItem: DayScheduleItem = DAILY_ROUTINE[activeStepIndex];
  const IconComponent = iconMap[activeItem.iconName as keyof typeof iconMap] || Sun;

  return (
    <section id="boarding" className="relative py-20 lg:py-28 bg-tis-navy-950/95 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tis-gold-500/10 border border-tis-gold-500/30 text-tis-gold-400 text-xs font-bold uppercase tracking-widest">
            <Home className="w-3.5 h-3.5" />
            <span>Residential Boarding Sanctuary</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white mt-3 tracking-tight">
            A Home Away from Home <br />
            <span className="text-gold-gradient">A Day in the Life of a TISian</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed font-normal">
            Boarding at Tula's International School is an immersive lifestyle of camaraderie, self-reliance, balanced nutrition, and structured holistic growth.
          </p>
        </div>

        {/* 24-Hour Interactive Timeline Scroller */}
        <div className="mt-12 max-w-5xl mx-auto">
          
          {/* Timeline Step Indicators */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none justify-start md:justify-center">
            {DAILY_ROUTINE.map((item, idx) => {
              const isCurrent = activeStepIndex === idx;
              return (
                <button
                  key={item.time}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`relative px-4 py-2.5 rounded-xl text-xs font-bold shrink-0 transition-all flex items-center gap-2 border ${
                    isCurrent
                      ? 'bg-tis-gold-500 text-tis-navy-950 border-tis-gold-400 shadow-md shadow-tis-gold-500/20'
                      : 'bg-tis-navy-900/60 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <span className="font-mono text-[11px]">{item.time.split(' ')[0]}</span>
                  <span className="hidden sm:inline font-sans">{item.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Schedule Card */}
          <div className="mt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.time}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="glass-panel rounded-3xl p-6 sm:p-10 border border-tis-gold-500/30 shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Content */}
                  <div className="lg:col-span-7 flex flex-col items-start text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-tis-gold-500/20 border border-tis-gold-500/40 flex items-center justify-center text-tis-gold-400">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-tis-gold-400 tracking-wider">
                          TIMETABLE SLOT: {activeItem.time}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                          {activeItem.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed font-normal">
                      {activeItem.description}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-tis-gold-300 border border-tis-gold-500/20">
                        Supervised by Resident Mentors
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-tis-gold-300 border border-tis-gold-500/20">
                        Zero Mobile Device Distractions
                      </span>
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                      <button
                        onClick={() => setActiveStepIndex((prev) => (prev + 1) % DAILY_ROUTINE.length)}
                        className="px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 transition-colors"
                      >
                        Next Routine Step →
                      </button>
                      <button
                        onClick={onOpenEnquiry}
                        className="px-5 py-2.5 rounded-xl text-xs font-bold bg-tis-gold-500 text-tis-navy-950 hover:bg-tis-gold-400 transition-colors shadow-md"
                      >
                        Book Hostel Tour
                      </button>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border border-tis-gold-500/30">
                    <img
                      src={activeItem.image}
                      alt={activeItem.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-tis-navy-950/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[10px] font-mono text-tis-gold-400 uppercase font-bold">
                        Gurukul Routine
                      </span>
                      <div className="text-sm font-bold text-white font-serif mt-0.5">
                        {activeItem.time} - {activeItem.title}
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* 4 Pillars of Boarding Care */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-left">
          
          <div className="p-6 rounded-2xl glass-panel border border-tis-gold-500/20 hover:border-tis-gold-500/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-tis-gold-500/20 flex items-center justify-center text-tis-gold-400 mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white font-serif">4-Tier Security</h4>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
              Biometric access, 24/7 CCTV surveillance across all corridors, and round-the-clock trained security wardens.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-tis-gold-500/20 hover:border-tis-gold-500/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-tis-gold-500/20 flex items-center justify-center text-tis-gold-400 mb-3">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white font-serif">24/7 Medical Care</h4>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
              In-house 10-bed infirmary with resident doctor, registered nurses, and dedicated ambulance on campus.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-tis-gold-500/20 hover:border-tis-gold-500/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-tis-gold-500/20 flex items-center justify-center text-tis-gold-400 mb-3">
              <Apple className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white font-serif">Organic Nutrition</h4>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
              Pure farm-to-table cuisine prepared with fresh produce, certified hygiene, and customized dietary supervision.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-tis-gold-500/20 hover:border-tis-gold-500/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-tis-gold-500/20 flex items-center justify-center text-tis-gold-400 mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white font-serif">Pastoral Housemasters</h4>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
              Resident teachers live alongside students, providing academic tutoring, emotional guidance, and family warmth.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
