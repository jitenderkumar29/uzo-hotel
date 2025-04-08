// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome_message: "Welcome to our application",
        description: "This is a demo of internationalization",
      },
    },
    es: {
      translation: {
        welcome_message: "Bienvenido a nuestra aplicación",
        description: "Esta es una demostración de internacionalización",
      },
    },
    // Add other languages...
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
