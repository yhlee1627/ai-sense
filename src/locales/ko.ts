const ko = {
    home: {
      title: 'AI-Sense',
      description: 'AI 윤리 상황에 대한 당신의 선택과 생각을 들어보고 싶어요.\n먼저 간단한 정보를 입력해주세요.',
      startButton: '설문 시작하기',
      genderLabel: '성별',
      ageLabel: '나이',
      languageLabel: '언어 선택',
      alertIncomplete: '성별과 나이를 입력해주세요.',
      genderOptions: {
        male: '남',
        female: '여'
      }
    },
    survey: {
      agreePrompt: '이 선택에 어느 정도 동의하시나요?',
      weak: '약하게 동의',
      strong: '강하게 동의',
      next: '다음',
      prev: '이전',
      complete: '완료',
      scaleLabels: [
        '약하게 동의함',
        '조금 동의함',
        '보통',
        '꽤 동의함',
        '강하게 동의함'
      ]
    },
    result: {
      title: '당신의 윤리 성향 결과',
      summary: (u: number, d: number) => `공리주의적 선택: ${u}개 / 의무론적 선택: ${d}개`,
      conclusion: (bias: string) => `👉 당신은 ${bias} 성향을 보입니다.`,
      sectionTitle: '문항별 응답 비교',
      avgLabel: '전체 평균',
      userLabel: '나의 응답',
      backHome: '처음으로 돌아가기',
      utilLabel: '공리주의 (5점)',
      deonLabel: '의무론 (5점)',
      avgPosLabel: '평균 응답 위치',
      userPosLabel: '나의 응답 위치'
    },
    questions: [
      {
        title: 'AI 자율주행자동차',
        description: '긴급한 상황에서 어쩔 수 없이 누군가를 희생시켜야 한다면 어떤 선택이 적절할까요?',
        option1: '한 사람을 희생시켜서라도 다수를 구하는 것이 좋다.',
        option2: '다수를 구하는 것보다 무고한 사람을 구하는 것이 좋다.',
        option1_type: '공리주의',
        option2_type: '의무론'
      },
      {
        title: 'AI 얼굴인식 감시카메라',
        description: '공공안전을 위해 동의 없이 얼굴을 수집하는 것이 허용되어야 할까요?',
        option1: '모두의 안전을 위해 동의 없이 수집해도 된다.',
        option2: '개인의 권리를 위해 반드시 동의가 필요하다.',
        option1_type: '공리주의',
        option2_type: '의무론'
      },
      {
        title: 'AI 전투 드론',
        description: '전투 중 인간의 개입 없이 AI가 자동으로 공격 결정을 내리는 것이 허용되어야 할까요?',
        option1: '빠른 판단을 위해 AI가 자동으로 공격해도 된다.',
        option2: '인간이 최종 결정을 내려야 한다.',
        option1_type: '공리주의',
        option2_type: '의무론'
      },
      {
        title: 'AI 재판 알고리즘',
        description: 'AI가 법률 정보를 바탕으로 형량을 자동으로 결정하는 것이 정당할까요?',
        option1: '객관적 판단을 위해 AI가 형량을 결정해도 된다.',
        option2: '개인의 사정을 고려해 인간 판사가 판단해야 한다.',
        option1_type: '공리주의',
        option2_type: '의무론'
      },
      {
        title: 'AI 진단 시스템',
        description: '의료 AI가 질병을 진단하고 처방을 내리는 것이 허용되어야 할까요?',
        option1: '정확성을 위해 AI가 진단과 처방을 해도 된다.',
        option2: '환자에 대한 배려를 위해 의사가 직접 판단해야 한다.',
        option1_type: '공리주의',
        option2_type: '의무론'
      }
    ]
  }
  
  export default ko