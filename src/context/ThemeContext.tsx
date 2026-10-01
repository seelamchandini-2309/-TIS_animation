import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'royal-navy' | 'light-pearl' | 'midnight-slate';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('tis-theme') as ThemeMode;
    return saved || 'royal-navy';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-light', 'theme-midnight', 'dark');
    
    if (theme === 'light-pearl') {
      root.classList.add('theme-light');
    } else if (theme === 'midnight-slate') {
      root.classList.add('theme-midnight', 'dark');
    } else {
      root.classList.add('dark');
    }
    
    localStorage.setItem('tis-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'royal-navy') return 'light-pearl';
      if (prev === 'light-pearl') return 'midnight-slate';
      return 'royal-navy';
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
