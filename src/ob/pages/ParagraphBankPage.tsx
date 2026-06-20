import { PageHeading, SectionCard, Badge, TextArea, BulletList } from "../components/ui";
import { theories, hubs } from "../data";

const GENERIC_TEMPLATES: Record<string, string> = {
  "Motivation": "Employees at [organisation] are [describe symptom: low morale, high turnover, disengagement]. [Theory name], developed by [theorist], argues that [core mechanism] (Module Guide, Unit 5). In the case, [insert exact case fact] shows this mechanism at work. This matters because [consequence for performance/retention]. Management should [recommendation grounded in the theory].",
  "Leadership": "The leadership approach at [organisation] is [describe: top-down, disengaged, visionless]. [Theory name] holds that [core mechanism] (Module Guide, Unit 8). In the case, [insert exact case fact] reflects a [leadership gap/style mismatch]. This matters because [consequence for change/followers]. Management should [recommendation].",
  "Culture": "The culture at [organisation] is [describe: toxic, fragmented, misaligned]. [Theory name] argues that [core mechanism] (Module Guide, Unit 11). In the case, [insert exact case fact] shows a cultural problem. This matters because [consequence for performance/adaptation]. Management should [recommendation].",
  "Change": "[Organisation] is undergoing [type of change]. [Theory name] provides a framework for [managing/planning/resisting] change (Module Guide, Unit 12). In the case, [insert exact case fact] shows [unfreezing/movement/refreezing was skipped / resistance / turbulence]. This matters because [consequence]. Management should [recommendation].",
  "Conflict": "Conflict at [organisation] arises from [source]. [Theory name] explains that [core mechanism] (Module Guide, Unit 9). In the case, [insert exact case fact] reflects [type of conflict / negotiation need]. This matters because [consequence for collaboration/performance]. Management should [recommendation].",
  "Stress": "Employees at [organisation] face [stressor]. [Theory name] holds that [core mechanism] (Module Guide, Unit 4.6). In the case, [insert exact case fact] shows [stressor type/consequence]. This matters because strain reduces performance and increases turnover. Management should [recommendation].",
  "Environment": "[Organisation] faces [external force]. [Theory name] provides a framework for analysing [environment type] (Module Guide, Unit 3). In the case, [insert exact case fact] reflects [force]. This matters because [consequence for survival/competitiveness]. Management should [recommendation].",
  "Structure": "The structure at [organisation] is [describe: rigid, siloed, mismatched]. [Theory name] argues that [core mechanism] (Module Guide, Unit 10). In the case, [insert exact case fact] shows a structural issue. This matters because [consequence for coordination/responsiveness]. Management should [recommendation].",
  "Groups & Teams": "Team performance at [organisation] is [describe: poor collaboration, low cohesion]. [Theory name] explains that [core mechanism] (Module Guide, Unit 6). In the case, [insert exact case fact] reflects a group-level issue. This matters because [consequence]. Management should [recommendation].",
  "Communication": "Communication at [organisation] is [describe: unclear, one-way, rumour-driven]. [Theory name] holds that [core mechanism] (Module Guide, Unit 7). In the case, [insert exact case fact] shows a breakdown. This matters because poor flow reduces coordination. Management should [recommendation].",
  "Personality": "Individual differences at [organisation] cause [describe: clash, poor fit, bias]. [Theory name] argues that [core mechanism] (Module Guide, Unit 4). In the case, [insert exact case fact] reflects [mechanism]. This matters because [consequence]. Management should [recommendation].",
};

export default function ParagraphBankPage() {
  const hubGroups = hubs.map((h) => ({
    hub: h,
    theories: h.theoryIds
      .map((id) => theories.find((t) => t.id === id))
      .filter((t): t is NonNullable<typeof t> => Boolean(t)),
  })).filter((g) => g.theories.length > 0);

  return (
    <div className="space-y-5">
      <PageHeading
        kicker="Paragraph Bank"
        title="Exam-ready paragraph templates"
        sub="Copy and adapt these templates for your exam answers. Replace bracketed parts with exact case facts."
      />

      <SectionCard title="How to use paragraph templates" tone="gold">
        <BulletList
          tone="gold"
          items={[
            "Each template follows the pattern: theory name + definition + case fact + consequence + recommendation.",
            "Replace [insert exact case fact] with a specific detail from the case study.",
            "Always name the theory and the theorist where the Module Guide requires it.",
            "Do not just describe the theory — apply it to the case.",
            "Limit yourself to 2-3 theories per essay question.",
            "Use the generic templates below for any theory in that topic area.",
          ]}
        />
      </SectionCard>

      <SectionCard title="Generic templates by topic area" tone="mist">
        <div className="space-y-4">
          {Object.entries(GENERIC_TEMPLATES).map(([topic, template]) => (
            <div key={topic} className="rounded-2xl border border-[#E6E1F2] bg-[#FBF7EC] p-3">
              <div className="mb-2 flex items-center gap-2">
                <span className="font-bold text-[#241349]">{topic}</span>
                <Badge tone="mist">Generic</Badge>
              </div>
              <TextArea value={template} readOnly rows={4} />
            </div>
          ))}
        </div>
      </SectionCard>

      {hubGroups.map(({ hub, theories: hubTheories }) => (
        <SectionCard
          key={hub.id}
          title={hub.name}
          tone={hub.id === "motivation" || hub.id === "change" ? "gold" : "white"}
          right={<Badge tone="mist">{hub.unit}</Badge>}
        >
          <div className="space-y-4">
            {hubTheories.map((t) => (
              <div key={t.id} className="rounded-2xl border border-[#E6E1F2] bg-[#FBF7EC] p-3">
                <div className="mb-2 flex items-center gap-2">
                  <span className="font-bold text-[#241349]">{t.name}</span>
                  <Badge>{t.level}</Badge>
                  <Badge tone="gold">{t.unit}</Badge>
                </div>
                <TextArea value={t.paragraphTemplate} readOnly rows={4} />
              </div>
            ))}
          </div>
        </SectionCard>
      ))}
    </div>
  );
}
