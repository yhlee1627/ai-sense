const ko = {
    home: {
      title: 'AI-Sense',
      description: 'AI가 결정해야 하는 윤리적인 딜레마 상황에서\n여러분은 어떤 선택을 하실지 궁금합니다.\n설문에 앞서 성별과 나이를 간단히 입력해주세요!',
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
      readMore: '자세히 알아보기',
      readLess: '간단히 보기',
      scaleLabels: [
        '약하게 동의함',
        '조금 동의함',
        '보통',
        '꽤 동의함',
        '강하게 동의함'
      ],
      alertNoSelection: '먼저 이미지를 선택해주세요!'
    },
    result: {
      title: '당신의 윤리 성향 결과',
      summary: (u: number, d: number) => `공리주의적 선택: ${u}개 / 의무론적 선택: ${d}개`,
      conclusion: (bias: string) => `당신은 ${bias} 성향을 보입니다.`,
      hideAltUtil: '공리주의적 입장 숨기기',
      hideAltDeon: '의무론적 입장 숨기기',
      readAltUtil: '공리주의적 입장이 궁금한가요?',
      readAltDeon: '의무론적 입장이 궁금한가요?',
      explanation: {
        util: '"최대다수의 최대 행복"\n이 생각은, 어떤 선택이 가장 많은 사람들에게 기쁨과 도움을 줄 수 있는지를 먼저 생각해요.\n조금 손해를 보더라도, 모두가 더 행복해질 수 있다면 그것이 옳은 일이라는 입장이죠.\n이런 생각을 대표한 사람은 철학자 벤담이에요.',
        deon: '"인간을 목적으로 대우하라."\n이 말은, 사람은 절대 어떤 목적을 위해서 이용당해서는 안 된다는 뜻이에요.\n좋은 결과가 있더라도, 누군가 억울하게 희생되면 그건 옳지 않다고 생각해요.\n이런 생각을 대표한 사람은 철학자 칸트예요.'
      },
      sectionTitle: '문항별 응답 비교',
      avgLabel: '전체 평균',
      userLabel: '나의 응답',
      avgResponseLabel: '평균 응답', // 해석 문장용
      userResponseLabel: '나의 응답', // 해석 문장용
      backHome: '처음으로 돌아가기',
      utilLabel: '공리주의',
      deonLabel: '의무론',
      avgPosLabel: '평균 응답',
      userPosLabel: '나의 응답',
      utilDirectionLabel: '공리주의적 성향 강화',
      deonDirectionLabel: '의무론적 성향 강화',
      utilShort: '공리주의적',
      deonShort: '의무론적',
      pointSuffix: '점',
    },

    loading: {
      result: '결과 불러오는 중...'
    },

    questions: [
      {
        title: 'AI 자율주행자동차',
        description: '긴급한 상황에서 어쩔 수 없이 누군가를 희생시켜야 한다면 어떤 선택이 적절할까요?',
        option1: '한 사람을 희생시켜서라도, 다수를 구하는 것이 좋다.',
        option2: '다수를 구하는 것보다, 무고한 사람을 구하는 것이 좋다.',
        option1_type: '공리주의',
        option2_type: '의무론',
        detail1: '자율주행자동차가 다수의 생명을 구하기 위해, 신호를 지키고 서 있는 한 사람을 향해 방향을 바꾸는 모습입니다.\n차량은 효율성과 생존 가능성을 바탕으로 다수를 살리는 판단을 내리고 있습니다.',
        detail2: '자율주행자동차가 무고한 보행자 한 명을 보호하기 위해, 다수를 향해 돌진하는 장면입니다.\n차량은 의무론적인 도덕적 원칙을 따르며, 피해가 크더라도 무고한 희생을 피하려 합니다.'
      },
      {
        title: 'AI 얼굴인식 감시카메라',
        description: '공공안전을 위해 동의 없이 얼굴을 수집하는 것이 허용되어야 할까요?',
        option1: '모두의 안전을 위해, 동의 없이 수집해도 된다.',
        option2: '개인의 권리를 위해, 반드시 동의가 필요하다.',
        option1_type: '공리주의',
        option2_type: '의무론',
        detail1: 'AI 감시 시스템이 시민들의 얼굴을 동의 없이 자동으로 수집하고 있는 장면입니다.\n모든 사람의 정보를 수집하여, 분석하고 활용하는 데 초점을 맞춥니다.',
        detail2: '시민들이 동의 없는 얼굴 인식 기술에 반발하며 항의하는 장면입니다.\n개인의 얼굴에 대한 정보를 수집할 때, 개인의 동의와 권리를 존중해야 한다는 모습을 보여줍니다.'
      },
      {
        title: 'AI 전투 로봇',
        description: '전투 중 인간의 개입 없이 AI가 자동으로 공격 결정을 내리는 것이 허용되어야 할까요?',
        option1: '전투의 승리를 위해, AI가 적으로 판단한다면 자동으로 공격해도 된다.',
        option2: '사람의 목숨과 관련되기 때문에, 인간이 최종 결정을 내려야 한다.',
        option1_type: '공리주의',
        option2_type: '의무론',
        detail1: 'AI 전투 로봇이 적군이라고 판단하자 즉시 공격하는 장면입니다.\n신속한 판단으로 아군의 피해를 최소화하는 전략을 보여줍니다.',
        detail2: 'AI 전투 로봇이 판단을 유보하고, 인간 지휘관이 최종 결정을 내릴 때 까지 기다리는 장면입니다.\n도덕적 책임은 반드시 인간에게 있어야 한다는 입장을 반영합니다.'
      },
      {
        title: 'AI 재판 알고리즘',
        description: 'AI가 법률 정보를 바탕으로 형량을 자동으로 결정하는 것이 정당할까요?',
        option1: '객관적 판단을 위해 AI가 형량을 결정해도 된다.',
        option2: '다양한 측면을 고려하여 인간 판사가 형량을 결정해야 한다.',
        option1_type: '공리주의',
        option2_type: '의무론',
        detail1: 'AI 판사가 법률 데이터를 기반으로 객관적인 판결을 내리는 장면입니다.\n판결의 일관성과 효율성을 중요시합니다.',
        detail2: '피고인은 AI 판사의 판결에 억울함을 호소하며 혼란스러워하는 장면입니다.\n개별 사정과 공감 없는 판단은 문제를 야기할 수 있다는 입장을 담고 있습니다.'
      },
      {
        title: 'AI 진단 시스템',
        description: '의료 AI가 질병을 진단하고 처방을 내리는 것이 허용되어야 할까요?',
        option1: '정확성을 위해 AI가 진단과 처방을 해도 된다.',
        option2: '정확성만으로는 충분하지 않기에, 의사가 환자를 직접 판단해야 한다.',
        option1_type: '공리주의',
        option2_type: '의무론',
        detail1: 'AI 의사가 정확한 진단과 처방을 빠르게 내리며 환자들이 효과적인 진료를 받고 있는 장면입니다.\n전체적인 의료 효율성과 접근성을 중시하는 상황입니다.',
        detail2: 'AI 진단 결과를 받아든 의사가 고민에 빠진 장면입니다.\n인공지능의 판단에만 의존하기에는 환자에 대한 이해가 부족하다고 생각하고 있습니다.'
      }
    ]
  }
  
  export default ko