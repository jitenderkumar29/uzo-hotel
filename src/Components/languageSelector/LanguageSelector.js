// src/components/LanguageSelector.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import "./LanguageSelector.css";

const LanguageSelector = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "" },
    { code: "hi", name: "Hindi", flag: "" },
    { code: "es", name: "Español", flag: "" },
    { code: "fr", name: "Français", flag: "" },
    { code: "de", name: "Deutsch", flag: "" },
    { code: "zh", name: "中文", flag: "" },
  ];
  // const languages = [
  //   { code: "en", name: "English", flag: "🇬🇧" },
  //   { code: "es", name: "Español", flag: "🇪🇸" },
  //   { code: "fr", name: "Français", flag: "🇫🇷" },
  //   { code: "de", name: "Deutsch", flag: "🇩🇪" },
  //   { code: "zh", name: "中文", flag: "🇨🇳" },
  // ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <div className="language-selector">
      <button className="language-button" onClick={() => setIsOpen(!isOpen)}>
        <span className="current-language">
          {currentLanguage.flag} {currentLanguage.name}
        </span>
      </button>

      {isOpen && (
        <div className="language-dropdown">
          {languages.map((language) => (
            <button
              key={language.code}
              className="language-option"
              onClick={() => changeLanguage(language.code)}
            >
              <span className="flag">{language.flag}</span>
              <span className="name">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
