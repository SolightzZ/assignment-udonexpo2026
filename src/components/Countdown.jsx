import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ScrambleText from './ScrambleText';

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
            gap: { xs: 2.5, sm: 2.5, md: 3 },
            justifyContent: 'center',
            flexWrap: 'wrap',
         }}>
         {ITEMS.map((key, i) => (
            <motion.div
               key={key}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}>
               <Box sx={{ textAlign: 'center' }}>
                  <Typography
                     variant="h3"
                     sx={{
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: { xs: '1.35rem', sm: '2.25rem', md: '2.75rem' },
                        lineHeight: 1,
                        textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                        minWidth: { xs: 44, sm: 64, md: 72 },
                     }}>
                     {String(time[key]).padStart(2, '0')}
                  </Typography>
                  <ScrambleText
                     text={t(`countdown.${key}`)}
                     variant="caption"
                     sx={{
                        color: 'rgba(255,255,255,0.75)',
                        fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.85rem' },
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                        display: 'block',
                     }}
                  />
               </Box>
            </motion.div>
         ))}
      </Box>
   );
}
