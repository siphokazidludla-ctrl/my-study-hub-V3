import { useState } from "react";
import { Link } from "react-router-dom";
import { PageHeading, SectionCard, Badge } from "../components/ui";

type CheckItem = { id: string; label: string; group: string; theoryId?: string };

const CHECKLIST: CheckItem[] = [
  // Foundations
  { id: "c1", label: "I can define management and name the four functions (Unit 1)", group: "Foundations" },
  { id: "c2", label: "I can explain Scientific Management (Taylor) and its limitations", group: "Foundations", theoryId: "scientific-management" },
  { id: "c3", label: "I can explain Administrative Management (Fayol) and its principles", group: "Foundations", theoryId: "administrative-management" },
  { id: "c4", label: "I can explain Behavioural Management (Follett, Hawthorne)", group: "Foundations", theoryId: "behavioural-management" },
  { id: "c5", label: "I can explain Chaos Theory and when to apply it vs Lewin", group: "Foundations", theoryId: "chaos-theory" },
  { id: "c5b", label: "I can explain Management Science and Organisational Environment theories", group: "Foundations", theoryId: "management-science" },
  { id: "c5c", label: "I can explain McGregor's Theory X and Y and their leadership implications", group: "Foundations", theoryId: "mcgregor-theory-x-y" },
  // Environment
  { id: "c6", label: "I can distinguish general, task and internal environments (Unit 3)", group: "Environment", theoryId: "organisational-environment-theory" },
  { id: "c7", label: "I can apply Porter's Five Forces to a case", group: "Environment", theoryId: "porters-five-forces" },
  { id: "c7b", label: "I can analyse the macro (general) environment forces", group: "Environment", theoryId: "macro-environment" },
  // Individual
  { id: "c8", label: "I can discuss personality frameworks (MBTI, Big Five) and their limits", group: "Individual", theoryId: "personality-frameworks" },
  { id: "c9", label: "I can explain perception, attribution and bias", group: "Individual", theoryId: "perception" },
  { id: "c9b", label: "I can explain cognitive dissonance and its effect on attitudes", group: "Individual", theoryId: "cognitive-dissonance" },
  { id: "c10", label: "I can discuss stress causes, consequences and coping mechanisms", group: "Individual", theoryId: "stress-management" },
  { id: "c10b", label: "I can distinguish challenge vs hindrance stressors", group: "Individual", theoryId: "challenge-stressors" },
  { id: "c10c", label: "I can discuss role ambiguity and role conflict as stressors", group: "Individual", theoryId: "role-ambiguity" },
  { id: "c10d", label: "I can explain burnout and recommend wellbeing strategies", group: "Individual", theoryId: "burnout" },
  // Motivation
  { id: "c11", label: "I can apply Need theories (Maslow, Herzberg, McClelland) to a case", group: "Motivation", theoryId: "need-theories" },
  { id: "c12", label: "I can apply Expectancy Theory (Vroom) to a case", group: "Motivation", theoryId: "expectancy-theory" },
  { id: "c13", label: "I can apply Equity Theory to a case", group: "Motivation", theoryId: "equity-theory" },
  { id: "c14", label: "I can apply Goal-Setting Theory and Learning Theories", group: "Motivation", theoryId: "goal-setting-theory" },
  { id: "c14b", label: "I can explain Self-Determination Theory (autonomy, competence, relatedness)", group: "Motivation", theoryId: "self-determination-theory" },
  { id: "c14c", label: "I can link job satisfaction and commitment to motivation and performance", group: "Motivation", theoryId: "job-satisfaction" },
  // Groups
  { id: "c15", label: "I can distinguish groups from teams and discuss group dynamics", group: "Groups & Structure", theoryId: "groups-vs-teams" },
  { id: "c16", label: "I can explain the communication process and barriers", group: "Groups & Structure", theoryId: "communication-process" },
  { id: "c16b", label: "I can compare functional vs divisional structures and their trade-offs", group: "Groups & Structure", theoryId: "structure-functional-divisional" },
  // Leadership
  { id: "c17", label: "I can distinguish leadership from management (Kotter)", group: "Leadership", theoryId: "leadership-vs-management" },
  { id: "c18", label: "I can compare trait, behavioural and contingency leadership", group: "Leadership", theoryId: "leadership-styles" },
  { id: "c19", label: "I can contrast transformational vs transactional leadership", group: "Leadership", theoryId: "transformational-leadership" },
  { id: "c19b", label: "I can explain Fiedler's contingency model and path-goal theory", group: "Leadership", theoryId: "fiedler-contingency" },
  { id: "c19c", label: "I can discuss charismatic, servant and paternalistic leadership", group: "Leadership", theoryId: "charismatic-leadership" },
  { id: "c19d", label: "I can identify the five bases of power (French & Raven)", group: "Leadership", theoryId: "power-bases" },
  { id: "c19e", label: "I can discuss emotional intelligence as a leadership competency", group: "Leadership", theoryId: "emotional-intelligence" },
  // Conflict
  { id: "c20", label: "I can identify types and sources of conflict and apply management strategies", group: "Conflict", theoryId: "conflict-management" },
  { id: "c20b", label: "I can distinguish task, relationship and process conflict", group: "Conflict", theoryId: "task-conflict" },
  { id: "c20c", label: "I can differentiate functional from dysfunctional conflict", group: "Conflict", theoryId: "functional-vs-dysfunctional-conflict" },
  { id: "c21", label: "I can distinguish distributive from integrative negotiation", group: "Conflict", theoryId: "negotiation" },
  { id: "c22", label: "I can discuss organisational politics and power", group: "Conflict", theoryId: "organisational-politics" },
  // Culture
  { id: "c23", label: "I can explain culture functions, creation and maintenance", group: "Culture", theoryId: "culture-functions" },
  { id: "c24", label: "I can apply Hofstede, Schein and Lessem to a case", group: "Culture", theoryId: "hofstede-culture" },
  { id: "c24b", label: "I can discuss strong vs weak culture and its impact", group: "Culture", theoryId: "strong-vs-weak-culture" },
  { id: "c24c", label: "I can explain mechanistic vs organic structure and culture alignment", group: "Culture", theoryId: "mechanistic-vs-organic" },
  { id: "c24d", label: "I can discuss person-organisation fit and its effects", group: "Culture", theoryId: "person-organisation-fit" },
  // Change
  { id: "c25", label: "I can apply Lewin's three-stage model to planned change", group: "Change", theoryId: "lewin-change" },
  { id: "c26", label: "I can diagnose resistance to change and propose strategies", group: "Change", theoryId: "resistance-to-change" },
  { id: "c27", label: "I can discuss the learning organisation and its principles", group: "Change", theoryId: "learning-organisation" },
  { id: "c27b", label: "I can explain systems theory and why it matters for holistic change", group: "Change", theoryId: "systems-theory" },
  // Exam skill
  { id: "c28", label: "I can write an exam paragraph that applies theory to a case fact", group: "Exam skill" },
  { id: "c29", label: "I can match command words to answer structure (discuss vs critically discuss vs evaluate)", group: "Exam skill" },
  { id: "c30", label: "I can quote at least one South African example for each hub", group: "Exam skill" },
  { id: "c31", label: "I can identify which 2-3 theories best fit a case scenario", group: "Exam skill" },
  { id: "c32", label: "I can end every answer with a recommendation grounded in theory and case evidence", group: "Exam skill" },
];

