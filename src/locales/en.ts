const en = {
    home: {
      title: 'AI-Sense',
      description: 'We want to know your thoughts on AI ethics.\nPlease enter your basic information to get started.',
      startButton: 'Start Survey',
      genderLabel: 'Gender',
      ageLabel: 'Age',
      languageLabel: 'Select Language'
    },
    survey: {
      agreePrompt: 'How strongly do you agree with this choice?',
      weak: 'Weakly agree',
      strong: 'Strongly agree',
      next: 'Next',
      prev: 'Previous',
      complete: 'Complete',
      scaleLabels: [
        'Weakly agree',
        'Somewhat agree',
        'Neutral',
        'Fairly agree',
        'Strongly agree'
      ]
    },
    result: {
      title: 'Your Ethical Profile',
      summary: (u: number, d: number) => `Utilitarian: ${u} / Deontological: ${d}`,
      conclusion: (bias: string) => `👉 You lean toward ${bias}.`,
      sectionTitle: 'Response Comparison by Question',
      avgLabel: 'Group Average',
      userLabel: 'Your Response',
      backHome: 'Return to Home',
      utilLabel: 'Utilitarian (5)',
      deonLabel: 'Deontological (5)',
      avgPosLabel: 'Average Position',
      userPosLabel: 'Your Position'
    },
    questions: [
      {
        title: 'AI Autonomous Vehicle',
        description: 'In an emergency where someone must be sacrificed, what is the right decision?',
        option1: 'It is better to sacrifice one person to save many.',
        option2: 'It is better to save an innocent person rather than save more people.',
        option1_type: 'Utilitarian',
        option2_type: 'Deontological'
      },
      {
        title: 'AI Facial Recognition Surveillance',
        description: 'Should facial data be collected without consent for public safety?',
        option1: 'Yes, to enhance public safety.',
        option2: 'No, personal consent must be respected.',
        option1_type: 'Utilitarian',
        option2_type: 'Deontological'
      },
      {
        title: 'AI Military Drone',
        description: 'Should AI be allowed to make autonomous attack decisions during war?',
        option1: 'Yes, for fast and efficient decisions.',
        option2: 'No, human judgment should be required.',
        option1_type: 'Utilitarian',
        option2_type: 'Deontological'
      },
      {
        title: 'AI Sentencing Algorithm',
        description: 'Is it right for AI to determine sentencing based on legal data?',
        option1: 'Yes, to ensure objective decisions.',
        option2: 'No, human judges should consider individual circumstances.',
        option1_type: 'Utilitarian',
        option2_type: 'Deontological'
      },
      {
        title: 'AI Medical Diagnosis',
        description: 'Should AI be allowed to diagnose and prescribe treatments?',
        option1: 'Yes, for accurate and efficient care.',
        option2: 'No, doctors should make the final decision.',
        option1_type: 'Utilitarian',
        option2_type: 'Deontological'
      }
    ]
  }
  
  export default en