import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function DecorativeMotifs() {
   const items = useMemo(
      () => [
         { id: 1, x: '5%', y: '10%', size: 100, rotate: 0, delay: 0 },
         { id: 2, x: '85%', y: '8%', size: 80, rotate: 45, delay: 0.3 },
         { id: 3, x: '10%', y: '70%', size: 70, rotate: -20, delay: 0.6 },
         { id: 4, x: '80%', y: '75%', size: 90, rotate: 30, delay: 0.9 },
         { id: 5, x: '45%', y: '5%', size: 50, rotate: 15, delay: 0.2 },
         { id: 6, x: '45%', y: '88%', size: 55, rotate: -10, delay: 0.5 },
         { id: 7, x: '2%', y: '45%', size: 45, rotate: 60, delay: 0.4 },
         { id: 8, x: '92%', y: '42%', size: 60, rotate: -30, delay: 0.7 },
      ],
      [],
   );

   return (
      <Box sx={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
         {items.map((item) => (
            <motion.div
               key={item.id}
               initial={{ opacity: 0, scale: 0 }}
               animate={{ opacity: 0.12, scale: 1 }}
               transition={{ duration: 1.5, delay: item.delay, ease: 'easeOut' }}
               style={{
                  position: 'absolute',
                  left: item.x,
                  top: item.y,
                  width: item.size,
                  height: item.size,
                  transform: `rotate(${item.rotate}deg)`,
               }}>
               <motion.div
                  animate={{ rotate: [0, 15, -15, 0], y: [0, -20, 20, 0] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ width: '100%', height: '100%' }}>
                  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                     <path d="M60 10c-30 30-30 70 0 100s30-70 0-100z" stroke="#C8A64E" strokeWidth="2" />
                     <path d="M60 10c30 30 30 70 0 100s-30-70 0-100z" stroke="#C8A64E" strokeWidth="2" />
                     <path d="M10 60h100" stroke="#C8A64E" strokeWidth="1.5" strokeDasharray="4 4" />
                  </svg>
               </motion.div>
            </motion.div>
         ))}
      </Box>
   );
}

function FloatingParticles() {
   const particles = useMemo(
      () =>
         Array.from({ length: 20 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 2,
            delay: Math.random() * 5,
            duration: Math.random() * 8 + 6,
         })),
      [],
   );

   return (
      <Box sx={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
         {particles.map((p) => (
            <motion.div
               key={p.id}
               initial={{ opacity: 0, x: `${p.x}vw`, y: `${p.y}vh` }}
               animate={{
                  opacity: [0, 0.6, 0],
                  y: [`${p.y}vh`, `${p.y - 30}vh`],
                  scale: [0, 1, 0],
               }}
               transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
               }}
               style={{
                  position: 'absolute',
                  width: p.size,
                  height: p.size,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, #C8A64E, transparent)',
               }}
            />
         ))}
      </Box>
   );
}

const containerVariants = {
   hidden: {},
   visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
   },
};

const childVariants = {
   hidden: { opacity: 0, y: 30 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
   },
};

export default function NotFound() {
   const { t } = useTranslation();
   const navigate = useNavigate();

   useEffect(() => {
      document.title = `404 - ${t('notfound.title')} | Udon Expo 2026`;
   }, [t]);

   return (
      <Box
         sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: 'radial-gradient(ellipse at 30% 20%, #0d4a10 0%, #0a2d0c 40%, #061a07 100%)',
         }}>
         <DecorativeMotifs />
         <FloatingParticles />
         <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 2 }}>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ textAlign: 'center' }}>
               <motion.div variants={childVariants}>
                  <Typography
                     variant="h1"
                     sx={{
                        fontSize: { xs: '8rem', md: '12rem' },
                        fontWeight: 900,
                        lineHeight: 1,
                        mb: -6,
                        userSelect: 'none',
                        background: 'linear-gradient(180deg, rgba(200,166,78,0.25) 0%, rgba(200,166,78,0.04) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontFamily: 'Poppins, sans-serif',
                        letterSpacing: '0.05em',
                        position: 'relative',
                        '&::after': {
                           content: '""',
                           position: 'absolute',
                           inset: 0,
                           background: 'radial-gradient(ellipse at center, rgba(200,166,78,0.08) 0%, transparent 70%)',
                           filter: 'blur(40px)',
                        },
                     }}>
                     404
                  </Typography>
               </motion.div>

               <motion.div variants={childVariants}>
                  <Box
                     sx={{
                        width: 120,
                        height: 2,
                        mx: 'auto',
                        mb: 5,
                        background: 'linear-gradient(90deg, transparent, #C8A64E, transparent)',
                        position: 'relative',
                        '&::before': {
                           content: '"\u0E24"',
                           position: 'absolute',
                           top: '50%',
                           left: '50%',
                           transform: 'translate(-50%, -50%)',
                           color: '#C8A64E',
                           fontSize: '1.2rem',
                           background: '#0a2d0c',
                           px: 2,
                        },
                     }}
                  />
               </motion.div>

               <motion.div variants={childVariants}>
                  <Typography
                     variant="h4"
                     sx={{
                        color: '#fff',
                        fontWeight: 600,
                        mb: 1.5,
                        fontSize: { xs: '1.4rem', md: '1.75rem' },
                        textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                     }}>
                     {t('notfound.title')}
                  </Typography>
               </motion.div>

               <motion.div variants={childVariants}>
                  <Typography
                     sx={{
                        color: 'rgba(255,255,255,0.55)',
                        mb: 6,
                        maxWidth: 400,
                        mx: 'auto',
                        lineHeight: 1.8,
                        fontSize: '0.95rem',
                     }}>
                     {t('notfound.message')}
                  </Typography>
               </motion.div>

               <motion.div variants={childVariants}>
                  <Button
                     variant="contained"
                     size="large"
                     startIcon={<HomeIcon />}
                     onClick={() => navigate('/')}
                     sx={{
                        background: '#C8A64E',
                        color: '#0a2d0c',
                        fontWeight: 600,
                        px: 6,
                        py: 1.5,
                        borderRadius: 50,
                        fontSize: '0.95rem',
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 4px 20px rgba(200,166,78,0.25)',
                        '&:hover': {
                           background: '#d4b35a',
                           boxShadow: '0 6px 30px rgba(200,166,78,0.4)',
                           transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease',
                     }}>
                     {t('notfound.back')}
                  </Button>
               </motion.div>
            </motion.div>
         </Container>
      </Box>
   );
}
