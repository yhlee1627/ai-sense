import { createContext, useContext, useState, useMemo } from 'react'
import { languages } from '../i18n'
import type { Language } from '../i18n'

interface LanguageContextProps {
  lang: Language
  setLang: (lang: Language) => void
  t: typeof languages.ko
}

export const LanguageContext = createContext<LanguageContextProps>({
  lang: 'ko',
  setLang: () => {},
  t: languages.ko
})

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Language>('ko')

  const t = useMemo(() => languages[lang], [lang])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)