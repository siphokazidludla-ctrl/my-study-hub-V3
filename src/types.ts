export type ModuleId = 'ob' | 'ikm' | 'om' | 'mm';

export interface Reference {
  inText: string;
  full: string;
  tier:
    | 'Module Guide'
    | 'Prescribed Textbook'
    | 'Recommended Textbook'
    | 'Past Paper'
    | 'Referencing Guide'
    | 'Peer-reviewed (2020+)'
    | 'Requires verification';
}

export interface LearningOutcome { code: string; text: string; }

export interface Unit {
  id: string;
  number: number;
  title: string;
  plain: string;
  outcomes: LearningOutcome[];
  contents: string[];
  keyConcepts: string[];
  assessmentWeight: number;
  assessmentNote: string;
  theoryIds: string[];
  prescribedChapters?: string;
}

export interface Theory {
  id: string;
  module: ModuleId;
  name: string;
  shortName?: string;
  category: string;
  unitIds: string[];
  definition: string;
  definitionRefs: string[];
  plain: string;
  purpose: string;
  components: string[];
  advantages: string[];
  limitations: string[];
  comparisons: { against: string; note: string }[];
  example: string;
  saExample: string;
  examTriggers: string[];
  commonMistakes: string[];
  relatedTheoryIds: string[];
  caseIds: string[];
  refs: string[];
}

export interface CaseStudy {
  id: string;
  module: ModuleId;
  title: string;
  scenario: string;
  source: string;
  keyIssues: string[];
  relevantTheoryIds: string[];
  recommendedFrameworks: string[];
  diagnosticQuestions: string[];
  exampleAnalysis: string[];
  commonMistakes: string[];
}

export interface CommandWord {
  word: string;
  tier: 'Describe / recall' | 'Explain / apply' | 'Analyse / evaluate';
  meaning: string;
  examinerExpectation: string;
  structure: string[];
  exampleParagraph: string;
  commonMistakes: string[];
  pairsWith: string[];
  frequency?: string;
}

export interface ParagraphTemplate {
  id: string;
  type: 'Introduction' | 'Theory' | 'Application' | 'Analysis' | 'Evaluation' | 'Recommendation' | 'Conclusion';
  title: string;
  template: string;
  guidance: string;
}

export interface ExamTopic {
  topic: string;
  module: ModuleId;
  frequency: 'High' | 'Medium' | 'Low' | 'Requires verification';
  difficulty: 'Foundational' | 'Intermediate' | 'Advanced';
  commandWords: string[];
  theoryIds: string[];
  unitIds: string[];
  strategy: string;
  commonMistakes: string;
  saPattern?: string;
}
