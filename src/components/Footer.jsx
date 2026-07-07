import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Reveal from './Reveal';
import ScrambleText from './ScrambleText';

const LINKS = [
   {
      icon: LanguageIcon,
      href: 'https://udonthaniexpo2026.com/',
      label: 'udonthaniexpo2026.com',
      sub: 'Official Website',
      color: '#4CAF50',
   },
   {
      icon: FacebookIcon,
      href: 'https://www.facebook.com/profile.php?id=100083286131946',
      label: 'Udon Thani Expo 2026',
      sub: 'Facebook',
      color: '#4A90D9',
   },
];

const sectionLabelSx = {
   color: 'rgba(200,166,78,0.8)',
   fontWeight: 700,
   fontSize: '0.62rem',
   letterSpacing: '0.22em',
   textTransform: 'uppercase',
   mb: 2,
};

export default function Footer({ t }) {
   return (
      <Box
         component="footer"
         sx={{
            background: 'linear-gradient(175deg, #0c2415 0%, #091e10 50%, #071a0d 100%)',
            color: '#fff',
            pt: { xs: 7, md: 9 },
            pb: { xs: 3, md: 4 },
            position: 'relative',
            overflow: 'hidden',
            // Top accent line
            '&::before': {
               content: '""',
               position: 'absolute',
               top: 0,
               left: '5%',
               right: '5%',
               height: '1px',
               background: 'linear-gradient(90deg, transparent, rgba(200,166,78,0.5) 30%, rgba(76,175,80,0.25) 50%, rgba(200,166,78,0.5) 70%, transparent)',
            },
            // Ambient light
            '&::after': {
               content: '""',
               position: 'absolute',
               inset: 0,
               background:
                  'radial-gradient(ellipse at 15% 80%, rgba(200,166,78,0.04) 0%, transparent 45%), radial-gradient(ellipse at 85% 20%, rgba(76,175,80,0.03) 0%, transparent 40%)',
               pointerEvents: 'none',
            },
         }}>
         <Container maxWidth="md" sx={{ px: { xs: 3, sm: 4 }, position: 'relative', zIndex: 1 }}>
            {/* ── Main Content ── */}
            <Box
               sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1.4fr 1fr 1fr' },
                  gap: { xs: 5, md: 6 },
                  mb: { xs: 5, md: 6 },
               }}>
               {/* Brand */}
               <Reveal y={16} duration={0.5}>
                  <Box>
                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                        <Box
                           sx={{
                              width: 44,
                              height: 44,
                              borderRadius: '14px',
                              background: 'linear-gradient(135deg, rgba(27,94,32,0.25), rgba(200,166,78,0.1))',
                              border: '1px solid rgba(200,166,78,0.15)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                           }}>
                           <LocalFloristIcon sx={{ fontSize: 22, color: '#C8A64E' }} />
                        </Box>
                        <Box>
                           <Typography
                              variant="subtitle1"
                              sx={{
                                 fontWeight: 700,
                                 fontSize: '0.95rem',
                                 letterSpacing: '0.02em',
                                 background: 'linear-gradient(135deg, #f0e8d0, #C8A64E)',
                                 backgroundClip: 'text',
                                 WebkitBackgroundClip: 'text',
                                 WebkitTextFillColor: 'transparent',
                                 lineHeight: 1.2,
                              }}>
                              Udon Thani Expo
                           </Typography>
                           <Typography sx={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.68rem', letterSpacing: '0.1em' }}>
                              2026
                           </Typography>
                        </Box>
                     </Box>
                     <ScrambleText
                        text={t('footer.organizer')}
                        sx={{
                           color: 'rgba(255,255,255,0.35)',
                           fontSize: '0.78rem',
                           lineHeight: 1.8,
                           maxWidth: 280,
                        }}
                     />
                  </Box>
               </Reveal>

               {/* Organizer */}
               <Reveal y={16} delay={0.1} duration={0.5}>
                  <Box>
                     <ScrambleText text={t('footer.organizerLabel')} sx={sectionLabelSx} />
                     <ScrambleText
                        text={t('footer.organizer')}
                        sx={{
                           color: 'rgba(255,255,255,0.4)',
                           fontSize: '0.82rem',
                           lineHeight: 1.9,
                        }}
                     />
                  </Box>
               </Reveal>

               {/* Links */}
               <Reveal y={16} delay={0.2} duration={0.5}>
                  <Box>
                     <ScrambleText text={t('footer.social')} sx={sectionLabelSx} />
                     <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        {LINKS.map(({ icon: Icon, href, label, sub, color }) => (
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
                                 color: 'rgba(255,255,255,0.55)',
                                 py: 1,
                                 px: 1.5,
                                 borderRadius: '14px',
                                 transition: 'all 0.3s ease',
                                 '&:hover': {
                                    color: '#fff',
                                    background: 'rgba(255,255,255,0.04)',
                                    '& .link-icon-box': {
                                       background: `${color}18`,
                                       borderColor: `${color}30`,
                                    },
                                    '& .link-icon': {
                                       color,
                                    },
                                 },
                              }}>
                              <Box
                                 className="link-icon-box"
                                 sx={{
                                    width: 38,
                                    height: 38,
                                    borderRadius: '12px',
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                    transition: 'all 0.3s ease',
                                 }}>
                                 <Icon className="link-icon" sx={{ fontSize: 18, color: 'rgba(255,255,255,0.4)', transition: 'color 0.3s ease' }} />
                              </Box>
                              <Box>
                                 <Typography sx={{ fontSize: '0.84rem', color: 'inherit', lineHeight: 1.3, fontWeight: 500 }}>
                                    {label}
                                 </Typography>
                                 <Typography sx={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.25)', mt: 0.2 }}>
                                    {sub}
                                 </Typography>
                              </Box>
                           </Link>
                        ))}
                     </Box>
                  </Box>
               </Reveal>
            </Box>

            {/* ── Bottom Bar ── */}
            <Box
               sx={{
                  pt: 3,
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 2,
               }}>
               <ScrambleText
                  text={t('footer.copyright')}
                  sx={{
                     color: 'rgba(255,255,255,0.2)',
                     fontSize: '0.72rem',
                     letterSpacing: '0.04em',
                  }}
               />
               <Link
                  href="#hero"
                  onClick={(e) => {
                     e.preventDefault();
                     window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  underline="none"
                  sx={{
                     display: 'inline-flex',
                     alignItems: 'center',
                     gap: 1,
                     px: 2,
                     py: 0.8,
                     borderRadius: '12px',
                     border: '1px solid rgba(200,166,78,0.12)',
                     color: 'rgba(200,166,78,0.55)',
                     fontSize: '0.7rem',
                     fontWeight: 600,
                     letterSpacing: '0.1em',
                     textTransform: 'uppercase',
                     transition: 'all 0.3s ease',
                     '&:hover': {
                        color: '#C8A64E',
                        borderColor: 'rgba(200,166,78,0.3)',
                        background: 'rgba(200,166,78,0.05)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(200,166,78,0.08)',
                     },
                  }}>
                  <ArrowUpwardIcon sx={{ fontSize: 14 }} />
                  {t('footer.backToTop')}
               </Link>
            </Box>
         </Container>
      </Box>
   );
}
