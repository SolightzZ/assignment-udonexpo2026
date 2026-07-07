import Box from '@mui/material/Box';
import { memo } from 'react';
import Reveal from './Reveal';
import ScrambleText from './ScrambleText';

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
         <Box
            sx={{
               width: 32,
               height: 2,
               background: 'linear-gradient(90deg, transparent, #C8A64E)',
               borderRadius: 1,
            }}
         />
         <Box
            sx={{
               width: 8,
               height: 8,
               background: '#C8A64E',
               transform: 'rotate(45deg)',
               flexShrink: 0,
            }}
         />
         <Box
            sx={{
               width: 32,
               height: 2,
               background: 'linear-gradient(90deg, #C8A64E, transparent)',
               borderRadius: 1,
            }}
         />
      </Box>
   );
}

const SectionTitle = memo(function SectionTitle({ title, subtitle }) {
   return (
      <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
         <Reveal y={24} duration={0.6}>
            <ScrambleText
               text={title}
               variant="h2"
               component="h2"
               sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
                  color: 'primary.dark',
                  mb: subtitle ? 1.5 : 0,
               }}
            />
            {subtitle && <ScrambleText text={subtitle} variant="body1" color="text.secondary" sx={{ maxWidth: 500, mx: 'auto', fontSize: { xs: '0.95rem', md: '1.05rem' } }} />}
            <OrnateDivider />
         </Reveal>
      </Box>
   );
});

export default SectionTitle;
