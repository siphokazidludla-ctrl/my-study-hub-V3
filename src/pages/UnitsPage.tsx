import { LinkCard, PageHeading, Badge } from '../components/ui';
import { unitsFor } from '../data';
import { useModule } from './helpers';

export default function UnitsPage() {
  const { id, module } = useModule();
  const units = unitsFor(id);
  return <div className="space-y-5">
    <PageHeading kicker={`${module.code} Unit Explorer`} title="Official module guide map" sub="Units are arranged according to the MANCOSA module guide structure supplied to the project." />
    <div className="grid gap-4 md:grid-cols-2">
      {units.map((u)=><LinkCard key={u.id} to={`/${id}/units/${u.id}`} eyebrow={`Unit ${u.number}`} title={u.title} text={u.plain} tags={[`Weight ${u.assessmentWeight}/5`, u.prescribedChapters ?? 'Module guide']} />)}
    </div>
  </div>;
}
