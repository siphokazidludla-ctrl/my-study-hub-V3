import { Link, useParams } from 'react-router-dom';
import { Card, PageHeading, Badge, BulletList, LinkCard } from '../components/ui';
import { useModule } from './helpers';
import { CASES } from '../data/cases';
import { THEORIES } from '../data/theorie';
import { getOMCase, OMCase } from '../data/modules/om';

const CASE_GUIDES: Record<string, {
  topic: string;
  questionType: string;
  relevantFormulas: string[];
  relevantUnits: string[];
  steps: string[];
  examParagraph: string;
  criticalJudgement: string[];
}> = {
  'om-stockouts': {
    topic: 'Inventory management and forecasting',
    questionType: 'Stockout, EOQ, ROP and safety stock',
    relevantFormulas: ['EOQ', 'ROP', 'MAD', 'Weighted moving average'],
    relevantUnits: ['om-4', 'om-10'],
    steps: [
      'Step 1: Classify the question as an inventory and forecasting problem (Units 4 and 10)',
      'Step 2: Extract case facts: stockouts on fast-movers, excess on slow-movers, delivery delays',
      'Step 3: Calculate forecast error (MAD) if actual vs forecast data available',
      'Step 4: Review ABC classification - are high-value items getting attention?',
      'Step 5: Calculate EOQ for key SKUs to find optimal order quantities',
      'Step 6: Calculate ROP with safety stock based on demand variability',
      'Step 7: Assess supplier lead time reliability',
      'Step 8: Recommend improvements to forecasting and inventory policy',
      'Step 9: Build exam paragraph linking calculations to business outcomes',
      'Step 10: Add critical judgement on model limitations',
    ],
    examParagraph: 'The case is an inventory management problem linked to Units 4 and 10. Using EOQ and ROP helps show how the retailer can order the right quantity at the right time, but the solution must include critical judgement on demand variability and supplier reliability.',
    criticalJudgement: [
      'EOQ assumes constant demand and may not reflect seasonal or promotional sales.',
      'ROP requires a reliable lead time; supplier delays reduce its usefulness.',
      'Safety stock improves service but increases holding cost, so the trade-off must be explained.',
    ],
  },
  'om-eoq-apricot': {
    topic: 'EOQ calculation and inventory cost analysis',
    questionType: 'Calculation with interpretation',
    relevantFormulas: ['EOQ', 'Total inventory cost', 'Annual holding cost', 'Annual ordering cost'],
    relevantUnits: ['om-10'],
    steps: [
      'Step 1: Identify the problem type - EOQ calculation for inventory optimisation',
      'Step 2: Extract given values: D = 24,000 kg/year, S = R150/order, H = R4/kg/year',
      'Step 3: Apply the EOQ formula: EOQ = sqrt((2 x D x S) / H)',
      'Step 4: Substitute: EOQ = sqrt((2 x 24,000 x 150) / 4) = sqrt(1,800,000) = 1,342 kg',
      'Step 5: Calculate number of orders per year: N = 24,000 / 1,342 = 18 orders',
      'Step 6: Calculate annual ordering cost: 18 x R150 = R2,700',
      'Step 7: Calculate annual holding cost: (1,342/2) x R4 = R2,684',
      'Step 8: Calculate total annual cost: R2,700 + R2,684 = R5,384',
      'Step 9: Write interpretation linking to business context',
      'Step 10: Discuss limitations and assumptions',
    ],
    examParagraph: 'The EOQ calculation yields an optimal order quantity of approximately 1,342 kg per order. At this quantity, the company places about 18 orders per year, with total annual inventory cost of approximately R5,384. Ordering cost equals holding cost at EOQ, confirming optimality.',
    criticalJudgement: [
      'EOQ assumes stable demand; seasonal apricot supply may invalidate this assumption',
      'The model assumes instant replenishment; supplier lead time must be considered',
      'Quality variations and price fluctuations for agricultural products affect calculations',
    ],
  },
  'om-productivity-manufacturing': {
    topic: 'Productivity measurement and improvement',
    questionType: 'Calculation with gap analysis',
    relevantFormulas: ['Productivity'],
    relevantUnits: ['om-1', 'om-6'],
    steps: [
      'Step 1: Identify the problem type - productivity calculation and improvement',
      'Step 2: Extract given data: Output = 500 units/day, Workers = 50, Hours = 8',
      'Step 3: Calculate total labour hours: 50 x 8 = 400 labour hours',
      'Step 4: Calculate current productivity: 500 / 400 = 1.25 units/labour hour',
      'Step 5: Compare with target: 1.5 - 1.25 = 0.25 units/labour hour gap',
      'Step 6: Calculate percentage improvement needed: (0.25 / 1.25) x 100 = 20%',
      'Step 7: Recommend improvement strategies: training, process improvement, technology',
      'Step 8: Discuss factors affecting productivity',
    ],
    examParagraph: 'Current labour productivity is 1.25 units per labour hour. To achieve the target of 1.5 units, a 20% improvement is required. This can be pursued through process improvements, workforce development, and technology investment.',
    criticalJudgement: [
      'Labour productivity alone may be misleading; capital investment affects apparent productivity',
      'Quality improvements may initially reduce productivity',
      'Benchmark comparisons must account for product complexity and automation',
    ],
  },
  'om-capacity-hospital': {
    topic: 'Capacity planning and analysis',
    questionType: 'Capacity calculation with strategic recommendations',
    relevantFormulas: ['Utilisation', 'Efficiency'],
    relevantUnits: ['om-6'],
    steps: [
      'Step 1: Identify design capacity: 200 beds',
      'Step 2: Identify effective capacity: 180 beds',
      'Step 3: Identify actual output: 160 patients average',
      'Step 4: Calculate utilisation: (160 / 200) x 100 = 80%',
      'Step 5: Calculate efficiency: (160 / 180) x 100 = 88.9%',
      'Step 6: Compare and interpret utilisation vs efficiency',
      'Step 7: Analyse capacity gaps and improvement opportunities',
      'Step 8: Discuss healthcare-specific considerations',
    ],
    examParagraph: 'The hospital operates at 80% utilisation and 88.9% efficiency. The gap between utilisation and efficiency indicates realistic constraints reduce available capacity. High efficiency suggests the hospital is running close to realistic limits.',
    criticalJudgement: [
      'Very high healthcare occupancy may reduce service quality',
      'Capacity expansion is expensive; efficiency improvements may be faster',
      'Quality of care must not be compromised for efficiency metrics',
    ],
  },
  'om-queue-bank': {
    topic: 'Queuing theory and service operations',
    questionType: "Little's Law calculation",
    relevantFormulas: ["Little's Law"],
    relevantUnits: ['om-6'],
    steps: [
      "Step 1: Identify arrival rate: 60 customers per hour = 1 customer/minute",
      'Step 2: Identify waiting time (Wq): 4 minutes',
      "Step 3: Apply Little's Law: Lq = rate x Wq",
      'Step 4: Calculate: 1 customer/minute x 4 minutes = 4 customers',
      'Step 5: Interpret average queue length',
      'Step 6: Design implications for lobby space',
      'Step 7: Recommend service improvements',
    ],
    examParagraph: "Using Little's Law, the average queue length is 4 customers. The bank should plan lobby seating for at least 4-6 customers, plus additional space for peak demand variations.",
    criticalJudgement: [
      "Little's Law assumes a stable system; peak periods show different results",
      'Average queue length does not capture maximum queue length',
      'Customer perception of wait time affects satisfaction more than actual wait',
    ],
  },
  'om-forecast-demand': {
    topic: 'Forecast accuracy evaluation',
    questionType: 'MAD calculation with interpretation',
    relevantFormulas: ['MAD'],
    relevantUnits: ['om-4'],
    steps: [
      'Step 1: List actual and forecast values for each period',
      'Step 2: Calculate absolute deviations for each period',
      'Step 3: Period 1: |100 - 95| = 5, Period 2: |110 - 108| = 2',
      'Step 4: Period 3: |105 - 115| = 10, Period 4: |120 - 112| = 8',
      'Step 5: Sum absolute deviations: 5 + 2 + 10 + 8 = 25',
      'Step 6: Divide by n: MAD = 25 / 4 = 6.25',
      'Step 7: Interpret forecast accuracy',
      'Step 8: Evaluate acceptability and recommend improvements',
    ],
    examParagraph: 'MAD of 6.25 units represents a 5.7% error rate, which is generally acceptable for retail operations. However, the Period 3 error suggests investigating the cause and considering alternative forecasting methods.',
    criticalJudgement: [
      'MAD treats over and under forecasts equally; business impact may differ',
      'MAD alone does not indicate bias; tracking signal would reveal systematic errors',
      'Compare MAD against historical trends to assess improvement',
    ],
  },
};

