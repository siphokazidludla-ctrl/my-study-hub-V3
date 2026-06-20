export type OMCase = {
  id: string;
  title: string;
  source: string;
  scenario: string;
  year?: string;
  questionText?: string;
  marks?: number;
  keyIssues: string[];
  relevantFormulas: string[];
  relevantUnits: string[];
  topic: string;
  questionType: string;
  steps: string[];
  examParagraph: string;
  criticalJudgement: string[];
};

export const OM_CASES: OMCase[] = [
  {
    id: 'om-eoq-apricot',
    title: 'Apricot Products EOQ Case',
    source: 'MANCOSA PGDBM Operations Management Past Paper',
    year: 'Past examination',
    scenario: 'Apricot Products purchases apricots in bulk and processes them into dried apricots, apricot jam, and apricot juice. The operations manager needs to determine the optimal order quantity for raw apricots to minimise total inventory costs.',
    questionText: 'Calculate the Economic Order Quantity (EOQ) given the following data: Annual demand = 24,000 kg, Ordering cost = R150 per order, Holding cost = R4 per kg per year. Determine the total annual inventory cost at the EOQ.',
    marks: 20,
    keyIssues: [
      'Finding optimal order quantity',
      'Balancing ordering and holding costs',
      'Minimising total inventory cost',
      'Understanding EOQ assumptions',
    ],
    relevantFormulas: ['eoq', 'total-inventory-cost', 'annual-holding-cost', 'annual-ordering-cost'],
    relevantUnits: ['om-10', 'om-4'],
    topic: 'Inventory management and EOQ calculation',
    questionType: 'Calculation with interpretation',
    steps: [
      'Step 1: Identify the problem type - EOQ calculation for inventory optimisation',
      'Step 2: Extract the given values: D = 24,000 kg/year, S = R150/order, H = R4/kg/year',
      'Step 3: Apply the EOQ formula: EOQ = √((2 × D × S) ÷ H)',
      'Step 4: Substitute: EOQ = √((2 × 24,000 × 150) ÷ 4) = √(7,200,000 ÷ 4) = √1,800,000',
      'Step 5: Calculate: EOQ = 1,342 kg (approximately)',
      'Step 6: Calculate number of orders per year: N = D/EOQ = 24,000/1,342 ≈ 18 orders',
      'Step 7: Calculate annual ordering cost: AOC = 18 × R150 = R2,700',
      'Step 8: Calculate annual holding cost: AHC = (1,342/2) × R4 = R2,684',
      'Step 9: Calculate total cost: TC = R2,700 + R2,684 ≈ R5,384',
      'Step 10: Interpret the result and state limitations',
    ],
    examParagraph: 'The EOQ calculation for Apricot Products yields an optimal order quantity of approximately 1,342 kg per order. At this quantity, the company will place about 18 orders per year, with annual ordering costs of R2,700 and annual holding costs of approximately R2,684. The total annual inventory cost is approximately R5,384. This solution minimises the combined cost of ordering and holding inventory.',
    criticalJudgement: [
      'EOQ assumes constant demand; seasonal variations in apricot supply may invalidate this assumption',
      'The model assumes instant replenishment; supplier lead time must be considered separately',
      'Quality variations in raw apricots may affect actual holding costs',
      'Price fluctuations for agricultural products may affect the holding cost calculation',
    ],
  },
  {
    id: 'om-stockouts',
    title: 'Stockouts and Customer Complaints',
    source: 'Constructed study case based on OM module themes',
    scenario: 'A retailer faces rising stockouts, excess inventory in slow-moving lines and customer complaints about late delivery. The operations manager must diagnose the root causes and recommend improvements.',
    keyIssues: [
      'Forecasting error leading to stock imbalances',
      'Poor demand visibility across product lines',
      'Supply chain coordination issues',
      'Service quality decline affecting customer loyalty',
    ],
    relevantFormulas: ['mad', 'eoq', 'rop', 'weighted-moving-average'],
    relevantUnits: ['om-4', 'om-9', 'om-10'],
    topic: 'Inventory management and forecasting',
    questionType: 'Stockout analysis with recommendations',
    steps: [
      'Step 1: Classify the case as an inventory and forecasting problem (Units 4, 9, 10)',
      'Step 2: Extract case facts: stockouts on fast-movers, excess on slow-movers, delivery delays',
      'Step 3: Analyse forecasting accuracy using MAD if actual vs forecast data is available',
      'Step 4: Review ABC classification - are high-value items getting appropriate attention?',
      'Step 5: Calculate EOQ and ROP for key stock-keeping units (SKUs)',
      'Step 6: Evaluate safety stock levels against demand variability',
      'Step 7: Assess supplier lead time reliability',
      'Step 8: Recommend improvements to forecasting, inventory policy, and supplier management',
      'Step 9: Build exam paragraph linking calculations to business outcomes',
      'Step 10: Add critical judgement on model limitations and implementation risks',
    ],
    examParagraph: 'The retailer\'s stockout problem stems from inadequate demand forecasting and poor inventory policy. Forecast error (measured by MAD) appears high for fast-moving lines, while ABC classification may not be driving the right replenishment priorities. The solution should address both the forecasting process (using weighted moving averages for trend sensitivity) and the inventory policy (adjusting ROP and safety stock based on demand variability and supplier reliability). EOQ calculations should be complemented by practical considerations such as shelf life, storage constraints, and service level targets.',
    criticalJudgement: [
      'EOQ assumes stable demand; promotional activity and seasonality may require alternative approaches',
      'Safety stock increases service levels but also increases holding costs',
      'Supplier relationship management may be more important than calculation accuracy',
      'Technology improvements (inventory management systems) should support process changes',
    ],
  },
  {
    id: 'om-productivity-manufacturing',
    title: 'Manufacturing Productivity Improvement',
    source: 'Constructed study case based on OM module themes',
    scenario: 'A manufacturing plant produces 500 units per day using 50 workers who each work 8 hours. Management wants to improve productivity to match competitor benchmarks.',
    questionText: 'Calculate the current labour productivity. If the target is 1.5 units per labour hour, what improvement is needed?',
    marks: 15,
    keyIssues: [
      'Measuring current productivity levels',
      'Benchmarking against industry standards',
      'Identifying improvement opportunities',
      'Understanding productivity drivers',
    ],
    relevantFormulas: ['productivity'],
    relevantUnits: ['om-1', 'om-6'],
    topic: 'Productivity measurement and improvement',
    questionType: 'Calculation with improvement recommendations',
    steps: [
      'Step 1: Identify the problem type - productivity calculation and gap analysis',
      'Step 2: Extract given data: Output = 500 units/day, Workers = 50, Hours per worker = 8',
      'Step 3: Calculate total labour hours: 50 workers × 8 hours = 400 labour hours',
      'Step 4: Calculate current productivity: 500 units ÷ 400 hours = 1.25 units/labour hour',
      'Step 5: Compare with target: 1.5 - 1.25 = 0.25 units/labour hour improvement needed',
      'Step 6: Calculate percentage improvement: (0.25 ÷ 1.25) × 100 = 20% improvement',
      'Step 7: Recommend improvement strategies: training, process improvement, technology',
      'Step 8: Discuss factors affecting productivity: equipment, skills, methods, quality',
    ],
    examParagraph: 'Current labour productivity is 1.25 units per labour hour (500 units ÷ 400 labour hours). To achieve the target of 1.5 units per labour hour, a 20% improvement is required. This gap can be addressed through process improvements (streamlining workflows, reducing waste), workforce development (training, motivation), and technology investments (automation, better tools). The organisation should also examine multi-factor productivity to understand the contribution of capital and materials to overall efficiency.',
    criticalJudgement: [
      'Labour productivity alone may be misleading; capital investment can affect apparent productivity',
      'Quality improvements may initially reduce productivity as workers adapt to new methods',
      'Hidden factors (breaks, maintenance, setup time) affect actual productive hours',
      'Benchmark comparisons must account for product complexity and automation levels',
    ],
  },
  {
    id: 'om-capacity-hospital',
    title: 'Hospital Capacity Analysis',
    source: 'Constructed study case based on OM module themes',
    scenario: 'A regional hospital has 200 beds and operates at an average occupancy of 160 patients. Management is considering whether to expand capacity or improve efficiency.',
    questionText: 'Calculate the utilisation and efficiency. If effective capacity is 180 beds (accounting for隔离 rooms and maintenance), what is the efficiency?',
    marks: 15,
    keyIssues: [
      'Understanding design vs effective capacity',
      'Measuring utilisation and efficiency',
      'Capacity planning in healthcare',
      'Balancing occupancy with service quality',
    ],
    relevantFormulas: ['utilisation', 'efficiency'],
    relevantUnits: ['om-6'],
    topic: 'Capacity planning and analysis',
    questionType: 'Capacity calculation with strategic recommendations',
    steps: [
      'Step 1: Identify design capacity: 200 beds',
      'Step 2: Identify effective capacity: 180 beds (realistic maximum)',
      'Step 3: Identify actual output: 160 patients average',
      'Step 4: Calculate utilisation: (160 ÷ 200) × 100 = 80%',
      'Step 5: Calculate efficiency: (160 ÷ 180) × 100 = 88.9%',
      'Step 6: Compare utilisation (80%) vs efficiency (88.9%)',
      'Step 7: Interpret: utilisation < efficiency indicates some unused design capacity',
      'Step 8: Analyse: 88.9% efficiency suggests the hospital is running close to realistic limits',
      'Step 9: Consider capacity expansion OR process improvement to increase effective capacity',
      'Step 10: Discuss healthcare-specific capacity considerations (seasonality, emergencies)',
    ],
    examParagraph: 'The hospital\'s utilisation is 80% (160 patients ÷ 200 design capacity), while its efficiency is 88.9% (160 patients ÷ 180 effective capacity). The lower utilisation figure indicates some design capacity is unavailable due to realistic constraints such as isolation rooms, maintenance, and specialised care requirements. The high efficiency suggests the hospital is operating close to its realistic limits. Capacity expansion should be considered if demand is projected to grow, but process improvement could first increase effective capacity toward design capacity. Healthcare capacity planning must also consider surge capacity for emergencies and seasonal demand variations.',
    criticalJudgement: [
      'Very high occupancy (above 85-90%) in healthcare may reduce service quality and increase wait times',
      'Capacity expansion is expensive and slow; efficiency improvements may be faster to implement',
      'Effective capacity should be periodically reviewed as processes improve',
      'Quality of care must not be compromised in pursuit of higher efficiency metrics',
    ],
  },
  {
    id: 'om-queue-bank',
    title: 'Bank Queue Analysis',
    source: 'Constructed study case based on OM module themes',
    scenario: 'A bank branch receives an average of 60 customers per hour. Customers spend an average of 4 minutes waiting in the queue before being served. Management wants to understand queue dynamics.',
    questionText: 'Use Little\'s Law to calculate the average number of customers waiting in the queue. What does this mean for lobby space requirements?',
    marks: 10,
    keyIssues: [
      'Understanding queuing dynamics',
      'Applying Little\'s Law',
      'Service design implications',
      'Capacity planning for waiting areas',
    ],
    relevantFormulas: ['littles-law-queue'],
    relevantUnits: ['om-6'],
    topic: 'Queuing theory and service operations',
    questionType: 'Calculation with service design implications',
    steps: [
      'Step 1: Identify arrival rate (λ): 60 customers per hour',
      'Step 2: Convert to consistent units: λ = 60/hour or 1 customer/minute',
      'Step 3: Identify waiting time (Wq): 4 minutes',
      'Step 4: Apply Little\'s Law: Lq = λ × Wq',
      'Step 5: Calculate: Lq = 60 customers/hour × (4/60) hours = 4 customers',
      'Step 6: Alternative: Lq = 1 customer/minute × 4 minutes = 4 customers',
      'Step 7: Interpret: Average 4 customers waiting in queue at any time',
      'Step 8: Design implication: Lobby should accommodate more than 4 seats for peak periods',
      'Step 9: Consider variability: peak times may have longer queues',
      'Step 10: Recommend service improvements to reduce waiting time',
    ],
    examParagraph: 'Using Little\'s Law (Lq = λ × Wq), the average queue length is 4 customers (60 customers/hour × 4 minutes waiting time, or 1 customer/minute × 4 minutes). This means the bank should plan lobby seating for at least 4-6 customers, plus additional space for peak demand variations. To improve service, the bank could reduce waiting time by increasing teller capacity during peak hours or implementing self-service options. Reducing average waiting time from 4 minutes to 2 minutes would halve the average queue length to 2 customers.',
    criticalJudgement: [
      'Little\'s Law assumes a stable system; peak periods will show different results',
      'Average queue length does not capture maximum queue length experienced',
      'Customer perception of wait time matters more than actual wait time for satisfaction',
      'Technology solutions (mobile queuing, appointment scheduling) can reduce perceived waiting',
    ],
  },
  {
    id: 'om-forecast-demand',
    title: 'Demand Forecasting for Retail',
    source: 'Constructed study case based on OM module themes',
    scenario: 'A retail chain needs to forecast demand for a product line. Historical data shows the following actual and forecast values over 4 periods: Period 1: Actual 100, Forecast 95; Period 2: Actual 110, Forecast 108; Period 3: Actual 105, Forecast 115; Period 4: Actual 120, Forecast 112.',
    questionText: 'Calculate MAD to evaluate forecast accuracy. Is the current forecasting method acceptable?',
    marks: 15,
    keyIssues: [
      'Evaluating forecast accuracy',
      'Understanding MAD interpretation',
      'Improving forecasting methods',
      'Linking forecast quality to inventory decisions',
    ],
    relevantFormulas: ['mad'],
    relevantUnits: ['om-4', 'om-10'],
    topic: 'Forecast accuracy evaluation',
    questionType: 'MAD calculation with evaluation',
    steps: [
      'Step 1: List actual and forecast values for each period',
      'Step 2: Period 1: |100 - 95| = 5',
      'Step 3: Period 2: |110 - 108| = 2',
      'Step 4: Period 3: |105 - 115| = 10',
      'Step 5: Period 4: |120 - 112| = 8',
      'Step 6: Sum absolute deviations: 5 + 2 + 10 + 8 = 25',
      'Step 7: Divide by number of periods: MAD = 25 ÷ 4 = 6.25',
      'Step 8: Interpret: Average forecast error is 6.25 units per period',
      'Step 9: Evaluate: MAD as percentage of average demand ≈ 6.25/108.75 = 5.7%',
      'Step 10: Recommend: MAD below 10% suggests acceptable accuracy, but could be improved',
    ],
    examParagraph: 'The MAD calculation shows an average forecast error of 6.25 units per period (sum of absolute deviations = 25, divided by 4 periods). As a percentage of average demand (approximately 109 units), this represents a 5.7% error rate, which is generally acceptable for retail operations. However, the largest error occurred in Period 3 where the forecast overshot actual demand by 10 units, potentially leading to excess inventory. The organisation should investigate the cause of this error (perhaps a promotion that didn\'t perform as expected) and consider whether a different forecasting method (such as weighted moving average) would be more appropriate.',
    criticalJudgement: [
      'MAD treats over-forecasts and under-forecasts equally; business impact may differ',
      'MAD alone does not indicate bias; a tracking signal would reveal systematic over/under forecasting',
      'Compare MAD against historical trends to assess whether accuracy is improving or declining',
      'Consider using additional metrics (MSE, MAPE) for a fuller picture of forecast quality',
    ],
  },
];

export function getOMCase(id: string): OMCase | undefined {
  return OM_CASES.find((c) => c.id === id);
}

export function getOMCasesByTopic(topic: string): OMCase[] {
  return OM_CASES.filter((c) => c.topic.toLowerCase().includes(topic.toLowerCase()));
}

export function getOMCasesByFormula(formulaId: string): OMCase[] {
  return OM_CASES.filter((c) => c.relevantFormulas.includes(formulaId));
}

export function getOMCasesByUnit(unitId: string): OMCase[] {
  return OM_CASES.filter((c) => c.relevantUnits.includes(unitId));
}
