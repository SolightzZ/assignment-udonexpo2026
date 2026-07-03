import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import ScrambleText from './ScrambleText';

const SOCIAL_LINKS = [
   { icon: FacebookIcon, href: 'https://facebook.com/udonexpo2026', label: 'Facebook' },
   { icon: XIcon, href: 'https://x.com/udonexpo2026', label: 'X' },
   { icon: InstagramIcon, href: 'https://instagram.com/udonexpo2026', label: 'Instagram' },
   { icon: YouTubeIcon, href: 'https://youtube.com/@udonexpo2026', label: 'YouTube' },
];

export default function Footer({ t }) {
   return (
      <Box
         component="footer"
         sx={{
            background: 'rgba(38, 77, 40, 0.88)',
            backdropFilter: 'blur(32px)',
            WebkitBackdropFilter: 'blur(32px)',
            color: '#000000',
            pt: { xs: 7, md: 9 },
            pb: 4,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
               content: '""',
               position: 'absolute',
               inset: 0,
               background:
                  'radial-gradient(ellipse at 15% 85%, rgba(200,166,78,0.06) 0%, transparent 55%), radial-gradient(ellipse at 85% 15%, rgba(76,175,80,0.04) 0%, transparent 50%)',
               pointerEvents: 'none',
            },
            '&::after': {
               content: '""',
               position: 'absolute',
               top: 0,
               left: 0,
               right: 0,
               height: 1,
               background:
                  'linear-gradient(90deg, transparent 5%, rgba(200,166,78,0.45) 50%, transparent 95%)',
            },
         }}>
         <Container maxWidth="md" sx={{ px: { xs: 2.5, sm: 4 }, position: 'relative', zIndex: 1 }}>
            {/* 3-column grid */}
            <Box
               sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
                  gap: { xs: 4, md: 5 },
                  mb: { xs: 5, md: 6 },
               }}>
               {/* Contact */}
               <Box>
                  <ScrambleText
                     text={t('footer.contact')}
                     sx={{
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '0.62rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        mb: 2.5,
                        pb: 1,
                        borderBottom: '1px solid rgba(255,255,255,0.12)',
                     }}
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.8 }}>
                     <Link
                        href="mailto:info@udonexpo2026.com"
                        underline="none"
                        sx={{
                           display: 'flex',
                           alignItems: 'center',
                           gap: 1.5,
                           color: 'rgba(255,255,255,0.7)',
                           fontSize: '0.8rem',
                           transition: 'all 0.3s ease',
                           '&:hover': {
                              color: '#C8A64E',
                              pl: 0.5,
                           },
                        }}>
                        <EmailIcon sx={{ fontSize: 15, color: 'rgba(255,255,255,0.4)' }} />
                        {t('footer.email')}
                     </Link>
                     <Link
                        href="tel:+6642123456"
                        underline="none"
                        sx={{
                           display: 'flex',
                           alignItems: 'center',
                           gap: 1.5,
                           color: 'rgba(255,255,255,0.7)',
                           fontSize: '0.8rem',
                           transition: 'all 0.3s ease',
                           '&:hover': {
                              color: '#C8A64E',
                              pl: 0.5,
                           },
                        }}>
                        <PhoneIcon sx={{ fontSize: 15, color: 'rgba(255,255,255,0.4)' }} />
                        {t('footer.phone')}
                     </Link>
                  </Box>
               </Box>

               {/* Social */}
               <Box>
                  <ScrambleText
                     text={t('footer.social')}
                     sx={{
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '0.62rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        mb: 2.5,
                        pb: 1,
                        borderBottom: '1px solid rgba(255,255,255,0.12)',
                     }}
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.8 }}>
                     {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                        <Link
                           key={label}
                           href={href}
                           target="_blank"
                           rel="noopener noreferrer"
                           underline="none"
                           sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1.5,
                              color: 'rgba(255,255,255,0.7)',
                              fontSize: '0.8rem',
                              transition: 'all 0.3s ease',
                              '&:hover': {
                                 color: '#C8A64E',
                                 pl: 0.5,
                              },
                           }}>
                           <Icon sx={{ fontSize: 15, color: 'rgba(255,255,255,0.4)' }} />
                           {label}
                        </Link>
                     ))}
                  </Box>
               </Box>

               {/* Organizer */}
               <Box>
                  <ScrambleText
                     text={t('footer.organizerLabel')}
                     sx={{
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '0.62rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        mb: 2.5,
                        pb: 1,
                        borderBottom: '1px solid rgba(255,255,255,0.12)',
                     }}
                  />
                  <ScrambleText
                     text={t('footer.organizer')}
                     sx={{
                        color: 'rgba(255,255,255,0.55)',
                        fontSize: '0.8rem',
                        lineHeight: 1.9,
                     }}
                  />
               </Box>
            </Box>

            {/* Bottom */}
            <Box
               sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 1.5,
               }}>
               <ScrambleText
                  text={t('footer.copyright')}
                  sx={{
                     color: 'rgba(255,255,255,0.3)',
                     fontSize: '0.68rem',
                     letterSpacing: '0.05em',
                  }}
               />
               <Link
                  href="#hero"
                  onClick={(e) => {
                     e.preventDefault();
                     document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  underline="none"
                  sx={{
                     color: 'rgb(200, 165, 78)',
                     fontSize: '0.65rem',
                     fontWeight: 600,
                     letterSpacing: '0.15em',
                     textTransform: 'uppercase',
                     transition: 'color 0.3s',
                     '&:hover': {
                        borderRadius: '4px',
                        textShadow: '0 0px 12px #ff9d00',
                     },
                  }}>
                  ↑ {t('footer.backToTop')}
               </Link>
            </Box>
         </Container>
      </Box>
   );
}
