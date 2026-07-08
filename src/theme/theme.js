import { createTheme } from '@mui/material/styles';

const NOISE_URI =
   "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E";

function getTheme(mode) {
   const isDark = mode === 'dark';

   let theme = createTheme({
      palette: {
         mode,
         primary: {
            main: '#618764',
            light: '#9CB080',
            dark: '#2B5748',
            contrastText: '#FFFFFF',
         },
         secondary: {
            main: '#C8A64E',
            light: '#D4BC6A',
            dark: '#A08030',
            contrastText: '#1A1A1A',
         },
         background: {
            default: isDark ? '#1C2529' : '#F7F9F7',
            paper: isDark ? '#273338' : '#FFFFFF',
         },
         text: {
            primary: isDark ? '#FFFFFF' : '#1A1A1A',
            secondary: isDark ? '#FFFFFF' : '#4A4A4A',
         },
         divider: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
         custom: {
            sectionBg: isDark ? '#222D31' : '#F6FFF6',
            highlightGradient: isDark ? 'linear-gradient(180deg, #222D31 0%, #1C2529 100%)' : 'linear-gradient(180deg, #F8FFF8 0%, #F3FBF3 100%)',
            goldAccent: '#D4AF37',
            techItemBg: isDark ? 'rgba(97, 135, 100, 0.12)' : 'rgba(246, 255, 246, 0.7)',
            cardShadow: isDark ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 30px rgba(43, 87, 72,.08)',
            cardShadowHover: isDark ? '0 18px 45px rgba(0,0,0,0.7)' : '0 18px 45px rgba(43, 87, 72,.15)',
            aboutCardRing: 'rgba(200, 166, 78, 0.2)',
            highlightCardShadow: isDark ? '0 10px 30px rgba(0,0,0,0.3)' : '0 10px 30px rgba(43, 87, 72,.10)',
            highlightCardShadowHover: isDark ? '0 18px 45px rgba(0,0,0,0.5)' : '0 18px 45px rgba(43, 87, 72,.18)',
            highlightFocusOutline: '#C8A64E',
            timelineDotShadow: isDark ? '0 0 0 4px rgba(0,0,0,0.5)' : '0 0 0 4px rgba(0,0,0,0.15)',
            techItemBorder: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(97, 135, 100, 0.06)',
            iconCircleRing: isDark ? 'rgba(200, 166, 78, 0.3)' : 'rgba(200, 166, 78, 0.2)',
            drawerShadow: '-8px 0 40px rgba(0, 0, 0, 0.15)',
            toastDotShadow: 'rgba(212,175,55,0.5)',
            toastText: 'rgba(255,255,255,0.88)',
            heroTitleShadow: 'rgba(0,0,0,0.35)',
            heroSubtitleShadow: 'rgba(0,0,0,0.2)',
            heroScrollColor: 'rgba(255,255,255,0.6)',
            heroScrollHover: '#D4AF37',
            countdownDigit: '#F7F5EE',
            countdownDigitShadow: 'rgba(0,0,0,0.3)',
            countdownLabel: 'rgba(212, 175, 55, 0.8)',
            countdownDivider: 'rgba(255,255,255,0.15)',
            galleryOverlayGradient: 'rgba(43, 87, 72,0.6)',
            galleryOverlayText: '#fff',
            galleryOverlayShadow: 'rgba(0,0,0,0.3)',
            galleryCardHoverShadow: isDark ? '0 16px 40px rgba(0, 0, 0, 0.5)' : '0 16px 40px rgba(0, 0, 0, 0.12)',
            lightboxBg: 'rgba(0,0,0,0.85)',
            lightboxBtnColor: '#fff',
            lightboxBtnBg: 'rgba(255,255,255,0.1)',
            lightboxBtnHoverBg: 'rgba(255,255,255,0.2)',
            lightboxImageShadow: 'rgba(0,0,0,0.4)',
            lightboxCaption: 'rgba(255,255,255,0.7)',
            lightboxCounter: 'rgba(255,255,255,0.4)',
            lightboxThumbSelected: '#C8A64E',
            lightboxThumbHoverBorder: 'rgba(255,255,255,0.5)',
            heroBadgeBg: 'rgba(255,255,255,0.06)',
            heroBadgeBorder: 'rgba(255,255,255,0.1)',
            heroOverlay1: 'rgba(15,40,25,0.18)',
            heroOverlay2a: 'rgba(6,30,18,0.75)',
            heroOverlay2b: 'rgba(6,30,18,0.28)',
            heroOverlay3a: 'rgba(0,0,0,0.12)',
            heroOverlay3b: 'rgba(0,0,0,0.45)',
            footerBg1: '#222D31',
            footerBg2: '#1C2529',
            footerBg3: '#151C1E',
            footerText: '#fff',
            footerBoxShadow: '#151C1E',
            footerSectionLabel: 'rgba(200,166,78,0.8)',
            footerIconGold: '#C8A64E',
            footerTextDim: 'rgba(255,255,255,0.3)',
            footerTextMuted: 'rgba(255,255,255,0.35)',
            footerTextSubtle: 'rgba(255,255,255,0.4)',
            footerLinkDefault: 'rgba(255,255,255,0.55)',
            footerLinkHoverColor: '#fff',
            footerLinkHoverBg: 'rgba(255,255,255,0.04)',
            footerIconBoxBg: 'rgba(255,255,255,0.04)',
            footerIconBoxBorder: 'rgba(255,255,255,0.08)',
            footerIconColor: 'rgba(255,255,255,0.4)',
            footerSubLabel: 'rgba(255,255,255,0.25)',
            footerBottomBorder: 'rgba(255,255,255,0.05)',
            footerCopyright: 'rgba(255,255,255,0.2)',
            footerTopBtnBorder: 'rgba(200,166,78,0.12)',
            footerTopBtnColor: 'rgba(200,166,78,0.55)',
            footerTopBtnHoverColor: '#C8A64E',
            footerTopBtnHoverBorder: 'rgba(200,166,78,0.3)',
            footerTopBtnHoverBg: 'rgba(200,166,78,0.05)',
            footerTopBtnHoverShadow: 'rgba(200,166,78,0.08)',
            footerAccentLine1: 'rgba(200,166,78,0.5)',
            footerAccentLine2: 'rgba(156, 176, 128,0.25)',
            footerAmbientBg1: 'rgba(200,166,78,0.04)',
            footerAmbientBg2: 'rgba(156, 176, 128,0.03)',
            footerBrandBoxBg1: 'rgba(97, 135, 100,0.25)',
            footerBrandBoxBg2: 'rgba(200,166,78,0.1)',
            footerBrandBoxBorder: 'rgba(200,166,78,0.15)',
            footerBrandTitle1: '#f0e8d0',
            notFoundBg1: '#2B5748',
            notFoundBg2: '#1C2529',
            notFoundBg3: '#151C1E',
            notFoundGold: '#C8A64E',
            notFoundGoldGlow: 'rgba(200,166,78,0.08)',
            notFoundGoldDim: 'rgba(200,166,78,0.25)',
            notFoundGoldVeryDim: 'rgba(200,166,78,0.04)',
            notFoundText: '#fff',
            notFoundTextShadow: 'rgba(0,0,0,0.3)',
            notFoundMessage: 'rgba(255,255,255,0.55)',
            notFoundBtnBg: '#C8A64E',
            notFoundBtnText: '#1C2529',
            notFoundBtnBorder: 'rgba(255,255,255,0.1)',
            notFoundBtnShadow: 'rgba(200,166,78,0.25)',
            notFoundBtnHoverBg: '#d4b35a',
            notFoundBtnHoverShadow: 'rgba(200,166,78,0.4)',
            notFoundThaiChar: '#1C2529',
         },
      },
      typography: {
         fontFamily: '"Poppins", "Noto Sans Thai", "Noto Sans SC", sans-serif',
         h1: {
            fontWeight: 700,
            fontSize: '3.5rem',
            lineHeight: 1.15,
            letterSpacing: '-0.015em',
         },
         h2: {
            fontWeight: 600,
            fontSize: '2.75rem',
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
         },
         h3: {
            fontWeight: 600,
            fontSize: '2rem',
            lineHeight: 1.4,
         },
         h4: {
            fontWeight: 600,
            fontSize: '1.5rem',
            lineHeight: 1.4,
         },
         h5: {
            fontWeight: 500,
            fontSize: '1.25rem',
         },
         body1: {
            fontSize: '1rem',
            lineHeight: 1.7,
         },
      },
      shape: {
         borderRadius: 16,
      },
      components: {
         MuiButton: {
            styleOverrides: {
               root: {
                  textTransform: 'none',
                  fontWeight: 600,
                  borderRadius: 12,
                  padding: '12px 28px',
               },
               containedPrimary: {
                  background: 'linear-gradient(135deg, #618764 0%, #2B5748 100%)',
                  boxShadow: isDark ? '0 4px 20px rgba(97, 135, 100, 0.5)' : '0 4px 20px rgba(97, 135, 100, 0.3)',
                  '&:hover': {
                     background: 'linear-gradient(135deg, #2B5748 0%, #618764 100%)',
                     boxShadow: isDark ? '0 6px 24px rgba(97, 135, 100, 0.6)' : '0 6px 24px rgba(97, 135, 100, 0.4)',
                  },
               },
               containedSecondary: {
                  background: 'linear-gradient(135deg, #C8A64E 0%, #D4BC6A 100%)',
                  boxShadow: isDark ? '0 4px 20px rgba(200, 166, 78, 0.4)' : '0 4px 20px rgba(200, 166, 78, 0.3)',
                  '&:hover': {
                     background: 'linear-gradient(135deg, #A08030 0%, #C8A64E 100%)',
                  },
               },
               outlinedPrimary: {
                  borderColor: isDark ? '#FFFFFF' : '#618764',
                  color: isDark ? '#FFFFFF' : '#618764',
                  '&:hover': {
                     borderColor: isDark ? 'rgba(255, 255, 255, 0.8)' : '#2B5748',
                     background: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(97, 135, 100, 0.05)',
                  },
               },
            },
         },
         MuiAppBar: {
            styleOverrides: {
               root: {
                  background: isDark ? 'rgba(28, 37, 41, 0.85)' : 'rgba(255, 255, 255, 0.82)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  boxShadow: isDark ? '0 1px 10px rgba(0, 0, 0, 0.3)' : '0 1px 10px rgba(0, 0, 0, 0.06)',
                  borderBottom: isDark ? '1px solid rgba(200, 166, 78, 0.1)' : '1px solid rgba(200, 166, 78, 0.15)',
               },
            },
         },
         MuiCard: {
            styleOverrides: {
               root: {
                  borderRadius: 20,
                  boxShadow: isDark ? '0 8px 32px rgba(0, 0, 0, 0.4)' : '0 8px 32px rgba(0, 0, 0, 0.08)',
                  backdropFilter: 'blur(8px)',
                  transition: isDark
                     ? 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease, background-color 0.3s ease'
                     : 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                     content: '""',
                     position: 'absolute',
                     top: -1,
                     left: '20%',
                     right: '20%',
                     height: 3,
                     background: 'linear-gradient(90deg, transparent, #C8A64E, transparent)',
                     borderRadius: '0 0 3px 3px',
                     opacity: 0,
                     transition: 'opacity 0.4s ease, left 0.4s ease, right 0.4s ease',
                  },
                  '&:hover': {
                     transform: 'translateY(-6px)',
                     boxShadow: isDark ? '0 16px 48px rgba(0, 0, 0, 0.6)' : '0 16px 48px rgba(0, 0, 0, 0.12)',
                     '&::before': {
                        opacity: 1,
                        left: '10%',
                        right: '10%',
                     },
                  },
               },
            },
         },
         MuiCssBaseline: {
            styleOverrides: {
               html: {
                  backgroundColor: isDark ? '#1C2529' : '#F7F9F7',
               },
               body: {
                  backgroundColor: isDark ? '#1C2529' : '#F7F9F7',
                  '&::after': {
                     content: '""',
                     position: 'fixed',
                     inset: 0,
                     pointerEvents: 'none',
                     zIndex: 1299,
                     backgroundImage: `url("${NOISE_URI}")`,
                     backgroundRepeat: 'repeat',
                     backgroundSize: '200px 200px',
                     opacity: isDark ? 0.25 : 0.5,
                     mixBlendMode: 'overlay',
                  },
                  '@media (prefers-reduced-motion: no-preference)': {
                     scrollBehavior: 'smooth',
                  },
                  '@media (prefers-reduced-motion: reduce)': {
                     '*, *::before, *::after': {
                        animationDuration: '0.01ms !important',
                        animationIterationCount: '1 !important',
                        transitionDuration: '0.01ms !important',
                        scrollBehavior: 'auto !important',
                     },
                  },
               },
               '#root': {
                  position: 'relative',
                  zIndex: 1,
                  backgroundColor: isDark ? '#1C2529' : '#F7F9F7',
                  minHeight: '100vh',
               },
            },
         },
      },
   });

   return theme;
}

