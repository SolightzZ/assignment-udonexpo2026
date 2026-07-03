import Box from '@mui/material/Box';

/**
 * Circular icon container with tinted background.
 *
 * @param {{ icon: React.ElementType, color?: string, size?: number, iconSize?: number }} props
 */
export default function IconCircle({ icon: Icon, color = '#1B5E20', size = 56, iconSize = 28 }) {
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
         }}>
         <Icon sx={{ color, fontSize: iconSize }} />
      </Box>
   );
}
