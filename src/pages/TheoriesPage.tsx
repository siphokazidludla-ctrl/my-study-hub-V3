import { useMemo, useState } from 'react';
import { Input, LinkCard, PageHeading, Badge } from '../components/ui';
import { theoriesFor } from '../data';
import { useModule } from './helpers';

export default function TheoriesPage() {
  const { id, module } = useModule();
  const [q,setQ] = useState('');
  const theories = theoriesFor(id);
  const categories = [...new Set(theories.map((t)=>t.category))];
  const filtered = useMemo(()=>theories.filter((t)=>[t.name,t.category,t.plain,t.examTriggers.join(' ')].join(' ').toLowerCase().includes(q.toLowerCase())),[q,theories]);
  return <div className="space-y-5">
    <PageHeading kicker={`${module.code} Theory Explorer`} title="Frameworks, models and concepts" sub="Click any theory for purpose, components, advantages, limitations, examples, mistakes and related theories." />
    <Input value={q} onChange={setQ} placeholder="Search theories, exam triggers or concepts..." />
    <div className="flex flex-wrap gap-2">{categories.map((c)=><Badge key={c} tone="gold">{c}</Badge>)}</div>
    <div className="grid gap-4 md:grid-cols-2">{filtered.map((t)=><LinkCard key={t.id} to={`/${id}/theories/${t.id}`} eyebrow={t.category} title={t.name} text={t.plain} tags={t.examTriggers.slice(0,3)} />)}</div>
  </div>;
}
