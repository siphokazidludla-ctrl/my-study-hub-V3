import { Link } from "react-router-dom";
import { PageHeading, SectionCard, Badge, BulletList, ClickCard, SourceStatus } from "../components/ui";
import {
  OB_EXAM_STRATEGY,
  OB_PAST_PAPER_THEMES,
  OB_SOURCE_STATUS,
  OB_WORKED_SOLUTIONS,
  theories,
  pastPaperPatterns,
} from "../data";

function getTheoryName(id: string) {
  return theories.find((t) => t.id === id)?.name ?? id;
}

export default function PastPapersPage() {
  return (
    <div className="space-y-5">
      <PageHeading
        kicker="Past Paper Pattern Finder"
        title="Exam patterns, theory links and common mistakes"
        sub="Use this page to see which theories repeatedly appear in past questions and how to answer them."
      />

      <SectionCard title="Need help with command words?" tone="gold">
        <p className="text-sm text-[#564E6C]">
          Open the command word guide to see what each instruction means, how to structure your answer,
          and examples of academic paragraphs.
        </p>
        <Link
          to="/ob/command-words"
          className="inline-flex rounded-full bg-[#3B1D6E] px-4 py-2 text-sm font-bold text-white"
        >
          Open Command Word Decoder
        </Link>
      </SectionCard>

      <SourceStatus>{OB_SOURCE_STATUS}</SourceStatus>

      <SectionCard title="Frequency map from uploaded ORB papers" tone="white">
        <div className="overflow-x-auto rounded-2xl border border-[#E6E1F2]">
          <table className="w-full min-w-[720px] border-collapse bg-white text-sm">
            <thead className="bg-[#F4F1FA] text-[#241349]">
              <tr>
                <th className="border-b border-[#E6E1F2] px-4 py-3 text-left font-extrabold">Theme</th>
                <th className="border-b border-[#E6E1F2] px-4 py-3 text-left font-extrabold">How often</th>
                <th className="border-b border-[#E6E1F2] px-4 py-3 text-left font-extrabold">Typical command words</th>
                <th className="border-b border-[#E6E1F2] px-4 py-3 text-left font-extrabold">Yield</th>
              </tr>
            </thead>
            <tbody>
              {OB_PAST_PAPER_THEMES.map((theme) => (
                <tr key={theme.theme} className="border-b border-[#E6E1F2] last:border-b-0">
                  <td className="px-4 py-3 font-semibold text-[#241349]">{theme.theme}</td>
                  <td className="px-4 py-3 text-[#564E6C]">{theme.frequency}</td>
                  <td className="px-4 py-3 text-[#564E6C]">{theme.commandWords}</td>
                  <td className="px-4 py-3">
                    <Badge tone={theme.yield === "Very high" ? "gold" : "mist"}>{theme.yield}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionCard>

      <SectionCard title="Strategy that follows from the data" tone="gold">
        <p className="text-sm text-[#564E6C]">{OB_EXAM_STRATEGY}</p>
      </SectionCard>

      <SectionCard
        title="Worked model answers"
        tone="white"
        right={<Badge tone="mist">{OB_WORKED_SOLUTIONS.length} solutions</Badge>}
      >
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {OB_WORKED_SOLUTIONS.map((solution) => (
            <ClickCard
              key={solution.id}
              eyebrow={solution.hub}
              title={solution.title}
              blurb={solution.question}
              tags={[solution.commandWord, `${solution.answerPlan.length} answer-plan steps`]}
              to={`/ob/past-papers/${solution.id}`}
              accent={solution.hub === "Change" || solution.hub === "Conflict" ? "gold" : "royal"}
            />
          ))}
        </div>
      </SectionCard>

      {pastPaperPatterns.map((pattern: any) => (
        <SectionCard
          key={pattern.id}
          title={pattern.title}
          tone="white"
          right={
            <Badge tone="mist">
              {pattern.frequencyAcrossPapers
                ? `${pattern.frequencyAcrossPapers} papers`
                : pattern.year ?? "Pattern"}
            </Badge>
          }
        >
          {"questions" in pattern ? (
            <div className="space-y-4">
              {pattern.questions.map((q: any, qi: number) => (
                <div key={qi} className="rounded-2xl border border-[#E6E1F2] bg-[#FBF7EC] p-3">
                  <div className="mb-2 flex flex-wrap gap-2">
                    <Badge tone="gold">{q.command}</Badge>
                    <Badge tone="mist">{q.hub}</Badge>
                  </div>

                  <p className="mb-3 font-semibold text-[#241349]">{q.q}</p>

                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#9A93AD]">
                    Required theories
                  </p>

                  <div className="grid gap-2 md:grid-cols-2">
                    {q.theories.map((tid: string) => {
                      const t = theories.find((x) => x.id === tid);
                      return t ? (
                        <ClickCard
                          key={t.id}
                          eyebrow={t.unit}
                          title={t.name}
                          tags={[t.level]}
                          to={`/ob/theories/${t.id}`}
                        />
                      ) : (
                        <Badge key={tid} tone="mist">{tid}</Badge>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge tone="gold">{pattern.commandWord}</Badge>
                <Badge tone="mist">{pattern.topicArea}</Badge>
                <Badge tone="mist">{pattern.difficulty}</Badge>
              </div>

              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#9A93AD]">
                  Linked theories
                </p>
                <div className="grid gap-2 md:grid-cols-2">
                  {(pattern.theories ?? []).map((tid: string) => {
                    const t = theories.find((x) => x.id === tid);
                    return t ? (
                      <ClickCard
                        key={t.id}
                        eyebrow={t.unit}
                        title={t.name}
                        tags={[t.level]}
                        to={`/ob/theories/${t.id}`}
                      />
                    ) : (
                      <Badge key={tid} tone="mist">{getTheoryName(tid)}</Badge>
                    );
                  })}
                </div>
              </div>

              {pattern.commonMistakes?.length > 0 && (
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#9A93AD]">
                    Common mistakes
                  </p>
                  <BulletList tone="gold" items={pattern.commonMistakes} />
                </div>
              )}

              {pattern.caseExamples?.length > 0 && (
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#9A93AD]">
                    Past-paper examples
                  </p>
                  <BulletList tone="royal" items={pattern.caseExamples} />
                </div>
              )}

              {pattern.answerStructure?.length > 0 && (
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#9A93AD]">
                    Answer structure
                  </p>
                  <BulletList tone="gold" items={pattern.answerStructure} />
                </div>
              )}

              <p className="text-xs text-[#9A93AD]">{pattern.sourceStatus}</p>
            </div>
          )}
        </SectionCard>
      ))}

      <SectionCard title="Exam strategy" tone="gold">
        <BulletList
          tone="gold"
          items={[
            "Do not theory dump: apply every theory to a specific case fact.",
            "For 'critically discuss', include strengths and limitations.",
            "For 'evaluate', make a final judgement.",
            "For 'recommend', give practical actions linked to theory.",
            "Use 2-3 theories deeply rather than listing many theories briefly.",
          ]}
        />
      </SectionCard>
    </div>
  );
}
