import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { PageHeading, SectionCard, BulletList, Badge, ClickCard, SearchBox, EmptyState } from "../components/ui";
import { theories, hubs, theoryMatchesSearch } from "../data";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTheories = useMemo(() =>
    theories.filter((t) => theoryMatchesSearch(t, searchTerm))
      .slice().sort((a, b) => (a.unit + a.name).localeCompare(b.unit + b.name)),
    [searchTerm]
  );

  const highYieldHubs = ["management-theory", "environment", "motivation", "leadership", "culture", "change", "conflict", "stress"];

  return (
    <div className="space-y-5">
      <PageHeading
        kicker="Home"
        title="Start here: pick a hub, unit, or jump straight to theories"
        sub="Use search to find a theory by keyword (e.g., 'Lewin', 'equity', 'divisional', 'chaos', 'Hofstede')."
      />

      {/* Mobile search */}
      <div className="md:hidden">
        <SearchBox value={searchTerm} onChange={setSearchTerm} />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <SectionCard title="ADHD-friendly exam workflow" tone="gold">
          <BulletList
            tone="gold"
            items={[
              "Scan the case for clues (keywords, actions, symptoms).",
              "Pick 1-2 best-fit theories (do not theory-dump).",
              "Apply: quote a case fact, explain via theory, show consequence, recommend.",
              "Use the provided paragraph template and tailor it.",
            ]}
          />
        </SectionCard>

        <SectionCard title="High-yield hubs (click to open)" tone="white">
          <div className="grid gap-3">
            {hubs
              .filter((h) => highYieldHubs.includes(h.id))
              .map((h) => (
                <ClickCard
                  key={h.id}
                  eyebrow={h.unit}
                  title={h.name}
                  blurb={h.intro}
                  tags={[`${h.theoryIds.length} theories`, "Exam tips inside"]}
                  to={`/ob/${h.id === "culture" ? "culture-change" : h.id === "conflict" ? "conflict-power-politics" : h.id === "stress" ? "stress-wellbeing" : h.id}`}
                  accent="gold"
                />
              ))}
          </div>
        </SectionCard>

        <SectionCard title="Jump to key OB tools" tone="mist">
          <p className="text-[#564E6C]">
            Need to check what is examinable, open worked solutions, or verify references?
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Link
              to="/ob/units"
              className="inline-block rounded-full border border-[#3B1D6E] bg-[#3B1D6E] px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-[#4A2487]"
            >
              Unit Coverage Map
            </Link>
            <Link
              to="/ob/past-papers"
              className="inline-block rounded-full border border-[#D9D2EC] bg-white px-4 py-2 text-sm font-bold text-[#3B1D6E] shadow-sm hover:border-[#C9A24B] hover:text-[#7A5E12]"
            >
              Worked Solutions
            </Link>
            <Link
              to="/ob/references"
              className="inline-block rounded-full border border-[#D9D2EC] bg-white px-4 py-2 text-sm font-bold text-[#3B1D6E] shadow-sm hover:border-[#C9A24B] hover:text-[#7A5E12]"
            >
              References
            </Link>
          </div>
        </SectionCard>
      </div>

      <SectionCard
        title="All theories (quick list)"
        tone="white"
        right={<Badge tone="mist">Click any card to open a detail page</Badge>}
      >
        {filteredTheories.length === 0 ? (
          <EmptyState
            title="No results."
            details="Try a broader keyword (e.g., 'change', 'culture', 'equity', 'structure')."
          />
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {filteredTheories.map((t) => (
              <ClickCard
                key={t.id}
                eyebrow={t.unit}
                title={t.name}
                blurb={t.summary}
                tags={[t.category, t.level]}
                to={`/ob/theories/${t.id}`}
                accent={t.level === "System" ? "gold" : "royal"}
              />
            ))}
          </div>
        )}
      </SectionCard>
    </div>
  );
}
