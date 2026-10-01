import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SPORTS_COLLECTION } from '../data/tisData';
import { Trophy, Target, Flame, ArrowRight, Check } from 'lucide-react';

export const SportsEquestrianSection: React.FC<{ onOpenEnquiry: () => void }> = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 16+ Sports' },
    { id: 'precision', label: 'Precision & Royal' },
    { id: 'olympic', label: 'Olympic Tracks' },
    { id: 'team', label: 'Field & Team' },
  ];

  const filteredSports = selectedCategory === 'all'
    ? SPORTS_COLLECTION
    : SPORTS_COLLECTION.filter((s) => s.category === selectedCategory);

  return (
    <section id="sports" className="relative py-20 lg:py-28 bg-[#030c1b] overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 right-0 w-[35rem] h-[35rem] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tis-gold-500/10 border border-tis-gold-500/30 text-tis-gold-400 text-xs font-bold uppercase tracking-widest">
            <Trophy className="w-3.5 h-3.5" />
            <span>Sports Infrastructure & Athletic Glory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white mt-3 tracking-tight">
            16+ Olympic & Signature <br />
            <span className="text-gold-gradient">Sports Academies</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed font-normal">
            Physical vigor is central to the Modern Gurukul. TIS is proud to host North India's finest in-house equestrian arena, 10m precision shooting range, all-weather swimming pool, and floodlit cricket stadium.
          </p>
        </div>

        {/* Spotlight Showcase: Royal Equestrian & Shooting */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Equestrian Banner Card */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-tis-gold-500/40 shadow-2xl relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-30" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&q=80')` }} />
            <div className="absolute inset-0 bg-gradient-to-r from-tis-navy-950 via-tis-navy-950/90 to-tis-navy-950/40" />

            <div className="relative z-10 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tis-gold-500 text-tis-navy-950 text-xs font-black uppercase tracking-wider mb-4 shadow-md">
                <Flame className="w-3.5 h-3.5" />
                <span>Signature Discipline</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                The Royal Equestrian Riding Academy
              </h3>
              <p className="text-tis-gold-300 text-sm font-medium mt-2">
                Dressage, Show Jumping & Equine Psychology
              </p>
              <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed max-w-xl font-normal">
                TIS houses 15 thoroughbred horses in dedicated stables with on-campus veterinary care and international sand arenas. Students develop posture, confidence, empathy, and regal mastery under national equestrian coaches.
              </p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-slate-900/80 p-2.5 rounded-xl border border-tis-gold-500/20">
                  <div className="text-[10px] font-mono text-tis-gold-400">ARENA SIZE</div>
                  <div className="text-xs font-bold text-white">International Reg.</div>
                </div>
                <div className="bg-slate-900/80 p-2.5 rounded-xl border border-tis-gold-500/20">
                  <div className="text-[10px] font-mono text-tis-gold-400">STABLES</div>
                  <div className="text-xs font-bold text-white">15 Thoroughbreds</div>
                </div>
                <div className="bg-slate-900/80 p-2.5 rounded-xl border border-tis-gold-500/20 col-span-2 sm:col-span-1">
                  <div className="text-[10px] font-mono text-tis-gold-400">COACHING</div>
                  <div className="text-xs font-bold text-white">Master Horsemen</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-tis-gold-500/20 relative z-10 flex items-center justify-between">
              <span className="text-xs text-slate-300">Included in Boarding Curriculum</span>
              <button
                onClick={onOpenEnquiry}
                className="text-xs font-bold text-tis-gold-400 hover:text-tis-gold-300 flex items-center gap-1"
              >
                <span>Enroll in Riding Club</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Shooting Range Card */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 sm:p-8 border border-tis-gold-500/40 shadow-2xl relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-25" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=800&q=80')` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-tis-navy-950 via-tis-navy-950/90 to-tis-navy-950/40" />

            <div className="relative z-10 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-slate-950 text-xs font-black uppercase tracking-wider mb-4 shadow-md">
                <Target className="w-3.5 h-3.5" />
                <span>Precision Academy</span>
              </div>
              <h3 className="text-2xl font-bold font-serif text-white">
                10m Precision Air Rifle Range
              </h3>
              <p className="text-emerald-300 text-sm font-medium mt-1">
                Breathing, Focus & National Medals
              </p>
              <p className="text-slate-300 text-xs sm:text-sm mt-3 leading-relaxed font-normal">
                Equipped with Olympic electronic scoring targets and Feinwerkbau precision rifles. Students regularly compete at Uttarakhand State and CBSE National Shooting Meets.
              </p>

              <div className="mt-5 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Electronic Target Scoring System</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Certified National Level Marksmanship Coach</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-tis-gold-500/20 relative z-10 flex items-center justify-between">
              <span className="text-xs text-slate-300">Olympic Standard Safety</span>
              <button
                onClick={onOpenEnquiry}
                className="text-xs font-bold text-tis-gold-400 hover:text-tis-gold-300 flex items-center gap-1"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Filter Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-tis-gold-500 text-tis-navy-950 shadow-md shadow-tis-gold-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sports Collection Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredSports.map((sport) => (
              <motion.div
                key={sport.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-panel rounded-2xl p-4 border border-tis-gold-500/20 hover:border-tis-gold-500/60 shadow-lg transition-all duration-300 hover:-translate-y-1 group text-left flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 rounded-xl overflow-hidden mb-3.5">
                    <img src={sport.image} alt={sport.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-tis-navy-950/80 to-transparent" />
                    {sport.badge && (
                      <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-tis-gold-500 text-tis-navy-950 shadow-sm">
                        {sport.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="text-base font-bold text-white font-serif">{sport.name}</h4>
                  <p className="text-xs text-tis-gold-300 font-medium mt-0.5">{sport.tagline}</p>
                  <p className="text-[11px] text-slate-300 mt-2 line-clamp-2 leading-relaxed font-normal">{sport.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap gap-1.5">
                  {sport.features.map((feat, i) => (
                    <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-900/90 text-slate-300 border border-slate-700">
                      {feat}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
