import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';

function OrnateDivider() {
   return (
      <Box
         sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1.5,
            mt: 2.5,
         }}>
         <Box sx={{ width: 32, height: 2, background: 'linear-gradient(90deg, transparent, #C8A64E)', borderRadius: 1 }} />
         <Box
            sx={{
               width: 8,
               height: 8,
               background: '#C8A64E',
               transform: 'rotate(45deg)',
               flexShrink: 0,
            }}
         />
         <Box sx={{ width: 32, height: 2, background: 'linear-gradient(90deg, #C8A64E, transparent)', borderRadius: 1 }} />
      </Box>
   );
}

export default function SectionTitle({ title, subtitle }) {
   return (
      <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
         <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}>
            <Typography
               variant="h2"
               component="h2"
               sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
                  color: 'primary.dark',
                  mb: subtitle ? 1.5 : 0,
               }}>
               {title}
            </Typography>
            {subtitle && (
               <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ maxWidth: 500, mx: 'auto', fontSize: { xs: '0.95rem', md: '1.05rem' } }}>
                  {subtitle}
               </Typography>
            )}
            <OrnateDivider />
         </motion.div>
      </Box>
   );
}
