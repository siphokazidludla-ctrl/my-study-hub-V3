import { MODULES } from '../data';
import { LinkCard, PageHeading, Card } from '../components/ui';

export default function HomePage() {
  return <div className="space-y-5">
    <PageHeading kicker="Open-book exam system" title="MANCOSA PGDBM Command Centre" sub="Choose a subject. Each dashboard links units, theories, cases, command words, past-paper intelligence and answer-building tools." />
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <LinkCard to="/ob" eyebrow="ORB801" title="Organisational Behaviour" text="Individual behaviour, teams, leadership, culture, change, conflict, stress, past papers and exam tools." tags={['Units','Theories','Past Papers','Command Words']} />
      {MODULES.map((m)=><LinkCard key={m.id} to={`/${m.id}`} eyebrow={m.code} title={m.name} text={m.description} tags={['Units','Theories','Cases','Exam tools']} />)}
    </div>
    <Card title="How to use this dashboard" tone="gold">
      <ol className="list-decimal space-y-2 pl-5">
        <li>Start with the subject homepage.</li>
        <li>Open Units to match the MANCOSA module guide structure.</li>
        <li>Use Theory Explorer for definitions, advantages, limitations and exam triggers.</li>
        <li>Use Cases and Past Papers to practise application.</li>
        <li>Use Command Words and Exam Builder before writing an answer.</li>
      </ol>
    </Card>
  </div>;
}
