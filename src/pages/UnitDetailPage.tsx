import { Link, useParams } from 'react-router-dom';
import { Card, PageHeading, BulletList, LinkCard, Badge } from '../components/ui';
import { unitsFor, THEORIES } from '../data';
import { useModule } from './helpers';

export default function UnitDetailPage() {
  const { unitId } = useParams();
  const { id, module } = useModule();
  const unit = unitsFor(id).find((u)=>u.id===unitId);
  if (!unit) return <Card title="Missing unit">Unit not found.</Card>;
  const theories = THEORIES.filter((t)=> unit.theoryIds.includes(t.id));
  return <div className="space-y-5">
    <PageHeading kicker={`${module.code} Unit ${unit.number}`} title={unit.title} sub={unit.plain} />
    <Card title="Learning outcomes"><BulletList items={unit.outcomes.map((o)=>`${o.code}: ${o.text}`)} /></Card>
    <div className="grid gap-4 lg:grid-cols-2">
      <Card title="Module guide contents"><BulletList items={unit.contents} /></Card>
      <Card title="Assessment note" tone="gold"><p>{unit.assessmentNote}</p><Badge tone="gold">Assessment weight {unit.assessmentWeight}/5</Badge><p>{unit.prescribedChapters}</p></Card>
    </div>
    <Card title="Key concepts"><div className="flex flex-wrap gap-2">{unit.keyConcepts.map((k)=><Badge key={k}>{k}</Badge>)}</div></Card>
    <section className="space-y-3">
      <h2 className="text-xl font-extrabold">Linked theories</h2>
      <div className="grid gap-4 md:grid-cols-2">{theories.map((t)=><LinkCard key={t.id} to={`/${id}/theories/${t.id}`} eyebrow={t.category} title={t.name} text={t.plain} tags={t.examTriggers.slice(0,2)} />)}</div>
    </section>
    <Link className="font-bold text-[#3B1D6E]" to={`/${id}/units`}>← Back to units</Link>
  </div>;
}
