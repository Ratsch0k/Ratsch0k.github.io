import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from 'react-i18next';
import de from './public/locales/de.json';
import en from './public/locales/en.json';

i18n
    .use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)
    .init({
        resources: {
            en: {
                translation: en,
            },
            de: {
                translation: de,
            },
        },
        //lng: 'en',
        fallbackLng: 'en',
        whitelist: ['en', 'de'],
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator']
        },
    });