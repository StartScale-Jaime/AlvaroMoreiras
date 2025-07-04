'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Cargar tema guardado desde localStorage
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && ['light', 'dark', 'system'].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const updateResolvedTheme = () => {
      let newResolvedTheme: 'light' | 'dark';
      
      if (theme === 'system') {
        newResolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      } else {
        newResolvedTheme = theme;
      }
      
      setResolvedTheme(newResolvedTheme);
      
      // Actualizar clases en el HTML
      const html = document.documentElement;
      html.classList.remove('light', 'dark');
      html.classList.add(newResolvedTheme);
      
      // Actualizar clases en el body
      const body = document.body;
      if (newResolvedTheme === 'dark') {
        body.className = body.className.replace(/bg-white|text-gray-900/g, '');
        if (!body.className.includes('bg-gray-900')) {
          body.className += ' bg-gray-900 text-gray-100';
        }
      } else {
        body.className = body.className.replace(/bg-gray-900|text-gray-100/g, '');
        if (!body.className.includes('bg-white')) {
          body.className += ' bg-white text-gray-900';
        }
      }
    };

    updateResolvedTheme();

    // Escuchar cambios en las preferencias del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        updateResolvedTheme();
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme, mounted]);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Siempre proporcionar el contexto, incluso durante hidratación
  const value = {
    theme,
    setTheme: handleSetTheme,
    resolvedTheme: mounted ? resolvedTheme : 'dark' // Valor por defecto durante hidratación
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
} 