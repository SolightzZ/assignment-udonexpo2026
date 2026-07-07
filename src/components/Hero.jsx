import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { motion, useReducedMotion } from 'framer-motion';
import { useCallback, useRef } from 'react';
import heroBg from '../assets/images/hero_bg.webp';
import useScrollListener from '../hooks/useScrollListener';
import useScrollTo from '../hooks/useScrollTo';
import Countdown from './Countdown';
import ScrambleText from './ScrambleText';

const PARALLAX_SPEED = 0.3;

function useParallax(speedBg, speedFg) {
   const bgRef = useRef(null);
   const fgRef = useRef(null);
   const handleScroll = useCallback(
      (y) => {
         if (bgRef.current) bgRef.current.style.transform = `translateY(${y * speedBg}px)`;
         if (fgRef.current) fgRef.current.style.transform = `translateY(${y * speedFg}px)`;
      },
      [speedBg, speedFg],
   );
   useScrollListener(handleScroll);
   return { bgRef, fgRef };
}

const ORBS = [
   { size: 500, top: -150, right: -80, color: 'rgba(200, 166, 78, 0.12)', blur: 120 },
   { size: 350, bottom: 90, left: -60, color: 'rgba(76, 175, 80, 0.1)', blur: 100 },
   { size: 250, top: 'calc(30% - 30px)', left: '15%', color: 'rgba(200, 166, 78, 0.06)', blur: 80 },
];

const fadeUp = (delay = 0) => ({
   initial: { opacity: 0, y: 24 },
   animate: { opacity: 1, y: 0 },
   transition: { duration: 0.7, delay, ease: [0.25, 1, 0.5, 1] },
});

export default function Hero({ t }) {
   const prefersReducedMotion = useReducedMotion();
   const { bgRef, fgRef } = useParallax(PARALLAX_SPEED, PARALLAX_SPEED * 0.5);
   const scrollToAbout = useScrollTo('#about');

   return (
      <Box
         id="hero"
         sx={{
            position: 'relative',
            height: { xs: '100svh', lg: '92vh' },
            minHeight: { xs: 580, md: 650 },
            maxHeight: { xs: 900, md: 950 },
            overflow: 'hidden',
         }}>
         {/* Background image — Cinematic Overlay */}
         <Box
            ref={bgRef}
            sx={{
               position: 'absolute',
               inset: 0,
               backgroundImage: `url(${heroBg})`,
               backgroundSize: 'cover',
               backgroundPosition: { xs: 'center 30%', sm: 'center' },
               willChange: 'transform',
               '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  background: [
                     'radial-gradient(circle at 18% 45%, rgba(15,40,25,0.18), transparent 55%)',
                     'linear-gradient(90deg, rgba(6,30,18,0.75), rgba(6,30,18,0.28), transparent 70%)',
                     'linear-gradient(180deg, rgba(0,0,0,0.12), rgba(0,0,0,0.45))',
                  ].join(', '),
               },
            }}
         />

         {/* Decorative gradient orbs */}
         <Box
            ref={fgRef}
            sx={{
               position: 'absolute',
               inset: 0,
               overflow: 'hidden',
               willChange: 'transform',
               pointerEvents: 'none',
            }}>
            {ORBS.map((orb, i) => (
               <Box
                  key={i}
                  sx={{
                     position: 'absolute',
                     width: orb.size,
                     height: orb.size,
                     borderRadius: '50%',
                     background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
                     filter: `blur(${orb.blur}px)`,
                     ...Object.fromEntries(Object.entries(orb).filter(([k]) => !['size', 'color', 'blur'].includes(k))),
                  }}
               />
            ))}
         </Box>

         <Container
            maxWidth={false}
            sx={{
               position: 'relative',
               zIndex: 2,
               height: '100%',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'flex-start',
               alignItems: 'center',
               px: { xs: 2.5, sm: 3, md: 'clamp(40px, 6vw, 120px)' },
               pt: { xs: '15vh', md: '18vh' },
               pb: 4,
               maxWidth: '1400px',
               mx: 'auto',
            }}>
            {/* ── Event Badge ── */}
            <motion.div {...fadeUp(0.3)}>
               <Box
                  sx={{
                     display: 'inline-flex',
                     alignItems: 'center',
                     gap: 1,
                     background: 'rgba(255,255,255,0.06)',
                     backdropFilter: 'blur(12px)',
                     border: '1px solid rgba(255,255,255,0.1)',
                     borderRadius: '999px',
                     px: { xs: 2.5, md: 2.5 },
                     py: 1,
                     mb: { xs: 3.5, md: 3.5 },
                  }}>
                  <Box
                     sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: '#D4AF37',
                        boxShadow: '0 0 8px rgba(212,175,55,0.5)',
                     }}
                  />
                  <Box
                     component="span"
                     sx={{
                        color: 'rgba(255,255,255,0.88)',
                        fontSize: { xs: '0.75rem', md: '0.78rem' },
                        fontWeight: 500,
                        letterSpacing: '0.08em',
                     }}>
                     1 Nov 2026 – 14 Mar 2027
                  </Box>
               </Box>
            </motion.div>

            {/* ── Title ── */}
            <motion.div {...fadeUp(0.5)}>
               <ScrambleText
                  text={t('hero.title')}
                  variant="h1"
                  component="h1"
                  sx={{
                     color: '#F7F5EE',
                     fontWeight: 800,
                     fontSize: { xs: '2.4rem', sm: '3rem', md: '3.8rem' },
                     lineHeight: 1.15,
                     letterSpacing: '-0.02em',
                     textShadow: '0 4px 40px rgba(0,0,0,0.35)',
                     mb: { xs: 3, md: 2.5 },
                     maxWidth: { xs: '100%', sm: 480, md: 560 },
                     textAlign: 'center',
                  }}
               />
            </motion.div>

            {/* ── Subtitle ── */}
            <motion.div {...fadeUp(0.7)}>
               <ScrambleText
                  text={t('hero.subtitle')}
                  variant="h5"
                  component="p"
                  sx={{
                     color: 'rgba(247,245,238,0.8)',
                     fontWeight: 300,
                     fontSize: { xs: '1.05rem', sm: '1.1rem', md: '1.35rem' },
                     lineHeight: 1.5,
                     maxWidth: { xs: '100%', sm: 460, md: 520 },
                     mb: { xs: 4, md: 4 },
                     textShadow: '0 2px 16px rgba(0,0,0,0.2)',
                     textAlign: 'center',
                  }}
               />
            </motion.div>

            {/* ── Countdown Glass Card ── */}
            <motion.div {...fadeUp(0.9)}>
               <Box sx={{ mb: { xs: 3, md: 4 }, mx: 'auto', width: 'fit-content' }}>
                  <Countdown />
               </Box>
            </motion.div>
         </Container>

         {/* ── Scroll Indicator ── */}
         <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: prefersReducedMotion ? 0 : Infinity, delay: 1.8 }}
            style={{ x: '-50%' }}
            sx={{
               position: 'absolute',
               bottom: { xs: 90, sm: 40, md: 32 },
               left: '50%',
               zIndex: 2,
            }}>
            <IconButton onClick={scrollToAbout} aria-label={t('hero.scroll')} sx={{ color: 'rgba(255,255,255,0.6)', '&:hover': { color: '#D4AF37' } }}>
               <KeyboardArrowDownIcon fontSize="large" />
            </IconButton>
         </Box>
      </Box>
   );
}
