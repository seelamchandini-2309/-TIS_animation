import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CampusVideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeClipIndex, setActiveClipIndex] = useState(0);

  const videoClips = [
    {
      title: 'Himalayan Campus & Serene Valley Aerial View',
      duration: '0:45',
      thumbnail: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
      description: 'Experience 22 lush green acres in the foothills of Mussoorie, Dehradun.'
    },
    {
      title: 'Equestrian Arena & Show Jumping Championship',
      duration: '1:10',
      thumbnail: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&q=80',
      description: 'Watch TIS student riders train under national master equestrians.'
    },
    {
      title: 'Smart STEM Robotics & AI Innovation Showcase',
      duration: '0:50',
      thumbnail: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
      description: 'Hands-on coding, 3D printing and robotic rover creation in our central lab.'
    }
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[130] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Video Reel Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl glass-panel rounded-3xl border border-tis-gold-500/50 shadow-2xl z-10 flex flex-col overflow-hidden bg-tis-navy-950"
        >
          {/* Header */}
          <div className="p-4 sm:px-6 bg-tis-navy-950 border-b border-tis-gold-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
              <span className="text-xs font-mono font-bold text-tis-gold-400 uppercase">
                TIS Experience Reel • 2026
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-tis-navy-900 border border-tis-gold-500/30 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Simulated Video Stage */}
          <div className="relative h-72 sm:h-[420px] bg-black overflow-hidden flex items-center justify-center group">
            <img
              src={videoClips[activeClipIndex].thumbnail}
              alt={videoClips[activeClipIndex].title}
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

            {/* Center Play/Pause Overlay */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute w-16 h-16 rounded-full bg-tis-gold-500/90 text-tis-navy-950 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
            >
              {isPlaying ? <Pause className="w-7 h-7 fill-current" /> : <Play className="w-7 h-7 fill-current ml-1" />}
            </button>

            {/* Video Meta Overlay */}
            <div className="absolute bottom-4 left-4 right-4 text-left">
              <span className="text-xs font-mono font-bold text-tis-gold-400 uppercase">
                Clip {activeClipIndex + 1} of {videoClips.length} • {videoClips[activeClipIndex].duration}
              </span>
              <h4 className="text-lg sm:text-xl font-bold font-serif text-white mt-0.5">
                {videoClips[activeClipIndex].title}
              </h4>
              <p className="text-xs text-slate-300 mt-1 max-w-xl line-clamp-1">
                {videoClips[activeClipIndex].description}
              </p>
            </div>
          </div>

          {/* Bottom Video Playlist Thumbnails */}
          <div className="p-4 bg-tis-navy-950 border-t border-tis-gold-500/20 grid grid-cols-3 gap-3">
            {videoClips.map((clip, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveClipIndex(idx);
                  setIsPlaying(true);
                }}
                className={`p-2 rounded-xl text-left border transition-all flex items-center gap-2.5 ${
                  activeClipIndex === idx
                    ? 'bg-tis-gold-500/20 border-tis-gold-400 text-white ring-1 ring-tis-gold-400'
                    : 'bg-tis-navy-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
                  <img src={clip.thumbnail} alt={clip.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[11px] font-bold truncate text-white">{clip.title}</div>
                  <div className="text-[9px] font-mono text-tis-gold-400">{clip.duration}</div>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
