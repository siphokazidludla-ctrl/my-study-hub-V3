export type OBExamYield = "Very high" | "High" | "Medium";

export type OBPastPaperTheme = {
  theme: string;
  frequency: string;
  commandWords: string;
  yield: OBExamYield;
};

export type OBModelAnswerBlock = {
  heading?: string;
  body?: string;
  bullets?: string[];
  table?: {
    headers: [string, string];
    rows: [string, string][];
  };
};

export type OBWorkedSolution = {
  id: string;
  title: string;
  source: string;
  commandWord: string;
  hub: string;
  question: string;
  answerPlan: string[];
  modelAnswer: OBModelAnswerBlock[];
  commonMistakes: string[];
  examinerLooksFor: string[];
  relatedTheoryIds: string[];
};

export const OB_SOURCE_STATUS =
  "Built from the uploaded ORB past paper set and Claude's worked-solution recommendations. Source status: requires verification against the prescribed ORB801 module guide and textbook before submission.";

export const OB_PAST_PAPER_THEMES: OBPastPaperTheme[] = [
  { theme: "Change & resistance (Lewin; Kotter)", frequency: "Nearly every paper", commandWords: "Critically discuss, apply, recommend", yield: "Very high" },
  { theme: "Organisational culture (Schein; Hofstede)", frequency: "Nearly every paper", commandWords: "Discuss, debate, evaluate, compare", yield: "Very high" },
  { theme: "Conflict: sources & management", frequency: "Almost every paper", commandWords: "Analyse, discuss, propose, recommend", yield: "Very high" },
  { theme: "Groups & teams; group dynamics", frequency: "Most papers", commandWords: "Differentiate, evaluate, examine", yield: "Very high" },
  { theme: "Motivation theories (Maslow to Vroom/Adams)", frequency: "Most papers", commandWords: "Compare, evaluate, outline", yield: "Very high" },
  { theme: "Leadership & leadership vs management", frequency: "Most papers", commandWords: "Critically discuss, tabulate, motivate", yield: "Very high" },
  { theme: "Stress: causes, effects, coping", frequency: "Several papers", commandWords: "Analyse and discuss, recommend", yield: "High" },
  { theme: "Systems theory of management", frequency: "Several papers", commandWords: "Apply, discuss (with diagram)", yield: "High" },
  { theme: "Communication & technology", frequency: "Several papers", commandWords: "Critically evaluate, recommend", yield: "Medium" },
  { theme: "Personality, EI, learning theories", frequency: "Several papers", commandWords: "Compare, critically discuss", yield: "Medium" },
];

export const OB_EXAM_STRATEGY =
  "Master the top six themes to application depth: change, culture, conflict, teams, motivation and leadership. Keep stress and systems theory as strong back-ups; they often appear as 'choose any three' Section B questions. The case pattern is consistent: a real organisation is in difficulty, and the marker wants theory pointed at that specific organisation. Where a South African example is invited, use the Snap Tech / Kismet high-performance-culture case and the South African skills-shortage context from the papers.";

export const OB_COMMAND_WORD_STRUCTURES = [
  { command: "Identify / Outline", markerWants: "Name and briefly state the key points. Low analysis.", structure: "Short labelled points, one line each." },
  { command: "Explain / Discuss", markerWants: "Show you understand it and can talk around it.", structure: "Define, unpack, give an example, note a limit." },
  { command: "Apply", markerWants: "Use the theory on the case facts.", structure: "Theory step, then case fact, step by step." },
  { command: "Analyse", markerWants: "Break into parts and show how they relate.", structure: "Components, how they interact, then so-what." },
  { command: "Compare / Contrast", markerWants: "Similarities and differences side by side.", structure: "A table or paired paragraphs, then a verdict." },
  { command: "Evaluate / Appraise", markerWants: "Weigh strengths against weaknesses and judge.", structure: "For, against, then a reasoned position." },
  { command: "Critically discuss", markerWants: "Argue more than one view and take a stance.", structure: "View, counter-view, evidence, your judgement." },
  { command: "Differentiate", markerWants: "Make the distinctions explicit.", structure: "Define each, then the line between them." },
  { command: "Justify / Motivate", markerWants: "Give reasons that defend a position.", structure: "Claim, then the evidence and theory that support it." },
  { command: "Recommend", markerWants: "Give actionable, defensible advice.", structure: "Numbered actions tied to the case and theory." },
  { command: "Tabulate", markerWants: "Put it in a table.", structure: "Two-column table, then a sentence of comment." },
];

