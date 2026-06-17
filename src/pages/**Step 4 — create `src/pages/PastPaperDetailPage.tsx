import { useParams, Link } from "react-router-dom";
import { getPastPaper } from "../data/pastPapers";
import { Card, PageHeading, Badge, BulletList } from "../components/ui";
import { useModule } from "./helpers";

export default function PastPaperDetailPage() {
  const { id } = useModule();
  const { paperId } = useParams();
  const paper = paperId ? getPastPaper(paperId) : undefined;
  if (!paper) return <Card title="Paper not found">Check the link.</Card>;
  return (
    <div className="space-y-5">
      <PageHeading kicker={`${id.toUpperCase()} Past Paper`} title={paper.title}
        sub={paper.sourceStatus} />
      <Card title="Case summary" tone="white">
        <p>{paper.caseSummary}</p>
        <p><strong>Key problem:</strong> {paper.keyProblem}</p>
        <BulletList items={paper.keyFacts} />
      </Card>
      {paper.questions.map((q) => (
        <Card key={q.id} title={`${q.number} (${q.marks} marks)`} tone="white"
          right={<Badge tone="gold">Section {q.section}</Badge>}>
          <div className="flex flex-wrap gap-2">
            {q.commandWords.map((w) => (
              <Link key={w} to={`/command-words`}><Badge>{w}</Badge></Link>
            ))}
          </div>
          <p>{q.prompt}</p>
          <p><strong>Answer plan</strong></p>
          <BulletList items={q.answerPlan} />
          {q.workedSolution && (
            <details><summary>Worked solution</summary>
              <div className="whitespace-pre-wrap">{q.workedSolution}</div>
            </details>
          )}
          <p><strong>Marking logic</strong></p>
          <BulletList items={q.markingLogic} />
          <p><strong>Common mistakes</strong></p>
          <BulletList items={q.commonMistakes} />
          <p className="text-sm"><strong>Structure:</strong> {q.paragraphStructure}</p>
        </Card>
      ))}
    </div>
  );
}
