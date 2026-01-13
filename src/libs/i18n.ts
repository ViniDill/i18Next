import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ptBR from "../Translations/ptBr";
import enUS from "../Translations/enUs";
import esES from "../Translations/esEs";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      "pt-BR": { translation: ptBR },
      "en-US": { translation: enUS },
      "es-ES": { translation: esES },
    },

    fallbackLng: "pt-BR",
    supportedLngs: ["pt-BR", "en-US", "es-ES"],

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ["navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
