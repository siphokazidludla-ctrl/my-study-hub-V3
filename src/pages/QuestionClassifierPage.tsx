import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, PageHeading, Input, Badge, BulletList } from '../components/ui';
import { useModule } from './helpers';
import { OM_FORMULAS } from '../data/modules/om';

type ClassificationResult = {
  unit: string;
  unitId: string;
  concept: string;
  calculationNeeded: boolean;
  formulas: { id: string; name: string; formula: string }[];
  answerStructure: string[];
  keyTerms: string[];
  relatedCases: string[];
};

const CLASSIFICATION_RULES: Array<{
  keywords: string[];
  result: ClassificationResult;
}> = [
  {
    keywords: ['eoq', 'economic order quantity', 'order quantity', 'ordering cost', 'holding cost', 'inventory cost', 'annual demand', 'optimal order'],
    result: {
      unit: 'Unit 10: Inventory Management and JIT Systems',
      unitId: 'om-10',
      concept: 'EOQ (Economic Order Quantity) and inventory cost optimisation',
      calculationNeeded: true,
      formulas: [
        { id: 'eoq', name: 'EOQ', formula: 'EOQ = √((2 × D × S) ÷ H)' },
        { id: 'total-inventory-cost', name: 'Total Inventory Cost', formula: 'TC = (D/Q × S) + (Q/2 × H)' },
      ],
      answerStructure: [
        'Define EOQ and its purpose in inventory management',
        'Extract given data: annual demand, ordering cost, holding cost',
        'Apply the EOQ formula showing all workings',
        'Calculate total annual inventory cost at EOQ',
        'Interpret the result in business context',
        'Discuss limitations: demand uncertainty, supplier reliability, storage constraints',
      ],
      keyTerms: ['EOQ', 'ordering cost', 'holding cost', 'annual demand', 'inventory optimisation'],
      relatedCases: ['om-eoq-apricot', 'om-stockouts'],
    },
  },
  {
    keywords: ['rop', 'reorder point', 'reorder', 'stockout', 'lead time', 'safety stock', 'buffer stock', 'when to order'],
    result: {
      unit: 'Unit 10: Inventory Management and JIT Systems',
      unitId: 'om-10',
      concept: 'ROP (Reorder Point) and safety stock management',
      calculationNeeded: true,
      formulas: [
        { id: 'rop', name: 'Reorder Point', formula: 'ROP = (Daily demand × Lead time) + Safety stock' },
      ],
      answerStructure: [
        'Define ROP and its role in preventing stockouts',
        'Extract daily demand, lead time, and safety stock data',
        'Calculate demand during lead time',
        'Add safety stock for the ROP',
        'Interpret when to place orders',
        'Discuss lead time variability and safety stock trade-offs',
      ],
      keyTerms: ['ROP', 'lead time', 'safety stock', 'daily demand', 'stockout prevention'],
      relatedCases: ['om-stockouts'],
    },
  },
  {
    keywords: ['forecast', 'forecasting', 'mad', 'mean absolute deviation', 'forecast error', 'forecast accuracy', 'predict demand', 'prediction'],
    result: {
      unit: 'Unit 4: Forecasting',
      unitId: 'om-4',
      concept: 'Forecasting methods and accuracy measurement',
      calculationNeeded: true,
      formulas: [
        { id: 'mad', name: 'MAD', formula: 'MAD = Σ|Actual − Forecast| ÷ n' },
        { id: 'simple-moving-average', name: 'Simple Moving Average', formula: 'SMA = Σ(Demand) ÷ n' },
        { id: 'weighted-moving-average', name: 'Weighted Moving Average', formula: 'WMA = Σ(Weight × Demand) ÷ ΣWeights' },
      ],
      answerStructure: [
        'Identify the forecasting method required',
        'Extract historical demand data',
        'Apply the appropriate forecasting formula',
        'Calculate forecast error using MAD if required',
        'Interpret forecast accuracy',
        'Discuss forecasting limitations and demand uncertainty',
      ],
      keyTerms: ['forecasting', 'MAD', 'moving average', 'forecast error', 'time series'],
      relatedCases: ['om-stockouts', 'om-forecast-demand'],
    },
  },
  {
    keywords: ['productivity', 'output', 'input', 'efficiency', 'units per hour', 'labour productivity', 'output per worker'],
    result: {
      unit: 'Unit 1: Operations and Productivity',
      unitId: 'om-1',
      concept: 'Productivity measurement and improvement',
      calculationNeeded: true,
      formulas: [
        { id: 'productivity', name: 'Productivity', formula: 'Productivity = Output ÷ Input' },
      ],
      answerStructure: [
        'Define productivity and its importance',
        'Identify output and input measures',
        'Calculate productivity ratio',
        'Compare with benchmarks or targets',
        'Analyse factors affecting productivity',
        'Recommend improvement strategies',
      ],
      keyTerms: ['productivity', 'output', 'input', 'labour productivity', 'multi-factor productivity'],
      relatedCases: ['om-productivity-manufacturing'],
    },
  },
  {
    keywords: ['utilisation', 'utilization', 'capacity utilisation', 'design capacity', 'actual output', 'maximum capacity'],
    result: {
      unit: 'Unit 6: Process Strategy and Capacity Planning',
      unitId: 'om-6',
      concept: 'Capacity utilisation and measurement',
      calculationNeeded: true,
      formulas: [
        { id: 'utilisation', name: 'Utilisation', formula: 'Utilisation = (Actual ÷ Design capacity) × 100%' },
        { id: 'efficiency', name: 'Efficiency', formula: 'Efficiency = (Actual ÷ Effective capacity) × 100%' },
      ],
      answerStructure: [
        'Define utilisation and its significance',
        'Identify design capacity and actual output',
        'Calculate utilisation percentage',
        'Calculate efficiency if effective capacity is given',
        'Interpret capacity usage',
        'Discuss implications for capacity planning',
      ],
      keyTerms: ['utilisation', 'efficiency', 'design capacity', 'effective capacity', 'capacity planning'],
      relatedCases: ['om-capacity-hospital'],
    },
  },
  {
    keywords: ['efficiency', 'effective capacity', 'operational efficiency', 'realistic capacity', 'process efficiency'],
    result: {
      unit: 'Unit 6: Process Strategy and Capacity Planning',
      unitId: 'om-6',
      concept: 'Operational efficiency measurement',
      calculationNeeded: true,
      formulas: [
        { id: 'efficiency', name: 'Efficiency', formula: 'Efficiency = (Actual ÷ Effective capacity) × 100%' },
        { id: 'utilisation', name: 'Utilisation', formula: 'Utilisation = (Actual ÷ Design capacity) × 100%' },
      ],
      answerStructure: [
        'Define efficiency vs utilisation',
        'Identify effective capacity and actual output',
        'Calculate efficiency percentage',
        'Compare with utilisation for insights',
        'Analyse the gap between design and effective capacity',
        'Discuss process improvement opportunities',
      ],
      keyTerms: ['efficiency', 'effective capacity', 'utilization', 'design capacity', 'process performance'],
      relatedCases: ['om-capacity-hospital'],
    },
  },
  {
    keywords: ['queue', 'queuing', 'waiting line', 'waiting time', 'arrival rate', 'little', 'little\'s law', 'customer wait'],
    result: {
      unit: 'Unit 6: Process Strategy and Capacity Planning',
      unitId: 'om-6',
      concept: "Queuing theory and Little's Law",
      calculationNeeded: true,
      formulas: [
        { id: 'littles-law-queue', name: "Little's Law", formula: 'Lq = λ × Wq' },
      ],
      answerStructure: [
        "Define Little's Law and its applications",
        'Identify arrival rate and waiting time',
        'Ensure consistent time units',
        'Calculate average queue length',
        'Design implications for service capacity',
        'Discuss service improvement strategies',
      ],
      keyTerms: ['queuing', 'Little\'s Law', 'arrival rate', 'waiting time', 'service design'],
      relatedCases: ['om-queue-bank'],
    },
  },
  {
    keywords: ['quality', 'tqm', 'total quality management', 'quality cost', 'defect', 'pdca', 'deming', 'six sigma', 'quality improvement'],
    result: {
      unit: 'Unit 3: Total Quality Management',
      unitId: 'om-3',
      concept: 'TQM and quality management',
      calculationNeeded: false,
      formulas: [],
      answerStructure: [
        'Define TQM and its key principles',
        'Identify quality issues in the case',
        'Apply relevant TQM concepts (PDCA, quality gurus)',
        'Analyse costs of quality if relevant',
        'Recommend quality improvement approaches',
        'Discuss continuous improvement culture',
      ],
      keyTerms: ['TQM', 'quality gurus', 'PDCA', 'quality costs', 'continuous improvement', 'Six Sigma'],
      relatedCases: [],
    },
  },
  {
    keywords: ['supply chain', 'supplier', 'vendor', 'bullwhip', 'make or buy', 'outsourcing', 'scm', 'supply chain strategy'],
    result: {
      unit: 'Unit 9: Supply Chain Management',
      unitId: 'om-9',
      concept: 'Supply chain management and strategy',
      calculationNeeded: false,
      formulas: [],
      answerStructure: [
        'Define supply chain management',
        'Identify supply chain issues in the case',
        'Analyse supply chain strategy options',
        'Discuss make-or-buy decisions if relevant',
        'Address bullwhip effect or coordination issues',
        'Recommend supply chain improvements',
      ],
      keyTerms: ['supply chain', 'supplier selection', 'bullwhip effect', 'make-or-buy', 'SCM'],
      relatedCases: [],
    },
  },
  {
    keywords: ['jit', 'just-in-time', 'lean', 'waste', 'muda', 'kanban', 'pull system', 'inventory reduction'],
    result: {
      unit: 'Unit 10: Inventory Management and JIT Systems',
      unitId: 'om-10',
      concept: 'JIT and lean production',
      calculationNeeded: false,
      formulas: [],
      answerStructure: [
        'Define JIT philosophy and lean principles',
        'Identify wastes (muda) in the current system',
        'Analyse current inventory and process issues',
        'Recommend JIT/lean implementation steps',
        'Discuss benefits and challenges',
        'Address cultural and supplier requirements',
      ],
      keyTerms: ['JIT', 'lean', 'waste elimination', 'Kanban', 'pull system', 'continuous improvement'],
      relatedCases: [],
    },
  },
  {
    keywords: ['aggregate', 'aggregate planning', 'chase', 'level', 'chase strategy', 'level strategy', 'capacity planning', 'months', 'medium term'],
    result: {
      unit: 'Unit 11: Aggregate Scheduling',
      unitId: 'om-11',
      concept: 'Aggregate scheduling strategies',
      calculationNeeded: false,
      formulas: [],
      answerStructure: [
        'Define aggregate planning and its purpose',
        'Identify demand and capacity requirements',
        'Compare chase vs level vs mixed strategies',
        'Analyse costs and trade-offs of each approach',
        'Recommend appropriate strategy with justification',
        'Discuss implementation considerations',
      ],
      keyTerms: ['aggregate planning', 'chase strategy', 'level strategy', 'medium-term planning', 'capacity management'],
      relatedCases: [],
    },
  },
  {
    keywords: ['mrp', 'materials requirements', 'bom', 'bill of materials', 'mps', 'master production schedule', 'dependent demand'],
    result: {
      unit: 'Unit 12: Materials Requirements Planning',
      unitId: 'om-12',
      concept: 'MRP and MRPII systems',
      calculationNeeded: true,
      formulas: [],
      answerStructure: [
        'Define MRP and its components',
        'Explain MPS and BOM structure',
        'Calculate gross and net requirements if data given',
        'Show how dependent demand triggers ordering',
        'Discuss MRP vs MRPII differences',
        'Link to JIT and Kanban where appropriate',
      ],
      keyTerms: ['MRP', 'MPS', 'BOM', 'dependent demand', 'Kanban', 'MRPII'],
      relatedCases: [],
    },
  },
  {
    keywords: ['location', 'site', 'where to locate', 'facility location', 'factor rating', 'center of gravity', 'location decision'],
    result: {
      unit: 'Unit 7: Location Strategies',
      unitId: 'om-7',
      concept: 'Location decision making',
      calculationNeeded: true,
      formulas: [],
      answerStructure: [
        'Define factors affecting location decisions',
        'Identify relevant location factors for the case',
        'Apply factor-rating method if data given',
        'Discuss centre-of-gravity if relevant',
        'Compare location alternatives',
        'Recommend with justification',
      ],
      keyTerms: ['location strategy', 'factor-rating', 'center-of-gravity', 'location factors', 'service location'],
      relatedCases: [],
    },
  },
  {
    keywords: ['process', 'process strategy', 'process type', 'job shop', 'batch', 'mass production', 'continuous', 'flow', 'bottleneck'],
    result: {
      unit: 'Unit 6: Process Strategy and Capacity Planning',
      unitId: 'om-6',
      concept: 'Process strategy and analysis',
      calculationNeeded: false,
      formulas: [],
      answerStructure: [
        'Define process strategy and the four process types',
        'Identify the current process type in the case',
        'Analyse process flow and bottlenecks',
        'Discuss process improvements',
        'Consider lean principles where relevant',
        'Recommend process strategy changes',
      ],
      keyTerms: ['process strategy', 'job shop', 'batch', 'mass production', 'bottleneck', 'process flow'],
      relatedCases: [],
    },
  },
  {
    keywords: ['job design', 'job enlargement', 'job enrichment', 'motivation', 'ergonomics', 'self-directed team', 'hr'],
    result: {
      unit: 'Unit 8: Human Resources, Job Design and Organisational Effectiveness',
      unitId: 'om-8',
      concept: 'Job design and HR in operations',
      calculationNeeded: false,
      formulas: [],
      answerStructure: [
        'Define job design and related concepts',
        'Identify HR and job design issues in the case',
        'Apply job enlargement/enrichment concepts',
        'Discuss motivation and incentive approaches',
        'Address ergonomics considerations',
        'Recommend HR and job design improvements',
      ],
      keyTerms: ['job design', 'job enlargement', 'job enrichment', 'motivation', 'ergonomics', 'self-directed teams'],
      relatedCases: [],
    },
  },
];

