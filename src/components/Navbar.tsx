import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Compass, ArrowRight, Award, GraduationCap, Phone } from 'lucide-react';
import { ThemeSwitcher } from './ThemeSwitcher';

interface NavbarProps {
  onOpenEnquiry: () => void;
  onOpenTour: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry, onOpenTour }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Why Gurukul', href: '#why-gurukul' },
    { name: 'Academics', href: '#academics' },
    { name: '16+ Sports', href: '#sports' },
    { name: 'Campus 360°', href: '#campus-tour' },
    { name: 'Boarding Life', href: '#boarding' },
    { name: 'Admission Wizard', href: '#fee-calculator' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <>
      {/* Top Banner Ticker */}
      <div className="bg-gradient-to-r from-tis-navy-950 via-tis-gold-900/60 to-tis-navy-950 text-tis-gold-300 text-[11px] sm:text-xs py-1.5 px-4 text-center font-medium border-b border-tis-gold-500/20 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-tis-gold-500 text-tis-navy-950">
              ADMISSIONS 2026-27
            </span>
            <span className="hidden sm:inline text-slate-300">
              Admissions Open for Grades IV to XII (Limited Boarding Seats)
            </span>
            <span className="sm:hidden text-slate-300">Admissions Open (Grades IV-XII)</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-[11px] text-slate-300">
            <a href="tel:+919837983791" className="flex items-center gap-1 hover:text-tis-gold-300 transition-colors">
              <Phone className="w-3 h-3 text-tis-gold-400" />
              <span>+91 98379 83791</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-tis-gold-400">📍 Dehradun, Uttarakhand</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Glass Navigation */}
      <motion.header
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav shadow-2xl py-2.5' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Emblem */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-tis-gold-400 via-amber-500 to-tis-gold-700 p-[2px] shadow-lg shadow-tis-gold-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-tis-navy-950 rounded-[10px] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-tis-gold-400 group-hover:rotate-6 transition-transform" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif font-black text-lg sm:text-xl tracking-tight text-white group-hover:text-tis-gold-300 transition-colors">
                    TULA'S
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-tis-gold-400 border border-tis-gold-500/30 px-1.5 py-0.2 rounded uppercase">
                    TIS
                  </span>
                </div>
                <span className="text-[10px] tracking-widest text-tis-gold-400/90 font-medium uppercase -mt-0.5">
                  The Modern Gurukul
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs xl:text-sm font-medium text-slate-300 hover:text-tis-gold-400 transition-colors relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-tis-gold-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Action Cluster & Theme Switcher */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeSwitcher />

              <button
                onClick={onOpenTour}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-tis-navy-800/80 hover:bg-tis-navy-700 text-tis-gold-300 border border-tis-gold-500/30 hover:border-tis-gold-400/60 transition-all duration-200 flex items-center gap-1.5 shadow-sm"
              >
                <Compass className="w-3.5 h-3.5 text-tis-gold-400 animate-spin" style={{ animationDuration: '8s' }} />
                <span>360° Tour</span>
              </button>

              <button
                onClick={onOpenEnquiry}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-tis-gold-500 via-amber-400 to-yellow-500 text-tis-navy-950 hover:brightness-110 shadow-lg shadow-tis-gold-500/25 transition-all duration-300 flex items-center gap-1.5 hover:scale-105"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeSwitcher />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-xl bg-tis-navy-900 border border-tis-gold-500/30 text-tis-gold-400 hover:text-white"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-b border-tis-gold-500/20 bg-tis-navy-950/98 backdrop-blur-2xl px-6 py-6"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-slate-200 hover:text-tis-gold-400 transition-colors py-1 flex items-center justify-between border-b border-slate-800"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-tis-gold-500/50" />
                  </a>
                ))}

                <div className="pt-3 flex flex-col gap-3">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenTour();
                    }}
                    className="w-full py-3 rounded-xl text-sm font-semibold bg-tis-navy-800 text-tis-gold-300 border border-tis-gold-500/40 flex items-center justify-center gap-2"
                  >
                    <Compass className="w-4 h-4 text-tis-gold-400" />
                    <span>Experience 360° Virtual Campus</span>
                  </button>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenEnquiry();
                    }}
                    className="w-full py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-tis-gold-500 via-amber-400 to-yellow-500 text-tis-navy-950 flex items-center justify-center gap-2 shadow-lg shadow-tis-gold-500/30"
                  >
                    <span>Apply for 2026-27 Admission</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="pt-2 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
                    <Award className="w-4 h-4 text-tis-gold-400" />
                    <span>Ranked #1 Boarding School in North India</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};
