import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import { motion } from 'framer-motion';

export default function NotFound() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0d3b0f 0%, #1B5E20 50%, #2e7d32 100%)',
      }}>
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '6rem', md: '8rem' },
              fontWeight: 700,
              color: 'rgba(255,255,255,0.08)',
              lineHeight: 1,
              mb: -4,
              userSelect: 'none',
            }}>
            404
          </Typography>
          <Box
            sx={{
              width: 80,
              height: 3,
              background: 'linear-gradient(90deg, transparent, #C8A64E, transparent)',
              mx: 'auto',
              mb: 4,
            }}
          />
          <Typography
            variant="h4"
            sx={{
              color: '#fff',
              fontWeight: 600,
              mb: 2,
              fontSize: { xs: '1.5rem', md: '1.75rem' },
            }}>
            {t('notfound.title')}
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.7)',
              mb: 5,
              maxWidth: 420,
              mx: 'auto',
              lineHeight: 1.7,
            }}>
            {t('notfound.message')}
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<HomeIcon />}
            onClick={() => navigate('/')}
            sx={{
              background: '#C8A64E',
              color: '#0d3b0f',
              fontWeight: 600,
              px: 5,
              py: 1.5,
              borderRadius: 2,
              '&:hover': {
                background: '#d4b35a',
              },
            }}>
            {t('notfound.back')}
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}
