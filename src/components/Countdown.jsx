import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

const TARGET = new Date('2026-11-01T00:00:00+07:00');

function calc() {
   const diff = TARGET - Date.now();
   if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
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
      const id = setInterval(() => setTime(calc), 1000);
      return () => clearInterval(id);
   }, []);

   return (
      <Box
         sx={{
            display: 'flex',
            gap: { xs: 1.5, sm: 2.5 },
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
                        fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
                        lineHeight: 1,
                        textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                        minWidth: { xs: 56, sm: 64 },
                     }}>
                     {String(time[key]).padStart(2, '0')}
                  </Typography>
                  <Typography
                     variant="caption"
                     sx={{
                        color: 'rgba(255,255,255,0.75)',
                        fontSize: { xs: '0.65rem', sm: '0.75rem' },
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                     }}>
                     {t(`countdown.${key}`)}
                  </Typography>
               </Box>
            </motion.div>
         ))}
      </Box>
   );
}
