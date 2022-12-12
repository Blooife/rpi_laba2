import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import EnLang from './locales/en/translation.json'
import RuLang from './locales/ru/translation.json'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)    
    .use(HttpApi) // Registering the back-end plugin
    .use(Backend)

    .init({
        debug: true,
        fallbacklng: "ru",
        supportedLngs: ["en", "ru"],

        interpolation: {
            escapeValue: false
        },

        resources: {
            en: {
              translation: {                   
                  home_page: "Home",
                  list_of_ph: 'Photographers',
                  russian_lang: "Russian",
                  english_lang: "English",
  
                }
              },
              
            
            ru: {
              translation: {                
                    home_page: "Главная",
                    list_of_ph: 'Фотографы',
                    russian_lang: "Русский",
                    english_lang: "Английский",
                                   
              }
            }
        },

        /* backend: {
            //loadPath: '/locales/${lng}/translation.json'
            loadPath: 'public/locales/en/translation.json'
           // loadPath: require(`./locales/${lng}/translation.json`)
        }*/
    });

export default i18n;