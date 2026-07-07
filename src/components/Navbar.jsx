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
import { useCallback, useEffect, useState } from 'react';
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

   useEffect(() => {
      if (location.pathname === '/tech') {
         setActiveKey('tech');
         return;
      }
      const sectionToKey = {};
      NAV_ITEMS.forEach(({ key, href }) => {
         if (href.startsWith('#')) {
            sectionToKey[href.slice(1)] = key;
         }
      });
      const observers = [];
      const options = { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' };
      Object.keys(sectionToKey).forEach((sectionId) => {
         const el = document.getElementById(sectionId);
         if (!el) return;
         const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setActiveKey(sectionToKey[sectionId]);
         }, options);
         observer.observe(el);
         observers.push(observer);
      });
      return () => observers.forEach((o) => o.disconnect());
   }, [location.pathname]);

   useEffect(() => {
      document.body.style.paddingBottom = isMobile ? '56px' : '';
      return () => { document.body.style.paddingBottom = ''; };
   }, [isMobile]);

   const handleNavClick = useCallback(
      (href, key, isRoute) => {
         setDrawerOpen(false);
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
      <>
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
                            return (
                               <Button
                                  key={key}
                                  href={isRoute ? undefined : href}
                                  onClick={(e) => {
                                     e.preventDefault();
                                     handleNavClick(href, key, isRoute);
                                  }}
                                   sx={{
                                      color: activeKey === key ? '#1B5E20' : '#333',
                                      fontWeight: activeKey === key ? 700 : 500,
                                      fontSize: '0.9rem',
                                      px: 1,
                                      py: 0.5,
                                      borderRadius: 2,
                                      whiteSpace: 'nowrap',
                                      flexShrink: 0,
                                      position: 'relative',
                                      transition: 'color 0.3s ease',
                                      '&:hover': {
                                         background: 'rgba(0, 0, 0, 0.06)',
                                         color: '#000000',
                                      },
                                      ...(activeKey === key && {
                                         '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: 0,
                                            left: '20%',
                                            width: '60%',
                                            height: 3,
                                            borderRadius: 1.5,
                                            backgroundColor: '#1B5E20',
                                            transition: 'all 0.3s ease',
                                         },
                                      }),
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
                        onClick={(e) => {
                           e.currentTarget.blur();
                           setDrawerOpen(!drawerOpen);
                        }} 
                        aria-label={drawerOpen ? t('nav.closeMenu') : t('nav.openMenu')} 
                        sx={{ color: '#000000' }}
                     >
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
                     width: { xs: 170, sm: 300 },
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
               <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'rgba(0,0,0,0.4)', '&:hover': { color: '#000' } }}>
                  <CloseIcon />
               </IconButton>
            </Box>

            {/* Language Switcher */}
            <Box sx={{ px: 3, py: 2, display: 'flex', justifyContent: 'flex-start' }}>
               <LanguageSwitcher onChange={onLanguageChanging} />
            </Box>

            {/* Nav Items */}
            <List component="nav" aria-label={t('nav.mobileNav')} sx={{ px: 1.5, py: 1 }}>
                {NAV_ITEMS.map(({ key, href, isRoute }) => {
                  return (
                     <ListItem key={key} disablePadding sx={{ mb: 0.3 }}>
                         <ListItemButton
                            onClick={() => handleNavClick(href, key, isRoute)}
                            sx={{
                               px: 2.5,
                               py: 1.4,
                               borderRadius: '6px',
                               borderLeft: activeKey === key ? '3px solid #1B5E20' : '3px solid transparent',
                               background: activeKey === key ? 'rgba(27, 86, 32, 0.06)' : 'transparent',
                               transition: 'all 0.2s ease',
                               '&:hover': {
                                  background: 'rgba(0,0,0,0.03)',
                               },
                            }}>
                           <ListItemText
                              disableTypography
                              primary={
                                     <Typography
                                        sx={{
                                           fontWeight: activeKey === key ? 600 : 400,
                                           color: activeKey === key ? '#1B5E20' : '#333',
                                           fontSize: '0.95rem',
                                           textAlign: 'left',
                                        }}>
                                        {t(`nav.${key}`)}
                                     </Typography>
                              }
                           />
                        </ListItemButton>
                     </ListItem>
                  );
               })}
            </List>
         </Drawer>
       </AppBar>

       </>
    );
 }
