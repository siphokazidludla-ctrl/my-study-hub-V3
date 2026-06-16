import { useMemo, useState } from "react";
import { PageHeading, SectionCard, Badge, SearchBox, ClickCard, EmptyState } from "../components/ui";
import { theories, hubs, theoryMatchesSearch } from "../data";

export default function TheoriesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTheories = useMemo(
    () =>
      theories
        .filter((t) => theoryMatchesSearch(t, searchTerm))
        .slice()
        .sort((a, b) => (a.unit + a.name).localeCompare(b.unit + b.name)),
    [searchTerm]
  );

  const hubById = useMemo(() => new Map(hubs.map((h) => [h.id, h])), []);

  return (
    <div className="space-y-5">
      <PageHeading
        kicker="Theory Explorer"
        title="Browse by hub (topic) and open theory detail pages"
        sub="All cards are clickable. Use search to filter across concepts, comparisons, and case clues."
      />

      <SearchBox value={searchTerm} onChange={setSearchTerm} />

      <div className="grid gap-4 lg:grid-cols-2">
        {hubs.map((h) => {
          const hubTheories = h.theoryIds
            .map((id) => theories.find((t) => t.id === id))
            .filter((t): t is NonNullable<typeof t> => Boolean(t))
            .filter((t) => theoryMatchesSearch(t, searchTerm));

          return (
            <SectionCard
              key={h.id}
              title={h.name}
              subtitle={`${h.unit} | ${hubTheories.length}/${h.theoryIds.length} in view`}
              tone={h.id === "motivation" || h.id === "change" ? "gold" : "white"}
              right={<Badge tone="mist">{h.unit}</Badge>}
            >
              <p className="mb-2 text-sm text-[#564E6C]">{h.intro}</p>

              <div className="mb-4 flex flex-wrap gap-2">
                {h.keyConcepts.map((k) => (
                  <Badge key={k}>{k}</Badge>
                ))}
              </div>

              {hubTheories.length > 0 ? (
                <div className="flex flex-col gap-3">
                  {hubTheories.map((t) => (
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
              ) : (
                <EmptyState title="No theories matching search in this hub." />
              )}
            </SectionCard>
          );
        })}
      </div>
    </div>
  );
}
