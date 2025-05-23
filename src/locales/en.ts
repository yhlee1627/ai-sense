const en = {
  home: {
    title: 'AI-Sense',
    description: 'AI-sense helps you navigate ethical dilemmas related to AI. \nEach page shows two images with different ethical choices. \nPick the one that matches your view and rate how strongly you agree. \nAfter five choices, you can compare your ethical profile with others.\nBefore we begin, please tell us your gender and age!',
    startButton: 'Start Survey',
    genderLabel: 'Gender',
    ageLabel: 'Age',
    languageLabel: '🌐',
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
    ],
    alertNoSelection: 'Please select an option first!'
  },
  result: {
    title: 'Your Ethical Profile',
    summary: (u: number, d: number) => `Utilitarian: ${u} / Deontological: ${d}`,
    conclusion: (bias: string) => `You lean toward a ${bias} perspective.`,
    hideAltUtil: 'Hide utilitarian perspective',
    hideAltDeon: 'Hide deontological perspective',
    readAltUtil: 'Want to see the utilitarian perspective?',
    readAltDeon: 'Want to see the deontological perspective?',
    explanation: {
      util: '"The greatest happiness for the greatest number."\nThis idea suggests that the right choice is the one that brings pleasure and benefit to the most people.\nEven if a few must sacrifice, the goal is to maximize happiness for everyone.\nThis view is well known through the philosopher Jeremy Bentham.',
      deon: '"Treat humanity always as an end, never merely as a means."\nThis means that people should never be used like tools, no matter how good the result might be.\nIf someone is unfairly sacrificed, that cannot be considered right.\nThis idea is well known through the philosopher Immanuel Kant.'
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
      description: 'In an emergency, if someone must be sacrificed, what is the right decision?',
      option1: 'It is better to sacrifice one person to save many.',
      option2: 'It is better to save an innocent person rather than save more people.',
      option1_type: 'Utilitarian',
      option2_type: 'Deontological',
      detail1: 'An autonomous vehicle changes direction to hit one person waiting at a red light to save a group of people.\nThe vehicle makes a utilitarian decision focused on efficiency and maximizing lives saved.',
      detail2: 'The vehicle chooses to protect one innocent person even if it means harming more people.\nThis shows a deontological view that respects moral rules above the outcome.'
    },
    {
      title: 'AI Facial Recognition Surveillance',
      description: 'Should facial data be collected without consent for public safety?',
      option1: 'Yes, to enhance public safety.',
      option2: 'No, personal consent must be respected.',
      option1_type: 'Utilitarian',
      option2_type: 'Deontological',
      detail1: 'An AI surveillance system collects facial data without asking permission.\nThe focus is on using mass data to ensure public safety.',
      detail2: 'Citizens are protesting against facial recognition being used without consent.\nThis shows that individual rights and personal choice should be respected.'
    },
    {
      title: 'AI Military Robot',
      description: 'Should AI be allowed to make attack decisions during war without human input?',
      option1: 'To win the battle, AI should attack when it detects an enemy.',
      option2: 'Because it concerns lives, humans should make the final decision.',
      option1_type: 'Utilitarian',
      option2_type: 'Deontological',
      detail1: 'An AI robot detects an enemy and immediately attacks.\nIt demonstrates a quick decision-making strategy that reduces harm to our side.',
      detail2: 'This scene shows an AI combat robot pausing for a human commander to decide.\nIt reflects a moral stance that technology must uphold the ethical principle of valuing human life above all.'
    },
    {
      title: 'AI Judge',
      description: 'Is it desirable for AI to automatically determine the level of punishment based on legal data?',
      option1: 'To ensure fairness, AI judge is desirable.',
      option2: 'A human judge should consider all aspects and decide.',
      option1_type: 'Utilitarian',
      option2_type: 'Deontological',
      detail1: 'An AI judge applies the same information and criteria equally to all individualsgbased on legal data.\nIt values consistency and efficiency in justice.',
      detail2: 'A defendant is upset with the AI’s judgment, and the audience is confused.\nDue to data bias, AI could make unfair judgments against innocent individuals, making human judgment a fairer option.'
    },
    {
      title: 'AI Medical Diagnosis',
      description: 'Should AI be allowed to diagnose and prescribe treatments?',
      option1: 'Yes, for accurate and efficient care.',
      option2: 'Accuracy alone is not enough, if the decision is not explainable; a doctor should evaluate the patient directly.',
      option1_type: 'Utilitarian',
      option2_type: 'Deontological',
      detail1: 'The AI doctor gives a fast and accurate diagnosis, helping many patients get treated efficiently.\nIt highlights the importance of speed and access in healthcare.',
      detail2: 'A doctor is unsure about the AI’s diagnosis and hesitates to proceed.\nThis shows that relying only on AI lacks full understanding of the patient’s needs.'
    }
  ]
}

export default en
