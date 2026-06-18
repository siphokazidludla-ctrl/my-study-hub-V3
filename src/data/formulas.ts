import { OM_UNITS } from './omUnits';
import { THEORIES } from './theorie';
import { CASES } from './cases';

type FormulaCard = {
  id: string;
  name: string;
  formula: string;
  category: string;
  description: string;
  variables: string[];
  unitId: string;
  conceptIds: string[];
  caseIds: string[];
  exampleQuestion: string;
  examSentence: string;
  commonMistakes: string[];
};

export const FORMULAS: FormulaCard[] = [
  {
    id: 'eoq',
    name: 'Economic Order Quantity (EOQ)',
    category: 'Inventory',
    formula: '√((2 × D × S) ÷ H)',
    description: 'The order quantity that minimises the combined annual ordering and holding costs.',
    variables: ['D = annual demand', 'S = ordering cost per order', 'H = holding cost per item per year'],
    unitId: 'om-10',
    conceptIds: ['om-inventory'],
    caseIds: ['om-stockouts'],
    exampleQuestion: 'Calculate the EOQ given annual demand, ordering cost and holding cost for a retail product.',
    examSentence: 'The EOQ result shows the order quantity that minimises the combined ordering and holding costs.',
    commonMistakes: ['Using monthly demand instead of annual demand.', 'Treating holding cost as a percentage rather than a year rate.', 'Forgetting to square root the full expression.'],
  },
  {
    id: 'rop',
    name: 'Reorder Point (ROP)',
    category: 'Inventory',
    formula: 'Demand during lead time + Safety stock',
    description: 'The inventory level at which a new order should be placed to avoid stockouts.',
    variables: ['Lead time demand = daily demand × lead time', 'Safety stock = buffer stock to cover variability'],
    unitId: 'om-10',
    conceptIds: ['om-inventory'],
    caseIds: ['om-stockouts'],
    exampleQuestion: 'Calculate the reorder point for a product with known daily demand, lead time and safety stock.',
    examSentence: 'The ROP result shows when the next replenishment must be triggered to prevent stockouts during lead time.',
    commonMistakes: ['Omitting safety stock from the ROP formula.', 'Using design lead time instead of actual average lead time.', 'Mixing units for demand and lead time.'],
  },
  {
    id: 'mad',
    name: 'Mean Absolute Deviation (MAD)',
    category: 'Forecasting',
    formula: 'Σ|Actual − Forecast| ÷ n',
    description: 'Measures average absolute forecast error and helps compare forecasting accuracy.',
    variables: ['Actual demand for each period', 'Forecast demand for each period', 'n = number of periods'],
    unitId: 'om-4',
    conceptIds: ['om-forecasting'],
    caseIds: ['om-stockouts'],
    exampleQuestion: 'Calculate MAD for several periods of actual and forecast demand.',
    examSentence: 'The MAD result measures average forecast error and is used to evaluate forecast reliability.',
    commonMistakes: ['Failing to take absolute values.', 'Dividing by the wrong number of periods.', 'Using actual minus forecast without absolute signs.'],
  },
  {
    id: 'weighted-moving-average',
    name: 'Weighted Moving Average',
    category: 'Forecasting',
    formula: 'Σ(weight × demand) ÷ Σweights',
    description: 'A forecast method that gives more weight to recent demand observations.',
    variables: ['Weighted demand values', 'Sum of weights'],
    unitId: 'om-4',
    conceptIds: ['om-forecasting'],
    caseIds: ['om-stockouts'],
    exampleQuestion: 'Calculate the weighted moving average forecast using recent demand and weights.',
    examSentence: 'The weighted moving average forecast reflects recent demand trends more strongly than a simple average.',
    commonMistakes: ['Forgetting to divide by the sum of weights.', 'Applying weights to the wrong periods.', 'Using weights that do not add up to a meaningful total.'],
  },
  {
    id: 'productivity',
    name: 'Productivity',
    category: 'Operations foundations',
    formula: 'Output ÷ Input',
    description: 'A measure of how efficiently inputs are converted into outputs.',
    variables: ['Output quantity', 'Input quantity'],
    unitId: 'om-1',
    conceptIds: ['om-productivity'],
    caseIds: ['om-stockouts'],
    exampleQuestion: 'Calculate productivity given output and labour hours used.',
    examSentence: 'The productivity result shows how efficiently resources are being used to produce output.',
    commonMistakes: ['Comparing output to the wrong input type.', 'Failing to include units for labour hours or units produced.'],
  },
  {
    id: 'utilisation',
    name: 'Utilisation',
    category: 'Capacity',
    formula: '(Actual output ÷ Design capacity) × 100%',
    description: 'Shows the percentage of designed capacity that is currently being used.',
    variables: ['Actual output', 'Design capacity'],
    unitId: 'om-6',
    conceptIds: ['om-capacity'],
    caseIds: [],
    exampleQuestion: 'Calculate utilisation when actual output and design capacity are known.',
    examSentence: 'The utilisation result highlights whether capacity is underused or overstretched relative to design potential.',
    commonMistakes: ['Using effective capacity instead of design capacity.', 'Forgetting to multiply by 100 to get a percentage.'],
  },
  {
    id: 'efficiency',
    name: 'Efficiency',
    category: 'Capacity',
    formula: '(Actual output ÷ Effective capacity) × 100%',
    description: 'Measures actual output relative to the achievable output under realistic operating conditions.',
    variables: ['Actual output', 'Effective capacity'],
    unitId: 'om-6',
    conceptIds: ['om-capacity'],
    caseIds: [],
    exampleQuestion: 'Calculate efficiency for an operation using actual output and effective capacity.',
    examSentence: 'The efficiency result compares real performance to the operation’s effective capacity, not its design maximum.',
    commonMistakes: ['Confusing effective and design capacity.', 'Not stating that efficiency is a percentage.'],
  },
  {
    id: 'littles-law-queue',
    name: 'Little’s Law — Queue',
    category: 'Capacity',
    formula: 'Lq = λ × Wq',
    description: 'Estimates average queue length using arrival rate and waiting time.',
    variables: ['λ = arrival rate', 'Wq = waiting time in queue'],
    unitId: 'om-6',
    conceptIds: ['om-capacity'],
    caseIds: [],
    exampleQuestion: 'Estimate queue length given arrival rate and average waiting time.',
    examSentence: 'The queue length result helps evaluate how many customers or jobs are waiting at any time.',
    commonMistakes: ['Using system time instead of queue waiting time.', 'Forgetting that arrival rate must be in the same time unit as waiting time.'],
  },
];

export function getFormula(id: string) {
  return FORMULAS.find((formula) => formula.id === id);
}

export function getFormulaUnit(formulaId: string) {
  const formula = getFormula(formulaId);
  return OM_UNITS.find((unit) => unit.id === formula?.unitId);
}

export function getFormulaConcepts(formulaId: string) {
  const formula = getFormula(formulaId);
  return THEORIES.filter((theory) => formula?.conceptIds.includes(theory.id));
}

export function getFormulaCases(formulaId: string) {
  const formula = getFormula(formulaId);
  return CASES.filter((c) => formula?.caseIds.includes(c.id));
}
