import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const StyledToggleGroup = styled(ToggleButtonGroup)(({ theme }) => ({
   '& .MuiToggleButton-root': {
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      fontWeight: 600,
      fontSize: '0.65rem',
      padding: '2px 6px',
      minWidth: 30,
      minHeight: 28,
      textTransform: 'none',
      transition: 'all 0.2s ease',
      '&.Mui-selected': {
         background: theme.palette.primary.main,
         color: '#fff',
         '&:hover': {
            background: theme.palette.primary.dark,
         },
      },
      '&:hover': {
         background: 'rgba(27, 94, 32, 0.08)',
      },
   },
}));

const LANGUAGES = [
   { code: 'th', label: 'lang.th' },
   { code: 'en', label: 'lang.en' },
   { code: 'zh', label: 'lang.zh' },
];

export default function LanguageSwitcher({ onChange }) {
   const { i18n, t } = useTranslation();

   const handleChange = useCallback(
      (_, newLang) => {
         if (!newLang || newLang === i18n.language?.slice(0, 2)) return;
         onChange?.({ nextLang: newLang });
      },
      [i18n, onChange],
   );

   return (
      <Box sx={{ display: 'inline-flex' }}>
         <StyledToggleGroup value={i18n.language?.slice(0, 2)} exclusive onChange={handleChange} size="small" aria-label={t('lang.switcher')}>
            {LANGUAGES.map(({ code, label }) => (
               <ToggleButton key={code} value={code} aria-label={t(label)}>
                  {code === 'zh' ? '中文' : code.toUpperCase()}
               </ToggleButton>
            ))}
         </StyledToggleGroup>
      </Box>
   );
}
