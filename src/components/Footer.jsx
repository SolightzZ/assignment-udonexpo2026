import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import ScrambleText from './ScrambleText';

const SOCIAL_LINKS = [
   { icon: FacebookIcon, href: 'https://facebook.com/udonexpo2026', label: 'Facebook' },
   { icon: XIcon, href: 'https://x.com/udonexpo2026', label: 'X (Twitter)' },
   { icon: InstagramIcon, href: 'https://instagram.com/udonexpo2026', label: 'Instagram' },
   { icon: YouTubeIcon, href: 'https://youtube.com/@udonexpo2026', label: 'YouTube' },
];

function FooterSection({ title, children }) {
   return (
      <Box>
         <ScrambleText
            text={title}
            variant="subtitle2"
            sx={{
               color: 'secondary.main',
               fontWeight: 700,
               textTransform: 'uppercase',
               letterSpacing: 1.5,
               mb: 2,
            }}
         />
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
         <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
            <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: 4 }}>
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
                     <Box
                        component="nav"
                        aria-label="social media"
                        sx={{ display: 'flex', gap: 1.5 }}>
                        {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                           <Link
                              key={label}
                              href={href}
                              aria-label={label}
                              target="_blank"
                              rel="noopener noreferrer"
                              sx={{
                                 width: 44,
                                 height: 44,
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
                  <FooterSection title={t('footer.organizerLabel')}>
                     <ScrambleText
                        text={t('footer.organizer')}
                        variant="body2"
                        sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}
                     />
                  </FooterSection>
               </Grid>
            </Grid>

            <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 3 }} />

            <ScrambleText
               text={t('footer.copyright')}
               variant="body2"
               sx={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}
            />

            <ScrambleText
               component="a"
               href="#hero"
               onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
               }}
               aria-label={t('footer.backToTop')}
               text={`↑ ${t('footer.backToTop')}`}
               sx={{
                  display: { xs: 'block', md: 'none' },
                  textAlign: 'center',
                  mt: 3,
                  color: 'secondary.main',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'none',
                  '&:hover': { color: 'secondary.light' },
               }}
            />
         </Container>
      </Box>
   );
}
