import CloseIcon from '@mui/icons-material/Close';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
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
import useScrollListener from '../hooks/useScrollListener';
import LanguageSwitcher from './LanguageSwitcher';

const NAV_ITEMS = [
   { key: 'home', href: '#hero' },
   { key: 'about', href: '#about' },
   { key: 'highlights', href: '#highlights' },
   { key: 'gallery', href: '#gallery' },
   { key: 'timeline', href: '#timeline' },
   { key: 'visitorInfo', href: '#visitor-info' },
   { key: 'location', href: '#location' },
   { key: 'tech', href: '/tech#tech-header', isRoute: true },
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

   const detectSection = useCallback((scrollY) => {
      const sections = NAV_ITEMS.filter((item) => !item.isRoute)
         .map((item) => document.getElementById(item.href.slice(1)))
         .filter(Boolean);

      const scroll = scrollY + 120;
      let current = NAV_ITEMS[0].key;

      for (let i = 0; i < sections.length; i++) {
         if (scroll >= sections[i].offsetTop) {
            current = NAV_ITEMS[i].key;
         }
      }

      setActiveKey(current);
   }, []);

   useEffect(() => {
      if (!isHome) {
         setActiveKey(location.pathname === '/tech' ? 'tech' : 'home');
         return;
      }
      detectSection(window.scrollY);
   }, [isHome, location.pathname, detectSection]);

   useScrollListener(detectSection, isHome);

   const handleNavClick = useCallback(
      (href, key, isRoute) => {
         setDrawerOpen(false);
         setActiveKey(key);
         if (isRoute) {
            const [path, hash] = href.split('#');
            navigate(path);
            if (hash) {
               setTimeout(() => {
                  const el = document.getElementById(hash);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
               }, 100);
            }
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
      <AppBar
         position="sticky"
         sx={{
            background: '#FFFFFF',
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
            color: '#000',
         }}>
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
                        flexShrink: 0,
                     }}>
                     <LocalFloristIcon sx={{ fontSize: 22 }} />
                  </Box>
                  <Typography
                     variant="subtitle1"
                     noWrap
                     sx={{
                        fontWeight: 700,
                        color: '#1B5E20',
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
                                    color: isActive ? '#000000' : '#333',
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
                                       background: 'rgba(0, 0, 0, 0.06)',
                                       color: '#000000',
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
                        sx={{ color: '#000000' }}>
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
                     width: { xs: '85%', sm: 320 },
                     background: '#FFFFFF',
                     backdropFilter: 'blur(20px)',
                     boxShadow: '-8px 0 40px rgba(0, 0, 0, 0.15)',
                  },
               },
            }}>
            {/* Drawer Header */}
            <Box
               sx={{
                  px: 3,
                  py: 2.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  borderBottom: '1px solid rgba(0,0,0,0.06)',
               }}>
               <IconButton
                  onClick={() => setDrawerOpen(false)}
                  sx={{ color: 'rgba(0,0,0,0.4)', '&:hover': { color: '#000' } }}>
                  <CloseIcon />
               </IconButton>
            </Box>

            {/* Language Switcher */}
            <Box sx={{ px: 3, py: 2 }}>
               <LanguageSwitcher onChange={onLanguageChanging} />
            </Box>

            {/* Nav Items */}
            <List component="nav" aria-label={t('nav.mobileNav')} sx={{ px: 1.5, py: 1 }}>
               {NAV_ITEMS.map(({ key, href, isRoute }, i) => {
                  const isActive = activeKey === key;
                  return (
                     <ListItem key={key} disablePadding sx={{ mb: 0.3 }}>
                        <ListItemButton
                           ref={i === 0 ? firstItemRef : null}
                           onClick={() => handleNavClick(href, key, isRoute)}
                           sx={{
                              px: 2.5,
                              py: 1.4,
                              borderRadius: '6px',
                              borderLeft: isActive ? '3px solid #000' : '3px solid transparent',
                              background: isActive ? 'rgba(0,0,0,0.04)' : 'transparent',
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                 background: 'rgba(0,0,0,0.03)',
                              },
                           }}>
                           <ListItemText
                              primary={t(`nav.${key}`)}
                              primaryTypographyProps={{
                                 fontWeight: isActive ? 600 : 400,
                                 color: isActive ? '#000000' : '#333',
                                 fontSize: '0.95rem',
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
