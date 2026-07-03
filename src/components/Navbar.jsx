import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

const NAV_ITEMS = [
   { key: 'home', href: '#hero' },
   { key: 'about', href: '#about' },
   { key: 'highlights', href: '#highlights' },
   { key: 'gallery', href: '#gallery' },
   { key: 'timeline', href: '#timeline' },
   { key: 'visitorInfo', href: '#visitor-info' },
   { key: 'location', href: '#location' },
   { key: 'tech', href: '/tech', isRoute: true },
];

export default function Navbar({ onLanguageChanging }) {
   const { t } = useTranslation();
   const navigate = useNavigate();
   const location = useLocation();
   const isHome = location.pathname === '/' || location.pathname === '';
   const isMobile = useMediaQuery('(max-width:1100px)');
   const [drawerOpen, setDrawerOpen] = useState(false);
   const [activeKey, setActiveKey] = useState('home');
   const firstItemRef = useRef(null);

   useEffect(() => {
      if (drawerOpen && firstItemRef.current) {
         firstItemRef.current.focus();
      }
   }, [drawerOpen]);

   useEffect(() => {
      if (!isHome) {
         setActiveKey(location.pathname === '/tech' ? 'tech' : 'home');
         return;
      }

      const handleScroll = () => {
         const sections = NAV_ITEMS.filter((item) => !item.isRoute).map((item) =>
            document.getElementById(item.href.slice(1)),
         ).filter(Boolean);

         const scroll = window.scrollY + 120;
         let current = NAV_ITEMS[0].key;

         for (let i = 0; i < sections.length; i++) {
            if (scroll >= sections[i].offsetTop) {
               current = NAV_ITEMS[i].key;
            }
         }

         setActiveKey(current);
      };

      handleScroll();
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
   }, [isHome, location.pathname]);

   const handleNavClick = useCallback(
      (href, key, isRoute) => {
         setDrawerOpen(false);
         setActiveKey(key);
         if (isRoute) {
            navigate(href);
         } else if (isHome) {
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
         } else {
            navigate('/');
         }
      },
      [navigate, isHome],
   );

   return (
      <AppBar position="sticky" sx={{ color: 'text.primary' }}>
         <Container maxWidth="lg">
            <Toolbar
               disableGutters
               sx={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr auto',
                  alignItems: 'center',
                  minHeight: { xs: 64, md: 72 },
               }}>
               {/* Logo */}
               <Box
                  component="a"
                  href={isHome ? '#hero' : '/'}
                  onClick={(e) => {
                     e.preventDefault();
                     if (isHome) {
                        handleNavClick('#hero', 'home', false);
                     } else {
                        navigate('/');
                     }
                  }}
                  sx={{
                     textDecoration: 'none',
                     display: 'flex',
                     alignItems: 'center',
                     gap: 1,
                     flexShrink: 0,
                  }}>
                  <Box
                     sx={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #1B5E20, #4CAF50)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        flexShrink: 0,
                     }}>
                     UE
                  </Box>
                  <Typography
                     variant="subtitle1"
                     noWrap
                     sx={{
                        fontWeight: 700,
                        color: 'primary.main',
                        letterSpacing: 1,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                     }}>
                     {t('site.title')}
                  </Typography>
               </Box>

               {/* Center: Desktop Nav */}
               {!isMobile && (
                  <Box sx={{ display: 'flex', justifyContent: 'center', minWidth: 0 }}>
                     <Box
                        component="nav"
                        aria-label={t('nav.desktopNav')}
                        sx={{ display: 'flex', gap: 0.8, whiteSpace: 'nowrap' }}>
                        {NAV_ITEMS.map(({ key, href, isRoute }) => {
                           const isActive = activeKey === key;
                           return (
                              <Button
                                 key={key}
                                 href={isRoute ? undefined : href}
                                 onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(href, key, isRoute);
                                 }}
                                 sx={{
                                    color: isActive ? 'primary.main' : 'text.primary',
                                    fontWeight: isActive ? 600 : 500,
                                    fontSize: '0.9rem',
                                    px: 1,
                                    py: 0.5,
                                    borderRadius: 2,
                                    whiteSpace: 'nowrap',
                                    flexShrink: 0,
                                    position: 'relative',
                                    transition: 'color 0.3s ease',
                                    '&::after': {
                                       content: '""',
                                       position: 'absolute',
                                       bottom: 2,
                                       left: '50%',
                                       transform: 'translateX(-50%)',
                                       width: isActive ? '60%' : 0,
                                       height: 2,
                                       borderRadius: 1,
                                       background: '#C8A64E',
                                       transition: 'width 0.3s ease',
                                    },
                                    '&:hover': {
                                       background: 'rgba(27, 94, 32, 0.06)',
                                       color: 'primary.main',
                                       '&::after': {
                                          width: '60%',
                                       },
                                    },
                                 }}>
                                 {t(`nav.${key}`)}
                              </Button>
                           );
                        })}
                     </Box>
                  </Box>
               )}

               {/* Right: Language + Mobile Menu */}
               <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, justifySelf: 'end' }}>
                  <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                     <LanguageSwitcher onChange={onLanguageChanging} />
                  </Box>
                  {isMobile && (
                     <IconButton
                        onClick={() => setDrawerOpen(!drawerOpen)}
                        aria-label={drawerOpen ? t('nav.closeMenu') : t('nav.openMenu')}
                        sx={{ color: 'primary.main' }}>
                        {drawerOpen ? <CloseIcon /> : <MenuIcon />}
                     </IconButton>
                  )}
               </Box>
            </Toolbar>
         </Container>

         {/* Mobile Drawer */}
         <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            slotProps={{
               paper: {
                  sx: {
                     width: { xs: '100%', sm: 280 },
                     background: 'rgba(255,255,255,0.98)',
                     backdropFilter: 'blur(20px)',
                  },
               },
            }}>
            <Box sx={{ px: 3, py: 2 }}>
               <LanguageSwitcher onChange={onLanguageChanging} />
            </Box>
            <Divider />
            <List component="nav" aria-label={t('nav.mobileNav')}>
               {NAV_ITEMS.map(({ key, href, isRoute }, i) => {
                  const isActive = activeKey === key;
                  return (
                     <ListItem key={key} disablePadding>
                        <ListItemButton
                           ref={i === 0 ? firstItemRef : null}
                           onClick={() => handleNavClick(href, key, isRoute)}
                           sx={{
                              px: 3,
                              py: 1.5,
                              borderRight: isActive ? 3 : 0,
                              borderColor: 'secondary.main',
                              background: isActive ? 'rgba(200, 166, 78, 0.08)' : 'transparent',
                              '&:hover': {
                                 background: 'rgba(27, 94, 32, 0.06)',
                              },
                           }}>
                           <ListItemText
                              primary={t(`nav.${key}`)}
                              primaryTypographyProps={{
                                 fontWeight: isActive ? 600 : 500,
                                 color: isActive ? 'primary.main' : 'text.primary',
                              }}
                           />
                        </ListItemButton>
                     </ListItem>
                  );
               })}
            </List>
         </Drawer>
      </AppBar>
   );
}
