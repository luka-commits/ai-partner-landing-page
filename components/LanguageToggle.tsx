import React from "react";
import { useTranslation } from "../i18n/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useTranslation();

  return (
    <button
      onClick={() => setLanguage(language === "de" ? "en" : "de")}
      className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium transition hover:bg-white/10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
      aria-label={language === "de" ? "Switch to English" : "Zu Deutsch wechseln"}
      title={language === "de" ? "Switch to English" : "Zu Deutsch wechseln"}
    >
      <span className={language === "de" ? "text-white font-bold" : "text-neutral-500"}>DE</span>
      <span className="text-neutral-600">/</span>
      <span className={language === "en" ? "text-white font-bold" : "text-neutral-500"}>EN</span>
    </button>
  );
}
