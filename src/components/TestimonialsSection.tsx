import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../data/tisData';
import { Quote, Star, Award, GraduationCap } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'parent' | 'alumni' | 'student'>('all');

  const filteredTestimonials = filter === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.relation === filter);

  const topUniversities = [
    'University of Oxford',
    'Stanford University',
    'University of Toronto',
    'IIT Delhi',
    'BITS Pilani',
    'National University of Singapore (NUS)',
    'London School of Economics (LSE)',
    'University of California, Berkeley',
    'Ashoka University',
    'IIT Bombay',
  ];

  return (
    <section id="testimonials" className="relative py-20 lg:py-28 bg-tis-navy-950/90 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tis-gold-500/10 border border-tis-gold-500/30 text-tis-gold-400 text-xs font-bold uppercase tracking-widest">
            <Quote className="w-3.5 h-3.5" />
            <span>Community Stories & Global Success</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white mt-3 tracking-tight">
            Voices of Pride: <br />
            <span className="text-gold-gradient">Parents, Alumni & TISians</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed font-normal">
            Hear from families and graduates who have experienced the transformative power of the Modern Gurukul education.
          </p>
        </div>

        {/* University Placement Marquee Bar */}
        <div className="mt-10 py-4 px-6 rounded-2xl bg-slate-900/60 border border-tis-gold-500/20 overflow-hidden relative">
          <div className="flex items-center gap-4 mb-2 justify-center text-xs font-mono font-bold text-tis-gold-400 uppercase tracking-widest">
            <GraduationCap className="w-4 h-4" />
            <span>Our Alumni Study At World-Class Institutions</span>
          </div>
          <div className="relative flex overflow-x-hidden">
            <div className="py-1 animate-marquee whitespace-nowrap flex gap-8 items-center text-xs font-bold text-slate-300">
              {topUniversities.concat(topUniversities).map((uni, idx) => (
                <span key={idx} className="flex items-center gap-2 text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-tis-gold-400" />
                  <span>{uni}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'parent', label: 'Parent Perspectives' },
            { id: 'alumni', label: 'Alumni Journeys' },
            { id: 'student', label: 'Student Voices' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === item.id
                  ? 'bg-tis-gold-500 text-tis-navy-950 shadow-md shadow-tis-gold-500/20'
                  : 'bg-tis-navy-900/80 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <AnimatePresence>
            {filteredTestimonials.map((t) => (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3 }}
                className="glass-panel rounded-3xl p-6 sm:p-7 border border-tis-gold-500/25 hover:border-tis-gold-500/60 transition-all duration-300 shadow-xl flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-tis-gold-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-tis-gold-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-tis-gold-500/10 text-tis-gold-300 border border-tis-gold-500/30">
                      {t.relation.toUpperCase()}
                    </span>
                  </div>

                  <p className="text-slate-200 text-sm leading-relaxed italic font-serif">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-tis-gold-500/15 flex items-center gap-3.5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-tis-gold-400/50"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white font-serif">{t.name}</h4>
                    <p className="text-xs text-tis-gold-300 font-medium">{t.role}</p>
                    {t.achievement && (
                      <p className="text-[11px] text-emerald-400 mt-0.5 flex items-center gap-1">
                        <Award className="w-3 h-3 shrink-0" />
                        <span>{t.achievement}</span>
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
