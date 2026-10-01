import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Compass, Award, CheckCircle2 } from 'lucide-react';
import { HeroParticles } from './HeroParticles';
import { TIS_STATS } from '../data/tisData';

interface HeroSectionProps {
  onOpenEnquiry: () => void;
  onOpenTour: () => void;
  onOpenVideo: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenEnquiry, onOpenTour, onOpenVideo }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const heroCards = [
    {
      title: 'Equestrian & Horse Riding Arena',
      tag: 'Signature Discipline',
      img: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1000&q=80',
      caption: 'International standard sand track & master dressage trainers'
    },
    {
      title: '22-Acre Serene Himalayan Campus',
      tag: 'Pollution-Free Valley',
      img: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80',
      caption: 'Dehradun foothills with panoramic mountain vistas'
    },
    {
      title: 'STEM, Robotics & Innovation Labs',
      tag: 'Future-Ready Pedagogy',
      img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=80',
      caption: 'AI coding workstations & advanced science experimentation'
    },
    {
      title: 'Olympic Swimming & 16+ Sports',
      tag: 'Athletic Excellence',
      img: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&w=1000&q=80',
      caption: 'All-weather 6-lane pool & national champion coaches'
    }
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-6 pb-16 lg:py-20">
      {/* Background Deep Gradients & Radial Mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030c1b] via-[#07162c] to-[#030c1b] pointer-events-none" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-tis-gold-500/10 rounded-full blur-3xl pointer-events-none animate-ambient-drift" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-ambient-drift" style={{ animationDelay: '-5s' }} />

      {/* Particle Canvas */}
      <HeroParticles />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Accolade Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tis-gold-500/10 border border-tis-gold-500/30 text-tis-gold-300 text-xs font-semibold mb-6 shadow-sm backdrop-blur-md badge-shine relative overflow-hidden"
            >
              <Award className="w-4 h-4 text-tis-gold-400 shrink-0" />
              <span>Ranked #1 Co-Ed Boarding School in Uttarakhand</span>
              <span className="w-1.5 h-1.5 rounded-full bg-tis-gold-400" />
              <span className="text-[11px] text-tis-gold-200">Education Today</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-serif font-black tracking-tight text-white leading-[1.12]"
            >
              The Modern Gurukul for <br className="hidden sm:inline" />
              <span className="text-gold-gradient relative inline-block">
                Future Global Leaders
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-tis-gold-400/40" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,10 Q50,0 100,10" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
            </motion.h1>

            {/* Subheading Copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed"
            >
              Immerse your child in an elite residential learning sanctuary across <strong>22 scenic Himalayan acres</strong> in Dehradun. Blending traditional Indian values with world-class CBSE academics, <strong>16+ Olympic sports</strong>, and equestrian excellence.
            </motion.p>

            {/* Key Value Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-300"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-tis-gold-400" />
                <span>Grades IV to XII Residential</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-tis-gold-400" />
                <span>In-House Equestrian Arena</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-tis-gold-400" />
                <span>100% Ivy & Global Placements</span>
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onOpenEnquiry}
                data-cursor="pointer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-tis-gold-500 via-amber-400 to-yellow-500 text-tis-navy-950 shadow-xl shadow-tis-gold-500/25 hover:shadow-tis-gold-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Apply for 2026-27 Session</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenTour}
                data-cursor="view"
                data-cursor-text="CAMPUS 360"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-tis-navy-900/90 hover:bg-tis-navy-800 text-tis-gold-300 border border-tis-gold-500/40 hover:border-tis-gold-400 shadow-md backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <Compass className="w-4 h-4 text-tis-gold-400 animate-spin" style={{ animationDuration: '10s' }} />
                <span>Explore Campus 360°</span>
              </button>

              <button
                onClick={onOpenVideo}
                data-cursor="pointer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-tis-gold-300 transition-colors py-2 px-3 rounded-lg hover:bg-slate-800/40"
              >
                <div className="w-7 h-7 rounded-full bg-tis-gold-500/20 border border-tis-gold-500/50 flex items-center justify-center text-tis-gold-400 shadow-sm">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Campus Reel (2 Min)</span>
              </button>
            </motion.div>

          </div>

          {/* Right Hero Column: Interactive Showcase Card */}
          <div className="lg:col-span-5 relative perspective-1000">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl p-3 sm:p-4 glass-panel shadow-2xl border border-tis-gold-500/30 overflow-hidden group"
            >
              {/* Card Image Container with Dynamic Showcase */}
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-inner">
                <img
                  src={heroCards[activeCardIndex].img}
                  alt={heroCards[activeCardIndex].title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tis-navy-950 via-tis-navy-950/40 to-transparent" />

                {/* Floating Top Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-tis-navy-950/80 text-tis-gold-300 border border-tis-gold-500/40 backdrop-blur-md shadow-md">
                    {heroCards[activeCardIndex].tag}
                  </span>
                </div>

                {/* Live Campus Video Trigger */}
                <button
                  onClick={onOpenVideo}
                  data-cursor="pointer"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-tis-gold-500 text-tis-navy-950 flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                  title="Watch Video"
                >
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </button>

                {/* Bottom Card Meta */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[11px] font-mono font-medium text-tis-gold-400 uppercase tracking-widest">
                    Dehradun, India
                  </span>
                  <h3 className="text-xl font-bold text-white font-serif mt-0.5">
                    {heroCards[activeCardIndex].title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {heroCards[activeCardIndex].caption}
                  </p>
                </div>
              </div>

              {/* Interactive Card Navigator Dots / Thumbnails */}
              <div className="mt-3.5 grid grid-cols-4 gap-2">
                {heroCards.map((card, idx) => (
                  <button
                    key={card.title}
                    onClick={() => setActiveCardIndex(idx)}
                    className={`relative rounded-xl p-1 text-left transition-all duration-300 ${
                      activeCardIndex === idx
                        ? 'ring-2 ring-tis-gold-400 bg-tis-gold-500/10'
                        : 'opacity-60 hover:opacity-100 bg-tis-navy-900/60'
                    }`}
                  >
                    <div className="h-10 rounded-lg overflow-hidden">
                      <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-[9px] font-medium text-slate-200 truncate mt-1 text-center">
                      {card.tag.split(' ')[0]}
                    </p>
                  </button>
                ))}
              </div>

              {/* Floating Real-time Enrolment Notice */}
              <div className="mt-3 pt-3 border-t border-tis-gold-500/20 flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold text-white">2026-27 Enrolment</span>
                </div>
                <span className="text-tis-gold-400 font-mono font-bold">LIMITED SEATS</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Floating Quick Stats Counter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 lg:mt-16 rounded-2xl glass-panel p-6 border border-tis-gold-500/30 shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-tis-gold-500/15">
            {TIS_STATS.map((stat, index) => (
              <div key={stat.label} className={`text-center ${index !== 0 ? 'pt-4 md:pt-0 md:pl-6' : ''}`}>
                <div className="text-3xl sm:text-4xl font-serif font-black text-gold-gradient tracking-tight">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
