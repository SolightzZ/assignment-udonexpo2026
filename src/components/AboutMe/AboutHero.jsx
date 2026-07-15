import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import Reveal from '../Reveal';
import useScramble from '../../hooks/useScramble';

export default function AboutHero() {
  const { t } = useTranslation();
  const scrambledBadge = useScramble(t('aboutme.badge'));
  const scrambledTitle = useScramble(t('aboutme.title'));
  const scrambledSubtitle = useScramble(t('aboutme.subtitle'));

  return (
    <Box
      id="aboutme-header"
      sx={{
        pt: { xs: 14, md: 20 },
        pb: { xs: 6, md: 8 },
      }}>
      <Container maxWidth={false} sx={{ maxWidth: 900, mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <Reveal duration={0.6}>
          <Typography
            variant="overline"
            sx={{
              color: 'secondary.main',
              fontWeight: 700,
              letterSpacing: 2,
              display: 'block',
              textAlign: 'center',
              mb: 1,
            }}>
            {scrambledBadge}
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              textAlign: 'center',
              fontWeight: 700,
              color: (theme) => (theme.palette.mode === 'dark' ? '#fff' : 'primary.dark'),
              fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
              mb: 2,
            }}>
            {scrambledTitle}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
              fontSize: { xs: '0.95rem', md: '1.05rem' },
            }}>
            {scrambledSubtitle}
          </Typography>
        </Reveal>
      </Container>
    </Box>
  );
}
