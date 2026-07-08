import Box from '@mui/material/Box';
import { alpha, lighten } from '@mui/material/styles';
import { memo } from 'react';

function resolveColor(c, theme) {
   if (typeof c === 'string' && c.includes('.')) {
      return c.split('.').reduce((obj, key) => obj?.[key], theme.palette) ?? c;
   }
   return c;
}

const IconCircle = memo(function IconCircle({ icon: Icon, color = '#618764', size = 56, iconSize = 28, sx: sxProp }) {
   return (
      <Box
         sx={[
            (theme) => {
               const isDark = theme.palette.mode === 'dark';
               const resolved = resolveColor(color, theme);
               const iconColor = isDark ? lighten(resolved, 0.6) : resolved;
               const bgColor = isDark ? alpha(iconColor, 0.15) : `${resolved}12`;
               
               return {
                  borderRadius: '50%',
                  background: bgColor,
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
                     border: isDark ? `1px solid ${alpha(iconColor, 0.3)}` : `1px solid ${theme.palette.custom.iconCircleRing}`,
                     opacity: 0,
                     transition: 'opacity 0.3s ease',
                  },
                  '.MuiCard-root:hover &': {
                     transform: 'scale(1.05)',
                     '&::after': { opacity: 1 },
                  },
               };
            },
            {
               width: size,
               height: size,
               ...sxProp,
            }
         ]}>
         <Icon 
            sx={[
               (theme) => {
                   const isDark = theme.palette.mode === 'dark';
                   const resolved = resolveColor(color, theme);
                   const iconColor = isDark ? lighten(resolved, 0.6) : resolved;
                  return { color: iconColor };
               },
               { fontSize: iconSize }
            ]} 
         />
      </Box>
   );
});

export default IconCircle;
