import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import de from './public/locales/de.json';
import en from './public/locales/en.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en,
            },
            de: {
                translation: de,
            },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });