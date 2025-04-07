import { useLanguage } from '../contexts/LanguageContext'

export interface Question {
  id: number
  title: string
  description: string
  image1: string
  image2: string
  option1: string
  option2: string
  option1_type: '공리주의' | '의무론' | 'Utilitarian' | 'Deontological'
  option2_type: '공리주의' | '의무론' | 'Utilitarian' | 'Deontological'
}

// ✅ 언어에 맞는 questions를 불러오는 훅
export const useLocalizedQuestions = (): Question[] => {
  const { t } = useLanguage()

  return t.questions.map((q, index) => ({
    id: index + 1,
    title: q.title,
    description: q.description,
    option1: q.option1,
    option2: q.option2,
    option1_type: q.option1_type as Question['option1_type'], // ✅ 타입 단언
    option2_type: q.option2_type as Question['option2_type'], // ✅ 타입 단언
    image1: `/images/${index + 1}-1.webp`,
    image2: `/images/${index + 1}-2.webp`,
    detail1: q.detail1,
    detail2: q.detail2
  }))
}