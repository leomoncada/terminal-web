import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import en from "./en";
import es from "./es";
import { Content, Lang } from "./types";

export const content: Record<Lang, Content> = { en, es };

export const isLang = (value?: string): value is Lang =>
  value === "en" || value === "es";

const STORAGE_KEY = "lang";

// An explicit choice (saved on `lang <code>`) wins over the browser language
const detectLang = (): Lang => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLang(saved ?? undefined)) return saved as Lang;
  } catch {
    // storage unavailable (private mode, blocked site data)
  }
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
};

type LangState = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Content;
};

const LangContext = createContext<LangState>({
  lang: "en",
  setLang: () => undefined,
  t: en,
});

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLangState] = useState<Lang>(detectLang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // storage unavailable, the choice lasts for this visit only
    }
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext);
