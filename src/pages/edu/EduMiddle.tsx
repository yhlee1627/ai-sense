import { useNavigate } from 'react-router-dom'

export default function EduMiddle() {
  const navigate = useNavigate()

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/pdfs/middle_guide.pdf'
    link.download = 'middle_guide.pdf'
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
          <h1 style={{ fontSize: '32px', color: '#333' }}>중학생용 교육 자료</h1>
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
              이 수업은 학생들이 인공지능의 윤리적 문제를 해결하며 자신의 도덕적 가치를 명료화하도록 안내하고 있다. 
              가치를 명료화한다는 것은 특정 가치를 강조하여 교육하는 것이 아니라, 자신이 중요하게 생각하는 가치가 
              무엇인지 성찰하고, 존중하며 그대로 행동할 수 있도록 이끄는 과정을 의미한다. 학생들은 AI-sense를 사용하여 
              인공지능 기술로 인해 새롭게 생긴 윤리적 딜레마 상황에서 옳다고 생각하는 것을 선택하며, 자신이 가진 
              도덕적 가치를 점검할 수 있다.
            </p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '20px', color: '#4CAF50', marginBottom: '15px' }}>
              목표
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#444' }}>
              인공지능 윤리적 딜레마 상황을 판단하며 자신의 가치를 명료화할 수 있다.
            </p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '20px', color: '#4CAF50', marginBottom: '15px' }}>
              활동1: 인공지능과 관련된 윤리적 딜레마에서 자신의 입장 선택하기(AI-SENSE)
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', fontSize: '16px', color: '#444' }}>
                • 사례를 통해 윤리적 딜레마의 특징 이해하기
              </li>
              <li style={{ fontSize: '16px', color: '#444' }}>
                • AI sense를 활용에 딜레마에 대한 자신의 입장 선택하기
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '20px', color: '#4CAF50', marginBottom: '15px' }}>
              활동2: 자신의 입장을 점검하고 선택 존중하기
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', fontSize: '16px', color: '#444' }}>
                • 선택 결과를 살펴보며 어떤 선택이 더 올바른지 토론하기
              </li>
              <li style={{ fontSize: '16px', color: '#444' }}>
                • 토론 결과를 바탕으로 자신의 입장 최종적으로 정리하기
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '20px', color: '#4CAF50', marginBottom: '15px' }}>
              활동3: 내가 선택한 가치를 담은 비전 선언문 작성하기
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', fontSize: '16px', color: '#444' }}>
                • 희망 직업과 관련하여 어떤 자세로 인공지능 사용할지 비전 선언문 작성하기
              </li>
              <li style={{ fontSize: '16px', color: '#444' }}>
                • 미래 행동을 위해 지금 내가 할 수 있는 일은 무엇인지 발견하여 발표하기
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 