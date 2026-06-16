import { Link } from "react-router-dom";
import { PageHeading, SectionCard, Badge, BulletList, ClickCard } from "../components/ui";
import { theories, pastPaperPatterns } from "../data";

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