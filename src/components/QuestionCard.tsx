import { useEffect, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

interface Question {
  id: number
  title: string
  description: string
  image1: string
  image2: string
  option1: string
  option2: string
  detail1?: string
  detail2?: string
}

interface Props {
  question: Question
  onNext: (selected: 1 | 2, score: number) => void
  onPrev: () => void
  questionIndex: number
  totalQuestions: number
  savedResponse: {
    selectedOption: 1 | 2 | null
    agreementScore: number
  }
}

export default function QuestionCard({
  question,
  onNext,
  onPrev,
  questionIndex,
  totalQuestions,
  savedResponse
}: Props) {
  const [selectedOption, setSelectedOption] = useState<null | 1 | 2>(null)
  const [agreementScore, setAgreementScore] = useState(5)
  const [showDetail1, setShowDetail1] = useState(false)
  const [showDetail2, setShowDetail2] = useState(false)
  const { t } = useLanguage()
  const scaleLabels = t.survey.scaleLabels

  useEffect(() => {
    setSelectedOption(savedResponse.selectedOption)
    setAgreementScore(savedResponse.agreementScore)
    setShowDetail1(false)
    setShowDetail2(false)
  }, [question.id])

  const handleNextClick = () => {
    if (selectedOption === null) {
      alert('먼저 이미지를 선택해주세요!')
      return
    }
    onNext(selectedOption, agreementScore)
  }

  return (
    <div
      style={{
        textAlign: 'center',
        padding: '40px 20px',
        maxWidth: '800px',
        margin: '0 auto',
        boxSizing: 'border-box'
      }}
    >
      <h2>{questionIndex + 1}. {question.title}</h2>
      <p style={{ fontSize: '18px', marginBottom: '30px', whiteSpace: 'pre-line' }}>
        {question.description}
      </p>

      {/* ✅ 이미지 선택 영역 */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '16px',
          margin: '20px 0'
        }}
      >
        {[1, 2].map((opt) => {
          const selected = selectedOption === opt
          const showDetail = opt === 1 ? showDetail1 : showDetail2
          const toggleDetail = opt === 1 ? () => setShowDetail1(!showDetail1) : () => setShowDetail2(!showDetail2)
          const detailText = opt === 1 ? question.detail1 : question.detail2
          const img = opt === 1 ? question.image1 : question.image2
          const label = opt === 1 ? question.option1 : question.option2

          return (
            <div
              key={opt}
              onClick={() => setSelectedOption(opt as 1 | 2)}
              style={{
                cursor: 'pointer',
                width: '100%',
                maxWidth: '300px'
              }}
            >
              <img
                src={img}
                alt={`선택 ${opt}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  border: selected ? '4px solid #4CAF50' : '2px solid #ccc',
                  borderRadius: '8px'
                }}
              />
              <p style={{ marginTop: '10px', fontSize: '14px' }}>{label}</p>

              {/* 자세히 알아보기 버튼 */}
              {detailText && (
                <div style={{ marginTop: '8px' }}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleDetail()
                    }}
                    style={{
                      fontSize: '13px',
                      color: '#007BFF',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textDecoration: 'underline'
                    }}
                  >
                    {showDetail ? t.survey.readLess : t.survey.readMore}
                  </button>
                  {showDetail && (
                    <p style={{ marginTop: '6px', fontSize: '13px', whiteSpace: 'pre-line', color: '#444' }}>
                      {detailText}
                    </p>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* ✅ 동의 척도 */}
      {selectedOption !== null && (
        <div style={{ marginTop: '30px' }}>
          <p style={{ fontWeight: 'bold', fontSize: '16px' }}>{t.survey.agreePrompt}</p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              flexWrap: 'wrap',
              marginTop: '15px'
            }}
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                onClick={() => setAgreementScore(value)}
                style={{
                  width: '45px',
                  height: '45px',
                  fontSize: '16px',
                  borderRadius: '50%',
                  border: agreementScore === value ? '2px solid #4CAF50' : '1px solid #ccc',
                  backgroundColor: agreementScore === value ? '#e8f5e9' : '#f9f9f9',
                  cursor: 'pointer'
                }}
              >
                {value}
              </button>
            ))}
          </div>

          <div style={{ marginTop: '15px', fontSize: '15px', fontWeight: 'bold' }}>
            {scaleLabels[agreementScore - 1]}
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '10px',
            fontSize: '13px',
            color: '#666',
            padding: '0 40px'
          }}>
            <span>{t.survey.weak}</span>
            <span>{t.survey.strong}</span>
          </div>
        </div>
      )}

      {/* ✅ 이전/다음 버튼 */}
      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'space-between' }}>
        <button
          disabled={questionIndex === 0}
          onClick={onPrev}
          style={{
            padding: '10px 24px',
            borderRadius: '8px',
            backgroundColor: questionIndex === 0 ? '#ddd' : '#eee',
            border: '1px solid #ccc',
            color: '#333',
            cursor: questionIndex === 0 ? 'not-allowed' : 'pointer'
          }}
        >
          {t.survey.prev}
        </button>
        <button
          onClick={handleNextClick}
          style={{
            padding: '10px 24px',
            borderRadius: '8px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#45a049')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#4CAF50')}
        >
          {questionIndex < totalQuestions - 1 ? t.survey.next : t.survey.complete}
        </button>
      </div>
    </div>
  )
}