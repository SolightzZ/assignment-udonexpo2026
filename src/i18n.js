import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const LANG_LOADERS = {
   th: () => import('./locales/th/translation.json'),
   en: () => import('./locales/en/translation.json'),
   zh: () => import('./locales/zh/translation.json'),
};

const detectedLng =
   localStorage.getItem('i18nextLng') || navigator.language?.split('-')[0] || 'th';
const initialLng = ['th', 'en', 'zh'].includes(detectedLng) ? detectedLng : 'th';

const { default: initialTranslations } = await LANG_LOADERS[initialLng]();

i18n
   .use(LanguageDetector)
   .use(initReactI18next)
   .init({
      resources: { [initialLng]: { translation: initialTranslations } },
      fallbackLng: 'th',
      detection: {
         order: ['localStorage', 'navigator'],
         caches: ['localStorage'],
      },
      interpolation: { escapeValue: false },
   });

const otherLangs = ['th', 'en', 'zh'].filter((l) => l !== initialLng);
Promise.allSettled(
   otherLangs.map((l) =>
      LANG_LOADERS[l]().then((data) => i18n.addResourceBundle(l, 'translation', data.default || data)),
   ),
);

export default i18n;
