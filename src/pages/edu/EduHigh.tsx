import { useNavigate } from 'react-router-dom'

export default function EduHigh() {
  const navigate = useNavigate()

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/pdfs/high_guide.pdf'
    link.download = 'high_guide.pdf'
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
          <h1 style={{ fontSize: '32px', color: '#333' }}>고등학생용 교육 자료</h1>
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
              이 수업에서 학생들은 인공지능과 관련된 윤리적 딜레마에 대해 판단해보고, 창의적 대안을 제시한다. 
              윤리학적 관점의 도입을 통해 자신과 타인이 선택한 결과에 대해 윤리학적 일관성을 가지고 있는지 점검하고, 
              어떤 것이 보다 옳음 선택인지에 대한 논의의 토대를 마련한다. 이를 숙고의 과정을 바탕으로 실제 인공지능과 
              관련한 윤리적 딜레마 해결을 위해 마련할 수 있는 새로운 대안은 무엇이 있는지 제안할 수 있다.
            </p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '20px', color: '#4CAF50', marginBottom: '15px' }}>
              목표
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#444' }}>
              인공지능 관련 문제를 윤리학적 관점에서 검토하고 창의적 대안을 제시할 수 있다.
            </p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '20px', color: '#4CAF50', marginBottom: '15px' }}>
              활동1: 인공지능 관련 윤리적 딜레마 확인하기
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', fontSize: '16px', color: '#444' }}>
                • 사례에서 드러난 윤리적 딜레마 상황 분석하기
              </li>
              <li style={{ fontSize: '16px', color: '#444' }}>
                • 윤리적 딜레마로 여겨지는 이유 이해하기
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '20px', color: '#4CAF50', marginBottom: '15px' }}>
              활동2: 윤리학(공리주의, 의무론)적 관점에서 딜레마 분석하고 토론하기
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', fontSize: '16px', color: '#444' }}>
                • 딜레마와 관련된 윤리학적 관점 학습하여 상황 분석하기
              </li>
              <li style={{ fontSize: '16px', color: '#444' }}>
                • 윤리학적 관점에서 딜레마 토론하기
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '20px', color: '#4CAF50', marginBottom: '15px' }}>
              활동3: 딜레마 해결을 위한 창의적 대안 제안하기
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', fontSize: '16px', color: '#444' }}>
                • 자료를 검색하며 창의적 대안 제시하기
              </li>
              <li style={{ fontSize: '16px', color: '#444' }}>
                • 실제 발생할 수 있는 문제를 보완할 수 있는 방법 조사하기
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 