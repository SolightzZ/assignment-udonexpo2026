import ForestIcon from '@mui/icons-material/Forest';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion, useReducedMotion } from 'framer-motion';
import GoldenRing from './GoldenRing';

export default function LoadingLogo({ logo }) {
   const prefersReducedMotion = useReducedMotion();

   return (
      <Box sx={{ textAlign: 'center', position: 'relative' }}>
         <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}>
            <Box sx={{ position: 'relative', display: 'inline-flex', justifyContent: 'center' }}>
               <Box
                  component={motion.div}
                  animate={
                     prefersReducedMotion
                        ? {}
                        : {
                             scale: [1, 1.04, 1],
                             transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                          }
                  }
                  sx={{
                     width: { xs: 64, sm: 80 },
                     height: { xs: 64, sm: 80 },
                     borderRadius: '50%',
                     background: 'linear-gradient(135deg, #1B5E20, #2E7D32)',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     boxShadow: '0 8px 40px rgba(27, 94, 32, 0.25)',
                     position: 'relative',
                     zIndex: 1,
                  }}>
                  {logo ? (
                     <Box
                        component="img"
                        src={logo}
                        alt="Udon Expo 2026"
                        sx={{ width: { xs: 44, sm: 56 }, height: { xs: 44, sm: 56 } }}
                     />
                  ) : (
                     <ForestIcon sx={{ fontSize: { xs: 36, sm: 44 }, color: '#fff' }} />
                  )}
               </Box>
               <GoldenRing />
            </Box>
         </motion.div>

         <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4, ease: [0.25, 1, 0.5, 1] }}>
            <Typography
               variant="h4"
               component="h1"
               sx={{
                  mt: { xs: 2.5, sm: 3 },
                  fontWeight: 700,
                  color: 'primary.dark',
                  fontSize: { xs: '1.35rem', sm: '1.75rem' },
                  letterSpacing: '-0.01em',
               }}>
               Udon Expo 2026
            </Typography>
         </motion.div>
      </Box>
   );
}
