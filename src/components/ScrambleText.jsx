import Typography from '@mui/material/Typography';
import { memo } from 'react';
import useScramble from '../hooks/useScramble';

const srOnly = { position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap' };

const ScrambleText = memo(function ScrambleText({ text, duration = 800, delay = 0, variant, component, sx, ...props }) {
   const scrambled = useScramble(text, { duration, delay });
   return (
      <Typography
         variant={variant}
         component={component}
         sx={[
            { position: 'relative' },
            ...(Array.isArray(sx) ? sx : [sx]),
         ]}
         {...props}
      >
         <span style={srOnly}>{text}</span>
         <span aria-hidden="true">{scrambled}</span>
      </Typography>
   );
});

export default ScrambleText;
