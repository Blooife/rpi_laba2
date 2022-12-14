import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
//import EnLang from './locales/en/translation.json'
//import RuLang from './locales/ru/translation.json'

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
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
                  ph_of_Bel: "Belarus photographers",
                  ph_of_day: "Figure of the day",
                  l_more: "Learn more",
                  back_to_list: "Back to the list",
                  home_text:"The modern world cannot be imagined without the most widespread form of art today - photography. We offer you to get acquainted with Belarusian photography from its origins to the present.",
                  devs: "Developers:",
                  vika: "Viktoryia Loziuk",
                  ksu: "Ksenia Hlebanova",
                  sasha:"Sasha Milkovskaya",
                  searchCaption: "Search for a photographer", 
                  list_ph: "List of photographers",
                  gallery:"Photo gallery",

                  name1: "Anton Motolko",
                  name2: "Benedikt Henrik Tyshkevich",
                  name3: "Lev Dashkevich",
                  name4: "Sergey Koltovich",
                  name5: "Yan Bulgak",
              },
            },
              
            
            ru: {
              translation: {                
                    home_page: "Главная",
                    list_of_ph: 'Фотографы',
                    russian_lang: "Русский",
                    english_lang: "Английский",
                    ph_of_Bel: "Фотографы Беларуси",
                    ph_of_day: "Деятель дня",
                    l_more: "Узнать больше",
                    back_to_list:"Вернуться к списку",
                    home_text: "Современный мир невозможно представить без самого распространённого вида искусств – фотографии. Предлагаем познакомиться с белорусской фотографией от истоков до современности.",
                    devs: "Разработчики",  
                    vika: "Виктория Лозюк",
                    ksu: "Ксения Хлебанова",
                    sasha: "Саша Милковская", 
                    searchCaption: "Поиск фотографа",  
                    list_ph: "Список фотографов",
                    gallery: "Фотогалерея",

                    name1: "Антон Мотолько",
                    name2: "Бенедикт Генрик Тышкевич",
                    name3: "Лев Дашкевич",
                    name4: "Сергей Колтович",
                    name5: "Ян Булгак",
                   
              }
            }
        },
    });

export default i18n;