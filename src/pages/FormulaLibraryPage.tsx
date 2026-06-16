import { useMemo, useState } from 'react';
import { LinkCard, PageHeading, Input, Badge, Card } from '../components/ui';
import { useModule } from './helpers';
import { FORMULAS } from '../data/formulas';
import { OM_UNITS } from '../data/omUnits';

export default function FormulaLibraryPage() {
  const { id, module } = useModule();
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () => FORMULAS.filter((formula) => [formula.name, formula.formula, formula.category, formula.description].join(' ').toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <div className="space-y-5">
      <PageHeading kicker={`${module.code} Formula Library`} title="Formula cards, units and calculator links" sub="Find each OM formula, explore the linked unit and concept, and jump straight to a worked example or calculator." />
      <Card title="Search formulas" tone="white">
        <Input value={query} onChange={setQuery} placeholder="Search by formula name, equation or concept..." />
      </Card>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((formula) => {
          const unit = OM_UNITS.find((u) => u.id === formula.unitId);
          return (
            <LinkCard
              key={formula.id}
              to={`/${id}/formulas/${formula.id}`}
              eyebrow={unit ? `Unit ${unit.number}` : 'OM formula'}
              title={formula.name}
              text={formula.description}
              tags={[formula.category, unit?.title ?? 'OM unit']}
            />
          );
        })}
      </div>
      {filtered.length === 0 && <Card title="No results" tone="gold"><p>No formulas matched that query. Try a different keyword or clear the search.</p></Card>}
    </div>
  );
}
