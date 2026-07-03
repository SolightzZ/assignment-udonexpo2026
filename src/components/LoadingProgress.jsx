import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const MESSAGES = [
   { at: 0, key: 'loading.preparing' },
   { at: 0.4, key: 'loading.growing' },
   { at: 0.7, key: 'loading.welcome' },
   { at: 0.95, key: 'loading.ready' },
];

export default function LoadingProgress({ progress = 0, message }) {
   const { t } = useTranslation();
   const pct = Math.round(progress * 100);
   let currentKey = message;
   if (!currentKey) {
      for (let i = MESSAGES.length - 1; i >= 0; i--) {
         if (progress >= MESSAGES[i].at) {
            currentKey = MESSAGES[i].key;
            break;
         }
      }
      currentKey ||= MESSAGES[0].key;
   }
   const currentMessage = t(currentKey);

   return (
      <motion.div
         initial={{ opacity: 0, y: 8 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, delay: 1.0, ease: [0.25, 1, 0.5, 1] }}>
         <Box sx={{ width: { xs: 200, sm: 280 }, textAlign: 'center' }}>
            <LinearProgress
               variant="determinate"
               value={pct}
               sx={{
                  height: 3,
                  borderRadius: 4,
                  backgroundColor: 'rgba(200, 166, 78, 0.15)',
                  '& .MuiLinearProgress-bar': {
                     borderRadius: 4,
                     background: 'linear-gradient(90deg, #C8A64E, #D4BC6A, #C8A64E)',
                     backgroundSize: '200% 100%',
                     animation: 'shimmer 2s ease infinite',
                  },
                  '@keyframes shimmer': {
                     '0%': { backgroundPosition: '0% 0%' },
                     '100%': { backgroundPosition: '200% 0%' },
                  },
               }}
               aria-label={currentMessage}
            />
            <Typography
               variant="body2"
               sx={{
                  mt: 1.5,
                  fontSize: { xs: '0.8rem', sm: '0.875rem' },
                  color: 'text.secondary',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
               }}>
               {currentMessage}
            </Typography>
         </Box>
      </motion.div>
   );
}
