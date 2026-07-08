import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import { motion, useReducedMotion } from 'framer-motion';
import { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../theme/theme';
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

const ORBS = COLORS.heroOrbs;

const fadeUp = (delay = 0) => ({
   initial: { opacity: 0, y: 24 },
   animate: { opacity: 1, y: 0 },
   transition: { duration: 0.7, delay, ease: [0.25, 1, 0.5, 1] },
});

export default function Hero() {
   const { t } = useTranslation();
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
               willChange: 'transform',
               overflow: 'hidden',
            }}>
            <Box
               component="img"
               src={heroBg}
               alt=""
               fetchpriority="high"
               sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: { xs: 'center 30%', sm: 'center' },
               }}
            />
            <Box
               sx={{
                  position: 'absolute',
                  inset: 0,
                  background: (theme) => [
                     `radial-gradient(circle at 18% 45%, ${theme.palette.custom.heroOverlay1}, transparent 55%)`,
                     `linear-gradient(90deg, ${theme.palette.custom.heroOverlay2a}, ${theme.palette.custom.heroOverlay2b}, transparent 70%)`,
                     `linear-gradient(180deg, ${theme.palette.custom.heroOverlay3a}, ${theme.palette.custom.heroOverlay3b})`,
                  ].join(', '),
               }}
            />
         </Box>

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
                      sx={(theme) => ({
                         display: 'inline-flex',
                         alignItems: 'center',
                         gap: 1,
                          background: theme.palette.custom.heroBadgeBg,
                          border: `1px solid ${theme.palette.custom.heroBadgeBorder}`,
                         borderRadius: '999px',
                         px: { xs: 2.5, md: 2.5 },
                         py: 1,
                         mb: { xs: 3.5, md: 3.5 },
                      })}>
                      <Box
                         sx={(theme) => ({
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: theme.palette.custom.goldAccent,
                            boxShadow: `0 0 8px ${theme.palette.custom.toastDotShadow}`,
                         })}
                      />
                      <Box
                         component="span"
                         sx={{
                            color: (theme) => theme.palette.custom.toastText,
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
                   sx={(theme) => ({
                      color: '#FFFFFF',
                      fontWeight: 800,
                      fontSize: { xs: '2.4rem', sm: '3rem', md: '3.8rem' },
                      lineHeight: 1.15,
                      letterSpacing: '-0.02em',
                      textShadow: `0 4px 40px ${theme.palette.custom.heroTitleShadow}`,
                      mb: { xs: 3, md: 2.5 },
                      maxWidth: { xs: '100%', sm: 480, md: 560 },
                      textAlign: 'center',
                   })}
               />
            </motion.div>

            {/* ── Subtitle ── */}
            <motion.div {...fadeUp(0.7)}>
               <ScrambleText
                  text={t('hero.subtitle')}
                  variant="h5"
                  component="p"
                   sx={(theme) => ({
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontWeight: 300,
                      fontSize: { xs: '1.05rem', sm: '1.1rem', md: '1.35rem' },
                      lineHeight: 1.5,
                      maxWidth: { xs: '100%', sm: 460, md: 520 },
                      mb: { xs: 4, md: 4 },
                      textShadow: `0 2px 16px ${theme.palette.custom.heroSubtitleShadow}`,
                      textAlign: 'center',
                   })}
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
             <IconButton onClick={scrollToAbout} aria-label={t('hero.scroll')} sx={(theme) => ({ color: theme.palette.custom.heroScrollColor, '&:hover': { color: theme.palette.custom.heroScrollHover } })}>
               <KeyboardArrowDownIcon fontSize="large" />
            </IconButton>
         </Box>
      </Box>
   );
}
