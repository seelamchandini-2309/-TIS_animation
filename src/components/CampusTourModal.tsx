import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Compass, ZoomIn, ZoomOut, MoveHorizontal, MapPin, Play, Pause } from 'lucide-react';
import { CAMPUS_HOTSPOTS } from '../data/tisData';
import type { CampusHotspot } from '../data/tisData';

interface CampusTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialHotspot?: CampusHotspot;
}

export const CampusTourModal: React.FC<CampusTourModalProps> = ({ isOpen, onClose, initialHotspot }) => {
  const [currentSpot, setCurrentSpot] = useState<CampusHotspot>(initialHotspot || CAMPUS_HOTSPOTS[0]);
  const [panOffset, setPanOffset] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const currentPanRef = useRef(0);

  useEffect(() => {
    if (initialHotspot) {
      setCurrentSpot(initialHotspot);
    }
  }, [initialHotspot]);

  // Auto rotate loop
  useEffect(() => {
    if (!isOpen || !isAutoRotate || isDragging) return;
    const interval = setInterval(() => {
      setPanOffset((prev) => (prev + 0.15) % 100);
    }, 30);
    return () => clearInterval(interval);
  }, [isOpen, isAutoRotate, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsAutoRotate(false);
    dragStartX.current = e.clientX;
    currentPanRef.current = panOffset;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = (e.clientX - dragStartX.current) * 0.15;
    setPanOffset((currentPanRef.current - deltaX + 100) % 100);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-2 sm:p-6 overflow-hidden select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* 360 Viewer Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          className="relative w-full max-w-6xl h-[88vh] glass-panel rounded-3xl border border-tis-gold-500/50 shadow-2xl z-10 flex flex-col overflow-hidden bg-tis-navy-950"
        >
          {/* Top Bar */}
          <div className="p-4 sm:px-6 bg-tis-navy-950/90 border-b border-tis-gold-500/20 flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-tis-gold-500/20 border border-tis-gold-500/40 flex items-center justify-center text-tis-gold-400">
                <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: '10s' }} />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-tis-gold-400 uppercase">
                    360° Interactive Campus Panorama
                  </span>
                  <span className="px-2 py-0.2 rounded-full text-[10px] bg-emerald-500/20 text-emerald-300 font-bold">
                    LIVE SIMULATION
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-serif">
                  {currentSpot.title}
                </h3>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsAutoRotate(!isAutoRotate)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-colors ${
                  isAutoRotate
                    ? 'bg-tis-gold-500/20 border-tis-gold-400 text-tis-gold-300'
                    : 'bg-slate-900 border-slate-700 text-slate-400'
                }`}
              >
                {isAutoRotate ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{isAutoRotate ? 'Auto-Pan On' : 'Paused'}</span>
              </button>

              <button
                onClick={() => setZoomLevel((prev) => Math.min(prev + 0.2, 1.8))}
                title="Zoom In"
                className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
              >
                <ZoomIn className="w-4 h-4" />
              </button>

              <button
                onClick={() => setZoomLevel((prev) => Math.max(prev - 0.2, 1))}
                title="Zoom Out"
                className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
              >
                <ZoomOut className="w-4 h-4" />
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-tis-gold-500/20 border border-tis-gold-500/50 text-tis-gold-300 hover:text-white hover:bg-tis-gold-500/40 ml-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Interactive 360 Viewport */}
          <div
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            data-cursor="drag"
            data-cursor-text="DRAG 360°"
            className="relative flex-1 cursor-grab active:cursor-grabbing overflow-hidden bg-slate-950 flex items-center justify-center"
          >
            {/* Panoramic Image with continuous shift effect */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-75 ease-out"
              style={{
                backgroundImage: `url(${currentSpot.image})`,
                backgroundPosition: `${panOffset}% center`,
                transform: `scale(${zoomLevel})`,
              }}
            />

            {/* Subtle Vignette & Grid HUD */}
            <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
            <div className="absolute inset-0 border border-white/10 pointer-events-none m-4 rounded-2xl" />

            {/* Center Reticle / Compass HUD */}
            <div className="absolute top-4 left-4 p-3 rounded-2xl bg-tis-navy-950/80 border border-tis-gold-500/30 text-tis-gold-300 backdrop-blur-md pointer-events-none flex items-center gap-2 text-xs">
              <MoveHorizontal className="w-4 h-4 text-tis-gold-400 animate-pulse" />
              <span>Click & Drag anywhere to pan 360° horizontally</span>
            </div>

            {/* Hotspot Floating Marker */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="absolute pointer-events-none px-4 py-2 rounded-2xl bg-tis-navy-950/90 border border-tis-gold-400 text-white shadow-2xl backdrop-blur-md flex items-center gap-2 text-xs font-bold font-serif"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span>{currentSpot.title}</span>
            </motion.div>

            {/* Compass Azimuth Pill */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-tis-navy-950/80 border border-tis-gold-500/30 text-tis-gold-400 text-xs font-mono font-bold backdrop-blur-md">
              HEADING: {Math.round((panOffset / 100) * 360)}° {panOffset < 25 ? 'N' : panOffset < 50 ? 'E' : panOffset < 75 ? 'S' : 'W'}
            </div>

            {/* Bottom Info Floating Card */}
            <div className="absolute bottom-20 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md p-4 rounded-2xl glass-panel border border-tis-gold-500/40 text-left backdrop-blur-xl shadow-2xl pointer-events-auto">
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-tis-gold-400">
                {currentSpot.category} | {currentSpot.stats}
              </div>
              <h4 className="text-base font-bold text-white font-serif mt-0.5">{currentSpot.title}</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">{currentSpot.description}</p>
            </div>
          </div>

          {/* Bottom Hotspots Selector Rail */}
          <div className="p-3 bg-tis-navy-950 border-t border-tis-gold-500/20 z-20 flex items-center gap-2 overflow-x-auto scrollbar-none">
            {CAMPUS_HOTSPOTS.map((spot) => {
              const isSelected = currentSpot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setCurrentSpot(spot)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-tis-gold-500 text-tis-navy-950 border-tis-gold-400 shadow-md'
                      : 'bg-tis-navy-900 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{spot.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
