/* ============================================================================
   ORB801 UNIT NOTES (plain-language teaching notes)
   --------------------------------------------------------------------------
   Purpose: every OB unit now opens with student-facing notes that introduce
   the unit, explain the main concepts in plain language with examples, then
   point to the relevant theory cards. This brings the OB units to the same
   "start here" standard already used on the IKM / OM / MM unit pages.

   Primary sources (per unit):
     - MANCOSA ORB801 Module Guide (2025)
     - Jones, G.R., George, J.M. & Hill, C.W.L. (2013) Contemporary Management,
       8th ed., Boston: McGraw-Hill (prescribed textbook)
   Supplementary (labelled where used, never the primary authority):
     - OpenStax, Principles of Management (2019), Rice University (openstax.org)

   This file is additive only. It is merged onto the existing `units` array in
   ./index.ts via the `notes` field; no existing unit data is changed.
   ============================================================================ */

export type UnitConceptNote = { concept: string; explanation: string; example: string };
export type UnitMapRow = { outcome: string; content: string; theory: string };
export type UnitNotes = {
  introduction: string;
  concepts: UnitConceptNote[];
  application: string;
  map: UnitMapRow[];
  sources?: string[];
};

const MG = "MANCOSA ORB801 Module Guide (2025)";
const TXT = "Jones, George & Hill (2013) Contemporary Management, 8th ed.";
const OS = "OpenStax, Principles of Management (2019) — supplementary";

