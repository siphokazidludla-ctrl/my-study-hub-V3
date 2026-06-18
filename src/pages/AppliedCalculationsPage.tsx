import { Link, useParams } from 'react-router-dom';
import { LinkCard, PageHeading, Card, Badge, BulletList } from '../components/ui';
import { useModule } from './helpers';
import { OM_WORKED_EXAMPLES, getOMWorkedExampleByFormula, OM_FORMULAS, getOMFormula } from '../data/modules/om';

export default function AppliedCalculationsPage() {
  const { id, module } = useModule();
  const { formulaId } = useParams();

  const selectedFormula = formulaId ? getOMFormula(formulaId) : undefined;
  const selectedExample = formulaId ? getOMWorkedExampleByFormula(formulaId) : undefined;

  if (formulaId && selectedFormula && !selectedExample) {
    return (
      <div className="space-y-5">
        <PageHeading
          kicker={`${module.code} Worked Example`}
          title={`${selectedFormula.name} worked example`}
          sub="A formula card is available, but a verified worked example has not been added yet."
        />

        <Link to={`/${id}/applied-calculations`} className="text-sm font-medium text-[#3B1D6E] hover:underline">
          ← Back to all worked examples
        </Link>

        <Card title="Missing worked example" tone="gold">
          <p>
            The app has the formula explanation and calculator for this topic, but no step-by-step worked solution has been verified yet.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link
              to={`/${id}/formulas/${selectedFormula.id}`}
              className="rounded-full bg-[#3B1D6E] px-4 py-1.5 text-sm font-medium text-white hover:bg-[#2d1654]"
            >
              View formula
            </Link>
            <Link
              to={`/${id}/calculators/${selectedFormula.id}`}
              className="rounded-full border border-[#3B1D6E] px-4 py-1.5 text-sm font-medium text-[#3B1D6E] hover:bg-[#3B1D6E] hover:text-white"
            >
              Open calculator
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  if (formulaId && !selectedFormula) {
    return (
      <Card title="Worked example not found" tone="gold">
        <p>No OM formula or worked example is available for this ID.</p>
      </Card>
    );
  }

  if (formulaId && selectedFormula && selectedExample) {
    return (
      <div className="space-y-5">
        <PageHeading
          kicker={`${module.code} Worked Example`}
          title={selectedExample.title}
          sub={selectedExample.context}
        />

        <Link to={`/${id}/applied-calculations`} className="text-sm font-medium text-[#3B1D6E] hover:underline">
          ← Back to all worked examples
        </Link>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-4">
            <Card title="Question" tone="white">
              <p className="font-medium">{selectedExample.question}</p>
            </Card>

            <Card title="Given Data" tone="white">
              <div className="space-y-2">
                {selectedExample.givenData.map((data, i) => (
                  <div key={i} className="flex items-start gap-2 rounded-lg bg-slate-50 p-2">
                    <span className="font-medium text-slate-700">{data.label}:</span>
                    <span className="text-[#3B1D6E]">{data.value} {data.unit}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Step-by-step Solution">
              <div className="space-y-4">
                {selectedExample.solution.map((step) => (
                  <div key={step.step} className="border-l-4 border-[#3B1D6E] pl-4">
                    <p className="font-semibold text-slate-700">Step {step.step}</p>
                    <p className="text-slate-600">{step.description}</p>
                    {step.calculation && (
                      <div className="mt-1 rounded bg-slate-50 px-2 py-1 font-mono text-sm">
                        {step.calculation}
                      </div>
                    )}
                    {step.result && (
                      <p className="mt-1 font-medium text-[#3B1D6E]">{step.result}</p>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Final Answer" tone="gold">
              <p className="font-semibold text-lg">{selectedExample.finalAnswer}</p>
            </Card>

            <Card title="Interpretation">
              <p className="text-slate-700">{selectedExample.interpretation}</p>
            </Card>

            <Card title="Sanity Check">
              <p className="text-slate-600">{selectedExample.sanityCheck}</p>
            </Card>
          </div>

          <aside className="space-y-4">
            <Card title="Formula" tone="white">
              <div className="space-y-3">
                <div className="rounded-lg bg-slate-50 p-3 font-mono">
                  {selectedFormula.formula}
                </div>
                <div className="text-sm text-slate-600">
                  <p><strong>Category:</strong> {selectedFormula.category}</p>
                  <p><strong>Unit:</strong> {selectedFormula.unitName}</p>
                </div>
                <Link to={`/${id}/formulas/${selectedFormula.id}`} className="block text-sm text-[#3B1D6E] hover:underline">
                  View full formula details →
                </Link>
                <Link to={`/${id}/calculators/${selectedFormula.id}`} className="block text-sm text-[#3B1D6E] hover:underline">
                  Open calculator →
                </Link>
              </div>
            </Card>

            <Card title="Exam Tips">
              <BulletList items={selectedExample.examTips} />
            </Card>

            <Card title="Related Questions" tone="white">
              <div className="space-y-2">
                {selectedExample.relatedQuestions.map((q, i) => (
                  <div key={i} className="rounded-lg bg-slate-50 p-2 text-sm text-slate-700">
                    {q}
                  </div>
                ))}
              </div>
            </Card>

            <Card title="Common Mistakes" tone="gold">
              <BulletList items={selectedFormula.commonMistakes} />
            </Card>

            <Card title="Next Steps">
              <div className="space-y-2">
                <Link
                  to={`/${id}/exam-builder`}
                  className="block rounded-lg bg-[#3B1D6E] p-3 text-center text-white font-medium hover:bg-[#2d1654]"
                >
                  Build exam answer
                </Link>
                <Link
                  to={`/${id}/cases`}
                  className="block rounded-lg border border-slate-300 p-3 text-center font-medium text-slate-700 hover:bg-slate-50"
                >
                  Practice cases
                </Link>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <PageHeading kicker={`${module.code} Applied Calculations`} title="Worked Examples & Applied Calculations" sub="Step-by-step solutions for past paper calculations with exam tips." />

      <Card title="What this page provides" tone="white">
        <p>Each worked example takes you through a complete calculation problem from start to finish:</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge tone="gold">Step-by-step solutions</Badge>
          <Badge tone="gold">Given data clearly stated</Badge>
          <Badge tone="gold">Sanity checks</Badge>
          <Badge tone="gold">Exam tips</Badge>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {OM_WORKED_EXAMPLES.map((example) => {
          const formula = getOMFormula(example.formulaId);
          return (
            <Link
              key={example.id}
              to={`/${id}/applied-calculations/${example.formulaId}`}
              className="block rounded-lg border border-slate-200 p-4 hover:border-[#3B1D6E] hover:bg-slate-50"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <Badge>{formula?.category}</Badge>
                </div>
                <h3 className="font-semibold">{example.title}</h3>
                <p className="text-sm text-slate-600">{example.context}</p>
                <p className="mt-2 text-sm font-medium text-[#3B1D6E]">View worked solution →</p>
              </div>
            </Link>
          );
        })}
      </div>

      <Card title="Related study paths" tone="gold">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <LinkCard to={`/${id}/formulas`} eyebrow="Formula library" title="Browse formulas" text="Find formulas, variables and exam tips." tags={['Formulas']} />
          <LinkCard to={`/${id}/calculators`} eyebrow="Calculator hub" title="Use calculators" text="Interactive EOQ, productivity, capacity tools." tags={['Calculators']} />
          <LinkCard to={`/${id}/cases`} eyebrow="Case lab" title="Practice cases" text="Apply calculations to past paper scenarios." tags={['Cases']} />
          <LinkCard to={`/${id}/exam-builder`} eyebrow="Answer builder" title="Build answers" text="Turn calculations into exam paragraphs." tags={['Writing']} />
        </div>
      </Card>

      <Card title="How to use worked examples" tone="white">
        <BulletList
          items={[
            'Read the question and context to understand the scenario',
            'Study the given data - what values do you have?',
            'Follow each step, trying to work it out yourself first',
            'Check the sanity check to verify your result makes sense',
            'Use the exam tips to avoid common mistakes',
            'Try the related questions for extra practice',
          ]}
        />
      </Card>
    </div>
  );
}
