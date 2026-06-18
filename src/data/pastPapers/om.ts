// src/data/pastPapers/om.ts
// OM Past Paper Intelligence. Derived from the uploaded scanned OM exam set
// (3 distinct papers). Mapped to the MANCOSA OM Module Guide (2026) units 1-12.
// Calculation methods follow Heizer, Render and Munson (2020) and Slack, Jones
// and Burgess (2022). The OM dashboard is a command centre, not a calculator:
// worked numerical answers below show method, not just an answer key.
//
// Source status (all papers): Verbatim copies of the uploaded MANCOSA OM past
// papers (scanned images). Question wording transcribed from those images.

import type { PastPaper } from '../../types/pastPapers';

export const OM_PAST_PAPERS: PastPaper[] = [
  {
    id: 'om-paper-1',
    module: 'om',
    title: 'Port Congestion Bogs Down South Africa\u2019s Economy (Transnet)',
    paperRef: 'Section A (Transnet/Woolworths) + Section B (calculations)',
    totalMarks: 100,
    saContext: true,
    frequency: 'High',
    sourceStatus: 'Uploaded MANCOSA OM past paper (Bloomberg-sourced SA case). Transcribed from scan.',
    caseSummary:
      'A news case describes severe congestion at South African ports (Durban, Richards Bay, Cape Town, Gqeberha) caused by under-investment and ageing equipment, imposing direct daily costs and disrupting retailers such as Woolworths, while Transnet undertakes interventions to recover.',
    keyFacts: [
      'Around 100 vessels delayed; six-day berth delays in Durban (SA context).',
      'Congestion costs stated at ~R98 million per day with surcharges.',
      'Transnet cites years of under-investment; recovery estimated 12 to 18 months.',
    ],
    keyProblem: 'A supply-chain and capacity failure that degrades cost, speed, dependability and service for SA businesses.',
    questions: [
      {
        id: 'om-p1-q1', number: 'Question 1.1', section: 'A', marks: 20,
        commandWords: ['Analyse', 'Propose'],
        prompt: 'Analyse the potential impacts of the port issues on retailers like Woolworths, and propose mitigation strategies with examples.',
        unitIds: ['om-9', 'om-2'], theoryIds: ['om-supply-chain', 'om-operations-strategy'],
        answerPlan: [
          'Analyse impacts on Woolworths: stockouts, late delivery, higher landed cost, working-capital tied in delayed inventory, reputational/service damage.',
          'Link to operations performance objectives (dependability, speed, cost) (Slack, Jones and Burgess, 2022).',
          'Propose mitigations: supplier diversification, safety stock on critical SKUs, alternative ports/modes, nearshoring/local sourcing, collaborative forecasting, buffer lead times.',
          'Support each with a concrete example.',
        ],
        markingLogic: [
          'Impacts analysed (not just listed): ~8.',
          'Linked to operations objectives: ~3.',
          'Realistic mitigations with examples: ~8.',
          'Coherence/judgement: ~1.',
        ],
        commonMistakes: ['Listing problems with no analysis of consequence.', 'Generic "improve supply chain" with no specific strategy or example.'],
        paragraphStructure: 'Impacts (analyse) > link to objectives > mitigations + examples.',
      },
      {
        id: 'om-p1-q2', number: 'Question 1.2', section: 'A', marks: 20,
        commandWords: ['Demonstrate'],
        prompt: 'As an operations practitioner, demonstrate the measures and strategies you would present to improve Transnet\u2019s operations capabilities.',
        unitIds: ['om-6', 'om-9', 'om-2'], theoryIds: ['om-capacity', 'om-supply-chain', 'om-operations-strategy'],
        answerPlan: [
          'Diagnose the capability gap (capacity, maintenance, equipment).',
          'Capacity strategies: equipment renewal/maintenance regime, capacity expansion, debottlenecking berths.',
          'Process strategies: scheduling, throughput improvement, lean/TQM for reliability.',
          'Supply-chain strategies: collaboration with carriers, performance KPIs, private-sector partnership.',
        ],
        markingLogic: ['Diagnosis: ~3.', 'Capacity measures: ~6.', 'Process/quality measures: ~6.', 'Supply-chain/partnership measures: ~5.'],
        commonMistakes: ['Jumping to solutions without diagnosing the capability gap.'],
        paragraphStructure: 'Diagnose > capacity > process/quality > supply-chain measures.',
      },
      {
        id: 'om-p1-q3', number: 'Question 2', section: 'B', marks: 20,
        commandWords: ['Report on'],
        prompt: 'Nestl\u00e9 is choosing between Lesotho and Eswatini for a Southern African plant. Report on the location factors to consider.',
        unitIds: ['om-7'], theoryIds: ['om-location'],
        answerPlan: [
          'Location decision factors (Heizer, Render and Munson, 2020): labour cost/availability, proximity to markets and suppliers/raw materials, infrastructure/utilities, transport/logistics, exchange rate/tariffs, political stability, regulation/taxation.',
          'Apply each factor to the Lesotho vs Eswatini choice.',
          'Note method (factor-rating) as a structured way to decide.',
        ],
        markingLogic: ['Relevant factors (min. six): ~12.', 'Applied to the two countries: ~6.', 'Structured method noted: ~2.'],
        commonMistakes: ['Generic factor list with no application to the two options.'],
        paragraphStructure: 'Factors > applied to each country > factor-rating method.',
      },
      {
        id: 'om-p1-q4', number: 'Question 3 (3.1, 3.2)', section: 'B', marks: 20,
        commandWords: ['Determine', 'Calculate'],
        prompt: '3.1 Coca-Cola grapetiser: workers needed per shift, single-worker productivity, multifactor productivity (14). 3.2 Coke Zero gallons and spend (6).',
        unitIds: ['om-1'], theoryIds: ['om-productivity'],
        workedSolution:
`**Method (productivity).** Productivity = output \u00f7 input; multifactor productivity = output \u00f7 (labour + material + capital) (Heizer, Render and Munson, 2020). Show the method, then substitute the case figures.

**3.1 Grapetiser.**
- *Workers per shift.* Demand = 100,000 litres/month; 20 working days \u00d7 3 shifts = 60 shifts/month, so output per shift = 100,000 \u00f7 60 \u2248 1,666.7 litres/shift. Each worker produces 10 litres/hour \u00d7 8 hours = 80 litres/shift. Workers needed = 1,666.7 \u00f7 80 \u2248 **21 workers per shift**.
- *Single-worker (labour) productivity.* With 100 workers per shift each making 80 litres: output = 8,000 litres/shift; labour hours = 100 \u00d7 8 = 800; labour productivity = 8,000 \u00f7 800 = **10 litres per labour-hour** (i.e. each worker\u2019s 10 litres/hour).
- *Multifactor productivity.* Use one shift of 8,000 litres. Labour cost = 800 hours \u00d7 R10 = R8,000; material = 8,000 litres \u00d7 R10 = R80,000; capital = R100,000. MFP = 8,000 litres \u00f7 (8,000 + 80,000 + 100,000) = 8,000 \u00f7 188,000 \u2248 **0.0426 litres per Rand**.

*(Show the formula and substitution for full method marks; if the paper intends a different period for capital, state your assumption explicitly.)*

**3.2 Coke Zero.** Labour productivity = 5 gallons per 4,000 hours; with 100,000 labour hours available: gallons = (5 \u00f7 4,000) \u00d7 100,000 = **125 gallons** for the quarter. If multifactor productivity = 1 gallon per R25,000, then spend to produce 125 gallons = 125 \u00d7 R25,000 = **R3,125,000**.`,
        answerPlan: [
          'State the productivity formulas before substituting.',
          'Compute workers/shift, labour productivity, multifactor productivity for grapetiser.',
          'Compute Coke Zero gallons and required spend.',
          'State any assumption (e.g. capital period) explicitly.',
        ],
        markingLogic: ['Correct formulas shown: ~3.', 'Workers/shift correct with working: ~4.', 'Labour + multifactor productivity: ~5.', 'Coke Zero gallons + spend: ~2.'],
        commonMistakes: ['Writing only the final number with no method.', 'Mixing units (litres vs gallons).', 'Not stating assumptions where the question is ambiguous.'],
        paragraphStructure: 'Formula > substitution > answer + units (repeat per part).',
      },
      {
        id: 'om-p1-q5', number: 'Question 4', section: 'B', marks: 20,
        commandWords: ['Determine', 'Calculate'],
        prompt: 'Using trend projection, determine the forecasts for Jan-Apr 2024 from 2023 monthly sales (Ezemvelo Muskers).',
        unitIds: ['om-4'], theoryIds: ['om-forecasting'],
        answerPlan: [
          'Use linear trend y = a + bx with x = 1..12 for 2023 (Heizer, Render and Munson, 2020).',
          'Compute b = (\u03a3xy \u2212 n\u00b7x\u0304\u00b7\u0233) \u00f7 (\u03a3x\u00b2 \u2212 n\u00b7x\u0304\u00b2) and a = \u0233 \u2212 b\u00b7x\u0304.',
          'Project x = 13,14,15,16 for Jan-Apr 2024.',
          'Show the table of x, y, xy, x\u00b2 and the substitution.',
        ],
        markingLogic: ['Trend method set up (table): ~6.', 'a and b computed: ~6.', 'Four forecasts (x=13..16): ~6.', 'Units/interpretation: ~2.'],
        commonMistakes: ['Using a moving average when trend projection is required.', 'Restarting x for 2024 instead of continuing 13-16.'],
        paragraphStructure: 'Set up table > compute b then a > project four months.',
      },
      {
        id: 'om-p1-q6', number: 'Question 5 (5.1, 5.2)', section: 'B', marks: 20,
        commandWords: ['Determine', 'Calculate'],
        prompt: '5.1 Moses Mabhida conference centre efficiency and utilisation (4). 5.2 Checkers OMO EOQ, order frequency, holding+setup cost, and recomputation at lower order cost (16).',
        unitIds: ['om-6', 'om-10'], theoryIds: ['om-capacity', 'om-inventory'],
        workedSolution:
`**5.1 Efficiency and utilisation (Heizer, Render and Munson, 2020).**
- Design capacity = 1,500; effective capacity = 1,300; actual output = 1,080.
- *Utilisation* = actual \u00f7 design = 1,080 \u00f7 1,500 = **72%**.
- *Efficiency* = actual \u00f7 effective = 1,080 \u00f7 1,300 \u2248 **83.1%**.

**5.2 EOQ (Checkers OMO).** EOQ = \u221a(2DS \u00f7 H), where D = annual demand, S = order cost, H = holding cost per unit per year = I \u00d7 unit cost (Heizer, Render and Munson, 2020).
- D = 175 \u00d7 12 = 2,100 units/year; unit cost = R2.50; I = 27% so H = 0.27 \u00d7 2.50 = R0.675; S = R12.00.
- (a) EOQ = \u221a((2 \u00d7 2,100 \u00d7 12) \u00f7 0.675) = \u221a(50,400 \u00f7 0.675) = \u221a74,667 \u2248 **273 units**.
- (b) Order frequency = D \u00f7 EOQ = 2,100 \u00f7 273 \u2248 **7.7 orders/year**.
- (c) Annual holding + setup cost = (EOQ/2)\u00d7H + (D/EOQ)\u00d7S = (136.7\u00d70.675) + (7.7\u00d712) \u2248 92.3 + 92.3 \u2248 **R184.6** (holding \u2248 setup at EOQ, as expected).
- With S cut to R4.00: (d) EOQ = \u221a((2 \u00d7 2,100 \u00d7 4) \u00f7 0.675) = \u221a(16,800 \u00f7 0.675) = \u221a24,889 \u2248 **158 units**; (e) frequency = 2,100 \u00f7 158 \u2248 **13.3 orders/year**; (f) holding + setup \u2248 (79\u00d70.675) + (13.3\u00d74) \u2248 53.3 + 53.2 \u2248 **R106.5**.
- *Interpretation:* automating ordering (lower S) reduces the EOQ and total cost, but increases order frequency \u2014 the classic EOQ trade-off (Heizer, Render and Munson, 2020).`,
        answerPlan: [
          'Utilisation = actual/design; efficiency = actual/effective.',
          'EOQ = \u221a(2DS/H); convert monthly demand to annual; H = I \u00d7 unit cost.',
          'Compute order frequency and total holding+setup, then recompute with the lower S.',
          'Interpret the trade-off (lower S lowers EOQ and cost, raises frequency).',
        ],
        markingLogic: ['5.1 utilisation + efficiency correct: ~4.', '5.2 EOQ + frequency + costs (first scenario): ~8.', '5.2 recomputed with lower S: ~6.', 'Interpretation: ~2.'],
        commonMistakes: ['Forgetting to annualise demand.', 'Using unit cost instead of I\u00d7unit cost for H.', 'No interpretation of the result.'],
        paragraphStructure: 'Formula > substitution > answer (repeat) > interpret trade-off.',
      },
    ],
  },

  {
    id: 'om-paper-2',
    module: 'om',
    title: 'The Foschini Retail Group (TFG): The Need for Speed',
    paperRef: 'Section A (TFG WMS, SA) + Section B (calculations)',
    totalMarks: 100,
    saContext: true,
    frequency: 'High',
    sourceStatus: 'Uploaded MANCOSA OM past paper (SA retail case). Transcribed from scan.',
    caseSummary:
      'The Foschini Retail Group, a leading South African fashion retailer, replaced an inflexible legacy system with a leading Warehouse Management System implemented with a local partner, cutting logistics lead times from 17 to 4.9 days and achieving high pick accuracy and delivery conformance.',
    keyFacts: [
      'TFG is a major SA retailer with six distribution centres (SA context).',
      'WMS cut DC lead times from 17 to 4.9 days; pick accuracy ~99.9%.',
      'Phased, template-based rollout across 14 trading formats.',
    ],
    keyProblem: 'Using process and supply-chain improvement to raise the five operations performance objectives.',
    questions: [
      {
        id: 'om-p2-q1', number: 'Question 1', section: 'A', marks: 20,
        commandWords: ['Appraise'],
        prompt: 'As a TFG employee, appraise the five basic performance objectives (cost, speed, dependability, flexibility, quality) in operations.',
        unitIds: ['om-1', 'om-2'], theoryIds: ['om-operations-strategy'],
        recommendedTheories: ['om-performance-objectives'],
        workedSolution:
`**Introduction.** Slack and colleagues define five basic performance objectives that every operation must manage: quality, speed, dependability, flexibility and cost (Slack, Jones and Burgess, 2022).

**The five objectives.** *Quality* means doing things right, producing error-free goods and services that meet specification; it builds customer confidence and reduces internal waste. *Speed* is the elapsed time between a customer request and its fulfilment; faster operations reduce inventory and respond to demand. *Dependability* is keeping delivery promises, which TFG demonstrates through high delivery conformance. *Flexibility* is the ability to change what, how much or how quickly the operation does things, vital for fashion\u2019s seasonal peaks. *Cost* is the objective most affected by the other four: better quality, speed, dependability and flexibility all lower cost (Slack, Jones and Burgess, 2022).

**Internal and external effects.** Each objective has an external (customer-facing) benefit and an internal (efficiency) benefit; for example, quality satisfies customers externally and reduces rework internally. This is why the objectives are interlinked rather than independent.

**Conclusion.** For a fashion retailer such as TFG, flexibility and speed are order-winners because of short product cycles, while quality and dependability are order-qualifiers, and all four converge on lower cost (Slack, Jones and Burgess, 2022).`,
        answerPlan: [
          'Name the five objectives (quality, speed, dependability, flexibility, cost).',
          'Define each with its internal and external benefit.',
          'Appraise their interlinkage (cost depends on the other four).',
          'Relate to TFG (fashion = flexibility/speed are order-winners).',
        ],
        markingLogic: ['Five objectives named: ~5.', 'Each defined with benefit: ~10.', 'Appraised interlinkage + TFG relevance: ~5.'],
        commonMistakes: ['Listing the five without appraising relationships.', 'No link to TFG\u2019s fashion context.'],
        paragraphStructure: 'Five objectives > define each > appraise links > TFG relevance.',
      },
      {
        id: 'om-p2-q2', number: 'Question 2', section: 'A', marks: 20,
        commandWords: ['Critically analyse'],
        prompt: 'Critically analyse how TFG used the five performance objectives to their advantage to improve operations.',
        unitIds: ['om-2', 'om-9'], theoryIds: ['om-operations-strategy', 'om-supply-chain'],
        recommendedTheories: ['om-performance-objectives'],
        answerPlan: [
          'Map case evidence to each objective: speed (17 to 4.9 days), dependability (delivery conformance +11.5%), quality (99.9% pick accuracy), flexibility (template rollout across formats), cost (10.1% logistics cost reduction).',
          'Critically assess: gains are real but depend on partner capability and phased execution; risks of dependency.',
          'Conclude on the strategic payoff.',
        ],
        markingLogic: ['Evidence mapped to each objective: ~12.', 'Critical assessment (not just description): ~6.', 'Conclusion: ~2.'],
        commonMistakes: ['Describing TFG without critique.', 'Ignoring the case\u2019s quantified evidence.'],
        paragraphStructure: 'Objective + case evidence (repeat) > critique > conclusion.',
      },
      {
        id: 'om-p2-q3', number: 'Question 3 (3.1-3.4)', section: 'B', marks: 20,
        commandWords: ['Calculate', 'Compute', 'Provide an evaluation'],
        prompt: 'Shoe leather: 3.1 EOQ (6), 3.2 orders/year (4), 3.3 total cost (4), 3.4 evaluate EOQ assumptions (6).',
        unitIds: ['om-10'], theoryIds: ['om-inventory'],
        workedSolution:
`**Given.** Monthly requirement 5,000 m \u2192 D = 60,000 m/year; unit cost = R150/m; H = 5% \u00d7 150 = R7.50/m/year; S = R70/order (Heizer, Render and Munson, 2020).

**3.1 EOQ** = \u221a(2DS/H) = \u221a((2 \u00d7 60,000 \u00d7 70) \u00f7 7.50) = \u221a(8,400,000 \u00f7 7.50) = \u221a1,120,000 \u2248 **1,058 metres**.

**3.2 Orders/year** = D \u00f7 EOQ = 60,000 \u00f7 1,058 \u2248 **56.7 orders/year**.

**3.3 Total cost** (ordering + holding, excluding purchase) = (D/EOQ)\u00d7S + (EOQ/2)\u00d7H = (56.7\u00d770) + (529\u00d77.50) \u2248 3,969 + 3,968 \u2248 **R7,937/year** (the two components are equal at EOQ, as expected).

**3.4 Evaluate the EOQ assumptions.** EOQ assumes constant/known demand, constant lead time, a fixed unit price (no quantity discounts), the entire order arriving at once, and only ordering and holding costs mattering (Heizer, Render and Munson, 2020). In reality demand and lead time vary, suppliers offer discounts, and stockout costs exist, so EOQ is a useful baseline rather than an exact optimum and should be adjusted with safety stock and discount models.`,
        answerPlan: [
          'Annualise demand; H = carrying % \u00d7 unit cost.',
          'EOQ = \u221a(2DS/H); orders/year = D/EOQ.',
          'Total (ordering + holding) cost at EOQ.',
          'Evaluate EOQ\u2019s simplifying assumptions and their real-world limits.',
        ],
        markingLogic: ['EOQ correct with working: ~6.', 'Orders/year: ~4.', 'Total cost: ~4.', 'Assumptions evaluated: ~6.'],
        commonMistakes: ['Using purchase price as H.', 'Forgetting to annualise.', 'Listing assumptions without evaluating them.'],
        paragraphStructure: 'Given > EOQ > orders > total cost > evaluate assumptions.',
      },
      {
        id: 'om-p2-q4', number: 'Question 4 (4.1, 4.2)', section: 'B', marks: 20,
        commandWords: ['Calculate'],
        prompt: '4.1 Three-month weighted moving averages and deviations (15). 4.2 Mean absolute deviation (MAD) (5).',
        unitIds: ['om-4'], theoryIds: ['om-forecasting'],
        answerPlan: [
          'State the weighted moving average formula and the chosen weights (state assumption if weights are not given).',
          'Compute the 3-month WMA for each forecastable month; compute deviation = actual \u2212 forecast.',
          'MAD = \u03a3|actual \u2212 forecast| \u00f7 n (Heizer, Render and Munson, 2020).',
          'Interpret the MAD as average forecast error.',
        ],
        markingLogic: ['WMA method + weights stated: ~4.', 'WMA values + deviations: ~11.', 'MAD computed: ~4.', 'Interpretation: ~1.'],
        commonMistakes: ['Not stating the weights used.', 'Forgetting to take absolute values in MAD.'],
        paragraphStructure: 'State weights > WMA per month + deviation > MAD > interpret.',
      },
      {
        id: 'om-p2-q5', number: 'Question 5', section: 'B', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'A French company (AVO) buys ostrich eggs from Oudtshoorn, SA. Discuss the relevancy of international purchasing problems for this transaction.',
        unitIds: ['om-9'], theoryIds: ['om-supply-chain'],
        answerPlan: [
          'International purchasing issues (Heizer, Render and Munson, 2020; Slack, Jones and Burgess, 2022): currency/exchange-rate risk, longer/uncertain lead times, customs/tariffs and export documentation, quality assurance at distance, cultural/communication differences, logistics and perishability.',
          'Apply to country of origin (SA exporter) and destination (France importer).',
          'Recommend mitigations (contracts, Incoterms, quality agreements).',
        ],
        markingLogic: ['International purchasing issues identified: ~10.', 'Applied to SA-France transaction (incl. perishable goods): ~8.', 'Mitigations: ~2.'],
        commonMistakes: ['Ignoring perishability/logistics of a fresh export product.', 'No country-of-origin vs destination distinction.'],
        paragraphStructure: 'Issues > apply to SA-France > mitigations.',
      },
      {
        id: 'om-p2-q6', number: 'Question 6', section: 'B', marks: 20,
        commandWords: ['Critically evaluate'],
        prompt: 'Using an appropriate diagram, critically evaluate the different relationships (the four Vs) within an organisation of choice, including interrelationships and operational challenges.',
        unitIds: ['om-1', 'om-6'], theoryIds: ['om-process-strategy'],
        recommendedTheories: ['om-four-vs'],
        answerPlan: [
          'Introduce the four Vs of operations: volume, variety, variation, visibility (Slack, Jones and Burgess, 2022).',
          'Describe a chosen organisation and position it on each V (a simple diagram/spectrum).',
          'Evaluate the cost and design implications of its V-profile and the operational challenges.',
        ],
        markingLogic: ['Four Vs explained + diagram: ~8.', 'Applied to a chosen organisation: ~8.', 'Critical evaluation of challenges: ~4.'],
        commonMistakes: ['Listing the four Vs without a diagram or application.', 'No critical evaluation.'],
        paragraphStructure: 'Four Vs + diagram > apply to organisation > evaluate challenges.',
      },
    ],
  },

  {
    id: 'om-paper-3',
    module: 'om',
    title: 'Could Apple\u2019s Next iPhones Be Made in the USA? (Foxconn)',
    paperRef: 'Section A (Apple/Foxconn relocation) + Section B (calculations)',
    totalMarks: 100,
    saContext: false,
    frequency: 'Medium',
    sourceStatus: 'Uploaded MANCOSA OM past paper (Apple/Foxconn relocation case). Transcribed from scan.',
    caseSummary:
      'A case examines whether Apple could relocate iPhone production to the USA, weighing higher labour and component costs, the absence of a clustered supplier base and scarce raw materials against political pressure, illustrating global location and comparative-advantage trade-offs.',
    keyFacts: [
      'Relocation could raise iPhone cost substantially (logistics + labour).',
      'Apple\u2019s supply chain spans 750+ firms in 20+ countries (clustering advantage).',
      'Scarce US raw materials and skills constrain relocation.',
    ],
    keyProblem: 'A global location and comparative-advantage decision affecting operational competitiveness.',
    questions: [
      {
        id: 'om-p3-q1', number: 'Question 1', section: 'A', marks: 40,
        commandWords: ['Apply', 'Conduct a detailed analysis'],
        prompt: 'Applying Porter\u2019s methods on comparative advantage, analyse how the decision to relocate will affect Apple\u2019s operational competitive advantage.',
        unitIds: ['om-2', 'om-7'], theoryIds: ['om-operations-strategy', 'om-location'],
        recommendedTheories: ['om-operations-strategy'],
        answerPlan: [
          'Define comparative advantage and Porter\u2019s view of national/locational competitive advantage (factor conditions, related and supporting industries/clusters, demand conditions, firm strategy/rivalry).',
          'Apply to Apple: loss of Asian supplier clusters, higher factor costs, scarce raw materials vs political/demand factors.',
          'Analyse the net effect on cost, speed and flexibility (operational competitive advantage).',
          'Reasoned conclusion: relocation likely erodes operational advantage absent a domestic cluster.',
        ],
        markingLogic: [
          'Comparative advantage / Porter framework explained: ~10.',
          'Applied to Apple with case evidence: ~16.',
          'Analysis of effect on operational competitiveness: ~10.',
          'Reasoned conclusion: ~4.',
        ],
        commonMistakes: ['Describing Porter generally without applying to Apple.', 'No reasoned conclusion for a 40-mark analysis.'],
        paragraphStructure: 'Define framework > apply to Apple (clusters/factors) > analyse net effect > conclude.',
      },
      {
        id: 'om-p3-q2', number: 'Question 2 (2.1-2.6)', section: 'B', marks: 20,
        commandWords: ['Calculate', 'Compute'],
        prompt: 'Shoe components: EOQ, orders/year, average annual ordering cost, average inventory, average annual carrying cost, total cost.',
        unitIds: ['om-10'], theoryIds: ['om-inventory'],
        answerPlan: [
          'D = 1,000 \u00d7 12 = 12,000 kits/year; unit cost R20; H = 15% \u00d7 20 = R3; S = R50.',
          'EOQ = \u221a(2DS/H); orders = D/EOQ; ordering cost = (D/EOQ)\u00d7S.',
          'Average inventory = EOQ/2; carrying cost = (EOQ/2)\u00d7H; total = ordering + carrying.',
          'Show every formula and substitution.',
        ],
        workedSolution:
`**Given.** D = 12,000 kits/year; H = 0.15 \u00d7 R20 = R3/kit/year; S = R50 (Heizer, Render and Munson, 2020).
- (2.1) EOQ = \u221a((2 \u00d7 12,000 \u00d7 50) \u00f7 3) = \u221a(1,200,000 \u00f7 3) = \u221a400,000 \u2248 **632 kits**.
- (2.2) Orders/year = 12,000 \u00f7 632 \u2248 **19 orders/year**.
- (2.3) Average annual ordering cost = 19 \u00d7 R50 = **R950**.
- (2.4) Average inventory = EOQ/2 = 632 \u00f7 2 = **316 kits**.
- (2.5) Average annual carrying cost = 316 \u00d7 R3 = **R948** (\u2248 ordering cost at EOQ).
- (2.6) Total cost (ordering + carrying) \u2248 950 + 948 = **R1,898/year**.`,
        markingLogic: ['EOQ: ~6.', 'Orders + ordering cost: ~7.', 'Average inventory + carrying cost: ~4.', 'Total cost: ~3.'],
        commonMistakes: ['Using unit cost as H.', 'Average inventory taken as EOQ rather than EOQ/2.'],
        paragraphStructure: 'Given > formula + substitution per part.',
      },
      {
        id: 'om-p3-q3', number: 'Question 3', section: 'B', marks: 20,
        commandWords: ['Provide a detailed analysis'],
        prompt: 'Choose a product and analyse the stages of the product life cycle (PLC).',
        unitIds: ['om-5'], theoryIds: ['om-design'],
        recommendedTheories: ['om-plc'],
        answerPlan: [
          'Four PLC stages: introduction, growth, maturity, decline.',
          'For a chosen product, describe sales/profit behaviour and operations focus at each stage (capacity, process, cost).',
          'Note operations implications (design vs efficiency emphasis).',
        ],
        markingLogic: ['Four stages explained: ~8.', 'Applied to a chosen product: ~8.', 'Operations implications: ~4.'],
        commonMistakes: ['Treating PLC as a marketing-only model with no operations link.'],
        paragraphStructure: 'Four stages > apply to product > operations implications.',
      },
      {
        id: 'om-p3-q4', number: 'Question 4 (4.1-4.3)', section: 'B', marks: 20,
        commandWords: ['Draw', 'Calculate', 'Identify'],
        prompt: '4.1 Activity-on-Node diagram (15). 4.2 Duration of all paths (3). 4.3 Critical path and its duration (2).',
        unitIds: ['om-6'], theoryIds: ['om-process-strategy'],
        recommendedTheories: ['om-project-management'],
        workedSolution:
`**Network (Activity-on-Node).** Activities and predecessors: A(-,10), B(-,23), C(-,16), D(A,14), E(B,15), F(C,E,13), G(D,15), H(F,9), I(G,H,4) (Heizer, Render and Munson, 2020).

**4.2 Path durations.**
- A\u2192D\u2192G\u2192I = 10+14+15+4 = **43**.
- B\u2192E\u2192F\u2192H\u2192I = 23+15+13+9+4 = **64**.
- C\u2192F\u2192H\u2192I = 16+13+9+4 = **42**.

**4.3 Critical path** = the longest path = **B\u2192E\u2192F\u2192H\u2192I, duration 64 days**. (Draw the AON with nodes for each activity; arrows show precedence. F has two predecessors, C and E; I has two predecessors, G and H.)`,
        answerPlan: [
          'Draw AON nodes with arrows for precedence (F after C and E; I after G and H).',
          'Enumerate every path and sum durations.',
          'The critical path is the longest; state its duration.',
        ],
        markingLogic: ['Correct AON diagram with precedence: ~15.', 'All path durations: ~3.', 'Critical path + duration: ~2.'],
        commonMistakes: ['Missing the convergent predecessors (F: C&E; I: G&H).', 'Choosing the shortest path as critical.'],
        paragraphStructure: 'Diagram > path durations > critical path.',
      },
      {
        id: 'om-p3-q5', number: 'Question 5', section: 'B', marks: 20,
        commandWords: ['Conduct an ABC analysis'],
        prompt: 'Conduct an ABC analysis on ten stock units by average demand (80% = A, 15% = B, 5% = C).',
        unitIds: ['om-10'], theoryIds: ['om-inventory'],
        answerPlan: [
          'Rank items by annual demand (value) descending.',
          'Compute each item\u2019s % of total and the cumulative %.',
          'Classify: top cumulative ~80% = A, next ~15% = B, last ~5% = C.',
          'State the control policy per class (tight control for A).',
        ],
        markingLogic: ['Ranked + % of total: ~8.', 'Cumulative % + classification: ~8.', 'Control policy per class: ~4.'],
        commonMistakes: ['Classifying by quantity count instead of demand value/share.', 'No control-policy implication.'],
        paragraphStructure: 'Rank > % and cumulative > classify A/B/C > control policy.',
      },
    ],
  },
];
