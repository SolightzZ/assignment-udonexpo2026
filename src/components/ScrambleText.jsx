import Typography from '@mui/material/Typography';
import useScramble from '../hooks/useScramble';

export default function ScrambleText({
   text,
   duration = 800,
   delay = 0,
   variant,
   component,
   sx,
   ...props
}) {
   const scrambled = useScramble(text, { duration, delay });
   return (
       <Typography variant={variant} component={component} sx={sx} aria-hidden="true" {...props}>
         {scrambled}
      </Typography>
   );
}
