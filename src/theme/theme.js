import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// SVG noise texture as data URI — tiny 200×200 tile, ~1KB
const NOISE_URI =
   "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E";

let theme = createTheme({
   palette: {
      primary: {
         main: '#1B5E20',
         light: '#4CAF50',
         dark: '#0D3B0F',
         contrastText: '#FFFFFF',
      },
      secondary: {
         main: '#C8A64E',
         light: '#D4BC6A',
         dark: '#A08030',
         contrastText: '#1A1A1A',
      },
      background: {
         default: '#F6FFF6',
         paper: '#FFFFFF',
      },
      text: {
         primary: '#1A1A1A',
         secondary: '#4A4A4A',
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
               background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)',
               boxShadow: '0 4px 20px rgba(27, 94, 32, 0.3)',
               '&:hover': {
                  background: 'linear-gradient(135deg, #0D3B0F 0%, #1B5E20 100%)',
                  boxShadow: '0 6px 24px rgba(27, 94, 32, 0.4)',
               },
            },
            containedSecondary: {
               background: 'linear-gradient(135deg, #C8A64E 0%, #D4BC6A 100%)',
               boxShadow: '0 4px 20px rgba(200, 166, 78, 0.3)',
               '&:hover': {
                  background: 'linear-gradient(135deg, #A08030 0%, #C8A64E 100%)',
               },
            },
            outlinedPrimary: {
               borderColor: '#1B5E20',
               color: '#1B5E20',
               '&:hover': {
                  borderColor: '#0D3B0F',
                  background: 'rgba(27, 94, 32, 0.05)',
               },
            },
         },
      },
      MuiAppBar: {
         styleOverrides: {
            root: {
               background: 'rgba(255, 255, 255, 0.82)',
               backdropFilter: 'blur(24px)',
               WebkitBackdropFilter: 'blur(24px)',
               boxShadow: '0 1px 10px rgba(0, 0, 0, 0.06)',
               borderBottom: '1px solid rgba(200, 166, 78, 0.15)',
            },
         },
      },
      MuiCard: {
         styleOverrides: {
            root: {
               borderRadius: 20,
               boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
               backdropFilter: 'blur(8px)',
               transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease',
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
                  boxShadow: '0 16px 48px rgba(0, 0, 0, 0.12)',
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
            body: {
               '&::after': {
                  content: '""',
                  position: 'fixed',
                  inset: 0,
                  pointerEvents: 'none',
                  zIndex: 1299,
                  backgroundImage: `url("${NOISE_URI}")`,
                  backgroundRepeat: 'repeat',
                  backgroundSize: '200px 200px',
                  opacity: 0.5,
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
         },
      },
   },
});

theme = responsiveFontSizes(theme);

export default theme;
