import Box from '@mui/material/Box';
import { memo } from 'react';

const IconCircle = memo(function IconCircle({ icon: Icon, color = '#1B5E20', size = 56, iconSize = 28, sx: sxProp }) {
   return (
      <Box
         sx={{
            width: size,
            height: size,
            borderRadius: '50%',
            background: `${color}12`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            position: 'relative',
            transition: 'transform 0.3s ease',
            '&::after': {
               content: '""',
               position: 'absolute',
               inset: -2,
               borderRadius: '50%',
               border: '1px solid rgba(200, 166, 78, 0.2)',
               opacity: 0,
               transition: 'opacity 0.3s ease',
            },
            '.MuiCard-root:hover &': {
               transform: 'scale(1.05)',
               '&::after': { opacity: 1 },
            },
            ...sxProp,
         }}>
         <Icon sx={{ color, fontSize: iconSize }} />
      </Box>
   );
});

export default IconCircle;
