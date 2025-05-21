import { useNavigate } from 'react-router-dom'

export default function EduElementaryHigh() {
  const navigate = useNavigate()

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/pdfs/elementary_high_guide.pdf'
    link.download = 'elementary_high_guide.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      overflowY: 'auto',
      padding: '40px 20px',
    }}>
      <div style={{
        maxWidth: '900px',
        width: '100%',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '40px',
        }}>
          <h1 style={{ fontSize: '32px', color: '#333' }}>초등학교 5-6학년용 교육 자료</h1>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={handleDownload}
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                border: '1px solid #4CAF50',
                background: '#fff',
                color: '#4CAF50',
                fontSize: '14px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.2s',
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = '#f0f7f0'
                e.currentTarget.style.color = '#388e3c'
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = '#fff'
                e.currentTarget.style.color = '#4CAF50'
              }}
            >
              지도안 다운로드
            </button>
            <button
              onClick={() => navigate('/edu')}
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                border: '1px solid #4CAF50',
                background: '#f8f8f8',
                color: '#4CAF50',
                fontSize: '14px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              뒤로가기
            </button>
          </div>
        </div>

        <div style={{
          backgroundColor: '#f8f8f8',
          borderRadius: '12px',
          padding: '30px',
          marginBottom: '30px',
        }}>
          <div style={{ marginBottom: '30px' }}>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#444' }}>
              이 수업에서 학생들은 인공지능의 기본 개념과 작동 원리를 이해하고, 
              인공지능이 우리 사회에 미치는 영향을 분석할 수 있다. 또한 인공지능의 
              윤리적 문제를 심층적으로 탐구하며, 미래 사회에서 인공지능과 함께 
              살아가는 방법을 고민해볼 수 있다.
            </p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '20px', color: '#4CAF50', marginBottom: '15px' }}>
              목표
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#444' }}>
              인공지능의 기본 개념과 작동 원리를 이해하고, 인공지능의 윤리적 문제를 
              분석하여 미래 사회에서의 바람직한 인공지능 사용 방안을 모색할 수 있다.
            </p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '20px', color: '#4CAF50', marginBottom: '15px' }}>
              활동1: 인공지능의 기본 개념 이해하기
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', fontSize: '16px', color: '#444' }}>
                • 인공지능의 정의와 발전 과정 탐구하기
              </li>
              <li style={{ fontSize: '16px', color: '#444' }}>
                • 인공지능과 일반 컴퓨터의 차이점 분석하기
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '20px', color: '#4CAF50', marginBottom: '15px' }}>
              활동2: 인공지능의 작동 원리 이해하기
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', fontSize: '16px', color: '#444' }}>
                • 데이터와 학습의 관계 이해하기
              </li>
              <li style={{ fontSize: '16px', color: '#444' }}>
                • 패턴 인식과 의사결정 과정 분석하기
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '20px', color: '#4CAF50', marginBottom: '15px' }}>
              활동3: 인공지능의 윤리적 문제 탐구하기
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', fontSize: '16px', color: '#444' }}>
                • 인공지능 사용의 장단점 분석하기
              </li>
              <li style={{ fontSize: '16px', color: '#444' }}>
                • 개인정보 보호와 관련된 문제점 탐구하기
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '20px', color: '#4CAF50', marginBottom: '15px' }}>
              활동4: AI-SENSE를 활용한 실천 방안 모색하기
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', fontSize: '16px', color: '#444' }}>
                • AI-SENSE를 통한 윤리적 판단 경험하기
              </li>
              <li style={{ fontSize: '16px', color: '#444' }}>
                • 미래 사회에서의 바람직한 인공지능 사용 방안 제안하기
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 