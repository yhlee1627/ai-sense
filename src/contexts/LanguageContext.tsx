import { createContext, useContext, useMemo, useState } from 'react'
import { languages } from '../i18n'
import type { Language } from '../i18n'

interface LanguageContextProps {
  lang: Language
  setLang: (lang: Language) => void
  t: typeof languages.ko
}

// 초기값
export const LanguageContext = createContext<LanguageContextProps>({
  lang: 'ko',
  setLang: () => {},
  t: languages.ko
})

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Language>('ko')

  const setLang = (newLang: Language) => {
    setLangState(newLang)
  }

  // 💡 타입 명시로 TypeScript 자동완성 지원
  const t = useMemo(() => languages[lang], [lang]) as typeof languages.ko

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)