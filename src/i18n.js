import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import ar from "./translations/ar";
import ru from "./translations/ru";

const resources = {
  ru: {
    translation: ru,
  },
  ar: {
    translation: ar,
  },
};


i18next
.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources,
    lng:"ar",
    interpolation:{
        escapeValue:false
    },
    react:{
        useSuspense:false
    }
})