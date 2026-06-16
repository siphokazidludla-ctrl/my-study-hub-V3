import { useState } from 'react';
import { Card, PageHeading, Input, LinkCard, Badge } from '../components/ui';
import { useModule } from './helpers';

export default function MistakeLogPage() {
  const { module } = useModule();
  const [item, setItem] = useState('');
  const [entries, setEntries] = useState<string[]>([]);

  return (
    <div className="space-y-5">
      <PageHeading kicker={`${module.code} Mistake Log`} title="Mistake log" sub="Track formulas, concepts and case clues you keep getting wrong." />
      <Card title="Add a mistake" tone="white">
        <div className="space-y-3">
          <Input value={item} onChange={setItem} placeholder="Enter a formula, concept or case you want to revise..." />
          <button
            onClick={() => {
              if (item.trim()) {
                setEntries((current) => [item.trim(), ...current]);
                setItem('');
              }
            }}
            className="rounded-full bg-[#3B1D6E] px-5 py-2 text-sm font-bold text-white"
          >
            Save mistake
          </button>
        </div>
      </Card>
      <Card title="Current revision list" tone="gold">
        {entries.length === 0 ? (
          <p>No mistakes logged yet. Add something from your practice questions or formula review.</p>
        ) : (
          <ul className="list-disc space-y-2 pl-5 text-sm">{entries.map((entry) => <li key={entry}>{entry}</li>)}</ul>
        )}
      </Card>
      <Card title="How to use it" tone="white">
        <p>Add any formula or concept you struggled with during practice. Review this list before exams and update it as your understanding improves.</p>
      </Card>
    </div>
  );
}
