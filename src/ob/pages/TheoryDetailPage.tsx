import { useParams, Link } from "react-router-dom";
import { SectionCard, Badge, SourceStatus, BulletList, TextArea, Ref, PageHeading, EmptyState } from "../components/ui";
import { theories, units, hubs } from "../data";

export default function TheoryDetailPage() {
  const { theoryId } = useParams<{ theoryId: string }>();
  const theory = theories.find((t) => t.id === theoryId);

  if (!theory) {
    return (
      <EmptyState
        title="Theory not found"
        details="This theory ID does not match any theory in the ORB801 bank."
        action={<Link to="/ob/theories" className="text-[#3B1D6E] font-bold">Back to Theories</Link>}
      />
    );
  }

  const unit = units.find((u) => u.theoryIds.includes(theory.id));
  const hub = hubs.find((h) => h.id === theory.hub);

  return (
    <div className="space-y-4">
      <Link
        to="/ob/theories"
        className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D9D2EC] bg-white px-4 py-2 text-sm font-bold text-[#3B1D6E] shadow-sm transition hover:border-[#C9A24B] hover:text-[#7A5E12]"
      >
        <span className="text-base">{"<"}</span> Theories
      </Link>

      <div className="rounded-3xl border border-[#E6E1F2] bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C9A24B]">
              Theory detail page
            </p>
            <h2 className="font-display text-2xl font-semibold text-[#241349] md:text-3xl">
              {theory.name}
            </h2>
            <p className="mt-1 text-sm text-[#564E6C]">{theory.summary}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              <Badge tone="solid">{theory.level}</Badge>
              <Badge>{theory.category}</Badge>
              {hub?.name && <Badge tone="gold">{hub.name}</Badge>}
            </div>
          </div>

          <div className="mt-2 flex flex-wrap gap-2 md:mt-0 md:justify-end">
            <Badge tone="royal">{theory.unit}</Badge>
            <Badge tone="mist">{theory.chapter}</Badge>
          </div>
        </div>

        <div className="mt-4">
          <SourceStatus>{theory.sourceStatus}</SourceStatus>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <SectionCard title="Textbook topic + mapping" tone="mist">
          <div className="space-y-2">
            <div>
              <span className="font-bold text-[#241349]">Unit:</span>{" "}
              <span className="text-[#564E6C]">{theory.unit}</span>
            </div>
            <div>
              <span className="font-bold text-[#241349]">Prescribed textbook topic:</span>{" "}
              <span className="text-[#564E6C]">{theory.chapter}</span>{" "}
              <Ref>verify chapter mapping</Ref>
            </div>
            {unit && (
              <div className="pt-2">
                <Link
                  to={`/ob/units/${unit.id}`}
                  className="inline-block rounded-full border border-[#D9D2EC] bg-white px-4 py-2 text-sm font-bold text-[#3B1D6E] hover:border-[#C9A24B] hover:text-[#7A5E12]"
                >
                  Open unit page
                </Link>
              </div>
            )}
          </div>
        </SectionCard>

        <SectionCard title="Simple explanation" tone="white">
          <p className="text-[#564E6C]">{theory.summary}</p>
        </SectionCard>

        <SectionCard title="Case clues (what to look for)" tone="gold">
          <BulletList items={theory.caseClues} tone="gold" />
        </SectionCard>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <SectionCard title="Key concepts" tone="white">
          <BulletList items={theory.concepts} />
        </SectionCard>

        <SectionCard title="Assumptions" tone="mist">
          <BulletList items={theory.assumptions} />
        </SectionCard>

        <SectionCard title="When to use in exams" tone="gold">
          <BulletList items={theory.useWhen} tone="gold" />
        </SectionCard>

        <SectionCard title="When to avoid" tone="white">
          <BulletList items={theory.avoidWhen} />
        </SectionCard>

        <SectionCard title="Strengths" tone="mist">
          <BulletList items={theory.strengths} />
        </SectionCard>

        <SectionCard title="Limitations" tone="white">
          <BulletList items={theory.limitations} />
        </SectionCard>

        <SectionCard title="Comparisons" tone="mist">
          <BulletList items={theory.comparisons} />
        </SectionCard>

        <SectionCard title="Recommendation examples" tone="gold">
          <BulletList items={theory.recommendations} tone="gold" />
        </SectionCard>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <SectionCard title="Workplace example" tone="white">
          <p className="text-[#564E6C]">{theory.workplaceExample}</p>
        </SectionCard>

        <SectionCard title="South African example" tone="mist">
          <p className="text-[#564E6C]">{theory.southAfricanExample}</p>
        </SectionCard>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <SectionCard title="SA example (short answer-ready)" tone="gold" subtitle="You can quote/adapt">
          <TextArea value={theory.southAfricanExample} readOnly rows={5} />
        </SectionCard>

        <SectionCard title="Exam paragraph template" tone="white" subtitle="Replace bracketed parts">
          <TextArea value={theory.paragraphTemplate} readOnly rows={7} />
        </SectionCard>
      </div>
    </div>
  );
}
