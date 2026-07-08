import CodeIcon from '@mui/icons-material/Code';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import TechCategoryCard, { TECH_CATEGORIES } from '../components/Tech/TechCategoryCard';
import useScramble from '../hooks/useScramble';

export default function Tech() {
   const { t } = useTranslation();
   const scrambledBadge = useScramble(t('tech.badge'));
   const scrambledTitle = useScramble(t('tech.title'));
   const scrambledSubtitle = useScramble(t('tech.subtitle'));

   return (
      <Box>
         {/* Header */}
         <Box
            id="tech-header"
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
                        color: (theme) => theme.palette.mode === 'dark' ? '#fff' : 'primary.dark',
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

         {/* Tech Stack Grid */}
         <Box id="tech-stack" sx={{ pt: { xs: 6, md: 8 }, pb: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
            <Container maxWidth={false} sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, sm: 3 } }}>
               <Grid container spacing={{ xs: 3, md: 4 }}>
                  {TECH_CATEGORIES.map((category, index) => (
                     <Grid size={{ xs: 12, sm: 6, md: 4 }} key={category.key} sx={{ display: 'flex' }}>
                        <TechCategoryCard category={category} index={index} t={t} />
                     </Grid>
                  ))}
               </Grid>
            </Container>
         </Box>

         <Box
            sx={{
               py: { xs: 8, md: 10 },
               bgcolor: 'custom.sectionBg',
            }}>
            <Container maxWidth={false} sx={{ maxWidth: 800, mx: 'auto', px: { xs: 2, sm: 3 } }}>
               <Reveal duration={0.6}>
                  <SectionTitle title={t('tech.source.title')} subtitle={t('tech.source.subtitle')} />
                  <Box sx={{ textAlign: 'center' }}>
                     <Box
                        component="a"
                        href="https://github.com/SolightzZ/assignment-udonexpo2026"
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
                            color: (theme) => theme.palette.mode === 'dark' ? '#fff' : 'primary.main',
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
                        <span>github.com/SolightzZ/assignment-udonexpo2026</span>
                     </Box>
                  </Box>
               </Reveal>
            </Container>
         </Box>

         <Footer t={t} />
      </Box>
   );
}
