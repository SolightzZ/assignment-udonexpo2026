import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function PageLoader() {
   return (
      <Box
         sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
         }}>
         <CircularProgress color="primary" />
      </Box>
   );
}
