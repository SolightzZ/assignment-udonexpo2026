import CloseIcon from '@mui/icons-material/Close';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import IconCircle from './IconCircle';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

export default function MobileDrawer({ drawerOpen, onClose, activeKey, onNavClick, navItems, onLanguageChanging }) {
   const { t } = useTranslation();

   return (
      <Drawer
         anchor="right"
         open={drawerOpen}
         onClose={onClose}
         slotProps={{
            paper: {
               sx: {
                  width: { xs: 190, sm: 300 },
                  bgcolor: (theme) => alpha(theme.palette.background.paper, 0.7),
                  backgroundImage: 'none',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  boxShadow: (theme) => theme.palette.custom.drawerShadow,
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
               justifyContent: 'space-between',
               borderBottom: '1px solid',
               borderColor: 'divider',
            }}>
            <IconCircle icon={LocalFloristIcon} color="primary.main" size={40} iconSize={24} />
            <IconButton onClick={onClose} aria-label={t('nav.closeMenu')} sx={{ color: 'text.secondary', '&:hover': { color: 'text.primary' } }}>
               <CloseIcon />
            </IconButton>
         </Box>

         {/* Language Switcher + ThemeToggle */}
         <Box sx={{ px: 3, py: 2, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: 1 }}>
            <LanguageSwitcher onChange={onLanguageChanging} />
            <ThemeToggle />
         </Box>

         {/* Nav Items */}
         <List component="nav" aria-label={t('nav.mobileNav')} sx={{ px: 1.5, py: 1 }}>
            {navItems.map(({ key, href, isRoute }) => (
               <ListItem key={key} disablePadding sx={{ mb: 0.3 }}>
                  <ListItemButton
                     onClick={() => onNavClick(href, key, isRoute)}
                     sx={(theme) => ({
                        px: 2.5,
                        py: 1.4,
                        borderRadius: '6px',
                        borderLeft: activeKey === key ? `3px solid ${theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main}` : '3px solid transparent',
                        background: activeKey === key ? (theme.palette.mode === 'dark' ? 'rgba(156, 176, 128, 0.15)' : 'rgba(97, 135, 100, 0.08)') : 'transparent',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                           background: 'action.hover',
                        },
                     })}>
                     <ListItemText
                        disableTypography
                        primary={
                           <Typography
                              sx={(theme) => ({
                                 fontWeight: activeKey === key ? 600 : 400,
                                 color: activeKey === key ? (theme.palette.mode === 'dark' ? 'primary.light' : 'primary.main') : 'text.primary',
                                 fontSize: '0.95rem',
                                 textAlign: 'left',
                              })}>
                              {t(`nav.${key}`)}
                           </Typography>
                        }
                     />
                  </ListItemButton>
               </ListItem>
            ))}
         </List>
      </Drawer>
   );
}
