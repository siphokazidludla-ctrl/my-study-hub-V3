import { LinkCard, PageHeading, Card, Badge } from '../components/ui';

export default function HomePage() {
  return <div className="space-y-5">
    <PageHeading kicker="Home / Exam Command Centre" title="MANCOSA PGDBM Exam Command Centre" sub="Your interactive study portal for units, concepts, formulas, cases, calculators, answer-building and exam practice." />

    <div className="grid gap-4">
      <Card title="Quick exam hubs" tone="white">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          <LinkCard to="/om/formula-library" eyebrow="Formula Library" title="Formula cards" text="Browse formula definitions, unit links, worked examples and calculator entry points." tags={['Formulas','OM']} />
          <LinkCard to="/om/concepts" eyebrow="Concept Library" title="Concept cards" text="Find key OM concepts, when to use them, related formulas and exam triggers." tags={['Concepts','OM']} />
          <LinkCard to="/om/cases" eyebrow="Past Paper Case Lab" title="Practice missions" text="Work through OM cases step-by-step with classification, calculation and exam writing support." tags={['Cases','OM']} />
          <LinkCard to="/om/calculators" eyebrow="Calculator Hub" title="Calculation tools" text="Open OM calculator workflows for EOQ, forecasting, capacity and productivity." tags={['Calculator','OM']} />
          <LinkCard to="/om/question-classifier" eyebrow="Question Classifier" title="Classify exam questions" text="Paste a case-style question and get unit, concept and formula guidance." tags={['AI helper','OM']} />
          <LinkCard to="/om/exam-builder" eyebrow="Answer Builder" title="Build exam paragraphs" text="Turn your analysis into a structured 10/20/40-mark answer." tags={['Writing','OM']} />
        </div>
        <p className="mt-3 text-xs text-slate-500">Pick any subject from the <span className="font-semibold">Subjects</span> menu on the left to open its units, theory cards, cases and past papers.</p>
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

    <Card title="Worked-solution coverage (latest update)" tone="white">
      <p className="text-sm text-slate-600">
        Every past-paper question across all four modules now has a full model answer.
        Open any subject, go to Past Papers, choose a question and expand
        <span className="font-semibold"> Model answer </span>
        to see a structured, referenced response. The three shared case studies
        (IKM, OM and MM) now have full guided solutions in the Case Lab.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-slate-200 p-3">
          <p className="font-semibold text-[#3B1D6E]">Organisational Behaviour</p>
          <p className="text-sm text-slate-600">Gold-standard module (unchanged) — 11 worked solutions and full theory base.</p>
        </div>
        <div className="rounded-lg border border-slate-200 p-3">
          <p className="font-semibold text-[#3B1D6E]">Information &amp; Knowledge Mgmt</p>
          <p className="text-sm text-slate-600">75 / 75 questions answered (62 new model answers added).</p>
        </div>
        <div className="rounded-lg border border-slate-200 p-3">
          <p className="font-semibold text-[#3B1D6E]">Operations Management</p>
          <p className="text-sm text-slate-600">17 / 17 questions answered (11 new model answers added).</p>
        </div>
        <div className="rounded-lg border border-slate-200 p-3">
          <p className="font-semibold text-[#3B1D6E]">Marketing Management</p>
          <p className="text-sm text-slate-600">30 / 30 questions answered (28 new model answers added).</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Badge>101 new model answers</Badge>
        <Badge>3 case studies solved</Badge>
        <Badge>100% past-paper coverage</Badge>
      </div>
      <p className="mt-4 text-xs text-slate-500">
        How to use a model answer: read your own attempt first, then compare structure
        (Introduction, themed body paragraphs with in-text Harvard citations, Conclusion),
        the command word, and the references used. Treat each answer as a worked example to
        learn the marking logic, not a script to memorise. Note: a few Operations Management
        calculation questions had no source data table in the original papers, so those answers
        show the full method with clearly labelled illustrative figures and stated assumptions —
        always substitute the real figures given in your exam.
      </p>
    </Card>
  </div>;
}
