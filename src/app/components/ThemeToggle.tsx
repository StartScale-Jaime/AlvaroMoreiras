'use client';

import { useTheme } from './ThemeProvider';
import { useState, useEffect } from 'react';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // No renderizar hasta que esté montado para evitar hydration mismatch
  if (!mounted) {
    return (
      <div className="w-24 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse">
        {/* Placeholder durante carga */}
      </div>
    );
  }

  const themes = [
    {
      value: 'light' as const,
      label: 'Claro',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      value: 'dark' as const,
      label: 'Oscuro',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ),
    },
    {
      value: 'system' as const,
      label: 'Sistema',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const currentTheme = themes.find(t => t.value === theme) || themes[2];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors
          ${resolvedTheme === 'dark'
            ? 'bg-gray-800 border-gray-600 text-gray-200 hover:bg-gray-700'
            : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
          }
        `}
        title={`Tema actual: ${currentTheme.label}`}
      >
        {currentTheme.icon}
        <span className="text-sm font-medium hidden sm:inline">
          {currentTheme.label}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          {/* Overlay para cerrar el menú */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menú desplegable */}
          <div
            className={`
              absolute right-0 mt-2 w-40 rounded-lg border shadow-lg z-20
              ${resolvedTheme === 'dark'
                ? 'bg-gray-800 border-gray-600'
                : 'bg-white border-gray-200'
              }
            `}
          >
            {themes.map((themeOption) => (
              <button
                key={themeOption.value}
                onClick={() => {
                  setTheme(themeOption.value);
                  setIsOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors
                  ${theme === themeOption.value
                    ? resolvedTheme === 'dark'
                      ? 'bg-blue-600 text-white'
                      : 'bg-blue-50 text-blue-600'
                    : resolvedTheme === 'dark'
                      ? 'text-gray-200 hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }
                  ${themeOption === themes[0] ? 'rounded-t-lg' : ''}
                  ${themeOption === themes[themes.length - 1] ? 'rounded-b-lg' : ''}
                `}
              >
                {themeOption.icon}
                <span>{themeOption.label}</span>
                {theme === themeOption.value && (
                  <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
} 