const GROUPS = [...new Set(CHECKLIST.map((c) => c.group))];

export default function ChecklistPage() {
  const [checked, setChecked] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem("orb801-checklist");
      return saved ? new Set(JSON.parse(saved) as string[]) : new Set();
    } catch {
      return new Set();
    }
  });

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      localStorage.setItem("orb801-checklist", JSON.stringify([...next]));
      return next;
    });
  };

  const totalChecked = checked.size;
  const total = CHECKLIST.length;

  return (
    <div className="space-y-5">
      <PageHeading
        kicker="Checklist"
        title="Revision readiness checklist"
        sub="Track which topics you can confidently apply. Progress is saved locally."
      />

      <div className="flex items-center gap-3">
        <div className="h-3 flex-1 overflow-hidden rounded-full bg-[#E6E1F2]">
          <div
            className="h-full rounded-full bg-[#3B1D6E] transition-all"
            style={{ width: `${(totalChecked / total) * 100}%` }}
          />
        </div>
        <Badge tone="solid">{totalChecked}/{total} checked</Badge>
      </div>

      {GROUPS.map((group) => {
        const items = CHECKLIST.filter((c) => c.group === group);
        const groupChecked = items.filter((c) => checked.has(c.id)).length;
        return (
          <SectionCard
            key={group}
            title={group}
            tone={groupChecked === items.length ? "gold" : "white"}
            right={<Badge tone={groupChecked === items.length ? "solid" : "mist"}>{groupChecked}/{items.length}</Badge>}
          >
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <button
                    onClick={() => toggle(item.id)}
                    className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 transition ${
                      checked.has(item.id)
                        ? "border-[#3B1D6E] bg-[#3B1D6E] text-white"
                        : "border-[#D9D2EC] bg-white hover:border-[#C9A24B]"
                    }`}
                  >
                    {checked.has(item.id) && <span className="text-[10px]">{"\u2713"}</span>}
                  </button>
                  <span className={`text-sm ${checked.has(item.id) ? "text-[#9A93AD] line-through" : "text-[#241349]"}`}>
                    {item.label}
                  </span>
                  {item.theoryId && !checked.has(item.id) && (
                    <Link
                      to={`/ob/theories/${item.theoryId}`}
                      className="ml-auto flex-shrink-0 rounded-full border border-[#D9D2EC] bg-white px-2 py-0.5 text-[10px] font-bold text-[#3B1D6E] hover:border-[#C9A24B]"
                    >
                      Study
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </SectionCard>
        );
      })}
    </div>
  );
}
