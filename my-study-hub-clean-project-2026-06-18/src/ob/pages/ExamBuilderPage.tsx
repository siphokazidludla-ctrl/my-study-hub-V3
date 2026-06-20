import { useState } from "react";
import { PageHeading, SectionCard, Badge, BulletList, TextArea, EmptyState } from "../components/ui";
import { theories, hubs } from "../data";

const COMMAND_WORDS = [
  "Apply",
  "Discuss",
  "Critically discuss",
  "Analyse",
  "Evaluate",
  "Recommend",
  "Explain",
  "Critically discuss and apply",
  "Critically discuss and recommend",
  "Distinguish and recommend",
] as const;

const ANSWER_SECTIONS = [
  { key: "intro", label: "Introduction" },
  { key: "theory", label: "Theory explanation" },
  { key: "case", label: "Case application" },
  { key: "critical", label: "Critical analysis" },
  { key: "recommend", label: "Recommendation" },
  { key: "conclusion", label: "Conclusion" },
] as const;

type SectionKey = (typeof ANSWER_SECTIONS)[number]["key"];

function generateDraft(
  question: string,
  command: string,
  selectedTheories: typeof theories,
  activeSections: Set<SectionKey>
): string {
  const lines: string[] = [];

  if (activeSections.has("intro")) {
    lines.push(`INTRODUCTION`);
    lines.push(`This answer addresses the question: "${question || "[paste your exam question here]"}"`);
    if (command) lines.push(`Command word: ${command} — see command word decoder for what this requires.`);
    lines.push(`Theories applied: ${selectedTheories.map((t) => t.name).join(", ")}.`);
    lines.push("");
  }

  selectedTheories.forEach((t) => {
    if (activeSections.has("theory")) {
      lines.push(`THEORY: ${t.name.toUpperCase()}`);
      lines.push(`${t.summary}`);
      lines.push(`Key concepts: ${t.concepts.join("; ")}.`);
      lines.push("");
    }

    if (activeSections.has("case")) {
      lines.push(`CASE APPLICATION — ${t.name}`);
      lines.push(`${t.paragraphTemplate}`);
      lines.push("");
    }

    if (activeSections.has("critical")) {
      lines.push(`CRITICAL ANALYSIS — ${t.name}`);
      lines.push(`Strengths: ${t.strengths.join("; ")}.`);
      lines.push(`Limitations: ${t.limitations.join("; ")}.`);
      lines.push(`Comparisons: ${t.comparisons.join("; ")}.`);
      lines.push("");
    }

    if (activeSections.has("recommend")) {
      lines.push(`RECOMMENDATION — ${t.name}`);
      t.recommendations.forEach((r) => lines.push(`• ${r}`));
      lines.push("");
    }
  });

  if (activeSections.has("conclusion")) {
    lines.push(`CONCLUSION`);
    lines.push(`In summary, ${selectedTheories.map((t) => t.name).join(" and ")} explain the case because [synthesise your argument]. The most important recommendation is [choose your strongest recommendation], supported by [name the theory and case fact].`);
  }

  return lines.join("\n");
}

