import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useLocalizedQuestions } from '../data/questions'
import QuestionCard from '../components/QuestionCard'
import { supabase } from '../supabase/client'
//import { useLanguage } from '../contexts/LanguageContext'

interface Response {
  selectedOption: 1 | 2 | null
  agreementScore: number
}

export default function Survey() {
  const location = useLocation()
  const navigate = useNavigate()
  //const { t } = useLanguage()

  const { gender, age, country, sessionId } = location.state || {}

  const questions = useLocalizedQuestions()

  const [index, setIndex] = useState(0)
  const [responses, setResponses] = useState<Response[]>(
    questions.map(() => ({
      selectedOption: null,
      agreementScore: 5
    }))
  )

  const handleUpdateResponse = async (selected: 1 | 2, score: number) => {
    const updated = [...responses]
    updated[index] = { selectedOption: selected, agreementScore: score }
    setResponses(updated)

    const currentQuestion = questions[index]

    const { error } = await supabase.from('responses').upsert(
      {
        session_id: sessionId,
        question_id: currentQuestion.id,
        selected_option: selected,
        agreement_score: score,
        gender,
        age,
        country
      },
      {
        onConflict: 'session_id,question_id'
      }
    )

    if (error) {
      console.error('❌ Supabase 저장 실패:', error.message)
    } else {
      console.log(`✅ Q${currentQuestion.id} 저장 또는 업데이트 완료`)
    }

    if (index < questions.length - 1) {
      setIndex(index + 1)
    } else {
      navigate('/result', {
        state: { sessionId }
      })
    }
  }

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#fff',
        padding: '40px 20px',
        boxSizing: 'border-box',
        fontFamily: 'sans-serif'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '800px',
          backgroundColor: '#fff',
          boxSizing: 'border-box'
        }}
      >
        <QuestionCard
          question={questions[index]}
          onNext={handleUpdateResponse}
          onPrev={handlePrev}
          questionIndex={index}
          totalQuestions={questions.length}
          savedResponse={responses[index]}
        />
      </div>
    </div>
  )
}