export const OB_WORKED_SOLUTIONS: OBWorkedSolution[] = [
  {
    id: "lewin-change-aegon",
    title: "Change management: Lewin's Three-Step Model",
    source: "Paper 1 (AEGON 'Embracing and pursuing change'), Question 1 (20 marks)",
    commandWord: "Critically discuss / Apply",
    hub: "Change",
    question: "Critically discuss how you would apply Lewin's Three-Step Model at AEGON to strategically manage planned change.",
    answerPlan: [
      "Define planned change and introduce Lewin's model as the anchor framework.",
      "Work the three steps in order and attach each one to a specific AEGON fact.",
      "Critique the model honestly so the answer is critical, not just descriptive.",
      "Conclude with a judgement on its fit for AEGON.",
    ],
    modelAnswer: [
      { body: "Planned change is a deliberate, managed effort to move an organisation from a current state to a desired future state. Lewin's Three-Step Model (Lewin, 1947) frames this as unfreezing the present, moving to the new state, and refreezing the change so it becomes the new normal. The model remains a foundation of change theory because it treats change as a process rather than a single event (Cummings, Bridgman and Brown, 2016)." },
      { heading: "Step 1: Unfreezing", body: "Unfreezing means weakening the forces that hold current behaviour in place and raising dissatisfaction with the status quo. At AEGON the trigger was low brand awareness and government-imposed price controls that had cut profitability. The new CEO created urgency through a discovery phase asking what AEGON stood for, and a brand audit that exposed customer confusion about the many sub-brands. In Lewin's terms this is classic unfreezing: it built the case that the old, fragmented brand could not continue." },
      { heading: "Step 2: Moving", body: "Moving is where new behaviours, structures and values are introduced. AEGON repositioned the brand, embedded eight behaviours such as 'think customer' and 'embrace change', launched a Management Development Programme, and introduced new products like the 5 for Life annuity. Each action shifted staff and customers toward the new identity, which is the substance of Lewin's moving phase." },
      { heading: "Step 3: Refreezing", body: "Refreezing stabilises the change so people do not slip back. AEGON reinforced the new brand through external campaigns, a consistent visual identity across all brands, and the association with Shirley Robertson to bring the values to life. Embedding the eight behaviours into how decisions are made is what locks the change in place." },
      { heading: "Critical appraisal", body: "The model's strength is its simplicity and its emphasis on preparation and consolidation, which AEGON clearly needed. Its weakness is that it assumes organisations can be 'refrozen' in a stable end-state, whereas the case itself stresses that change is continuous. Critics argue it underplays the politics and messiness of change and the need for constant adaptation (By, 2005; Cummings, Bridgman and Brown, 2016). For AEGON, in a volatile financial-services market, refreezing is better read as a temporary stabilising of gains than a permanent freeze." },
      { heading: "Conclusion", body: "Lewin's model gives AEGON a disciplined sequence: build the case, make the shift, lock in the gains. Used flexibly and combined with continuous learning, it is a sound strategic frame for AEGON's planned change." },
    ],
    commonMistakes: [
      "Describing the three steps with no AEGON facts attached.",
      "Praising the model without critique when the command word is critically discuss.",
      "Ignoring the case line that change is continuous, which is the obvious hook for the critique.",
    ],
    examinerLooksFor: [
      "A definition, the three steps in order, and a case fact welded to each step.",
      "A genuine critique naming the model's assumptions.",
      "A clear verdict at the end rather than trailing off.",
    ],
    relatedTheoryIds: ["lewin-change", "resistance-to-change", "learning-organisation"],
  },
  {
    id: "resistance-change-aegon",
    title: "Resistance to change and how to reduce it",
    source: "Paper 1 (AEGON), Question 2 (20 marks)",
    commandWord: "Critically evaluate / Recommend",
    hub: "Change",
    question: "In the context of the case study, critically evaluate the reasons for resistance to change and recommend guidelines that can be utilised to assist in managing or reducing resistance to change.",
    answerPlan: [
      "State why resistance matters, then split reasons into individual and organisational sources.",
      "Tie at least two sources to plausible AEGON realities such as rebranding, new behaviours and job changes.",
      "Recommend a recognised set of strategies and match each to a source it cures.",
      "Judge which strategies fit AEGON best.",
    ],
    modelAnswer: [
      { body: "Resistance to change is any behaviour that seeks to protect the status quo when change is introduced. It is not automatically irrational; it is often a sensible response to poorly managed change (Kotter and Schlesinger, 1979). Understanding its sources is the first step to reducing it." },
      { heading: "Individual sources", body: "These include fear of the unknown, loss of security or status, economic concern about job loss, habit, and selective perception. At AEGON, rebranding sub-brands and introducing eight new behaviours and a Management Development Programme would unsettle staff who had built identities around the old Scottish Equitable brand and familiar ways of working." },
      { heading: "Organisational sources", body: "These include structural inertia, threats to established power and resource allocation, and group norms that pull members back to old behaviour. AEGON's history of growth by acquisition meant several embedded cultures, each a potential pocket of resistance to a single unified brand and behaviour set." },
      { heading: "Recommended guidelines", bullets: [
        "Education and communication, to cure resistance rooted in misinformation.",
        "Participation and involvement, so staff own the change rather than have it imposed.",
        "Facilitation and support, including training such as the Management Development Programme, to reduce fear of new skills.",
        "Negotiation and agreement, where a group stands to lose something concrete.",
        "Manipulation and co-optation, used cautiously and ethically, to bring resistant influencers on board.",
        "Explicit and implicit coercion, a last resort where speed is essential and other routes have failed.",
      ] },
      { heading: "Evaluation and conclusion", body: "For AEGON, the early, lower-cost approaches fit best: communication, involvement and support align with a values-led rebrand and avoid the trust damage that coercion causes. Kotter's later work (1996) reinforces this by stressing a guiding coalition and short-term wins, both visible in AEGON's record results after the change. Coercion should be avoided here because it would contradict the very behaviours, such as 'work together', that AEGON is trying to embed." },
    ],
    commonMistakes: [
      "Listing reasons for resistance but never recommending fixes.",
      "Recommending generic good communication without naming a framework or matching it to a cause.",
      "Treating all resistance as irrational.",
    ],
    examinerLooksFor: [
      "Reasons split into individual and organisational, anchored to AEGON.",
      "A named, referenced set of strategies mapped to those reasons.",
      "A reasoned recommendation about which strategies suit the organisation.",
    ],
    relatedTheoryIds: ["resistance-to-change", "lewin-change"],
  },
  {
    id: "culture-xerox-zappos",
    title: "Organisational culture: functions, levels and maintenance",
    source: "Paper 2 (Xerox), Q1 and Q2; recurs in Zappos and Hofstede/Schein questions",
    commandWord: "Discuss / Debate / Evaluate",
    hub: "Culture",
    question: "Discuss the dimensions and functions of organisational culture, the negative implications of those functions, and the strategies used to create and maintain culture, with reference to the case.",
    answerPlan: [
      "Define culture and locate it using Schein's three levels.",
      "State its functions, then turn each into a possible downside.",
      "Explain how culture is created and maintained, tied to case facts.",
      "Add a comparative line on Hofstede versus Schein where the paper asks for it.",
    ],
    modelAnswer: [
      { body: "Organisational culture is the shared set of values, beliefs and assumptions that shape how members behave and make decisions (Schein and Schein, 2017). Schein's three levels help locate it: visible artefacts, espoused values, and underlying assumptions." },
      { heading: "Functions of culture", body: "Culture gives members a sense of identity, generates commitment beyond self-interest, provides stability, and acts as a control mechanism that guides behaviour (Robbins and Judge, 2019). At Xerox, a culture built on diversity and inclusion is presented as the engine of innovative solutions and a source of competitive advantage." },
      { heading: "Negative implications", body: "The same functions have a dark side. As a control mechanism culture can suppress dissent; as a source of stability it can become a barrier to change; and a strong culture can produce groupthink and resistance to outsiders, reducing the diversity Xerox values. A strong culture can also create ethical blind spots when 'the way we do things' goes unquestioned." },
      { heading: "Creating and maintaining culture", body: "Culture is created by founders and reinforced through what leaders attend to, how they react to crises, role-modelling, and the criteria for hiring, promotion and reward (Schein and Schein, 2017). It is maintained through selection, socialisation and onboarding, and stories and rituals. Zappos illustrates this through its ten core values, induction process, and service rituals." },
      { heading: "Hofstede versus Schein", body: "Hofstede compares cultures across national value dimensions such as power distance and individualism, while Schein focuses inside the organisation on levels and how leaders embed assumptions. They are complementary: Hofstede explains the national backdrop; Schein explains the internal mechanics of a firm's own culture." },
      { heading: "Conclusion", body: "Culture is a powerful asset that gives identity, commitment and control, but each strength can become a liability if it goes unmanaged. Xerox and Zappos succeed because they deliberately and continuously reinforce the culture they want." },
    ],
    commonMistakes: [
      "Listing functions but skipping the requested negative implications.",
      "Confusing Hofstede as national culture with Schein as organisational culture.",
      "Describing culture in the abstract with no Xerox or Zappos evidence.",
    ],
    examinerLooksFor: [
      "Schein's levels used to structure the definition.",
      "Each function paired with its possible downside.",
      "Concrete creation and maintenance mechanisms tied to the case.",
    ],
    relatedTheoryIds: ["culture-functions", "schein-culture", "hofstede-culture", "strong-vs-weak-culture"],
  },
  {
    id: "conflict-google",
    title: "Conflict: types, sources and management",
    source: "Google 'Fighting with Executives over Pay', Q1.1 and Q1.2 (40 marks); recurs in most papers",
    commandWord: "Analyse and discuss / Propose / Recommend",
    hub: "Conflict",
    question: "With reference to the Google case and relevant theory, analyse the common types and sources of conflict in the workplace, and propose strategies to manage organisational conflict.",
    answerPlan: [
      "Define conflict and note the modern interactionist view that some conflict is useful.",
      "Classify types, then sources, each tied to a Google fact.",
      "Move to management using Thomas-Kilmann's five styles plus structural strategies.",
      "Recommend the styles that fit Google's specific dispute.",
    ],
    modelAnswer: [
      { body: "Conflict is a process that begins when one party perceives that another has negatively affected, or is about to affect, something the first party cares about (Robbins and Judge, 2019). The interactionist view holds that a moderate level of functional conflict can improve decisions, while dysfunctional conflict harms performance." },
      { heading: "Types of conflict", body: "Task conflict concerns the content of work, relationship conflict concerns interpersonal friction, and process conflict concerns how work gets done. At Google, the dispute over pay equity and promotions is largely task and process conflict, but the patronising company-wide meeting and the message-board backlash show it spilling into relationship conflict." },
      { heading: "Sources of conflict", body: "Common sources include incompatible goals, scarce resources, perceived inequity, poor communication, and structural differences. The Google case shows perceived pay inequity, resource competition, communication breakdown around pay-setting, and structural tension between full-time staff and contractors or vendors without the same benefits." },
      { heading: "Managing conflict", bullets: [
        "Competing: fast but damages relationships.",
        "Accommodating: preserves harmony at a cost.",
        "Avoiding: useful for trivial issues, harmful when issues fester.",
        "Compromising: each side gives ground; useful under time pressure.",
        "Collaborating: seeks a win-win and is best for important, complex disputes.",
      ] },
      { heading: "Recommendation and conclusion", body: "Google's conflict is important and identity-laden, so avoiding and competing are poor fits. A collaborating approach, backed by genuine transparency on compensation and a serious review of contractor treatment, addresses root causes rather than symptoms. Negotiation should aim for integrative rather than distributive bargaining so trust can be rebuilt." },
    ],
    commonMistakes: [
      "Treating all conflict as bad.",
      "Listing the five conflict-handling styles without choosing one for Google.",
      "Forgetting the contractor structural issue, which is the case's deepest source of conflict.",
    ],
    examinerLooksFor: [
      "Types and sources clearly separated and tied to Google facts.",
      "A named handling model plus structural strategies.",
      "A defensible recommendation distinguishing integrative from distributive negotiation.",
    ],
    relatedTheoryIds: ["conflict-management", "task-conflict", "relationship-conflict", "process-conflict", "integrative-bargaining", "distributive-negotiation"],
  },
  {
    id: "motivation-expectancy-equity",
    title: "Motivation: Expectancy theory versus Equity theory",
    source: "Multigenerational Workforce, Question 1 (20 marks)",
    commandWord: "Compare and evaluate",
    hub: "Motivation",
    question: "Compare and evaluate Expectancy Theory and Equity Theory as suitable approaches to motivating the diverse employees described in the article.",
    answerPlan: [
      "Introduce both as process theories.",
      "Explain each briefly with its core mechanism.",
      "Compare side by side, then evaluate fit for a multigenerational, diverse workforce.",
      "Conclude on which theory, or combination, fits best.",
    ],
    modelAnswer: [
      { body: "Process theories explain the mechanics of motivation. Expectancy theory and equity theory are two of the most influential, and both fit a diverse, multigenerational workforce where a single 'one size' reward will not work." },
      { heading: "Expectancy theory", body: "Vroom (1964) argues that motivation is the product of expectancy, instrumentality and valence. Motivation collapses if any one is zero. For a workforce ranging from recent graduates to near-retirees, valence is the key insight: the same reward is not equally valued, so flexible, individualised rewards are needed." },
      { heading: "Equity theory", body: "Adams (1965) argues that people compare their input-outcome ratio against a referent other and are motivated to reduce perceived inequity. Across generations who compare pay, recognition and progression differently, perceptions of fairness drive behaviour as much as the absolute reward does." },
      { heading: "Comparison", body: "Both are cognitive and individual, and both reject the idea that one reward motivates everyone. They differ in focus: expectancy is forward-looking and asks 'is it worth my effort?', while equity is comparative and asks 'is this fair relative to others?'." },
      { heading: "Evaluation for a diverse workforce", body: "Expectancy theory suits diverse valences across generations and helps managers tailor rewards. Its limit is that it assumes people calculate rationally. Equity theory captures fairness concerns in mixed-age teams, but it is hard to manage because it depends on subjective comparisons and chosen referents." },
      { heading: "Conclusion", body: "Neither theory alone is sufficient. Used together they are powerful: expectancy theory designs reward systems where valued rewards follow performance, and equity theory ensures those rewards are seen as fair across a diverse workforce." },
    ],
    commonMistakes: [
      "Describing both theories but never comparing or evaluating them.",
      "Treating them as content theories rather than process theories.",
      "Ignoring the diversity angle the question explicitly requires.",
    ],
    examinerLooksFor: [
      "Correct labelling of both as process theories.",
      "A genuine side-by-side comparison.",
      "Evaluation connected to a diverse, multigenerational workforce.",
    ],
    relatedTheoryIds: ["expectancy-theory", "equity-theory", "need-theories"],
  },
  {
    id: "groups-teams-dynamics",
    title: "Groups and teams: types and dynamics",
    source: "CMI 'Using teamwork to build a better workplace', Q1.1 and Q1.2 (40 marks); recurs widely",
    commandWord: "Differentiate / Evaluate",
    hub: "Groups & Teams",
    question: "Differentiate between the types of groups and teams that may be formed in an organisation and discuss their functions; then evaluate the group dynamics managers should understand to manage teams effectively.",
    answerPlan: [
      "Differentiate group from team, then formal from informal, with case examples.",
      "State the functions each serves.",
      "Move to dynamics: development stages, roles, norms and cohesion.",
      "Evaluate what managers must do, tied to the case.",
    ],
    modelAnswer: [
      { body: "A group is two or more people who interact and are interdependent; a team is a group whose members work toward a shared goal with complementary skills and mutual accountability (Robbins and Judge, 2019)." },
      { heading: "Types and functions", body: "Formal teams are created by the organisation for a purpose and include command teams, task or project teams, and cross-functional teams. Informal groups arise from social needs and can support formal teams by improving communication across departments." },
      { heading: "Group dynamics: development", body: "Tuckman (1965) describes forming, storming, norming, performing and later adjourning. Managers who understand this expect early friction rather than panicking, and invest in norming so the team reaches performing." },
      { heading: "Group dynamics: roles, norms and cohesion", body: "Effective teams need a balance of roles, productive norms and healthy cohesion. Cohesion improves performance when it aligns with organisational goals, but can harm performance through groupthink when it does not." },
      { heading: "Evaluation and conclusion", body: "Managers should compose teams for role balance, guide them through development stages, shape productive norms, build healthy cohesion while guarding against groupthink, and keep communication channels open. Team size and task should also fit: small teams suit urgent focused work, while larger teams need more formal coordination." },
    ],
    commonMistakes: [
      "Blurring group and team instead of differentiating them.",
      "Describing Tuckman's stages with no link to managing the case teams.",
      "Praising cohesion without mentioning its groupthink risk.",
    ],
    examinerLooksFor: [
      "Clear distinctions: group vs team, formal vs informal, with functions.",
      "Named dynamics theory applied to the case.",
      "An evaluative close on what managers must actually do.",
    ],
    relatedTheoryIds: ["groups-vs-teams", "communication-process"],
  },
  {
    id: "leadership-management-power",
    title: "Leadership: styles, and leadership versus management",
    source: "Recurs across papers (Kotter tabulation question; transformational leadership questions)",
    commandWord: "Critically discuss / Tabulate / Motivate",
    hub: "Leadership",
    question: "Tabulate the differences between management and leadership, describe the types of power leaders may use, and critically discuss the suitability of transactional versus transformational leadership.",
    answerPlan: [
      "Tabulate management versus leadership.",
      "Describe sources of power using French and Raven.",
      "Contrast transactional and transformational styles.",
      "Judge when each style fits.",
    ],
    modelAnswer: [
      { body: "Kotter (1990) argued that leadership and management are distinct but complementary systems of action: management copes with complexity, leadership copes with change." },
      { table: {
        headers: ["Management", "Leadership"],
        rows: [
          ["Planning and budgeting", "Setting direction and vision"],
          ["Organising and staffing", "Aligning people behind the vision"],
          ["Controlling and problem-solving", "Motivating and inspiring"],
          ["Produces order and predictability", "Produces change, sometimes dramatic"],
          ["Relies on position and authority", "Relies on influence and followership"],
        ],
      } },
      { heading: "Sources of power", body: "French and Raven (1959) identify five bases of power: legitimate, reward, coercive, expert and referent. Position-based power is the manager's default; expert and referent power are the bases effective leaders cultivate because they earn willing rather than compliant followership." },
      { heading: "Transactional versus transformational", body: "Transactional leadership motivates through exchange: clear expectations and contingent rewards or corrective action. Transformational leadership raises followers' aspirations through idealised influence, inspirational motivation, intellectual stimulation and individualised consideration, and is suited to change and knowledge-driven settings." },
      { heading: "Critical judgement", body: "The two are not opposites but a continuum, and the strongest leaders use both. Transactional foundations keep delivery on track, while transformational behaviour drives change. The safest postgraduate position is contingency-based: the right style depends on followers, task and situation." },
    ],
    commonMistakes: [
      "Ignoring the literal instruction to tabulate.",
      "Treating transformational leadership as always superior.",
      "Listing the five power bases without saying which leaders should build.",
    ],
    examinerLooksFor: [
      "An actual table for management versus leadership.",
      "The five power bases correctly attributed.",
      "A balanced, situation-dependent judgement on style.",
    ],
    relatedTheoryIds: ["leadership-vs-management", "power-bases", "transformational-leadership", "leadership-styles"],
  },
  {
    id: "stress-causes-coping",
    title: "Stress: causes, consequences and coping",
    source: "Recurs across papers (Q3-style stress questions)",
    commandWord: "Analyse and discuss / Recommend",
    hub: "Stress",
    question: "Analyse and discuss the causes/sources and consequences of workplace stress, and recommend general mechanisms that can be employed to cope with stress.",
    answerPlan: [
      "Define stress and distinguish the helpful from the harmful kind.",
      "Group sources into environmental, organisational and individual.",
      "Set out consequences at individual and organisational levels.",
      "Recommend individual and organisational coping mechanisms.",
    ],
    modelAnswer: [
      { body: "Stress is the response people experience when faced with demands and pressures that strain their ability to cope (Robbins and Judge, 2019). A moderate level, or eustress, can sharpen performance, but sustained high stress, or distress, damages people and organisations." },
      { heading: "Sources of stress", body: "Sources cluster into environmental, organisational and individual groups. Environmental factors include economic and technological uncertainty. Organisational factors include role overload, role conflict and ambiguity, poor relationships, time pressure and weak job control. Individual factors include personality, family pressures and personal economic worries." },
      { heading: "Consequences", body: "For individuals, consequences are physiological, psychological and behavioural. For the organisation these aggregate into higher sick leave, lower output, higher staff turnover and replacement costs." },
      { heading: "Recommended coping mechanisms", bullets: [
        "Better job design and realistic goal-setting to reduce overload.",
        "Role clarification to cut conflict and ambiguity.",
        "Genuine employee involvement to restore a sense of control.",
        "Wellness programmes and accessible support such as counselling.",
        "Supportive management and open communication so pressures surface early.",
      ] },
      { heading: "Conclusion", body: "Stress is best tackled at the source. Individual coping helps, but larger and more durable gains come from organisational design choices that reduce demands and increase the control employees have over their work." },
    ],
    commonMistakes: [
      "Treating all stress as negative.",
      "Listing causes and stopping, when the verb also requires consequences and recommendations.",
      "Recommending only individual fixes and ignoring organisational design.",
    ],
    examinerLooksFor: [
      "Sources grouped, not just listed.",
      "Consequences at both individual and organisational levels.",
      "Coping split into individual and organisational, with organisational given weight.",
    ],
    relatedTheoryIds: ["stress-management", "role-ambiguity", "role-conflict-stress", "work-overload", "burnout", "coping-strategies"],
  },
  {
    id: "systems-theory-management",
    title: "Systems theory of management",
    source: "Recurs across papers (systems theory with diagram)",
    commandWord: "Apply / Discuss (with a diagram)",
    hub: "Management Theory",
    question: "Apply the systems theory of management to elaborate on the interdependent relationship between the organisation and its business environment.",
    answerPlan: [
      "Define the organisation as an open system.",
      "Walk inputs, throughputs, outputs and feedback, with examples.",
      "Explain interdependence and the idea of subsystems and synergy.",
      "Draw or describe the simple input-process-output diagram.",
    ],
    modelAnswer: [
      { body: "Systems theory views the organisation as an open system that interacts continuously with its environment, rather than a closed machine. An open system takes in resources, transforms them, releases outputs back into the environment, and adjusts using feedback (Robbins and Judge, 2019)." },
      { heading: "The core elements", body: "Inputs are resources drawn from the environment: people, capital, materials, information and technology. Throughputs are the activities that convert inputs into value. Outputs are the products, services, profits and information returned to the environment. Feedback is information about how outputs were received, which the system uses to adjust future inputs and processes." },
      { heading: "Interdependence and subsystems", body: "The organisation and its environment depend on each other: the environment supplies inputs and absorbs outputs, while changes in regulation, competition or customer expectations force adaptation. Internally the organisation is made of interdependent subsystems, and a change in one ripples through the others. Synergy means the whole achieves more than the sum of the parts when subsystems are well coordinated." },
      { heading: "Diagram prompt", body: "Sketch a left-to-right flow: Environment supplies INPUTS to a central TRANSFORMATION box; the box releases OUTPUTS back to the Environment; a FEEDBACK arrow loops from outputs back to inputs. Label the surrounding box 'business environment' to show openness." },
      { heading: "Conclusion", body: "Systems theory is valuable because it stops managers treating their organisation in isolation. It frames the firm as an open, adaptive system whose survival depends on reading its environment, coordinating subsystems, and using feedback to keep inputs, processes and outputs in balance." },
    ],
    commonMistakes: [
      "Forgetting feedback, which is what makes the system adaptive.",
      "Describing the parts but never showing interdependence with the environment.",
      "Skipping the diagram when the question asks for one.",
    ],
    examinerLooksFor: [
      "The four elements: inputs, throughputs, outputs and feedback.",
      "Explicit interdependence between organisation and environment.",
      "A labelled diagram and the idea of subsystems and synergy.",
    ],
    relatedTheoryIds: ["systems-theory", "organisational-environment-theory", "chaos-theory"],
  },
];

