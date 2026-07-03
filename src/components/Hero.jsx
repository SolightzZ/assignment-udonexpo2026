import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Countdown from './Countdown';
import ScrambleText from './ScrambleText';

const PARALLAX_SPEED = 0.3;

function useParallax(speedBg, speedFg) {
   const bgRef = useRef(null);
   const fgRef = useRef(null);
   useEffect(() => {
      const handleScroll = () => {
         const y = window.scrollY;
         if (bgRef.current) bgRef.current.style.transform = `translateY(${y * speedBg}px)`;
         if (fgRef.current) fgRef.current.style.transform = `translateY(${y * speedFg}px)`;
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
   }, [speedBg, speedFg]);
   return { bgRef, fgRef };
}

function useScrollTo(id) {
   return () => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
}

const ORBS = [
   { size: 500, top: -120, right: -80, color: 'rgba(200, 166, 78, 0.12)', blur: 120 },
   { size: 350, bottom: 60, left: -60, color: 'rgba(76, 175, 80, 0.1)', blur: 100 },
   { size: 250, top: '30%', left: '15%', color: 'rgba(200, 166, 78, 0.06)', blur: 80 },
];

export default function Hero({ t }) {
   const prefersReducedMotion = useReducedMotion();
   const { bgRef, fgRef } = useParallax(PARALLAX_SPEED, PARALLAX_SPEED * 0.5);
   const scrollToAbout = useScrollTo('#about');

   return (
      <Box
         id="hero"
         sx={{
            position: 'relative',
            height: { xs: '100dvh', md: '100dvh' },
            minHeight: { xs: 500, md: 700 },
            maxHeight: { xs: 900, md: 1000 },
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
         }}>
         {/* Background image layer */}
         <Box
            ref={bgRef}
            sx={{
               position: 'absolute',
               inset: 0,
               backgroundImage:
                  'url(https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1920&q=80)',
               backgroundSize: 'cover',
               backgroundPosition: { xs: 'center 30%', sm: 'center' },
               willChange: 'transform',
               '&::after': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  background:
                     'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(13,59,15,0.55) 50%, rgba(13,59,15,0.75) 100%)',
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
                     ...Object.fromEntries(
                        Object.entries(orb).filter(([k]) => !['size', 'color', 'blur'].includes(k)),
                     ),
                  }}
               />
            ))}
         </Box>

         <Container
            maxWidth={false}
            sx={{
               position: 'relative',
               zIndex: 2,
               px: { xs: 2, sm: 3, md: 'clamp(40px, 6vw, 120px)' },
               pt: { xs: 6, md: 0 },
               maxWidth: '1400px',
               mx: 'auto',
            }}>
            <ScrambleText
               text={t('hero.title')}
               variant="h1"
               component="h1"
               sx={{
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.15,
                  textShadow: '0 4px 30px rgba(0,0,0,0.3)',
                  mb: 2,
                  maxWidth: { xs: '100%', sm: 420, md: 650 },
               }}
            />

            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 1, 0.5, 1] }}>
               <ScrambleText
                  text={t('hero.subtitle')}
                  variant="h5"
                  component="p"
                  sx={{
                     color: 'rgba(255,255,255,0.85)',
                     fontWeight: 300,
                     fontSize: { xs: '0.85rem', sm: '1rem', md: '1.35rem' },
                     maxWidth: 600,
                     mb: 4,
                     textShadow: '0 2px 12px rgba(0,0,0,0.2)',
                  }}
               />
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 1, ease: [0.25, 1, 0.5, 1] }}>
               <Box sx={{ mb: 4 }}>
                  <Countdown />
               </Box>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 1.3, ease: [0.25, 1, 0.5, 1] }}>
               <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={scrollToAbout}
                  aria-label={t('hero.cta')}
                  sx={{
                     fontSize: '1rem',
                     px: { xs: 4, md: 5 },
                     py: { xs: 1.5, md: 1.8 },
                     width: 'fit-content',
                  }}>
                  {t('hero.cta')}
               </Button>
            </motion.div>
         </Container>

         <motion.div
            initial={{ opacity: 0 }}
            animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: prefersReducedMotion ? 0 : Infinity, delay: 1.6 }}
            style={{
               position: 'absolute',
               bottom: 40,
               left: '50%',
               transform: 'translateX(-50%)',
               zIndex: 2,
            }}>
            <IconButton
               onClick={scrollToAbout}
               aria-label={t('hero.scroll')}
               sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#fff' } }}>
               <KeyboardArrowDownIcon fontSize="large" />
            </IconButton>
         </motion.div>
      </Box>
   );
}
