import { useNavigate } from 'react-router-dom'

export default function EduElementaryLow() {
  const navigate = useNavigate()

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/pdfs/elementary_low_guide.pdf'
    link.download = 'elementary_low_guide.pdf'
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
      position: 'relative',
    }}>
      <button
        onClick={() => navigate('/edu')}
        style={{
          position: 'absolute',
          left: 24,
          top: 24,
          background: 'none',
          border: 'none',
          color: '#4CAF50',
          fontSize: '18px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        ← 뒤로가기
      </button>
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
          <h1 style={{ fontSize: '32px', color: '#333' }}>초등학교 3-4학년용 교육 자료</h1>
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
        </div>

        <div style={{
          backgroundColor: '#f8f8f8',
          borderRadius: '12px',
          padding: '30px',
          marginBottom: '30px',
        }}>
          <div style={{ marginBottom: '30px' }}>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#444' }}>
              이 수업에서 학생들은 인공지능 기술이 가진 편리한 점과 문제점을 살펴보며, 
              인공지능 기술에 대해 균형 있는 시각을 형성할 수 있다. 무엇보다 인공지능과 
              관련한 윤리적 문제를 초보적인 수준에서 점검하면서, 인공지능 기술이 사람 대신 
              삶의 많은 부분을 대신 결정한다고 해도, 결국 어떻게 쓰는 것이 바람직한 
              방향인지는 사람이 해야 하는 주요한 역할임을 이해할 수 있도록 한다.
            </p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '20px', color: '#4CAF50', marginBottom: '15px' }}>
              목표
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#444' }}>
              인공지능의 편리한 점과 문제점을 살펴보고, 바람직한 인공지능 사용을 위한 
              사람의 역할을 알 수 있다.
            </p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '20px', color: '#4CAF50', marginBottom: '15px' }}>
              활동1: 인공지능 기술의 편리함 살펴보기
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', fontSize: '16px', color: '#444' }}>
                • 자율주행자동차, 의료용 인공지능 등의 편리한 점 상상해보기
              </li>
              <li style={{ fontSize: '16px', color: '#444' }}>
                • 인공지능 CCTV, 군사 로봇 등의 장점 조사하기
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '20px', color: '#4CAF50', marginBottom: '15px' }}>
              활동2: 인공지능을 사용할 때 생길 수 있는 문제 알아보기
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', fontSize: '16px', color: '#444' }}>
                • 인공지능을 사용할 때 생길 수 있는 문제점 상상하기
              </li>
              <li style={{ fontSize: '16px', color: '#444' }}>
                • 인공지능을 사용할 때 생길 수 있는 문제점 조사보기
              </li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: '20px', color: '#4CAF50', marginBottom: '15px' }}>
              활동3: 바람직한 인공지능 사용을 위한 사람의 역할 이해하기(AI-SENSE)
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', fontSize: '16px', color: '#444' }}>
                • 인공지능을 어떻게 쓸 지는 사람이 결정하는 것임을 깨닫기
              </li>
              <li style={{ fontSize: '16px', color: '#444' }}>
                • AI-SENSE 활용하여 인공지능을 어떻게 사용할지 선택해보기
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 