export default getTheme;

export const COLORS = {
   highlights: ['#2B5748', '#1565C0', '#E65100', '#C62828', '#6A1B9A', '#00695C', '#FFB300', '#43A047'],
   visitorInfo: ['#618764', '#C8A64E', '#1565C0', '#E65100', '#6A1B9A'],
   timeline: ['#9CB080', '#C8A64E', '#618764', '#2B5748'],
   techCategories: ['#618764', '#C8A64E', '#1565C0', '#6A1B9A', '#E65100', '#00695C'],
   techIcons: {
      react: '#61DAFB',
      vite: '#646CFF',
      reactRouter: '#CA4245',
      mui: '#007FFF',
      emotion: '#D26AC2',
      framer: '#0055FF',
      i18next: '#2684FC',
      reactI18next: '#61DAFB',
      langDetect: '#F59E0B',
      css: '#1572B6',
      scramble: '#8B5CF6',
      rolldown: '#EF4444',
      oxlint: '#FB923C',
      githubActions: '#2088FF',
      poppins: '#333',
      notoThai: '#333',
      notoSC: '#333',
   },
   heritage: ['#c45c3e', '#1a8a6a', '#d4a056', '#5cc4b8', '#c45c3e', '#1a8a6a'],
   heroOrbs: [
      { size: 500, top: -150, right: -80, color: 'rgba(200, 166, 78, 0.12)', blur: 120 },
      { size: 350, bottom: 90, left: -60, color: 'rgba(156, 176, 128, 0.1)', blur: 100 },
      { size: 250, top: 'calc(30% - 30px)', left: '15%', color: 'rgba(200, 166, 78, 0.06)', blur: 80 },
   ],
   footerLinks: ['#9CB080', '#4A90D9'],
};
