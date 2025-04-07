import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useLanguage } from '../contexts/LanguageContext'

type GenderCode = 'male' | 'female'

export default function Home() {
  const navigate = useNavigate()
  const [gender, setGender] = useState<GenderCode | ''>('')
  const [age, setAge] = useState<string>('') // 👈 변경됨
  const { lang, setLang, t } = useLanguage()

  const handleStart = () => {
    const numericAge = Number(age)

    if (!gender || age === '' || numericAge < 5 || numericAge > 100) {
      alert(t.home.alertIncomplete)
      return
    }

    const sessionId = uuidv4()

    navigate('/survey', {
      state: {
        gender,
        age: numericAge,
        sessionId
      }
    })
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px',
        fontFamily: 'sans-serif',
        color: '#333',
        width: '100%',
        maxWidth: '400px',
        boxSizing: 'border-box',
        textAlign: 'center',
      }}>
        {/* 언어 선택 */}
        <div style={{ marginBottom: '20px', alignSelf: 'flex-end' }}>
          <label style={{ fontSize: '14px', marginRight: '8px' }}>{t.home.languageLabel}</label>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as 'ko' | 'en')}
            style={{
              padding: '6px 12px',
              borderRadius: '6px',
              border: '1px solid #ccc',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            <option value="ko">한국어</option>
            <option value="en">English</option>
          </select>
        </div>

        <h1 style={{ fontSize: '36px', marginBottom: '10px' }}>{t.home.title}</h1>
        <p style={{
          fontSize: '18px',
          marginBottom: '40px',
          lineHeight: '1.5',
          whiteSpace: 'pre-line'
        }}>
          {t.home.description}
        </p>

        {/* 성별 선택 */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
          {(['male', 'female'] as GenderCode[]).map((g) => (
            <label
              key={g}
              style={{
                padding: '12px 24px',
                borderRadius: '30px',
                border: gender === g ? '2px solid #4CAF50' : '1px solid #ccc',
                backgroundColor: gender === g ? '#e8f5e9' : '#f8f8f8',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <input
                type="radio"
                name="gender"
                value={g}
                checked={gender === g}
                onChange={() => setGender(g)}
                style={{ display: 'none' }}
              />
              {t.home.genderOptions[g]}
            </label>
          ))}
        </div>

        {/* 나이 입력 */}
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder={t.home.ageLabel}
          value={age}
          onChange={(e) => {
            const onlyNumbers = e.target.value.replace(/\D/g, '')
            const numericAge = Number(onlyNumbers)

            if (onlyNumbers === '' || (numericAge >= 0 && numericAge <= 100)) {
              setAge(onlyNumbers)
            }
          }}
          style={{
            width: '220px',
            padding: '12px 16px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            fontSize: '16px',
            outline: 'none',
            marginBottom: '30px',
            textAlign: 'center'
          }}
        />

        {/* 시작 버튼 */}
        <button
          onClick={handleStart}
          style={{
            padding: '14px 36px',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '30px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            transition: 'background 0.3s'
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#45a049')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#4CAF50')}
        >
          {t.home.startButton}
        </button>

        {/* 카피라이트 */}
        <p style={{
          marginTop: '40px',
          fontSize: '12px',
          color: '#999'
        }}>
          © Youngho Lee, yhlee@dnue.ac.kr
        </p>
      </div>
    </div>
  )
}