import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, PageHeading, Input, Badge, BulletList } from '../components/ui';
import { useModule } from './helpers';
import { FORMULAS } from '../data/formulas';
import { OM_FORMULAS, getOMWorkedExampleByFormula } from '../data/modules/om';

type CalculatorState = {
  formulaId: string;
  inputs: Record<string, string>;
  result: string | null;
  steps: string[];
};

function EOQCalculator({ onCalculate }: { onCalculate?: (result: string) => void }) {
  const [demand, setDemand] = useState('');
  const [orderingCost, setOrderingCost] = useState('');
  const [holdingCost, setHoldingCost] = useState('');
  const [result, setResult] = useState<{ eoq: number; orders: number; aoc: number; ahc: number } | null>(null);

  const calculate = () => {
    const D = parseFloat(demand);
    const S = parseFloat(orderingCost);
    const H = parseFloat(holdingCost);
    if (D > 0 && S > 0 && H > 0) {
      const eoq = Math.sqrt((2 * D * S) / H);
      const orders = D / eoq;
      const aoc = orders * S;
      const ahc = (eoq / 2) * H;
      setResult({ eoq: Math.round(eoq), orders: Math.round(orders * 10) / 10, aoc: Math.round(aoc * 100) / 100, ahc: Math.round(ahc * 100) / 100 });
      onCalculate?.(`EOQ = ${Math.round(eoq)} units`);
    }
  };

  return (
    <Card title="EOQ Calculator" tone="white">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-slate-600">Annual Demand (D) - units/year</label>
          <Input value={demand} onChange={setDemand} placeholder="e.g., 12000" />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-600">Ordering Cost (S) - R per order</label>
          <Input value={orderingCost} onChange={setOrderingCost} placeholder="e.g., 200" />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-600">Holding Cost (H) - R per unit/year</label>
          <Input value={holdingCost} onChange={setHoldingCost} placeholder="e.g., 6" />
        </div>
        <button onClick={calculate} className="w-full rounded-lg bg-[#3B1D6E] px-4 py-2 font-medium text-white hover:bg-[#2d1654]">
          Calculate EOQ
        </button>
        {result && (
          <div className="space-y-2 rounded-lg bg-slate-50 p-4">
            <p className="text-lg font-bold text-[#3B1D6E]">EOQ = {result.eoq} units</p>
            <div className="text-sm text-slate-600 space-y-1">
              <p>Orders per year: {result.orders}</p>
              <p>Annual ordering cost: R{result.aoc}</p>
              <p>Annual holding cost: R{result.ahc}</p>
              <p className="font-medium">Total annual cost: R{Math.round((result.aoc + result.ahc) * 100) / 100}</p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

function ProductivityCalculator() {
  const [output, setOutput] = useState('');
  const [input, setInput] = useState('');
  const [result, setResult] = useState<{ productivity: number } | null>(null);

  const calculate = () => {
    const o = parseFloat(output);
    const i = parseFloat(input);
    if (o > 0 && i > 0) {
      setResult({ productivity: o / i });
    }
  };

  return (
    <Card title="Productivity Calculator" tone="white">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-slate-600">Output (units produced)</label>
          <Input value={output} onChange={setOutput} placeholder="e.g., 500" />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-600">Input (labour hours, R, etc.)</label>
          <Input value={input} onChange={setInput} placeholder="e.g., 100" />
        </div>
        <button onClick={calculate} className="w-full rounded-lg bg-[#3B1D6E] px-4 py-2 font-medium text-white hover:bg-[#2d1654]">
          Calculate Productivity
        </button>
        {result && (
          <div className="rounded-lg bg-slate-50 p-4">
            <p className="text-lg font-bold text-[#3B1D6E]">Productivity = {result.productivity.toFixed(2)} units per input unit</p>
          </div>
        )}
      </div>
    </Card>
  );
}

function CapacityCalculator() {
  const [actual, setActual] = useState('');
  const [design, setDesign] = useState('');
  const [effective, setEffective] = useState('');
  const [result, setResult] = useState<{ utilisation: number; efficiency: number } | null>(null);

  const calculate = () => {
    const a = parseFloat(actual);
    const d = parseFloat(design);
    const e = parseFloat(effective);
    if (a > 0 && d > 0) {
      setResult({
        utilisation: (a / d) * 100,
        efficiency: e > 0 ? (a / e) * 100 : 0,
      });
    }
  };

  return (
    <Card title="Capacity Calculator" tone="white">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-slate-600">Actual Output (units)</label>
          <Input value={actual} onChange={setActual} placeholder="e.g., 160" />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-600">Design Capacity (units)</label>
          <Input value={design} onChange={setDesign} placeholder="e.g., 200" />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-600">Effective Capacity (units) - optional</label>
          <Input value={effective} onChange={setEffective} placeholder="e.g., 180" />
        </div>
        <button onClick={calculate} className="w-full rounded-lg bg-[#3B1D6E] px-4 py-2 font-medium text-white hover:bg-[#2d1654]">
          Calculate
        </button>
        {result && (
          <div className="space-y-2 rounded-lg bg-slate-50 p-4">
            <p className="text-lg font-bold text-[#3B1D6E]">Utilisation = {result.utilisation.toFixed(1)}%</p>
            {result.efficiency > 0 && (
              <p className="text-lg font-bold text-[#3B1D6E]">Efficiency = {result.efficiency.toFixed(1)}%</p>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}

function MADCalculator() {
  const [values, setValues] = useState<{ actual: string; forecast: string }[]>([
    { actual: '', forecast: '' },
    { actual: '', forecast: '' },
    { actual: '', forecast: '' },
  ]);
  const [result, setResult] = useState<{ mad: number; errors: number[] } | null>(null);

  const updateValue = (index: number, field: 'actual' | 'forecast', value: string) => {
    const updated = [...values];
    updated[index][field] = value;
    setValues(updated);
  };

  const addRow = () => {
    setValues([...values, { actual: '', forecast: '' }]);
  };

  const calculate = () => {
    const errors: number[] = [];
    values.forEach((v) => {
      const a = parseFloat(v.actual);
      const f = parseFloat(v.forecast);
      if (!isNaN(a) && !isNaN(f)) {
        errors.push(Math.abs(a - f));
      }
    });
    if (errors.length > 0) {
      const mad = errors.reduce((sum, e) => sum + e, 0) / errors.length;
      setResult({ mad, errors });
    }
  };

  return (
    <Card title="MAD Calculator" tone="white">
      <div className="space-y-4">
        <p className="text-sm text-slate-600">Enter actual and forecast values for each period</p>
        {values.map((v, i) => (
          <div key={i} className="flex gap-2 items-center">
            <span className="text-sm text-slate-500 w-20">Period {i + 1}:</span>
            <Input value={v.actual} onChange={(val) => updateValue(i, 'actual', val)} placeholder="Actual" />
            <Input value={v.forecast} onChange={(val) => updateValue(i, 'forecast', val)} placeholder="Forecast" />
          </div>
        ))}
        <div className="flex gap-2">
          <button onClick={addRow} className="rounded-lg border border-slate-300 px-3 py-1 text-sm hover:bg-slate-50">
            + Add period
          </button>
          <button onClick={calculate} className="flex-1 rounded-lg bg-[#3B1D6E] px-4 py-2 font-medium text-white hover:bg-[#2d1654]">
            Calculate MAD
          </button>
        </div>
        {result && (
          <div className="space-y-2 rounded-lg bg-slate-50 p-4">
            <p className="text-lg font-bold text-[#3B1D6E]">MAD = {result.mad.toFixed(2)} units</p>
            <p className="text-sm text-slate-600">Absolute deviations: {result.errors.map((e) => e.toFixed(1)).join(', ')}</p>
          </div>
        )}
      </div>
    </Card>
  );
}

function ROPCalculator() {
  const [dailyDemand, setDailyDemand] = useState('');
  const [leadTime, setLeadTime] = useState('');
  const [safetyStock, setSafetyStock] = useState('');
  const [result, setResult] = useState<{ rop: number; demandDuringLead: number } | null>(null);

  const calculate = () => {
    const d = parseFloat(dailyDemand);
    const l = parseFloat(leadTime);
    const s = parseFloat(safetyStock) || 0;
    if (d > 0 && l > 0) {
      const demandDuringLead = d * l;
      const rop = demandDuringLead + s;
      setResult({ rop: Math.round(rop), demandDuringLead: Math.round(demandDuringLead) });
    }
  };

  return (
    <Card title="Reorder Point Calculator" tone="white">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-slate-600">Daily Demand (units/day)</label>
          <Input value={dailyDemand} onChange={setDailyDemand} placeholder="e.g., 50" />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-600">Lead Time (days)</label>
          <Input value={leadTime} onChange={setLeadTime} placeholder="e.g., 6" />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-600">Safety Stock (units) - optional</label>
          <Input value={safetyStock} onChange={setSafetyStock} placeholder="e.g., 100" />
        </div>
        <button onClick={calculate} className="w-full rounded-lg bg-[#3B1D6E] px-4 py-2 font-medium text-white hover:bg-[#2d1654]">
          Calculate ROP
        </button>
        {result && (
          <div className="space-y-2 rounded-lg bg-slate-50 p-4">
            <p className="text-lg font-bold text-[#3B1D6E]">ROP = {result.rop} units</p>
            <p className="text-sm text-slate-600">Demand during lead time: {result.demandDuringLead} units</p>
          </div>
        )}
      </div>
    </Card>
  );
}

export default function CalculatorHubPage() {
  const { id, module } = useModule();
  const { formulaId } = useParams();
  const [query, setQuery] = useState('');

  const omFormulas = id === 'om' ? OM_FORMULAS : FORMULAS;

  const filtered = useMemo(() => {
    return omFormulas.filter((formula) => {
      const searchText = [formula.name, formula.formula, 'description' in formula ? formula.description : formula.plainMeaning, formula.category]
        .join(' ')
        .toLowerCase();
      return searchText.includes(query.toLowerCase());
    });
  }, [query, omFormulas]);

  const selectedFormula = formulaId ? omFormulas.find((f) => f.id === formulaId) : undefined;

  return (
    <div className="space-y-5">
      <PageHeading kicker={`${module.code} Calculator Hub`} title={selectedFormula ? `${selectedFormula.name} Calculator` : 'Calculator hub'} sub="Fast access to OM calculation tools with step-by-step guidance." />

      {selectedFormula && (
        <Link to={`/${id}/calculators`} className="text-sm font-medium text-[#3B1D6E] hover:underline">
          ← Back to all calculators
        </Link>
      )}

      {formulaId === 'eoq' && !selectedFormula && (
        <Card title="Select a calculator">
          <Link to={`/${id}/calculators/eoq`} className="text-[#3B1D6E] font-medium hover:underline">Open EOQ Calculator</Link>
        </Card>
      )}

      {formulaId === 'eoq' && (
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <EOQCalculator />
          <Card title="EOQ Formula">
            <div className="space-y-3">
              <div className="rounded-lg bg-slate-50 p-3 font-mono">
                EOQ = √((2 × D × S) ÷ H)
              </div>
              <div className="text-sm text-slate-600">
                <p><strong>D</strong> = Annual demand (units/year)</p>
                <p><strong>S</strong> = Ordering cost per order (R)</p>
                <p><strong>H</strong> = Holding cost per unit per year (R)</p>
              </div>
              <Link to={`/${id}/formulas/eoq`} className="block text-sm text-[#3B1D6E] hover:underline">
                View formula details →
              </Link>
            </div>
          </Card>
        </div>
      )}

      {formulaId === 'productivity' && (
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <ProductivityCalculator />
          <Card title="Productivity Formula">
            <div className="space-y-3">
              <div className="rounded-lg bg-slate-50 p-3 font-mono">
                Productivity = Output ÷ Input
              </div>
              <Link to={`/${id}/formulas/productivity`} className="block text-sm text-[#3B1D6E] hover:underline">
                View formula details →
              </Link>
            </div>
          </Card>
        </div>
      )}

      {formulaId === 'utilisation' && (
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <CapacityCalculator />
          <Card title="Utilisation & Efficiency">
            <div className="space-y-3">
              <div className="rounded-lg bg-slate-50 p-3 font-mono text-sm">
                Utilisation = (Actual ÷ Design) × 100%<br/>
                Efficiency = (Actual ÷ Effective) × 100%
              </div>
              <Link to={`/${id}/formulas/utilisation`} className="block text-sm text-[#3B1D6E] hover:underline">
                View formula details →
              </Link>
            </div>
          </Card>
        </div>
      )}

      {formulaId === 'mad' && (
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <MADCalculator />
          <Card title="MAD Formula">
            <div className="space-y-3">
              <div className="rounded-lg bg-slate-50 p-3 font-mono text-sm">
                MAD = Σ|Actual − Forecast| ÷ n
              </div>
              <Link to={`/${id}/formulas/mad`} className="block text-sm text-[#3B1D6E] hover:underline">
                View formula details →
              </Link>
            </div>
          </Card>
        </div>
      )}

      {formulaId === 'rop' && (
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <ROPCalculator />
          <Card title="ROP Formula">
            <div className="space-y-3">
              <div className="rounded-lg bg-slate-50 p-3 font-mono text-sm">
                ROP = (Daily demand × Lead time) + Safety stock
              </div>
              <Link to={`/${id}/formulas/rop`} className="block text-sm text-[#3B1D6E] hover:underline">
                View formula details →
              </Link>
            </div>
          </Card>
        </div>
      )}

      {!formulaId && (
        <>
          <Card title="Available Calculators" tone="white">
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              <Link to={`/${id}/calculators/eoq`} className="rounded-lg border border-slate-200 p-4 hover:border-[#3B1D6E] hover:bg-slate-50">
                <h3 className="font-semibold">EOQ Calculator</h3>
                <p className="text-sm text-slate-600">Economic Order Quantity</p>
              </Link>
              <Link to={`/${id}/calculators/productivity`} className="rounded-lg border border-slate-200 p-4 hover:border-[#3B1D6E] hover:bg-slate-50">
                <h3 className="font-semibold">Productivity Calculator</h3>
                <p className="text-sm text-slate-600">Output/Input ratio</p>
              </Link>
              <Link to={`/${id}/calculators/utilisation`} className="rounded-lg border border-slate-200 p-4 hover:border-[#3B1D6E] hover:bg-slate-50">
                <h3 className="font-semibold">Capacity Calculator</h3>
                <p className="text-sm text-slate-600">Utilisation & Efficiency</p>
              </Link>
              <Link to={`/${id}/calculators/mad`} className="rounded-lg border border-slate-200 p-4 hover:border-[#3B1D6E] hover:bg-slate-50">
                <h3 className="font-semibold">MAD Calculator</h3>
                <p className="text-sm text-slate-600">Forecast accuracy</p>
              </Link>
              <Link to={`/${id}/calculators/rop`} className="rounded-lg border border-slate-200 p-4 hover:border-[#3B1D6E] hover:bg-slate-50">
                <h3 className="font-semibold">ROP Calculator</h3>
                <p className="text-sm text-slate-600">Reorder Point</p>
              </Link>
            </div>
          </Card>

          <Card title="Search formulas" tone="white">
            <Input value={query} onChange={setQuery} placeholder="Search calculators by formula name or concept..." />
          </Card>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((formula) => (
              <Link
                key={formula.id}
                to={`/${id}/formulas/${formula.id}`}
                className="block rounded-lg border border-slate-200 p-4 hover:border-[#3B1D6E] hover:bg-slate-50"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate-500">{formula.category}</p>
                    <h3 className="font-semibold">{formula.name}</h3>
                  </div>
                  <Badge>Formula</Badge>
                </div>
                <p className="mt-2 font-mono text-sm text-slate-600">{formula.formula}</p>
                <p className="mt-2 text-sm text-slate-500">
                  {'description' in formula ? formula.description : formula.plainMeaning}
                </p>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <Card title="No matching calculator">
              <p>Try a broader search term, such as EOQ, forecasting or productivity.</p>
            </Card>
          )}
        </>
      )}

      <Card title="How to use this hub" tone="gold">
        <BulletList
          items={[
            'Select a calculator from the quick access tiles above',
            'Enter your values and click Calculate',
            'Results show the calculation and interpretation',
            'Click "View formula details" for step-by-step guidance',
            'Link to worked examples for exam practice',
          ]}
        />
      </Card>
    </div>
  );
}
