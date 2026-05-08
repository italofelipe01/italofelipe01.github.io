import React from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./LanguageToggle.css";

export default function LanguageToggle({ theme }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="language-toggle"
      role="group"
      aria-label="Language"
      data-no-translate
    >
      <button
        type="button"
        className={language === "en" ? "active" : ""}
        onClick={() => setLanguage("en")}
        style={{
          color: language === "en" ? theme.body : theme.text,
          backgroundColor: language === "en" ? theme.text : "transparent",
          borderColor: theme.text,
        }}
      >
        EN
      </button>
      <button
        type="button"
        className={language === "pt" ? "active" : ""}
        onClick={() => setLanguage("pt")}
        style={{
          color: language === "pt" ? theme.body : theme.text,
          backgroundColor: language === "pt" ? theme.text : "transparent",
          borderColor: theme.text,
        }}
      >
        PT
      </button>
    </div>
  );
}
