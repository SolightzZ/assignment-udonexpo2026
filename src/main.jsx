import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { StrictMode, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeModeProvider, useThemeMode } from './context/ThemeModeContext';
import getTheme from './theme/theme';
import './i18n';
import './index.css';

import '@fontsource/noto-sans-sc/400.css';
import '@fontsource/noto-sans-sc/700.css';
import '@fontsource/noto-sans-thai/400.css';
import '@fontsource/noto-sans-thai/500.css';
import '@fontsource/noto-sans-thai/600.css';
import '@fontsource/noto-sans-thai/700.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

function ThemedApp() {
   const { mode } = useThemeMode();
   const theme = useMemo(() => getTheme(mode), [mode]);

   return (
      <ThemeProvider theme={theme}>
         <CssBaseline />
         <App />
      </ThemeProvider>
   );
}

let root = window.__reactRoot;
if (!root) {
   root = createRoot(document.getElementById('root'));
   window.__reactRoot = root;
}

root.render(
   <StrictMode>
      <BrowserRouter basename={'/assignment-udonexpo2026/'}>
         <ThemeModeProvider>
            <ThemedApp />
         </ThemeModeProvider>
      </BrowserRouter>
   </StrictMode>,
);