const DEFAULT_RESPONSE: ClassificationResult = {
  unit: 'Unable to classify - please add more detail to your question',
  unitId: '',
  concept: 'Needs verification',
  calculationNeeded: false,
  formulas: [],
  answerStructure: ['Read the case carefully', 'Identify key issues', 'Link to relevant OM concepts', 'Build structured answer'],
  keyTerms: [],
  relatedCases: [],
};

export default function QuestionClassifierPage() {
  const { id, module } = useModule();
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState<ClassificationResult>(DEFAULT_RESPONSE);
  const [matchedKeywords, setMatchedKeywords] = useState<string[]>([]);

  function classify() {
    const lower = question.toLowerCase();
    const foundKeywords: string[] = [];

    for (const rule of CLASSIFICATION_RULES) {
      for (const keyword of rule.keywords) {
        if (lower.includes(keyword)) {
          foundKeywords.push(keyword);
        }
      }
      if (foundKeywords.length > 0) {
        const matchCount = rule.keywords.filter((k) => lower.includes(k)).length;
        if (matchCount >= 1) {
          setResponse(rule.result);
          setMatchedKeywords(foundKeywords);
          return;
        }
      }
    }

    setResponse(DEFAULT_RESPONSE);
    setMatchedKeywords([]);
  }

  return (
    <div className="space-y-5">
      <PageHeading
        kicker={`${module.code} Question Classifier`}
        title="Question classifier"
        sub="Paste a case-style question and get the likely unit, concept, formula and answer structure."
      />

      <Card title="Paste your question" tone="white">
        <div className="space-y-4">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Paste a case-study question here. Include any numerical data, company context, and the specific question being asked..."
            className="w-full rounded-lg border border-slate-200 p-3 text-slate-700 min-h-[150px] focus:border-[#3B1D6E] focus:outline-none"
          />
          <button
            onClick={classify}
            className="rounded-full bg-[#3B1D6E] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#2d1654]"
          >
            Classify question
          </button>
        </div>
      </Card>

      {matchedKeywords.length > 0 && (
        <Card title="Matched keywords" tone="white">
          <div className="flex flex-wrap gap-2">
            {matchedKeywords.map((kw) => (
              <Badge key={kw} tone="gold">{kw}</Badge>
            ))}
          </div>
        </Card>
      )}

      <Card title="Analysis" tone="gold">
        <div className="space-y-4">
          <div>
            <p className="font-semibold text-slate-700">Likely unit</p>
            {response.unitId ? (
              <Link to={`/${id}/units/${response.unitId}`} className="text-[#3B1D6E] hover:underline">
                {response.unit}
              </Link>
            ) : (
              <p className="text-slate-600">{response.unit}</p>
            )}
          </div>

          <div>
            <p className="font-semibold text-slate-700">Likely concept</p>
            <p className="text-slate-600">{response.concept}</p>
          </div>

          <div>
            <p className="font-semibold text-slate-700">Calculation needed</p>
            <Badge tone={response.calculationNeeded ? 'gold' : 'mist'}>
              {response.calculationNeeded ? 'Yes - see formulas below' : 'No - focus on concepts'}
            </Badge>
          </div>

          {response.formulas.length > 0 && (
            <div>
              <p className="font-semibold text-slate-700">Relevant formulas</p>
              <div className="space-y-2 mt-2">
                {response.formulas.map((f) => (
                  <Link
                    key={f.id}
                    to={`/${id}/formulas/${f.id}`}
                    className="block rounded-lg border border-slate-200 p-3 hover:border-[#3B1D6E] hover:bg-slate-50"
                  >
                    <p className="font-medium text-[#3B1D6E]">{f.name}</p>
                    <p className="font-mono text-sm text-slate-600">{f.formula}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div>
            <p className="font-semibold text-slate-700">Suggested answer structure</p>
            <ol className="list-decimal space-y-2 pl-5 mt-2">
              {response.answerStructure.map((step, i) => (
                <li key={i} className="text-slate-600">{step}</li>
              ))}
            </ol>
          </div>

          {response.keyTerms.length > 0 && (
            <div>
              <p className="font-semibold text-slate-700">Key terms to include</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {response.keyTerms.map((term) => (
                  <Badge key={term}>{term}</Badge>
                ))}
              </div>
            </div>
          )}

          {response.relatedCases.length > 0 && (
            <div>
              <p className="font-semibold text-slate-700">Related cases for practice</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {response.relatedCases.map((caseId) => (
                  <Link
                    key={caseId}
                    to={`/${id}/cases/${caseId}`}
                    className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-600 hover:bg-slate-50"
                  >
                    {caseId.replace('om-', '').replace(/-/g, ' ')} →
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Card>

      <Card title="Tip: Common OM question types" tone="white">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {[
            { label: 'EOQ questions', keywords: 'EOQ, order quantity, holding cost, ordering cost' },
            { label: 'Forecasting questions', keywords: 'forecast, MAD, moving average, prediction' },
            { label: 'Productivity questions', keywords: 'productivity, output, input, efficiency' },
            { label: 'Capacity questions', keywords: 'utilisation, capacity, design capacity' },
            { label: 'Inventory questions', keywords: 'ROP, safety stock, stockout, lead time' },
            { label: 'Quality questions', keywords: 'TQM, quality, defects, PDCA' },
          ].map((item) => (
            <div key={item.label} className="rounded-lg bg-slate-50 p-3">
              <p className="font-medium text-slate-700">{item.label}</p>
              <p className="text-xs text-slate-500">{item.keywords}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Next steps">
        <div className="grid gap-3 md:grid-cols-4">
          <Link
            to={`/${id}/formulas`}
            className="rounded-lg border border-slate-200 p-3 text-center hover:border-[#3B1D6E] hover:bg-slate-50"
          >
            <p className="font-medium">Browse formulas</p>
          </Link>
          <Link
            to={`/${id}/calculators`}
            className="rounded-lg border border-slate-200 p-3 text-center hover:border-[#3B1D6E] hover:bg-slate-50"
          >
            <p className="font-medium">Use calculators</p>
          </Link>
          <Link
            to={`/${id}/cases`}
            className="rounded-lg border border-slate-200 p-3 text-center hover:border-[#3B1D6E] hover:bg-slate-50"
          >
            <p className="font-medium">Practice cases</p>
          </Link>
          <Link
            to={`/${id}/exam-builder`}
            className="rounded-lg border border-[#3B1D6E] p-3 text-center hover:bg-slate-50"
          >
            <p className="font-medium text-[#3B1D6E]">Build answer</p>
          </Link>
        </div>
      </Card>
    </div>
  );
}
