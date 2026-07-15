import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BadgeIcon from '@mui/icons-material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import { useTranslation } from 'react-i18next';
import Reveal from '../Reveal';
import SectionTitle from '../SectionTitle';
import AboutInfoCard from './AboutInfoCard';

const PERSONAL_INFO = [
  { key: 'name', Icon: PersonIcon },
  { key: 'num', Icon: BadgeIcon },
  { key: 'major', Icon: SchoolIcon },
];

export default function AboutBio() {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: 'background.paper',
      }}>
      <Container maxWidth={false} sx={{ maxWidth: 800, mx: 'auto', px: { xs: 2, sm: 3 } }}>
        <Reveal duration={0.6}>
          <SectionTitle title={t('aboutme.bio.title')} subtitle={t('aboutme.bio.subtitle')} />
        </Reveal>
        <Reveal duration={0.6} delay={0.2}>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.8,
              fontSize: { xs: '0.95rem', md: '1.05rem' },
              whiteSpace: 'pre-line',
              textAlign: 'center',
              maxWidth: 650,
              mx: 'auto',
              mt: 2,
            }}>
            {t('aboutme.bio.text')}
          </Typography>
        </Reveal>

        {/* Personal Info Cards */}
        <Grid container spacing={3} sx={{ mt: 4, justifyContent: 'center' }}>
          {PERSONAL_INFO.map((item) => (
            <Grid size={{ xs: 12, sm: 4 }} key={item.key} sx={{ display: 'flex' }}>
              <AboutInfoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
