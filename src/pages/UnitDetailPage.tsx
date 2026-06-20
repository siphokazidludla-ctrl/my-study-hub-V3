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

    {unit.notes && (
      <Card title="Unit notes (start here)" tone="white">
        <div className="space-y-3 text-sm leading-relaxed text-slate-700">
          {unit.notes.introduction.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </div>

        <h3 className="mt-5 text-base font-extrabold text-[#3B1D6E]">Key ideas explained simply</h3>
        <div className="mt-2 space-y-3">
          {unit.notes.concepts.map((c) => (
            <div key={c.concept} className="rounded-lg border border-slate-200 p-3">
              <p className="font-bold text-[#241349]">{c.concept}</p>
              <p className="mt-1 text-sm text-slate-700">{c.explanation}</p>
              <p className="mt-1 text-sm text-slate-500"><span className="font-semibold">Example: </span>{c.example}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-5 text-base font-extrabold text-[#3B1D6E]">How it fits together and links to theory</h3>
        <div className="mt-2 space-y-3 text-sm leading-relaxed text-slate-700">
          {unit.notes.application.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
        </div>

        {unit.notes.map.length > 0 && (
          <>
            <h3 className="mt-5 text-base font-extrabold text-[#3B1D6E]">Outcome → content → theory map</h3>
            <div className="mt-2 overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-[#F4F1FA] text-[#3B1D6E]">
                    <th className="border border-slate-200 p-2 font-bold">Learning outcome</th>
                    <th className="border border-slate-200 p-2 font-bold">Module-guide content</th>
                    <th className="border border-slate-200 p-2 font-bold">Theory / framework to use</th>
                  </tr>
                </thead>
                <tbody>
                  {unit.notes.map.map((r, i) => (
                    <tr key={i} className="align-top">
                      <td className="border border-slate-200 p-2">{r.outcome}</td>
                      <td className="border border-slate-200 p-2">{r.content}</td>
                      <td className="border border-slate-200 p-2">{r.theory}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {unit.notes.sources && unit.notes.sources.length > 0 && (
          <p className="mt-4 text-xs text-slate-500">
            <span className="font-semibold">Sources: </span>{unit.notes.sources.join('; ')}
          </p>
        )}
      </Card>
    )}

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
