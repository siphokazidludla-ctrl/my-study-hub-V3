import { Link, useParams } from 'react-router-dom';
import { Badge, BulletList, Card, PageHeading, SourceTag, LinkCard } from '../components/ui';
import { getTheory, THEORIES } from '../data';
import { useModule } from './helpers';

export default function ConceptDetailPage() {
  const { conceptId } = useParams();
  const { id } = useModule();
  const t = getTheory(conceptId ?? '');
  if (!t) return <Card title="Missing concept">Concept not found.</Card>;
  const related = THEORIES.filter((x) => t.relatedTheoryIds.includes(x.id));
  return (
    <div className="space-y-5">
      <PageHeading kicker={t.category} title={t.name} sub={t.plain} />
      <Card title="Definition"><p>{t.definition}</p><SourceTag refs={t.definitionRefs} /></Card>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="Purpose"><p>{t.purpose}</p></Card>
        <Card title="Exam triggers" tone="gold"><div className="flex flex-wrap gap-2">{t.examTriggers.map((e) => <Badge key={e} tone="gold">{e}</Badge>)}</div></Card>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="Components"><BulletList items={t.components} /></Card>
        <Card title="Common mistakes"><BulletList items={t.commonMistakes} /></Card>
      </div>
      <Card title="Examples"><p><strong>Workplace:</strong> {t.example}</p><p><strong>South African application:</strong> {t.saExample}</p></Card>
      {related.length > 0 && <section className="space-y-3"><h2 className="text-xl font-extrabold">Related concepts</h2><div className="grid gap-4 md:grid-cols-2">{related.map((r) => <LinkCard key={r.id} to={`/${id}/concepts/${r.id}`} eyebrow={r.category} title={r.name} text={r.plain} />)}</div></section>}
      <Card title="References"><SourceTag refs={t.refs} /></Card>
      <Link className="font-bold text-[#3B1D6E]" to={`/${id}/concepts`}>← Back to concepts</Link>
    </div>
  );
}
