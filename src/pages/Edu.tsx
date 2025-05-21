import { useNavigate } from 'react-router-dom'

const eduCards = [
  {
    title: '초등학교 3~4학년용',
    desc: 'AI의 편리함과 문제점을 살펴봅니다.',
    link: '/edu/elementary-low',
  },
  {
    title: '초등학교 5~6학년용',
    desc: 'AI의 개념과 작동 원리를 이해합니다.',
    link: '/edu/elementary-high',
  },
  {
    title: '중학생용',
    desc: 'AI 윤리적 딜레마와 가치를 명료화합니다.',
    link: '/edu/middle',
  },
  {
    title: '고등학생용',
    desc: '윤리학적 관점에서 AI 문제를 분석합니다.',
    link: '/edu/high',
  },
  {
    title: '평생학습자용',
    desc: 'AI 시대 시민의 역할을 논의합니다.',
    link: '/edu/lifelong',
  },
]

export default function Edu() {
  const navigate = useNavigate()
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#f7f9fa', 
      padding: '60px 20px',
      position: 'relative',
      boxSizing: 'border-box',
    }}>
      <button
        onClick={() => navigate('/')}
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
          zIndex: 1,
        }}
      >
        ← 뒤로가기
      </button>
      <h2 style={{ 
        textAlign: 'center', 
        fontSize: 'clamp(1.5rem, 5vw, 2.2rem)', 
        marginBottom: '40px', 
        fontWeight: 700,
        paddingTop: '20px',
      }}>
        교육자료
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '32px',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
      }}>
        {eduCards.map(card => (
          <div key={card.title} style={{
            background: 'white',
            borderRadius: '18px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
            padding: 'clamp(24px, 4vw, 36px) clamp(20px, 3vw, 32px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'all 0.2s ease',
            height: '100%',
            minHeight: '200px',
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = 'translateY(-4px)'
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)'
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.07)'
          }}>
            <h3 style={{ 
              fontSize: 'clamp(1.1rem, 3vw, 1.25rem)', 
              marginBottom: '16px', 
              fontWeight: 600,
              textAlign: 'center',
            }}>{card.title}</h3>
            <p style={{ 
              color: '#555', 
              fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', 
              marginBottom: '28px', 
              textAlign: 'center',
              flex: 1,
            }}>{card.desc}</p>
            <button
              onClick={() => navigate(card.link)}
              style={{
                padding: '10px 22px',
                background: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: 'clamp(14px, 2.5vw, 15px)',
                cursor: 'pointer',
                fontWeight: 500,
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                transition: 'all 0.2s ease',
                width: '100%',
                maxWidth: '200px',
              }}
              onMouseOver={e => (e.currentTarget.style.background = '#388e3c')}
              onMouseOut={e => (e.currentTarget.style.background = '#4CAF50')}
            >
              자세히 보기
            </button>
          </div>
        ))}
      </div>
    </div>
  )
} 