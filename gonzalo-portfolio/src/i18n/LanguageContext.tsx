import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { translations, type Language, type TranslationKey } from './translations';

interface LanguageContextType {
  lang: Language;
  t: TranslationKey;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-lang');
      if (saved === 'en' || saved === 'es') return saved;
    }
    return 'es';
  });

  const setLanguage = useCallback((newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('portfolio-lang', newLang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(lang === 'es' ? 'en' : 'es');
  }, [lang, setLanguage]);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang] as TranslationKey, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
