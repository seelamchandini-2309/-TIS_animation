import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Compass, X } from 'lucide-react';

interface FloatingActionsProps {
  onOpenEnquiry: () => void;
  onOpenTour: () => void;
}

export const FloatingQuickActions: React.FC<FloatingActionsProps> = ({ onOpenTour }) => {
  const [showChatPreview, setShowChatPreview] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-[80] flex flex-col items-start gap-3">
      
      {/* WhatsApp Interactive Chat Prompt */}
      <AnimatePresence>
        {showChatPreview && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            className="p-4 rounded-2xl glass-panel border border-emerald-500/40 shadow-2xl bg-tis-navy-950/95 max-w-xs text-left mb-1"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold text-white">TIS Admissions Cell</span>
              </div>
              <button
                onClick={() => setShowChatPreview(false)}
                className="text-slate-400 hover:text-white p-0.5"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              👋 Namaste! Are you inquiring about 2026-27 Boarding Admissions for Grades IV-XII?
            </p>
            <div className="mt-3 flex gap-2">
              <a
                href="https://wa.me/919837983791?text=Hi%20Tula's%20International%20School,%20I%20would%20like%20to%20know%20more%20about%20admissions."
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white text-center flex items-center justify-center gap-1.5 transition-colors shadow-md"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Open WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Buttons */}
      <div className="flex items-center gap-2.5">
        <button
          onClick={() => setShowChatPreview(!showChatPreview)}
          title="Chat on WhatsApp"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all border border-emerald-400/40 group relative"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-tis-navy-950 animate-pulse" />
        </button>

        <a
          href="tel:+919837983791"
          title="Call Admissions Hotline"
          className="hidden sm:flex w-11 h-11 rounded-full bg-tis-navy-900 hover:bg-tis-navy-800 text-tis-gold-300 border border-tis-gold-500/40 items-center justify-center shadow-xl hover:scale-105 transition-all"
        >
          <Phone className="w-5 h-5 text-tis-gold-400" />
        </a>

        <button
          onClick={onOpenTour}
          title="360° Campus Tour"
          className="hidden md:flex px-3.5 py-2.5 rounded-full bg-tis-navy-900/90 hover:bg-tis-navy-800 text-tis-gold-300 border border-tis-gold-500/40 items-center gap-1.5 text-xs font-bold shadow-xl hover:scale-105 transition-all"
        >
          <Compass className="w-4 h-4 text-tis-gold-400 animate-spin" style={{ animationDuration: '8s' }} />
          <span>360° Tour</span>
        </button>
      </div>

    </div>
  );
};
