import LocationOnIcon from '@mui/icons-material/LocationOn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Reveal from './Reveal';
import ScrambleText from './ScrambleText';
import { useTranslation } from 'react-i18next';
import SectionTitle from './SectionTitle';

export default function Location() {
   const { t } = useTranslation();
   return (
      <Box id="location" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'custom.sectionBg' }}>
         <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
            <SectionTitle title={t('location.title')} />

            <Reveal duration={0.6}>
               <Card
                  sx={{
                     overflow: 'hidden',
                  }}>
                  <Box
                     sx={{
                        width: '100%',
                        height: { xs: 280, md: 400 },
                        position: 'relative',
                        overflow: 'hidden',
                     }}>
                     <iframe
                        title={t('location.title')}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.591248597305!2d102.793777!3d17.398715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3123b8f5a8e8e8e9%3A0x8e8e8e8e8e8e8e8e!2sUdon%20Thani%20International%20Horticultural%20Expo%202026!5e0!3m2!1sth!2sth!4v1"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                     />
                  </Box>

                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                     <Box
                        sx={{
                           display: 'flex',
                           flexDirection: { xs: 'column', sm: 'row' },
                           alignItems: { sm: 'center' },
                           gap: 2,
                        }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flex: 1 }}>
                           <LocationOnIcon sx={{ color: (theme) => theme.palette.mode === 'dark' ? 'primary.light' : 'primary.main' }} />
                           <ScrambleText text={t('location.address')} variant="body1" sx={{ fontWeight: 500 }} />
                        </Box>
                        <Button
                           variant="outlined"
                           color="primary"
                           endIcon={<OpenInNewIcon />}
                           href="https://maps.google.com/?q=Udon+Thani+International+Horticultural+Expo+2026"
                           target="_blank"
                           rel="noopener noreferrer"
                           sx={{ 
                              flexShrink: 0,
                              color: (theme) => theme.palette.mode === 'dark' ? '#fff' : 'primary.main',
                              borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'primary.main',
                              '&:hover': {
                                 borderColor: (theme) => theme.palette.mode === 'dark' ? '#fff' : 'primary.dark',
                                 bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(97, 135, 100, 0.05)',
                              }
                           }}>
                           {t('location.direction')}
                        </Button>
                     </Box>
                  </CardContent>
               </Card>
            </Reveal>
         </Container>
      </Box>
   );
}
