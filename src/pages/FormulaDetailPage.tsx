import { Link, useParams } from 'react-router-dom';
import { Card, PageHeading, Badge, BulletList, LinkCard } from '../components/ui';
import { useModule } from './helpers';
import { getFormula, getFormulaUnit, getFormulaConcepts, getFormulaCases } from '../data/formulas';

export default function FormulaDetailPage() {
  const { id } = useModule();
  const { formulaId } = useParams();
  const formula = getFormula(formulaId ?? '');

  if (!formula) {
    return <Card title="Formula not found">No formula details are available for this ID.</Card>;
  }

  const unit = getFormulaUnit(formula.id);
  const concepts = getFormulaConcepts(formula.id);
  const cases = getFormulaCases(formula.id);

  return (
    <div className="space-y-5">
      <PageHeading kicker="Formula detail" title={formula.name} sub={formula.description} />
      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <section className="space-y-4">
          <Card title="Formula card">
            <div className="space-y-3">
              <p className="font-semibold">Equation</p>
              <p>{formula.formula}</p>
              <p className="font-semibold">Plain-English meaning</p>
              <p>{formula.description}</p>
              <p className="font-semibold">Variables explained</p>
              <BulletList items={formula.variables} />
              <p className="font-semibold">Worked example question</p>
              <p>{formula.exampleQuestion}</p>
              <p className="font-semibold">Exam interpretation sentence</p>
              <p>{formula.examSentence}</p>
              <p className="font-semibold">Common mistakes</p>
              <BulletList items={formula.commonMistakes} />
            </div>
          </Card>

          <Card title="Related study links" tone="white">
            <div className="space-y-3">
              {unit && (
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
              {cases.length > 0 && (
                <div className="space-y-2">
                  <h3 className="font-semibold">Related case examples</h3>
                  {cases.map((c) => (
                    <LinkCard
                      key={c.id}
                      to={`/${id}/cases/${c.id}`}
                      eyebrow="Past paper case"
                      title={c.title}
                      text={c.scenario}
                      tags={['Case lab']}
                    />
                  ))}
                </div>
              )}
            </div>
          </Card>
        </section>

        <aside className="space-y-4">
          <Card title="Quick actions" tone="gold">
            <LinkCard to={`/${id}/calculators`} eyebrow="Calculator hub" title="Open the calculator library" text="Use formula-specific calculators for EOQ, MAD, forecasting and capacity." tags={['Calculator']} />
            <LinkCard to={`/${id}/applied-calculations`} eyebrow="Applied calculations" title="See formula-to-unit pathways" text="Explore how formulas connect to units, concepts and cases." tags={['Applied']} />
            <LinkCard to={`/${id}/exam-builder`} eyebrow="Answer builder" title="Build exam paragraphs" text="Turn your calculation findings into a structured postgraduate answer." tags={['Writing']} />
          </Card>
        </aside>
      </div>
      <Link className="font-bold text-[#3B1D6E]" to={`/${id}/formulas`}>← Back to formula library</Link>
    </div>
  );
}
