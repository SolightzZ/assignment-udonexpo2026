import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'themeMode';

function getInitialMode() {
   try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') return stored;
   } catch {}
   if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
   return 'light';
}

const ThemeModeContext = createContext({ mode: 'light', toggleTheme: () => {} });

export function ThemeModeProvider({ children }) {
   const [mode, setMode] = useState(getInitialMode);

   useEffect(() => {
      try {
         localStorage.setItem(STORAGE_KEY, mode);
      } catch {}
      document.documentElement.setAttribute('data-theme', mode);
   }, [mode]);

   const value = useMemo(
      () => ({
         mode,
         toggleTheme: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
      }),
      [mode],
   );

   return <ThemeModeContext.Provider value={value}>{children}</ThemeModeContext.Provider>;
}

export function useThemeMode() {
   return useContext(ThemeModeContext);
}
