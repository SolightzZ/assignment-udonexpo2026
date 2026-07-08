import CloseIcon from '@mui/icons-material/Close';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import IconCircle from './IconCircle';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

const MobileDrawer = lazy(() => import('./MobileDrawer'));

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
               color: 'text.primary',
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
                     <IconCircle icon={LocalFloristIcon} color="#618764" size={36} iconSize={22} sx={{ flexShrink: 0, display: 'flex' }} />
                     <Typography
                        variant="subtitle1"
                        noWrap
                        sx={(theme) => ({
                           fontWeight: 700,
                           color: theme.palette.mode === 'dark' ? '#fff' : 'primary.main',
                           letterSpacing: 1,
                           whiteSpace: 'nowrap',
                           overflow: 'hidden',
                           textOverflow: 'ellipsis',
                        })}>
                        {t('site.title')}
                     </Typography>
                  </Box>

                  {/* Center: Desktop Nav */}
                  {!isMobile && (
                     <Box sx={{ display: 'flex', justifyContent: 'center', minWidth: 0 }}>
                        <Box component="nav" aria-label={t('nav.desktopNav')} sx={{ display: 'flex', gap: 0.8, whiteSpace: 'nowrap' }}>
                           {NAV_ITEMS.map(({ key, href, isRoute }) => {
                              return (
                                 <Button
                                    key={key}
                                    href={isRoute ? undefined : href}
                                    onClick={(e) => {
                                       e.preventDefault();
                                       handleNavClick(href, key, isRoute);
                                    }}
                                    sx={(theme) => ({
                                       color: activeKey === key ? (theme.palette.mode === 'dark' ? 'primary.light' : 'primary.main') : 'text.primary',
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
                                          background: 'action.hover',
                                          color: 'text.primary',
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
                                             backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
                                             transition: 'all 0.3s ease',
                                          },
                                       }),
                                    })}>
                                    {t(`nav.${key}`)}
                                 </Button>
                              );
                           })}
                        </Box>
                     </Box>
                  )}

                  {/* Right: ThemeToggle + Language + Mobile Menu */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, justifySelf: 'end' }}>
                     <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <ThemeToggle />
                     </Box>
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
                           sx={{ color: 'text.primary' }}>
                           {drawerOpen ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                     )}
                  </Box>
               </Toolbar>
            </Container>

            {/* Mobile Drawer (lazy-loaded) */}
            <Suspense fallback={null}>
               <MobileDrawer
                  drawerOpen={drawerOpen}
                  onClose={() => setDrawerOpen(false)}
                  activeKey={activeKey}
                  onNavClick={handleNavClick}
                  navItems={NAV_ITEMS}
                  onLanguageChanging={onLanguageChanging}
               />
            </Suspense>
         </AppBar>
      </>
   );
}
