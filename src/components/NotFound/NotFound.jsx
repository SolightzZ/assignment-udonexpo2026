import HomeIcon from '@mui/icons-material/Home';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import * as styles from './NotFound.styles';

export default function NotFound() {
   const { t } = useTranslation();
   const navigate = useNavigate();

   useEffect(() => {
      document.title = `404 - ${t('notfound.title')} | Udon Expo 2026`;
   }, [t]);

   return (
      <Box sx={styles.root}>
         <Container maxWidth="sm">
            <motion.div
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               style={{ textAlign: 'center' }}>
               <Typography variant="h1" sx={styles.errorCode}>
                  404
               </Typography>
               <Box sx={styles.divider} />
               <Typography variant="h4" sx={styles.title}>
                  {t('notfound.title')}
               </Typography>
               <Typography sx={styles.message}>
                  {t('notfound.message')}
               </Typography>
               <Button
                  variant="contained"
                  size="large"
                  startIcon={<HomeIcon />}
                  onClick={() => navigate('/')}
                  sx={styles.backButton}>
                  {t('notfound.back')}
               </Button>
            </motion.div>
         </Container>
      </Box>
   );
}
