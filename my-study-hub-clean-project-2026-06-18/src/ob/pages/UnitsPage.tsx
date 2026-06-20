import { Link } from "react-router-dom";
import { PageHeading, ClickCard } from "../components/ui";
import { units, theories } from "../data";

export default function UnitsPage() {
  return (
    <div className="space-y-5">
      <PageHeading
        kicker="Unit Coverage Map"
        title="Official units, prescribed chapters, linked theories"
        sub="Click a unit to open its content list, outcomes and linked theory cards."
      />
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {units.map((u) => {
          const theoryCount = u.theoryIds.filter((id) =>
            theories.some((t) => t.id === id)
          ).length;
          return (
            <ClickCard
              key={u.id}
              eyebrow={`${u.part} | ${u.level}`}
              title={`${u.code}: ${u.title}`}
              blurb={u.focus}
              tags={[
                u.relevance,
                u.textbookChapter,
                theoryCount > 0 ? `${theoryCount} linked theories` : "No theory cards yet",
              ]}
              to={`/ob/units/${u.id}`}
              accent={u.relevance === "Examined" ? "gold" : "royal"}
            />
          );
        })}
      </div>
    </div>
  );
}
