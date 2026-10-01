import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CAMPUS_HOTSPOTS } from '../data/tisData';
import type { CampusHotspot } from '../data/tisData';
import { Compass, Eye, MapPin, Check, Volume2, VolumeX, Maximize2, MoveHorizontal, ArrowRight } from 'lucide-react';

interface VirtualTourProps {
  onOpenTourModal: (hotspot?: CampusHotspot) => void;
  onOpenEnquiry: () => void;
}

export const VirtualTour360Section: React.FC<VirtualTourProps> = ({ onOpenTourModal, onOpenEnquiry }) => {
  const [activeSpot, setActiveSpot] = useState<CampusHotspot>(CAMPUS_HOTSPOTS[0]);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Web Audio Synth for Himalayan ambient bird/wind sound
  const toggleAmbientSound = () => {
    if (!isAudioPlaying) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        audioContextRef.current = ctx;

        // Gentle pink noise / mountain breeze filter
        const bufferSize = ctx.sampleRate * 2;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99 * b0 + white * 0.05;
          b1 = 0.96 * b1 + white * 0.05;
          b2 = 0.86 * b2 + white * 0.15;
          data[i] = (b0 + b1 + b2) * 0.04;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.08, ctx.currentTime);

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(400, ctx.currentTime);

        noise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);
        noise.start();

        setIsAudioPlaying(true);
      } catch (e) {
        console.error('Audio init error', e);
      }
    } else {
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
      setIsAudioPlaying(false);
    }
  };

  return (
    <section id="campus-tour" className="relative py-20 lg:py-28 bg-[#030c1b] overflow-hidden">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-tis-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tis-gold-500/10 border border-tis-gold-500/30 text-tis-gold-400 text-xs font-bold uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5 text-tis-gold-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Interactive Campus Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white mt-3 tracking-tight">
              Explore Our <span className="text-gold-gradient">22-Acre Dehradun Campus</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl font-normal">
              Click on the interactive campus hotspots to explore our equestrian arena, Olympic swimming complex, smart robotics labs, and serene Himalayan vistas.
            </p>
          </div>

          {/* Sound Effect & Fullscreen CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleAmbientSound}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-tis-navy-900/90 hover:bg-tis-navy-800 text-slate-300 border border-tis-gold-500/30 flex items-center gap-2 transition-all shadow-md"
              title="Toggle Mountain Atmosphere Sound"
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span>Himalayan Breeze: ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-slate-400" />
                  <span>Ambient Audio: OFF</span>
                </>
              )}
            </button>

            <button
              onClick={() => onOpenTourModal(activeSpot)}
              className="px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-tis-gold-500 to-amber-500 text-tis-navy-950 flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-tis-gold-500/20"
            >
              <Maximize2 className="w-4 h-4" />
              <span>Launch 360° Viewer</span>
            </button>
          </div>
        </div>

        {/* Hotspots Interactive Showcase Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Campus Hotspot Map / Grid */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 border border-tis-gold-500/30 flex flex-col justify-between relative overflow-hidden">
            
            {/* Top Toolbar */}
            <div className="flex items-center justify-between pb-4 border-b border-tis-gold-500/15">
              <span className="text-xs font-mono font-bold text-tis-gold-400 uppercase tracking-widest flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Select Campus Hotspot</span>
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                6 Landmark Hubs
              </span>
            </div>

            {/* Hotspot List / Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6">
              {CAMPUS_HOTSPOTS.map((spot) => {
                const isActive = activeSpot.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setActiveSpot(spot)}
                    className={`relative p-3.5 rounded-2xl text-left transition-all duration-300 flex items-center gap-3.5 border ${
                      isActive
                        ? 'bg-tis-navy-800/95 border-tis-gold-400 ring-2 ring-tis-gold-500/30 shadow-lg'
                        : 'bg-tis-navy-950/60 border-slate-800 hover:border-slate-700 hover:bg-tis-navy-900/60'
                    }`}
                  >
                    <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 relative">
                      <img src={spot.image} alt={spot.title} className="w-full h-full object-cover" />
                      {isActive && (
                        <div className="absolute inset-0 bg-tis-gold-500/20 flex items-center justify-center">
                          <Eye className="w-4 h-4 text-tis-gold-300" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase font-mono font-bold text-tis-gold-400 tracking-wider truncate">
                          {spot.category}
                        </span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-white truncate mt-0.5 font-serif">
                        {spot.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 truncate mt-0.5">
                        {spot.stats}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Bottom Quick Action */}
            <div className="pt-4 border-t border-tis-gold-500/15 flex items-center justify-between">
              <span className="text-xs text-slate-300 flex items-center gap-1.5">
                <MoveHorizontal className="w-4 h-4 text-tis-gold-400" />
                <span>Drag inside 360° viewer for full panoramic rotation</span>
              </span>
              <button
                onClick={() => onOpenTourModal(activeSpot)}
                className="text-xs font-bold text-tis-gold-400 hover:text-tis-gold-300 flex items-center gap-1"
              >
                <span>Full Screen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Right: Active Spot High-Res Preview & Deep Specs */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSpot.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="glass-panel rounded-3xl p-6 border border-tis-gold-500/40 shadow-2xl flex flex-col justify-between h-full relative overflow-hidden group"
              >
                <div>
                  {/* Image with 360 Simulator overlay */}
                  <div
                    onClick={() => onOpenTourModal(activeSpot)}
                    data-cursor="view"
                    data-cursor-text="PAN 360°"
                    className="relative h-64 sm:h-72 rounded-2xl overflow-hidden cursor-pointer shadow-inner group-hover:brightness-105 transition-all"
                  >
                    <img
                      src={activeSpot.image}
                      alt={activeSpot.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-tis-navy-950 via-tis-navy-950/30 to-transparent" />

                    {/* 360 Badge Overlay */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-tis-navy-950/80 border border-tis-gold-400/50 text-tis-gold-300 text-xs font-bold backdrop-blur-md flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-tis-gold-400 animate-spin" style={{ animationDuration: '8s' }} />
                      <span>360° VR Enabled</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[10px] font-mono uppercase font-bold text-tis-gold-400 tracking-widest">
                        {activeSpot.subtitle}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-serif mt-0.5">
                        {activeSpot.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed font-normal">
                    {activeSpot.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {activeSpot.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-200 bg-slate-900/60 p-2 rounded-lg border border-tis-gold-500/10">
                        <Check className="w-3.5 h-3.5 text-tis-gold-400 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-6 pt-4 border-t border-tis-gold-500/15 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Campus Capacity</span>
                    <div className="text-xs font-bold text-tis-gold-300">{activeSpot.stats}</div>
                  </div>
                  <button
                    onClick={onOpenEnquiry}
                    className="px-4 py-2 rounded-xl text-xs font-bold bg-tis-gold-500 text-tis-navy-950 hover:bg-tis-gold-400 transition-colors shadow-md"
                  >
                    Schedule Physical Visit
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
