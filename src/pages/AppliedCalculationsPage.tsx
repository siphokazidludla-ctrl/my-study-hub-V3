import { LinkCard, PageHeading, Card, Badge } from '../components/ui';
import { useModule } from './helpers';

export default function AppliedCalculationsPage() {
  const { id, module } = useModule();

  return (
    <div className="space-y-5">
      <PageHeading kicker={`${module.code} Applied Calculations`} title="APPLIED CALCULATIONS" sub="A separate study hub for units, formulas, cases, calculators and exam writing." />
      <Card title="What this page does" tone="white">
        <p>This page supplements the existing OM formula dashboard with a split study path: unit links, formula cards, calculator tools, case missions and exam answer support.</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge tone="gold">New study tab</Badge>
          <Badge tone="gold">Formula-to-unit linking</Badge>
          <Badge tone="gold">Case solving steps</Badge>
          <Badge tone="gold">Exam answer support</Badge>
        </div>
      </Card>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <LinkCard to={`/${id}/units`} eyebrow="Unit pages" title="Explore all OM units" text="Browse learning outcomes, key concepts and linked theories." tags={['Units']} />
        <LinkCard to={`/${id}/concepts`} eyebrow="Concept library" title="Open concept cards" text="See definitions, usage, related formulas and unit links." tags={['Concepts']} />
        <LinkCard to={`/${id}/formulas`} eyebrow="Formula library" title="Find formula cards" text="Explore formula meaning, examples, units and calculator links." tags={['Formulas']} />
        <LinkCard to={`/${id}/calculators`} eyebrow="Calculator hub" title="Use core OM calculators" text="Jump to EOQ, forecasting, productivity and capacity calculator support." tags={['Calculator']} />
        <LinkCard to={`/${id}/cases`} eyebrow="Past paper case lab" title="Practice with cases" text="Solve cases in guided mission mode step by step." tags={['Cases']} />
        <LinkCard to={`/${id}/exam-builder`} eyebrow="Answer builder" title="Build exam answers" text="Turn your analysis into a proper 10/20/40-mark structure." tags={['Writing']} />
        <LinkCard to={`/${id}/mistake-log`} eyebrow="Mistake log" title="Track weak areas" text="Save formulas and concepts you keep getting wrong." tags={['Revision']} />
        <LinkCard to={`/${id}/question-classifier`} eyebrow="Question classifier" title="Classify exam questions" text="Paste a question and get likely unit, concept and formula guidance." tags={['AI helper']} />
      </div>
      <Card title="How to use this hub" tone="gold">
        <ul className="list-disc space-y-2 pl-5 text-sm">
          <li>Start with the unit page for conceptual mapping.</li>
          <li>Use formula cards to connect calculators, examples and units.</li>
          <li>Open a case and follow the step-by-step mission flow.</li>
          <li>Save errors in the mistake log and review them before exams.</li>
        </ul>
      </Card>
    </div>
  );
}
