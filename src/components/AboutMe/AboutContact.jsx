import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CodeIcon from '@mui/icons-material/Code';
import { useTranslation } from 'react-i18next';
import Reveal from '../Reveal';
import SectionTitle from '../SectionTitle';

export default function AboutContact() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: 'custom.sectionBg',
      }}>
      <Container maxWidth={false} sx={{ maxWidth: 800, mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <Reveal duration={0.6}>
          <SectionTitle title={t('aboutme.contact.title')} subtitle={t('aboutme.contact.subtitle')} />
        </Reveal>
        <Reveal duration={0.6} delay={0.2}>
          <Box sx={{ textAlign: 'center' }}>
            <Box
              component="a"
              href="https://github.com/SolightzZ"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                px: 4,
                py: 2,
                borderRadius: '16px',
                border: '1px solid',
                borderColor: 'divider',
                color: (theme) => (theme.palette.mode === 'dark' ? '#fff' : 'primary.main'),
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: 'action.hover',
                  borderColor: 'secondary.main',
                  transform: 'translateY(-2px)',
                  boxShadow: (theme) => theme.palette.custom.cardShadow,
                },
              }}>
              <CodeIcon sx={{ fontSize: 22 }} />
              <span>{t('aboutme.contact.github')}</span>
            </Box>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
}
