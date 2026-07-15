import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import Reveal from '../Reveal';

export default function AboutInfoCard({ item }) {
  const { t } = useTranslation();
  return (
    <Reveal duration={0.5} style={{ width: '100%', height: '100%' }}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          p: 3,
          borderRadius: 4,
          border: '1px solid',
          borderColor: 'divider',
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? 'background.default' : 'grey.50',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: 'secondary.main',
            transform: 'translateY(-4px)',
            boxShadow: (theme) => theme.palette.custom.cardShadow,
          },
        }}>
        <Box sx={{ mb: 1.5, color: 'secondary.main' }}>
          <item.Icon sx={{ fontSize: 40, lineHeight: 1 }} />
        </Box>
        <Typography
          variant="body1"
          sx={{ fontWeight: 600, mb: 0.5, color: 'text.primary' }}>
          {t(`aboutme.info.${item.key}.label`)}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {t(`aboutme.info.${item.key}.value`)}
        </Typography>
      </Box>
    </Reveal>
  );
}
