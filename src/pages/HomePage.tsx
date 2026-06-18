import { MODULES } from '../data';
import { LinkCard, PageHeading, Card, Badge } from '../components/ui';

export default function HomePage() {
  return <div className="space-y-5">
    <PageHeading kicker="Home / Exam Command Centre" title="MANCOSA PGDBM Exam Command Centre" sub="Your interactive study portal for units, concepts, formulas, cases, calculators, answer-building and exam practice." />

    <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
      <Card title="Quick exam hubs" tone="white">
        <div className="grid gap-3 md:grid-cols-2">
          <LinkCard to="/om/formula-library" eyebrow="Formula Library" title="Formula cards" text="Browse formula definitions, unit links, worked examples and calculator entry points." tags={['Formulas','OM']} />
          <LinkCard to="/om/concepts" eyebrow="Concept Library" title="Concept cards" text="Find key OM concepts, when to use them, related formulas and exam triggers." tags={['Concepts','OM']} />
          <LinkCard to="/om/cases" eyebrow="Past Paper Case Lab" title="Practice missions" text="Work through OM cases step-by-step with classification, calculation and exam writing support." tags={['Cases','OM']} />
          <LinkCard to="/om/calculators" eyebrow="Calculator Hub" title="Calculation tools" text="Open OM calculator workflows for EOQ, forecasting, capacity and productivity." tags={['Calculator','OM']} />
          <LinkCard to="/om/question-classifier" eyebrow="Question Classifier" title="Classify exam questions" text="Paste a case-style question and get unit, concept and formula guidance." tags={['AI helper','OM']} />
          <LinkCard to="/om/exam-builder" eyebrow="Answer Builder" title="Build exam paragraphs" text="Turn your analysis into a structured 10/20/40-mark answer." tags={['Writing','OM']} />
        </div>
      </Card>

      <Card title="Subjects" tone="white">
        <div className="grid gap-3">
          {MODULES.map((m)=><LinkCard key={m.id} to={`/${m.id}`} eyebrow={m.code} title={m.name} text={m.description} tags={['Units','Theories','Cases']} />)}
        </div>
      </Card>
    </div>

    <Card title="How to use the command centre" tone="gold">
      <ol className="list-decimal space-y-2 pl-5 text-sm">
        <li>Start at the subject home page for unit structure and progress mapping.</li>
        <li>Use the Formula Library and Concept Library to link theory with calculation tools.</li>
        <li>Open the Case Lab for guided past-paper missions and step-by-step solving.</li>
        <li>Use the Question Classifier to match a case to the most likely unit and formula.</li>
        <li>Use the Exam Answer Builder to turn your findings into a proper postgraduate answer.</li>
      </ol>
      <div className="mt-4 flex flex-wrap gap-2">
        <Badge tone="gold">Interactive</Badge>
        <Badge tone="gold">MANCOSA-aligned</Badge>
        <Badge tone="gold">Exam-ready</Badge>
      </div>
    </Card>
  </div>;
}