export default function CaseDetailPage() {
  const { id } = useModule();
  const { caseId } = useParams();
  const c = CASES.find((item) => item.id === caseId);
  const omCase = caseId ? getOMCase(caseId) : undefined;
  const guide = caseId ? CASE_GUIDES[caseId] : undefined;

  const displayCase = omCase || c;

  if (!displayCase) {
    return <Card title="Case not found">No matching case was found.</Card>;
  }

  const scenario = 'scenario' in displayCase ? displayCase.scenario : '';
  const title = displayCase.title;
  const source = displayCase.source;
  const keyIssues = displayCase.keyIssues;

  const relevantTheories = 'relevantTheoryIds' in displayCase
    ? displayCase.relevantTheoryIds.map((tid) => THEORIES.find((t) => t.id === tid)).filter(Boolean)
    : [];

  return (
    <div className="space-y-5">
      <PageHeading kicker="Case Lab" title={title} sub={scenario} />

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <section className="space-y-4">
          <Card title="Case summary">
            <p>{scenario}</p>
            <p className="text-xs text-slate-500 mt-2">Source: {source}</p>
            {omCase && 'year' in omCase && omCase.year && (
              <p className="text-xs text-slate-500">{omCase.year}</p>
            )}
            {omCase && 'marks' in omCase && omCase.marks && (
              <div className="mt-2"><Badge tone="gold">{omCase.marks} marks</Badge></div>
            )}
          </Card>

          <Card title="Case classification" tone="white">
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-slate-700">Likely topic</p>
                <p className="text-slate-600">{(guide || omCase) ? (guide?.topic || omCase?.topic) : 'Needs verification'}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Question type</p>
                <p className="text-slate-600">{(guide || omCase) ? (guide?.questionType || omCase?.questionType) : 'Needs verification'}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Relevant formulas</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {(guide?.relevantFormulas || omCase?.relevantFormulas || [])?.map((formula) => (
                    <Badge key={formula}>{formula}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Relevant units</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {(guide?.relevantUnits || omCase?.relevantUnits || [])?.map((uid) => (
                    <Link key={uid} to={`/${id}/units/${uid}`} className="text-sm text-[#3B1D6E] hover:underline">
                      {uid}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <Card title="Guided solution steps">
            <ol className="list-decimal space-y-3 pl-5">
              {(guide?.steps || omCase?.steps || ['Step details are being prepared.']).map((step, i) => (
                <li key={i} className="text-slate-700">{step}</li>
              ))}
            </ol>
          </Card>

          <Card title="Exam paragraph" tone="gold">
            <p className="text-slate-700">{guide?.examParagraph || omCase?.examParagraph || 'No model paragraph is available yet.'}</p>
          </Card>

          <Card title="Critical judgement">
            <BulletList items={guide?.criticalJudgement || omCase?.criticalJudgement || ['Needs verification with the source case.']} />
          </Card>
        </section>

        <aside className="space-y-4">
          <Card title="Case details" tone="white">
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-slate-700">Key issues</p>
                <BulletList items={keyIssues} />
              </div>
              {omCase && 'questionText' in omCase && omCase.questionText && (
                <div>
                  <p className="font-semibold text-slate-700">Question</p>
                  <p className="text-slate-600 text-sm">{omCase.questionText}</p>
                </div>
              )}
              {relevantTheories.length > 0 && (
                <div>
                  <p className="font-semibold text-slate-700">Relevant theories</p>
                  <div className="grid gap-2 mt-2">
                    {relevantTheories.map((theory) => theory && (
                      <LinkCard
                        key={theory.id}
                        to={`/${id}/concepts/${theory.id}`}
                        eyebrow={theory.category}
                        title={theory.name}
                        text={theory.plain}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>

          <Card title="Quick actions" tone="gold">
            <div className="space-y-2">
              <Link
                to={`/${id}/exam-builder`}
                className="block rounded-lg border border-[#3B1D6E] p-3 hover:bg-slate-50"
              >
                <p className="font-semibold text-[#3B1D6E]">Build exam answer</p>
                <p className="text-sm text-slate-600">Use case analysis in structured answer</p>
              </Link>
              {id === 'om' && (
                <Link
                  to={`/${id}/question-classifier`}
                  className="block rounded-lg border border-slate-300 p-3 hover:bg-slate-50"
                >
                  <p className="font-semibold text-slate-700">Classify question</p>
                  <p className="text-sm text-slate-600">Analyse similar past paper questions</p>
                </Link>
              )}
              {id === 'om' && (guide?.relevantFormulas?.[0] || omCase?.relevantFormulas?.[0]) && (
                <Link
                  to={`/${id}/applied-calculations/${(guide?.relevantFormulas?.[0] || omCase?.relevantFormulas?.[0] || '').toLowerCase().replace(/\s+/g, '-')}`}
                  className="block rounded-lg border border-slate-300 p-3 hover:bg-slate-50"
                >
                  <p className="font-semibold text-slate-700">View worked example</p>
                  <p className="text-sm text-slate-600">Step-by-step calculation guide</p>
                </Link>
              )}
            </div>
          </Card>

          {id === 'om' && (guide?.relevantFormulas || omCase?.relevantFormulas) && (
            <Card title="Related calculators">
              <div className="space-y-2">
                {(guide?.relevantFormulas || omCase?.relevantFormulas || []).slice(0, 4).map((formula) => (
                  <Link
                    key={formula}
                    to={`/${id}/calculators/${formula.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block rounded-lg bg-slate-50 p-2 text-sm text-[#3B1D6E] hover:bg-slate-100"
                  >
                    {formula} calculator
                  </Link>
                ))}
              </div>
            </Card>
          )}
        </aside>
      </div>

      <Link className="font-bold text-[#3B1D6E]" to={`/${id}/cases`}>Back to case lab</Link>
    </div>
  );
}
