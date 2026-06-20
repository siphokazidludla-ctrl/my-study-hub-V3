import { Link, useParams } from "react-router-dom";
import {
  Badge,
  BulletList,
  ClickCard,
  EmptyState,
  PageHeading,
  SectionCard,
  SourceStatus,
} from "../components/ui";
import { getOBWorkedSolution, OB_SOURCE_STATUS, theories } from "../data";

export default function PastPaperDetailPage() {
  const { paperId } = useParams<{ paperId: string }>();
  const solution = getOBWorkedSolution(paperId ?? "");

  if (!solution) {
    return (
      <EmptyState
        title="Worked solution not found"
        details="This OB worked-solution ID does not match the current ORB801 bank."
        action={<Link to="/ob/past-papers" className="font-bold text-[#3B1D6E]">Back to past papers</Link>}
      />
    );
  }

  const relatedTheories = solution.relatedTheoryIds
    .map((id) => theories.find((t) => t.id === id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <div className="space-y-5">
      <Link
        to="/ob/past-papers"
        className="inline-flex items-center gap-2 rounded-full border border-[#D9D2EC] bg-white px-4 py-2 text-sm font-bold text-[#3B1D6E] shadow-sm transition hover:border-[#C9A24B] hover:text-[#7A5E12]"
      >
        <span className="text-base">{"<"}</span> Past papers
      </Link>

      <PageHeading
        kicker={`${solution.hub} worked solution`}
        title={solution.title}
        sub={solution.source}
      />

      <SourceStatus>{OB_SOURCE_STATUS}</SourceStatus>

      <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <SectionCard
          title="Question"
          tone="gold"
          right={<Badge tone="solid">{solution.commandWord}</Badge>}
        >
          <p className="text-[#564E6C]">{solution.question}</p>
        </SectionCard>

        <SectionCard title="Answer plan" tone="white">
          <BulletList items={solution.answerPlan} tone="gold" />
        </SectionCard>
      </div>

      <SectionCard title="Model answer" tone="white">
        <div className="space-y-5">
          {solution.modelAnswer.map((block, index) => (
            <div key={index} className="space-y-2">
              {block.heading && (
                <h3 className="font-display text-lg font-semibold text-[#241349]">
                  {block.heading}
                </h3>
              )}

              {block.body && <p className="text-sm leading-relaxed text-[#564E6C]">{block.body}</p>}

              {block.bullets && <BulletList items={block.bullets} />}

              {block.table && (
                <div className="overflow-x-auto rounded-2xl border border-[#E6E1F2]">
                  <table className="w-full min-w-[520px] border-collapse bg-white text-sm">
                    <thead className="bg-[#F4F1FA] text-[#241349]">
                      <tr>
                        {block.table.headers.map((header) => (
                          <th key={header} className="border-b border-[#E6E1F2] px-4 py-3 text-left font-extrabold">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.table.rows.map(([left, right]) => (
                        <tr key={`${left}-${right}`} className="border-b border-[#E6E1F2] last:border-b-0">
                          <td className="px-4 py-3 text-[#564E6C]">{left}</td>
                          <td className="px-4 py-3 text-[#564E6C]">{right}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      </SectionCard>

      <div className="grid gap-4 lg:grid-cols-2">
        <SectionCard title="Common student mistakes" tone="gold">
          <BulletList items={solution.commonMistakes} tone="gold" />
        </SectionCard>

        <SectionCard title="Examiner is looking for" tone="mist">
          <BulletList items={solution.examinerLooksFor} />
        </SectionCard>
      </div>

      {relatedTheories.length > 0 && (
        <SectionCard
          title="Linked theory cards"
          tone="white"
          right={<Badge tone="mist">{relatedTheories.length} theories</Badge>}
        >
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {relatedTheories.map((theory) => (
              <ClickCard
                key={theory.id}
                eyebrow={theory.unit}
                title={theory.name}
                blurb={theory.summary}
                tags={[theory.category, theory.level]}
                to={`/ob/theories/${theory.id}`}
                accent={theory.level === "System" ? "gold" : "royal"}
              />
            ))}
          </div>
        </SectionCard>
      )}
    </div>
  );
}
