import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  });

  const [percentage, setPercentage] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setPercentage(Math.round(latest * 100));
      setShowBackToTop(latest > 0.15);
    });
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Animated Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-[3.5px] z-[100] bg-slate-900/40 backdrop-blur-sm pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-tis-gold-500 via-amber-300 to-yellow-400 origin-left shadow-[0_0_12px_rgba(212,175,55,0.7)]"
          style={{ scaleX }}
        />
      </div>

      {/* Floating Read % Pill on Desktop */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: percentage > 5 ? 1 : 0, y: percentage > 5 ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        className="fixed top-4 right-4 z-[90] hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide bg-tis-navy-900/80 border border-tis-gold-500/30 text-tis-gold-400 shadow-lg backdrop-blur-md"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-tis-gold-400 animate-ping" />
        <span>{percentage}% EXP.</span>
      </motion.div>

      {/* Back To Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0.8,
          pointerEvents: showBackToTop ? 'auto' : 'none',
        }}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className="fixed bottom-6 right-6 z-[80] w-11 h-11 rounded-full bg-tis-navy-900/90 border border-tis-gold-500/40 text-tis-gold-400 hover:text-white hover:bg-tis-gold-500 hover:border-tis-gold-400 flex items-center justify-center shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 group"
      >
        <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
      </motion.button>
    </>
  );
};
