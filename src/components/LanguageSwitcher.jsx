import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

const StyledToggleGroup = styled(ToggleButtonGroup)(({ theme }) => {
   const isDark = theme.palette.mode === 'dark';
   const color = isDark ? 'rgba(255, 255, 255, 0.7)' : theme.palette.primary.main;
   const hoverBg = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(97, 135, 100, 0.08)';
   const selectedBg = theme.palette.primary.main;
   const selectedColor = '#fff';
   const borderColor = isDark ? 'rgba(255, 255, 255, 0.2)' : theme.palette.primary.main;
   const selectedHoverBg = theme.palette.primary.dark;

   return {
      '& .MuiToggleButton-root': {
         border: `1px solid ${borderColor}`,
         color: color,
         fontWeight: 600,
         fontSize: '0.7rem',
         padding: '0 10px',
         height: 32,
         lineHeight: 1,
         textTransform: 'none',
         transition: 'all 0.2s ease',
         '&:first-of-type': {
            borderTopLeftRadius: '16px',
            borderBottomLeftRadius: '16px',
         },
         '&:last-of-type': {
            borderTopRightRadius: '16px',
            borderBottomRightRadius: '16px',
         },
         '&.Mui-selected': {
            background: selectedBg,
            color: selectedColor,
            borderColor: selectedBg,
            '&:hover': {
               background: selectedHoverBg,
            },
         },
         '&:hover': {
            background: hoverBg,
         },
      },
   };
});

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
