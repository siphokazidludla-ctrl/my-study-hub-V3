import { Link } from 'react-router-dom';
import { CASES, THEORIES } from '../data';
import { Card, PageHeading, BulletList, LinkCard, Badge } from '../components/ui';
import { useModule } from './helpers';
import { OM_CASES, OMCase } from '../data/modules/om';
import type { CaseStudy } from '../types';

export default function CasesPage() {
  const { id, module } = useModule();
  const cases = CASES.filter((c) => c.module === id);
  const omCases = id === 'om' ? OM_CASES : [];
  const allCases: (CaseStudy | OMCase)[] = id === 'om' ? [...cases, ...omCases] : cases;

  return (
    <div className="space-y-5">
      <PageHeading
        kicker={`${module.code} Case Analyzer`}
        title="Turn case clues into theory"
        sub="Use these case templates to practise diagnostic thinking before writing open-book answers."
      />

      <Card title="How to use cases" tone="gold">
        <BulletList
          items={[
            'Read the case scenario to understand the business context',
            'Identify key issues - what problems need to be solved?',
            'Link issues to relevant theories and formulas from the module',
            'Follow the step-by-step guide for structured analysis',
            'Use the exam paragraph as a model for your own answer',
            'Practice critical judgement - question assumptions and limitations',
          ]}
        />
      </Card>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {allCases.map((c) => {
          const caseId = c.id;
          const title = c.title;
          const scenario = 'scenario' in c ? c.scenario : '';
          const source = c.source;
          const keyIssues = c.keyIssues;
          const marks = 'marks' in c ? c.marks : undefined;
          const year = 'year' in c ? c.year : undefined;

          return (
            <Link
              key={caseId}
              to={`/${id}/cases/${caseId}`}
              className="block rounded-lg border border-slate-200 p-4 hover:border-[#3B1D6E] hover:bg-slate-50 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <Badge>Case study</Badge>
                  {marks && <Badge tone="gold">{marks} marks</Badge>}
                </div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <p className="text-sm text-slate-600 line-clamp-3">{scenario}</p>
                <div className="flex flex-wrap gap-2">
                  {keyIssues.slice(0, 3).map((issue, i) => (
                    <span key={i} className="text-xs text-slate-500 bg-slate-100 rounded-full px-2 py-0.5">
                      {issue}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-500">{source} {year ? `(${year})` : ''}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {allCases.length === 0 && (
        <Card title="No cases available">
          <p className="text-slate-600">No cases are available for this module yet.</p>
        </Card>
      )}

      {id === 'om' && (
        <Card title="OM Case Study Path">
          <div className="space-y-3">
            <p className="text-slate-600">
              For OM cases, follow this recommended study path:
            </p>
            <div className="grid gap-2 md:grid-cols-4 text-sm">
              <div className="rounded-lg bg-slate-50 p-3 text-center">
                <p className="font-semibold">1</p>
                <p className="text-slate-600">Classify the question</p>
                <Link to={`/${id}/question-classifier`} className="text-[#3B1D6E] hover:underline">Use classifier</Link>
              </div>
              <div className="rounded-lg bg-slate-50 p-3 text-center">
                <p className="font-semibold">2</p>
                <p className="text-slate-600">Identify formulas needed</p>
                <Link to={`/${id}/formulas`} className="text-[#3B1D6E] hover:underline">Browse formulas</Link>
              </div>
              <div className="rounded-lg bg-slate-50 p-3 text-center">
                <p className="font-semibold">3</p>
                <p className="text-slate-600">Work through calculations</p>
                <Link to={`/${id}/calculators`} className="text-[#3B1D6E] hover:underline">Use calculators</Link>
              </div>
              <div className="rounded-lg bg-slate-50 p-3 text-center">
                <p className="font-semibold">4</p>
                <p className="text-slate-600">Build your answer</p>
                <Link to={`/${id}/exam-builder`} className="text-[#3B1D6E] hover:underline">Exam builder</Link>
              </div>
            </div>
          </div>
        </Card>
      )}

      {id !== 'om' && cases.map((c) => (
        <Card key={c.id} title={c.title} tone="white">
          <p>{c.scenario}</p>
          <p className="text-xs text-[#6B6580]">{c.source}</p>
          <div className="grid gap-4 md:grid-cols-2 mt-4">
            <div>
              <p className="font-bold">Key issues</p>
              <BulletList items={c.keyIssues} />
            </div>
            <div>
              <p className="font-bold">Diagnostic questions</p>
              <BulletList items={c.diagnosticQuestions} />
            </div>
          </div>
          <div>
            <p className="font-bold">Relevant theories</p>
            <div className="grid gap-2 md:grid-cols-2">
              {c.relevantTheoryIds.map((tid) => {
                const t = THEORIES.find((x) => x.id === tid);
                return t ? (
                  <LinkCard key={tid} to={`/${id}/theories/${tid}`} title={t.name} eyebrow={t.category} />
                ) : (
                  <Badge key={tid}>{tid}</Badge>
                );
              })}
            </div>
          </div>
          <div>
            <p className="font-bold">Example analysis</p>
            <BulletList items={c.exampleAnalysis} />
          </div>
          <div>
            <p className="font-bold">Common mistakes</p>
            <BulletList items={c.commonMistakes} />
          </div>
        </Card>
      ))}
    </div>
  );
}
