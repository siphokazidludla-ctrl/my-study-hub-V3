import { Link } from "react-router-dom";

const commandWords = [
  {
    word: "Apply",
    meaning: "Use theory in the specific case.",
    wants: "Theory + case fact + consequence.",
    outline: ["Define theory briefly", "Use case evidence", "Apply theory", "Explain impact"],
    example: "Expectancy theory applies because employees may not believe effort will lead to valued rewards.",
    mistake: "Explaining theory without case evidence.",
    links: [["Theory Explorer", "/ob/theories"], ["Exam Builder", "/ob/exam-builder"]],
  },
  {
    word: "Analyse",
    meaning: "Break into parts and explain relationships.",
    wants: "Causes, links, consequences.",
    outline: ["Identify issue", "Break into causes", "Link each cause to theory", "Explain consequences"],
    example: "The conflict can be analysed as resource pressure, poor communication and power differences.",
    mistake: "Listing points without explaining how they connect.",
    links: [["Conflict & Power", "/ob/conflict-power-politics"], ["Past Papers", "/ob/past-papers"]],
  },
  {
    word: "Evaluate",
    meaning: "Judge how useful, effective or suitable something is.",
    wants: "A reasoned judgement.",
    outline: ["Define concept", "Apply to case", "Discuss strengths", "Discuss limitations", "Make judgement"],
    example: "Transformational leadership is useful because it builds vision, but may be insufficient without structure.",
    mistake: "Giving pros and cons but no final judgement.",
    links: [["Leadership", "/ob/leadership"], ["Exam Builder", "/ob/exam-builder"]],
  },
  {
    word: "Appraise",
    meaning: "Assess value, quality or effectiveness.",
    wants: "A careful judgement based on criteria.",
    outline: ["State criteria", "Assess strengths", "Assess weaknesses", "Use evidence", "Conclude value"],
    example: "The change strategy can be appraised by examining communication, employee involvement and reinforcement.",
    mistake: "Describing instead of assessing value.",
    links: [["Culture & Change", "/ob/culture-change"], ["Checklist", "/ob/checklist"]],
  },
  {
    word: "Attribute",
    meaning: "Assign a cause or explanation to behaviour or an outcome.",
    wants: "Cause-and-effect reasoning.",
    outline: ["Identify behaviour/outcome", "Consider possible causes", "Use theory", "Decide likely attribution"],
    example: "The manager may wrongly attribute poor performance to laziness rather than role ambiguity or stress.",
    mistake: "Blaming individuals without considering situational factors.",
    links: [["Theory Explorer", "/ob/theories"], ["Stress & Wellbeing", "/ob/stress-wellbeing"]],
  },
  {
    word: "Discuss",
    meaning: "Explain from more than one angle.",
    wants: "Balanced explanation.",
    outline: ["Define concept", "Explain theory", "Apply case", "Mention strengths/limits", "Conclude"],
    example: "Organisational culture shapes behaviour through shared values and assumptions.",
    mistake: "Writing a one-sided answer.",
    links: [["Culture & Change", "/ob/culture-change"], ["Past Papers", "/ob/past-papers"]],
  },
  {
    word: "Critically discuss",
    meaning: "Explain and evaluate.",
    wants: "Strengths, limitations, application and judgement.",
    outline: ["Define issue", "Explain theory", "Apply case", "Evaluate strengths", "Evaluate limitations", "Judge"],
    example: "Lewin’s model is useful for planned change, but may oversimplify continuous change.",
    mistake: "Describing without criticism.",
    links: [["Culture & Change", "/ob/culture-change"], ["Exam Builder", "/ob/exam-builder"]],
  },
  {
    word: "Compare",
    meaning: "Show similarities and differences.",
    wants: "Direct side-by-side comparison.",
    outline: ["Define both", "Show similarities", "Show differences", "Apply both", "Judge best fit"],
    example: "Expectancy theory focuses on effort-reward links, while equity theory focuses on fairness.",
    mistake: "Explaining each theory separately without comparing.",
    links: [["Motivation", "/ob/motivation"], ["Past Papers", "/ob/past-papers"]],
  },
  {
    word: "Contrast",
    meaning: "Focus mainly on differences.",
    wants: "Clear distinctions.",
    outline: ["Define both concepts", "Show key differences", "Apply differences to case", "Conclude"],
    example: "Transactional leadership relies on rewards and control, while transformational leadership relies on vision.",
    mistake: "Writing about similarities when the question asks for differences.",
    links: [["Leadership", "/ob/leadership"], ["Theories", "/ob/theories"]],
  },
  {
    word: "Differentiate",
    meaning: "Show how concepts are not the same.",
    wants: "Clear separation of terms.",
    outline: ["Define concept A", "Define concept B", "State differences", "Use example"],
    example: "A group shares interaction, while a team has shared goals and mutual accountability.",
    mistake: "Using the terms as if they mean the same thing.",
    links: [["Theories", "/ob/theories"], ["Past Papers", "/ob/past-papers"]],
  },
  {
    word: "Explain",
    meaning: "Make clear how or why.",
    wants: "Definition plus mechanism.",
    outline: ["Define concept", "Explain how it works", "Give example", "Link to case"],
    example: "Social learning theory explains that employees learn by observing and imitating others.",
    mistake: "Giving examples without explaining the mechanism.",
    links: [["Motivation", "/ob/motivation"], ["Theory Explorer", "/ob/theories"]],
  },
  {
    word: "Identify",
    meaning: "Name or recognise the relevant issue.",
    wants: "Accurate selection of concepts.",
    outline: ["Name concept", "Briefly define it", "Point to case evidence"],
    example: "The issue is role ambiguity because employees are unclear about expectations.",
    mistake: "Writing a long essay when only naming is required.",
    links: [["Case Analyzer", "/case-analyzer"], ["Theories", "/ob/theories"]],
  },
  {
    word: "Outline",
    meaning: "Give the main points only.",
    wants: "Brief structured summary.",
    outline: ["State key points", "Keep concise", "Avoid excessive detail"],
    example: "The main sources of stress are workload, role ambiguity, role conflict and poor support.",
    mistake: "Writing too much detail for a low-mark question.",
    links: [["Stress & Wellbeing", "/ob/stress-wellbeing"], ["Checklist", "/ob/checklist"]],
  },
  {
    word: "Recommend",
    meaning: "Give practical actions.",
    wants: "Specific theory-based solutions.",
    outline: ["State problem", "Recommend action", "Support with theory", "Explain expected outcome"],
    example: "Management should reduce resistance through communication, participation, training and reinforcement.",
    mistake: "Vague advice like 'communicate better'.",
    links: [["Exam Builder", "/ob/exam-builder"], ["Checklist", "/ob/checklist"]],
  },
  {
    word: "Justify / Motivate",
    meaning: "Give reasons for your answer.",
    wants: "Clear reasoning and evidence.",
    outline: ["State position", "Give theory reason", "Give case reason", "Conclude"],
    example: "This recommendation is justified because it improves fairness perceptions and strengthens commitment.",
    mistake: "Making a claim without explaining why.",
    links: [["Exam Builder", "/ob/exam-builder"], ["Past Papers", "/ob/past-papers"]],
  },
  {
    word: "Tabulate",
    meaning: "Present information in a table.",
    wants: "Clear side-by-side comparison.",
    outline: ["Create columns", "Use short points", "Compare directly", "Add brief conclusion if needed"],
    example: "Leadership and management can be tabulated by comparing focus, time horizon, influence and control.",
    mistake: "Writing paragraphs when the question asks for a table.",
    links: [["Leadership", "/ob/leadership"], ["Past Papers", "/ob/past-papers"]],
  },
];

