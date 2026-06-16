import type { OMFormula } from './formulas';
import { getOMFormula } from './formulas';

export type OMWorkedExample = {
  id: string;
  formulaId: string;
  title: string;
  context: string;
  givenData: { label: string; value: string; unit: string }[];
  question: string;
  solution: { step: number; description: string; calculation: string; result: string }[];
  finalAnswer: string;
  interpretation: string;
  sanityCheck: string;
  relatedQuestions: string[];
  examTips: string[];
};

export const OM_WORKED_EXAMPLES: OMWorkedExample[] = [
  {
    id: 'example-eoq-1',
    formulaId: 'eoq',
    title: 'EOQ Calculation for Manufacturing Parts',
    context: 'A manufacturing company needs to determine the optimal order quantity for a critical component used in production.',
    givenData: [
      { label: 'Annual demand (D)', value: '12,000', unit: 'units/year' },
      { label: 'Ordering cost (S)', value: 'R200', unit: 'per order' },
      { label: 'Holding cost (H)', value: 'R6', unit: 'per unit/year' },
    ],
    question: 'Calculate the Economic Order Quantity and determine the number of orders per year.',
    solution: [
      { step: 1, description: 'Write down the EOQ formula', calculation: 'EOQ = √((2 × D × S) ÷ H)', result: '' },
      { step: 2, description: 'Identify the values', calculation: 'D = 12,000, S = R200, H = R6', result: '' },
      { step: 3, description: 'Substitute values into the formula', calculation: 'EOQ = √((2 × 12,000 × 200) ÷ 6)', result: '' },
      { step: 4, description: 'Calculate the numerator', calculation: '2 × 12,000 × 200 = 4,800,000', result: '' },
      { step: 5, description: 'Divide by holding cost', calculation: '4,800,000 ÷ 6 = 800,000', result: '' },
      { step: 6, description: 'Take the square root', calculation: 'EOQ = √800,000', result: '894 units (approximately)' },
      { step: 7, description: 'Calculate number of orders per year', calculation: 'N = D ÷ EOQ = 12,000 ÷ 894', result: '13.4 ≈ 13-14 orders/year' },
    ],
    finalAnswer: 'The Economic Order Quantity is approximately 894 units, requiring 13-14 orders per year.',
    interpretation: 'Ordering 894 units each time minimises total inventory costs by balancing ordering frequency against holding costs. At this quantity, the company would place orders roughly every 4 weeks.',
    sanityCheck: 'To verify: at EOQ, ordering cost should equal holding cost. AOC = (12,000 ÷ 894) × 200 = R2,684. AHC = (894 ÷ 2) × 6 = R2,682. The values are approximately equal, confirming the EOQ calculation.',
    relatedQuestions: [
      'What happens to EOQ if demand doubles?',
      'How would a 50% increase in holding cost affect the order quantity?',
      'What is the total annual inventory cost at the EOQ?',
    ],
    examTips: [
      'Always show the formula with symbols before substituting numbers',
      'Round your final answer appropriately (usually to whole units)',
      'State your interpretation in plain business language',
      'Mention limitations of EOQ in your answer',
    ],
  },
  {
    id: 'example-rop-1',
    formulaId: 'rop',
    title: 'Reorder Point Calculation',
    context: 'A distributor needs to determine when to place replenishment orders to avoid stockouts.',
    givenData: [
      { label: 'Daily demand', value: '50', unit: 'units/day' },
      { label: 'Lead time', value: '6', unit: 'days' },
      { label: 'Safety stock', value: '100', unit: 'units' },
    ],
    question: 'Calculate the Reorder Point (ROP) for this product.',
    solution: [
      { step: 1, description: 'Write down the ROP formula', calculation: 'ROP = (Daily demand × Lead time) + Safety stock', result: '' },
      { step: 2, description: 'Calculate demand during lead time', calculation: 'Demand during lead time = 50 × 6 = 300 units', result: '' },
      { step: 3, description: 'Add safety stock', calculation: 'ROP = 300 + 100', result: '400 units' },
      { step: 4, description: 'Interpret the result', calculation: 'When inventory drops to 400 units, place a new order', result: '' },
    ],
    finalAnswer: 'The Reorder Point is 400 units. When inventory reaches this level, a new order should be placed.',
    interpretation: 'With a lead time of 6 days and daily demand of 50 units, the business will use 300 units during the time it takes for an order to arrive. The additional 100 units of safety stock provide a buffer against demand variability or delivery delays.',
    sanityCheck: 'ROP of 400 units ÷ 50 units/day = 8 days of inventory cover, which exceeds the 6-day lead time. The 2-day buffer represents the safety stock protection.',
    relatedQuestions: [
      'What is the maximum lead time the safety stock can cover?',
      'How would a 20% increase in daily demand affect the ROP?',
      'What happens to stockout risk if lead time increases?',
    ],
    examTips: [
      'Always include safety stock in the calculation unless explicitly told not to',
      'Make sure daily demand and lead time use consistent units (both in days)',
      'Explain what the ROP means for operational decision-making',
      'Discuss how demand variability affects the safety stock requirement',
    ],
  },
  {
    id: 'example-mad-1',
    formulaId: 'mad',
    title: 'Forecast Error Measurement',
    context: 'A company wants to evaluate the accuracy of its forecasting method over the past 5 periods.',
    givenData: [
      { label: 'Period 1', value: 'Actual: 200, Forecast: 210', unit: '' },
      { label: 'Period 2', value: 'Actual: 220, Forecast: 215', unit: '' },
      { label: 'Period 3', value: 'Actual: 205, Forecast: 210', unit: '' },
      { label: 'Period 4', value: 'Actual: 230, Forecast: 220', unit: '' },
      { label: 'Period 5', value: 'Actual: 215, Forecast: 218', unit: '' },
    ],
    question: 'Calculate the MAD to evaluate forecast accuracy.',
    solution: [
      { step: 1, description: 'Write down the MAD formula', calculation: 'MAD = Σ|Actual − Forecast| ÷ n', result: '' },
      { step: 2, description: 'Calculate absolute deviation for Period 1', calculation: '|200 − 210| = 10', result: '' },
      { step: 3, description: 'Calculate absolute deviation for Period 2', calculation: '|220 − 215| = 5', result: '' },
      { step: 4, description: 'Calculate absolute deviation for Period 3', calculation: '|205 − 210| = 5', result: '' },
      { step: 5, description: 'Calculate absolute deviation for Period 4', calculation: '|230 − 220| = 10', result: '' },
      { step: 6, description: 'Calculate absolute deviation for Period 5', calculation: '|215 − 218| = 3', result: '' },
      { step: 7, description: 'Sum all absolute deviations', calculation: '10 + 5 + 5 + 10 + 3 = 33', result: '' },
      { step: 8, description: 'Divide by number of periods', calculation: 'MAD = 33 ÷ 5', result: '6.6 units' },
    ],
    finalAnswer: 'The Mean Absolute Deviation (MAD) is 6.6 units.',
    interpretation: 'On average, the forecasts are off by about 6.6 units. As a percentage of average demand (approximately 214 units), this is a 3.1% error rate, which indicates reasonably good forecast accuracy.',
    sanityCheck: 'The deviations range from 3 to 10 units. A MAD of 6.6 falls within this range, confirming the calculation makes sense.',
    relatedQuestions: [
      'Which period had the largest forecast error and why might this matter?',
      'How does this MAD compare to industry benchmarks?',
      'What could be done to reduce forecast error?',
    ],
    examTips: [
      'Remember to take the absolute value - negative deviations become positive',
      'Count the number of periods carefully (n) for the division',
      'Interpret MAD relative to the scale of demand',
      'Lower MAD indicates better forecast accuracy',
    ],
  },
  {
    id: 'example-productivity-1',
    formulaId: 'productivity',
    title: 'Labour Productivity Calculation',
    context: 'A factory produces widgets and management wants to measure workforce productivity.',
    givenData: [
      { label: 'Daily output', value: '800', unit: 'widgets' },
      { label: 'Number of workers', value: '20', unit: 'workers' },
      { label: 'Hours per worker', value: '8', unit: 'hours' },
    ],
    question: 'Calculate the labour productivity in widgets per labour hour.',
    solution: [
      { step: 1, description: 'Write down the productivity formula', calculation: 'Productivity = Output ÷ Input', result: '' },
      { step: 2, description: 'Calculate total labour hours', calculation: 'Total hours = 20 workers × 8 hours = 160 hours', result: '' },
      { step: 3, description: 'Calculate productivity', calculation: 'Productivity = 800 widgets ÷ 160 hours', result: '5 widgets per labour hour' },
      { step: 4, description: 'Alternative expression', calculation: 'Productivity = 800 ÷ 20 workers = 40 widgets per worker per day', result: '' },
    ],
    finalAnswer: 'Labour productivity is 5 widgets per labour hour (or 40 widgets per worker per day).',
    interpretation: 'Each worker produces an average of 40 widgets per day, or 5 widgets for every hour worked. This baseline can be compared across different periods or against industry benchmarks.',
    sanityCheck: 'If productivity is 5 units/hour and workers work 8 hours, they should produce 40 units/day. With 20 workers, this gives 800 units. The calculation is consistent.',
    relatedQuestions: [
      'What would productivity be if output increased to 900 units with the same workforce?',
      'How many workers would be needed to produce 1,000 units at the same productivity?',
      'What factors might improve this productivity measure?',
    ],
    examTips: [
      'Clearly state what output and input measures you are using',
      'Productivity can be expressed in different units (per hour, per worker, per day)',
      'Compare productivity over time or against benchmarks',
      'Distinguish between single-factor and multi-factor productivity',
    ],
  },
  {
    id: 'example-utilisation-1',
    formulaId: 'utilisation',
    title: 'Capacity Utilisation Analysis',
    context: 'A manufacturing facility wants to assess how well it is using its designed capacity.',
    givenData: [
      { label: 'Design capacity', value: '10,000', unit: 'units/month' },
      { label: 'Actual output', value: '7,500', unit: 'units/month' },
    ],
    question: 'Calculate the capacity utilisation rate.',
    solution: [
      { step: 1, description: 'Write down the utilisation formula', calculation: 'Utilisation = (Actual output ÷ Design capacity) × 100%', result: '' },
      { step: 2, description: 'Identify the values', calculation: 'Actual = 7,500, Design = 10,000', result: '' },
      { step: 3, description: 'Calculate the ratio', calculation: '7,500 ÷ 10,000 = 0.75', result: '' },
      { step: 4, description: 'Convert to percentage', calculation: '0.75 × 100%', result: '75%' },
    ],
    finalAnswer: 'Capacity utilisation is 75%.',
    interpretation: 'The facility is operating at 75% of its designed maximum capacity. This indicates 25% of designed capacity is unused, which could represent opportunity for increased output or excess capacity requirements.',
    sanityCheck: '75% of 10,000 = 7,500, which matches the actual output. The calculation is correct.',
    relatedQuestions: [
      'What factors might prevent achieving 100% utilisation?',
      'Is higher utilisation always better for the business?',
      'How does utilisation compare to efficiency if effective capacity is 9,000 units?',
    ],
    examTips: [
      'Remember to multiply by 100 to get a percentage',
      'Distinguish between design capacity and effective capacity',
      'Very high utilisation may indicate capacity constraints',
      'Very low utilisation may indicate excess capacity or weak demand',
    ],
  },
  {
    id: 'example-efficiency-1',
    formulaId: 'efficiency',
    title: 'Operational Efficiency Calculation',
    context: 'A production line has both design capacity and effective capacity measures. Management wants to know how well the line is performing relative to realistic achievable output.',
    givenData: [
      { label: 'Design capacity', value: '1,000', unit: 'units/day' },
      { label: 'Effective capacity', value: '850', unit: 'units/day' },
      { label: 'Actual output', value: '765', unit: 'units/day' },
    ],
    question: 'Calculate both utilisation and efficiency. Explain the difference.',
    solution: [
      { step: 1, description: 'Calculate utilisation', calculation: 'Utilisation = (765 ÷ 1,000) × 100%', result: '76.5%' },
      { step: 2, description: 'Calculate efficiency', calculation: 'Efficiency = (765 ÷ 850) × 100%', result: '90%' },
      { step: 3, description: 'Explain the difference', calculation: 'Efficiency > Utilisation', result: '' },
      { step: 4, description: 'Interpretation', calculation: 'The line operates efficiently (90%) but has unused design capacity', result: '' },
    ],
    finalAnswer: 'Utilisation is 76.5% and efficiency is 90%.',
    interpretation: 'The production line is operating at 90% of its realistic effective capacity (good operational performance), but only 76.5% of its design capacity (some theoretical capacity is not usable under real conditions). The gap between design and effective capacity represents realistic constraints such as maintenance, changeovers, and quality losses.',
    sanityCheck: 'Effective capacity (850) is less than design capacity (1,000), which makes sense. Actual output (765) is less than effective capacity, which is expected.',
    relatedQuestions: [
      'Why is effective capacity lower than design capacity?',
      'What could be done to increase effective capacity?',
      'What happens to the utilisation/efficiency gap if actual output increases?',
    ],
    examTips: [
      'Design capacity >= Effective capacity >= Actual output (usually)',
      'Efficiency measures performance against achievable targets',
      'Utilisation measures use of maximum theoretical capacity',
      'The gap between utilisation and efficiency reveals process improvement potential',
    ],
  },
  {
    id: 'example-weighted-moving-average-1',
    formulaId: 'weighted-moving-average',
    title: 'Weighted Moving Average Forecast',
    context: 'A retailer wants to forecast demand using a 3-period weighted moving average, giving more weight to recent sales.',
    givenData: [
      { label: 'Period 1 (oldest)', value: '150', unit: 'units' },
      { label: 'Period 2', value: '165', unit: 'units' },
      { label: 'Period 3 (newest)', value: '180', unit: 'units' },
      { label: 'Weights', value: '0.2, 0.3, 0.5', unit: '(oldest to newest)' },
    ],
    question: 'Calculate the weighted moving average forecast for Period 4.',
    solution: [
      { step: 1, description: 'Write down the WMA formula', calculation: 'WMA = Σ(Weight × Demand) ÷ ΣWeights', result: '' },
      { step: 2, description: 'Apply weights to each period', calculation: '', result: '' },
      { step: 3, description: 'Period 1: 150 × 0.2', calculation: '= 30', result: '' },
      { step: 4, description: 'Period 2: 165 × 0.3', calculation: '= 49.5', result: '' },
      { step: 5, description: 'Period 3: 180 × 0.5', calculation: '= 90', result: '' },
      { step: 6, description: 'Sum weighted values', calculation: '30 + 49.5 + 90 = 169.5', result: '' },
      { step: 7, description: 'Sum of weights', calculation: '0.2 + 0.3 + 0.5 = 1.0', result: '' },
      { step: 8, description: 'Calculate WMA', calculation: 'WMA = 169.5 ÷ 1.0', result: '169.5 or 170 units' },
    ],
    finalAnswer: 'The forecast for Period 4 is approximately 170 units (using the weighted moving average).',
    interpretation: 'By giving 50% weight to the most recent period, the forecast of 170 units is closer to the Period 3 value of 180 than to the simple average of 165. This makes the forecast more responsive to the upward trend in demand.',
    sanityCheck: 'A simple average would be (150 + 165 + 180) ÷ 3 = 165. With weights favouring recent data (showing an increasing trend), the WMA of 170 is higher than 165, which is consistent with the upward trend.',
    relatedQuestions: [
      'What would the forecast be using a simple 3-period moving average?',
      'How would the forecast change if weights were 0.1, 0.3, 0.6?',
      'What are the limitations of weighted moving average for seasonal data?',
    ],
    examTips: [
      'Always ensure weights sum to 1.0 (or divide by the sum of weights)',
      'Show your working for each period multiplication',
      'Explain why the WMA is higher or lower than a simple average',
      'Discuss responsiveness vs stability in choosing weights',
    ],
  },
  {
    id: 'example-total-inventory-cost-1',
    formulaId: 'total-inventory-cost',
    title: 'Total Annual Inventory Cost Calculation',
    context: 'A warehouse manager wants to verify the inventory costs at the calculated EOQ.',
    givenData: [
      { label: 'EOQ', value: '500', unit: 'units' },
      { label: 'Annual demand (D)', value: '10,000', unit: 'units/year' },
      { label: 'Ordering cost (S)', value: 'R100', unit: 'per order' },
      { label: 'Holding cost (H)', value: 'R10', unit: 'per unit/year' },
    ],
    question: 'Calculate the total annual inventory cost and verify that ordering cost equals holding cost at EOQ.',
    solution: [
      { step: 1, description: 'Write down the total cost formula', calculation: 'TC = (D/Q × S) + (Q/2 × H)', result: '' },
      { step: 2, description: 'Calculate number of orders per year', calculation: 'D/Q = 10,000 ÷ 500 = 20 orders', result: '' },
      { step: 3, description: 'Calculate annual ordering cost', calculation: 'AOC = 20 × R100', result: 'R2,000' },
      { step: 4, description: 'Calculate average inventory', calculation: 'Q/2 = 500 ÷ 2 = 250 units', result: '' },
      { step: 5, description: 'Calculate annual holding cost', calculation: 'AHC = 250 × R10', result: 'R2,500' },
      { step: 6, description: 'Wait - costs are not equal, check EOQ', calculation: 'EOQ = √((2×10,000×100)÷10) = √200,000 = 447', result: '' },
      { step: 7, description: 'Recalculate with correct EOQ', calculation: 'EOQ = 447 units (approximately)', result: '' },
      { step: 8, description: 'At EOQ: AOC = (10,000÷447)×100 = R2,237', calculation: 'AHC = (447÷2)×10 = R2,235', result: 'Approximately equal' },
    ],
    finalAnswer: 'At the correct EOQ of approximately 447 units, the total annual inventory cost is approximately R4,472, with ordering cost and holding cost being approximately equal.',
    interpretation: 'The key insight of EOQ is that it occurs where ordering cost equals holding cost. If we order 500 units (more than EOQ), holding cost exceeds ordering cost, increasing total cost above the minimum.',
    sanityCheck: 'At EOQ, ordering cost should approximate holding cost. R2,237 ≈ R2,235. The small difference is due to rounding EOQ to whole units.',
    relatedQuestions: [
      'What is the total cost if we order 400 units instead of the EOQ?',
      'How much extra cost is incurred by ordering 500 units instead of 447?',
      'What happens to total cost if ordering cost doubles?',
    ],
    examTips: [
      'At EOQ, ordering cost equals holding cost (approximately)',
      'Deviations from EOQ increase total cost',
      'Show both cost components separately, then add them',
      'Use the EOQ verification as a sanity check for your calculation',
    ],
  },
];

export function getOMWorkedExample(id: string): OMWorkedExample | undefined {
  return OM_WORKED_EXAMPLES.find((e) => e.id === id);
}

export function getOMWorkedExampleByFormula(formulaId: string): OMWorkedExample | undefined {
  return OM_WORKED_EXAMPLES.find((e) => e.formulaId === formulaId);
}

export function getOMWorkedExamplesByUnit(unitId: string): OMWorkedExample[] {
  return OM_WORKED_EXAMPLES.filter((e) => {
    const formula = getOMFormula(e.formulaId);
    return formula && formula.unitId === unitId;
  });
}
