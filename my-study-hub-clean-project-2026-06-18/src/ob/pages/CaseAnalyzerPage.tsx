import { useState, useMemo } from "react";
import { PageHeading, SectionCard, Badge, ClickCard, BulletList, EmptyState } from "../components/ui";
import { theories, hubs } from "../data";

export default function CaseAnalyzerPage() {
  const [caseText, setCaseText] = useState("");

  const matchedTheories = useMemo(() => {
    if (!caseText.trim()) return [];
    const lower = caseText.toLowerCase();
    return theories
      .filter((t) => t.caseClues.some((clue) => lower.includes(clue.toLowerCase())))
      .sort((a, b) => {
        const aMatches = a.caseClues.filter((clue) => lower.includes(clue.toLowerCase())).length;
        const bMatches = b.caseClues.filter((clue) => lower.includes(clue.toLowerCase())).length;
        return bMatches - aMatches;
      });
  }, [caseText]);

  return (
    <div className="space-y-5">
      <PageHeading
        kicker="Case Analyzer"
        title="Paste a case study and find matching theories"
        sub="Paste or type key facts from the case study. The analyzer looks for case clues from each theory's keyword list."
      />

      <SectionCard title="Case study text" tone="white">
        <textarea
          value={caseText}
          onChange={(e) => setCaseText(e.target.value)}
          placeholder="Paste your case study text here... Look for keywords like 'efficiency drive', 'low morale', 'no consultation', 'resistance', 'unclear reporting lines', etc."
          rows={8}
          className="w-full rounded-2xl border border-[#D9D2EC] bg-white p-3 text-sm leading-relaxed text-[#241349] outline-none focus:border-[#5B3A9E] focus:ring-2 focus:ring-[#E4CE92]"
        />
        {caseText.trim() && (
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge tone="solid">{matchedTheories.length} matching theories</Badge>
            <Badge tone="mist">Sorted by relevance (most clues first)</Badge>
          </div>
        )}
      </SectionCard>

      {matchedTheories.length > 0 ? (
        <SectionCard title="Matching theories" tone="white">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {matchedTheories.map((t) => {
              const matchCount = t.caseClues.filter((clue) =>
                caseText.toLowerCase().includes(clue.toLowerCase())
              ).length;
              return (
                <ClickCard
                  key={t.id}
                  eyebrow={t.unit}
                  title={t.name}
                  blurb={t.summary}
                  tags={[t.category, t.level, `${matchCount} clue${matchCount !== 1 ? "s" : ""} matched`]}
                  to={`/ob/theories/${t.id}`}
                  accent={matchCount >= 3 ? "gold" : "royal"}
                />
              );
            })}
          </div>
        </SectionCard>
      ) : caseText.trim() ? (
        <EmptyState
          title="No matching theories found"
          details="Try including more specific keywords from the case, like 'resistance', 'culture', 'low morale', 'efficiency', 'negotiation'."
        />
      ) : null}

      <SectionCard title="How to use the analyzer" tone="gold">
        <BulletList
          tone="gold"
          items={[
            "Paste the full case study or key sentences into the text box.",
            "The tool scans for case-clue keywords linked to each theory.",
            "Theories with more matching clues appear first.",
            "Open each matching theory's detail page for paragraph templates.",
            "Always quote exact case facts, not just theory names.",
          ]}
        />
      </SectionCard>
    </div>
  );
}
