import ko from './locales/ko'
import en from './locales/en'

export const languages = { ko, en }

export type Language = keyof typeof languages // 'ko' | 'en'