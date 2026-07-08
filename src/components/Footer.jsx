import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { COLORS } from '../theme/theme';
import { useTranslation } from 'react-i18next';
import Reveal from './Reveal';
import ScrambleText from './ScrambleText';

const LINKS = [
   {
      icon: LanguageIcon,
      href: 'https://udonthaniexpo2026.com/',
      label: 'udonthaniexpo2026.com',
      sub: 'Official Website',
   },
   {
      icon: FacebookIcon,
      href: 'https://www.facebook.com/profile.php?id=100083286131946',
      label: 'Udon Thani Expo 2026',
      sub: 'Facebook',
   },
];

const sectionLabelSx = {
   color: (theme) => theme.palette.custom.footerSectionLabel,
   fontWeight: 700,
   fontSize: '0.62rem',
   letterSpacing: '0.22em',
   textTransform: 'uppercase',
   mb: 2,
};

export default function Footer() {
   const { t } = useTranslation();
   return (
      <Box
         component="footer"
         sx={(theme) => ({
             background: `linear-gradient(175deg, ${theme.palette.custom.footerBg1} 0%, ${theme.palette.custom.footerBg2} 50%, ${theme.palette.custom.footerBg3} 100%)`,
             color: theme.palette.custom.footerText,
             pt: { xs: 7, md: 9 },
             pb: { xs: 3, md: 4 },
             position: 'relative',
             overflow: 'visible',
             boxShadow: `0 50vh 0 50vh ${theme.palette.custom.footerBoxShadow}`,
             clipPath: 'inset(0 -50vh -50vh -50vh)',
             '&::before': {
               content: '""',
               position: 'absolute',
               top: 0,
               left: '5%',
               right: '5%',
               height: '1px',
             background: (theme) => `linear-gradient(90deg, transparent, ${theme.palette.custom.footerAccentLine1} 30%, ${theme.palette.custom.footerAccentLine2} 50%, ${theme.palette.custom.footerAccentLine1} 70%, transparent)`,
             },
             '&::after': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: (theme) => `radial-gradient(ellipse at 15% 80%, ${theme.palette.custom.footerAmbientBg1} 0%, transparent 45%), radial-gradient(ellipse at 85% 20%, ${theme.palette.custom.footerAmbientBg2} 0%, transparent 40%)`,
                pointerEvents: 'none',
             },
          })}>
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
                         sx={(theme) => ({
                            width: 44,
                            height: 44,
                            borderRadius: '14px',
                            background: `linear-gradient(135deg, ${theme.palette.custom.footerBrandBoxBg1}, ${theme.palette.custom.footerBrandBoxBg2})`,
                            border: `1px solid ${theme.palette.custom.footerBrandBoxBorder}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                         })}>
                         <LocalFloristIcon sx={{ color: (theme) => theme.palette.custom.footerIconGold, fontSize: 22 }} />
                      </Box>
                      <Box>
                         <Typography
                            variant="subtitle1"
                            sx={(theme) => ({
                               fontWeight: 700,
                               fontSize: '0.95rem',
                               letterSpacing: '0.02em',
                               background: `linear-gradient(135deg, ${theme.palette.custom.footerBrandTitle1}, ${theme.palette.custom.footerIconGold})`,
                               backgroundClip: 'text',
                               WebkitBackgroundClip: 'text',
                               WebkitTextFillColor: 'transparent',
                               lineHeight: 1.2,
                            })}>
                            Udon Thani Expo
                         </Typography>
                         <Typography sx={{ color: (theme) => theme.palette.custom.footerTextDim, fontSize: '0.68rem', letterSpacing: '0.1em' }}>
                            2026
                         </Typography>
                      </Box>
                     </Box>
                      <ScrambleText
                         text={t('footer.organizer')}
                         sx={{
                            color: (theme) => theme.palette.custom.footerTextMuted,
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
                            color: (theme) => theme.palette.custom.footerTextSubtle,
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
                         {LINKS.map(({ icon: Icon, href, label, sub }, linkIndex) => {
                            const linkColor = COLORS.footerLinks[linkIndex];
                            return (
                            <Link
                               key={label}
                               href={href}
                               target="_blank"
                               rel="noopener noreferrer"
                               underline="none"
                               sx={(theme) => ({
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: 1.5,
                                  color: theme.palette.custom.footerLinkDefault,
                                  py: 1,
                                  px: 1.5,
                                  borderRadius: '14px',
                                  transition: 'all 0.3s ease',
                  '&:hover': {
                                      color: theme.palette.custom.footerLinkHoverColor,
                                      background: theme.palette.custom.footerLinkHoverBg,
                                      '& > div:first-of-type': {
                                         background: `${linkColor}18`,
                                         borderColor: `${linkColor}30`,
                                      },
                                      '& > div:first-of-type svg': {
                                         color: linkColor,
                                      },
                                   },
                               })}>
                                <Box
                                   sx={(theme) => ({
                                     width: 38,
                                     height: 38,
                                     borderRadius: '12px',
                                     background: theme.palette.custom.footerIconBoxBg,
                                     border: `1px solid ${theme.palette.custom.footerIconBoxBorder}`,
                                     display: 'flex',
                                     alignItems: 'center',
                                     justifyContent: 'center',
                                     flexShrink: 0,
                                     transition: 'all 0.3s ease',
                                  })}>
                                   <Icon sx={(theme) => ({ fontSize: 18, color: theme.palette.custom.footerIconColor, transition: 'color 0.3s ease' })} />
                               </Box>
                               <Box>
                                  <Typography sx={{ fontSize: '0.84rem', color: 'inherit', lineHeight: 1.3, fontWeight: 500 }}>
                                     {label}
                                  </Typography>
                                  <Typography sx={(theme) => ({ fontSize: '0.68rem', color: theme.palette.custom.footerSubLabel, mt: 0.2 })}>
                                     {sub}
                                  </Typography>
                               </Box>
                            </Link>
                            );
                         })}
                     </Box>
                  </Box>
               </Reveal>
            </Box>

            {/* ── Bottom Bar ── */}
            <Box
                sx={(theme) => ({
                   pt: 3,
                   borderTop: `1px solid ${theme.palette.custom.footerBottomBorder}`,
                   display: 'flex',
                   flexDirection: { xs: 'column', sm: 'row' },
                   alignItems: 'center',
                   justifyContent: 'space-between',
                   gap: 2,
                })}>
                <ScrambleText
                   text={t('footer.copyright')}
                   sx={{
                      color: (theme) => theme.palette.custom.footerCopyright,
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
                   sx={(theme) => ({
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 1,
                      px: 2,
                      py: 0.8,
                      borderRadius: '12px',
                      border: `1px solid ${theme.palette.custom.footerTopBtnBorder}`,
                      color: theme.palette.custom.footerTopBtnColor,
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                         color: theme.palette.custom.footerTopBtnHoverColor,
                         borderColor: theme.palette.custom.footerTopBtnHoverBorder,
                         background: theme.palette.custom.footerTopBtnHoverBg,
                         transform: 'translateY(-2px)',
                         boxShadow: `0 6px 20px ${theme.palette.custom.footerTopBtnHoverShadow}`,
                      },
                   })}>
                  <ArrowUpwardIcon sx={{ fontSize: 14 }} />
                  {t('footer.backToTop')}
               </Link>
            </Box>
         </Container>
      </Box>
   );
}
