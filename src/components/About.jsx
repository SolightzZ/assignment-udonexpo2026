import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupIcon from '@mui/icons-material/Group';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const INFO_CARDS = [
   { icon: CalendarMonthIcon, label: 'about.date', value: 'about.dateValue' },
   { icon: LocationOnIcon, label: 'about.location', value: 'about.locationValue' },
   { icon: GroupIcon, label: 'about.organizer', value: 'about.organizerValue' },
];

export default function About({ t }) {
   return (
      <Box id="about" sx={{ py: { xs: 8, md: 12 }, background: '#fff' }}>
         <Container maxWidth="lg">
            <SectionTitle title={t('about.title')} />

            <motion.div
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: '-80px' }}
               transition={{ duration: 0.6 }}>
               <Typography
                  variant="body1"
                  sx={{
                     textAlign: 'center',
                     maxWidth: 800,
                     mx: 'auto',
                     mb: 6,
                     color: 'text.secondary',
                     fontSize: { xs: '0.95rem', md: '1.05rem' },
                  }}>
                  {t('about.description')}
               </Typography>
            </motion.div>

            <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
               {INFO_CARDS.map(({ icon: Icon, label, value }, index) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={label}>
                     <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        style={{ height: '100%' }}>
                        <Card
                            sx={{
                               p: 4,
                               textAlign: 'center',
                               height: '100%',
                               display: 'flex',
                               flexDirection: 'column',
                               alignItems: 'center',
                               gap: 2,
                               overflow: 'visible',
                            }}>
                           <Box
                               sx={{
                                  width: 64,
                                  height: 64,
                                  borderRadius: '50%',
                                  flexShrink: 0,
                                  background: 'rgba(27, 94, 32, 0.08)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  position: 'relative',
                                  transition: 'background 0.3s ease, transform 0.3s ease',
                                  '&::after': {
                                     content: '""',
                                     position: 'absolute',
                                     inset: -2,
                                     borderRadius: '50%',
                                     border: '1px solid rgba(200, 166, 78, 0.2)',
                                     opacity: 0,
                                     transition: 'opacity 0.3s ease',
                                  },
                                  '.MuiCard-root:hover &': {
                                     transform: 'scale(1.05)',
                                     background: 'rgba(200, 166, 78, 0.12)',
                                     '&::after': { opacity: 1 },
                                  },
                               }}>
                               <Icon sx={{ color: 'primary.main', fontSize: 30 }} />
                            </Box>
                           <Box sx={{ flexGrow: 1 }}>
                              <Typography
                                 variant="overline"
                                 sx={{
                                    color: 'secondary.main',
                                    fontWeight: 600,
                                    letterSpacing: 1,
                                 }}>
                                 {t(label)}
                              </Typography>
                              <Typography variant="body1" sx={{ fontWeight: 500, mt: 0.5 }}>
                                 {t(value)}
                              </Typography>
                           </Box>
                        </Card>
                     </motion.div>
                  </Grid>
               ))}
            </Grid>
         </Container>
      </Box>
   );
}
