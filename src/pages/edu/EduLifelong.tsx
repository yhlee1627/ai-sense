import { useNavigate } from 'react-router-dom'

export default function EduLifelong() {
  const navigate = useNavigate()
  return (
    <div style={{ padding: '60px 0', textAlign: 'center', position: 'relative' }}>
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
      <h2>평생학습자용 교육자료</h2>
      <p style={{ marginTop: '24px', fontSize: '18px' }}>
        평생학습자를 위한 AI 윤리 교육자료입니다.<br />
        곧 더 많은 자료가 추가될 예정입니다.
      </p>
    </div>
  )
} 