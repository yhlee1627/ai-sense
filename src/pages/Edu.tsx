import { useNavigate } from 'react-router-dom'

const eduCards = [
  {
    title: '초등학교 3~4학년용',
    desc: 'AI와 윤리의 기초를 쉽고 재미있게 배우는 자료입니다.',
    link: '/edu/elementary-low',
  },
  {
    title: '초등학교 5~6학년용',
    desc: '조금 더 깊이 있는 AI 윤리 이야기를 다룹니다.',
    link: '/edu/elementary-high',
  },
  {
    title: '중학생용',
    desc: '중학생 눈높이에 맞춘 AI 윤리와 실제 사례.',
    link: '/edu/middle',
  },
  {
    title: '고등학생용',
    desc: '고등학생을 위한 심화 AI 윤리 학습 자료.',
    link: '/edu/high',
  },
  {
    title: '평생학습자용',
    desc: '성인 및 평생학습자를 위한 AI 윤리 자료.',
    link: '/edu/lifelong',
  },
]

export default function Edu() {
  const navigate = useNavigate()
  return (
    <div style={{ minHeight: '100vh', background: '#f7f9fa', padding: '60px 0', position: 'relative' }}>
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
        }}
      >
        ← 뒤로가기
      </button>
      <h2 style={{ textAlign: 'center', fontSize: '2.2rem', marginBottom: '40px', fontWeight: 700 }}>
        교육자료
      </h2>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '32px',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        {eduCards.map(card => (
          <div key={card.title} style={{
            background: 'white',
            borderRadius: '18px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
            padding: '36px 32px',
            width: '260px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'box-shadow 0.2s',
          }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', fontWeight: 600 }}>{card.title}</h3>
            <p style={{ color: '#555', fontSize: '1rem', marginBottom: '28px', textAlign: 'center' }}>{card.desc}</p>
            <button
              onClick={() => navigate(card.link)}
              style={{
                padding: '10px 22px',
                background: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '15px',
                cursor: 'pointer',
                fontWeight: 500,
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                transition: 'background 0.2s',
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