export const OB_UNIT_NOTES: Record<string, UnitNotes> = {
  /* ---------------------------------------------------------------- Unit 1 */
  u1: {
    introduction:
      "Management is simply the work of getting things done through other people so that an organisation reaches its goals using its resources well. This first unit sets the foundation for the whole module: before you can analyse behaviour, motivation or leadership, you need a clear picture of what a manager actually does all day and what makes one effective.\n\n" +
      "The module guide defines management around four functions — planning, organising, leading and controlling. Think of these as a cycle a manager moves through continually: decide what to do and how (planning), arrange people and resources to do it (organising), motivate and direct people while it happens (leading), and check progress and correct course (controlling). The unit then looks at the three levels of management, the roles managers play and the skills they need.\n\n" +
      "Read this unit as your vocabulary list. Almost every later unit is really a deep dive into one part of it — Units 5 to 9 expand 'leading', Unit 10 expands 'organising', and Unit 12 is really about 'controlling and changing'. Getting the four functions, three levels and skill mix clear now makes everything after it easier.",
    concepts: [
      {
        concept: "The four managerial functions (Fayol's cycle)",
        explanation:
          "Planning = setting goals and choosing how to reach them; organising = grouping tasks and people and giving them authority; leading = motivating, directing and communicating so people pull in the same direction; controlling = measuring performance against the plan and fixing gaps. They run as a loop, not a once-off list.",
        example:
          "A coffee-shop owner plans a new breakfast menu, organises shifts and a supplier, leads the baristas through the launch, then controls by checking daily sales and waste and adjusting portion sizes.",
      },
      {
        concept: "Three levels of management",
        explanation:
          "Top managers set the overall direction and long-term strategy; middle managers translate that strategy into department goals and coordinate; first-line (supervisory) managers oversee the day-to-day work of non-managerial staff. Higher levels spend more time planning and less time supervising.",
        example:
          "In a supermarket chain, the CEO decides to expand into townships (top), regional managers turn that into store-opening targets (middle), and a store manager schedules tills and stock-packing each day (first-line).",
      },
      {
        concept: "Managerial roles (Mintzberg)",
        explanation:
          "Beyond the four functions, managers play recognisable roles grouped as interpersonal (figurehead, leader, liaison), informational (monitor, disseminator, spokesperson) and decisional (entrepreneur, disturbance-handler, resource-allocator, negotiator). The point: a manager's day is fragmented and people-heavy, not just desk planning.",
        example:
          "A clinic manager opens a new wing (figurehead), shares a Department of Health circular with staff (disseminator) and settles a roster dispute (disturbance-handler) — all before lunch.",
      },
      {
        concept: "Managerial skills (Katz)",
        explanation:
          "Managers rely on three skill types: technical (knowing the actual work), human (working with and through people) and conceptual (seeing the big picture and how parts connect). Human skill matters at every level; technical skill matters most lower down, conceptual skill most at the top.",
        example:
          "A newly promoted engineer who was brilliant technically struggles as a manager until they build human skill — listening, delegating and giving feedback rather than doing every task themselves.",
      },
      {
        concept: "Current challenges for managers",
        explanation:
          "Modern managers must handle globalisation, rapid technology change, diversity and inclusion, ethics and sustainability, and the shift to knowledge and remote work. These pressures are why later units on environment, change and culture exist.",
        example:
          "A South African retailer balancing load-shedding, online competition, B-BBEE goals and a hybrid head office is wrestling with several of these challenges at once.",
      },
    ],
    application:
      "Use this unit as a diagnostic lens. When an exam case describes a problem, first ask: which function is failing — planning, organising, leading or controlling? That single question often unlocks the answer. If the issue is unclear goals, it is planning; if it is confused reporting lines, it is organising; if it is low morale, it is leading; if targets are missed unnoticed, it is controlling.\n\n" +
      "This unit deliberately has few theory cards because it is foundational vocabulary rather than a competing set of theories. The frameworks that build on it appear in Unit 2 (how management thinking evolved) and across Part B. When you cite this unit, name the function, level, role or skill precisely rather than saying 'bad management'.",
    map: [
      { outcome: "Define management", content: "1.2 Management Defined", theory: "Foundational vocabulary (no competing theory card)" },
      { outcome: "Discuss the four managerial functions", content: "1.3 Managerial Functions", theory: "Planning–Organising–Leading–Controlling cycle (Fayol)" },
      { outcome: "Differentiate the three levels of management", content: "1.4 Types of Management", theory: "Top / middle / first-line levels" },
      { outcome: "Discuss managerial roles and skills", content: "1.5 Roles; 1.6 Skills", theory: "Mintzberg's roles; Katz's technical/human/conceptual skills" },
      { outcome: "Discuss the challenges managers face today", content: "1.7 Current Challenges", theory: "Globalisation, technology, diversity, ethics (see Units 3 & 12)" },
    ],
    sources: [MG + ", Unit 1", TXT + ", Ch.1 Managers and Managing", OS + ", Ch.1"],
  },

  /* ---------------------------------------------------------------- Unit 2 */
  u2: {
    introduction:
      "This unit tells the story of how management thinking grew up, from roughly 1900 to today. It matters because each 'school' of thought was an answer to the problems of its time, and exam questions love to ask you to apply the right school to a case. If a case is about efficiency you reach for one theory; if it is about morale you reach for another.\n\n" +
      "The six approaches in the guide move from a narrow, mechanical view of work toward a richer, more human and finally more unpredictable view of organisations. Early theories (scientific and administrative management) treated the organisation like a machine to be tuned. Behavioural management discovered that people are social and emotional, not just paid hands. Management science added mathematics and data. The last two — organisational environment theory and chaos theory — accept that organisations sit inside a changing, sometimes unpredictable world.\n\n" +
      "You are not asked to memorise dates. You are asked to recognise the logic of each school, apply its principles to a situation, and judge its strengths and limits. Each school has a dedicated theory card; this note shows how they fit together so you can choose the right one quickly.",
    concepts: [
      {
        concept: "Scientific management (Taylor, the Gilbreths)",
        explanation:
          "Find the 'one best way' to do each task through time-and-motion study, then standardise it, select and train workers scientifically, and pay by output. Strength: big efficiency gains. Limit: treats people as instruments and ignores their social needs.",
        example:
          "A vehicle-assembly line that times each station and pays an output bonus is using scientific-management logic.",
      },
      {
        concept: "Administrative management (Fayol, Weber)",
        explanation:
          "Focuses on the whole organisation rather than the single task. Fayol's principles (unity of command, scalar chain, division of work) and Weber's bureaucracy (clear hierarchy, written rules, merit appointment) aim for order and fairness.",
        example:
          "A government department with written procedures, clear reporting lines and appointment by qualification reflects Weberian bureaucracy.",
      },
      {
        concept: "Behavioural management (Mayo, Follett, the Hawthorne studies)",
        explanation:
          "People work better when they feel noticed, belong to a group and have good relationships — not only for money. This 'human relations' insight is the root of the entire Part B of the module (motivation, teams, leadership).",
        example:
          "Output at the Hawthorne plant rose simply because workers knew they were being studied and felt valued — the 'Hawthorne effect'.",
      },
      {
        concept: "Management science theory",
        explanation:
          "Uses quantitative tools — statistics, modelling, operations research, information systems — to make better decisions. It is the data-driven descendant of scientific management and links directly to Operations and Information Management.",
        example:
          "Using a forecasting model and inventory formula to decide how much stock to hold is management science in action.",
      },
      {
        concept: "Organisational environment theory",
        explanation:
          "Organisations are open systems that depend on and must adapt to their environment (suppliers, customers, regulators, competitors). Resource-dependence and contingency thinking sit here: the 'right' structure depends on the environment.",
        example:
          "A bank rapidly building a mobile app because fintech rivals are taking its customers is responding to environmental pressure.",
      },
      {
        concept: "Chaos theory",
        explanation:
          "Some change is non-linear and unpredictable; small events can have large effects, so managers cannot plan everything. The response is flexibility, learning and resilience rather than rigid control. This feeds directly into Unit 12 on change.",
        example:
          "A sudden global supply shock or a viral social-media post can upend a plan overnight, rewarding firms that adapt fast.",
      },
    ],
    application:
      "The exam skill here is matching: read the case for clues and pick the school whose logic fits. Efficiency, targets and standard procedures → scientific management. Rules, hierarchy and fairness → administrative management/bureaucracy. Morale, belonging and recognition → behavioural management. Data and modelling → management science. Adapting to outside forces → environment theory. Unpredictable, fast-moving change → chaos theory.\n\n" +
      "Strong answers also evaluate: name the school, apply it to an exact case fact, then state one limitation and a recommendation. Each school's theory card gives you the theorists, assumptions, strengths and a paragraph template — open the card for the framework you have chosen.",
    map: [
      { outcome: "Apply scientific management", content: "2.2", theory: "Scientific Management (Taylor, Gilbreths)" },
      { outcome: "Apply administrative management", content: "2.3", theory: "Administrative Management / Bureaucracy (Fayol, Weber)" },
      { outcome: "Apply behavioural management", content: "2.4", theory: "Behavioural Management / Human Relations (Mayo, Follett)" },
      { outcome: "Apply management science", content: "2.5", theory: "Management Science Theory" },
      { outcome: "Apply organisational environment theory", content: "2.6", theory: "Organisational Environment Theory (open systems, contingency)" },
      { outcome: "Apply chaos theory", content: "2.7", theory: "Chaos Theory" },
    ],
    sources: [MG + ", Unit 2", TXT + ", Ch.2 The Evolution of Management Thought", OS + ", Ch.3"],
  },

  /* ---------------------------------------------------------------- Unit 3 */
  u3: {
    introduction:
      "No organisation operates in a vacuum. This unit teaches you to read the forces outside and inside a firm that shape its choices and its room to manoeuvre. Examiners use it to test whether you can diagnose why an organisation is under pressure and what it can realistically control.\n\n" +
      "The guide splits the environment into three layers. The general (macro) environment is the wide backdrop — political, economic, social, technological, legal and environmental forces (PESTLE) — that affects everyone and that a single firm cannot change. The task environment is closer and firm-specific: customers, competitors, suppliers and distributors the firm deals with directly. The internal environment is inside the boundary: the firm's own resources, culture, structure and capabilities.\n\n" +
      "The practical message is about control. A firm cannot change interest rates or load-shedding (general), but it can choose suppliers and respond to competitors (task) and it fully controls its own structure and culture (internal). Good managers monitor all three layers and act where they actually have leverage.",
    concepts: [
      {
        concept: "The general (macro) environment — PESTLE",
        explanation:
          "Broad forces that affect all firms and lie largely outside their control: Political, Economic, Social, Technological, Legal and Environmental/ecological. You scan them to anticipate threats and opportunities, not to control them.",
        example:
          "A rising fuel price (economic) and new data-protection law (legal) both reshape what a delivery start-up can afford and must comply with.",
      },
      {
        concept: "The task (operating) environment",
        explanation:
          "The specific outside groups a firm interacts with daily — customers, competitors, suppliers and distributors. Porter's Five Forces is the standard tool for analysing how much pressure these put on profitability.",
        example:
          "A small bakery with one flour supplier and three rival bakeries nearby faces supplier power and competitive rivalry in its task environment.",
      },
      {
        concept: "The internal environment",
        explanation:
          "What lies inside the organisation: its people, finances, structure, systems, culture and distinctive capabilities. This is where the firm has the most control and where strengths and weaknesses (the 'SW' of SWOT) live.",
        example:
          "A firm whose strong service culture and skilled staff let it out-serve rivals is leaning on its internal environment.",
      },
      {
        concept: "Managing the environment",
        explanation:
          "Because the environment creates uncertainty, managers respond by scanning and forecasting, building buffers (stock, cash, supplier alternatives), forming alliances, and staying flexible. The aim is to reduce dependence and absorb shocks.",
        example:
          "Holding safety stock and signing a second supplier protects a manufacturer against a single supplier failing.",
      },
    ],
    application:
      "When a case describes a struggling organisation, sort the forces into the three layers and then ask what the firm can control. This stops you recommending the impossible ('lower inflation') and steers you to realistic action ('renegotiate suppliers', 'change the internal structure'). Use PESTLE for the general layer and Porter's Five Forces for the task layer.\n\n" +
      "This unit links forward to strategy and back to Unit 2's organisational environment theory (the idea that firms are open systems). Its theory cards — Macro-environment/PESTLE, Porter's Five Forces and Organisational Environment Theory — give you the structured tools to turn a messy case into a clear environmental analysis.",
    map: [
      { outcome: "Differentiate general, task and internal environments", content: "3.2–3.4", theory: "Three-layer environment model" },
      { outcome: "Discuss the general environment", content: "3.2 The General Environment", theory: "Macro-environment / PESTLE" },
      { outcome: "Discuss the task environment", content: "3.3 The Task Environment", theory: "Porter's Five Forces" },
      { outcome: "Discuss the internal environment", content: "3.4 The Internal Environment", theory: "Internal resources & capabilities (SWOT 'SW')" },
      { outcome: "Manage the forces for effectiveness", content: "3.5 Managing the Environment", theory: "Organisational Environment Theory (buffering, alliances)" },
    ],
    sources: [MG + ", Unit 3", TXT + ", Ch.6 Managing in the Global Environment", OS + ", Ch.4 & 8"],
  },

  /* ---------------------------------------------------------------- Unit 4 */
  u4: {
    introduction:
      "This unit opens Part B of the module — organisational behaviour proper — by zooming in on the individual. Before you can manage teams, motivation or culture, you need to understand the person: why two people in the same job behave so differently. That difference comes from personality, values, attitudes, emotions, perception and how they handle stress.\n\n" +
      "The logic is that behaviour at work is driven by a mix of who someone is (relatively stable personality and values) and how they read and feel about their situation (attitudes, emotions, perception) — plus the pressure they are under (stress). Managers cannot change personalities, but they can shape situations, give fair feedback, manage perceptions and reduce harmful stress.\n\n" +
      "This is the most 'human' unit and one of the most examinable, because real cases are full of individuals reacting in different ways. The goal is to give you precise language — instead of 'the employee is difficult', you can say 'low agreeableness, a negative job attitude and role-related stress', and then recommend something specific.",
    concepts: [
      {
        concept: "Personality and the Big Five",
        explanation:
          "Personality is a stable pattern of thinking, feeling and behaving. The Big Five model describes it on five dimensions — Openness, Conscientiousness, Extraversion, Agreeableness and Neuroticism (OCEAN). Conscientiousness is the strongest general predictor of job performance.",
        example:
          "A highly conscientious, low-neuroticism employee stays organised and calm under deadline pressure, while a high-neuroticism colleague needs more reassurance.",
      },
      {
        concept: "Values and attitudes",
        explanation:
          "Values are deep beliefs about what is right or important; attitudes are evaluations of specific things (a job, a boss). Key work attitudes are job satisfaction and organisational commitment, which influence effort, absence and turnover.",
        example:
          "An employee who values fairness highly will form a negative attitude fast if they see favouritism, and may disengage or leave.",
      },
      {
        concept: "Emotions and moods",
        explanation:
          "Emotions are short, intense reactions to events; moods are milder and longer. Both affect decisions, creativity and how people treat each other. 'Emotional labour' is the effort of managing feelings as part of a job, especially in service roles.",
        example:
          "A call-centre agent staying warm with an angry customer is performing emotional labour, which over time can drain them.",
      },
      {
        concept: "Perception and its biases",
        explanation:
          "Perception is how we select, organise and interpret information to make sense of the world — and it is often distorted. Common biases include stereotyping, the halo effect, and attribution errors (blaming the person rather than the situation).",
        example:
          "A manager who rates a well-spoken candidate highly on everything because of one strong impression is showing the halo effect.",
      },
      {
        concept: "Stress and wellbeing",
        explanation:
          "Stress is the response to demands (stressors). Some pressure (challenge stress) can energise; too much, or the wrong kind (hindrance stress, role conflict, overload), harms health and performance and can cause burnout. Managers reduce harmful stressors and build coping support.",
        example:
          "An employee given conflicting instructions by two bosses (role conflict) and an impossible workload becomes exhausted and starts making errors.",
      },
    ],
    application:
      "Use this unit to break a 'people problem' into its parts. Ask: is this about the person's stable traits (personality, values), how they are reading the situation (perception, attitudes, emotions), or the pressure on them (stress)? Each points to a different fix — selection and job-fit for traits, communication and fairness for perceptions and attitudes, and workload or role-clarity changes for stress.\n\n" +
      "This unit has the richest set of theory cards in the module (personality frameworks, perception, several stress and wellbeing theories, job satisfaction, self-determination, psychological safety). Pick the card that matches the exact individual issue in the case rather than reaching for a single all-purpose theory.",
    map: [
      { outcome: "Discuss personality and its influence", content: "4.2 Personality", theory: "Personality Frameworks (Big Five)" },
      { outcome: "Differentiate values and attitudes", content: "4.3 Values and Attitudes", theory: "Job Satisfaction; Cognitive Dissonance" },
      { outcome: "Discuss the impact of emotions", content: "4.4 Emotions", theory: "Emotions, moods & emotional labour" },
      { outcome: "Discuss perception on the manager's work", content: "4.5 Perceptions", theory: "Perception & perceptual biases" },
      { outcome: "Discuss causes/consequences of stress and how to address it", content: "4.6 Stress", theory: "Stress Management; Challenge/Hindrance Stressors; Burnout; Coping; Wellbeing & Performance; Psychological Safety" },
    ],
    sources: [MG + ", Unit 4", TXT + ", Ch.3 Values, Attitudes, Emotions and Culture", OS + ", Ch.2 & 14"],
  },

  /* ---------------------------------------------------------------- Unit 5 */
  u5: {
    introduction:
      "Motivation answers the most practical management question of all: why do people put in effort, and how can a manager raise it? This unit is heavily examined because almost any case about low performance, absenteeism or turnover is, at its heart, a motivation problem.\n\n" +
      "The guide divides motivation theories into two families. Content theories ask what people need or want (Maslow, Alderfer, Herzberg, McClelland) — they explain the 'fuel'. Process theories ask how motivation actually forms and is sustained (expectancy, equity, goal-setting, learning) — they explain the 'engine'. A complete answer usually uses one of each: name the unmet need, then show the broken process.\n\n" +
      "The unit also separates intrinsic motivation (the work itself is rewarding) from extrinsic motivation (rewards like pay come from outside), and looks specifically at how pay does — and does not — motivate. The key insight is that money matters but rarely on its own; fairness, clear goals and meaningful work matter just as much.",
    concepts: [
      {
        concept: "Intrinsic vs extrinsic motivation",
        explanation:
          "Intrinsic motivation comes from the work itself — interest, achievement, growth. Extrinsic motivation comes from outside rewards — pay, bonuses, praise, avoiding punishment. The best jobs build in both; relying only on extrinsic rewards can crowd out genuine engagement.",
        example:
          "A nurse driven by caring for patients (intrinsic) still expects fair pay (extrinsic); cut the pay unfairly and even the intrinsic drive fades.",
      },
      {
        concept: "Content theories — what people need",
        explanation:
          "Maslow's hierarchy (physiological → safety → social → esteem → self-actualisation), Alderfer's ERG, Herzberg's two-factor (hygiene factors prevent dissatisfaction; motivators create satisfaction) and McClelland's needs (achievement, affiliation, power) all describe the needs that energise behaviour.",
        example:
          "Herzberg explains why fixing pay and conditions (hygiene) stops complaints but does not excite people — you also need recognition and responsibility (motivators).",
      },
      {
        concept: "Expectancy theory (Vroom)",
        explanation:
          "People are motivated when they believe effort will lead to performance (expectancy), performance will lead to a reward (instrumentality), and the reward is something they value (valence). If any link is broken, motivation collapses.",
        example:
          "Staff stop trying when bonuses feel random (weak instrumentality) — they no longer believe good work reliably earns the reward.",
      },
      {
        concept: "Equity theory (Adams)",
        explanation:
          "People compare their own effort-to-reward ratio with others'. Feeling under-rewarded relative to a peer creates tension they act to reduce — by lowering effort, demanding more, or leaving. Perceived fairness is as important as the absolute reward.",
        example:
          "A worker who learns a less-productive colleague earns more feels inequity and quietly reduces effort to 'balance' it.",
      },
      {
        concept: "Goal-setting theory (Locke & Latham)",
        explanation:
          "Specific, challenging-but-achievable goals, with feedback and commitment, drive higher performance than vague 'do your best' goals. This is the basis of SMART targets.",
        example:
          "Changing 'improve sales' to 'sign 10 new clients this quarter' gives a salesperson a clear, motivating target to aim at.",
      },
      {
        concept: "Pay and motivation",
        explanation:
          "Pay motivates best when it is clearly linked to performance (supporting expectancy) and seen as fair (supporting equity). Poorly designed pay can demotivate — by feeling arbitrary, unfair, or by turning interesting work into a transaction.",
        example:
          "A transparent, performance-linked incentive scheme motivates; a secretive, inconsistent one breeds suspicion and disengagement.",
      },
    ],
    application:
      "The reliable exam method is to pair a content theory with a process theory. First identify the unmet need (e.g. esteem/recognition via Herzberg or Maslow), then show which process is broken (e.g. unfair rewards via equity, or unclear goals via goal-setting), then recommend a specific fix. Avoid the trap of writing 'they need motivation' — name the exact need and the exact broken link.\n\n" +
      "Each theory has its own card with assumptions, strengths and a paragraph template. Self-determination theory and job satisfaction (shared with Unit 4) deepen the intrinsic-motivation side. Choose the two or three theories that best fit the case rather than listing all of them.",
    map: [
      { outcome: "Discuss the nature of motivation", content: "5.2 Nature of Motivation", theory: "Intrinsic vs extrinsic; Self-Determination Theory" },
      { outcome: "Apply need theories", content: "5.3 Motivation Theories", theory: "Need Theories (Maslow, Alderfer, Herzberg, McClelland)" },
      { outcome: "Apply expectancy theory", content: "5.3", theory: "Expectancy Theory (Vroom)" },
      { outcome: "Apply equity theory", content: "5.3", theory: "Equity Theory (Adams)" },
      { outcome: "Apply goal-setting and learning theories", content: "5.3", theory: "Goal-Setting Theory; Learning Theories" },
      { outcome: "Discuss the impact of pay", content: "5.4 Pay and Motivation", theory: "Pay linked to expectancy & equity" },
    ],
    sources: [MG + ", Unit 5", TXT + ", Ch.13 Motivation and Performance", OS + ", Ch.14 Motivating Employees"],
  },

  /* ---------------------------------------------------------------- Unit 6 */
  u6: {
    introduction:
      "Most real work happens in groups, so this unit moves from the individual to the collective. It teaches you the difference between a group and a true team, why teams can outperform individuals, and what makes some teams excel while others stall.\n\n" +
      "The core distinction is simple but examinable: a group is people who interact to achieve their own goals, while a team is a group whose members work intensely together toward a shared goal and hold joint responsibility. Teams create 'synergy' — output greater than the sum of individuals — but only when managed well; badly managed groups suffer social loafing, conflict and groupthink.\n\n" +
      "The unit then covers types of groups and teams (formal/informal, cross-functional, self-managed, virtual), the dynamics inside them (size, roles, norms, cohesiveness, development stages) and the practical levers a manager pulls to turn a group into a high-performing team.",
    concepts: [
      {
        concept: "Groups vs teams",
        explanation:
          "A group shares information and resources so each member performs their own work; a team has a shared goal, complementary skills and mutual accountability. All teams are groups, but not all groups are teams.",
        example:
          "Tellers in a bank branch are a group (each serves their own queue); a project squad redesigning the app together is a team.",
      },
      {
        concept: "Types of groups and teams",
        explanation:
          "Formal groups are created by the organisation (command groups, task forces, cross-functional teams); informal groups arise from social ties. Modern forms include self-managed teams (run themselves) and virtual teams (work across distance via technology).",
        example:
          "A self-managed maintenance crew that plans its own roster, and a virtual team spanning Cape Town and Nairobi meeting online, are two modern team types.",
      },
      {
        concept: "Group dynamics — size, roles, norms, cohesiveness",
        explanation:
          "How a group behaves depends on its size (too big invites loafing), the roles members take, the norms (shared informal rules) it develops, and its cohesiveness (how tightly it sticks together). Moderate cohesiveness with high-performance norms is ideal.",
        example:
          "A tight-knit team with a norm of 'we never miss a deadline' lifts everyone; a tight-knit team with a norm of 'do the minimum' drags everyone down.",
      },
      {
        concept: "Stages of team development (Tuckman)",
        explanation:
          "Teams typically move through forming (polite, uncertain), storming (conflict over roles), norming (settling rules), performing (productive) and adjourning (wrapping up). Knowing the stage tells a manager what support the team needs now.",
        example:
          "A new project team bickering over who leads is in 'storming' and needs facilitation, not more pressure.",
      },
      {
        concept: "Managing for high performance",
        explanation:
          "Managers raise team performance by setting clear goals, keeping size right, defining roles, encouraging healthy norms, building cohesion around the task, and reducing social loafing through individual accountability.",
        example:
          "Assigning each team member a visible, named deliverable removes the hiding place that causes social loafing.",
      },
    ],
    application:
      "In a case, first decide whether you are looking at a group or a true team, because the recommendation differs. If output is poor, scan the dynamics: is the group too large, are norms unhealthy, is cohesiveness low or pulling against the goal, is there social loafing? Then prescribe the matching lever — clarify goals, reset norms, shrink the group, or add individual accountability.\n\n" +
      "This unit's primary theory card (groups vs teams) anchors the distinction; it also connects strongly to Unit 7 (communication), Unit 8 (leadership) and Unit 9 (conflict), because how a team communicates, is led and handles conflict largely determines whether it performs.",
    map: [
      { outcome: "Differentiate groups and teams", content: "6.2 Groups vs Teams", theory: "Groups vs Teams" },
      { outcome: "Explain teams and organisational effectiveness", content: "6.3", theory: "Synergy & team effectiveness" },
      { outcome: "Distinguish types of groups and teams", content: "6.4 Types", theory: "Formal/informal, cross-functional, self-managed, virtual teams" },
      { outcome: "Discuss group dynamics", content: "6.5 Group Dynamics", theory: "Size, roles, norms, cohesiveness; Tuckman's stages" },
      { outcome: "Apply principles of high-performance teams", content: "6.6 Managing for High Performance", theory: "Goal clarity, accountability, reducing social loafing" },
    ],
    sources: [MG + ", Unit 6", TXT + ", Ch.15 Effective Groups and Teams", OS + ", Ch.13 Managing Teams"],
  },

  /* ---------------------------------------------------------------- Unit 7 */
  u7: {
    introduction:
      "Communication is the nervous system of an organisation — nothing else works without it. This unit explains how communication actually happens, what can go wrong, the channels and networks available, how technology has changed it, and the skills a manager needs to communicate well.\n\n" +
      "At its centre is the communication process: a sender encodes a message, sends it through a medium, and a receiver decodes it and (ideally) gives feedback, all while 'noise' threatens to distort it. Most workplace misunderstandings are failures at one of these steps — a poorly encoded message, a wrong channel, or no feedback loop.\n\n" +
      "The unit then looks at choosing the right medium (rich face-to-face for sensitive issues, lean email for simple facts), the patterns communication flows in (networks), the impact of digital tools, and the personal skills — listening, clarity, empathy — that separate effective communicators from the rest.",
    concepts: [
      {
        concept: "The communication process",
        explanation:
          "Sender → encode → message → medium → receiver → decode → feedback, with 'noise' able to distort any stage. Communication only succeeds when shared meaning is created and confirmed through feedback.",
        example:
          "A manager emails 'handle this ASAP'; the vague encoding plus no feedback means the employee guesses the priority wrong.",
      },
      {
        concept: "Communication media and richness",
        explanation:
          "Media vary in 'richness' — how much information they carry. Face-to-face is richest (words, tone, body language, instant feedback); a memo or email is leaner. Match richness to the message: rich media for complex, emotional or ambiguous issues.",
        example:
          "Delivering bad news about retrenchments by email is a classic medium mismatch; it needs a rich, face-to-face channel.",
      },
      {
        concept: "Communication networks",
        explanation:
          "The patterns through which information flows in a group — e.g. chain, wheel and all-channel. Centralised networks (wheel) are fast for simple tasks; decentralised ones (all-channel) suit complex tasks needing lots of input.",
        example:
          "A creative team solving a complex problem performs better in an all-channel network where everyone can talk to everyone.",
      },
      {
        concept: "Technical advances in communication",
        explanation:
          "Email, instant messaging, video-conferencing, intranets and collaboration platforms speed up communication and enable virtual teams, but bring overload, misread tone and an 'always-on' culture. Managers must set norms for their use.",
        example:
          "A team drowning in after-hours messages agrees a norm: no non-urgent messages after 6pm, urgent ones by call only.",
      },
      {
        concept: "Managerial communication skills",
        explanation:
          "Key skills include active listening, clear and concise expression, choosing the right medium, giving and inviting feedback, and reading non-verbal cues and emotions (linking to emotional intelligence).",
        example:
          "A manager who paraphrases an employee's concern back to them before responding shows active listening and avoids misunderstanding.",
      },
    ],
    application:
      "When a case shows confusion, missed instructions or conflict, trace it through the communication process to find the broken step — encoding, medium choice, noise, or missing feedback — then fix that specific step. Often the simplest, highest-value recommendation in an OB case is 'establish a feedback loop' or 'use a richer medium'.\n\n" +
      "The communication-process theory card gives you the structured model to cite. This unit underpins Units 6, 8 and 9: teams, leadership and conflict are all carried by communication, so a communication breakdown is frequently the root cause beneath a surface problem.",
    map: [
      { outcome: "Explain the communication process", content: "7.2 The Communication Process", theory: "Communication Process (sender–encode–medium–decode–feedback–noise)" },
      { outcome: "Use communication media appropriately", content: "7.3 Communication Media", theory: "Media richness" },
      { outcome: "Use communication networks", content: "7.4 Communication Networks", theory: "Centralised vs decentralised networks" },
      { outcome: "Describe technical advances", content: "7.5 Technical Advances", theory: "Digital communication tools & overload" },
      { outcome: "Apply managerial communication skills", content: "7.6 Communication Skills", theory: "Active listening, feedback, non-verbal skills" },
    ],
    sources: [MG + ", Unit 7", TXT + ", Ch.16 Promoting Effective Communication", OS + ", Ch.16 Communication"],
  },

  /* ---------------------------------------------------------------- Unit 8 */
  u8: {
    introduction:
      "Leadership is about influencing people to willingly work toward goals — and it is one of the most examined topics in OB. This unit distinguishes leadership from management, explains where leaders get their power, and walks through the major families of leadership theory from earliest to most modern.\n\n" +
      "The theories build on one another. Trait theory asked what leaders are (qualities); behavioural theory asked what leaders do (task vs people focus); contingency theory argued there is no one best style — it depends on the situation; and transformational theory describes leaders who inspire followers to exceed expectations and embrace change. The unit closes with gender and leadership, recognising that style and access are shaped by gender dynamics.\n\n" +
      "The practical thread is fit. The 'right' leadership approach depends on the followers, the task and the context, so strong answers diagnose the situation before prescribing a style — especially distinguishing transactional leadership (exchange and control) from transformational leadership (vision and change).",
    concepts: [
      {
        concept: "Leadership vs management; sources of power",
        explanation:
          "Management is about coping with complexity (planning, organising, controlling); leadership is about coping with change (setting direction, aligning and inspiring people). Leaders draw on five sources of power: legitimate, reward, coercive, expert and referent.",
        example:
          "A respected senior engineer with no formal title influences the team through expert and referent power, not legitimate authority.",
      },
      {
        concept: "Trait approach",
        explanation:
          "Tries to identify the personal qualities — drive, integrity, self-confidence, intelligence, emotional intelligence — that distinguish leaders. Useful for selection, but traits alone do not guarantee effective leadership.",
        example:
          "A confident, emotionally intelligent candidate may have leadership potential, but still needs the right behaviours and situation to succeed.",
      },
      {
        concept: "Behavioural approach",
        explanation:
          "Focuses on what leaders do, typically along two dimensions: concern for the task (initiating structure) and concern for people (consideration). Effective leaders usually balance both.",
        example:
          "A supervisor who sets clear targets (task) while also checking on staff wellbeing (people) is showing high scores on both behavioural dimensions.",
      },
      {
        concept: "Contingency approach (Fiedler, path-goal)",
        explanation:
          "There is no single best style; effectiveness depends on the situation. Fiedler matches style to how favourable the situation is; path-goal theory says the leader should supply whatever followers and the task lack — direction, support, participation or challenge.",
        example:
          "With an inexperienced team on an unclear task, a directive style helps; with experts on a clear task, the same style frustrates them.",
      },
      {
        concept: "Transactional vs transformational leadership",
        explanation:
          "Transactional leaders motivate through exchanges — rewards for performance, correction for failure. Transformational leaders raise followers' aspirations through vision, inspiration, intellectual stimulation and individual attention, and are especially powerful in times of change.",
        example:
          "Turning around a failing organisation usually calls for transformational leadership to create belief in a new future, not just transactional bonuses.",
      },
      {
        concept: "Gender and leadership",
        explanation:
          "Research finds few real differences in leadership effectiveness by gender, but women often face stereotypes and barriers (the 'glass ceiling') and may be pushed toward or away from certain styles. Inclusive organisations widen the leadership pool.",
        example:
          "A capable woman repeatedly passed over for a top role despite strong results may be hitting a glass-ceiling barrier rather than a competence gap.",
      },
    ],
    application:
      "Diagnose before you prescribe. Read the case for the followers' competence and commitment, the clarity of the task, and the level of change required — then choose the style that fits. Change-heavy cases point to transformational leadership; style-mismatch cases point to contingency thinking; influence-without-authority cases point to expert and referent power.\n\n" +
      "This unit has the widest set of theory cards (leadership vs management, styles, transformational, Fiedler, path-goal, charismatic, servant, paternalistic, laissez-faire, power bases, emotional intelligence, McGregor's Theory X/Y). Pick the two or three that fit; do not list them all. McGregor's Theory X/Y also links back to motivation (Unit 5).",
    map: [
      { outcome: "Differentiate leadership and management", content: "8.2 Nature of Leadership", theory: "Leadership vs Management (Kotter)" },
      { outcome: "Describe the types of power", content: "8.2", theory: "Power Bases (French & Raven)" },
      { outcome: "Apply trait, behavioural and contingency approaches", content: "8.3 Leadership Theories", theory: "Leadership Styles; Fiedler Contingency; Path-Goal Theory" },
      { outcome: "Distinguish transactional and transformational leadership", content: "8.4 Transformational Leadership", theory: "Transformational Leadership; Charismatic; Servant; Paternalistic; Laissez-faire" },
      { outcome: "Discuss gender and leadership", content: "8.5 Gender and Leadership", theory: "Gender, stereotypes & the glass ceiling; Emotional Intelligence" },
    ],
    sources: [MG + ", Unit 8", TXT + ", Ch.14 Leadership", OS + ", Ch.13 Leadership"],
  },

  /* ---------------------------------------------------------------- Unit 9 */
  u9: {
    introduction:
      "Wherever people work together, their interests sometimes clash — so conflict, negotiation and politics are normal features of organisational life, not signs of failure. This unit teaches you to read conflict accurately, resolve it constructively, negotiate agreements and understand the political behaviour around power.\n\n" +
      "A central, examinable idea is that conflict is not always bad. Functional (constructive) conflict over tasks and ideas can sharpen decisions; dysfunctional conflict — usually personal and relationship-based — damages performance. The manager's job is not to eliminate all conflict but to keep it functional and at a moderate level.\n\n" +
      "The unit then covers strategies for managing conflict (the five styles), the two basic approaches to negotiation (win-lose distributive versus win-win integrative), and organisational politics — the use of power and influence to get things done when authority alone is not enough.",
    concepts: [
      {
        concept: "Types and sources of conflict",
        explanation:
          "Conflict types include task conflict (about the work), relationship conflict (personal friction) and process conflict (about how work is done). Sources include scarce resources, goal differences, unclear authority and poor communication. Task conflict can help; relationship conflict usually hurts.",
        example:
          "Two departments fighting over a shrinking budget (resource scarcity) is a classic structural source of conflict.",
      },
      {
        concept: "Functional vs dysfunctional conflict",
        explanation:
          "Functional conflict improves decisions by surfacing different views; dysfunctional conflict consumes energy and breaks relationships. Too little conflict can mean complacency; too much causes paralysis — managers aim for a productive middle.",
        example:
          "A design team that debates ideas fiercely but respectfully (functional) produces better work than one where everyone stays silent to avoid friction.",
      },
      {
        concept: "Conflict-management styles",
        explanation:
          "The five styles trade off concern for self against concern for others: competing, accommodating, avoiding, compromising and collaborating. Collaborating (problem-solving) usually gives the best lasting outcome but takes time; the right style depends on the situation.",
        example:
          "For a trivial disagreement, avoiding or compromising is efficient; for an important shared problem, collaborating is worth the time.",
      },
      {
        concept: "Negotiation — distributive vs integrative",
        explanation:
          "Distributive (win-lose) bargaining divides a fixed 'pie' — one side's gain is the other's loss. Integrative (win-win) bargaining expands the pie by finding shared interests and trade-offs, producing better, more durable agreements.",
        example:
          "Instead of haggling over one price (distributive), a buyer and supplier agree a longer contract plus faster payment that helps both (integrative).",
      },
      {
        concept: "Organisational politics",
        explanation:
          "Political behaviour is using power and informal influence to achieve goals, especially where resources are scarce and rules are unclear. It can be self-serving or, used ethically, a legitimate way to build support for good initiatives.",
        example:
          "A manager who quietly wins over key stakeholders before proposing a change is using political skill to smooth its adoption.",
      },
    ],
    application:
      "First classify the conflict — is it task (potentially useful) or relationship (harmful)? That decides whether to channel it or cool it. Then choose a management style to fit the stakes and time available, and where a deal is needed, push toward integrative negotiation by looking for shared interests rather than fixed positions.\n\n" +
      "The theory cards here (conflict management, the conflict types, functional vs dysfunctional conflict, distributive and integrative negotiation, organisational politics, informal-group power) let you name precisely what is happening. This unit links closely to communication (Unit 7) and leadership (Unit 8), since both shape how conflict plays out.",
    map: [
      { outcome: "Identify types of conflict", content: "9.2 Organisational Conflict", theory: "Task / Relationship / Process Conflict" },
      { outcome: "Describe sources of conflict", content: "9.2", theory: "Functional vs Dysfunctional Conflict" },
      { outcome: "Apply conflict-management strategies", content: "9.2", theory: "Conflict Management (five styles)" },
      { outcome: "Apply negotiation strategies", content: "9.3 Negotiation", theory: "Distributive Negotiation; Integrative Bargaining" },
      { outcome: "Increase and exercise political power", content: "9.4 Organisational Politics", theory: "Organisational Politics; Informal-Groups Power" },
    ],
    sources: [MG + ", Unit 9", TXT + ", Ch.17 Managing Conflict, Politics and Negotiation", OS + ", Ch.14"],
  },

  /* --------------------------------------------------------------- Unit 10 */
  u10: {
    introduction:
      "This unit moves up to the level of the whole organisation and asks: how should work be divided up and then coordinated? Organisational structure is the formal system of task and reporting relationships that controls, coordinates and motivates people. Get it wrong and even talented staff cannot perform.\n\n" +
      "The guide works from the small to the large: first job design (how individual jobs are shaped), then how jobs are grouped into functions and divisions (organisation design), then how those units are coordinated through the hierarchy and integrating mechanisms. Along the way it weighs the classic trade-offs — how specialised jobs should be, how tall or flat the hierarchy should be, and how centralised decisions should be.\n\n" +
      "The key lesson is contingency: there is no perfect structure. The best design depends on the organisation's strategy, size, technology and environment. A start-up needs a different structure from a bank, and a stable business needs a different structure from one facing constant change.",
    concepts: [
      {
        concept: "Job design",
        explanation:
          "Deciding the tasks, responsibility and discretion in a single job. Options range from simplification (narrow, efficient) to enlargement and enrichment (broader, more meaningful). The Job Characteristics Model links enriched jobs — variety, identity, significance, autonomy, feedback — to motivation.",
        example:
          "Enriching a packer's job by adding quality-checking and rotation raises engagement compared with endlessly repeating one motion.",
      },
      {
        concept: "Functional and divisional structures",
        explanation:
          "A functional structure groups people by specialism (marketing, finance, operations) — efficient and expert, but can become siloed. A divisional structure groups by product, region or customer — responsive and accountable, but can duplicate resources.",
        example:
          "A small manufacturer uses a functional structure; as it expands into three regions, it switches to a divisional one so each region can respond locally.",
      },
      {
        concept: "Hierarchy: tall vs flat, span of control",
        explanation:
          "The hierarchy of authority sets who reports to whom. Tall structures (many levels, narrow spans) give tight control but slow decisions; flat structures (few levels, wide spans) speed decisions and empower staff but stretch managers.",
        example:
          "A flat tech start-up where one manager oversees fifteen people moves fast but risks under-supervision if it grows too quickly.",
      },
      {
        concept: "Centralisation vs decentralisation",
        explanation:
          "Centralisation keeps decision authority at the top (consistent, but slow and less responsive); decentralisation pushes it down to where the work and customers are (faster, more motivating, but needs capable staff and can reduce consistency).",
        example:
          "A retailer that lets store managers set local promotions (decentralised) responds faster than one where head office decides every price.",
      },
      {
        concept: "Coordination and integrating mechanisms",
        explanation:
          "Once work is divided, it must be pulled back together. Integrating mechanisms — liaison roles, cross-functional teams, direct contact, shared goals — coordinate functions and divisions so they do not work against each other.",
        example:
          "A cross-functional team linking design, production and sales prevents a product being designed that the factory cannot build.",
      },
    ],
    application:
      "When a case shows duplication, silos, slow decisions or confusion over who decides, read it as a structure problem and match the symptom to the lever: silos → add integrating mechanisms or shift to divisions; slow decisions → flatten or decentralise; inconsistency → centralise key decisions; bored staff → enrich jobs. Always justify the design by the firm's strategy, size and environment (the contingency point).\n\n" +
      "This unit's theory card (functional vs divisional structure) anchors the structural choices, and it links forward to Unit 11 (culture), because structure and culture together shape behaviour, and to Unit 12 (change), since restructuring is a common change effort.",
    map: [
      { outcome: "Discuss factors influencing structure design", content: "10.2 Designing the Structure", theory: "Contingency factors (strategy, size, technology, environment)" },
      { outcome: "Apply principles of job design", content: "10.3 Job Design", theory: "Job simplification/enlargement/enrichment; Job Characteristics Model" },
      { outcome: "Discuss hierarchy and integrating mechanisms", content: "10.5 Coordinating Functions and Divisions", theory: "Span of control; tall vs flat; integrating mechanisms" },
      { outcome: "Discuss structures and their pros/cons", content: "10.4 Organisation Design", theory: "Functional vs Divisional Structure" },
      { outcome: "Apply structure-design principles", content: "10.2–10.5", theory: "Matching structure to contingency factors" },
    ],
    sources: [MG + ", Unit 10", TXT + ", Ch.10 Managing Organizational Structure and Culture", OS + ", Ch.10 Organizational Structure and Change"],
  },

  /* --------------------------------------------------------------- Unit 11 */
  u11: {
    introduction:
      "If structure is the organisation's skeleton, culture is its personality. Organisational culture is the shared set of values, norms and assumptions that guide how people behave — 'the way we do things around here'. It is invisible but powerful: it can make a strategy succeed or quietly defeat it.\n\n" +
      "This unit explains what culture does (its functions), how it is created and kept alive, the main models for describing it, and how managers should act differently in different cultures. A useful image is Schein's three levels — visible artefacts on the surface, espoused values beneath, and deep, taken-for-granted assumptions at the core. Real culture lives at the deepest level, which is why slogans on a wall rarely change it.\n\n" +
      "The unit includes a Southern African lens (Lessem's four worlds) alongside the global models (Hofstede, Schein), recognising that South African managers often blend Western and communal African values. The practical takeaway: culture is a management tool — it can be shaped through what leaders model, reward, recruit and tell stories about.",
    concepts: [
      {
        concept: "Functions of culture",
        explanation:
          "Culture gives members identity, generates commitment beyond self-interest, increases stability, and acts as a 'sense-making' guide that shapes behaviour without constant supervision. A strong, healthy culture coordinates people informally.",
        example:
          "A firm with a deep service culture sees staff go the extra mile for customers without being told, because it is simply 'who we are'.",
      },
      {
        concept: "Creating and maintaining culture",
        explanation:
          "Founders plant the original values; culture is then maintained through selection (hiring for fit), socialisation (onboarding), what leaders pay attention to and reward, role-modelling, rituals and stories. Change any of these and culture slowly shifts.",
        example:
          "A founder who personally answers customer complaints sets a service value that new hires absorb and pass on.",
      },
      {
        concept: "Schein's three levels",
        explanation:
          "Culture exists at three depths: artefacts (visible signs — dress, layout, logos), espoused values (stated beliefs and slogans), and basic underlying assumptions (the unspoken, taken-for-granted truths). Lasting change must reach the deepest level.",
        example:
          "A company can hang 'we value teamwork' posters (espoused value) while the real assumption rewards individual heroics — and behaviour follows the assumption.",
      },
      {
        concept: "Hofstede's cultural dimensions",
        explanation:
          "Compares national cultures on dimensions such as power distance, individualism vs collectivism, uncertainty avoidance and masculinity vs femininity. Useful for understanding how culture varies across countries and why management practices do not transplant directly.",
        example:
          "A management style built for a low-power-distance country may feel disrespectful in a high-power-distance setting where hierarchy is expected.",
      },
      {
        concept: "Lessem's four worlds (Southern African lens)",
        explanation:
          "Argues that effective Southern African management blends four 'worlds' — Western (pragmatic), Northern (rational/systematic), Eastern (holistic) and Southern (humane/communal, ubuntu). It cautions against importing one model wholesale.",
        example:
          "A South African manager combining clear systems (Northern) with ubuntu-based care for the team (Southern) reflects Lessem's blended ideal.",
      },
      {
        concept: "Culture and managerial action",
        explanation:
          "Cultures range from innovative/adaptive (encouraging risk and change) to conservative/control-oriented (valuing stability and rules). The manager should read the culture and either work with it or deliberately shift it to fit the strategy.",
        example:
          "A control-oriented bank trying to launch a fast, experimental fintech arm must consciously build a more innovative subculture for it.",
      },
    ],
    application:
      "When a case mentions resistance, mismatch between strategy and behaviour, or a merger that is not 'gelling', read it as a culture problem and locate it at Schein's deepest level. Recommend culture levers — what leaders model and reward, who is hired, how people are socialised, and the stories told — rather than surface gestures. Use Hofstede or Lessem when the case crosses national or community contexts.\n\n" +
      "The theory cards (functions of culture, Schein, Hofstede, Lessem, strong vs weak culture, mechanistic vs organic, person-organisation fit, systems theory) give you the models to cite. Culture pairs tightly with structure (Unit 10) and is central to change (Unit 12), since most change efforts fail on culture rather than on the plan.",
    map: [
      { outcome: "Discuss the functions of culture", content: "11.3 Function of Culture", theory: "Culture Functions; Strong vs Weak Culture" },
      { outcome: "Apply principles of creating/maintaining culture", content: "11.4 Creation and Maintenance", theory: "Founders, selection, socialisation, role-modelling; Person-Organisation Fit" },
      { outcome: "Apply culture theories", content: "11.5 Types of Cultures", theory: "Schein's levels; Hofstede's dimensions; Lessem's four worlds" },
      { outcome: "Apply managerial action across cultures", content: "11.6 Culture and Managerial Action", theory: "Mechanistic vs Organic; innovative vs conservative cultures; Systems Theory" },
    ],
    sources: [MG + ", Unit 11", TXT + ", Ch.10 Managing Organizational Structure and Culture", OS + ", Ch.7 Organizational Culture"],
  },

  /* --------------------------------------------------------------- Unit 12 */
  u12: {
    introduction:
      "The final unit ties the module together around change — the one constant in modern organisations. It explains what drives change, how to manage it (both planned and unpredictable), why people resist it, and how to build a 'learning organisation' that adapts continuously rather than lurching from crisis to crisis.\n\n" +
      "Change comes from outside forces (technology, competition, regulation, economic shifts) and inside forces (new strategy, growth, performance gaps). The guide gives you two complementary tools: Lewin's model for planned, deliberate change (unfreeze the old way, change to the new, refreeze it as the new normal), and chaos theory for unplanned, fast-moving change where flexibility beats rigid plans.\n\n" +
      "Crucially, the unit treats resistance to change as predictable and manageable, not as stubbornness. People resist for understandable reasons — fear of loss, uncertainty, habit, distrust — and managers overcome it through communication, participation, support and fair process. The learning organisation is the long-term answer: a culture that keeps adapting so big, painful changes are needed less often.",
    concepts: [
      {
        concept: "Forces of change",
        explanation:
          "External forces (competition, technology, economic and political shifts, customer expectations) and internal forces (new strategy, structure, growth, or performance problems) push organisations to change. Scanning these — linking back to Unit 3 — tells managers when change is needed.",
        example:
          "Load-shedding and online rivals (external) plus falling profits (internal) together force a retailer to rethink how it operates.",
      },
      {
        concept: "Lewin's three-step model (planned change)",
        explanation:
          "Unfreeze (create awareness that the current way must change and reduce the forces holding it in place), change/move (implement the new way and support people through it), and refreeze (lock in the new behaviour through systems, rewards and culture so it sticks).",
        example:
          "To adopt a new IT system, a firm first shows why the old one fails (unfreeze), trains and supports staff on the new one (change), then updates procedures and rewards to embed it (refreeze).",
      },
      {
        concept: "Managing unplanned change (chaos theory)",
        explanation:
          "Not all change can be planned; some is sudden and non-linear. Here managers rely on flexibility, fast learning, decentralised decision-making and resilience rather than detailed master plans — connecting to chaos theory from Unit 2.",
        example:
          "A business that empowered local managers to react quickly coped far better with an overnight supply shock than one waiting for head-office instructions.",
      },
      {
        concept: "Resistance to change and how to overcome it",
        explanation:
          "Individual resistance comes from fear of the unknown, economic insecurity, habit and selective perception; organisational resistance from structural inertia, group norms and threats to power. It is overcome through communication, participation, support, negotiation and a fair, transparent process.",
        example:
          "Staff stop resisting a restructure once they are involved in designing it and can see it protects, rather than threatens, their roles.",
      },
      {
        concept: "The learning organisation",
        explanation:
          "An organisation skilled at creating, acquiring and sharing knowledge and adapting its behaviour. Senge's disciplines (systems thinking, personal mastery, mental models, shared vision, team learning) build the capacity to change continuously and absorb shocks.",
        example:
          "A firm that runs honest post-project reviews and shares the lessons across teams gets better at change with every project.",
      },
    ],
    application:
      "For any change case, work in three moves: identify the forces driving the change (external and internal), choose the right approach (Lewin for planned change, chaos/flexibility for unpredictable change), and diagnose and tackle resistance with specific tactics — communication, participation, support. Where the case is about long-term adaptability, recommend building learning-organisation capabilities.\n\n" +
      "The theory cards (Lewin's change model, resistance to change, learning organisation, chaos theory) give you structured tools. This unit deliberately draws the whole module together: change touches structure (Unit 10), culture (Unit 11), leadership (Unit 8 — usually transformational), motivation (Unit 5) and communication (Unit 7), so a strong final-unit answer weaves several together.",
    map: [
      { outcome: "Discuss the forces of change", content: "12.2 Forces of Change", theory: "External and internal change forces (links to Unit 3)" },
      { outcome: "Manage planned and unplanned change", content: "12.3 Managing Change", theory: "Lewin's Unfreeze-Change-Refreeze; Chaos Theory" },
      { outcome: "Discuss reasons for resistance", content: "12.4 Resistance to Change", theory: "Resistance to Change (individual & organisational sources)" },
      { outcome: "Devise strategies to overcome resistance", content: "12.4", theory: "Communication, participation, support, fair process" },
      { outcome: "Apply principles of the learning organisation", content: "12.5 Learning Organisation", theory: "Learning Organisation (Senge's five disciplines)" },
    ],
    sources: [MG + ", Unit 12", TXT + ", Ch.11 Organizational Control and Change", OS + ", Ch.10 Organizational Structure and Change"],
  },
};
