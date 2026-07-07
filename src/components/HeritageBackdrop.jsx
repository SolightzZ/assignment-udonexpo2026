import Box from '@mui/material/Box';
import GlobalStyles from '@mui/material/GlobalStyles';
import { useCallback, useRef } from 'react';
import useScrollListener from '../hooks/useScrollListener';

const MOTIFS = [
   {
      id: 'lotus',
      viewBox: '0 0 240 240',
      paths: [
         'M120 200c0-40 20-60 20-90s-20-50-20-50c0 0-20 20-20 50s20 50 20 90z',
         'M120 200c-30-20-60-40-60-80s30-60 30-60c0 0 30 20 30 60s-30 60-30 80z',
         'M120 200c30-20 60-40 60-80s-30-60-30-60c0 0-30 20-30 60s30 60 30 80z',
         'M120 200c-50-10-80-30-80-70s30-50 30-50c0 0 50 10 50 50s0 70 0 70z',
         'M120 200c50-10 80-30 80-70s-30-50-30-50c0 0-50 10-50 50s0 70 0 70z',
      ],
   },
   {
      id: 'pagoda',
      viewBox: '0 0 200 300',
      paths: ['M100 20L60 80h80L100 20z', 'M100 70L50 130h100L100 70z', 'M100 120L40 180h120L100 120z', 'M100 170L30 230h140L100 170z', 'M100 220L20 280h160L100 220z', 'M95 280h10v20h-10z'],
   },
   {
      id: 'leaf',
      viewBox: '0 0 180 240',
      paths: [
         'M90 20c-40 40-60 80-60 120s40 80 60 80 60-40 60-80-20-80-60-120z',
         'M90 20c0 60 0 120 0 200',
         'M90 80c-30 20-40 40-40 60',
         'M90 80c30 20 40 40 40 60',
         'M90 140c-25 15-35 30-35 45',
         'M90 140c25 15 35 30 35 45',
      ],
   },
   {
      id: 'diamondBand',
      viewBox: '0 0 480 100',
      paths: [
         'M0 50l24-30 24 30-24 30-24-30z',
         'M48 50l24-30 24 30-24 30-24-30z',
         'M96 50l24-30 24 30-24 30-24-30z',
         'M144 50l24-30 24 30-24 30-24-30z',
         'M192 50l24-30 24 30-24 30-24-30z',
         'M240 50l24-30 24 30-24 30-24-30z',
         'M288 50l24-30 24 30-24 30-24-30z',
         'M336 50l24-30 24 30-24 30-24-30z',
         'M384 50l24-30 24 30-24 30-24-30z',
         'M432 50l24-30 24 30-24 30-24-30z',
      ],
   },
   {
      id: 'curve',
      viewBox: '0 0 520 150',
      paths: ['M0 120c60-80 120 40 180-20s120 40 180-20 120 40 180-20', 'M0 80c60-80 120 40 180-20s120 40 180-20 120 40 180-20', 'M0 40c60-80 120 40 180-20s120 40 180-20 120 40 180-20'],
   },
   {
      id: 'naga',
      viewBox: '0 0 400 200',
      paths: ['M20 180c40-60 80-20 120-80s80 20 120-60 60-40 120-20', 'M20 180c20-10 40-20 60-10s20 30 40 20 20-50 40-40 20 30 40 20 20-50 40-40', 'M360 20c10 20 20 40 20 60s-20 30-20 30'],
   },
];

const LAYER_CONFIG = [
   { motif: 'lotus', top: '5%', left: '3%', width: 220, color: '#c45c3e', opacity: 0.075, anim: 'heritage-spin 50s linear infinite' },
   { motif: 'pagoda', top: '5%', right: '3%', width: 140, color: '#1a8a6a', opacity: 0.06, anim: 'heritage-float 22s ease-in-out infinite alternate' },
   { motif: 'leaf', top: '42%', left: '3%', width: 170, color: '#d4a056', opacity: 0.07, anim: 'heritage-sway 28s ease-in-out infinite alternate' },
   { motif: 'naga', bottom: '12%', right: '3%', width: 380, color: '#5cc4b8', opacity: 0.055, anim: 'heritage-drift 20s ease-in-out infinite alternate' },
   {
      motif: 'diamondBand',
      bottom: '3%',
      left: '50%',
      width: 350,
      color: '#c45c3e',
      opacity: 0.04,
      transform: 'translateX(-50%) rotate(-4deg)',
      anim: 'heritage-shift 26s ease-in-out infinite alternate',
   },
   { motif: 'curve', top: '50%', right: '5%', width: 400, color: '#1a8a6a', opacity: 0.05, anim: 'heritage-wave 18s ease-in-out infinite alternate' },
];

