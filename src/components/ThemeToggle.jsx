import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useTranslation } from 'react-i18next';
import { useThemeMode } from '../context/ThemeModeContext';

export default function ThemeToggle() {
   const { mode, toggleTheme } = useThemeMode();
   const { t } = useTranslation();

   return (
      <Tooltip title={mode === 'dark' ? t('theme.lightMode') : t('theme.darkMode')}>
         <IconButton
            onClick={toggleTheme}
            aria-label={mode === 'dark' ? t('theme.lightMode') : t('theme.darkMode')}
            sx={{ color: 'primary.main' }}
         >
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
         </IconButton>
      </Tooltip>
   );
}
