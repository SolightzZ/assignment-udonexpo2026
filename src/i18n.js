import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationTH from './locales/th/translation.json';
import translationZH from './locales/zh/translation.json';

const resources = {
   th: { translation: translationTH },
   en: { translation: translationEN },
   zh: { translation: translationZH },
};

i18n
   .use(LanguageDetector)
   .use(initReactI18next)
   .init({
      resources,
      fallbackLng: 'th',
      detection: {
         order: ['localStorage', 'navigator'],
         caches: ['localStorage'],
      },
      interpolation: { escapeValue: false },
   });

export default i18n;
