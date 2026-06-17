import { pastPapersFor, themeFrequency } from "../data/pastPapers";
import { Card, PageHeading, BulletList, LinkCard, Badge } from '../components/ui';
import { useModule } from './helpers';

export default function PastPapersPage() {
  const { id, module } = useModule();
  const papers = pastPapersFor(id);
  const freq = themeFrequency(id).slice(0, 8);
  return (
    <div className="space-y-5">
      <PageHeading kicker={`${module.code} Past Paper Intelligence`}
        title="Real papers, worked solutions and examined patterns"
        sub="Transcribed from the uploaded MANCOSA papers. Inferred items are labelled." />
      <Card title="Most examined themes (from real papers)">
        <div className="flex flex-wrap gap-2">
          {freq.map((f) => <Badge key={f.theme} tone="gold">{f.theme} ({f.count})</Badge>)}
        </div>
      </Card>
      <div className="grid gap-3 md:grid-cols-2">
        {papers.map((p) => (
          <LinkCard key={p.id} to={`/${id}/past-papers/${p.id}`}
            eyebrow={`${p.totalMarks} marks${p.saContext ? " · SA context" : ""}`}
            title={p.title}>
            {p.questions.length} questions · {p.frequency} frequency
          </LinkCard>
        ))}
      </div>
    </div>
  );
}
