import { Link, useParams } from 'react-router-dom';
import { Card, PageHeading, Badge, BulletList, LinkCard } from '../components/ui';
import { useModule } from './helpers';
import { CASES } from '../data/cases';
import { THEORIES } from '../data/theories';

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
      'Classify the question as an inventory and forecasting problem in Unit 10 and Unit 4.',
      'Extract the case facts: stockouts, excess inventory, forecasting error and supplier coordination issues.',
      'Select the appropriate formulas: EOQ for order quantity, ROP for reorder point, and MAD for forecast accuracy.',
      'Apply the formulas to the extracted numbers and show the substitution clearly.',
      'Interpret the results in plain English to explain what they mean for stock control.',
      'Write an exam paragraph linking the calculation to the retailer’s service and cost objectives.',
      'Add critical judgement: EOQ assumes stable demand and may not suit volatile stock lines or seasonal sales.',
    ],
    examParagraph: 'The case is an inventory management problem linked to Unit 10. Using EOQ and ROP helps show how the retailer can order the right quantity at the right time, but the solution must include critical judgement on demand variability and supplier reliability.',
    criticalJudgement: [
      'EOQ assumes constant demand and may not reflect seasonal or promotional sales.',
      'ROP requires a reliable lead time; supplier delays reduce its usefulness.',
      'Safety stock improves service but increases holding cost, so the trade-off must be explained.',
    ],
  },
};

export default function CaseDetailPage() {
  const { id } = useModule();
  const { caseId } = useParams();
  const c = CASES.find((item) => item.id === caseId);
  const guide = caseId ? CASE_GUIDES[caseId] : undefined;

  if (!c) {
    return <Card title="Case not found">No matching case was found.</Card>;
  }

  return (
    <div className="space-y-5">
      <PageHeading kicker="Case Lab" title={c.title} sub={c.scenario} />
      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <section className="space-y-4">
          <Card title="Case summary">
            <p>{c.scenario}</p>
            <p className="text-xs text-slate-500">Source: {c.source}</p>
          </Card>
          <Card title="Case classification" tone="white">
            <div className="space-y-3">
              <p className="font-semibold">Likely topic</p>
              <p>{guide?.topic ?? 'Needs verification'}</p>
              <p className="font-semibold">Question type</p>
              <p>{guide?.questionType ?? 'Needs verification'}</p>
              <p className="font-semibold">Relevant formulas</p>
              <div className="flex flex-wrap gap-2">{guide?.relevantFormulas.map((formula) => <Badge key={formula}>{formula}</Badge>)}</div>
            </div>
          </Card>
          <Card title="Guided mission steps">
            <BulletList items={guide?.steps ?? ['Step details are being prepared.']} />
          </Card>
          <Card title="Exam paragraph" tone="gold">
            <p>{guide?.examParagraph ?? 'No model paragraph is available yet.'}</p>
          </Card>
          <Card title="Critical judgement">
            <BulletList items={guide?.criticalJudgement ?? ['Needs verification with the source case.']} />
          </Card>
        </section>

        <aside className="space-y-4">
          <Card title="Case details" tone="white">
            <div className="space-y-3">
              <p className="font-semibold">Key issues</p>
              <BulletList items={c.keyIssues} />
              <p className="font-semibold">Relevant theories</p>
              <div className="grid gap-2">
                {c.relevantTheoryIds.map((tid) => {
                  const theory = THEORIES.find((t) => t.id === tid);
                  return theory ? (
                    <LinkCard key={tid} to={`/${id}/concepts/${tid}`} eyebrow={theory.category} title={theory.name} text={theory.plain} />
                  ) : null;
                })}
              </div>
            </div>
          </Card>
          <Card title="Quick actions" tone="gold">
            <LinkCard to={`/${id}/exam-builder`} eyebrow="Answer builder" title="Build your exam paragraphs" text="Use the case outcome in a structured answer." />
            <LinkCard to={`/${id}/question-classifier`} eyebrow="Question classifier" title="Classify this type of case" text="Try past paper style question analysis." />
          </Card>
        </aside>
      </div>
      <Link className="font-bold text-[#3B1D6E]" to={`/${id}/cases`}>← Back to case lab</Link>
    </div>
  );
}
