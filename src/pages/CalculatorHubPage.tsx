import { useMemo, useState } from 'react';
import { Card, PageHeading, Input, LinkCard, Badge } from '../components/ui';
import { useModule } from './helpers';
import { FORMULAS } from '../data/formulas';

export default function CalculatorHubPage() {
  const { id, module } = useModule();
  const [query, setQuery] = useState('');
  const filtered = useMemo(
    () => FORMULAS.filter((formula) => [formula.name, formula.formula, formula.category, formula.description].join(' ').toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <div className="space-y-5">
      <PageHeading kicker={`${module.code} Calculator Hub`} title="Calculator hub" sub="Fast access to OM calculation tools and formula links." />
      <Card title="Search calculators" tone="white">
        <Input value={query} onChange={setQuery} placeholder="Search calculators by formula name or concept..." />
      </Card>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((formula) => (
          <LinkCard
            key={formula.id}
            to={`/${id}/formulas/${formula.id}`}
            eyebrow={formula.category}
            title={formula.name}
            text={formula.description}
            tags={['Calculator', 'Formula']}
          />
        ))}
      </div>
      {filtered.length === 0 && <Card title="No matching calculator">Try a broader search term, such as EOQ, forecasting or productivity.</Card>}
      <Card title="How to use this hub" tone="gold">
        <ul className="list-disc space-y-2 pl-5 text-sm">
          <li>Search by formula or concept.</li>
          <li>Open a formula card to see variables, units and example questions.</li>
          <li>Use the formula links to jump straight into the calculator workflow and exam sentences.</li>
        </ul>
      </Card>
    </div>
  );
}
