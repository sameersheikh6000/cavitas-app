import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../../locales/en.json';
import plTranslation from '../../locales/pl.json';

const resources = {
  en: {
    translation: enTranslation
  },
  pl: {
    translation: plTranslation
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false // Allows using HTML tags in translations
    }
  });

export default i18n;