export const OB_REFERENCES = [
  "Adams, J.S. (1965) 'Inequity in social exchange', in Berkowitz, L. (ed.) Advances in Experimental Social Psychology, Vol. 2. New York: Academic Press, pp. 267-299.",
  "Bass, B.M. (1985) Leadership and Performance Beyond Expectations. New York: Free Press.",
  "Burns, J.M. (1978) Leadership. New York: Harper & Row.",
  "By, R.T. (2005) 'Organisational change management: a critical review', Journal of Change Management, 5(4), pp. 369-380.",
  "Cummings, S., Bridgman, T. and Brown, K.G. (2016) 'Unfreezing change as three steps: rethinking Kurt Lewin's legacy for change management', Human Relations, 69(1), pp. 33-60.",
  "French, J.R.P. and Raven, B. (1959) 'The bases of social power', in Cartwright, D. (ed.) Studies in Social Power. Ann Arbor: University of Michigan Press, pp. 150-167.",
  "Herzberg, F., Mausner, B. and Snyderman, B.B. (1959) The Motivation to Work. New York: John Wiley & Sons.",
  "Hofstede, G., Hofstede, G.J. and Minkov, M. (2010) Cultures and Organizations: Software of the Mind. 3rd edn. New York: McGraw-Hill.",
  "Kotter, J.P. (1990) A Force for Change: How Leadership Differs from Management. New York: Free Press.",
  "Kotter, J.P. (1996) Leading Change. Boston: Harvard Business School Press.",
  "Kotter, J.P. and Schlesinger, L.A. (1979) 'Choosing strategies for change', Harvard Business Review, 57(2), pp. 106-114.",
  "Lewin, K. (1947) 'Frontiers in group dynamics', Human Relations, 1(1), pp. 5-41.",
  "Maslow, A.H. (1943) 'A theory of human motivation', Psychological Review, 50(4), pp. 370-396.",
  "McClelland, D.C. (1961) The Achieving Society. Princeton: Van Nostrand.",
  "Robbins, S.P. and Judge, T.A. (2019) Organizational Behavior. 18th edn. Harlow: Pearson.",
  "Schein, E.H. and Schein, P.A. (2017) Organizational Culture and Leadership. 5th edn. Hoboken: John Wiley & Sons.",
  "Tuckman, B.W. (1965) 'Developmental sequence in small groups', Psychological Bulletin, 63(6), pp. 384-399.",
  "Vroom, V.H. (1964) Work and Motivation. New York: John Wiley & Sons.",
];

export function getOBWorkedSolution(id: string) {
  return OB_WORKED_SOLUTIONS.find((solution) => solution.id === id);
}
