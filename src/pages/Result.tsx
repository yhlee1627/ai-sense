import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { supabase } from '../supabase/client'
import { useLanguage } from '../contexts/LanguageContext'
import { useLocalizedQuestions } from '../data/questions'

interface ResponseRow {
  question_id: number
  selected_option: 1 | 2
  agreement_score: number
}

export default function Result() {
  const location = useLocation()
  const navigate = useNavigate()
  const sessionId = location.state?.sessionId

  const { t } = useLanguage()
  const questions = useLocalizedQuestions()

  const [userResponses, setUserResponses] = useState<ResponseRow[]>([])
  const [allResponses, setAllResponses] = useState<ResponseRow[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!sessionId) {
      alert('세션 정보가 없습니다. 홈으로 이동합니다.')
      navigate('/')
    }
  }, [sessionId, navigate])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      const { data: userData } = await supabase
        .from('responses')
        .select('question_id, selected_option, agreement_score')
        .eq('session_id', sessionId)

      const { data: allData } = await supabase
        .from('responses')
        .select('question_id, selected_option, agreement_score')

      if (!userData || !allData) {
        console.error('❌ 데이터 불러오기 실패')
        return
      }

      setUserResponses(userData)
      setAllResponses(allData)
      setLoading(false)
    }

    if (sessionId) fetchData()
  }, [sessionId])

  const countByType = () => {
    let utilitarian = 0
    let deontological = 0

    userResponses.forEach((res) => {
      const q = questions.find((q) => q.id === res.question_id)
      const chosenType =
        res.selected_option === 1 ? q?.option1_type : q?.option2_type

      if (chosenType === '공리주의' || chosenType === 'Utilitarian') utilitarian++
      else if (chosenType === '의무론' || chosenType === 'Deontological') deontological++
    })

    return { utilitarian, deontological }
  }

  const getUserPosition = (
    score: number,
    direction: string
  ): number => {
    return direction === '공리주의' || direction === 'Utilitarian'
      ? (5 - score) * 10
      : 100 - (5 - score) * 10
  }

  const getAveragePosition = (questionId: number): number | null => {
    const relevant = allResponses.filter((r) => r.question_id === questionId)
    if (relevant.length === 0) return null

    const total = relevant.reduce((sum, r) => {
      const q = questions.find((q) => q.id === r.question_id)
      if (!q) return sum
      const dir = r.selected_option === 1 ? q.option1_type : q.option2_type
      return sum + getUserPosition(r.agreement_score, dir)
    }, 0)

    return total / relevant.length
  }

  if (!sessionId) return null
  if (loading) return <p>결과 불러오는 중...</p>

  const { utilitarian, deontological } = countByType()
  const bias =
    utilitarian > deontological
      ? t.result.utilLabel
      : utilitarian < deontological
      ? t.result.deonLabel
      : '중립적'

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>{t.result.title}</h2>
      <p style={{ marginBottom: '20px' }}>{t.result.summary(utilitarian, deontological)}</p>
      <p>{t.result.conclusion(bias)}</p>

      <hr style={{ margin: '40px 0' }} />

      {/* 범례 */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: '#4CAF50', borderRadius: '50%' }} />
          <span style={{ fontSize: '14px' }}>{t.result.userLabel}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: '12px', height: '12px', backgroundColor: '#2196F3', borderRadius: '50%' }} />
          <span style={{ fontSize: '14px' }}>{t.result.avgLabel}</span>
        </div>
      </div>

      <h3>{t.result.sectionTitle}</h3>

      {questions.map((q) => {
        const user = userResponses.find((r) => r.question_id === q.id)
        if (!user) return null

        const userDir = user.selected_option === 1 ? q.option1_type : q.option2_type
        const userPos = getUserPosition(user.agreement_score, userDir)
        const avgPos = getAveragePosition(q.id)

        return (
          <div key={q.id} style={{ marginBottom: '40px' }}>
            <p style={{ fontWeight: 'bold' }}>{q.id}. {q.title}</p>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '4px' }}>
              <span>{t.result.utilLabel}</span>
              <span>{t.result.deonLabel}</span>
            </div>

            <div style={{ position: 'relative', height: '20px', background: '#eee', borderRadius: '10px' }}>
              {avgPos !== null && (
                <div
                  style={{
                    position: 'absolute',
                    left: `${avgPos}%`,
                    top: 0,
                    transform: 'translateX(-50%)',
                    backgroundColor: '#2196F3',
                    width: '8px',
                    height: '100%',
                    borderRadius: '4px'
                  }}
                />
              )}
              <div
                style={{
                  position: 'absolute',
                  left: `${userPos}%`,
                  top: 0,
                  transform: 'translateX(-50%)',
                  backgroundColor: '#4CAF50',
                  width: '8px',
                  height: '100%',
                  borderRadius: '4px'
                }}
              />
            </div>

            <div style={{ fontSize: '14px', marginTop: '6px' }}>
              {t.result.avgPosLabel}: <strong>{avgPos?.toFixed(1) ?? '-'}</strong>% / {t.result.userPosLabel}: <strong>{userPos.toFixed(1)}%</strong>
            </div>
          </div>
        )
      })}

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '12px 24px',
            backgroundColor: '#f2f2f2',
            border: '1px solid #ccc',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e0e0e0')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#f2f2f2')}
        >
          {t.result.backHome}
        </button>
      </div>
    </div>
  )
}