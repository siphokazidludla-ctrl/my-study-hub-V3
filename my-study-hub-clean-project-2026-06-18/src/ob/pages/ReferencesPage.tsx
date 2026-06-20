import { PageHeading, SectionCard, SourceStatus } from "../components/ui";
import { OB_REFERENCES, OB_SOURCE_STATUS } from "../data";

export default function ReferencesPage() {
  return (
    <div className="space-y-5">
      <PageHeading
        kicker="OB references"
        title="ORB801 reference list"
        sub="MANCOSA Harvard-style sources used by the worked-solution bank. Verify each source against the prescribed ORB801 materials before submission."
      />

      <SourceStatus>{OB_SOURCE_STATUS}</SourceStatus>

      <SectionCard title="Reference list" tone="white">
        <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed text-[#564E6C]">
          {OB_REFERENCES.map((reference) => (
            <li key={reference}>{reference}</li>
          ))}
        </ol>
      </SectionCard>
    </div>
  );
}
