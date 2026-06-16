import { useParams, Link } from "react-router-dom";
import { PageHeading, SectionCard, Badge, BulletList, Ref, EmptyState, ClickCard } from "../components/ui";
import { units, theories } from "../data";

export default function UnitDetailPage() {
  const { unitId } = useParams<{ unitId: string }>();
  const unit = units.find((u) => u.id === unitId);

  if (!unit) {
    return (
      <EmptyState
        title="Unit not found"
        details="This unit ID does not match any unit in the ORB801 module guide."
        action={<Link to="/ob/units" className="text-[#3B1D6E] font-bold">Back to Units</Link>}
      />
    );
  }

  const unitTheories = unit.theoryIds
    .map((id) => theories.find((t) => t.id === id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <div className="space-y-5">
      <Link
        to="/ob/units"
        className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D9D2EC] bg-white px-4 py-2 text-sm font-bold text-[#3B1D6E] shadow-sm transition hover:border-[#C9A24B] hover:text-[#7A5E12]"
      >
        <span className="text-base">{"<"}</span> Units
      </Link>

      <PageHeading
        kicker="Unit page"
        title={`${unit.code}: ${unit.title}`}
        sub={unit.focus}
      />

      <div className="grid gap-4 lg:grid-cols-3">
        <SectionCard title="Quick facts" tone="mist">
          <div className="flex flex-wrap gap-2">
            <Badge tone="solid">{unit.relevance}</Badge>
            <Badge>{unit.part}</Badge>
            <Badge tone="gold">{unit.level}</Badge>
          </div>
          <div className="mt-3 text-sm text-[#564E6C]">
            <div>
              <span className="font-bold text-[#241349]">Prescribed chapter:</span>{" "}
              {unit.textbookChapter} <Ref>verify chapter mapping</Ref>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Unit content list (module guide headings)" tone="white">
          <BulletList items={unit.contentList} />
        </SectionCard>

        <SectionCard title="Learning outcomes (what exam may target)" tone="gold">
          <BulletList items={unit.outcomes} tone="gold" />
        </SectionCard>
      </div>

      <SectionCard
        title="Linked theories (click to open detail)"
        tone="white"
        right={<Badge tone="mist">{unitTheories.length} theory cards</Badge>}
      >
        {unitTheories.length === 0 ? (
          <EmptyState
            title="No linked theory cards for this unit yet."
            details="This unit exists in the official mapping, but theory cards were not added to the bank in this build."
          />
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {unitTheories.map((t) => (
              <ClickCard
                key={t.id}
                eyebrow={unit.code}
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
