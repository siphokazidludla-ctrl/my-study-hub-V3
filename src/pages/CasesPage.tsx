import { CASES, THEORIES } from '../data';
import { Card, PageHeading, BulletList, LinkCard, Badge } from '../components/ui';
import { useModule } from './helpers';

export default function CasesPage() {
  const { id, module } = useModule();
  const cases = CASES.filter((c)=>c.module===id);
  return <div className="space-y-5">
    <PageHeading kicker={`${module.code} Case Analyzer`} title="Turn case clues into theory" sub="Use these case templates to practise diagnostic thinking before writing open-book answers." />
    {cases.map((c)=><Card key={c.id} title={c.title} tone="white">
      <p>{c.scenario}</p>
      <p className="text-xs text-[#6B6580]">{c.source}</p>
      <div className="grid gap-4 md:grid-cols-2">
        <div><p className="font-bold">Key issues</p><BulletList items={c.keyIssues} /></div>
        <div><p className="font-bold">Diagnostic questions</p><BulletList items={c.diagnosticQuestions} /></div>
      </div>
      <div><p className="font-bold">Relevant theories</p><div className="grid gap-2 md:grid-cols-2">{c.relevantTheoryIds.map((tid)=>{ const t=THEORIES.find((x)=>x.id===tid); return t ? <LinkCard key={tid} to={`/${id}/theories/${tid}`} title={t.name} eyebrow={t.category} /> : <Badge key={tid}>{tid}</Badge>; })}</div></div>
      <div><p className="font-bold">Example analysis</p><BulletList items={c.exampleAnalysis} /></div>
      <div><p className="font-bold">Common mistakes</p><BulletList items={c.commonMistakes} /></div>
    </Card>)}
  </div>;
}
