import { useState } from 'react';
import { Card, PageHeading, Input, LinkCard, Badge } from '../components/ui';
import { useModule } from './helpers';

const DEFAULT_RESPONSE = {
  unit: 'Needs verification',
  concept: 'Needs verification',
  calculationNeeded: 'Yes',
  formula: 'Needs verification',
  answerStructure: ['Define the concept', 'Extract data', 'Apply formula', 'Interpret results', 'Discuss limitations'],
};

export default function QuestionClassifierPage() {
  const { module } = useModule();
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState(DEFAULT_RESPONSE);

  function classify() {
    const lower = question.toLowerCase();
    if (lower.includes('eoq') || lower.includes('order quantity') || lower.includes('holding cost')) {
      setResponse({
        unit: 'Unit 10 Inventory Management and JIT Systems',
        concept: 'EOQ / inventory control',
        calculationNeeded: 'Yes',
        formula: 'EOQ = √((2 × D × S) ÷ H)',
        answerStructure: ['Define EOQ', 'Extract demand, ordering cost, holding cost', 'Apply the formula', 'Interpret the order quantity', 'Discuss limitations such as demand uncertainty'],
      });
      return;
    }
    if (lower.includes('forecast') || lower.includes('mad') || lower.includes('moving average')) {
      setResponse({
        unit: 'Unit 4 Forecasting',
        concept: 'Forecasting accuracy and moving average methods',
        calculationNeeded: 'Yes',
        formula: 'MAD = Σ|Actual − Forecast| ÷ n',
        answerStructure: ['Define the forecasting method', 'Extract actual and forecast values', 'Calculate the error', 'Interpret accuracy', 'Discuss forecast risk'],
      });
      return;
    }
    setResponse(DEFAULT_RESPONSE);
  }

  return (
    <div className="space-y-5">
      <PageHeading kicker={`${module.code} Question Classifier`} title="Question classifier" sub="Paste a case-style question and get the likely unit, concept, formula and answer structure." />
      <Card title="Paste your question" tone="white">
        <Input value={question} onChange={setQuestion} placeholder="Paste a case-study question here..." />
        <button onClick={classify} className="rounded-full bg-[#3B1D6E] px-5 py-2 text-sm font-bold text-white">Classify question</button>
      </Card>
      <Card title="Analysis" tone="gold">
        <div className="space-y-3">
          <div><p className="font-semibold">Likely unit</p><p>{response.unit}</p></div>
          <div><p className="font-semibold">Likely concept</p><p>{response.concept}</p></div>
          <div><p className="font-semibold">Calculation needed</p><p>{response.calculationNeeded}</p></div>
          <div><p className="font-semibold">Suggested formula</p><p>{response.formula}</p></div>
          <div><p className="font-semibold">Answer structure</p><ul className="list-decimal space-y-1 pl-5 text-sm">{response.answerStructure.map((step) => <li key={step}>{step}</li>)}</ul></div>
        </div>
      </Card>
      <Card title="How to use" tone="white">
        <p>Copy a past-paper style question from your textbook or module guide and paste it above. If the case mentions stock, orders, lead time or forecasting, the classifier will suggest the most likely OM route.</p>
      </Card>
    </div>
  );
}