const MOTIF_MAP = Object.fromEntries(MOTIFS.map((m) => [m.id, m]));

const globalKeyframes = {
   '@keyframes heritage-spin': { to: { transform: 'rotate(360deg)' } },
   '@keyframes heritage-spin-reverse': { to: { transform: 'rotate(-360deg)' } },
   '@keyframes heritage-float': {
      from: { transform: 'translate3d(0, -15px, 0) rotate(-2deg)' },
      to: { transform: 'translate3d(-25px, 18px, 0) rotate(4deg)' },
   },
   '@keyframes heritage-sway': {
      from: { transform: 'translateX(-20px) rotate(3deg)' },
      to: { transform: 'translateX(50px) rotate(-3deg)' },
   },
   '@keyframes heritage-drift': {
      from: { transform: 'translateY(15px) rotate(5deg)' },
      to: { transform: 'translateY(-22px) rotate(-2deg)' },
   },
   '@keyframes heritage-shift': {
      from: { transform: 'translateX(-15px) rotate(-5deg)' },
      to: { transform: 'translateX(40px) rotate(3deg)' },
   },
   '@keyframes heritage-wave': {
      from: { transform: 'translateY(12px) rotate(2deg)' },
      to: { transform: 'translateY(-18px) rotate(-2deg)' },
   },
};

export default function HeritageBackdrop() {
   const ref = useRef(null);

   const handleScroll = useCallback((scrollY) => {
      const el = ref.current;
      if (!el) return;
      el.style.setProperty('--backdrop-y', `${scrollY * 0.04}px`);
   }, []);

   useScrollListener(handleScroll);

   return (
      <>
         <GlobalStyles styles={globalKeyframes} />
         <Box component="svg" aria-hidden="true" focusable="false" sx={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
            <defs>
               {MOTIFS.map((m) => (
                  <symbol key={m.id} id={`bc-${m.id}`} viewBox={m.viewBox}>
                     {m.paths.map((d, i) => (
                        <path key={i} d={d} />
                     ))}
                  </symbol>
               ))}
            </defs>
         </Box>
         <Box
            ref={ref}
            aria-hidden="true"
            sx={{
               position: 'fixed',
               inset: 0,
               zIndex: 0,
               overflow: 'hidden',
               pointerEvents: 'none',
               transform: 'translate3d(0, var(--backdrop-y, 0px), 0)',
               transition: 'transform 900ms cubic-bezier(0.2, 0.7, 0.2, 1)',
            }}>
            {LAYER_CONFIG.map((cfg, i) => {
               const motif = MOTIF_MAP[cfg.motif];
               return (
                  <Box
                     key={i}
                     component="svg"
                     viewBox={motif.viewBox}
                     sx={{
                        position: 'absolute',
                        overflow: 'visible',
                        fill: 'none',
                        stroke: cfg.color,
                        strokeWidth: 7,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        opacity: cfg.opacity,
                        width: cfg.width,
                        willChange: 'transform, opacity',
                        animation: cfg.anim,
                        ...(cfg.top != null && { top: cfg.top }),
                        ...(cfg.left != null && { left: cfg.left }),
                        ...(cfg.right != null && { right: cfg.right }),
                        ...(cfg.bottom != null && { bottom: cfg.bottom }),
                        ...(cfg.transform && { transform: cfg.transform }),
                     }}>
                     <use href={`#bc-${cfg.motif}`} />
                  </Box>
               );
            })}
         </Box>
      </>
   );
}