export default function ExamBuilderPage() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [question, setQuestion] = useState("");
  const [command, setCommand] = useState("");
  const [hubFilter, setHubFilter] = useState("");
  const [activeSections, setActiveSections] = useState<Set<SectionKey>>(
    new Set(["intro", "theory", "case", "critical", "recommend", "conclusion"])
  );

  const filteredTheories = hubFilter
    ? theories.filter((t) => t.hub === hubFilter)
    : theories;

  const selectedTheories = selectedIds
    .map((id) => theories.find((t) => t.id === id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const toggleTheory = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id].slice(0, 5)
    );
  };

  const toggleSection = (key: SectionKey) => {
    setActiveSections((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const essayDraft = selectedTheories.length > 0
    ? generateDraft(question, command, selectedTheories, activeSections)
    : "";

  return (
    <div className="space-y-5">
      <PageHeading
        kicker="Exam Builder"
        title="Build a structured exam answer"
        sub="Paste your question, select the command word and 2-3 best-fit theories, then generate a draft answer structure."
      />

      <SectionCard title="Your exam question" tone="white">
        <TextArea
          value={question}
          onChange={setQuestion}
          placeholder="Type or paste the exam question here..."
          rows={3}
        />
        <div className="mt-3">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#9A93AD]">Command word</p>
          <div className="flex flex-wrap gap-2">
            {COMMAND_WORDS.map((cw) => (
              <button
                key={cw}
                onClick={() => setCommand(cw)}
                className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                  command === cw
                    ? "bg-[#3B1D6E] text-white"
                    : "border border-[#D9D2EC] bg-white text-[#3B1D6E] hover:border-[#C9A24B]"
                }`}
              >
                {cw}
              </button>
            ))}
          </div>
        </div>
      </SectionCard>

      <SectionCard
        title="Select theories for your answer"
        tone="white"
        right={<Badge tone="solid">{selectedIds.length}/5 selected</Badge>}
      >
        <div className="mb-3">
          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#9A93AD]">Filter by topic area</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setHubFilter("")}
              className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                !hubFilter
                  ? "bg-[#3B1D6E] text-white"
                  : "border border-[#D9D2EC] bg-white text-[#3B1D6E] hover:border-[#C9A24B]"
              }`}
            >
              All
            </button>
            {hubs.map((h) => (
              <button
                key={h.id}
                onClick={() => setHubFilter(h.id)}
                className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                  hubFilter === h.id
                    ? "bg-[#3B1D6E] text-white"
                    : "border border-[#D9D2EC] bg-white text-[#3B1D6E] hover:border-[#C9A24B]"
                }`}
              >
                {h.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {filteredTheories.map((t) => {
            const isSelected = selectedIds.includes(t.id);
            return (
              <button
                key={t.id}
                onClick={() => toggleTheory(t.id)}
                className={`relative flex w-full flex-col items-start gap-1 overflow-hidden rounded-3xl border p-3 text-left transition ${
                  isSelected
                    ? "border-[#C9A24B] bg-[#FBF7EC] shadow-md"
                    : "border-[#E6E1F2] bg-white shadow-sm hover:border-[#C9A24B]"
                }`}
              >
                {isSelected && (
                  <span className="absolute right-2 top-2 rounded-full bg-[#C9A24B] px-2 py-0.5 text-[10px] font-bold text-white">
                    Selected
                  </span>
                )}
                <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#9A93AD]">
                  {t.unit}
                </span>
                <span className="font-semibold text-[15px] text-[#241349]">{t.name}</span>
                <span className="text-[12px] text-[#564E6C]">{t.category}</span>
              </button>
            );
          })}
        </div>
      </SectionCard>

      {selectedTheories.length > 0 && (
        <>
          <SectionCard title="Answer sections to include" tone="mist">
            <div className="flex flex-wrap gap-2">
              {ANSWER_SECTIONS.map((s) => (
                <button
                  key={s.key}
                  onClick={() => toggleSection(s.key)}
                  className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                    activeSections.has(s.key)
                      ? "bg-[#3B1D6E] text-white"
                      : "border border-[#D9D2EC] bg-white text-[#3B1D6E] hover:border-[#C9A24B]"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Draft answer structure" tone="gold" subtitle="Edit and expand this draft">
            <TextArea value={essayDraft} rows={Math.max(12, selectedTheories.length * 8)} />
            <div className="mt-3 flex flex-wrap gap-2">
              {selectedTheories.map((t) => (
                <Badge key={t.id} tone="gold">{t.name}</Badge>
              ))}
            </div>
          </SectionCard>
        </>
      )}

      {selectedTheories.length === 0 && (
        <EmptyState
          title="No theories selected yet"
          details="Select 2-3 theories from the grid above to generate a draft answer structure."
        />
      )}

      <SectionCard title="Answer writing tips" tone="gold">
        <BulletList
          tone="gold"
          items={[
            "Limit yourself to 2-3 theories for depth over breadth.",
            "Every paragraph must link a case fact to a theory concept.",
            "Match your answer to the command word: 'critically discuss' means evaluate, not just describe.",
            "Start with the strongest theory-case fit, not the most famous theory.",
            "Always end with a recommendation grounded in both theory and case evidence.",
            "For 'apply' questions, quote a specific case fact and explain via the theory's mechanism.",
          ]}
        />
      </SectionCard>
    </div>
  );
}
