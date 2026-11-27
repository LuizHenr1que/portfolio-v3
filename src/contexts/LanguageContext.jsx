import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translate } from "../data/content";

const LanguageContext = createContext(null);
const STORAGE_KEY = "portfolio-lang";

function readLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === "en" ? "en" : "pt";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readLang);
  const copy = useMemo(() => translate(lang), [lang]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = copy.meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", copy.meta.description);
  }, [lang, copy]);

  const value = useMemo(
    () => ({ lang, setLang, copy }),
    [lang, copy],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useI18n must be used within LanguageProvider");
  }
  return context;
}
