import { PageHeading, SectionCard, Badge, BulletList, ClickCard, EmptyState } from "../components/ui";
import { theories, hubs } from "../data";
import type { Hub } from "../data";

export default function HubPage({ hubId, backLink, backLabel }: { hubId: string; backLink: string; backLabel: string }) {
  const hub = hubs.find((h) => h.id === hubId);

  if (!hub) {
    return (
      <EmptyState
        title="Hub not found"
        details="This topic hub does not exist in the ORB801 bank."
      />
    );
  }

  const hubTheories = hub.theoryIds
    .map((id) => theories.find((t) => t.id === id))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <div className="space-y-5">
      <a
        href={backLink}
        className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D9D2EC] bg-white px-4 py-2 text-sm font-bold text-[#3B1D6E] shadow-sm transition hover:border-[#C9A24B] hover:text-[#7A5E12]"
      >
        <span className="text-base">{"<"}</span> {backLabel}
      </a>

      <PageHeading
        kicker={`Hub: ${hub.unit}`}
        title={hub.name}
        sub={hub.intro}
      />

      <div className="grid gap-4 lg:grid-cols-3">
        <SectionCard title="Key concepts" tone="white">
          <BulletList items={hub.keyConcepts} />
        </SectionCard>

        <SectionCard title="South African example" tone="mist">
          <p className="text-sm text-[#564E6C]">{hub.saExample}</p>
        </SectionCard>

        <SectionCard title="Exam tip" tone="gold">
          <p className="text-sm text-[#564E6C]">{hub.examTip}</p>
        </SectionCard>
      </div>

      <SectionCard
        title="Theories in this hub"
        tone="white"
        right={<Badge tone="mist">{hubTheories.length} theories</Badge>}
      >
        {hubTheories.length === 0 ? (
          <EmptyState title="No theory cards linked to this hub yet." />
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
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
        )}
      </SectionCard>
    </div>
  );
}
