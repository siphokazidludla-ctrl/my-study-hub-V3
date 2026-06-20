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

      {unit.notes && (
        <SectionCard title="Unit notes (start here)" tone="white">
          <div className="space-y-3 text-sm leading-relaxed text-[#43395C]">
            {unit.notes.introduction.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <h3 className="mt-5 text-base font-extrabold text-[#3B1D6E]">Key ideas explained simply</h3>
          <div className="mt-2 space-y-3">
            {unit.notes.concepts.map((c) => (
              <div key={c.concept} className="rounded-lg border border-[#E4DEF1] bg-[#FBFAFE] p-3">
                <p className="font-bold text-[#241349]">{c.concept}</p>
                <p className="mt-1 text-sm text-[#43395C]">{c.explanation}</p>
                <p className="mt-1 text-sm text-[#6B6385]">
                  <span className="font-semibold">Example: </span>
                  {c.example}
                </p>
              </div>
            ))}
          </div>

          <h3 className="mt-5 text-base font-extrabold text-[#3B1D6E]">How it fits together and links to theory</h3>
          <div className="mt-2 space-y-3 text-sm leading-relaxed text-[#43395C]">
            {unit.notes.application.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {unit.notes.map.length > 0 && (
            <>
              <h3 className="mt-5 text-base font-extrabold text-[#3B1D6E]">Outcome → content → theory map</h3>
              <div className="mt-2 overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-[#F4F1FA] text-[#3B1D6E]">
                      <th className="border border-[#E4DEF1] p-2 font-bold">Learning outcome</th>
                      <th className="border border-[#E4DEF1] p-2 font-bold">Module-guide content</th>
                      <th className="border border-[#E4DEF1] p-2 font-bold">Theory / framework to use</th>
                    </tr>
                  </thead>
                  <tbody>
                    {unit.notes.map.map((r, i) => (
                      <tr key={i} className="align-top">
                        <td className="border border-[#E4DEF1] p-2">{r.outcome}</td>
                        <td className="border border-[#E4DEF1] p-2">{r.content}</td>
                        <td className="border border-[#E4DEF1] p-2">{r.theory}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {unit.notes.sources && unit.notes.sources.length > 0 && (
            <p className="mt-4 text-xs text-[#6B6385]">
              <span className="font-semibold">Sources: </span>
              {unit.notes.sources.join("; ")}
            </p>
          )}
        </SectionCard>
      )}

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
