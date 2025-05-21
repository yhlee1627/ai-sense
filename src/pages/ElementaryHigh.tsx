import React from 'react';
import { Container, Typography, Paper, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLanguage } from '../contexts/LanguageContext';

const ElementaryHigh: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={handleBack}
        sx={{ mb: 3 }}
      >
        뒤로가기
      </Button>

      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mb: 4 }}>
        초등 5~6학년용 교육자료
      </Typography>

      <Grid container spacing={4}>
        {/* 1. AI의 개념과 역사 */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              1. AI의 개념과 역사
            </Typography>
            <Typography variant="body1" paragraph>
              • AI의 정의와 발전 과정
              • 컴퓨터와 AI의 차이점
              • AI의 다양한 활용 분야
            </Typography>
          </Paper>
        </Grid>

        {/* 2. AI의 작동 원리 */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              2. AI의 작동 원리
            </Typography>
            <Typography variant="body1" paragraph>
              • 데이터와 학습의 관계
              • 패턴 인식의 기본 개념
              • AI의 의사결정 과정
            </Typography>
          </Paper>
        </Grid>

        {/* 3. AI와 윤리 */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              3. AI와 윤리
            </Typography>
            <Typography variant="body1" paragraph>
              • AI 사용의 장단점
              • 개인정보 보호의 중요성
              • AI와 함께하는 미래 사회
            </Typography>
          </Paper>
        </Grid>

        {/* 4. AI 체험 활동 */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              4. AI 체험 활동
            </Typography>
            <Typography variant="body1" paragraph>
              • AI 이미지 생성기 체험
              • AI 챗봇과 대화하기
              • AI 음성 인식 체험
            </Typography>
          </Paper>
        </Grid>

        {/* 5. AI와 미래 직업 */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              5. AI와 미래 직업
            </Typography>
            <Typography variant="body1" paragraph>
              • AI 관련 직업 탐색
              • 미래 사회에서 필요한 역량
              • AI와 함께 일하는 방법
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ElementaryHigh; 