import { useTheme } from '../context/ThemeContext';
import type { ThemeMode } from '../context/ThemeContext';
import { Moon, Sun, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themes: { id: ThemeMode; label: string; icon: React.ReactNode }[] = [
    { id: 'royal-navy', label: 'Royal Navy', icon: <Sparkles className="w-3.5 h-3.5 text-amber-400" /> },
    { id: 'light-pearl', label: 'Pearl Light', icon: <Sun className="w-3.5 h-3.5 text-amber-500" /> },
    { id: 'midnight-slate', label: 'Cyber Emerald', icon: <Moon className="w-3.5 h-3.5 text-emerald-400" /> },
  ];

  return (
    <div className="flex items-center p-1 rounded-full bg-slate-900/60 border border-tis-gold-500/20 backdrop-blur-md">
      {themes.map((t) => {
        const isActive = theme === t.id;
        return (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            title={`Switch to ${t.label} Theme`}
            className="relative px-2.5 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center gap-1.5 focus:outline-none"
          >
            {isActive && (
              <motion.div
                layoutId="activeThemePill"
                className="absolute inset-0 rounded-full bg-tis-gold-500/20 border border-tis-gold-400/50 shadow-sm"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{t.icon}</span>
            <span className={`relative z-10 text-[11px] hidden xl:inline font-sans ${isActive ? 'text-tis-gold-300 font-semibold' : 'text-slate-400 hover:text-slate-200'}`}>
              {t.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
