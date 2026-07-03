import Box from '@mui/material/Box';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import LoadingBackground from './LoadingBackground';
import LoadingLogo from './LoadingLogo';
import LoadingParticles from './LoadingParticles';
import LoadingProgress from './LoadingProgress';

const MIN_DURATION = 3200;

export default function LoadingScreen({ loading = true, progress: externalProgress, logo }) {
   const prefersReducedMotion = useReducedMotion();
   const [internalProgress, setInternalProgress] = useState(0);
   const startRef = useRef(null);
   const isInternal = typeof externalProgress !== 'number';

   useEffect(() => {
      if (!loading || !isInternal) return;
      startRef.current = performance.now();
      let raf;
      const tick = () => {
         const elapsed = performance.now() - startRef.current;
         setInternalProgress(Math.min(elapsed / MIN_DURATION, 1));
         raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
   }, [loading, isInternal]);

   const progress = isInternal ? internalProgress : externalProgress;
   const exitDuration = prefersReducedMotion ? 0.01 : 0.5;

   return (
      <AnimatePresence>
         {loading && (
            <Box
               component={motion.div}
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: exitDuration, ease: 'easeInOut' }}
               sx={{
                  position: 'fixed',
                  inset: 0,
                  zIndex: 9999,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: { xs: 4, sm: 5 },
               }}>
               <LoadingBackground />
               <LoadingParticles />
               <LoadingLogo logo={logo} />
               <LoadingProgress progress={progress} />
            </Box>
         )}
      </AnimatePresence>
   );
}
