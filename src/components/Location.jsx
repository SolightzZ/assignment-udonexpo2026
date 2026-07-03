import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

export default function Location({ t }) {
   return (
      <Box id="location" sx={{ py: { xs: 8, md: 12 }, background: '#F6FFF6' }}>
         <Container maxWidth="lg">
            <SectionTitle title={t('location.title')} />

            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}>
               <Card
                  sx={{
                     overflow: 'hidden',
                     borderRadius: 1,
                  }}>
                  <Box
                     sx={{
                        width: '100%',
                        height: { xs: 280, md: 400 },
                        position: 'relative',
                        overflow: 'hidden',
                     }}>
                     <iframe
                        title="Expo Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31045.68686511353!2d102.710811!3d17.415761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3123b8a0a0a0a0a0%3A0x0!2zMTfCsDI0JzU2LjciTiAxMDLCsDQyJzM4LjkiRQ!5e0!3m2!1sth!2sth!4v1"
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
                           <LocationOnIcon color="primary" />
                           <Typography variant="body1" sx={{ fontWeight: 500 }}>
                              {t('location.address')}
                           </Typography>
                        </Box>
                        <Button
                           variant="outlined"
                           color="primary"
                           endIcon={<OpenInNewIcon />}
                           href="https://maps.google.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           sx={{ flexShrink: 0 }}>
                           {t('location.direction')}
                        </Button>
                     </Box>
                  </CardContent>
               </Card>
            </motion.div>
         </Container>
      </Box>
   );
}
