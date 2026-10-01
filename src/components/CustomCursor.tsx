import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover' | 'text' | 'view' | 'drag'>('default');
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const dotSpringConfig = { damping: 40, stiffness: 800, mass: 0.1 };
  const dotX = useSpring(mouseX, dotSpringConfig);
  const dotY = useSpring(mouseY, dotSpringConfig);

  useEffect(() => {
    // Only activate for non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor');
        const text = cursorTarget.getAttribute('data-cursor-text') || '';

        if (type === 'view') {
          setCursorVariant('view');
          setCursorText(text || 'EXPLORE');
        } else if (type === 'drag') {
          setCursorVariant('drag');
          setCursorText(text || 'DRAG 360°');
        } else if (type === 'pointer') {
          setCursorVariant('hover');
          setCursorText('');
        }
      } else if (target.closest('button, a, input, select, textarea, [role="button"]')) {
        setCursorVariant('hover');
        setCursorText('');
      } else {
        setCursorVariant('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2 rounded-full border border-tis-gold-400/80 transition-opacity duration-300 backdrop-blur-[1px]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          width: cursorVariant === 'view' || cursorVariant === 'drag' ? 84 : cursorVariant === 'hover' ? 52 : 36,
          height: cursorVariant === 'view' || cursorVariant === 'drag' ? 84 : cursorVariant === 'hover' ? 52 : 36,
          backgroundColor: cursorVariant === 'view' || cursorVariant === 'drag' 
            ? 'rgba(212, 175, 55, 0.92)' 
            : cursorVariant === 'hover' 
              ? 'rgba(212, 175, 55, 0.2)' 
              : 'rgba(212, 175, 55, 0.05)',
          scale: 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      >
        {cursorText && (
          <span className="text-[10px] font-bold tracking-widest text-tis-navy-950 uppercase px-1 text-center font-sans">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Precise Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-tis-gold-400 shadow-[0_0_8px_rgba(212,175,55,0.8)]"
        style={{
          x: dotX,
          y: dotY,
        }}
        animate={{
          scale: cursorVariant === 'view' || cursorVariant === 'drag' ? 0 : cursorVariant === 'hover' ? 0.6 : 1,
          opacity: cursorVariant === 'view' || cursorVariant === 'drag' ? 0 : 1,
        }}
      />
    </>
  );
};
