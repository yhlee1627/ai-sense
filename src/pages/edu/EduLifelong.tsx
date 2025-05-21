import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'

export default function EduLifelong() {
  const navigate = useNavigate()
  const { t } = useLanguage()

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
          <h1 style={{ fontSize: '32px', color: '#333' }}>대학생/평생학습자용 교육 자료</h1>
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

        <div style={{
          backgroundColor: '#f8f8f8',
          borderRadius: '12px',
          padding: '30px',
          marginBottom: '30px',
        }}>
          <div style={{ marginBottom: '30px' }}>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#444' }}>
              이 수업은 성인 학습자가 인공지능 윤리적 딜레마는 무엇인지 이해하고, 판단한 경험을 바탕으로 더 나은 
              사회를 만들기 위한 시민의 역할을 자각하도록 안내하는 것에 있다. 학습자는 자신과 타인의 딜레마 판단 
              결과를 비교하며, 만약 가치 갈등이 해결되지 않을 때 생길 수 있는 문제를 예상한다. 이를 바탕으로 
              실제 사회에서 윤리적 딜레마 해결을 위해 필요한 시민의 태도는 무엇인지 논의하며 인공지능 시대 
              시민의 역할에 대해 알 수 있다.
            </p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '20px', color: '#4CAF50', marginBottom: '15px' }}>
              목표
            </h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#444' }}>
              인공지능과 관련된 윤리적 딜레마 판단 경험을 바탕으로 인공지능 시대 시민의 역할이 무엇인지 논의할 수 있다.
            </p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '20px', color: '#4CAF50', marginBottom: '15px' }}>
              활동1: 인공지능 관련 윤리적 딜레마 탐색하기
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', fontSize: '16px', color: '#444' }}>
                • 사례를 통해 윤리적 딜레마 탐색하기
              </li>
              <li style={{ fontSize: '16px', color: '#444' }}>
                • 인공지능 윤리 문제가 가진 특성 이해하기
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '20px', color: '#4CAF50', marginBottom: '15px' }}>
              활동2: 인공지능 관련 윤리적 딜레마 판단하기(AI-SENSE)
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', fontSize: '16px', color: '#444' }}>
                • 윤리적 딜레마 상황에서 더 옳다고 여겨지는 대안 선택하기
              </li>
              <li style={{ fontSize: '16px', color: '#444' }}>
                • 선택 결과 돌아보며 타인과 비교하여 분석하기
              </li>
            </ul>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '20px', color: '#4CAF50', marginBottom: '15px' }}>
              활동3: 인공지능 시대 시민의 역할 논의하기
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', fontSize: '16px', color: '#444' }}>
                • 가치 갈등이 해결되지 않을 때 생길 수 있는 문제 예상하기
              </li>
              <li style={{ fontSize: '16px', color: '#444' }}>
                • 실제 사회에서 윤리적 딜레마 해결을 위해 필요한 시민의 태도 무엇인지 논의하기
              </li>
            </ul>
          </div>

          <div style={{ marginTop: '40px', padding: '20px', backgroundColor: '#fff', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '18px', color: '#4CAF50', marginBottom: '15px' }}>
              관련자료
            </h3>
            <p style={{ fontSize: '14px', color: '#666' }}>
              인공지능 사용량 급증 관련 기사: AI TIMES, 
              <a 
                href="https://www.aitimes.com/news/articleView.html?idxno=170066" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#4CAF50', textDecoration: 'none', marginLeft: '5px' }}
              >
                https://www.aitimes.com/news/articleView.html?idxno=170066
              </a>
              (2025.4.30.)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 