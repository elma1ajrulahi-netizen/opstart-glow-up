import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { LANGS, translations, type Lang } from "./translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "opstartbv.lang";

function detectInitial(): Lang {
  if (typeof window === "undefined") return "nl";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved === "nl" || saved === "fr" || saved === "en") return saved;
    const nav = window.navigator.language?.toLowerCase() ?? "";
    if (nav.startsWith("fr")) return "fr";
    if (nav.startsWith("en")) return "en";
  } catch {
    // ignore
  }
  return "nl";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("nl");

  useEffect(() => {
    setLangState(detectInitial());
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
  }, []);

  const t = useCallback(
    (key: string) => translations[lang][key] ?? translations.nl[key] ?? key,
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useT must be used inside LanguageProvider");
  return ctx;
}

export { LANGS };
export type { Lang };
