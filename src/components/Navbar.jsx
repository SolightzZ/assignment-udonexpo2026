import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LanguageSwitcher from './LanguageSwitcher';

const NAV_ITEMS = [
   { key: 'home', href: '#hero' },
   { key: 'about', href: '#about' },
   { key: 'highlights', href: '#highlights' },
   { key: 'gallery', href: '#gallery' },
   { key: 'timeline', href: '#timeline' },
   { key: 'visitorInfo', href: '#visitor-info' },
   { key: 'location', href: '#location' },
];

const ID_TO_KEY = Object.fromEntries(NAV_ITEMS.map((n) => [n.href.slice(1), n.key]));

export default function Navbar() {
   const { t } = useTranslation();
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
   const [drawerOpen, setDrawerOpen] = useState(false);
   const [activeKey, setActiveKey] = useState('home');

   useEffect(() => {
      const ids = NAV_ITEMS.map((n) => n.href.slice(1));
      const observer = new IntersectionObserver(
         (entries) => {
            for (const entry of entries) {
               if (entry.isIntersecting) {
                  setActiveKey(ID_TO_KEY[entry.target.id] || 'home');
               }
            }
         },
         { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
      );
      for (const id of ids) {
         const el = document.getElementById(id);
         if (el) observer.observe(el);
      }
      return () => observer.disconnect();
   }, []);

   const handleNavClick = useCallback(
      (href) => {
         setDrawerOpen(false);
         const el = document.querySelector(href);
         if (el) el.scrollIntoView({ behavior: 'smooth' });
      },
      [],
   );

   return (
      <AppBar position="sticky" sx={{ color: 'text.primary' }}>
         <Container maxWidth="xl">
            <Toolbar
               disableGutters
               sx={{ justifyContent: 'space-between', minHeight: { xs: 64, md: 72 } }}>
               {/* Logo */}
               <Box
                  component="a"
                  href="#hero"
                  onClick={(e) => {
                     e.preventDefault();
                     handleNavClick('#hero');
                  }}
                  sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 1 }}>
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
                     }}>
                     UE
                  </Box>
                  <Typography
                     variant="subtitle1"
                     sx={{ fontWeight: 700, color: 'primary.main', letterSpacing: 1 }}>
                     {t('site.title')}
                  </Typography>
               </Box>

               {/* Desktop Nav */}
               {!isMobile && (
                  <Box
                     component="nav"
                     aria-label="main navigation"
                     sx={{ display: 'flex', gap: 0.5 }}>
                     {NAV_ITEMS.map(({ key, href }) => {
                        const isActive = activeKey === key;
                        return (
                           <Button
                              key={key}
                              href={href}
                              onClick={(e) => {
                                 e.preventDefault();
                                 handleNavClick(href);
                              }}
                              sx={{
                                 color: isActive ? 'primary.main' : 'text.primary',
                                 fontWeight: isActive ? 600 : 500,
                                 fontSize: '0.85rem',
                                 px: 1.5,
                                 py: 0.5,
                                 borderRadius: 2,
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
               )}

               {/* Right: Language + Mobile Menu */}
               <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <LanguageSwitcher />
                  {isMobile && (
                     <IconButton
                        onClick={() => setDrawerOpen(!drawerOpen)}
                        aria-label={drawerOpen ? 'close menu' : 'open menu'}
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
                     width: 280,
                     background: 'rgba(255,255,255,0.98)',
                     backdropFilter: 'blur(20px)',
                     pt: 2,
                  },
               },
            }}>
            <List>
               {NAV_ITEMS.map(({ key, href }) => {
                  const isActive = activeKey === key;
                  return (
                     <ListItem key={key} disablePadding>
                        <ListItemButton
                           onClick={() => handleNavClick(href)}
                           sx={{
                              px: 3,
                              py: 1.5,
                              borderRight: isActive ? 3 : 0,
                              borderColor: 'secondary.main',
                              background: isActive ? 'rgba(200, 166, 78, 0.08)' : 'transparent',
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
