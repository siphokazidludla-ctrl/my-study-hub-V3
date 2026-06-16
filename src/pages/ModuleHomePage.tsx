import { LinkCard, PageHeading, Card, Badge } from '../components/ui';
import { unitsFor, theoriesFor, CASES, EXAM_TOPICS } from '../data';
import { useModule } from './helpers';

export default function ModuleHomePage() {
  const { id, module } = useModule();
  const units = unitsFor(id);
  const theories = theoriesFor(id);
  const cases = CASES.filter((c)=>c.module===id);
  const topics = EXAM_TOPICS.filter((t)=>t.module===id);
  return <div className="space-y-5">
    <PageHeading kicker={module.code} title={module.name} sub={module.description} />
    <div className="grid gap-4 md:grid-cols-4">
      <Card title="Units" tone="white"><p className="text-3xl font-extrabold">{units.length}</p><p>MANCOSA-aligned units</p></Card>
      <Card title="Theories" tone="white"><p className="text-3xl font-extrabold">{theories.length}</p><p>Frameworks and models</p></Card>
      <Card title="Cases" tone="white"><p className="text-3xl font-extrabold">{cases.length}</p><p>Practice case scenarios</p></Card>
      <Card title="Exam topics" tone="white"><p className="text-3xl font-extrabold">{topics.length}</p><p>Pattern prompts</p></Card>
    </div>
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <LinkCard to={`/${id}/units`} title="Unit Explorer" eyebrow="Study map" text="Official unit order, outcomes, key concepts and textbook support." tags={['Module guide']} />
      <LinkCard to={`/${id}/theories`} title="Theory Explorer" eyebrow="Knowledge graph" text="Clickable theory cards with relationships, examples and exam triggers." tags={['Frameworks']} />
      <LinkCard to={`/${id}/cases`} title="Case Analyzer" eyebrow="Application" text="Diagnose case clues and link them to theories." tags={['Case work']} />
      <LinkCard to={`/${id}/past-papers`} title="Past Paper Intelligence" eyebrow="Exam patterns" text="Question types, command words and answer strategies." tags={['Open-book']} />
      <LinkCard to={`/${id}/exam-builder`} title="Exam Answer Builder" eyebrow="Writing tool" text="Build a postgraduate answer structure from command word, theory and case evidence." tags={['Scaffold']} />
      <LinkCard to={`/${id}/paragraph-bank`} title="Paragraph Bank" eyebrow="Templates" text="Reusable academic paragraphs for introductions, theory, application and evaluation." tags={['Writing']} />
      {id === 'om' && <LinkCard to={`/${id}/formulas`} title="OM Formula Dashboard" eyebrow="Calculations & examples" text="All key OM formulas, worked examples and calculator sheet in one place." tags={['Formulas','Calculator']} />}
      {id === 'om' && <LinkCard to={`/${id}/formula-library`} title="Formula Library" eyebrow="Interactive study tool" text="Browse formulas with calculators, worked examples, and case links." tags={['Formulas','Calculator']} />}
      {id === 'om' && <LinkCard to={`/${id}/calculators`} title="Calculator Hub" eyebrow="Worked calculators" text="EOQ, productivity, capacity, and MAD calculators with step-by-step guidance." tags={['Calculator','Tools']} />}
      {id === 'om' && <LinkCard to={`/${id}/applied-calculations`} title="Applied Calculations" eyebrow="Worked examples" text="Step-by-step past paper calculations with exam tips." tags={['Worked examples']} />}
      {id === 'om' && <LinkCard to={`/${id}/question-classifier`} title="Question Classifier" eyebrow="AI helper" text="Paste a question to get unit, formula, and answer structure guidance." tags={['Classifier','AI']} />}
    </div>
    {id === 'om' && (
      <Card title="Module Documents" tone="gold">
        <div className="space-y-3">
          <p className="text-sm text-slate-600">Access the official MANCOSA documents for Operations Management:</p>
          <div className="grid gap-3 md:grid-cols-2">
            <a
              href="/documents/om/Operations_Management_Module_Guide_compressed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 hover:border-[#3B1D6E] hover:bg-slate-50"
            >
              <div className="rounded-full bg-red-100 p-2">
                <svg className="h-5 w-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-slate-900">OM Module Guide</p>
                <p className="text-xs text-slate-500">PDF - Learning outcomes, unit structure, assessment</p>
              </div>
            </a>
            <a
              href="/documents/om/operations_management_PGDBM.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 hover:border-[#3B1D6E] hover:bg-slate-50"
            >
              <div className="rounded-full bg-red-100 p-2">
                <svg className="h-5 w-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-slate-900">OM Past Papers</p>
                <p className="text-xs text-slate-500">PDF - Past examination papers and questions</p>
              </div>
            </a>
          </div>
        </div>
      </Card>
    )}
    <Card title="Source rule" tone="gold">
      <p>Module guide content is treated as the source of truth. Textbooks support explanation. Any unverified academic extension is labelled for verification.</p>
      <Badge tone="gold">MANCOSA-aligned</Badge>
    </Card>
  </div>;
}
