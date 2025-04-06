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
  const [showAlt, setShowAlt] = useState(false)

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

  const getUserPosition = (score: number, direction: string): number => {
    return direction === '공리주의' || direction === 'Utilitarian'
      ? (5 - score) * 10
      : 100 - (5 - score) * 10
  }

  const getAverageScoreAndDirection = (questionId: number) => {
    const filtered = allResponses.filter(res => res.question_id === questionId)
    if (filtered.length === 0) return null

    const total = filtered.reduce((sum, res) => sum + res.agreement_score, 0)
    const avgScore = total / filtered.length
    const mostDirection = (() => {
      const counts = { util: 0, deon: 0 }
      filtered.forEach((res) => {
        const q = questions.find(q => q.id === res.question_id)
        const type = res.selected_option === 1 ? q?.option1_type : q?.option2_type
        if (type === '공리주의' || type === 'Utilitarian') counts.util++
        else if (type === '의무론' || type === 'Deontological') counts.deon++
      })
      return counts.util >= counts.deon ? '공리주의적' : '의무론적'
    })()

    return { avgScore, avgDir: mostDirection }
  }

  if (!sessionId) return null
  if (loading) return <p>{t.loading.result}</p>

  const { utilitarian, deontological } = countByType()
  const isUtil = utilitarian > deontological
  const biasLabel = isUtil ? t.result.utilLabel : t.result.deonLabel
  const mainExplanation = isUtil ? t.result.explanation.util : t.result.explanation.deon
  const altExplanation = isUtil ? t.result.explanation.deon : t.result.explanation.util
  const altButtonLabel = showAlt
    ? isUtil ? t.result.hideAltDeon : t.result.hideAltUtil
    : isUtil ? t.result.readAltDeon : t.result.readAltUtil

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>{t.result.title}</h2>
      <p style={{ marginBottom: '20px' }}>{t.result.summary(utilitarian, deontological)}</p>
      <p>{t.result.conclusion(biasLabel)}</p>

      <p style={{ whiteSpace: 'pre-line', fontSize: '15px', marginTop: '12px', color: '#444' }}>
        {mainExplanation}
      </p>

      <button
        onClick={() => setShowAlt((prev) => !prev)}
        style={{
          marginTop: '16px',
          fontSize: '14px',
          background: 'none',
          border: 'none',
          color: '#007BFF',
          cursor: 'pointer',
          textDecoration: 'underline'
        }}
      >
        {altButtonLabel}
      </button>

      {showAlt && (
        <p style={{ whiteSpace: 'pre-line', marginTop: '12px', fontSize: '15px', color: '#666' }}>
          {altExplanation}
        </p>
      )}

      <hr style={{ margin: '40px 0' }} />

      {/* ✅ 범례 */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '30px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{
            width: '12px',
            height: '12px',
            backgroundColor: '#4CAF50',
            borderRadius: '50%'
          }} />
          <span style={{ fontSize: '14px' }}>{t.result.userLabel}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{
            width: '12px',
            height: '12px',
            backgroundColor: '#2196F3',
            borderRadius: '50%'
          }} />
          <span style={{ fontSize: '14px' }}>{t.result.avgLabel}</span>
        </div>
      </div>

      <h3>{t.result.sectionTitle}</h3>

      {questions.map((q) => {
        const user = userResponses.find((r) => r.question_id === q.id)
        if (!user) return null

        const userType = user.selected_option === 1 ? q.option1_type : q.option2_type
        const userDir = userType === '공리주의' || userType === 'Utilitarian' ? t.result.utilShort : t.result.deonShort
        const userPos = getUserPosition(user.agreement_score, userType)

        const avgResult = getAverageScoreAndDirection(q.id)
        const avgPos = avgResult ? getUserPosition(avgResult.avgScore, avgResult.avgDir) : null
        const avgDirLabel = avgResult?.avgDir === '공리주의적' ? t.result.utilShort : t.result.deonShort

        const userDirLabel = userDir === t.result.utilShort ? t.result.utilShort : t.result.deonShort
        const pointSuffix = t.result.pointSuffix || ''

        return (
          <div key={q.id} style={{ marginBottom: '40px' }}>
            <p style={{ fontWeight: 'bold' }}>{q.id}. {q.title}</p>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '4px' }}>
              <span>{t.result.utilLabel.replace(' (5점)', '')}</span>
              <span>{t.result.deonLabel.replace(' (5점)', '')}</span>
            </div>

            <div style={{ position: 'relative', height: '20px', background: '#eee', borderRadius: '10px' }}>
              <div style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                width: '1px',
                height: '100%',
                backgroundColor: '#bbb',
                zIndex: 0
              }} />
              {avgPos !== null && (
                <div style={{
                  position: 'absolute',
                  left: `${avgPos}%`,
                  top: 0,
                  transform: 'translateX(-50%)',
                  backgroundColor: '#2196F3',
                  width: '8px',
                  height: '100%',
                  borderRadius: '4px'
                }} />
              )}
              <div style={{
                position: 'absolute',
                left: `${userPos}%`,
                top: 0,
                transform: 'translateX(-50%)',
                backgroundColor: '#4CAF50',
                width: '8px',
                height: '100%',
                borderRadius: '4px'
              }} />
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '13px',
              color: '#888',
              marginTop: '4px',
              fontStyle: 'italic'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ fontSize: '16px' }}>←</span>
                <span>{t.result.utilDirectionLabel}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span>{t.result.deonDirectionLabel}</span>
                <span style={{ fontSize: '16px' }}>→</span>
              </div>
            </div>

            <p style={{
              fontSize: '14px',
              marginTop: '10px',
              textAlign: 'center',
              color: '#333'
            }}>
              {t.result.avgResponseLabel}: <strong>{avgDirLabel} ({avgResult?.avgScore.toFixed(1)}{pointSuffix})</strong> / 
              {t.result.userResponseLabel}: <strong>{userDirLabel} ({user.agreement_score}{pointSuffix})</strong>
            </p>
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
        >
          {t.result.backHome}
        </button>
      </div>
    </div>
  )
}