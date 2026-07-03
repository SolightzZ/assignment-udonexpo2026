import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/material/styles';

const StyledToggleGroup = styled(ToggleButtonGroup)(({ theme }) => ({
   '& .MuiToggleButton-root': {
      border: `1px solid ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      fontWeight: 600,
      fontSize: '0.75rem',
      padding: '4px 12px',
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

export default function LanguageSwitcher() {
   const { i18n } = useTranslation();

   const handleChange = useCallback(
      (_, newLang) => {
         if (newLang) {
            i18n.changeLanguage(newLang);
            document.documentElement.lang = newLang;
         }
      },
      [i18n],
   );

   return (
      <StyledToggleGroup
         value={i18n.language?.slice(0, 2)}
         exclusive
         onChange={handleChange}
         size="small"
         aria-label="language switcher">
         {LANGUAGES.map(({ code, label }) => (
            <ToggleButton key={code} value={code} aria-label={`switch to ${code}`}>
               {code === 'zh' ? '中文' : code.toUpperCase()}
            </ToggleButton>
         ))}
      </StyledToggleGroup>
   );
}
