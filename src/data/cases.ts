import type { CaseStudy, ExamTopic } from '../types';

export const CASES: CaseStudy[] = [
  {
    id: 'ikm-digital-transformation', module: 'ikm', title: 'Digital transformation and knowledge loss',
    scenario: 'An organisation introduces new digital systems but employees continue using informal workarounds and knowledge remains trapped in departments.',
    source: 'Constructed study case based on IKM module themes. Source status: Requires verification.',
    keyIssues: ['Knowledge silos','Weak adoption','Tacit knowledge not captured','Information governance gaps'],
    relevantTheoryIds: ['ikm-km-cycle','ikm-tacit-explicit','ikm-info-governance'],
    recommendedFrameworks: ['Knowledge management cycle','Tacit-explicit knowledge distinction','Information governance'],
    diagnosticQuestions: ['What knowledge is not being captured?','Who owns the information?','What behaviours are blocking sharing?'],
    exampleAnalysis: ['The issue is not only technology; it is the absence of governance, culture and incentives for sharing knowledge.'],
    commonMistakes: ['Assuming a new system automatically creates knowledge management.']
  },
  {
    id: 'om-stockouts', module: 'om', title: 'Stockouts and customer complaints',
    scenario: 'A retailer faces rising stockouts, excess inventory in slow-moving lines and customer complaints about late delivery.',
    source: 'Constructed study case based on OM module themes. Source status: Requires verification.',
    keyIssues: ['Forecasting error','Inventory imbalance','Supply chain coordination','Service quality'],
    relevantTheoryIds: ['om-forecasting','om-inventory','om-supply-chain','om-quality'],
    recommendedFrameworks: ['Forecast error review','ABC inventory analysis','ROP/safety stock','Supplier coordination'],
    diagnosticQuestions: ['Is demand volatile?','Are reorder points correct?','Which SKUs drive stockouts?'],
    exampleAnalysis: ['The symptoms indicate a planning-and-control problem linking forecasting, inventory and supplier coordination.'],
    commonMistakes: ['Jumping straight to EOQ without diagnosing demand uncertainty or supplier lead time.']
  },
  {
    id: 'mm-brand-repositioning', module: 'mm', title: 'Brand repositioning and weak customer loyalty',
    scenario: 'A service brand loses younger customers despite high awareness because its positioning and digital communication feel outdated.',
    source: 'Constructed study case based on MM module themes. Source status: Requires verification.',
    keyIssues: ['Weak positioning','Poor digital engagement','Customer value mismatch','Brand relevance'],
    relevantTheoryIds: ['mm-stp','mm-branding','mm-digital','mm-customer-value'],
    recommendedFrameworks: ['STP','Brand equity','Customer journey','Integrated marketing communications'],
    diagnosticQuestions: ['Which segment is being lost?','What value does the brand promise?','Where does the customer journey break down?'],
    exampleAnalysis: ['The core issue is strategic fit between target segment, value proposition and communication channels.'],
    commonMistakes: ['Recommending social media activity without clarifying positioning or customer value.']
  }
];

export const EXAM_TOPICS: ExamTopic[] = [
  { topic: 'Knowledge governance and ethical AI', module: 'ikm', frequency: 'Requires verification', difficulty: 'Advanced', commandWords: ['Evaluate','Recommend'], theoryIds: ['ikm-info-governance','ikm-ethics-ai'], unitIds: ['ikm-10'], strategy: 'Define governance, apply to AI risks, evaluate controls, recommend policy and oversight.', commonMistakes: 'Treating AI as only a technical issue.' },
  { topic: 'Inventory, forecasting and supply chain coordination', module: 'om', frequency: 'Requires verification', difficulty: 'Advanced', commandWords: ['Analyse','Recommend'], theoryIds: ['om-forecasting','om-inventory','om-supply-chain'], unitIds: ['om-4','om-9','om-10'], strategy: 'Diagnose demand, stock and supplier issues before choosing formulas or tools.', commonMistakes: 'Using calculators without business interpretation.' },
  { topic: 'STP and digital marketing strategy', module: 'mm', frequency: 'Requires verification', difficulty: 'Intermediate', commandWords: ['Apply','Evaluate'], theoryIds: ['mm-stp','mm-digital','mm-branding'], unitIds: ['mm-4','mm-9'], strategy: 'Start with target segment and positioning before recommending channels.', commonMistakes: 'Treating promotion as the whole marketing strategy.' },
];
