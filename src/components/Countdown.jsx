import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const EXPO_OPEN_DATE = new Date('2026-11-01T00:00:00+07:00');

function calc() {
   const diff = EXPO_OPEN_DATE - Date.now();
   if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, ended: true };
   return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
   };
}

const ITEMS = ['days', 'hours', 'minutes', 'seconds'];

export default function Countdown() {
   const { t } = useTranslation();
   const [time, setTime] = useState(calc);

   useEffect(() => {
      const tick = () => {
         setTime(calc());
         id = setTimeout(tick, Math.max(0, 1000 - (Date.now() % 1000)));
      };
      let id = setTimeout(tick, Math.max(0, 1000 - (Date.now() % 1000)));
      return () => clearTimeout(id);
   }, []);

   return (
      <Box
         role="timer"
         aria-label={t('countdown.label')}
         sx={{
            display: 'flex',
            gap: { xs: 2, sm: 3 },
            justifyContent: 'center',
            alignItems: 'center',
         }}>
         {ITEMS.map((key, i) => (
            <motion.div
               key={key}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
               style={{ display: 'flex' }}>
               <Box
                  sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     px: { xs: 1.5, sm: 2.5 },
                     position: 'relative',
                     '&:not(:last-child)::after': {
                        content: '""',
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        width: '1px',
                        height: '60%',
                        background:
                           'linear-gradient(180deg, transparent, rgba(255,255,255,0.15), transparent)',
                     },
                  }}>
                  <Typography
                     variant="h3"
                     sx={{
                        color: '#F7F5EE',
                        fontWeight: 700,
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                        lineHeight: 1,
                        letterSpacing: '-0.02em',
                        minWidth: { xs: 40, sm: 56, md: 68 },
                        textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                     }}>
                     {String(time[key]).padStart(2, '0')}
                  </Typography>
                  <Typography
                     sx={{
                        color: 'rgba(212, 175, 55, 0.8)',
                        fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.75rem' },
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        fontWeight: 500,
                        mt: 0.5,
                     }}>
                     {t(`countdown.${key}`)}
                  </Typography>
               </Box>
            </motion.div>
         ))}
      </Box>
   );
}
