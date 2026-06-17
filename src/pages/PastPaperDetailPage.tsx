import { Link, useParams } from "react-router-dom";
import { Card, PageHeading, Badge, BulletList } from "../components/ui";
import { getPastPaper } from "../data/pastPapers";
import { useModule } from "./helpers";

export default function PastPaperDetailPage() {
  const { id } = useModule();
  const { paperId } = useParams();

  const paper = paperId ? getPastPaper(paperId) : undefined;

  if (!paper) {
    return (
      <Card title="Paper not found">
        <p>Check the link or return to the past papers hub.</p>
        <Link
          to={`/${id}/past-papers`}
          className="mt-3 inline-flex rounded-full bg-[#3B1D6E] px-4 py-2 text-sm font-bold text-white"
        >
          Back to Past Papers
        </Link>
      </Card>
    );
  }

  return (
    <div className="space-y-5">
      <PageHeading
        kicker={`${id.toUpperCase()} Past Paper`}
        title={paper.title}
        sub={paper.sourceStatus}
      />

      <Card title="Case study summary" tone="white">
        <div className="space-y-3">
          <p className="text-sm text-[#564E6C]">{paper.caseSummary}</p>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#9A93AD]">
              Key business problem
            </p>
            <p className="text-sm text-[#564E6C]">{paper.keyProblem}</p>
          </div>

          {paper.keyFacts?.length > 0 && (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#9A93AD]">
                Key facts
              </p>
              <BulletList items={paper.keyFacts} />
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            <Badge tone="gold">{paper.totalMarks} marks</Badge>
            <Badge tone="mist">{paper.frequency} frequency</Badge>
            {paper.saContext && <Badge tone="mist">SA context</Badge>}
          </div>
        </div>
      </Card>

      {paper.questions.map((q: any) => (
        <Card
          key={q.id}
          title={`${q.number} (${q.marks} marks)`}
          tone="white"
          right={<Badge tone="gold">Section {q.section}</Badge>}
        >
          <div className="space-y-4">
            <p className="font-semibold text-[#241349]">{q.prompt}</p>

            {q.commandWords?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {q.commandWords.map((w: string) => (
                  <Link key={w} to="/command-words">
                    <Badge tone="mist">{w}</Badge>
                  </Link>
                ))}
              </div>
            )}

            {q.relevantUnits?.length > 0 && (
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#9A93AD]">
                  Relevant units
                </p>
                <BulletList items={q.relevantUnits} />
              </div>
            )}

            {q.recommendedTheories?.length > 0 && (
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#9A93AD]">
                  Recommended theories/frameworks
                </p>
                <div className="flex flex-wrap gap-2">
                  {q.recommendedTheories.map((t: string) => (
                    <Badge key={t} tone="gold">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {q.answerPlan?.length > 0 && (
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#9A93AD]">
                  Answer plan
                </p>
                <BulletList items={q.answerPlan} />
              </div>
            )}

            {q.workedSolution && (
              <details className="rounded-2xl border border-[#E6E1F2] bg-[#FBF7EC] p-4">
                <summary className="cursor-pointer font-bold text-[#3B1D6E]">
                  Worked solution
                </summary>
                <div className="mt-3 whitespace-pre-wrap text-sm leading-7 text-[#564E6C]">
                  {q.workedSolution}
                </div>
              </details>
            )}

            {q.markingLogic?.length > 0 && (
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#9A93AD]">
                  Marking logic
                </p>
                <BulletList items={q.markingLogic} />
              </div>
            )}

            {q.commonMistakes?.length > 0 && (
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#9A93AD]">
                  Common mistakes
                </p>
                <BulletList items={q.commonMistakes} />
              </div>
            )}

            {q.paragraphStructure && (
              <div className="rounded-2xl border border-[#E6E1F2] bg-white p-3">
                <p className="text-xs font-bold uppercase tracking-wider text-[#9A93AD]">
                  Suggested paragraph structure
                </p>
                <p className="text-sm text-[#564E6C]">{q.paragraphStructure}</p>
              </div>
            )}
          </div>
        </Card>
      ))}

      <Link
        to={`/${id}/past-papers`}
        className="inline-flex rounded-full border border-[#D9D2EC] bg-white px-4 py-2 text-sm font-bold text-[#3B1D6E]"
      >
        Back to Past Papers
      </Link>
    </div>
  );
}
