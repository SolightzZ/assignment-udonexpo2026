import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const SOCIAL_LINKS = [
   { icon: FacebookIcon, href: '#', label: 'Facebook' },
   { icon: XIcon, href: '#', label: 'X (Twitter)' },
   { icon: InstagramIcon, href: '#', label: 'Instagram' },
   { icon: YouTubeIcon, href: '#', label: 'YouTube' },
];

function FooterSection({ title, children }) {
   return (
      <Box>
         <Typography
            variant="subtitle2"
            sx={{
               color: 'secondary.main',
               fontWeight: 700,
               textTransform: 'uppercase',
               letterSpacing: 1.5,
               mb: 2,
            }}>
            {title}
         </Typography>
         {children}
      </Box>
   );
}

export default function Footer({ t }) {
   return (
      <Box
         component="footer"
         sx={{
            background: 'linear-gradient(135deg, #0D3B0F 0%, #1B5E20 50%, #0D3B0F 100%)',
            color: '#fff',
            pt: { xs: 6, md: 8 },
            pb: 4,
         }}>
         <Container maxWidth="lg">
            <Grid container spacing={4} sx={{ mb: 4 }}>
               {/* Contact */}
               <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <FooterSection title={t('footer.contact')}>
                     <Box
                        sx={{
                           display: 'flex',
                           alignItems: 'center',
                           gap: 1.5,
                           mb: 1.5,
                           p: 1.5,
                           borderRadius: 2,
                           border: '1px solid transparent',
                           transition: 'border-color 0.3s ease',
                           '&:hover': { borderColor: 'secondary.main' },
                        }}>
                        <EmailIcon fontSize="small" sx={{ color: 'secondary.light' }} />
                        <Link
                           href="mailto:info@udonexpo2026.com"
                           color="inherit"
                           underline="hover"
                           sx={{ fontSize: '0.9rem' }}>
                           {t('footer.email')}
                        </Link>
                     </Box>
                     <Box
                        sx={{
                           display: 'flex',
                           alignItems: 'center',
                           gap: 1.5,
                           p: 1.5,
                           borderRadius: 2,
                           border: '1px solid transparent',
                           transition: 'border-color 0.3s ease',
                           '&:hover': { borderColor: 'secondary.main' },
                        }}>
                        <PhoneIcon fontSize="small" sx={{ color: 'secondary.light' }} />
                        <Link
                           href="tel:+6642123456"
                           color="inherit"
                           underline="hover"
                           sx={{ fontSize: '0.9rem' }}>
                           {t('footer.phone')}
                        </Link>
                     </Box>
                  </FooterSection>
               </Grid>

               {/* Social */}
               <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                  <FooterSection title={t('footer.social')}>
                     <Box sx={{ display: 'flex', gap: 1 }}>
                        {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                           <Link
                              key={label}
                              href={href}
                              aria-label={label}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                 width: 40,
                                 height: 40,
                                 borderRadius: '50%',
                                 background: 'rgba(255,255,255,0.1)',
                                 border: '1px solid transparent',
                                 display: 'flex',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                                 color: '#fff',
                                 transition:
                                    'border-color 0.3s ease, background 0.3s ease, transform 0.3s ease',
                                 '&:hover': {
                                    background: 'rgba(200, 166, 78, 0.3)',
                                    borderColor: 'secondary.main',
                                    transform: 'translateY(-3px)',
                                 },
                              }}>
                              <Icon fontSize="small" />
                           </Link>
                        ))}
                     </Box>
                  </FooterSection>
               </Grid>

               {/* Organizer */}
               <Grid size={{ xs: 12, sm: 12, md: 4 }}>
                  <FooterSection title={t('footer.organizer').split(' ')[0]}>
                     <Typography
                        variant="body2"
                        sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                        {t('footer.organizer')}
                     </Typography>
                  </FooterSection>
               </Grid>
            </Grid>

            <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 3 }} />

            <Typography
               variant="body2"
               sx={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
               {t('footer.copyright')}
            </Typography>
         </Container>
      </Box>
   );
}
