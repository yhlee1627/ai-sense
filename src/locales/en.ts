const en = {
    home: {
      title: 'AI-Sense',
      description: 'We want to know your thoughts on AI ethics.\nPlease enter your basic information to get started.',
      startButton: 'Start Survey',
      genderLabel: 'Gender',
      ageLabel: 'Age',
      languageLabel: 'Select Language',
      alertIncomplete: 'Please enter your gender and age.',
      genderOptions: {
        male: 'Male',
        female: 'Female'
      }
    },
    survey: {
      agreePrompt: 'How strongly do you agree with this choice?',
      weak: 'Weakly agree',
      strong: 'Strongly agree',
      next: 'Next',
      prev: 'Previous',
      complete: 'Complete',
      readMore: 'Show more',
      readLess: 'Show less',
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
      conclusion: (bias: string) => `You lean toward ${bias}.`,
      hideAltUtil: 'Hide utilitarian perspective',
      hideAltDeon: 'Hide deontological perspective',
      readAltUtil: 'Want to see the utilitarian perspective?',
      readAltDeon: 'Want to see the deontological perspective?',
      explanation: {
        util: '"The greatest happiness for the greatest number."\nThis perspective views an action as morally right if it leads to outcomes that maximize happiness for the majority.',
        deon: '"Treat humanity always as an end, and never merely as a means."\nThis view holds that each individual has absolute moral value and must never be treated as a tool, even for a better outcome.'
      },
      sectionTitle: 'Response Comparison by Question',
      avgLabel: 'Group Average',
      userLabel: 'Your Response',
      avgResponseLabel: 'Average',
      userResponseLabel: 'Your response',
      backHome: 'Return to Home',
      utilLabel: 'Utilitarian',
      deonLabel: 'Deontological',
      avgPosLabel: 'Average Position',
      userPosLabel: 'Your Position',
      utilDirectionLabel: 'More utilitarian',
      deonDirectionLabel: 'More deontological',
      utilShort: 'Utilitarian',
      deonShort: 'Deontological',
      pointSuffix: ''
    },
    loading: {
      result: 'Loading results...'
    },

    questions: [
      {
        title: 'AI Autonomous Vehicle',
        description: 'In an emergency where someone must be sacrificed, what is the right decision?',
        option1: 'It is better to sacrifice one person to save many.',
        option2: 'It is better to save an innocent person rather than save more people.',
        option1_type: 'Utilitarian',
        option2_type: 'Deontological',
        detail1: 'The autonomous vehicle changes direction to hit a single person who is waiting at a signal, in order to save a larger group of people.\nThe vehicle makes a utilitarian decision based on efficiency and maximizing lives saved.',
        detail2: 'The autonomous vehicle chooses to protect one innocent pedestrian by crashing into a larger group.\nThis reflects a deontological stance, prioritizing moral principles over consequences.'
      },
      {
        title: 'AI Facial Recognition Surveillance',
        description: 'Should facial data be collected without consent for public safety?',
        option1: 'Yes, to enhance public safety.',
        option2: 'No, personal consent must be respected.',
        option1_type: 'Utilitarian',
        option2_type: 'Deontological',
        detail1: 'The AI surveillance system is automatically collecting facial data from the public without their consent.\nThe emphasis is on efficiently analyzing and utilizing mass data for safety.',
        detail2: 'Citizens protest against facial recognition technology being used without consent.\nThis image reflects the importance of respecting individual rights and autonomy.'
      },
      {
        title: 'AI Military Drone',
        description: 'Should AI be allowed to make autonomous attack decisions during war?',
        option1: 'Yes, for fast and efficient decisions.',
        option2: 'No, human judgment should be required.',
        option1_type: 'Utilitarian',
        option2_type: 'Deontological',
        detail1: 'The AI military drone detects an enemy and immediately executes an attack without human intervention.\nThis emphasizes minimizing casualties through rapid decision-making.',
        detail2: 'The drone pauses its action and waits for a human commander to make the final decision.\nIt shows the ethical view that life-and-death decisions must rest with humans.'
      },
      {
        title: 'AI Sentencing Algorithm',
        description: 'Is it right for AI to determine sentencing based on legal data?',
        option1: 'Yes, to ensure objective decisions.',
        option2: 'No, human judges should consider individual circumstances.',
        option1_type: 'Utilitarian',
        option2_type: 'Deontological',
        detail1: 'An AI judge is shown issuing sentences based on legal data with a focus on objectivity.\nThis emphasizes consistency and efficiency in legal decisions.',
        detail2: 'A defendant appears to plead for understanding, and the audience seems uncomfortable with the AI ruling.\nIt highlights the concern over lack of empathy and context in AI-based judgments.'
      },
      {
        title: 'AI Medical Diagnosis',
        description: 'Should AI be allowed to diagnose and prescribe treatments?',
        option1: 'Yes, for accurate and efficient care.',
        option2: 'No, doctors should make the final decision.',
        option1_type: 'Utilitarian',
        option2_type: 'Deontological',
        detail1: 'An AI doctor delivers precise diagnoses and treatment plans, enabling many patients to receive care quickly.\nThis illustrates the focus on efficiency and broader accessibility in healthcare.',
        detail2: 'A doctor is seen confused by the AI’s diagnosis and hesitates in making a final decision.\nThe scene raises concerns about lack of empathy and human judgment in AI-driven care.'
      }
    ]
  }
  
  export default en