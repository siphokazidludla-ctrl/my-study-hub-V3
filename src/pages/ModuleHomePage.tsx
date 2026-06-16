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
    </div>
    <Card title="Source rule" tone="gold">
      <p>Module guide content is treated as the source of truth. Textbooks support explanation. Any unverified academic extension is labelled for verification.</p>
      <Badge tone="gold">MANCOSA-aligned</Badge>
    </Card>
  </div>;
}
