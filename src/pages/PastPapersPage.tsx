import { pastPapersFor, themeFrequency } from "../data/pastPapers";
import { Card, PageHeading, BulletList, LinkCard, Badge } from '../components/ui';
import { useModule } from './helpers';

export default function PastPapersPage() {
  const { id, module } = useModule();
  const topics = EXAM_TOPICS.filter((t)=>t.module===id);
  return <div className="space-y-5">
    <PageHeading kicker={`${module.code} Past Paper Intelligence`} title="Likely question patterns and answer strategy" sub="Uses uploaded or available paper patterns where present. Anything inferred is clearly labelled for verification." />
    {topics.length === 0 && <Card title="No verified past-paper patterns yet">Upload or add past papers for this subject, then create patterns here.</Card>}
    {topics.map((topic)=><Card key={topic.topic} title={topic.topic} tone="white" right={<Badge tone={topic.frequency==='High'?'gold':'mist'}>{topic.frequency}</Badge>}>
      <div className="flex flex-wrap gap-2">{topic.commandWords.map((w)=><Badge key={w} tone="gold">{w}</Badge>)}<Badge>{topic.difficulty}</Badge></div>
      <p><strong>Strategy:</strong> {topic.strategy}</p>
      <p><strong>Common mistake:</strong> {topic.commonMistakes}</p>
      {topic.saPattern && <p><strong>SA pattern:</strong> {topic.saPattern}</p>}
      <div className="grid gap-2 md:grid-cols-2">{topic.theoryIds.map((tid)=>{const t=THEORIES.find((x)=>x.id===tid); return t ? <LinkCard key={tid} to={`/${id}/theories/${tid}`} title={t.name} eyebrow={t.category} /> : <Badge key={tid}>{tid}</Badge>;})}</div>
    </Card>)}
  </div>;
}
