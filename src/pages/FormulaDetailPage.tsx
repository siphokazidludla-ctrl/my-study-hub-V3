import { Link, useParams } from 'react-router-dom';
import { Card, PageHeading, Badge, BulletList, LinkCard } from '../components/ui';
import { useModule } from './helpers';
import { getFormula, getFormulaUnit, getFormulaConcepts, getFormulaCases } from '../data/formulas';
import { getOMFormula, getOMWorkedExampleByFormula, getOMCasesByFormula, OM_FORMULAS } from '../data/modules/om';

export default function FormulaDetailPage() {
  const { id } = useModule();
  const { formulaId } = useParams();
  const formula = getFormula(formulaId ?? '');
  const omFormula = id === 'om' ? getOMFormula(formulaId ?? '') : undefined;

  const displayFormula = omFormula || formula;

  if (!displayFormula) {
    return <Card title="Formula not found">No formula details are available for this ID.</Card>;
  }

  const unit = formula ? getFormulaUnit(formula.id) : omFormula ? { id: omFormula.unitId, number: parseInt(omFormula.unitId.replace('om-', '')), title: omFormula.unitName, plain: '' } : undefined;
  const concepts = formula ? getFormulaConcepts(formula.id) : [];
  const cases = formula ? getFormulaCases(formula.id) : (omFormula ? [] : []);
  const omCases = omFormula ? getOMCasesByFormula(omFormula.id) : [];
  const workedExample = omFormula ? getOMWorkedExampleByFormula(omFormula.id) : undefined;

  const allRelatedCases = [...cases, ...omCases];

  return (
    <div className="space-y-5">
      <PageHeading kicker="Formula detail" title={displayFormula.name} sub={'description' in displayFormula ? displayFormula.description : displayFormula.plainMeaning} />

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <section className="space-y-4">
          <Card title="Formula card">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-slate-500">Equation</p>
                <div className="mt-1 rounded-lg bg-slate-50 p-4 font-mono text-lg">
                  {displayFormula.formula}
                </div>
              </div>

              {'plainMeaning' in displayFormula && displayFormula.plainMeaning && (
                <div>
                  <p className="text-sm font-medium text-slate-500">Plain-English meaning</p>
                  <p className="mt-1 text-slate-700">{displayFormula.plainMeaning}</p>
                </div>
              )}

              {'description' in displayFormula && displayFormula.description && (
                <div>
                  <p className="text-sm font-medium text-slate-500">Description</p>
                  <p className="mt-1 text-slate-700">{displayFormula.description}</p>
                </div>
              )}

              <div>
                <p className="text-sm font-medium text-slate-500">Variables explained</p>
                <div className="mt-2">
                  {'variables' in displayFormula && Array.isArray(displayFormula.variables) && displayFormula.variables.length > 0 && typeof displayFormula.variables[0] === 'string' ? (
                    <BulletList items={displayFormula.variables as string[]} />
                  ) : (
                    <div className="space-y-1">
                      {(displayFormula.variables as { symbol: string; name: string; unit: string }[]).map((v) => (
                        <div key={v.symbol} className="flex items-start gap-2 text-sm">
                          <span className="font-mono font-medium text-[#3B1D6E]">{v.symbol}</span>
                          <span className="text-slate-600">= {v.name} ({v.unit})</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {'examSentence' in displayFormula && displayFormula.examSentence && (
                <div>
                  <p className="text-sm font-medium text-slate-500">Exam interpretation sentence</p>
                  <p className="mt-1 text-slate-700">{displayFormula.examSentence}</p>
                </div>
              )}

              {'commonMistakes' in displayFormula && displayFormula.commonMistakes && (
                <div>
                  <p className="text-sm font-medium text-slate-500">Common mistakes</p>
                  <div className="mt-2 rounded-lg bg-red-50 p-3">
                    <BulletList items={displayFormula.commonMistakes} />
                  </div>
                </div>
              )}
            </div>
          </Card>

          {'howToApply' in displayFormula && displayFormula.howToApply && (
            <Card title="Step-by-step application" tone="white">
              <ol className="list-decimal space-y-2 pl-5">
                {displayFormula.howToApply.map((step, i) => (
                  <li key={i} className="text-slate-700">{step}</li>
                ))}
              </ol>
            </Card>
          )}

          {'whenToUse' in displayFormula && displayFormula.whenToUse && (
            <Card title="When to use this formula" tone="white">
              <BulletList items={displayFormula.whenToUse} />
            </Card>
          )}

          {'whenNotToUse' in displayFormula && displayFormula.whenNotToUse && (
            <Card title="When not to use without adjustment" tone="gold">
              <BulletList items={displayFormula.whenNotToUse} />
            </Card>
          )}

          {workedExample && (
            <Card title="Worked example" tone="gold">
              <div className="space-y-3">
                <p className="font-medium">{workedExample.title}</p>
                <p className="text-sm text-slate-600">{workedExample.question}</p>
                <Link
                  to={`/${id}/applied-calculations/${displayFormula.id}`}
                  className="inline-block rounded-full bg-[#3B1D6E] px-4 py-1.5 text-sm font-medium text-white hover:bg-[#2d1654]"
                >
                  View full worked solution
                </Link>
              </div>
            </Card>
          )}

          {'exampleQuestion' in displayFormula && displayFormula.exampleQuestion && (
            <Card title="Example question">
              <p className="text-slate-700">{displayFormula.exampleQuestion}</p>
            </Card>
          )}

          <Card title="Related study links" tone="white">
            <div className="space-y-3">
              {unit && 'plain' in unit && unit.plain && (
                <LinkCard
                  to={`/${id}/units/${unit.id}`}
                  eyebrow={`Unit ${unit.number}`}
                  title={unit.title}
                  text={unit.plain}
                  tags={['Unit link']}
                />
              )}
              {concepts.length > 0 && (
                <div className="space-y-2">
                  <h3 className="font-semibold">Related concepts</h3>
                  {concepts.map((concept) => (
                    <LinkCard
                      key={concept.id}
                      to={`/${id}/concepts/${concept.id}`}
                      eyebrow={concept.category}
                      title={concept.name}
                      text={concept.plain}
                      tags={['Concept']}
                    />
                  ))}
                </div>
              )}
              {allRelatedCases.length > 0 && (
                <div className="space-y-2">
                  <h3 className="font-semibold">Related case examples</h3>
                  {allRelatedCases.slice(0, 3).map((c, idx) => {
                    const cId = 'id' in c ? c.id : '';
                    const cTitle = 'title' in c ? c.title : '';
                    const cScenario = 'scenario' in c ? c.scenario : '';
                    return (
                      <LinkCard
                        key={cId || idx}
                        to={`/${id}/cases/${cId}`}
                        eyebrow="Past paper case"
                        title={cTitle}
                        text={cScenario}
                        tags={['Case lab']}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </Card>
        </section>

        <aside className="space-y-4">
          <Card title="Quick actions" tone="gold">
            <div className="space-y-2">
              {id === 'om' && (
                <>
                  <Link
                    to={`/${id}/calculators/${displayFormula.id}`}
                    className="block rounded-lg border border-[#3B1D6E] p-3 hover:bg-slate-50"
                  >
                    <p className="font-semibold text-[#3B1D6E]">Open calculator</p>
                    <p className="text-sm text-slate-600">Use the interactive calculator for this formula</p>
                  </Link>
                  <Link
                    to={`/${id}/applied-calculations/${displayFormula.id}`}
                    className="block rounded-lg border border-slate-300 p-3 hover:bg-slate-50"
                  >
                    <p className="font-semibold text-slate-700">See worked examples</p>
                    <p className="text-sm text-slate-600">Step-by-step past paper solutions</p>
                  </Link>
                </>
              )}
              <Link
                to={`/${id}/exam-builder`}
                className="block rounded-lg border border-slate-300 p-3 hover:bg-slate-50"
              >
                <p className="font-semibold text-slate-700">Build exam answer</p>
                <p className="text-sm text-slate-600">Turn calculations into structured paragraphs</p>
              </Link>
            </div>
          </Card>

          {'relatedFormulas' in displayFormula && displayFormula.relatedFormulas && displayFormula.relatedFormulas.length > 0 && (
            <Card title="Related formulas">
              <div className="space-y-2">
                {displayFormula.relatedFormulas.map((relId) => {
                  const related = OM_FORMULAS.find((f) => f.id === relId);
                  if (!related) return null;
                  return (
                    <Link
                      key={relId}
                      to={`/${id}/formulas/${relId}`}
                      className="block rounded-lg bg-slate-50 p-2 text-sm hover:bg-slate-100"
                    >
                      {related.name}
                    </Link>
                  );
                })}
              </div>
            </Card>
          )}
        </aside>
      </div>

      <div className="flex gap-4">
        <Link className="font-bold text-[#3B1D6E]" to={`/${id}/formula-library`}>
          ← Back to formula library
        </Link>
        {id === 'om' && (
          <Link className="font-bold text-slate-500" to={`/${id}/calculators`}>
            Go to calculator hub →
          </Link>
        )}
      </div>
    </div>
  );
}
