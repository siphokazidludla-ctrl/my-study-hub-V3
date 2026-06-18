import { Link } from "react-router-dom";
import { PageHeading, SectionCard, BulletList, Badge, ClickCard } from "../components/ui";
import { OB_WORKED_SOLUTIONS, hubs, theories, units } from "../data";

export default function HomePage() {
  const highYieldHubs = ["management-theory", "environment", "motivation", "leadership", "culture", "change", "conflict", "stress"];
  const primaryLinks = [
    {
      to: "/ob/units",
      eyebrow: "Module map",
      title: "Units",
      blurb: "Unit coverage, learning outcomes and linked theory cards.",
      tags: [`${units.length} units`],
    },
    {
      to: "/ob/theories",
      eyebrow: "Theory bank",
      title: "Theories",
      blurb: "Search and browse the full OB theory bank.",
      tags: [`${theories.length} theories`],
    },
    {
      to: "/ob/past-papers",
      eyebrow: "Exam practice",
      title: "Worked Solutions",
      blurb: "Past-paper patterns, model answers and examiner cues.",
      tags: [`${OB_WORKED_SOLUTIONS.length} worked answers`],
    },
    {
      to: "/ob/case-analyzer",
      eyebrow: "Application",
      title: "Case Analyzer",
      blurb: "Paste case facts and match them to relevant theories.",
      tags: ["Case clues"],
    },
    {
      to: "/ob/exam-builder",
      eyebrow: "Writing",
      title: "Exam Builder",
      blurb: "Build a structured answer from command word, theory and evidence.",
      tags: ["Answer scaffold"],
    },
    {
      to: "/ob/paragraph-bank",
      eyebrow: "Templates",
      title: "Paragraph Bank",
      blurb: "Theory and topic paragraph templates for exam writing.",
      tags: ["Templates"],
    },
  ];

  return (
    <div className="space-y-5">
      <PageHeading
        kicker="OB dashboard"
        title="Organisational Behaviour"
        sub="Choose the page you need: unit map, theory bank, worked solutions, case practice or writing support."
      />

      <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
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

        <SectionCard
          title="Start here"
          tone="white"
          right={<Badge tone="mist">Shortcuts</Badge>}
        >
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {primaryLinks.map((link) => (
              <ClickCard
                key={link.to}
                eyebrow={link.eyebrow}
                title={link.title}
                blurb={link.blurb}
                tags={link.tags}
                to={link.to}
                accent={link.to === "/ob/past-papers" ? "gold" : "royal"}
              />
            ))}
          </div>
        </SectionCard>
      </div>

      <SectionCard
        title="High-yield topic hubs"
        tone="white"
        right={<Badge tone="mist">{highYieldHubs.length} hubs</Badge>}
      >
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {hubs
            .filter((h) => highYieldHubs.includes(h.id))
            .map((h) => (
              <ClickCard
                key={h.id}
                eyebrow={h.unit}
                title={h.name}
                blurb={h.intro}
                tags={[`${h.theoryIds.length} theories`]}
                to={`/ob/${h.id === "culture" ? "culture-change" : h.id === "conflict" ? "conflict-power-politics" : h.id === "stress" ? "stress-wellbeing" : h.id}`}
                accent="gold"
              />
            ))}
        </div>
      </SectionCard>

      <SectionCard title="Other support pages" tone="mist">
        <div className="flex flex-wrap gap-2">
          <Link className="rounded-full border border-[#D9D2EC] bg-white px-4 py-2 text-sm font-bold text-[#3B1D6E] hover:border-[#C9A24B] hover:text-[#7A5E12]" to="/ob/command-words">
            Command Words
          </Link>
          <Link className="rounded-full border border-[#D9D2EC] bg-white px-4 py-2 text-sm font-bold text-[#3B1D6E] hover:border-[#C9A24B] hover:text-[#7A5E12]" to="/ob/checklist">
            Checklist
          </Link>
          <Link className="rounded-full border border-[#D9D2EC] bg-white px-4 py-2 text-sm font-bold text-[#3B1D6E] hover:border-[#C9A24B] hover:text-[#7A5E12]" to="/ob/references">
            References
          </Link>
        </div>
      </SectionCard>
    </div>
  );
}