export default function CommandWordsPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-6 px-4 py-6">
      <header className="rounded-3xl bg-[#3B1D6E] p-6 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E4CE92]">
          Command Word Decoder
        </p>
        <h1 className="mt-2 text-3xl font-extrabold">What the examiner is really asking</h1>
        <p className="mt-2 max-w-3xl text-sm text-[#EFEAFB]">
          Each command word shows the expected answer structure, a mini example, common mistake,
          and links to useful sections.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {commandWords.map((item) => (
          <section key={item.word} className="rounded-3xl border border-[#E6E1F2] bg-white p-4 shadow-sm">
            <h2 className="text-xl font-extrabold text-[#241349]">{item.word}</h2>
            <p className="mt-1 rounded-full border border-[#E4CE92] bg-[#FBF7EC] px-3 py-1 text-xs font-bold text-[#7A5E12] inline-block">
              {item.meaning}
            </p>

            <div className="mt-3 space-y-3 text-sm text-[#564E6C]">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#9A93AD]">Examiner wants</p>
                <p>{item.wants}</p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#9A93AD]">Answer outline</p>
                <ul className="list-disc space-y-1 pl-5">
                  {item.outline.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>

              <div className="rounded-2xl border border-[#E4CE92] bg-[#FBF7EC] p-3">
                <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#9A93AD]">Mini example</p>
                <p>{item.example}</p>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#9A93AD]">Common mistake</p>
                <p>{item.mistake}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {item.links.map(([label, to]) => (
                  <Link key={to} to={to} className="rounded-full border border-[#D9D2EC] bg-[#F4F1FA] px-3 py-2 text-xs font-bold text-[#3B1D6E]">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}