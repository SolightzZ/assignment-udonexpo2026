import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupIcon from '@mui/icons-material/Group';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconCircle from './IconCircle';
import Reveal from './Reveal';
import ScrambleText from './ScrambleText';
import SectionTitle from './SectionTitle';

const INFO_CARDS = [
   { icon: CalendarMonthIcon, label: 'about.date', value: 'about.dateValue' },
   { icon: LocationOnIcon, label: 'about.location', value: 'about.locationValue' },
   { icon: GroupIcon, label: 'about.organizer', value: 'about.organizerValue' },
];

export default function About({ t }) {
   return (
      <Box id="about" sx={{ py: { xs: 8, md: 12 }, background: '#fff' }}>
         <Container maxWidth={false} sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, sm: 3 } }}>
            <SectionTitle title={t('about.title')} />

            <Reveal y={40} margin="-80px" duration={0.6}>
               <ScrambleText
                  text={t('about.description')}
                  variant="body1"
                  sx={{
                     textAlign: 'center',
                     maxWidth: { xs: '100%', sm: 520, md: 760 },
                     px: { xs: 1, sm: 0 },
                     mx: 'auto',
                     mb: { xs: 7, md: 6 },
                     color: 'text.secondary',
                     fontSize: { xs: '0.95rem', md: '1.05rem' },
                     lineHeight: 1.9,
                  }}
               />
            </Reveal>

            <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
               {INFO_CARDS.map(({ icon: Icon, label, value }, index) => (
                  <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={label} sx={{ display: 'flex' }}>
                     <Reveal delay={index * 0.15} style={{ width: '100%', height: '100%' }}>
                        <Card
                           sx={{
                              textAlign: 'center',
                              width: '100%',
                              height: '100%',
                              minHeight: { xs: 220 },
                              display: 'flex',
                              flexDirection: 'column',
                              overflow: 'visible',
                           }}>
                           <CardContent
                              sx={{
                                 p: { xs: 3, md: 4 },
                                 flexGrow: 1,
                                 display: 'flex',
                                 flexDirection: 'column',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 gap: 2,
                              }}>
                              <Box
                                 sx={{
                                    position: 'relative',
                                    transition: 'transform 0.3s ease',
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
                                       '&::after': { opacity: 1 },
                                    },
                                 }}>
                                 <IconCircle icon={Icon} color="#1B5E20" size={{ xs: 56, md: 64 }} iconSize={30} />
                              </Box>
                              <Box>
                                 <ScrambleText
                                    text={t(label)}
                                    variant="overline"
                                    component="div"
                                    sx={{
                                       color: 'secondary.main',
                                       fontWeight: 600,
                                       letterSpacing: 1,
                                       display: 'block',
                                    }}
                                 />
                                 <ScrambleText text={t(value)} variant="body1" sx={{ fontWeight: 500, mt: 0.5 }} />
                              </Box>
                           </CardContent>
                        </Card>
                     </Reveal>
                  </Grid>
               ))}
            </Grid>
         </Container>
      </Box>
   );
}
