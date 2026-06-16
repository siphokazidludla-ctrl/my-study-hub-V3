import { REFERENCES } from '../data';
import { Card, PageHeading, Badge } from '../components/ui';

export default function ReferencesPage() {
  return <div className="space-y-5">
    <PageHeading kicker="Source registry" title="References and source hierarchy" sub="Central registry for the dashboard. Module guides are the source of truth; textbooks support explanation." />
    {Object.entries(REFERENCES).map(([key, r])=><Card key={key} title={r.inText} right={<Badge tone="gold">{r.tier}</Badge>}><p>{r.full}</p></Card>)}
  </div>;
}
