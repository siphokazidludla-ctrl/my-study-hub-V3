// src/data/pastPapers/ikm.ts
// IKM Past Paper Intelligence. Derived from the uploaded scanned IKM exam set
// (13 distinct case-based papers). Curriculum mapped to the MANCOSA IKM Module
// Guide (2026) units 1-10. Citations restricted to 2020+ prescribed/recommended
// sources; seminal frameworks attributed through current texts (e.g. SECI via
// Dalkir, 2022; strategic IS objectives via Laudon and Laudon, 2023).
//
// Source status (all papers): Verbatim copies of the uploaded MANCOSA IKM past
// papers (scanned images). Question wording transcribed from those images.
// Treated as the exam-pattern source of truth per the brief.

import type { PastPaper } from '../../types/pastPapers';

export const IKM_PAST_PAPERS: PastPaper[] = [
  {
    id: 'ikm-paper-1',
    module: 'ikm',
    title: 'Business Intelligence (BI)',
    paperRef: 'Section A (BI article) + Section B',
    totalMarks: 100,
    saContext: false,
    frequency: 'High',
    sourceStatus: 'Uploaded MANCOSA IKM past paper. Question wording transcribed from scan.',
    caseSummary:
      'An article defines Business Intelligence as the strategies, technologies and tools used to collect, analyse and present internal and external data so managers can make strategic, operational and tactical decisions. BI is described through data integration, data mining, visualisation and reporting.',
    keyFacts: [
      'BI gathers internal (databases, transactional systems) and external (market research, social media) data.',
      'BI processes named: data integration, data mining, visualisation, reporting.',
      'Stated goal: accurate, relevant, timely information for decision-making at all levels.',
    ],
    keyProblem:
      'How an organisation turns raw, fragmented data into integrated, decision-ready knowledge, and how to judge whether BI genuinely improves decisions.',
    questions: [
      {
        id: 'ikm-p1-q1', number: 'Question 1', section: 'A', marks: 20,
        commandWords: ['Critically evaluate'],
        prompt: 'Critically evaluate the positive impact BI has on enhancing decision-making in an organisation of your choice.',
        unitIds: ['ikm-1', 'ikm-5'], theoryIds: ['ikm-dikw'],
        recommendedTheories: ['ikm-business-intelligence', 'ikm-is-strategy'],
        answerPlan: [
          'Define BI and locate it on the DIKW hierarchy (data to wisdom).',
          'Name a real organisation (e.g. a SA retailer or bank) and its decision context.',
          'Positive impacts: faster/evidence-based decisions, pattern detection via data mining, single version of truth, operational + strategic + tactical levels.',
          'Critical counterweight: data quality, cost, skills gap, over-reliance, "garbage in, garbage out", privacy/governance.',
          'Reasoned judgement: BI improves decisions only when paired with governance, skills and clean data.',
        ],
        workedSolution:
`**Introduction.** Business Intelligence (BI) is the set of technologies and processes that convert raw internal and external data into accurate, timely information for decision-making (MANCOSA IKM Module Guide, 2026). Positioned on the DIKW hierarchy, BI is the machinery that moves an organisation from *data* (raw transactions) to *information* and, with managerial interpretation, to *knowledge* and *wisdom* (Laudon and Laudon, 2023).

**Application to a chosen organisation.** Consider a national grocery retailer. Point-of-sale, loyalty-card and supplier data are integrated into a data warehouse; data-mining and dashboards then reveal demand patterns, shrinkage and store-level performance (Laudon and Laudon, 2023).

**Positive impacts (the case for BI).** First, decisions become evidence-based rather than intuitive, because managers query a *single version of the truth* instead of conflicting spreadsheets (Laudon and Laudon, 2023). Second, data mining surfaces non-obvious relationships, such as which promotions cannibalise full-price sales. Third, BI serves all three decision levels named in the article: operational (daily replenishment), tactical (category planning) and strategic (new-store location). Fourth, visualisation shortens the time from question to insight, improving responsiveness in volatile markets (Dalkir, 2022).

**Critical evaluation (the limits).** BI is not self-justifying. Its outputs are only as trustworthy as the underlying data; poor data quality produces confident but wrong decisions ("garbage in, garbage out") (Laudon and Laudon, 2023). Implementation is costly and demands analytical skills that many organisations lack, creating a capability gap. There is also a behavioural risk of over-reliance, where managers defer to the dashboard and stop exercising judgement, which is the *wisdom* layer BI cannot supply (Dalkir, 2022). Finally, integrating customer and external data raises privacy and governance obligations that, if neglected, expose the firm to legal and reputational harm (Saffady, 2021).

**Conclusion.** BI demonstrably enhances decision-making by making it faster, more integrated and evidence-based, but the benefit is conditional. Without data governance, analytical skills and continued managerial judgement, BI amplifies error as efficiently as it amplifies insight. The defensible position is that BI improves decisions *as part of a managed information-governance system*, not as a standalone technology (MANCOSA IKM Module Guide, 2026; Laudon and Laudon, 2023).`,
        markingLogic: [
          'Definition of BI + correct framing (DIKW or decision levels): ~4.',
          'Named organisation with a genuine decision context: ~3.',
          'At least three substantiated positive impacts applied to the case: ~6.',
          'Genuine critique (limits/risks), not just benefits: ~5.',
          'Reasoned, conditional judgement in conclusion: ~2.',
        ],
        commonMistakes: [
          'Listing BI features without evaluating impact on decisions.',
          'No real organisation, so "application" marks are lost.',
          '"Critically evaluate" answered with benefits only and no limitations.',
        ],
        paragraphStructure: 'Define > apply to chosen org > impacts > critique > conditional judgement.',
      },
      {
        id: 'ikm-p1-q2', number: 'Question 2', section: 'A', marks: 20,
        commandWords: ['Recommend'],
        prompt: 'Recommend the ways BI can be used for data integration in the company chosen in Question 1.',
        unitIds: ['ikm-5'], theoryIds: ['ikm-dikw'],
        recommendedTheories: ['ikm-business-intelligence'],
        workedSolution:
`**Introduction.** Business intelligence (BI) integrates data from across an organisation to support better decisions; data integration is the foundation that makes BI reliable (Laudon and Laudon, 2023).

**Ways BI can be used for data integration.** (1) *Data warehousing* — consolidate data from separate operational systems (sales, finance, HR, supply chain) into a single warehouse so reporting draws on one consistent source. (2) *ETL processes (extract, transform, load)* — extract data from source systems, clean and standardise it, and load it into the warehouse, resolving format and quality differences. (3) *Master data management* — maintain single, agreed definitions of key entities (customer, product) so the same item means the same thing everywhere. (4) *Dashboards and OLAP* — let managers analyse the integrated data across dimensions (region, period, product) in real time. (5) *Data marts* — give departments tailored views of the integrated data without recreating silos.

**Recommendation.** The organisation should build an integrated data warehouse fed by disciplined ETL and governed by master-data standards, then layer dashboards and analytics on top, so decisions rest on one trusted version of the truth rather than conflicting departmental reports.

**Conclusion.** BI delivers value only when underlying data is integrated; warehousing, ETL, master-data management and analytics together turn fragmented data into reliable decision support (Laudon and Laudon, 2023).`,
        answerPlan: [
          'Define data integration: consolidating data from many sources into one consistent, usable format.',
          'Recommend specific mechanisms: data warehouse/ETL, master data management, common data model, dashboards/reporting layer, APIs to external sources.',
          'Tie each recommendation back to the chosen company and a decision it enables.',
          'Note governance/quality controls so integration is trustworthy.',
        ],
        markingLogic: [
          'Clear definition of data integration: ~3.',
          'Specific, realistic integration mechanisms (not generic "use BI"): ~10.',
          'Each linked to the chosen company and a decision: ~5.',
          'Governance/data-quality safeguard mentioned: ~2.',
        ],
        commonMistakes: ['Re-describing BI generally instead of integration specifically.', 'No company-specific recommendations.'],
        paragraphStructure: 'Define integration > recommend mechanism > link to company decision (repeat) > safeguard.',
      },
      {
        id: 'ikm-p1-q3', number: 'Question 3', section: 'B', marks: 20,
        commandWords: ['Report on', 'Suggest'],
        prompt: 'Report on the challenges organisations face when implementing a knowledge management system and suggest solutions.',
        unitIds: ['ikm-5', 'ikm-6'], theoryIds: ['ikm-km-cycle', 'ikm-tacit-explicit'],
        workedSolution:
`**Introduction.** A knowledge management system (KMS) supports the creation, capture, sharing and application of knowledge, but implementation commonly fails on people and process rather than technology (Dalkir, 2022).

**Challenges and solutions.** (1) *Cultural resistance / knowledge hoarding* — staff see knowledge as power and resist sharing; *solution:* build a sharing culture with leadership example, recognition and incentives. (2) *Lack of leadership and strategy* — KMS treated as an IT project without business alignment; *solution:* tie the KMS to clear business goals with executive sponsorship. (3) *Capturing tacit knowledge* — the most valuable knowledge lives in people's experience and is hard to codify; *solution:* combine documentation with mentoring, communities of practice and storytelling. (4) *Poor system usability and adoption* — complex tools go unused; *solution:* user-centred design, training and integration into daily workflow. (5) *Keeping content current* — knowledge bases become stale; *solution:* assign ownership, review cycles and feedback loops. (6) *Measuring value* — benefits are intangible; *solution:* define KM metrics linked to outcomes.

**Conclusion.** KMS implementation succeeds when the organisation treats it as a socio-technical change: aligning leadership and strategy, building a sharing culture, capturing tacit as well as explicit knowledge, and designing for genuine everyday use (Dalkir, 2022; MANCOSA IKM Module Guide, 2026).`,
        answerPlan: [
          'Define a KMS and its purpose (connect knowledge repository to the right people).',
          'Challenges: culture/knowledge hoarding, capturing tacit knowledge, weak adoption, poor governance, technology-led implementation, cost/skills.',
          'Solutions paired to each challenge: incentives + communities of practice, SECI conversion, leadership sponsorship, governance policy, change management.',
          'Conclude that KMS success is socio-technical, not just technical.',
        ],
        markingLogic: [
          'KMS defined: ~3.', 'At least four real challenges: ~8.', 'A matching solution for each: ~7.', 'Socio-technical conclusion: ~2.',
        ],
        commonMistakes: ['Treating a KMS as pure technology.', 'Listing challenges with no paired solutions.'],
        paragraphStructure: 'Define > challenge + paired solution (repeat) > socio-technical conclusion.',
      },
      {
        id: 'ikm-p1-q4', number: 'Question 4', section: 'B', marks: 20,
        commandWords: ['Provide a detailed report', 'Apply'],
        prompt: 'As an IS analyst, report on the purpose of the Balanced Scorecard (BSC) and how you would apply it to a retailer like Woolworths.',
        unitIds: ['ikm-6'], theoryIds: [],
        recommendedTheories: ['ikm-bsc'],
        workedSolution:
`**Introduction.** The Balanced Scorecard (BSC) translates strategy into a balanced set of performance measures across four perspectives, avoiding reliance on financial results alone (Laudon and Laudon, 2023).

**Purpose of the BSC.** It links long-term strategy to operational measures, balances financial and non-financial indicators, communicates strategy through the organisation, and supports continuous monitoring and learning. Its four perspectives are *financial*, *customer*, *internal business process* and *learning and growth*.

**Applying the BSC to a retailer like Woolworths.** (1) *Financial* — revenue growth, gross margin, return on investment. (2) *Customer* — customer satisfaction, retention, basket size, brand perception (vital for a premium retailer). (3) *Internal process* — supply-chain reliability, stock availability, picking accuracy, store execution. (4) *Learning and growth* — staff skills and training, employee engagement, and information-systems capability that underpin the other three. For each, Woolworths sets objectives, measures, targets and initiatives, and cascades them so store and function targets support the overall strategy.

**Conclusion.** As an IS analyst, I would use the BSC to give Woolworths a strategy-linked dashboard in which information systems supply the metrics, so management sees not just financial outcomes but the customer, process and capability drivers behind them (Laudon and Laudon, 2023).`,
        answerPlan: [
          'Define the BSC: a management system translating strategy into measures across four perspectives.',
          'Four perspectives: financial, customer, internal business processes, learning and growth.',
          'Apply each to Woolworths with concrete KPIs (e.g. customer: loyalty/NPS; process: stock availability; learning: staff capability; financial: margin).',
          'Explain how BSC links IS investment to strategic performance and feedback.',
        ],
        markingLogic: [
          'Purpose of BSC defined: ~3.', 'Four perspectives correct: ~6.', 'Applied to Woolworths with KPIs per perspective: ~9.', 'Link to strategy/feedback: ~2.',
        ],
        commonMistakes: ['Naming the four perspectives without Woolworths-specific KPIs.', 'Confusing BSC with a financial statement.'],
        paragraphStructure: 'Define purpose > four perspectives > apply KPI per perspective to Woolworths > strategic feedback.',
      },
      {
        id: 'ikm-p1-q5', number: 'Question 5', section: 'B', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss your understanding of intellectual capital and knowledge assets within an organisation.',
        unitIds: ['ikm-3'], theoryIds: [],
        recommendedTheories: ['ikm-intellectual-capital'],
        answerPlan: [
          'Define intellectual capital: the intangible, knowledge-based assets that create value beyond the balance sheet.',
          'Components: human capital, structural/organisational capital, relational/customer capital.',
          'Why it matters in the knowledge economy: value migrates from tangible to intangible assets.',
          'Link to measurement frameworks (Skandia Navigator, Brooking) as the bridge to managing it.',
        ],
        workedSolution:
`**Introduction.** As organisations move into the knowledge economy, value increasingly resides in intangible assets that traditional balance sheets do not capture. Intellectual capital (IC) is the stock of knowledge-based, intangible resources that an organisation can convert into value (Dalkir, 2022).

**Components.** IC is conventionally divided into three forms. *Human capital* is the skills, experience and tacit know-how held by employees. *Structural (organisational) capital* is the codified knowledge the firm retains independently of individuals: processes, patents, databases, systems and culture. *Relational (customer) capital* is the value embedded in relationships with customers, suppliers and partners (Dalkir, 2022). Human capital is rented, not owned, and leaves at night; structural capital is what remains, which is why codifying tacit knowledge into structural capital protects the firm against knowledge loss (Hislop, Bosua and Helms, 2023).

**Why it matters.** In knowledge-intensive firms, the market value far exceeds book value, and that gap is largely intellectual capital (MANCOSA IKM Module Guide, 2026). Treating knowledge as an asset means it can, like financial assets, be audited, developed and reported, which is the rationale for IC measurement frameworks such as the Skandia Navigator and Brooking's classification (Dalkir, 2022).

**Conclusion.** Intellectual capital reframes the organisation's worth around what it knows and who it knows, not only what it owns. Managing the conversion of fragile human capital into durable structural capital is the central task, and IC frameworks make that intangible value visible enough to manage (Dalkir, 2022; Hislop, Bosua and Helms, 2023).`,
        markingLogic: [
          'IC defined as intangible/knowledge-based value: ~4.', 'Three components explained: ~8.', 'Knowledge-economy relevance (value gap): ~5.', 'Link to measurement: ~3.',
        ],
        commonMistakes: ['Confusing intellectual capital with intellectual property only.', 'Listing components without explaining human-to-structural conversion.'],
        paragraphStructure: 'Define IC > three components > knowledge-economy relevance > bridge to measurement.',
      },
      {
        id: 'ikm-p1-q6', number: 'Question 6', section: 'B', marks: 20,
        commandWords: ['Assess', 'Justify'],
        prompt: 'Assess the dimensions of an information system and justify how the dimensions aid better decisions.',
        unitIds: ['ikm-1'], theoryIds: ['ikm-dikw'],
        recommendedTheories: ['ikm-is-strategy'],
        answerPlan: [
          'State the three dimensions of an IS: organisation, management and technology.',
          'Organisation: structure, culture, processes, business functions.',
          'Management: decision levels and using IS to plan, coordinate and control.',
          'Technology: hardware, software, data, networks.',
          'Justify: only when all three align does the IS deliver information that improves decisions.',
        ],
        workedSolution:
`**Introduction.** An information system is not simply a technology artefact: it operates simultaneously across three interdependent dimensions — organisation, management and technology — and it is their alignment that determines whether the system improves decisions (Laudon and Laudon, 2023).

**The organisation dimension** comprises the firm's hierarchy, culture, business processes and business functions. The IS must fit how the organisation is structured and serve the functions that depend on information, from finance and HR to operations. A system that ignores organisational culture or existing processes will be resisted and underused (MANCOSA IKM Module Guide, 2026).

**The management dimension** concerns how managers use information to plan, coordinate, control and make decisions. Management sets the goals that the IS must serve: operational control, tactical planning or strategic decision-making. If managers do not champion or understand the system, even technically sound IS generate unused reports (Laudon and Laudon, 2023).

**The technology dimension** is the hardware, software, data storage, networking and telecommunications infrastructure that physically captures, processes and transmits data. Without reliable, integrated technology the other two dimensions have no vehicle for information flow (MANCOSA IKM Module Guide, 2026).

**Justification.** Better decisions emerge only when all three dimensions are aligned. Technology that fits organisational processes but is ignored by management produces reports nobody acts on. Management commitment without suitable organisational processes creates bottlenecks. And the best organisational culture cannot compensate for inadequate technology. Alignment is the condition under which the IS converts raw data into the accurate, timely and relevant information that improves decisions at operational, tactical and strategic levels (Laudon and Laudon, 2023; MANCOSA IKM Module Guide, 2026).`,
        markingLogic: [
          'Three dimensions named: ~3.', 'Each explained: ~9.', 'Justification linking alignment to better decisions: ~6.', 'Coherence: ~2.',
        ],
        commonMistakes: ['Describing only the technology dimension.', 'No justification of the link to decisions (the command word "justify").'],
        paragraphStructure: 'Name 3 dimensions > explain each > justify alignment-to-decisions.',
      },
    ],
  },

  {
    id: 'ikm-paper-2',
    module: 'ikm',
    title: 'ChatGPT and Knowledge Management in Design',
    paperRef: 'Section A (NLP/ChatGPT article) + Section B',
    totalMarks: 100,
    saContext: false,
    frequency: 'High',
    sourceStatus: 'Uploaded MANCOSA IKM past paper. Transcribed from scan.',
    caseSummary:
      'An article reviews how large language models such as ChatGPT can support knowledge management in the design process by giving designers access to large bodies of relevant information, while noting that output quality depends heavily on the prompt and that integration presents new challenges.',
    keyFacts: [
      'LLMs/ChatGPT can facilitate knowledge acquisition for designers.',
      'Quality of acquired knowledge is highly prompt-dependent.',
      'A case study validates both advantages and drawbacks of ChatGPT for KM.',
    ],
    keyProblem: 'How to harness generative AI for knowledge management while managing accuracy, governance and over-reliance risks.',
    questions: [
      {
        id: 'ikm-p2-q1', number: 'Question 1', section: 'A', marks: 20,
        commandWords: ['Critical analysis'],
        prompt: 'Provide a critical analysis on the impact of using ChatGPT for knowledge management.',
        unitIds: ['ikm-1', 'ikm-7'], theoryIds: ['ikm-ethics-ai', 'ikm-km-cycle'],
        workedSolution:
`**Introduction.** Generative AI tools such as ChatGPT can support knowledge management, but their impact on KM is double-edged and must be critically assessed (MANCOSA IKM Module Guide, 2026).

**Positive impacts.** ChatGPT can accelerate knowledge *capture and summarisation*, draft and organise documentation, answer routine queries to free experts, support *knowledge sharing* by making information accessible in natural language, and aid *knowledge creation* by combining ideas quickly. It lowers the effort of converting explicit knowledge into usable form.

**Negative impacts and risks.** It can generate plausible but false content ('hallucination'), undermining knowledge reliability; it struggles with deep *tacit, contextual* organisational knowledge; it raises *data-privacy and confidentiality* risks if sensitive information is entered into a public tool; it can erode *critical thinking* if staff over-rely on it; and it raises questions of accuracy, bias, accountability and intellectual property.

**Critical balance.** ChatGPT is a powerful assistant for explicit-knowledge tasks but not a substitute for validated organisational knowledge or human judgement. Its value depends on governance: verification of outputs, clear rules on confidential data, and use as an aid rather than an authority.

**Conclusion.** Used within a governance framework, ChatGPT can enhance KM productivity and access, but unmanaged use risks misinformation, privacy breaches and loss of critical judgement (MANCOSA IKM Module Guide, 2026; Dalkir, 2022).`,
        answerPlan: [
          'Define generative AI / LLM and its KM role (knowledge capture, retrieval, sharing).',
          'Positive impacts: speed of retrieval, codifying explicit knowledge, lowering search costs, surfacing tacit-adjacent insight.',
          'Critical impacts: hallucination/accuracy, prompt-dependence, governance/IP leakage, bias, deskilling, no true understanding.',
          'Balanced judgement: a powerful augmentation tool requiring human verification and governance.',
        ],
        markingLogic: ['AI/KM framing: ~4.', 'Substantiated positives: ~5.', 'Genuine critique incl. accuracy + governance: ~8.', 'Balanced judgement: ~3.'],
        commonMistakes: ['One-sided praise of AI.', 'Ignoring information governance and IP risks.'],
        paragraphStructure: 'Define > positives > critique > balanced judgement.',
      },
      {
        id: 'ikm-p2-q2', number: 'Question 2', section: 'A', marks: 20,
        commandWords: ['Report on'],
        prompt: 'As part of the development team, report on how you would maximise the efficiency of KMS through ChatGPT.',
        unitIds: ['ikm-5', 'ikm-7'], theoryIds: ['ikm-km-cycle'],
        workedSolution:
`**Introduction.** A development team can use ChatGPT to maximise the efficiency of a KMS, provided it is integrated responsibly into the system (MANCOSA IKM Module Guide, 2026).

**How to maximise KMS efficiency through ChatGPT.** (1) *Natural-language retrieval* — let users query the knowledge base conversationally so they find answers faster than keyword search. (2) *Automated summarisation and tagging* — use it to summarise long documents and auto-classify content, improving capture and findability. (3) *Drafting and templating* — generate first drafts of procedures, FAQs and reports that experts then verify. (4) *Retrieval-augmented generation* — ground responses in the organisation's own verified content so answers are accurate and traceable, not invented. (5) *Continuous feedback* — capture user questions to reveal knowledge gaps to fill. (6) *Guardrails* — restrict confidential data, require human validation of critical outputs, and log usage for governance.

**Implementation note.** Efficiency gains are real only if outputs are verified and the tool draws on trusted internal sources; otherwise speed comes at the cost of accuracy.

**Conclusion.** The team should embed ChatGPT as a grounded, governed layer over the KMS — conversational retrieval, summarisation, drafting and gap-detection — so knowledge is captured, found and applied faster while accuracy and confidentiality are protected (MANCOSA IKM Module Guide, 2026).`,
        answerPlan: [
          'Frame KMS efficiency against the KM cycle (create, capture, store, share, apply, retain).',
          'Recommend: retrieval-augmented access to the knowledge repository, prompt standards, human-in-the-loop verification, integration with existing systems, governance guardrails.',
          'Tie each to an efficiency gain (faster onboarding, reduced search time, better reuse).',
        ],
        markingLogic: ['KM-cycle framing: ~3.', 'Specific efficiency mechanisms: ~12.', 'Governance/verification safeguard: ~5.'],
        commonMistakes: ['Generic "use ChatGPT" with no mechanism.', 'No guardrails against inaccurate output.'],
        paragraphStructure: 'Map to KM cycle > recommend mechanism + efficiency gain (repeat) > safeguards.',
      },
      {
        id: 'ikm-p2-q3', number: 'Question 3', section: 'B', marks: 20,
        commandWords: ['Report on'],
        prompt: 'Report on the importance of software prototyping in development.',
        unitIds: ['ikm-5'], theoryIds: [],
        recommendedTheories: ['ikm-systems-development', 'ikm-prototyping'],
        workedSolution:
`**Introduction.** Software prototyping builds an early, working model of a system so requirements can be tested and refined before full development (Laudon and Laudon, 2023).

**Importance of prototyping.** (1) *Clarifies requirements* — users react to something tangible, surfacing real needs that abstract specifications miss. (2) *Reduces risk* — problems are found early and cheaply, before costly full build. (3) *Improves user involvement and buy-in* — users shape the system, raising acceptance and adoption. (4) *Speeds feedback* — short build-review-refine cycles converge quickly on a workable design. (5) *Supports unclear or evolving requirements* — ideal where needs cannot be fully specified up front, common in knowledge and decision-support systems. (6) *Lowers rework* — validated requirements mean less expensive change later.

**Caution.** Prototyping can encourage scope creep, raise expectations, and tempt teams to ship an unfinished prototype as the final product if not managed.

**Conclusion.** Prototyping is important because it converts uncertain requirements into validated ones through rapid user feedback, cutting risk and rework; managed well, it is especially suited to systems whose requirements are hard to define in advance (Laudon and Laudon, 2023).`,
        answerPlan: [
          'Define prototyping: building a preliminary, working model to be refined iteratively.',
          'Importance: clarifies vague requirements, early user feedback, reduces risk of building the wrong system, faster, improves buy-in.',
          'Note limits: scope creep, mistaking the prototype for a finished system.',
        ],
        markingLogic: ['Definition: ~3.', 'Importance points (min. four): ~13.', 'Limitation acknowledged: ~4.'],
        commonMistakes: ['Confusing prototyping with the full SDLC.', 'Listing steps instead of importance.'],
        paragraphStructure: 'Define > importance points > limitation.',
      },
      {
        id: 'ikm-p2-q4', number: 'Question 4', section: 'B', marks: 20,
        commandWords: ['Elaborate'],
        prompt: 'Elaborate on how organisational culture and organisational structure impact the success of knowledge management.',
        unitIds: ['ikm-3', 'ikm-6'], theoryIds: ['ikm-km-cycle', 'ikm-learning-org'],
        workedSolution:
`**Introduction.** Knowledge management succeeds or fails largely on organisational culture and structure, not technology (Dalkir, 2022; Hislop, Bosua and Helms, 2023).

**Impact of organisational culture.** A culture of trust, openness and collaboration encourages people to share knowledge; one of competition, blame or knowledge-hoarding blocks it. Where leaders model sharing and recognise it, tacit knowledge flows; where knowledge is treated as personal power, KM initiatives stall regardless of the system. Psychological safety, willingness to learn from mistakes, and shared values all shape whether knowledge is created and reused.

**Impact of organisational structure.** Flat, networked and cross-functional structures ease knowledge flow across boundaries; tall, siloed, bureaucratic structures trap knowledge in departments. Structures that build in communities of practice, cross-team projects and accessible communication channels support sharing; rigid hierarchy and narrow reporting lines impede it. Decentralised decision-making also encourages knowledge use at the point of action.

**Interaction.** Culture and structure reinforce each other: a collaborative culture needs enabling structures, and good structures fail without a supportive culture.

**Conclusion.** For KM to succeed, the organisation must align a sharing-oriented culture with an enabling, low-silo structure; technology only supports knowledge flow that culture and structure already permit (Dalkir, 2022).`,
        answerPlan: [
          'Define organisational culture and structure.',
          'Culture: trust, sharing vs hoarding, psychological safety, incentives shape whether knowledge flows.',
          'Structure: hierarchy/silos block flow; flatter, networked structures and communities of practice enable it.',
          'Conclude that KM technology fails without an enabling culture and structure.',
        ],
        markingLogic: ['Both concepts defined: ~4.', 'Culture impact on KM: ~7.', 'Structure impact on KM: ~7.', 'Integrative conclusion: ~2.'],
        commonMistakes: ['Discussing culture only, ignoring structure (or vice versa).', 'No link back to KM success.'],
        paragraphStructure: 'Define both > culture impact > structure impact > integrative conclusion.',
      },
      {
        id: 'ikm-p2-q5', number: 'Question 5', section: 'B', marks: 20,
        commandWords: ['Assess', 'Justify'],
        prompt: 'Assess the dimensions of an information system and justify how the dimensions aid better decisions. (Repeat of Paper 1 Q6.)',
        unitIds: ['ikm-1'], theoryIds: ['ikm-dikw'], recommendedTheories: ['ikm-is-strategy'],
        workedSolution:
`**Introduction.** An information system has three interacting dimensions — organisation, management and technology — and these together turn raw data into decision support (Laudon and Laudon, 2023). (This topic also appears as Paper 1 Q6.)

**The dimensions, and how they aid better decisions.** (1) *Organisation* — structure, processes, culture and people; the system must fit the organisation's workflows and politics, and well-designed processes mean the right information reaches the right role for a decision. (2) *Management* — leaders set strategy, allocate resources and use the system's information to plan, control and decide; management turns information into action and judgement. (3) *Technology* — hardware, software, data management and networks; technology stores, processes and distributes information quickly and accurately, enabling timely analysis.

**How the dimensions justify better decisions.** Better decisions need accurate, timely, relevant information (technology), embedded in workflows that deliver it to decision-makers (organisation), and applied by managers with judgement (management). A weakness in any dimension degrades decision quality: good technology with poor processes or disengaged managers still fails.

**Conclusion.** Information systems improve decisions only when all three dimensions work together — technology supplies quality information, organisation routes it correctly, and management applies it — so the dimensions are interdependent, not separate (Laudon and Laudon, 2023).`,
        answerPlan: ['See Paper 1 Question 6: organisation, management, technology dimensions; justify alignment improves decisions.'],
        markingLogic: ['As Paper 1 Q6.'],
        commonMistakes: ['As Paper 1 Q6.'],
        paragraphStructure: 'Name 3 dimensions > explain each > justify alignment-to-decisions.',
      },
      {
        id: 'ikm-p2-q6', number: 'Question 6', section: 'B', marks: 20,
        commandWords: ['Analyse', 'Report on'],
        prompt: 'Analyse the positive impact of a cloud-based KMS of your choice, including its features.',
        unitIds: ['ikm-5', 'ikm-1'], theoryIds: ['ikm-km-cycle'],
        recommendedTheories: ['ikm-cloud-computing'],
        workedSolution:
`**Introduction.** A cloud-based KMS delivers knowledge-management capability over the internet rather than on local servers, with significant advantages for sharing and scale (Laudon and Laudon, 2023).

**Positive impacts and features (e.g. a cloud KMS such as a SharePoint/Confluence-type platform).** (1) *Anywhere access* — staff reach the knowledge base from any location or device, supporting remote and distributed work. (2) *Centralised, single source of truth* — one repository reduces duplication and version conflict. (3) *Scalability and cost model* — pay-as-you-grow capacity without large up-front hardware investment. (4) *Real-time collaboration* — co-editing, comments and shared workspaces speed knowledge creation and sharing. (5) *Search and integration* — powerful search, tagging and integration with other cloud tools improve findability. (6) *Automatic updates, backup and security* — the provider maintains the platform, with version control and disaster recovery. (7) *Analytics* — usage data reveals knowledge gaps and popular content.

**Note on risks.** Benefits assume adequate connectivity, data security and vendor governance; these must be managed.

**Conclusion.** A cloud-based KMS positively transforms knowledge access, collaboration and scalability while lowering infrastructure burden; its features of centralised storage, real-time collaboration, strong search and analytics make organisational knowledge accessible and current, provided security and connectivity are assured (Laudon and Laudon, 2023; Dalkir, 2022).`,
        answerPlan: [
          'Define cloud-based KMS and name a real example.',
          'Features: scalability, anywhere access, collaboration, search, version control, security controls.',
          'Positive impacts: lower upfront cost, faster knowledge sharing across locations, resilience.',
          'Note governance/security caveats.',
        ],
        markingLogic: ['Defined + named example: ~4.', 'Features: ~8.', 'Positive impacts analysed: ~6.', 'Caveat: ~2.'],
        commonMistakes: ['Describing cloud computing generally, not a KMS.', 'No named example.'],
        paragraphStructure: 'Define + example > features > impacts > caveat.',
      },
    ],
  },

  {
    id: 'ikm-paper-3',
    module: 'ikm',
    title: 'IT, Business Process Re-engineering and Six Sigma',
    paperRef: 'Single 100-mark case (BPR / BPM / Six Sigma)',
    totalMarks: 100,
    saContext: false,
    frequency: 'Medium',
    sourceStatus: 'Uploaded MANCOSA IKM past paper. Transcribed from scan.',
    caseSummary:
      'A case explains that business process re-engineering (BPR) is the radical redesign of core processes for substantial performance gains, that IT is a natural partner enabling such redesign, and contrasts BPR with business process management (BPM) and quality methodologies such as Six Sigma.',
    keyFacts: [
      'BPR = radical redesign of core business processes for large performance gains.',
      'IT can fundamentally reshape, not just automate, how work is done.',
      'BPM and Six Sigma share the goal of improving quality and reducing cost but operate differently.',
    ],
    keyProblem: 'When to re-engineer radically versus improve continuously, and how IT and quality methods support each.',
    questions: [
      {
        id: 'ikm-p3-q1', number: 'Question 1 (1.1, 1.2)', section: 'A', marks: 20,
        commandWords: ['Explain'],
        prompt: '1.1 Explain ways to make BPR successful (17). 1.2 Explain reasons for the high failure rate of BPR (3).',
        unitIds: ['ikm-2', 'ikm-6'], theoryIds: [],
        recommendedTheories: ['ikm-bpm'],
        workedSolution:
`**Introduction.** Business process re-engineering (BPR) is the fundamental rethinking and radical redesign of business processes to achieve dramatic improvements; its high failure rate makes success factors critical (Laudon and Laudon, 2023).

**1.1 Ways to make BPR successful.** (1) *Strong, visible leadership and executive sponsorship* to drive radical change. (2) *Clear strategic alignment* — re-engineer processes that matter to strategy and customers. (3) *Focus on end-to-end processes*, not functions, with clear objectives and scope. (4) *Cross-functional teams* with the authority and skills to redesign. (5) *Effective change management and communication* to overcome resistance. (6) *Use of IT as an enabler* of the new process, not merely automating the old one. (7) *Staff involvement, training and reskilling*. (8) *Measurable targets and monitoring* of the redesigned process. (9) *Manage culture and stakeholder buy-in*, and pilot before full roll-out.

**1.2 Reasons for the high failure rate.** BPR fails when there is weak leadership and sponsorship, inadequate change management causing resistance, over-ambitious scope, or treating it as pure cost-cutting/automation rather than genuine process redesign.

**Conclusion.** BPR delivers radical gains only with committed leadership, strategic focus, cross-functional redesign, IT as enabler and disciplined change management; failure usually stems from underestimating the people and change side of radical redesign (Laudon and Laudon, 2023).`,
        answerPlan: [
          'Define BPR briefly.',
          'Success factors: executive sponsorship, focus on core processes, IT as enabler, change management, clear metrics, customer focus.',
          'Failure reasons: resistance to change, scope too narrow/too radical, neglecting people/culture, weak leadership.',
        ],
        markingLogic: ['1.1 at least 5-6 success factors explained (~17).', '1.2 valid failure reasons (~3).'],
        commonMistakes: ['Listing without explaining.', 'Ignoring the change-management dimension.'],
        paragraphStructure: 'Define > success factors (explained) > failure reasons.',
      },
      {
        id: 'ikm-p3-q2', number: 'Question 2', section: 'A', marks: 20,
        commandWords: ['Explain'],
        prompt: 'Explain in detail the strategic business objectives organisations aim to achieve (through investing in IT).',
        unitIds: ['ikm-1'], theoryIds: [], recommendedTheories: ['ikm-is-strategy'],
        answerPlan: ['Use the six strategic business objectives of IS (see Paper 5 Q3 worked solution).'],
        workedSolution:
`**Introduction.** Organisations invest in information systems to achieve six interdependent strategic business objectives (Laudon and Laudon, 2023).

**The six objectives.** (1) *Operational excellence*: IS raise productivity and efficiency in core processes, lowering cost per unit. (2) *New products, services and business models*: IS enable offerings and ways of doing business that did not previously exist, such as digital platforms. (3) *Customer and supplier intimacy*: systems that know the customer deeply increase loyalty and revenue, while systems linked to suppliers reduce cost and improve responsiveness. (4) *Improved decision-making*: real, accurate, timely data replaces guesswork, improving the quality of managerial decisions. (5) *Competitive advantage*: achieving the objectives above lets a firm out-perform rivals on cost, speed or differentiation. (6) *Survival*: some IS are non-discretionary necessities required by industry change, regulation or competitive parity (Laudon and Laudon, 2023).

**Interpretation.** These objectives are cumulative: operational excellence and intimacy feed better decisions, which together create competitive advantage, and in fast-moving sectors the same investments become a condition of survival (MANCOSA IKM Module Guide, 2026).

**Conclusion.** IT investment is justified strategically, not technically: the test is whether it advances one or more of these six objectives rather than whether it deploys the newest technology (Laudon and Laudon, 2023).`,
        markingLogic: ['Six objectives named: ~6.', 'Each explained: ~12.', 'Interpretation/links: ~2.'],
        commonMistakes: ['Listing fewer than six.', 'Confusing "objectives" with IS "types".'],
        paragraphStructure: 'Intro > six objectives explained > cumulative interpretation > conclusion.',
      },
      {
        id: 'ikm-p3-q3', number: 'Question 3 (3.1, 3.2)', section: 'B', marks: 20,
        commandWords: ['Elaborate', 'Explain'],
        prompt: '3.1 Four similarities between BPR and BPM (4). 3.2 Eight differences between BPR and BPM (16).',
        unitIds: ['ikm-6'], theoryIds: [], recommendedTheories: ['ikm-bpm', 'ikm-bpm'],
        workedSolution:
`**Introduction.** Business process re-engineering (BPR) and business process management (BPM) both improve processes but differ in scope and philosophy (Laudon and Laudon, 2023).

**3.1 Four similarities.** (1) Both focus on improving business processes to raise performance. (2) Both seek efficiency, effectiveness and customer value. (3) Both use IT as an enabler of better processes. (4) Both require process mapping/analysis and management support.

**3.2 Eight differences.** (1) *Scale of change* — BPR is radical and fundamental; BPM is incremental and continuous. (2) *Frequency* — BPR is typically a one-off, project-based transformation; BPM is ongoing. (3) *Risk* — BPR is high-risk; BPM is lower-risk. (4) *Scope* — BPR redesigns whole processes from scratch; BPM optimises existing processes. (5) *Disruption* — BPR is disruptive; BPM is evolutionary and stable. (6) *Focus* — BPR seeks dramatic breakthrough improvement; BPM seeks steady, sustained improvement. (7) *Time horizon* — BPR delivers change over a defined project; BPM is a permanent capability and lifecycle. (8) *Cultural orientation* — BPR imposes change top-down; BPM embeds a continuous-improvement culture.

**Conclusion.** BPR and BPM share a process-and-IT focus aimed at performance, but BPR is radical, risky and one-off while BPM is incremental, lower-risk and continuous; many organisations use BPR for breakthrough change and BPM to sustain and refine it (Laudon and Laudon, 2023).`,
        answerPlan: [
          'Similarities: both process-focused, aim to improve quality/cost, customer-oriented, technology-enabled.',
          'Differences (tabulate): radical vs incremental, one-off vs continuous, high vs lower risk, clean-slate vs existing process, top-down vs distributed, etc.',
        ],
        markingLogic: ['Four valid similarities: ~4.', 'Eight valid, distinct differences (ideally tabulated): ~16.'],
        commonMistakes: ['Repeating the same difference in different words.', 'Not tabulating where it would earn clarity.'],
        paragraphStructure: 'Similarities list > differences table (BPR vs BPM columns).',
      },
      {
        id: 'ikm-p3-q4', number: 'Question 4', section: 'B', marks: 20,
        commandWords: ['Elaborate'],
        prompt: 'Elaborate on five benefits businesses observe when Six Sigma and BPM are fully integrated.',
        unitIds: ['ikm-6'], theoryIds: [],
        recommendedTheories: ['ikm-bpm', 'ikm-bpm'],
        workedSolution:
`**Introduction.** Integrating Six Sigma (a data-driven quality and variation-reduction methodology) with business process management (BPM) combines rigorous defect reduction with continuous process governance (MANCOSA IKM Module Guide, 2026).

**Five benefits of full integration.** (1) *Sustained quality improvement* — Six Sigma's DMAIC discipline reduces defects and variation, while BPM ensures the improvements are embedded and continuously monitored, so gains are not lost. (2) *Data-driven decision-making* — Six Sigma supplies measurement and statistical rigour; BPM supplies the process framework to act on it, improving decision quality. (3) *Greater efficiency and lower cost* — removing variation and waste while continuously optimising processes lowers cost and cycle time. (4) *Better customer satisfaction* — more consistent, higher-quality outputs delivered reliably raise customer value. (5) *Continuous-improvement culture and agility* — BPM's lifecycle plus Six Sigma's problem-solving builds an organisation that improves and adapts continuously, with clear ownership and metrics.

**Conclusion.** Integrating Six Sigma and BPM gives organisations both breakthrough defect reduction and durable, continuously managed processes; the combination delivers sustained quality, efficiency, data-driven decisions, higher customer satisfaction and an improvement culture that neither approach achieves as fully alone (MANCOSA IKM Module Guide, 2026).`,
        answerPlan: ['Five benefits beyond cost/automation/quality: reduced variation, data-driven decisions, customer satisfaction, scalability/standardisation, continuous improvement culture.'],
        markingLogic: ['Five distinct benefits, each elaborated: ~20 (4 each).'],
        commonMistakes: ['Re-stating the three benefits the question already gives.'],
        paragraphStructure: 'Five benefits, each: state > explain > business effect.',
      },
      {
        id: 'ikm-p3-q5', number: 'Question 5', section: 'B', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss the two Six Sigma methodologies, DMAIC and DMADV, in detail.',
        unitIds: ['ikm-6'], theoryIds: [], recommendedTheories: ['ikm-bpm'],
        workedSolution:
`**Introduction.** Six Sigma uses two structured methodologies — DMAIC for improving existing processes and DMADV for designing new ones (MANCOSA IKM Module Guide, 2026).

**DMAIC (improve an existing process).** (1) *Define* — the problem, customer requirements and project goals. (2) *Measure* — current process performance and collect baseline data. (3) *Analyse* — the data to find the root causes of defects and variation. (4) *Improve* — design and implement solutions that remove the root causes. (5) *Control* — put controls, monitoring and standards in place so the gains are sustained. DMAIC is used when a process exists but underperforms.

**DMADV (design a new process or product).** (1) *Define* — design goals aligned to customer needs and strategy. (2) *Measure* — critical-to-quality characteristics, capabilities and risks. (3) *Analyse* — develop and evaluate design alternatives. (4) *Design* — the detailed new process/product to meet requirements. (5) *Verify* — validate the design through testing/piloting before full launch. DMADV (also called Design for Six Sigma) is used when no adequate process exists or a process must be redesigned from scratch.

**Conclusion.** DMAIC improves and stabilises existing processes, while DMADV designs new, defect-free ones; both follow a disciplined, data-driven five-phase structure, and the choice depends on whether the process already exists (MANCOSA IKM Module Guide, 2026).`,
        answerPlan: [
          'DMAIC (Define, Measure, Analyse, Improve, Control): improving an existing process.',
          'DMADV (Define, Measure, Analyse, Design, Verify): designing a new process/product.',
          'Contrast: improvement vs design; when to use each.',
        ],
        markingLogic: ['DMAIC phases explained: ~8.', 'DMADV phases explained: ~8.', 'Contrast + when to use: ~4.'],
        commonMistakes: ['Spelling out the acronyms without explaining each phase.', 'No contrast between the two.'],
        paragraphStructure: 'DMAIC phases > DMADV phases > contrast/use.',
      },
    ],
  },

  {
    id: 'ikm-paper-4',
    module: 'ikm',
    title: 'Smart Cities',
    paperRef: 'Single 100-mark case (Smart Cities / IoT / big data / cloud)',
    totalMarks: 100,
    saContext: false,
    frequency: 'Medium',
    sourceStatus: 'Uploaded MANCOSA IKM past paper. Transcribed from scan.',
    caseSummary:
      'A case describes the rise of smart cities built on the Internet of Things, big data and cloud computing, where interconnected systems improve monitoring, control and public services, but where the benefits must be weighed against security, privacy and governance risks.',
    keyFacts: [
      'Smart cities depend on IoT, big data analytics and cloud computing.',
      'Interconnection brings security and privacy vulnerabilities.',
      'Benefits must be weighted against legal, political and social factors.',
    ],
    keyProblem: 'Capturing the value of hyper-connected urban systems while controlling security, privacy and resilience risks.',
    questions: [
      {
        id: 'ikm-p4-q1', number: 'Question 1', section: 'A', marks: 20,
        commandWords: ['Elaborate'],
        prompt: 'Elaborate on five vulnerabilities of the interconnected world.',
        unitIds: ['ikm-4'], theoryIds: ['ikm-info-governance'],
        workedSolution:
`**Introduction.** Hyper-connectivity through the internet, cloud and IoT brings major benefits but also exposes organisations to serious vulnerabilities (Laudon and Laudon, 2023).

**Five vulnerabilities of the interconnected world.** (1) *Cyber-attacks and hacking* — wider connectivity means a larger attack surface for intrusion, ransomware and denial-of-service. (2) *Data breaches and privacy loss* — vast volumes of personal and corporate data can be stolen or exposed, with legal and reputational damage. (3) *Malware and viruses* — malicious code spreads rapidly across connected networks and devices. (4) *Insecure IoT and endpoint devices* — many connected devices have weak security, becoming entry points and botnet recruits. (5) *Systemic interdependence and single points of failure* — when systems are linked, one failure (a cloud outage, a supply-chain compromise) cascades widely, and reliance on third parties adds risk. Related concerns include phishing/social engineering and identity theft.

**Mitigation note.** These vulnerabilities call for layered defences: firewalls, encryption, access control, patching, monitoring and user awareness.

**Conclusion.** The interconnected world multiplies exposure to cyber-attack, data breach, malware, insecure devices and cascading interdependence; organisations must treat security as continuous risk management, not a one-off control (Laudon and Laudon, 2023).`,
        answerPlan: ['Five vulnerabilities: cyberattacks/malware, data breaches/privacy loss, single points of failure, weak IoT device security, dependence/resilience risk.'],
        markingLogic: ['Five distinct vulnerabilities, each elaborated: ~20.'],
        commonMistakes: ['Naming threats without explaining the vulnerability.'],
        paragraphStructure: 'Five vulnerabilities, each: name > explain > consequence.',
      },
      {
        id: 'ikm-p4-q2', number: 'Question 2 (2.1, 2.2)', section: 'A', marks: 20,
        commandWords: ['Discuss', 'Explain'],
        prompt: '2.1 Measures to ensure system availability for smart cities (16). 2.2 Two data protection measures for wireless networks (4).',
        unitIds: ['ikm-4'], theoryIds: ['ikm-info-governance'],
        workedSolution:
`**Introduction.** Smart cities depend on always-available systems and secure wireless networks, so availability and data protection are core design requirements (Laudon and Laudon, 2023).

**2.1 Measures to ensure system availability.** (1) *Redundancy and failover* — duplicate critical components and sites so failure does not stop service. (2) *Load balancing* — distribute demand across servers to prevent overload. (3) *Disaster recovery and backups* — tested recovery plans and regular backups restore service quickly. (4) *Preventive maintenance and monitoring* — continuous health monitoring detects and fixes issues before outage. (5) *Scalable cloud infrastructure* — elastic capacity absorbs demand spikes. (6) *Protection against attacks* — DDoS mitigation and intrusion prevention keep services up. (7) *Service-level agreements and uptime targets* with providers. (8) *Uninterruptible power and network resilience.*

**2.2 Two data-protection measures for wireless networks.** (1) *Encryption* — strong wireless encryption (for example WPA3) and encrypted transmission so intercepted data is unreadable. (2) *Authentication and access control* — strong authentication, secure passwords and network segmentation so only authorised devices and users connect; a firewall/VPN adds a further protective layer.

**Conclusion.** Smart-city availability rests on redundancy, failover, recovery, monitoring and scalable, attack-resistant infrastructure, while wireless data is protected primarily by encryption and strong authentication/access control (Laudon and Laudon, 2023).`,
        answerPlan: [
          'Availability measures: redundancy, backups, fault tolerance, disaster recovery, capacity planning, monitoring, SLAs.',
          'Wireless protection: encryption (WPA2/3), authentication/access control, VPNs.',
        ],
        markingLogic: ['2.1 availability measures (min. 4 explained): ~16.', '2.2 two valid protection measures: ~4.'],
        commonMistakes: ['Confusing availability with confidentiality.', 'Listing one-word measures with no explanation.'],
        paragraphStructure: 'Availability measures explained > two wireless protections.',
      },
      {
        id: 'ikm-p4-q3', number: 'Question 3', section: 'B', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss five areas in a smart city where big data has the biggest impact.',
        unitIds: ['ikm-5', 'ikm-7'], theoryIds: [], recommendedTheories: ['ikm-big-data'],
        workedSolution:
`**Introduction.** Big data analytics lets smart cities turn vast sensor and citizen data into better services; its impact is greatest in a few high-value areas (Laudon and Laudon, 2023).

**Five areas where big data has the biggest impact.** (1) *Transport and traffic management* — real-time data optimises traffic flow, public transport and parking, cutting congestion and travel time. (2) *Energy and utilities* — smart-grid and meter data balance supply and demand, reduce waste and enable efficient water and electricity use. (3) *Public safety and emergency response* — analytics on crime, surveillance and sensor data support faster, better-targeted policing and disaster response. (4) *Healthcare* — population-health and real-time data improve resource allocation, early warning and service planning. (5) *Environmental monitoring* — air-quality, noise and waste data guide pollution control and sustainability. (Governance/citizen services is a further strong area.)

**Why these matter.** Each area handles large, fast-moving data and directly affects citizen wellbeing, so analytics yields visible improvements in efficiency and service quality.

**Conclusion.** Big data delivers the greatest smart-city value in transport, energy, public safety, healthcare and environmental monitoring, because these domains are data-rich and citizen-critical, allowing analytics to improve efficiency, safety and sustainability (Laudon and Laudon, 2023).`,
        answerPlan: ['Five areas: transport/traffic, energy/utilities, public safety/emergency response, healthcare, environmental monitoring/waste.'],
        markingLogic: ['Five areas, each with the big-data impact explained: ~20.'],
        commonMistakes: ['Defining big data instead of applying it to areas.'],
        paragraphStructure: 'Five areas, each: area > big-data use > impact.',
      },
      {
        id: 'ikm-p4-q4', number: 'Question 4', section: 'B', marks: 20,
        commandWords: ['Elaborate'],
        prompt: 'Elaborate on five ways cloud computing connects citizens, improves IT operations and increases transparency in a smart city.',
        unitIds: ['ikm-1', 'ikm-5'], theoryIds: [], recommendedTheories: ['ikm-cloud-computing'],
        workedSolution:
`**Introduction.** Cloud computing underpins smart cities by connecting citizens, improving IT operations and increasing transparency through shared, scalable services (Laudon and Laudon, 2023).

**Five ways cloud computing helps.** (1) *Connects citizens* — cloud-hosted portals and apps give residents anywhere-access to municipal services, payments and information from any device, improving inclusion and convenience. (2) *Improves IT operations* — elastic, on-demand capacity lets the city scale services up or down without large hardware investment, while the provider handles maintenance, updates and resilience. (3) *Increases transparency* — open-data platforms hosted in the cloud publish budgets, performance and service data, letting citizens hold the administration accountable. (4) *Enables data sharing and integration* — different departments and agencies share a common platform, breaking silos and giving a single view of city services. (5) *Supports real-time analytics and collaboration* — cloud analytics process sensor and service data quickly, and shared workspaces let agencies and citizens collaborate.

**Conclusion.** Cloud computing makes the smart city more connected, efficient and open: it brings services to citizens, gives the administration scalable low-maintenance IT, and exposes open data that strengthens accountability, while enabling integration and real-time analytics across the city (Laudon and Laudon, 2023).`,
        answerPlan: ['Five ways: shared platforms/portals, scalable services, open-data access, integrated services, real-time dashboards.'],
        markingLogic: ['Five ways, each elaborated and tied to connect/operations/transparency: ~20.'],
        commonMistakes: ['Generic cloud benefits not tied to citizens/transparency.'],
        paragraphStructure: 'Five ways, each: mechanism > citizen/transparency benefit.',
      },
      {
        id: 'ikm-p4-q5', number: 'Question 5 (5.1, 5.2)', section: 'B', marks: 20,
        commandWords: ['Discuss', 'Explain'],
        prompt: '5.1 Two real smart-city examples and their services (10). 5.2 Five IoT applications in a smart city (10).',
        unitIds: ['ikm-7'], theoryIds: [], recommendedTheories: ['ikm-iot'],
        workedSolution:
`**Introduction.** Smart cities combine connected services with Internet-of-Things (IoT) sensing to improve urban life (Laudon and Laudon, 2023).

**5.1 Two real smart-city examples and their services.** (1) *Singapore (Smart Nation)* — integrated services including intelligent traffic and transport management, digital government services, smart healthcare and extensive sensor networks for planning. (2) *Barcelona* — smart lighting that dims when streets are empty, smart parking sensors guiding drivers to free bays, smart waste bins signalling when full, and connected water management. (Other valid examples include Amsterdam and Dubai.) Each uses connected data to deliver more efficient, responsive city services.

**5.2 Five IoT applications in a smart city.** (1) *Smart traffic and transport* — sensors and connected signals manage flow and public transport. (2) *Smart energy/grid and metering* — connected meters balance and reduce energy use. (3) *Smart waste management* — fill-level sensors optimise collection routes. (4) *Smart water and environmental monitoring* — sensors track quality, leaks and air pollution. (5) *Smart public safety and lighting* — connected cameras, lighting and emergency sensors improve safety.

**Conclusion.** Cities such as Singapore and Barcelona show IoT in action across traffic, energy, waste, environment and safety; connected sensing turns city infrastructure into responsive, efficient, citizen-focused services (Laudon and Laudon, 2023).`,
        answerPlan: ['5.1 Two named cities + services. 5.2 Five IoT applications: smart metering, traffic sensors, connected lighting, waste sensors, environmental sensors.'],
        markingLogic: ['5.1 two cities + services (~10).', '5.2 five IoT applications explained (~10).'],
        commonMistakes: ['Vague examples with no named city.'],
        paragraphStructure: 'Two cities + services > five IoT applications.',
      },
    ],
  },

  {
    id: 'ikm-paper-5',
    module: 'ikm',
    title: "A Look into Toyota's Learning Organization",
    paperRef: 'Section A case (Toyota / Liker) + Section B',
    totalMarks: 120,
    saContext: false,
    frequency: 'High',
    sourceStatus: 'Uploaded MANCOSA IKM past paper. Transcribed from scan.',
    caseSummary:
      "Drawing on Liker's account of the Toyota Way, the case presents Toyota as a model learning organisation built on identifying root causes (the five whys), hansei (self-reflection) and hoshin kanri (policy deployment), sustained over many years.",
    keyFacts: [
      'Toyota is presented as a leading learning organisation.',
      'Three elements: root-cause analysis (five whys), hansei (reflection), hoshin kanri (policy deployment via PDCA).',
      'Success took more than a decade of relentless, consistent effort.',
    ],
    keyProblem: 'How organisations build durable learning, knowledge creation and an enabling culture rather than chasing short-lived initiatives.',
    questions: [
      {
        id: 'ikm-p5-q1', number: 'Question 1', section: 'A', marks: 20,
        commandWords: ['Explain'],
        prompt: 'Explain the disciplines of a learning organisation.',
        unitIds: ['ikm-3'], theoryIds: ['ikm-learning-org'],
        workedSolution:
`**Introduction.** A learning organisation is one that continually expands its capacity to create its own future by enabling and structuring organisational learning (MANCOSA IKM Module Guide, 2026). It is conventionally built on five disciplines (Dalkir, 2022).

**The five disciplines.** (1) *Systems thinking*: seeing the organisation as an interrelated whole rather than isolated parts, so managers address root causes rather than symptoms. This is the integrating discipline. (2) *Personal mastery*: individuals continually clarify and deepen their own capability and commitment to learning. (3) *Mental models*: surfacing and challenging the deeply held assumptions that shape how people interpret and act. (4) *Shared vision*: building genuine commitment to a common future rather than mere compliance. (5) *Team learning*: dialogue and collective thinking that make the team's intelligence exceed the sum of individuals (Dalkir, 2022; Hislop, Bosua and Helms, 2023).

**Application to the case.** Toyota's five whys is systems thinking and the challenging of mental models in practice; hansei is personal mastery and team learning through structured reflection; hoshin kanri cascades a shared vision into aligned objectives via the PDCA cycle (MANCOSA IKM Module Guide, 2026).

**Conclusion.** The five disciplines explain why Toyota's learning is durable: it is structural and cultural, embedded over years, not a one-off programme. Organisations that adopt the tools without the disciplines, especially systems thinking, achieve only short-lived gains (Dalkir, 2022).`,
        answerPlan: [
          'Define a learning organisation.',
          'Five disciplines: systems thinking, personal mastery, mental models, shared vision, team learning.',
          'Apply to Toyota (five whys, hansei, hoshin kanri).',
          'Conclude on why learning becomes durable.',
        ],
        markingLogic: ['Definition: ~3.', 'Five disciplines explained: ~12.', 'Applied to Toyota: ~3.', 'Conclusion: ~2.'],
        commonMistakes: ['Listing the five disciplines without explaining each.', 'No application to the case.'],
        paragraphStructure: 'Define > five disciplines > apply to case > conclude.',
      },
      {
        id: 'ikm-p5-q2', number: 'Question 2', section: 'A', marks: 20,
        commandWords: ['Provide a detailed explanation', 'Discuss'],
        prompt: 'Explain organisational culture and discuss how Toyota\'s culture impacts its KM initiatives.',
        unitIds: ['ikm-3', 'ikm-6'], theoryIds: ['ikm-km-cycle', 'ikm-learning-org'],
        workedSolution:
`**Introduction.** Organisational culture is the shared values, beliefs and norms that shape behaviour; Toyota's culture is central to the success of its knowledge-management initiatives (Dalkir, 2022).

**Organisational culture explained.** Culture is 'the way things are done' in an organisation — the assumptions, values and practices that guide how people act, communicate and share. A learning-and-sharing culture enables KM; a defensive or siloed culture blocks it.

**How Toyota's culture impacts its KM.** Toyota's culture of *continuous improvement (kaizen)*, *respect for people* and *learning from problems* directly drives knowledge creation and sharing. Practices such as the *Toyota Production System*, standardised work, *genchi genbutsu* (go and see), quality circles and the andon problem-solving culture capture tacit shop-floor knowledge and turn it into shared, explicit standards. Mistakes are treated as learning opportunities rather than blame, so knowledge flows freely. Mentoring and on-the-job development transfer tacit expertise across generations of staff. This culture makes KM a natural, embedded behaviour rather than an imposed system.

**Conclusion.** Toyota shows that KM works best when culture supports it: its values of kaizen, respect and learning convert everyday tacit knowledge into shared organisational knowledge, demonstrating that culture, not technology, is the decisive enabler of knowledge management (Dalkir, 2022; MANCOSA IKM Module Guide, 2026).`,
        answerPlan: [
          'Define organisational culture.',
          'Toyota culture: continuous improvement (kaizen), reflection, respect for people, long-term orientation.',
          'Impact on KM: this culture drives knowledge creation, sharing and retention; without it, KM tools fail.',
        ],
        markingLogic: ['Culture defined: ~4.', 'Toyota culture characterised: ~6.', 'Impact on KM initiatives: ~8.', 'Coherence: ~2.'],
        commonMistakes: ['Defining culture but not linking to KM.'],
        paragraphStructure: 'Define culture > Toyota culture > impact on KM.',
      },
      {
        id: 'ikm-p5-q3', number: 'Question 3', section: 'B', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss the impact of the Internet on competitive forces and industry structure.',
        unitIds: ['ikm-2'], theoryIds: [], recommendedTheories: ['ikm-is-strategy'],
        answerPlan: [
          'State Porter\'s five forces: rivalry, new entrants, substitutes, buyer power, supplier power.',
          'For each, discuss how the Internet changes it (often intensifying rivalry, lowering entry barriers, raising buyer power).',
          'Conclude on net effect on industry attractiveness.',
        ],
        workedSolution:
`**Introduction.** Michael Porter's five competitive forces model identifies the structural drivers of industry competition and profitability. The Internet has fundamentally reshaped each force, generally intensifying competition and reducing profitability across many industries (Laudon and Laudon, 2023).

**Rivalry among existing competitors.** The Internet makes prices universally visible, reduces product differentiation and lowers switching costs, intensifying price-based rivalry. Organisations compete globally rather than locally, expanding the competitor set and compressing margins (Laudon and Laudon, 2023).

**Threat of new entrants.** By lowering setup, distribution and marketing costs, the Internet reduces barriers to entry. A new competitor can reach a national or global market without physical infrastructure, so incumbent firms face more frequent disruption from lean, digital-native entrants (Laudon and Laudon, 2023).

**Threat of substitute products or services.** Digital delivery enables entirely new substitutes. Physical music, printed media and travel agencies were displaced not just by cheaper competitors but by digitally enabled alternatives — streaming, news aggregators and booking platforms — accelerating substitution cycles (MANCOSA IKM Module Guide, 2026).

**Bargaining power of buyers.** Price comparison, product reviews and switching ease give buyers unprecedented information and leverage. Buyers can shift to a competitor in minutes, raising their power and compressing margins across many sectors (Laudon and Laudon, 2023).

**Bargaining power of suppliers.** The Internet creates procurement transparency that can reduce supplier power where suppliers are commoditised. However, platform-based suppliers can gain power by aggregating demand or locking firms into proprietary ecosystems (Laudon and Laudon, 2023).

**Net effect and conclusion.** The Internet has structurally lowered the attractiveness of many industries by intensifying most forces simultaneously. Firms must therefore use information systems not merely for efficiency but to build information-based switching costs, differentiation and customer intimacy that blunt these forces (Laudon and Laudon, 2023; MANCOSA IKM Module Guide, 2026).`,
        markingLogic: ['Five forces named: ~5.', 'Internet impact per force: ~13.', 'Net conclusion: ~2.'],
        commonMistakes: ['Describing the Internet generally without the five forces.', 'Treating the Internet as only a threat or only an opportunity.'],
        paragraphStructure: 'Five forces > Internet impact per force > net effect.',
      },
      {
        id: 'ikm-p5-q4', number: 'Question 4', section: 'B', marks: 20,
        commandWords: ['Provide clarity', 'Explain'],
        prompt: 'Clarify how the Knowledge Management Value Chain adds value to raw data and information as they become usable knowledge.',
        unitIds: ['ikm-3', 'ikm-5'], theoryIds: ['ikm-km-cycle'], recommendedTheories: ['ikm-km-value-chain'],
        answerPlan: [
          'Define the KM value chain (Laudon and Laudon): knowledge acquisition, storage, dissemination, application.',
          'Add the managerial and organisational activities at each stage that add value.',
          'Show the data-to-knowledge transformation.',
        ],
        workedSolution:
`**Introduction.** The Knowledge Management Value Chain is a framework that explains how organisations transform raw data into actionable organisational knowledge through a sequence of value-adding activities (Laudon and Laudon, 2023).

**Stage 1 – Knowledge acquisition.** The organisation gathers raw data and information from internal systems (TPS, databases) and external sources (market research, the Internet). Value is added by systematically capturing and validating this material and converting it into a consistent organisational knowledge base (Laudon and Laudon, 2023).

**Stage 2 – Knowledge storage.** Acquired knowledge is organised and stored in repositories — databases, document management systems and intranets — where it can be retrieved on demand. The managerial activity at this stage is taxonomy design and governance: deciding what is retained, how it is classified and who may access it (Dalkir, 2022).

**Stage 3 – Knowledge dissemination.** Stored knowledge is distributed to employees who need it through search tools, collaboration platforms, communities of practice and training. The key managerial activity is removing barriers to sharing and creating the organisational culture that motivates people to seek and contribute knowledge (Dalkir, 2022; MANCOSA IKM Module Guide, 2026).

**Stage 4 – Knowledge application.** Workers apply knowledge to decisions and work processes, generating value for the organisation. Feedback from application identifies gaps and outdated knowledge, feeding back into acquisition to complete the cycle (Laudon and Laudon, 2023).

**Data-to-knowledge transformation.** At acquisition the chain inputs raw data; by storage it has become organised information; through dissemination it becomes accessible knowledge; at application it becomes embedded organisational capability. This progression maps onto the DIKW hierarchy: each stage adds meaning, context and actionability to what was initially unstructured data (MANCOSA IKM Module Guide, 2026; Laudon and Laudon, 2023).

**Conclusion.** The KM value chain clarifies that managing knowledge is not a technology task alone: each stage demands both managerial coordination and organisational enablers. Without deliberate management of all four stages, valuable knowledge remains siloed, undiscovered or unused (Dalkir, 2022).`,
        markingLogic: ['Four value-chain stages: ~8.', 'Value-adding activities per stage: ~10.', 'Data-to-knowledge framing: ~2.'],
        commonMistakes: ['Confusing the KM value chain with Porter\'s value chain.'],
        paragraphStructure: 'Four stages > value-adding activities > transformation.',
      },
      {
        id: 'ikm-p5-q5', number: 'Question 5 (5.1, 5.2)', section: 'B', marks: 20,
        commandWords: ['Discuss', 'Elaborate'],
        prompt: '5.1 Three stages for evaluation of knowledge assets linked to key processes and strategies (10). 5.2 Brooking\'s framework for classifying intellectual capital (10).',
        unitIds: ['ikm-3'], theoryIds: [], recommendedTheories: ['ikm-intellectual-capital'],
        workedSolution:
`**Introduction.** Knowledge assets are intangible resources that create value; they must be evaluated and classified to be managed (Dalkir, 2022).

**5.1 Three stages for evaluating knowledge assets.** Linked to key processes and strategy, evaluation moves through: (1) *Identification* — locate and inventory the organisation's knowledge assets (expertise, patents, processes, relationships) and link them to the key processes and strategic goals they support. (2) *Measurement/assessment* — assess each asset's value and contribution using suitable indicators, judging relevance to strategy and the cost of losing it. (3) *Monitoring and leveraging* — track assets over time, protect critical ones, and deploy them to maximise value, feeding results back into strategy.

**5.2 Brooking's framework for intellectual capital.** Brooking classifies intellectual capital into four categories: (1) *Market assets* — brands, customers, distribution channels and reputation. (2) *Human-centred assets* — employee knowledge, skills, expertise and creativity (which leave when staff leave). (3) *Intellectual-property assets* — patents, copyrights, trademarks and trade secrets that are legally protected. (4) *Infrastructure assets* — the technologies, processes, methods and culture that enable the organisation to function.

**Conclusion.** Evaluating knowledge assets through identification, measurement and monitoring, and classifying them with Brooking's four categories, lets an organisation see, protect and leverage its intangible value in line with strategy (Dalkir, 2022).`,
        answerPlan: [
          '5.1 Three-stage knowledge-asset evaluation (identify assets > link to key processes/strategy > assess value/gaps).',
          "5.2 Brooking's four categories: market assets, human-centred assets, intellectual property assets, infrastructure assets.",
        ],
        markingLogic: ['5.1 three stages explained: ~10.', '5.2 four Brooking categories explained: ~10.'],
        commonMistakes: ['Confusing Brooking with Skandia.', 'Listing categories without explanation.'],
        paragraphStructure: 'Three evaluation stages > four Brooking categories.',
      },
      {
        id: 'ikm-p5-q6', number: 'Question 6', section: 'B', marks: 20,
        commandWords: ['Elaborate'],
        prompt: 'Elaborate on Group Decision-Support Systems (GDSS) and Web-Based Customer Decision-Support Systems.',
        unitIds: ['ikm-5'], theoryIds: [], recommendedTheories: ['ikm-is-types'],
        workedSolution:
`**Introduction.** Decision-support systems (DSS) help managers analyse semi-structured problems; group and web-based variants extend this to teams and customers (Laudon and Laudon, 2023).

**Group Decision-Support Systems (GDSS).** A GDSS is an interactive, computer-based system that supports a group of decision-makers working together on an unstructured or semi-structured problem. It provides tools for *electronic brainstorming, idea organisation, voting/ranking, and anonymous input*, plus shared models and data. Benefits include faster, more structured group decisions, wider participation, reduced dominance by individuals through anonymity, and a documented decision trail. It is used in planning meetings, strategy sessions and group problem-solving.

**Web-Based Customer Decision-Support Systems (CDSS).** A web-based CDSS supports *customers* in making purchase or service decisions online. It uses tools such as product configurators, comparison engines, recommendation systems, FAQs, calculators and customer reviews to guide choices. Benefits include better customer experience, increased sales, self-service efficiency, and data captured on customer preferences. Examples are online recommendation engines and insurance or loan calculators.

**Conclusion.** GDSS supports collaborative internal decision-making with brainstorming, voting and shared models, while web-based CDSS supports external customers' decisions with configurators, comparisons and recommendations; both extend DSS principles to new users — groups and customers (Laudon and Laudon, 2023).`,
        answerPlan: [
          'Define DSS, then GDSS (supports group decisions, structured collaboration, reduces groupthink).',
          'Web-based customer DSS (helps customers make purchase decisions, e.g. recommender/configuration tools).',
          'Contrast their users and purposes.',
        ],
        markingLogic: ['GDSS explained: ~9.', 'Web-based customer DSS explained: ~9.', 'Contrast: ~2.'],
        commonMistakes: ['Treating both as the same system.'],
        paragraphStructure: 'Define DSS > GDSS > web-based customer DSS > contrast.',
      },
    ],
  },

  {
    id: 'ikm-paper-6',
    module: 'ikm',
    title: 'Database Implementation at Toyota',
    paperRef: 'Section A case (Toyota / Hyperion / DBMS) + Section B',
    totalMarks: 120,
    saContext: false,
    frequency: 'High',
    sourceStatus: 'Uploaded MANCOSA IKM past paper. Transcribed from scan.',
    caseSummary:
      'Toyota Motor Sales replaced fragmented data access with a DBMS-based business-intelligence platform that connected data across multiple database platforms, freeing IT to focus on building applications rather than solving connectivity problems and delivering measurable financial gains.',
    keyFacts: [
      'A DBMS gave Toyota reliable, integrated access to data across platforms.',
      'The change reallocated budget and improved efficiency.',
      'The pairing was described as an unmatched business-intelligence tool.',
    ],
    keyProblem: 'Moving from a traditional file environment to a DBMS to gain integrated, reliable, decision-ready data.',
    questions: [
      {
        id: 'ikm-p6-q1', number: 'Question 1', section: 'A', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss the problems of a traditional file system that a DBMS solves.',
        unitIds: ['ikm-5'], theoryIds: [], recommendedTheories: ['ikm-dbms'],
        workedSolution:
`**Introduction.** Traditional file systems store data in separate, application-owned files; a database management system (DBMS) solves the problems this creates (Laudon and Laudon, 2023).

**Problems of the traditional file system a DBMS solves.** (1) *Data redundancy* — the same data is duplicated across many files, wasting storage; a DBMS stores data once. (2) *Data inconsistency* — duplicated data gets updated in some files but not others, so versions conflict; a DBMS keeps a single, consistent copy. (3) *Program-data dependence* — programs are tied to specific file formats, so changes are costly; a DBMS separates data from applications. (4) *Lack of data sharing and integration* — data trapped in application silos cannot be combined; a DBMS centralises and shares it. (5) *Poor security and access control* — file systems offer weak, scattered control; a DBMS provides centralised security, permissions and authentication. (6) *Weak data integrity and limited ad-hoc access* — no enforced rules and hard to query flexibly; a DBMS enforces integrity rules and supports flexible querying.

**Conclusion.** A DBMS overcomes the traditional file system's redundancy, inconsistency, program-data dependence, poor sharing, weak security and integrity problems by storing data centrally, once, under common control with enforced rules and flexible access (Laudon and Laudon, 2023).`,
        answerPlan: ['Traditional file problems: data redundancy/inconsistency, program-data dependence, poor sharing/availability, weak security, lack of integration.'],
        markingLogic: ['At least five file-system problems explained: ~20.'],
        commonMistakes: ['Describing a DBMS instead of the file-system problems it solves.'],
        paragraphStructure: 'Five file-system problems, each explained as the DBMS rationale.',
      },
      {
        id: 'ikm-p6-q2', number: 'Question 2', section: 'A', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss the capabilities of a database system that make it a viable solution to the traditional file environment.',
        unitIds: ['ikm-5'], theoryIds: [], recommendedTheories: ['ikm-dbms'],
        workedSolution:
`**Introduction.** A database system provides capabilities that make it a far stronger solution than a traditional file environment (Laudon and Laudon, 2023).

**Capabilities of a database system.** (1) *Centralised data with reduced redundancy* — data is stored once and shared, eliminating duplication and inconsistency. (2) *Data independence* — applications are separated from physical storage, so changes to data structures do not break programs. (3) *Querying and reporting (for example SQL)* — flexible ad-hoc retrieval and reporting answer business questions quickly. (4) *Data integrity and validation* — enforced rules (constraints, keys) keep data accurate and consistent. (5) *Security and access control* — centralised authentication, authorisation and permissions protect sensitive data. (6) *Concurrency control* — many users can access data simultaneously without corruption. (7) *Backup and recovery* — the DBMS protects against loss and restores after failure. (8) *Data administration* — central management of definitions, standards and metadata via a data dictionary.

**Why this makes it viable.** These capabilities directly cure the file environment's redundancy, inconsistency, dependence, weak security and poor sharing.

**Conclusion.** A database system's centralisation, data independence, querying, integrity, security, concurrency and recovery capabilities make it a robust, shareable and reliable replacement for fragmented traditional file systems (Laudon and Laudon, 2023).`,
        answerPlan: ['DBMS capabilities: data definition, data dictionary, querying/reporting (SQL), concurrency control, integrity, security, reduced redundancy.'],
        markingLogic: ['Capabilities explained, each tied to solving a file problem: ~20.'],
        commonMistakes: ['Listing capabilities with no link to viability.'],
        paragraphStructure: 'DBMS capabilities, each: capability > problem solved.',
      },
      {
        id: 'ikm-p6-q3', number: 'Question 3 (3.1, 3.2)', section: 'B', marks: 20,
        commandWords: ['Discuss', 'Explain'],
        prompt: '3.1 How the Skandia Navigator measures intellectual capital (10). 3.2 Three stages for evaluation of knowledge assets (10).',
        unitIds: ['ikm-3'], theoryIds: [], recommendedTheories: ['ikm-intellectual-capital'],
        answerPlan: [
          '3.1 Skandia Navigator: five focus areas (financial, customer, process, renewal and development, human) with human capital at the centre.',
          '3.2 Three-stage knowledge-asset evaluation (as Paper 5 Q5.1).',
        ],
        workedSolution:
`**3.1 The Skandia Navigator.** The Skandia Navigator, developed by Leif Edvinsson at Skandia AFS, is a practical intellectual-capital measurement framework that maps organisational value across five focus areas arranged around *human capital* at the centre (Dalkir, 2022). The five areas are: (1) *Financial focus* — traditional measures of financial performance and profitability; (2) *Customer focus* — customer retention, satisfaction and the strength of relationships; (3) *Process focus* — internal operational efficiency and technology utilisation; (4) *Renewal and development focus* — investment in future capability through training, research and product development; and (5) *Human focus* — the competencies, commitment and experience of employees (Dalkir, 2022). Human capital sits at the centre because all the other focus areas depend on the people who drive them. The Navigator converts intangible knowledge assets into reportable indicators alongside financial results, enabling IC to be managed and not merely acknowledged (MANCOSA IKM Module Guide, 2026).

**3.2 Three-stage evaluation of knowledge assets.** Organisations evaluate knowledge assets in three sequential stages. (1) *Identification* — systematically cataloguing the knowledge assets that exist: who holds which expertise, what processes encode knowledge, and what databases and systems contain intellectual capital. A knowledge audit is the common tool at this stage. (2) *Linking to key processes and strategy* — mapping each identified asset to the business processes and strategic objectives it supports, so that critical knowledge assets (those tied to competitive advantage) are distinguished from peripheral ones. This prioritisation determines where protection and investment are most urgent. (3) *Assessment of value and gaps* — appraising the current asset against what is required to execute the strategy, identifying shortfalls (knowledge gaps that must be acquired or developed) and surpluses (knowledge that may be shared or commercialised externally) (Dalkir, 2022; MANCOSA IKM Module Guide, 2026).`,
        markingLogic: ['3.1 Skandia focus areas explained: ~10.', '3.2 three stages: ~10.'],
        commonMistakes: ['Confusing Skandia (five focus areas) with Brooking (four categories).'],
        paragraphStructure: 'Skandia five focus areas > three evaluation stages.',
      },
      {
        id: 'ikm-p6-q4', number: 'Question 4', section: 'B', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss the impact of the Internet on competitive forces and industry structure. (Repeat of Paper 5 Q3.)',
        unitIds: ['ikm-2'], theoryIds: [], recommendedTheories: ['ikm-is-strategy'],
        workedSolution:
`**Introduction.** The internet has reshaped industry structure and Porter's five competitive forces, often intensifying competition (Laudon and Laudon, 2023). (This question also appears as Paper 5 Q3 and Paper 7 Q4.)

**Impact on the five forces.** (1) *Competitive rivalry* — the internet widens markets and increases price transparency, intensifying rivalry. (2) *Threat of new entrants* — lower entry costs and digital business models reduce barriers, so new entrants appear more easily. (3) *Threat of substitutes* — digital products and platforms create many new substitutes (streaming for physical media, fintech for banks). (4) *Bargaining power of buyers* — easy price comparison and switching greatly increase buyer power. (5) *Bargaining power of suppliers* — mixed: the internet can reduce supplier power through wider sourcing, but platform owners can gain power.

**Overall effect on industry structure.** The internet generally lowers barriers, raises transparency and increases buyer power, tending to *reduce average industry profitability* and shift advantage toward firms that build digital scale, data, network effects and differentiation.

**Conclusion.** By transparency, lower entry barriers and new substitutes, the internet intensifies most of Porter's forces and pressures profits; firms respond by using the same technology to differentiate, build network effects and create switching costs (Laudon and Laudon, 2023).`,
        answerPlan: ['See Paper 5 Question 3.'],
        markingLogic: ['As Paper 5 Q3.'], commonMistakes: ['As Paper 5 Q3.'],
        paragraphStructure: 'Five forces > Internet impact per force > net effect.',
      },
      {
        id: 'ikm-p6-q5', number: 'Question 5', section: 'B', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss the prototyping development method in detail, with its advantages and disadvantages.',
        unitIds: ['ikm-5'], theoryIds: [], recommendedTheories: ['ikm-prototyping'],
        workedSolution:
`**Introduction.** Prototyping is a development method that builds an early working version of a system, refined through repeated user feedback (Laudon and Laudon, 2023).

**The prototyping method in detail.** It iterates four steps: (1) identify basic requirements; (2) develop an initial prototype; (3) let users test and react to it; and (4) refine the prototype based on feedback, repeating until users are satisfied. The agreed prototype then becomes, or guides, the final system. It suits projects where requirements are unclear or evolving, such as decision-support and user-facing systems.

**Advantages.** Clarifies requirements through tangible feedback; involves users and builds buy-in; finds problems early and cheaply; speeds development of an acceptable design; reduces costly later rework; and handles uncertain requirements well.

**Disadvantages.** Can cause scope creep and shifting requirements; may raise unrealistic expectations; risks an unpolished prototype being pushed into production; documentation and analysis can be neglected; and rapid iteration can lead to poor underlying design or scalability if not managed.

**Conclusion.** Prototyping reduces requirements risk and improves user fit through iterative feedback, but must be managed to avoid scope creep, weak documentation and shipping an unfinished prototype; it is best for systems with uncertain or evolving requirements (Laudon and Laudon, 2023).`,
        answerPlan: ['Define prototyping; steps; advantages (user feedback, requirement clarity, speed); disadvantages (scope creep, weak documentation).'],
        markingLogic: ['Method explained: ~8.', 'Advantages: ~6.', 'Disadvantages: ~6.'],
        commonMistakes: ['Only advantages, no disadvantages.'],
        paragraphStructure: 'Define/steps > advantages > disadvantages.',
      },
      {
        id: 'ikm-p6-q6', number: 'Question 6', section: 'B', marks: 20,
        commandWords: ['Demonstrate'],
        prompt: 'Demonstrate how organisations can measure intellectual capital to maximise its value.',
        unitIds: ['ikm-3'], theoryIds: [], recommendedTheories: ['ikm-intellectual-capital'],
        workedSolution:
`**Introduction.** Intellectual capital (IC) is the intangible knowledge-based value of an organisation; measuring it lets managers protect and maximise it (Dalkir, 2022).

**How organisations can measure intellectual capital.** (1) *Classify IC* into human capital (skills, knowledge), structural/organisational capital (processes, systems, IP, culture) and relational/customer capital (relationships, brand, reputation). (2) *Use established frameworks* — the *Skandia Navigator* (financial, customer, process, renewal-and-development and human focus areas), the *Balanced Scorecard*, *Brooking's* technology broker model, or the *Intangible Assets Monitor* — to give structured indicators for each category. (3) *Apply indicators and metrics* — for example employee competence and training, customer retention and satisfaction, innovation and patents, process efficiency, and knowledge-sharing activity. (4) *Use financial proxies* such as market-to-book value or calculated intangible value to estimate IC value. (5) *Monitor and report* IC over time and link it to strategy so it informs investment in people, systems and relationships.

**Conclusion.** Organisations measure IC by classifying it into human, structural and relational capital and applying frameworks such as the Skandia Navigator and balanced scorecard with relevant indicators; doing so makes intangible value visible so it can be developed, protected and maximised (Dalkir, 2022).`,
        answerPlan: ['Use IC measurement frameworks (Skandia Navigator, Brooking) + knowledge audit + linking to strategy to maximise value.'],
        markingLogic: ['Frameworks applied to measurement: ~14.', 'Link to value maximisation: ~6.'],
        commonMistakes: ['Defining IC instead of demonstrating measurement.'],
        paragraphStructure: 'Frameworks > measurement approach > value maximisation.',
      },
    ],
  },

  {
    id: 'ikm-paper-7',
    module: 'ikm',
    title: 'Measuring Knowledge',
    paperRef: 'Section A case (measuring organisational knowledge) + Section B',
    totalMarks: 120,
    saContext: false,
    frequency: 'High',
    sourceStatus: 'Uploaded MANCOSA IKM past paper. Transcribed from scan.',
    caseSummary:
      'An academic extract argues that knowledge is a primary driver of competitive advantage and firm value, yet measuring it, especially experience-based knowledge, is the least developed aspect of knowledge management; measurement enables benchmarking, learning and external reporting.',
    keyFacts: [
      'Knowledge is positioned as the foundation of competitive advantage.',
      'Measurement is the least developed aspect of KM and is hard for tacit knowledge.',
      'Measurement supports benchmarking, learning and stakeholder reporting.',
    ],
    keyProblem: 'How organisations conceptualise, create, convert and measure knowledge as a strategic asset.',
    questions: [
      {
        id: 'ikm-p7-q1', number: 'Question 1', section: 'A', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss in detail the concept of organisational knowledge.',
        unitIds: ['ikm-3'], theoryIds: ['ikm-tacit-explicit', 'ikm-km-cycle'],
        workedSolution:
`**Introduction.** Organisational knowledge is the collective knowledge an organisation creates, holds and uses to operate and compete; it is more than the sum of individual knowledge (Dalkir, 2022; Hislop, Bosua and Helms, 2023).

**The concept in detail.** Organisational knowledge has several dimensions. It is *tacit* (experience-based, hard to codify, held in people's judgement) and *explicit* (documented, codified, easy to store and share). It exists at *individual, group and organisational* levels, becoming organisational when it is embedded in shared routines, processes, systems and culture so it survives the departure of any individual. It is created and transformed through social interaction — Nonaka and Takeuchi's SECI model describes socialisation, externalisation, combination and internalisation as the conversions between tacit and explicit knowledge. Organisational knowledge is a strategic asset: it underpins capability, innovation and competitive advantage, and is the focus of knowledge management, which seeks to create, capture, share, apply and retain it.

**Significance.** Because much valuable knowledge is tacit and held in people, organisations must convert and embed it into shared, explicit forms to avoid loss and enable reuse.

**Conclusion.** Organisational knowledge spans tacit and explicit forms across individual, group and organisational levels, is created through social conversion, and constitutes a strategic asset; managing it well turns personal know-how into durable, shared organisational capability (Dalkir, 2022).`,
        answerPlan: [
          'Define knowledge vs data/information (DIKW).',
          'Tacit vs explicit; individual vs organisational knowledge.',
          'Why organisational knowledge is strategic (competitive advantage, hard to imitate).',
        ],
        markingLogic: ['Knowledge defined/distinguished: ~6.', 'Tacit/explicit + organisational: ~10.', 'Strategic significance: ~4.'],
        commonMistakes: ['Treating knowledge and information as synonyms.'],
        paragraphStructure: 'Define > tacit/explicit/organisational > strategic significance.',
      },
      {
        id: 'ikm-p7-q2', number: 'Question 2', section: 'A', marks: 20,
        commandWords: ['Explain'],
        prompt: 'Explain how the SECI model describes conversions from tacit to explicit knowledge.',
        unitIds: ['ikm-3'], theoryIds: ['ikm-tacit-explicit'], recommendedTheories: ['ikm-tacit-explicit'],
        workedSolution:
`**Introduction.** The SECI model explains how organisational knowledge is created through continuous conversion between tacit (experiential, hard to codify) and explicit (documented) knowledge (Dalkir, 2022).

**The four conversions.** (1) *Socialisation* (tacit to tacit): individuals share tacit knowledge directly through shared experience, observation and apprenticeship, as when a junior nurse learns technique by working alongside a senior. (2) *Externalisation* (tacit to explicit): tacit knowledge is articulated into explicit form such as procedures, models or metaphors, which is the hardest and most valuable conversion. (3) *Combination* (explicit to explicit): discrete pieces of explicit knowledge are combined and systematised into new explicit knowledge, for example merging reports into a protocol. (4) *Internalisation* (explicit to tacit): explicit knowledge is absorbed through practice until it becomes intuitive "know-how", completing the cycle (Dalkir, 2022; Hislop, Bosua and Helms, 2023).

**The spiral.** These conversions form a continuous spiral that moves knowledge from the individual to the group to the whole organisation, enabled by a shared context (often called "ba") (Dalkir, 2022).

**Conclusion.** SECI matters because the central KM challenge, named in the case, is converting valuable but hidden tacit knowledge into shareable explicit knowledge (externalisation) and then back into embedded capability (internalisation), so that expertise outlives the individual who holds it (Dalkir, 2022).`,
        answerPlan: [
          'Define tacit and explicit knowledge.',
          'Four conversions: Socialisation, Externalisation, Combination, Internalisation, each with an example.',
          'The knowledge spiral (individual to organisation).',
          'Conclude on why externalisation/internalisation matter most.',
        ],
        markingLogic: ['Tacit/explicit defined: ~3.', 'Four conversions explained with examples: ~12.', 'Spiral: ~3.', 'Conclusion: ~2.'],
        commonMistakes: ['Naming SECI stages without examples.', 'Getting the direction of a conversion wrong.'],
        paragraphStructure: 'Define tacit/explicit > four conversions + examples > spiral > conclusion.',
      },
      {
        id: 'ikm-p7-q3', number: 'Question 3', section: 'B', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss the strategic objectives you would consider when investing in IKM to achieve organisational goals.',
        unitIds: ['ikm-1', 'ikm-6'], theoryIds: [], recommendedTheories: ['ikm-is-strategy'],
        workedSolution:
`**Introduction.** Investing in information and knowledge management (IKM) must serve clear strategic objectives so spending creates organisational value (Laudon and Laudon, 2023). (Closely related to Paper 11 Q5 and Paper 13 Q3 on strategic business objectives of IS.)

**Strategic objectives to consider.** Laudon and Laudon identify the strategic business objectives that IKM investment should target: (1) *Operational excellence* — use information and knowledge to improve efficiency and productivity. (2) *New products, services and business models* — enable innovation and new ways of creating value. (3) *Customer and supplier intimacy* — use knowledge of customers and suppliers to serve and partner better, building loyalty. (4) *Improved decision-making* — give managers accurate, timely information and shared knowledge for better decisions. (5) *Competitive advantage* — leverage information, knowledge and analytics to outperform rivals. (6) *Survival* — meet industry, regulatory and competitive necessities. Additional KM-specific objectives include *retaining critical knowledge*, *enabling learning and collaboration*, and *improving knowledge reuse*.

**Application.** The organisation should align IKM investment to whichever objectives most advance its strategy, and measure results against them.

**Conclusion.** IKM investment should be justified by strategic objectives — operational excellence, innovation, customer/supplier intimacy, better decisions, competitive advantage, survival and knowledge retention — so that information and knowledge directly support organisational goals (Laudon and Laudon, 2023).`,
        answerPlan: ['Apply the six strategic business objectives of IS to IKM investment (see Paper 3 Q2 worked solution).'],
        markingLogic: ['Six objectives applied to IKM: ~18.', 'Goal alignment: ~2.'],
        commonMistakes: ['Listing IS types instead of strategic objectives.'],
        paragraphStructure: 'Six objectives applied to IKM investment.',
      },
      {
        id: 'ikm-p7-q4', number: 'Question 4', section: 'B', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss the impact of the Internet on competitive forces and industry structure. (Repeat of Paper 5 Q3.)',
        unitIds: ['ikm-2'], theoryIds: [], recommendedTheories: ['ikm-is-strategy'],
        workedSolution:
`**Introduction.** The internet has transformed Porter's five competitive forces and overall industry structure (Laudon and Laudon, 2023). (This is the same topic as Paper 5 Q3 and Paper 6 Q4; the full analysis is given there.)

**Summary of the impact.** The internet *increases competitive rivalry* through wider markets and price transparency; *lowers entry barriers*, raising the threat of new digital entrants; *creates new substitutes* via digital products and platforms; *strengthens buyer power* through easy comparison and switching; and has a *mixed effect on supplier power* (wider sourcing reduces it, but platform owners can gain it). The net effect is generally lower barriers, greater transparency and downward pressure on average industry profitability.

**Strategic response.** Firms counter this by using digital capability to *differentiate*, build *network effects* and data advantages, and create *switching costs*, turning the same technology that pressures profits into a source of advantage.

**Conclusion.** The internet intensifies most of Porter's forces and erodes structural profitability, so competitive advantage shifts to firms that exploit digital scale, data and differentiation; the detailed force-by-force analysis appears in the Paper 5 Q3 worked solution (Laudon and Laudon, 2023).`,
        answerPlan: ['See Paper 5 Question 3.'],
        markingLogic: ['As Paper 5 Q3.'], commonMistakes: ['As Paper 5 Q3.'],
        paragraphStructure: 'Five forces > Internet impact per force > net effect.',
      },
      {
        id: 'ikm-p7-q5', number: 'Question 5 (5.1, 5.2)', section: 'B', marks: 20,
        commandWords: ['Discuss', 'Explain'],
        prompt: '5.1 Skandia Navigator (10). 5.2 Three stages of knowledge-asset evaluation (10). (As Paper 6 Q3.)',
        unitIds: ['ikm-3'], theoryIds: [], recommendedTheories: ['ikm-intellectual-capital'],
        workedSolution:
`**Introduction.** The Skandia Navigator is a framework for measuring intellectual capital, complemented by a staged approach to evaluating knowledge assets (Dalkir, 2022).

**5.1 The Skandia Navigator.** Developed at Skandia, the Navigator measures organisational value beyond financial figures across five focus areas: (1) *Financial focus* — the past, traditional financial results. (2) *Customer focus* — relationships, satisfaction and loyalty. (3) *Process focus* — the efficiency and effectiveness of internal processes and technology. (4) *Renewal and development focus* — innovation, learning and preparation for the future. (5) *Human focus* — at the centre, the competence, knowledge and motivation of employees that drive the other four. It treats human capital as the heart of value creation and links intangible assets to strategy.

**5.2 Three stages of knowledge-asset evaluation.** (1) *Identification* — inventory knowledge assets and link them to key processes and strategy. (2) *Measurement* — assess each asset's value, relevance and contribution using suitable indicators. (3) *Monitoring and leveraging* — track, protect and deploy the assets over time, feeding back into strategy.

**Conclusion.** The Skandia Navigator measures intellectual capital across financial, customer, process, renewal and human foci with people at the core, while the three-stage process identifies, measures and monitors knowledge assets so intangible value is made visible and managed (Dalkir, 2022).`,
        answerPlan: ['See Paper 6 Question 3.'],
        markingLogic: ['As Paper 6 Q3.'], commonMistakes: ['As Paper 6 Q3.'],
        paragraphStructure: 'Skandia five focus areas > three evaluation stages.',
      },
      {
        id: 'ikm-p7-q6', number: 'Question 6', section: 'B', marks: 20,
        commandWords: ['Explain'],
        prompt: 'Explain in detail the disciplines of a learning organisation. (As Paper 5 Q1.)',
        unitIds: ['ikm-3'], theoryIds: ['ikm-learning-org'],
        workedSolution:
`**Introduction.** Peter Senge's learning organisation masters five disciplines that enable it to learn and adapt continuously (Dalkir, 2022). (This topic also appears as Paper 5 Q1 and Paper 13 Q1.)

**The five disciplines.** (1) *Personal mastery* — individuals continually clarify and deepen their personal vision and competence, committing to lifelong learning. (2) *Mental models* — surfacing and challenging the deep-seated assumptions and generalisations that shape how people see and act, so they can be tested and improved. (3) *Building shared vision* — developing a genuine, collective picture of the future that people commit to rather than merely comply with. (4) *Team learning* — the capacity of teams to think and learn together through dialogue, so collective intelligence exceeds individual intelligence. (5) *Systems thinking* — the fifth, integrating discipline that sees the organisation as interconnected wholes and patterns rather than isolated parts, so people understand how actions interact over time.

**Why they matter.** Together they let an organisation continuously create, share and apply knowledge, adapt to change and avoid repeating mistakes.

**Conclusion.** Senge's five disciplines — personal mastery, mental models, shared vision, team learning and the binding discipline of systems thinking — define how an organisation learns continuously, turning it into a learning organisation that adapts and innovates (Dalkir, 2022; MANCOSA IKM Module Guide, 2026).`,
        answerPlan: ['See Paper 5 Question 1.'],
        markingLogic: ['As Paper 5 Q1.'], commonMistakes: ['As Paper 5 Q1.'],
        paragraphStructure: 'Define > five disciplines > apply > conclude.',
      },
    ],
  },

  {
    id: 'ikm-paper-8',
    module: 'ikm',
    title: 'Dole South Africa: ERP and Systems Development',
    paperRef: 'Single case (Dole SA / ViaData / Waterfall ERP)',
    totalMarks: 100,
    saContext: true,
    frequency: 'High',
    sourceStatus: 'Uploaded MANCOSA IKM past paper. Transcribed from scan.',
    caseSummary:
      "Dole South Africa, a major fruit exporter, replaced fragmented manual planning (Excel and Access) with a custom ERP-style planning system delivered by local partner ViaData using the Waterfall model, going live on time and on budget for the 2009 deciduous season.",
    keyFacts: [
      'Dole SA is South Africa\'s second-largest fruit exporter (SA context).',
      'Manual Excel/Access systems were inflexible and could not integrate.',
      'A planning system ("Dolfin") was built with the Waterfall SDLC by a local partner.',
    ],
    keyProblem: 'Replacing fragmented, inflexible information systems with an integrated enterprise system delivered through a structured development method.',
    questions: [
      {
        id: 'ikm-p8-q1', number: 'Question 1', section: 'A', marks: 20,
        commandWords: ['Analyse'],
        prompt: 'Analyse the potential benefits of an enterprise system (ERP) instead of the manual systems used by Dole SA.',
        unitIds: ['ikm-5'], theoryIds: [], recommendedTheories: ['ikm-enterprise-systems'],
        workedSolution:
`**Introduction.** An enterprise resource planning (ERP) system integrates an organisation's core processes into one shared system; for Dole SA, replacing manual systems would yield substantial benefits (Laudon and Laudon, 2023).

**Potential benefits of an ERP over manual systems.** (1) *Integration and a single source of truth* — finance, procurement, inventory, production and sales share one database, removing duplication and conflicting records. (2) *Improved efficiency and productivity* — automating manual, paper-based tasks cuts errors, rework and processing time. (3) *Real-time information* — managers see up-to-date data for faster, better decisions, instead of delayed manual reports. (4) *Better inventory and supply-chain management* — accurate stock and demand data reduce stockouts and excess, important for a perishable-goods business like Dole. (5) *Standardised processes and control* — consistent procedures and stronger internal controls and audit trails. (6) *Scalability and reporting* — easier growth and compliance reporting. (7) *Improved customer service* — faster, more reliable order fulfilment.

**Caution.** ERP brings high cost, complexity and change-management demands that must be managed.

**Conclusion.** Replacing Dole SA's manual systems with ERP would integrate processes, give real-time accurate data, improve efficiency, inventory control and decision-making, and strengthen control and service — provided implementation and change are well managed (Laudon and Laudon, 2023).`,
        answerPlan: [
          'Define ERP/enterprise system (single integrated database across functions).',
          'Benefits vs Excel/Access: integration, single source of truth, real-time visibility, standardised processes, scalability, fewer errors.',
          'Apply to Dole\'s seasonal, export-driven operations.',
        ],
        markingLogic: ['ERP defined: ~3.', 'Benefits analysed (min. five): ~13.', 'Applied to Dole: ~4.'],
        commonMistakes: ['Listing benefits without Dole-specific application.'],
        paragraphStructure: 'Define ERP > benefits vs manual > apply to Dole.',
      },
      {
        id: 'ikm-p8-q2', number: 'Question 2', section: 'A', marks: 20,
        commandWords: ['Elaborate'],
        prompt: 'Elaborate on how the SDLC was implemented using the Waterfall model in this case.',
        unitIds: ['ikm-5'], theoryIds: [], recommendedTheories: ['ikm-systems-development'],
        workedSolution:
`**Introduction.** The systems development life cycle (SDLC) provides a structured approach to building systems; the Waterfall model runs its phases sequentially (Laudon and Laudon, 2023).

**SDLC via the Waterfall model in the case.** The Waterfall model completes each phase before the next begins, with sign-off between stages: (1) *Requirements/systems analysis* — investigate the existing manual processes and define what the new system must do. (2) *System design* — specify the architecture, data, processes and interfaces to meet the requirements. (3) *Implementation/coding* — build or configure the system to the design. (4) *Testing* — verify the system against requirements (unit, system, user-acceptance testing) and fix defects. (5) *Deployment/conversion* — install the system and migrate from the manual process to live operation. (6) *Maintenance* — support, correct and enhance the system in use.

**Why Waterfall fits.** It suits projects with clear, stable, well-understood requirements and a need for documentation and control, as in a structured organisational roll-out; its limitation is inflexibility if requirements change late.

**Conclusion.** The case implemented the SDLC as a sequential Waterfall flow — analysis, design, coding, testing, deployment and maintenance — giving a disciplined, well-documented build suited to stable requirements, at the cost of limited flexibility to late change (Laudon and Laudon, 2023).`,
        answerPlan: [
          'Define the SDLC and the sequential Waterfall model.',
          'Phases applied to Dole: requirements/data assessment, design (data model), build (Catalyst engine), testing, implementation (go-live), maintenance/support.',
          'Note why a fixed-scope, fixed-date project suited Waterfall.',
        ],
        markingLogic: ['SDLC/Waterfall defined: ~4.', 'Phases mapped to the case: ~14.', 'Suitability comment: ~2.'],
        commonMistakes: ['Generic SDLC with no case mapping.'],
        paragraphStructure: 'Define SDLC/Waterfall > phases mapped to Dole > suitability.',
      },
      {
        id: 'ikm-p8-q3', number: 'Question 3', section: 'B', marks: 20,
        commandWords: ['Examine'],
        prompt: 'Examine how leadership can contribute to becoming a learning organisation based on the five disciplines.',
        unitIds: ['ikm-3'], theoryIds: ['ikm-learning-org'],
        workedSolution:
`**Introduction.** Leadership is decisive in building a learning organisation; Senge's five disciplines define what leaders must cultivate (Dalkir, 2022).

**How leadership contributes through the five disciplines.** (1) *Personal mastery* — leaders model continuous learning, support staff development and create time and resources for growth. (2) *Mental models* — leaders surface and challenge limiting assumptions, encourage open inquiry and accept being questioned, building psychological safety. (3) *Shared vision* — leaders articulate and co-create a compelling vision that people commit to, aligning learning with purpose. (4) *Team learning* — leaders foster dialogue, collaboration and cross-functional teams so groups learn together, treating mistakes as learning rather than blame. (5) *Systems thinking* — leaders help people see the organisation as an interconnected whole and make decisions that consider long-term, system-wide effects.

**Leadership behaviours.** Senge describes leaders as designers, stewards and teachers: they design enabling structures, steward the shared purpose, and teach people to see and learn. By rewarding sharing, removing barriers and embedding learning in routines, leaders turn the five disciplines into everyday practice.

**Conclusion.** Leadership creates a learning organisation by personally modelling and actively enabling each of Senge's five disciplines — mastery, mental models, shared vision, team learning and systems thinking — and by acting as designer, steward and teacher who makes learning a shared, safe and rewarded behaviour (Dalkir, 2022).`,
        answerPlan: ['Link each of the five disciplines to a leadership behaviour (e.g. shared vision = leaders articulate vision; systems thinking = leaders model root-cause analysis).'],
        markingLogic: ['Five disciplines linked to leadership: ~18.', 'Integration: ~2.'],
        commonMistakes: ['Explaining the disciplines without the leadership angle.'],
        paragraphStructure: 'Each discipline > corresponding leadership contribution.',
      },
      {
        id: 'ikm-p8-q4', number: 'Question 4', section: 'B', marks: 20,
        commandWords: ['Examine'],
        prompt: 'Examine the interaction between management, organisation and technology in a knowledge management system.',
        unitIds: ['ikm-1', 'ikm-5'], theoryIds: ['ikm-km-cycle'], recommendedTheories: ['ikm-is-strategy'],
        workedSolution:
`**Introduction.** A knowledge management system works only when management, organisation and technology interact effectively; these are the three dimensions of any information system (Laudon and Laudon, 2023).

**The interaction.** (1) *Management* sets strategy and culture: leaders decide why KM matters, fund it, model knowledge-sharing, and use the knowledge produced to make decisions. Without management commitment, the other dimensions underdeliver. (2) *Organisation* provides the structure, processes, roles and culture: workflows route knowledge to the right people, communities of practice and incentives encourage sharing, and a collaborative culture determines whether tacit knowledge flows. (3) *Technology* provides the tools: repositories, search, collaboration platforms, analytics and networks that capture, store and distribute knowledge.

**Why interaction matters.** The dimensions are interdependent. Excellent technology fails without a sharing culture (organisation) and leadership commitment (management); strong culture is hampered without enabling tools; and management direction is empty without the processes and technology to execute it. KM success is therefore a socio-technical balance, not a technology purchase.

**Conclusion.** In a KMS, management supplies strategy and sponsorship, organisation supplies enabling processes and culture, and technology supplies the tools; the system delivers value only when all three reinforce one another, confirming that KM is a socio-technical, not merely technical, undertaking (Laudon and Laudon, 2023; Dalkir, 2022).`,
        answerPlan: ['Use the management-organisation-technology framework applied to a KMS; show interdependence (see Paper 1 Q6).'],
        markingLogic: ['Three dimensions in a KMS context: ~14.', 'Interaction/interdependence examined: ~6.'],
        commonMistakes: ['Treating the three as separate, not interacting.'],
        paragraphStructure: 'Three dimensions in a KMS > how they interact.',
      },
      {
        id: 'ikm-p8-q5', number: 'Question 5', section: 'B', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss the activities and risks within IT that need to be managed (COBIT context).',
        unitIds: ['ikm-4'], theoryIds: ['ikm-info-governance'], recommendedTheories: ['ikm-it-governance'],
        workedSolution:
`**Introduction.** IT activities carry risks that must be governed; frameworks such as COBIT provide structured control over IT to ensure value and manage risk (Laudon and Laudon, 2023).

**IT activities and risks to be managed.** Key activities include systems development, data management, security, operations and service delivery, and third-party/cloud management. The associated risks are: (1) *Security risk* — cyber-attacks, data breaches, malware and unauthorised access. (2) *Data risk* — loss, corruption, poor quality and privacy breaches. (3) *Availability/continuity risk* — system downtime and inadequate disaster recovery. (4) *Compliance and legal risk* — failing data-protection and regulatory requirements. (5) *Project and development risk* — failed, over-budget or late IT projects. (6) *Operational and human risk* — errors, fraud and weak access control. (7) *Strategic/value risk* — IT not aligned to business objectives, wasting investment.

**Governance with COBIT.** COBIT helps align IT with business goals, define control objectives, assign accountability, manage risk and measure performance, so these activities are controlled rather than left to chance.

**Conclusion.** The IT activities of development, data, security, operations and outsourcing each carry security, data, continuity, compliance, project and value risks; a governance framework such as COBIT manages them by aligning IT to strategy, assigning accountability and embedding controls and monitoring (Laudon and Laudon, 2023).`,
        answerPlan: [
          'Define IT governance and COBIT\'s purpose (align IT control with business goals).',
          'IT activities/risks: security, data integrity, availability, compliance, project/change risk, resource allocation.',
          'Controls to manage each.',
        ],
        markingLogic: ['IT governance/COBIT framed: ~4.', 'Activities and risks: ~12.', 'Controls: ~4.'],
        commonMistakes: ['Describing COBIT history instead of activities/risks.'],
        paragraphStructure: 'IT governance/COBIT > activities and risks > controls.',
      },
    ],
  },

  {
    id: 'ikm-paper-9',
    module: 'ikm',
    title: "Do You Understand Your Company's Knowledge Assets?",
    paperRef: 'Section A case (knowledge maps / strategic knowledge assets) + Section B',
    totalMarks: 120,
    saContext: false,
    frequency: 'High',
    sourceStatus: 'Uploaded MANCOSA IKM past paper. Transcribed from scan.',
    caseSummary:
      'A World Economic Forum article argues that knowledge assets, mapped along two dimensions (structure: tacit to explicit; diffusion: held by few to many), are the true drivers of competitive advantage, and that strategic knowledge maps help firms decide what to share, protect or source externally.',
    keyFacts: [
      'Knowledge assets can be structured/codified or tacit.',
      'Knowledge maps use two dimensions: structure and diffusion.',
      'Strategic knowledge assets drive competitive advantage and open-innovation decisions.',
    ],
    keyProblem: 'Identifying, mapping and strategically deploying knowledge assets, including the tacit-to-explicit conversion problem.',
    questions: [
      {
        id: 'ikm-p9-q1', number: 'Question 1', section: 'A', marks: 20,
        commandWords: ['Appraise'],
        prompt: 'Appraise any two intellectual-capital frameworks and how they measure knowledge assets.',
        unitIds: ['ikm-3'], theoryIds: [], recommendedTheories: ['ikm-intellectual-capital'],
        workedSolution:
`**Introduction.** Intellectual-capital (IC) frameworks structure how organisations identify and measure their knowledge assets; appraising two shows their strengths and limits (Dalkir, 2022).

**Framework 1: Skandia Navigator.** It measures value across five foci — financial, customer, process, renewal-and-development and human (at the centre) — treating people as the core driver of intangible value. *Strengths:* links intangible assets to strategy, balances financial and non-financial measures, and emphasises future renewal. *Limitations:* indicators can be subjective and hard to standardise or compare across firms.

**Framework 2: Brooking's Technology Broker model.** It classifies IC into four asset types — market assets (brands, customers), human-centred assets (skills, expertise), intellectual-property assets (patents, trademarks) and infrastructure assets (processes, technology, culture). *Strengths:* a clear, comprehensive taxonomy that helps audit and protect specific assets, including legally protected IP. *Limitations:* it classifies more than it quantifies, so monetary valuation remains difficult.

**Comparison.** The Skandia Navigator is performance- and strategy-oriented with people at the centre, while Brooking's model is a classification-and-audit tool; together they show that IC measurement balances structured categorisation with strategic, forward-looking indicators.

**Conclusion.** The Skandia Navigator and Brooking's model both make intangible knowledge assets visible and manageable; appraised together, they reveal that effective IC measurement combines clear asset classification with strategy-linked, non-financial indicators despite enduring valuation difficulty (Dalkir, 2022).`,
        answerPlan: [
          'Choose two frameworks (Skandia Navigator and Brooking).',
          'Appraise each: what it measures, strengths, limitations.',
          'Comparative judgement on usefulness.',
        ],
        markingLogic: ['Two frameworks correctly described: ~8.', 'Appraisal (strengths + limits): ~8.', 'Comparative judgement: ~4.'],
        commonMistakes: ['Describing frameworks without appraising (the command word).'],
        paragraphStructure: 'Framework 1 (describe + appraise) > Framework 2 > comparative judgement.',
      },
      {
        id: 'ikm-p9-q2', number: 'Question 2', section: 'A', marks: 20,
        commandWords: ['Analyse'],
        prompt: 'Analyse how the SECI model is used to codify, internalise and diffuse knowledge. (SECI variant.)',
        unitIds: ['ikm-3'], theoryIds: ['ikm-tacit-explicit'], recommendedTheories: ['ikm-tacit-explicit'],
        workedSolution:
`**Introduction.** Nonaka and Takeuchi's SECI model explains how knowledge is created and converted between tacit and explicit forms through a continuous spiral (Dalkir, 2022).

**The SECI conversions (codify, internalise, diffuse).** (1) *Socialisation (tacit to tacit)* — knowledge is shared directly through observation, imitation, mentoring and shared experience; this *diffuses* tacit knowledge between people. (2) *Externalisation (tacit to explicit)* — tacit knowledge is articulated into explicit form through dialogue, metaphors, models and documentation; this *codifies* knowledge so it can be stored and shared widely. (3) *Combination (explicit to explicit)* — existing explicit knowledge is collected, sorted and recombined into new systematic knowledge (reports, databases, manuals); this *diffuses* codified knowledge across the organisation. (4) *Internalisation (explicit to tacit)* — individuals absorb explicit knowledge through practice and 'learning by doing' until it becomes tacit know-how; this is how people *internalise* organisational knowledge.

**The spiral.** These four modes form a continuous, rising spiral that moves knowledge between individual, group and organisational levels, expanding the knowledge base over time.

**Conclusion.** SECI shows knowledge being codified (externalisation), diffused (socialisation and combination) and internalised (internalisation) in an ongoing spiral; managing all four conversions lets an organisation create, share and embed knowledge rather than letting it stay locked in individuals (Dalkir, 2022).`,
        answerPlan: ['See Paper 7 Q2 worked solution; emphasise externalisation = codify, internalisation, combination = diffuse.'],
        markingLogic: ['Four conversions analysed against codify/internalise/diffuse: ~18.', 'Coherence: ~2.'],
        commonMistakes: ['Not mapping the conversions to codify/internalise/diffuse as asked.'],
        paragraphStructure: 'Four conversions mapped to codify/internalise/diffuse.',
      },
      {
        id: 'ikm-p9-q3', number: 'Question 3', section: 'B', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss how information systems impact on organisations and business firms.',
        unitIds: ['ikm-1', 'ikm-2'], theoryIds: ['ikm-dikw'],
        workedSolution:
`**Introduction.** Information systems (IS) reshape both organisations and individual firms, with economic, organisational and behavioural effects (Laudon and Laudon, 2023).

**Impact on organisations and business firms.** (1) *Flatter structures* — IS reduce the need for layers of middle management by distributing information widely, enabling flatter, more decentralised organisations. (2) *Changed processes and efficiency* — IS automate and re-engineer processes, lowering transaction and coordination costs and improving productivity. (3) *Better decision-making* — timely, accurate information supports faster, evidence-based decisions at all management levels. (4) *New business models and competitiveness* — IS enable e-commerce, platforms and data-driven services, changing how firms compete. (5) *Changed boundaries and relationships* — IS link firms with customers and suppliers, enabling closer collaboration and reshaping the value chain. (6) *Workforce and culture change* — new skills, roles and ways of working, with resistance to manage. *Economic theories* (transaction-cost and agency theory) explain why IS let firms shrink internal costs and coordinate more cheaply.

**Conclusion.** Information systems flatten and reshape organisations, cut coordination costs, improve decisions, enable new business models and redraw firm boundaries; their impact is organisational and behavioural as much as technical, so firms must manage process and culture change to realise the benefits (Laudon and Laudon, 2023).`,
        answerPlan: ['IS impacts: economic (cost/transaction), organisational/behavioural (structure, flatter hierarchies, culture), competitive, and on decision-making.'],
        markingLogic: ['Multiple impact dimensions discussed: ~18.', 'Balance: ~2.'],
        commonMistakes: ['Only positive impacts; ignoring organisational/behavioural change.'],
        paragraphStructure: 'Economic > organisational/behavioural > competitive > decision impacts.',
      },
      {
        id: 'ikm-p9-q4', number: 'Question 4', section: 'B', marks: 20,
        commandWords: ['Recommend'],
        prompt: 'Recommend systems an organisation may use to improve customer and supplier intimacy.',
        unitIds: ['ikm-5'], theoryIds: [], recommendedTheories: ['ikm-enterprise-systems'],
        workedSolution:
`**Introduction.** Customer and supplier intimacy — serving customers and partnering with suppliers exceptionally well — is a strategic objective enabled by specific information systems (Laudon and Laudon, 2023).

**Systems to improve customer and supplier intimacy.** (1) *Customer Relationship Management (CRM)* — captures and integrates all customer interactions and data so the firm understands, segments and serves customers individually, improving satisfaction, retention and cross-selling. (2) *Supply Chain Management (SCM)* systems — coordinate planning, sourcing, production and delivery with suppliers, sharing demand and inventory data to reduce cost, lead time and stockouts and build closer supplier partnerships. (3) *Enterprise systems (ERP)* — integrate internal processes so customer and supplier-facing functions work from one accurate data set. (4) *Knowledge and collaboration systems* — share customer and supplier knowledge across the firm. (5) *Analytics/BI and e-commerce platforms* — personalise offers and enable self-service and real-time interaction.

**Recommendation.** A firm should deploy CRM to deepen customer intimacy and SCM to deepen supplier intimacy, supported by integrated ERP and analytics so both rest on shared, accurate information.

**Conclusion.** CRM builds customer intimacy and SCM builds supplier intimacy, underpinned by ERP, collaboration and analytics; together these systems let a firm know and serve customers and partner with suppliers better than rivals (Laudon and Laudon, 2023).`,
        answerPlan: ['Recommend CRM (customer intimacy) and SCM (supplier intimacy); explain how each builds intimacy and a measurable benefit.'],
        markingLogic: ['CRM recommended + justified: ~9.', 'SCM recommended + justified: ~9.', 'Benefits: ~2.'],
        commonMistakes: ['Naming systems without explaining how they build intimacy.'],
        paragraphStructure: 'CRM (recommend + justify) > SCM (recommend + justify) > benefits.',
      },
      {
        id: 'ikm-p9-q5', number: 'Question 5', section: 'B', marks: 20,
        commandWords: ['Examine'],
        prompt: 'Examine the potential impact of Artificial Intelligence on the organisation as a whole.',
        unitIds: ['ikm-1', 'ikm-7'], theoryIds: ['ikm-ethics-ai'],
        workedSolution:
`**Introduction.** Artificial intelligence (AI) affects the whole organisation — its operations, people, decisions and strategy — with both opportunities and risks (Laudon and Laudon, 2023).

**Potential impact of AI on the organisation as a whole.** (1) *Operations and productivity* — AI automates routine and analytical tasks, raising efficiency and lowering cost. (2) *Decision-making* — machine learning and analytics surface patterns and predictions that improve decisions, while raising questions of accountability and bias. (3) *Products, services and business models* — AI enables new offerings (personalisation, intelligent products) and competitive advantage. (4) *Knowledge management* — AI accelerates knowledge capture, search and reuse, but can generate inaccurate content if ungoverned. (5) *Workforce and skills* — jobs are redesigned: some tasks are displaced, new roles emerge, and reskilling is needed, creating change-management and ethical-employment challenges. (6) *Risks and ethics* — data privacy, bias, transparency, security and governance must be managed. (7) *Strategy and structure* — AI can reshape how the firm competes and is organised.

**Balance.** AI's benefits depend on data quality, governance, ethics and how well the organisation manages the human transition.

**Conclusion.** AI can transform organisational efficiency, decisions, offerings and knowledge work, but it also disrupts jobs and raises ethical and governance risks; whole-organisation benefit requires aligning AI to strategy while managing data, ethics and workforce change (Laudon and Laudon, 2023).`,
        answerPlan: ['AI impacts: productivity/automation, decision support, new products, jobs/skills, ethics/bias, governance; balanced examination.'],
        markingLogic: ['Multiple impacts examined (pos + neg): ~18.', 'Governance/ethics included: ~2.'],
        commonMistakes: ['One-sided AI hype with no risks.'],
        paragraphStructure: 'Productivity > decisions > jobs/skills > ethics/governance.',
      },
      {
        id: 'ikm-p9-q6', number: 'Question 6', section: 'B', marks: 20,
        commandWords: ['Examine'],
        prompt: 'Examine problem-solving strategies for dealing with organisational change.',
        unitIds: ['ikm-6', 'ikm-9'], theoryIds: [], recommendedTheories: ['ikm-change-management'],
        answerPlan: ['Change-management strategies: communication, participation, training, leadership sponsorship, managing resistance, phased rollout.'],
        workedSolution:
`**Introduction.** Organisational change is consistently associated with resistance, disruption and failure when managed poorly. Effective problem-solving strategies address both the rational (process) and human (behavioural) dimensions of change (MANCOSA IKM Module Guide, 2026).

**Communication.** Timely, transparent and two-way communication addresses the uncertainty that fuels resistance. Employees who understand why change is happening, what it means for them and how progress is being made are better equipped to accept and support it. Withholding information amplifies rumour and opposition (Laudon and Laudon, 2023).

**Participation and involvement.** Including affected employees in designing the change reduces resistance because people support what they help to create. Participation also surfaces practical knowledge about current processes that planners may lack, improving the quality of the change design (Hislop, Bosua and Helms, 2023).

**Training and capability building.** Change fails when employees lack the skills to operate in the new way. Structured training — before, during and after the change — builds confidence and competence, turning anxiety into capability (MANCOSA IKM Module Guide, 2026).

**Leadership sponsorship.** Visible, sustained commitment from senior leaders signals that the change is real and irreversible. Without leadership sponsorship, middle managers feel unsafe championing the change and employees wait for it to pass. Leaders must model the new behaviours, not just mandate them (Hislop, Bosua and Helms, 2023).

**Managing resistance directly.** Resistance should be diagnosed rather than suppressed: some resistance is legitimate feedback on a flawed change design; some is emotional; some is self-interested. Strategies include negotiation, individual coaching, role reassignment and, as a last resort, the use of authority (MANCOSA IKM Module Guide, 2026).

**Phased rollout.** Implementing change in manageable phases — piloting in one unit, learning, then scaling — limits exposure to failure, allows adaptation and provides early wins that build momentum for subsequent phases (Laudon and Laudon, 2023).

**Conclusion.** No single strategy overcomes resistance: effective change management combines communication, participation, capability development and leadership in a sequence matched to the scale and type of change. The socio-technical dimension — attending to people, not only process — is the most reliable predictor of success (MANCOSA IKM Module Guide, 2026).`,
        markingLogic: ['Strategies examined (min. five): ~18.', 'Application: ~2.'],
        commonMistakes: ['Listing without examining effectiveness.'],
        paragraphStructure: 'Five change strategies, each: strategy > how it overcomes resistance.',
      },
    ],
  },

  {
    id: 'ikm-paper-10',
    module: 'ikm',
    title: 'The Secret Code of Tacit Knowledge (Knowledge Hoarding)',
    paperRef: 'Section A case (tacit knowledge / hoarding) + Section B',
    totalMarks: 120,
    saContext: false,
    frequency: 'High',
    sourceStatus: 'Uploaded MANCOSA IKM past paper. Transcribed from scan.',
    caseSummary:
      'A case explains why employees hoard knowledge (territoriality, status, job security, lack of encouragement) and the resulting risks (lost productivity, knowledge loss), arguing that sharing tacit knowledge openly improves performance, relationships and innovation.',
    keyFacts: [
      'Tacit knowledge is intuitive and hard to articulate or transfer.',
      'Employees hoard knowledge for territorial, status and security reasons.',
      'Sharing tacit knowledge boosts productivity, performance and innovation.',
    ],
    keyProblem: 'Converting hard-to-capture tacit knowledge into shareable organisational knowledge, and overcoming hoarding.',
    questions: [
      {
        id: 'ikm-p10-q1', number: 'Question 1', section: 'A', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss how organisations can create knowledge and translate knowledge in people\'s heads into processes and tools the whole workforce can use.',
        unitIds: ['ikm-3'], theoryIds: ['ikm-tacit-explicit'], recommendedTheories: ['ikm-tacit-explicit'],
        workedSolution:
`**Introduction.** A central knowledge-management challenge is converting tacit knowledge in people's heads into explicit processes and tools the whole workforce can use (Dalkir, 2022).

**How organisations create and translate knowledge.** Nonaka and Takeuchi's SECI spiral describes the route: (1) *Socialisation* — share tacit knowledge directly through mentoring, observation and shared work. (2) *Externalisation* — articulate tacit knowledge into explicit form (documents, models, standards), the crucial step that captures know-how before it leaves with people. (3) *Combination* — organise and combine explicit knowledge into systematic resources such as databases, manuals and procedures the whole workforce can access. (4) *Internalisation* — staff absorb these explicit resources through practice until they become personal know-how. Practical enablers include communities of practice, knowledge repositories and search, mentoring and storytelling, lessons-learned and after-action reviews, documented standard operating procedures, and a culture and incentives that reward sharing.

**Key point.** The decisive move is externalisation — turning individual tacit expertise into shared explicit assets — supported by combination so the knowledge becomes organisation-wide tools and processes.

**Conclusion.** Organisations create and translate knowledge by running the full SECI spiral, especially externalising tacit expertise into explicit procedures and combining it into accessible tools, underpinned by communities of practice, repositories and a sharing culture (Dalkir, 2022).`,
        answerPlan: ['Use SECI (externalisation/combination) + communities of practice + codification into processes/tools.'],
        markingLogic: ['Knowledge creation via SECI: ~10.', 'Tacit-to-explicit translation mechanisms: ~10.'],
        commonMistakes: ['Ignoring the tacit-to-explicit conversion the question asks for.'],
        paragraphStructure: 'SECI creation > externalisation/codification > tools/processes.',
      },
      {
        id: 'ikm-p10-q2', number: 'Question 2', section: 'A', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss how an organisation can use any two intellectual-capital frameworks to manage intellectual capital. (As Paper 9 Q1.)',
        unitIds: ['ikm-3'], theoryIds: [], recommendedTheories: ['ikm-intellectual-capital'],
        workedSolution:
`**Introduction.** Intellectual-capital (IC) frameworks give organisations a structured way to identify, measure and manage their intangible knowledge assets; using two together gives a fuller picture (Dalkir, 2022).

**Framework 1: Skandia Navigator.** This framework manages IC across five value foci — financial, customer, process, renewal-and-development, and human capital at the centre. By setting indicators in each area, managers link intangible assets to strategy, balance financial and non-financial measures, and direct investment toward renewal (training, R&D) that drives future value. People are placed at the core because human capital fuels the other categories.

**Framework 2: Brooking's Technology Broker.** This model manages IC by classifying it into four asset types — market assets (brands, customer relationships), human-centred assets (skills, expertise), intellectual-property assets (patents, trademarks) and infrastructure assets (processes, culture, technology). Auditing each category lets managers protect IP legally, invest in skills, and strengthen the infrastructure that retains knowledge.

**Application together.** A firm can use the Skandia Navigator to set strategy-linked performance indicators and Brooking's taxonomy to audit and protect the specific assets behind those indicators, combining measurement with safeguarding.

**Conclusion.** Applying the Skandia Navigator and Brooking's model together lets an organisation both measure intangible value against strategy and classify and protect the underlying assets, making intellectual capital visible and manageable (Dalkir, 2022).`,
        answerPlan: ['See Paper 9 Question 1 (Skandia + Brooking).'],
        markingLogic: ['As Paper 9 Q1.'], commonMistakes: ['As Paper 9 Q1.'],
        paragraphStructure: 'Framework 1 > Framework 2 > management application.',
      },
      {
        id: 'ikm-p10-q3', number: 'Question 3', section: 'B', marks: 20,
        commandWords: ['Evaluate'],
        prompt: 'Evaluate the three dimensions of information systems and their dependence upon each other.',
        unitIds: ['ikm-1'], theoryIds: ['ikm-dikw'], recommendedTheories: ['ikm-is-strategy'],
        workedSolution:
`**Introduction.** An information system has three interdependent dimensions — organisation, management and technology — and each depends on the others (Laudon and Laudon, 2023).

**Evaluating the three dimensions and their dependence.** (1) *Organisation* — structure, processes, people and culture. The system must fit organisational workflows and be accepted by its people; even perfect technology fails if processes and culture reject it. (2) *Management* — leaders set strategy, allocate resources, and interpret and act on the system's outputs. Management gives the system purpose and turns its information into decisions; without engaged management, investment is wasted. (3) *Technology* — hardware, software, data and networks that capture, store, process and distribute information. Technology is the enabler, but only delivers value when it serves organisational processes and management goals.

**Dependence.** The dimensions are mutually dependent: technology without supportive processes and culture (organisation) and without leadership direction (management) underperforms; strong management cannot execute without enabling technology and processes. Effective systems therefore balance all three rather than over-investing in technology alone.

**Conclusion.** Evaluated together, the organisation, management and technology dimensions form an interdependent whole: each is necessary but insufficient alone, so information-system success requires aligning enabling technology with fitting processes and committed management (Laudon and Laudon, 2023).`,
        answerPlan: ['Organisation, management, technology; evaluate interdependence and what happens when one is neglected (see Paper 1 Q6).'],
        markingLogic: ['Three dimensions: ~9.', 'Interdependence evaluated: ~9.', 'Judgement: ~2.'],
        commonMistakes: ['Describing rather than evaluating dependence.'],
        paragraphStructure: 'Three dimensions > interdependence > evaluative judgement.',
      },
      {
        id: 'ikm-p10-q4', number: 'Question 4', section: 'B', marks: 20,
        commandWords: ['Appraise'],
        prompt: 'Appraise the key features of organisation and how they are influenced by information systems.',
        unitIds: ['ikm-2'], theoryIds: ['ikm-dikw'],
        workedSolution:
`**Introduction.** Organisations have key features that both shape and are influenced by the information systems they adopt (Laudon and Laudon, 2023).

**Key organisational features.** Laudon and Laudon identify features such as *structure and hierarchy*, *standard operating procedures (routines)*, *business processes*, *organisational politics*, *culture*, *environment*, and *goals, power and decision-making styles*. These define how an organisation behaves and must be understood before introducing any system.

**How they are influenced by information systems.** (1) *Structure* — IS can flatten hierarchies by distributing information, reducing middle layers. (2) *Routines and processes* — IS automate and re-engineer standard procedures, changing how work is done. (3) *Politics and power* — IS shift who controls information and decisions, often provoking resistance. (4) *Culture* — IS can reinforce or challenge shared assumptions and ways of working. (5) *Decision-making* — IS change the speed, level and quality of decisions. (6) *Boundaries and environment* — IS link the organisation more closely to customers, suppliers and partners.

**Two-way influence.** Crucially, the relationship is reciprocal: organisational features shape which systems succeed, and systems in turn reshape those features, so implementation must manage organisational change, not just technology.

**Conclusion.** Organisational structure, routines, processes, politics and culture both determine and are reshaped by information systems; appreciating this two-way influence is essential to designing systems that fit and to managing the change they bring (Laudon and Laudon, 2023).`,
        answerPlan: ['Organisational features (structure, processes, culture, politics, hierarchy) and how IS reshapes each; appraise positive and disruptive effects.'],
        markingLogic: ['Organisational features: ~8.', 'IS influence appraised: ~10.', 'Judgement: ~2.'],
        commonMistakes: ['Listing IS benefits, not organisational features.'],
        paragraphStructure: 'Organisational features > IS influence on each > appraisal.',
      },
      {
        id: 'ikm-p10-q5', number: 'Question 5', section: 'B', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss how big data is transforming the way businesses operate and compete.',
        unitIds: ['ikm-5', 'ikm-7'], theoryIds: [], recommendedTheories: ['ikm-big-data'],
        answerPlan: ['Big data\'s 3Vs (volume, velocity, variety); transformation: real-time decisions, personalisation, new business models, predictive analytics; with governance caveats.'],
        workedSolution:
`**Introduction.** Big data refers to datasets so large, fast-moving and varied that traditional data tools cannot process them. The three defining characteristics — volume, velocity and variety (the 3Vs) — explain why big data demands new infrastructure and analytical capabilities (Laudon and Laudon, 2023).

**The 3Vs.** *Volume* means the scale of data generated daily by transactions, sensors, social media and devices far exceeds what relational databases were designed to handle. *Velocity* means data is generated and must be processed in near real time, from financial trading to traffic monitoring. *Variety* means data arrives in structured (databases), semi-structured (email, XML) and unstructured (video, text, social media) forms that require different analytical techniques (Laudon and Laudon, 2023; MANCOSA IKM Module Guide, 2026).

**Transformation of operations.** Big data enables real-time operational intelligence: retailers adjust pricing within minutes based on demand signals; manufacturers use sensor data to predict equipment failure before it occurs; logistics firms route deliveries dynamically. This shifts operations from reactive — responding to what happened — to predictive — acting before it does (Laudon and Laudon, 2023).

**Transformation of competition.** Firms with superior big-data capability can personalise at scale, identify market opportunities faster and build data-network effects: the more customers use the service, the better the recommendations, drawing more customers. This creates competitive advantage that is difficult for rivals to replicate quickly (MANCOSA IKM Module Guide, 2026).

**New business models.** Big data underpins entirely new value propositions — platforms that sell data-derived insights, telematics-based insurance priced on actual driving behaviour, and precision agriculture guided by field sensors — that were not viable before this infrastructure existed (Laudon and Laudon, 2023).

**Governance and ethical caveat.** The scale of data collection raises serious privacy, consent and security obligations. Firms that exploit big data without adequate governance face regulatory risk (POPIA in South Africa, GDPR in Europe) and reputational harm. Analytical capability without data governance produces competitive exposure rather than competitive advantage (Saffady, 2021; MANCOSA IKM Module Guide, 2026).

**Conclusion.** Big data transforms businesses by making prediction and personalisation economically viable at scale. Organisations that lead pair analytical capability with governance discipline, using data as a managed strategic asset rather than an uncontrolled operational by-product (Laudon and Laudon, 2023).`,
        markingLogic: ['Big data defined (Vs): ~4.', 'Transformation discussed: ~14.', 'Caveat: ~2.'],
        commonMistakes: ['Defining big data without showing business transformation.'],
        paragraphStructure: 'Define (Vs) > transformation in operations/competition > caveat.',
      },
      {
        id: 'ikm-p10-q6', number: 'Question 6', section: 'B', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss how different information systems are used in businesses at different organisational levels.',
        unitIds: ['ikm-1', 'ikm-5'], theoryIds: [], recommendedTheories: ['ikm-is-types'],
        workedSolution:
`**Introduction.** Different management levels make different decisions and therefore need different information systems (Laudon and Laudon, 2023).

**Systems by level.** At the *operational* level, Transaction Processing Systems (TPS) record and process routine daily transactions (sales, payroll, orders) and supply the raw data the organisation runs on. At the *middle-management* level, Management Information Systems (MIS) summarise TPS data into routine reports for monitoring and control, while Decision-Support Systems (DSS) use models and "what-if" analysis to support semi-structured decisions. At the *senior/strategic* level, Executive Support Systems (ESS) draw on internal and external data to support unstructured, long-range decisions, often through dashboards (Laudon and Laudon, 2023).

**Interrelation.** These systems are layered: TPS feed MIS and DSS, which in turn feed ESS, so the quality of strategic information depends on the integrity of operational data (MANCOSA IKM Module Guide, 2026).

**Conclusion.** Matching the system to the decision level is what makes information useful: routine control needs MIS, judgement-based decisions need DSS, and strategic scanning needs ESS (Laudon and Laudon, 2023).`,
        answerPlan: [
          'Map levels to systems: operational (TPS), management (MIS, DSS), strategic (ESS).',
          'Explain the decisions each supports.',
          'Show how the systems feed one another.',
        ],
        markingLogic: ['Correct level-to-system mapping: ~10.', 'Decisions supported per system: ~8.', 'Interrelation: ~2.'],
        commonMistakes: ['Confusing MIS and DSS.', 'Listing systems without tying them to a management level.'],
        paragraphStructure: 'Levels > systems per level > decisions > interrelation.',
      },
    ],
  },

  {
    id: 'ikm-paper-11',
    module: 'ikm',
    title: 'Cisco: Social Media Access in the South African Workplace',
    paperRef: 'Section A case (Cisco / social media / security, SA) + Section B',
    totalMarks: 120,
    saContext: true,
    frequency: 'High',
    sourceStatus: 'Uploaded MANCOSA IKM past paper. Transcribed from scan.',
    caseSummary:
      'A Cisco report on the South African workplace argues that blocking social media may raise rather than lower security risk, that South African brands rely heavily on social media for growth, and that education-based security policy is better than blanket bans in a hyper-connected environment.',
    keyFacts: [
      'Strong South African social-media adoption statistics (Facebook/Twitter growth).',
      'Blocking social media can increase risk and impede productivity.',
      'Education-based security (people, process, technology) beats blanket bans.',
    ],
    keyProblem: 'Balancing the competitive value of Web 2.0/social media against information-security and governance risk in a South African context.',
    questions: [
      {
        id: 'ikm-p11-q1', number: 'Question 1', section: 'A', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss how new media and the Internet have fuelled the five competitive forces identified by Porter.',
        unitIds: ['ikm-2'], theoryIds: [], recommendedTheories: ['ikm-is-strategy'],
        workedSolution:
`**Introduction.** Porter's five forces shape industry competition; new media and the Internet have intensified each, reshaping how firms compete (Laudon and Laudon, 2023).

**Threat of new entrants.** The Internet lowers entry barriers — online firms need less physical infrastructure and can reach customers cheaply — so new digital competitors appear quickly, raising this threat.

**Bargaining power of customers.** Price-comparison sites, reviews and instant switching give buyers far more information and choice, strengthening their power and pressuring margins.

**Bargaining power of suppliers.** Online marketplaces let firms source globally and compare suppliers easily, often reducing supplier power; yet dominant digital platforms can themselves become powerful suppliers of access to customers.

**Threat of substitutes.** Digital substitutes (streaming for physical media, e-mail for post, apps for branches) emerge rapidly online, increasing this threat.

**Rivalry among existing competitors.** Price transparency, global reach and low-cost digital marketing intensify rivalry, while the Internet also enables differentiation through data, personalisation and network effects.

**Strategic response.** Firms use the Internet defensively and offensively — building switching costs, network effects, superior data and strong digital brands to blunt these forces.

**Conclusion.** New media and the Internet have amplified all five forces, lowering barriers and empowering customers, so firms must use the same technologies strategically to build durable competitive advantage (Laudon and Laudon, 2023).`,
        answerPlan: ['See Paper 5 Q3; emphasise social media\'s effect on buyer power and rivalry.'],
        markingLogic: ['Five forces + Internet/new-media effect: ~18.', 'Net judgement: ~2.'],
        commonMistakes: ['As Paper 5 Q3.'],
        paragraphStructure: 'Five forces > new-media effect per force > net effect.',
      },
      {
        id: 'ikm-p11-q2', number: 'Question 2', section: 'A', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss how various Web 2.0 tools have impacted the productivity and competitiveness of organisations.',
        unitIds: ['ikm-2', 'ikm-5'], theoryIds: [], recommendedTheories: ['ikm-web-2'],
        answerPlan: ['Web 2.0 tools (wikis, blogs, social networks, collaboration platforms); productivity and competitiveness effects, plus risks (distraction, security).'],
        workedSolution:
`**Introduction.** Web 2.0 refers to the generation of Internet technologies that shifted the Web from a read-only medium to a participatory, collaborative one. For organisations, these tools create both productivity opportunities and competitive risks (Laudon and Laudon, 2023).

**Key tools.** *Wikis* enable teams to collaboratively create and update shared knowledge repositories, reducing duplication and capturing institutional memory. *Blogs and social media* (Twitter/X, LinkedIn, Facebook) allow organisations to communicate directly with customers, build brand community and gather market intelligence at low cost. *Collaboration platforms* (Microsoft Teams, Slack, SharePoint) integrate communication, document sharing and project management into a single workspace, reducing email overload and enabling distributed teams to work as if co-located. *Social bookmarking and tagging* tools make curated resources findable across the organisation (Laudon and Laudon, 2023; MANCOSA IKM Module Guide, 2026).

**Productivity impact.** Web 2.0 tools reduce the friction of information sharing: a wiki update is instantly available to all users; a Teams channel replaces hours of email chains. Remote and hybrid workers maintain coordination without physical proximity. Onboarding is faster when institutional knowledge is captured in accessible collaborative tools rather than siloed with individuals (Dalkir, 2022).

**Competitiveness impact.** Organisations that use social media effectively for customer engagement, brand building and complaint resolution gain market intelligence and loyalty advantages. Social listening — monitoring mentions and sentiment — provides real-time market data that was previously expensive to gather (Laudon and Laudon, 2023).

**Risks.** Productivity gains are partially offset by distraction: employees who use social media for personal purposes during work hours reduce output. More seriously, Web 2.0 tools can expose confidential information if governance policies are absent, and external social media comments by employees can create reputational and legal liability. Security vulnerabilities arise because these platforms are designed for openness, not access control (MANCOSA IKM Module Guide, 2026).

**Conclusion.** Web 2.0 tools measurably improve collaboration, knowledge sharing and customer engagement, but their net benefit depends on governance: acceptable-use policies, training and monitoring that preserve openness while managing risk (Laudon and Laudon, 2023; MANCOSA IKM Module Guide, 2026).`,
        markingLogic: ['Tools named + explained: ~8.', 'Productivity/competitiveness impact: ~10.', 'Risk balance: ~2.'],
        commonMistakes: ['Listing tools with no impact analysis.'],
        paragraphStructure: 'Tools > productivity/competitiveness impact > risks.',
      },
      {
        id: 'ikm-p11-q3', number: 'Question 3', section: 'B', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss how managers can use SWOT analysis to develop into learning organisations through the five disciplines.',
        unitIds: ['ikm-3', 'ikm-6'], theoryIds: ['ikm-learning-org'],
        workedSolution:
`**Introduction.** SWOT analysis and Senge's five disciplines together help managers build a learning organisation by linking honest self-assessment to disciplined learning behaviours (Dalkir, 2022).

**Using SWOT.** SWOT audits internal Strengths and Weaknesses and external Opportunities and Threats, giving managers an evidence base about current capability and the environment.

**Linking SWOT to the five disciplines.** (1) *Personal mastery* — weaknesses identified in SWOT define the personal-development goals staff commit to. (2) *Mental models* — analysing threats and weaknesses surfaces and challenges the assumptions that limit the firm. (3) *Shared vision* — opportunities and strengths inform an inspiring, shared direction everyone helps build. (4) *Team learning* — teams use SWOT findings in dialogue to learn collectively and align around priorities. (5) *Systems thinking* — the fifth discipline integrates the others, helping managers see how strengths, weaknesses, opportunities and threats interrelate rather than treating them in isolation.

**Effect.** Repeating this cycle turns SWOT from a one-off plan into continuous, disciplined learning, the hallmark of a learning organisation.

**Conclusion.** By feeding SWOT results into Senge's five disciplines — especially systems thinking — managers convert static analysis into ongoing organisational learning and adaptive capability (Dalkir, 2022).`,
        answerPlan: ['Define SWOT; link strategic analysis to organisational learning; map each of the five disciplines to a SWOT-driven learning behaviour.'],
        markingLogic: ['SWOT defined: ~3.', 'Five disciplines linked to SWOT/learning: ~15.', 'Integration: ~2.'],
        commonMistakes: ['SWOT and learning disciplines treated separately.'],
        paragraphStructure: 'SWOT > strategic learning > five disciplines linked.',
      },
      {
        id: 'ikm-p11-q4', number: 'Question 4', section: 'B', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss why the success of IT governance is critical for an organisation.',
        unitIds: ['ikm-4'], theoryIds: ['ikm-info-governance'], recommendedTheories: ['ikm-it-governance'],
        workedSolution:
`**Introduction.** IT governance ensures that IT investment and risk align with business strategy; its success is critical because organisations now depend on information systems for nearly every operation (Laudon and Laudon, 2023).

**Why it is critical.** *Strategic alignment* — governance ensures IT spending supports business objectives rather than pursuing technology for its own sake, maximising return on investment. *Value delivery* — clear accountability and prioritisation mean projects deliver measurable benefits. *Risk management* — governance frameworks identify and control security, privacy and continuity risks, protecting the firm from breaches, downtime and reputational damage. *Resource management* — it ensures scarce IT skills, data and infrastructure are used efficiently. *Performance measurement* — defined metrics let leaders monitor whether IT delivers expected value. *Compliance* — governance ensures the firm meets legal and regulatory obligations (for example data-protection law), avoiding penalties.

**Mechanisms.** Frameworks such as COBIT, steering committees, clear decision rights and regular audits operationalise good governance.

**Consequences of failure.** Poor governance leads to wasted investment, security breaches, failed projects and loss of stakeholder trust.

**Conclusion.** IT governance is critical because it aligns technology with strategy, controls risk and ensures compliance and value, all of which protect and advance the organisation in a digital economy (Laudon and Laudon, 2023).`,
        answerPlan: ['Define IT governance; why it matters: scarce IT resource allocation, alignment with business goals, risk/compliance, value delivery, accountability.'],
        markingLogic: ['IT governance defined: ~4.', 'Why critical (min. four reasons): ~14.', 'Conclusion: ~2.'],
        commonMistakes: ['Describing IT generally, not governance.'],
        paragraphStructure: 'Define > reasons it is critical > conclusion.',
      },
      {
        id: 'ikm-p11-q5', number: 'Question 5', section: 'B', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss the strategic business objectives firms aim to achieve when investing in information systems. (As Paper 3 Q2.)',
        unitIds: ['ikm-1'], theoryIds: [], recommendedTheories: ['ikm-is-strategy'],
        workedSolution:
`**Introduction.** Firms invest in information systems to achieve six interrelated strategic business objectives that have become essential to competing in a digital economy (Laudon and Laudon, 2023).

**The six objectives.** (1) *Operational excellence* — systems raise productivity and efficiency, lowering cost; for example supply-chain systems that optimise stock. (2) *New products, services and business models* — technology enables offerings and models that were impossible before, such as digital streaming. (3) *Customer and supplier intimacy* — systems capture preferences and tailor service, deepening loyalty and improving supply terms. (4) *Improved decision-making* — real-time, accurate information replaces guesswork, improving the quality and speed of management decisions. (5) *Competitive advantage* — achieving the objectives above lets a firm out-perform rivals on price, service or innovation. (6) *Survival* — some systems are simply necessities driven by industry change or regulation, without which the firm cannot operate.

**Application.** A retailer, for instance, uses point-of-sale and analytics systems to cut costs (operational excellence), personalise offers (customer intimacy) and decide stock levels (better decisions), together sustaining advantage.

**Conclusion.** Firms invest in information systems to pursue operational excellence, innovation, customer and supplier intimacy, better decisions, competitive advantage and survival — objectives that justify IS as a strategic, not merely operational, investment (Laudon and Laudon, 2023).`,
        answerPlan: ['See Paper 3 Question 2 (six objectives).'],
        markingLogic: ['As Paper 3 Q2.'], commonMistakes: ['As Paper 3 Q2.'],
        paragraphStructure: 'Six objectives explained.',
      },
      {
        id: 'ikm-p11-q6', number: 'Question 6', section: 'B', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss the value an organisation may gain from knowledge management.',
        unitIds: ['ikm-3', 'ikm-6'], theoryIds: ['ikm-km-cycle'],
        workedSolution:
`**Introduction.** Knowledge management (KM) is the systematic process of creating, capturing, sharing and applying knowledge; done well it yields substantial organisational value (Dalkir, 2022).

**Value gained.** *Better decisions* — making relevant knowledge available at the point of need improves the speed and quality of decisions. *Faster innovation* — combining and reusing knowledge accelerates the creation of new products and services. *Avoiding reinvention* — capturing lessons learned stops teams solving the same problem twice, saving cost and time. *Retaining critical know-how* — externalising tacit expertise protects the firm when experienced staff leave or retire. *Operational efficiency* — shared best practices and standard procedures raise productivity and consistency. *Improved customer service* — accessible knowledge bases let staff resolve queries quickly and accurately. *Competitive advantage* — knowledge is hard for rivals to imitate, so superior KM creates durable differentiation. *Employee learning and engagement* — a sharing culture supports continuous development and retention.

**Enablers.** Repositories, communities of practice, search tools and a culture that rewards sharing turn these potential benefits into realised value.

**Conclusion.** KM delivers value through better decisions, faster innovation, retained expertise, efficiency, stronger customer service and a hard-to-imitate competitive edge, making it a strategic capability rather than an administrative overhead (Dalkir, 2022).`,
        answerPlan: ['KM value: better decisions, innovation, reduced knowledge loss, faster onboarding, reuse of expertise, competitive advantage.'],
        markingLogic: ['Value points (min. five): ~18.', 'Link to competitiveness: ~2.'],
        commonMistakes: ['Defining KM instead of discussing its value.'],
        paragraphStructure: 'Five+ value points, each: value > business benefit.',
      },
    ],
  },

  {
    id: 'ikm-paper-12',
    module: 'ikm',
    title: 'Knowledge Management as a Change Agent (Barker, UNISA)',
    paperRef: 'Section A case (Barker, South Africa) + Section B',
    totalMarks: 120,
    saContext: true,
    frequency: 'High',
    sourceStatus: 'Uploaded MANCOSA IKM past paper, citing Barker (UNISA, South Africa). Transcribed from scan.',
    caseSummary:
      'A South African (UNISA) extract argues that knowledge management can act as a change agent during organisational change when driven by knowledge leaders who manage creation, storage, codification and sharing through strategic integrated communication and a supportive culture.',
    keyFacts: [
      'Authored by a South African scholar (UNISA) — strong SA-context marker.',
      'KM positioned as a change agent led by "knowledge leaders".',
      'Emphasis on human capital, knowledge-based theory and integrated communication.',
    ],
    keyProblem: 'Using knowledge management and leadership to drive successful organisational change in knowledge organisations.',
    questions: [
      {
        id: 'ikm-p12-q1', number: 'Question 1', section: 'A', marks: 20,
        commandWords: ['Discuss', 'Explain'],
        prompt: 'Discuss the concept of change management and explain the strategies for implementing change.',
        unitIds: ['ikm-6', 'ikm-9'], theoryIds: [], recommendedTheories: ['ikm-change-management'],
        workedSolution:
`**Introduction.** Change management is the structured approach to moving an organisation, its people and processes from a current state to a desired future state while minimising resistance and disruption (Hislop, Bosua and Helms, 2023).

**The concept.** Because KM and information-system initiatives change how people work, their success depends as much on managing the human transition as on the technology itself. Change management addresses the behaviours, attitudes and capabilities that determine whether new ways of working are adopted.

**Strategies for implementing change.** (1) *Create urgency and a clear vision* — explain why change is needed and what success looks like, following Kotter's logic. (2) *Secure leadership sponsorship* — visible commitment from senior managers legitimises the change. (3) *Communicate continuously* — open, two-way communication reduces uncertainty and rumour. (4) *Involve and empower employees* — participation builds ownership and surfaces practical concerns. (5) *Provide training and support* — equipping people with skills lowers anxiety and resistance. (6) *Use Lewin's unfreeze-change-refreeze* — prepare the ground, implement, then embed the new behaviours through reinforcement. (7) *Reward and reinforce* — incentives and quick wins lock in the new state.

**Conclusion.** Change management is the disciplined handling of organisational transition; strategies such as a clear vision, strong sponsorship, communication, participation, training and reinforcement turn intended change into adopted, lasting practice (Hislop, Bosua and Helms, 2023).`,
        answerPlan: ['Define change management; strategies: communication, participation, leadership, training, managing resistance, phased implementation (see Paper 9 Q6).'],
        markingLogic: ['Change management defined: ~4.', 'Strategies explained: ~14.', 'Application: ~2.'],
        commonMistakes: ['Listing strategies without explaining how they work.'],
        paragraphStructure: 'Define > strategies explained > application.',
      },
      {
        id: 'ikm-p12-q2', number: 'Question 2', section: 'A', marks: 20,
        commandWords: ['Elaborate'],
        prompt: 'Elaborate on how organisational culture and structure impact the success of KM. (As Paper 2 Q4.)',
        unitIds: ['ikm-3', 'ikm-6'], theoryIds: ['ikm-km-cycle', 'ikm-learning-org'],
        workedSolution:
`**Introduction.** Organisational culture and structure are decisive enablers — or barriers — to knowledge-management success, because KM depends on people choosing to share and reuse knowledge (Dalkir, 2022).

**Impact of culture.** A trust-based, collaborative culture encourages people to share knowledge freely and to admit and learn from mistakes, which is essential for KM. A blame or knowledge-hoarding culture, where knowledge is seen as personal power, undermines sharing regardless of the technology installed. Leadership behaviour, incentives that reward contribution, and psychological safety shape this culture.

**Impact of structure.** Flat, networked structures and cross-functional teams ease the horizontal flow of knowledge, while rigid hierarchies and functional silos trap knowledge within departments. Mechanisms such as communities of practice, knowledge roles (for example a chief knowledge officer) and dedicated time for sharing build bridges across the structure.

**Interaction.** Culture and structure reinforce each other: a supportive structure enables sharing behaviour, and a sharing culture makes structural mechanisms work. Technology only succeeds when both are aligned to it.

**Conclusion.** KM succeeds when a trusting, collaborative culture and an enabling, low-silo structure together encourage knowledge to flow; without them, even the best KM systems fail to deliver value (Dalkir, 2022).`,
        answerPlan: ['See Paper 2 Question 4.'],
        markingLogic: ['As Paper 2 Q4.'], commonMistakes: ['As Paper 2 Q4.'],
        paragraphStructure: 'Define both > culture impact > structure impact > conclusion.',
      },
      {
        id: 'ikm-p12-q3', number: 'Question 3', section: 'B', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss the SECI model in relation to knowledge sharing and creation. (As Paper 7 Q2.)',
        unitIds: ['ikm-3'], theoryIds: ['ikm-tacit-explicit'], recommendedTheories: ['ikm-tacit-explicit'],
        workedSolution:
`**Introduction.** Nonaka and Takeuchi's SECI model explains how organisations create and share knowledge through the continuous conversion between tacit and explicit forms (Dalkir, 2022).

**The four modes.** (1) *Socialisation (tacit to tacit)* — people share tacit knowledge directly through observation, mentoring, apprenticeship and shared experience. (2) *Externalisation (tacit to explicit)* — tacit know-how is articulated into explicit form such as documents, models, metaphors and standards; this is the pivotal step that captures expertise. (3) *Combination (explicit to explicit)* — explicit knowledge is collected, sorted and combined into systematic resources like databases, manuals and reports. (4) *Internalisation (explicit to tacit)* — individuals absorb explicit knowledge through practice and learning-by-doing until it becomes their own tacit skill.

**The spiral.** These modes form an upward spiral: knowledge created by individuals moves through the modes and is amplified across teams and the whole organisation, then begins again at a higher level.

**Enablers.** Communities of practice, repositories, mentoring, storytelling and a sharing culture sustain the spiral.

**Conclusion.** The SECI model shows knowledge creation as a dynamic spiral through socialisation, externalisation, combination and internalisation, with externalisation crucial for converting individual tacit expertise into shared organisational knowledge (Dalkir, 2022).`,
        answerPlan: ['See Paper 7 Question 2 worked solution.'],
        markingLogic: ['As Paper 7 Q2.'], commonMistakes: ['As Paper 7 Q2.'],
        paragraphStructure: 'Define tacit/explicit > four conversions > spiral > conclusion.',
      },
      {
        id: 'ikm-p12-q4', number: 'Question 4', section: 'B', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss the strategic objectives to consider when investing in IKM. (As Paper 7 Q3.)',
        unitIds: ['ikm-1', 'ikm-6'], theoryIds: [], recommendedTheories: ['ikm-is-strategy'],
        workedSolution:
`**Introduction.** Investing in information and knowledge management (IKM) requires clear strategic objectives so that spending delivers measurable business value rather than technology for its own sake (Laudon and Laudon, 2023).

**Strategic objectives to consider.** (1) *Alignment with business strategy* — IKM investment must support the firm's goals, such as growth, cost leadership or differentiation. (2) *Operational excellence* — systems should raise efficiency and productivity and lower cost. (3) *Improved decision-making* — investment should deliver timely, accurate knowledge to managers at all levels. (4) *Customer and supplier intimacy* — IKM should help capture and apply knowledge about customers and partners to deepen relationships. (5) *Innovation and new business models* — investment should enable new products, services and ways of competing. (6) *Knowledge retention* — systems should capture tacit expertise before it leaves with staff. (7) *Competitive advantage and survival* — together these objectives protect and advance the firm's market position. (8) *Return on investment and risk* — costs, benefits, security and governance must be weighed.

**Application.** Defining these objectives up front lets managers prioritise projects, set success metrics and justify investment to stakeholders.

**Conclusion.** The strategic objectives for IKM investment — alignment, operational excellence, better decisions, customer intimacy, innovation, knowledge retention and sustained advantage — ensure that technology spending produces real and measurable organisational value (Laudon and Laudon, 2023).`,
        answerPlan: ['See Paper 3 Question 2 (six objectives) applied to IKM.'],
        markingLogic: ['As Paper 3 Q2.'], commonMistakes: ['As Paper 3 Q2.'],
        paragraphStructure: 'Six objectives applied to IKM.',
      },
      {
        id: 'ikm-p12-q5', number: 'Question 5', section: 'B', marks: 20,
        commandWords: ['Demonstrate'],
        prompt: 'Demonstrate how organisations can measure intellectual capital to maximise value. (As Paper 6 Q6.)',
        unitIds: ['ikm-3'], theoryIds: [], recommendedTheories: ['ikm-intellectual-capital'],
        workedSolution:
`**Introduction.** Measuring intellectual capital (IC) makes intangible knowledge assets visible so managers can grow and maximise their value (Dalkir, 2022).

**Why measure IC.** Much of a modern firm's value lies in intangibles — people, relationships, brands and processes — that traditional accounting ignores. Measurement guides investment toward the assets that create the most value.

**Methods to measure IC.** (1) *Skandia Navigator* — sets indicators across human, customer, process, renewal and financial foci, linking intangibles to strategy. (2) *Balanced Scorecard* — measures performance across financial, customer, internal-process and learning-and-growth perspectives, embedding IC in management control. (3) *Market-to-book ratio* — the gap between market and book value approximates the value of intangibles. (4) *Tobin's Q* — compares market value to asset replacement cost as a proxy for IC. (5) *Intangible Asset Monitor and Brooking's model* — classify and track human, structural and relational capital.

**Using measures to maximise value.** Tracking these indicators over time shows whether investment in training, R&D, brands and relationships is paying off, letting managers reallocate resources to the highest-value assets.

**Conclusion.** By applying frameworks such as the Skandia Navigator, Balanced Scorecard and market-based ratios, organisations make intellectual capital visible and manageable, directing investment to maximise the value of their intangible assets (Dalkir, 2022).`,
        answerPlan: ['See Paper 6 Question 6.'],
        markingLogic: ['As Paper 6 Q6.'], commonMistakes: ['As Paper 6 Q6.'],
        paragraphStructure: 'Frameworks > measurement > value maximisation.',
      },
      {
        id: 'ikm-p12-q6', number: 'Question 6', section: 'B', marks: 20,
        commandWords: ['Appraise'],
        prompt: 'Appraise technologies and tools for protecting a firm\'s information resources.',
        unitIds: ['ikm-4'], theoryIds: ['ikm-info-governance'],
        workedSolution:
`**Introduction.** Protecting information resources requires a layered set of technologies and tools, because a single control cannot defend against the range of modern threats (Laudon and Laudon, 2023).

**Technologies and tools.** (1) *Firewalls* — control traffic between trusted and untrusted networks, blocking unauthorised access. (2) *Intrusion-detection and prevention systems* — monitor for and respond to suspicious activity. (3) *Encryption* — protects data in transit and at rest so intercepted data is unreadable. (4) *Authentication and access control* — passwords, multi-factor authentication and role-based access ensure only authorised users reach resources. (5) *Antivirus and anti-malware* — detect and remove malicious software. (6) *Virtual private networks (VPNs)* — secure remote connections. (7) *Backup and disaster-recovery systems* — ensure availability and continuity after failure or attack. (8) *Security-information and event-management (SIEM) and audit tools* — log and analyse events to detect breaches.

**Appraisal.** No tool is sufficient alone; effective protection combines technical controls with policies, user training and governance, since human error remains a major vulnerability. Layered defence (defence in depth) balances confidentiality, integrity and availability.

**Conclusion.** Firewalls, encryption, authentication, anti-malware, VPNs, backups and monitoring tools together — supported by policy and training — provide the layered defence needed to protect a firm's information resources (Laudon and Laudon, 2023).`,
        answerPlan: ['Security technologies: firewalls, encryption, access control/authentication, IDS/anti-malware, backups; appraise effectiveness and limits.'],
        markingLogic: ['Technologies named/explained: ~10.', 'Appraisal of effectiveness/limits: ~8.', 'Conclusion: ~2.'],
        commonMistakes: ['Listing tools without appraising them.'],
        paragraphStructure: 'Tools > how each protects > appraisal of effectiveness.',
      },
    ],
  },

  {
    id: 'ikm-paper-13',
    module: 'ikm',
    title: 'Telkom Mobile: Learning Management to Improve Customer Satisfaction',
    paperRef: 'Section A case (Telkom Mobile / SumTotal LMS, SA) + Section B',
    totalMarks: 120,
    saContext: true,
    frequency: 'High',
    sourceStatus: 'Uploaded MANCOSA IKM past paper. Transcribed from scan.',
    caseSummary:
      "Telkom Mobile upgraded a learning management system to deliver mobile, trackable training to a fast-growing, dispersed workforce, using social collaboration and storytelling to cascade knowledge, which improved customer-satisfaction rankings and mobile revenue.",
    keyFacts: [
      'Telkom Mobile is a South African telecommunications operator (SA context).',
      'An LMS integrated with ERP delivered mobile, trackable, blended training.',
      'Results: jump in the Ask Afrika Orange Index and a 22.7% mobile revenue rise (as stated in the case).',
    ],
    keyProblem: 'Using systems and a learning culture to create, share and apply knowledge across a large dispersed workforce.',
    questions: [
      {
        id: 'ikm-p13-q1', number: 'Question 1', section: 'A', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss the five disciplines by Peter Senge that Telkom needs to master to become a learning organisation. (As Paper 5 Q1.)',
        unitIds: ['ikm-3'], theoryIds: ['ikm-learning-org'],
        workedSolution:
`**Introduction.** To become a learning organisation, Telkom must master Peter Senge's five disciplines, which together build the capacity for continuous learning and adaptation (Dalkir, 2022).

**The five disciplines applied to Telkom.** (1) *Personal mastery* — Telkom must encourage every employee to commit to continuous personal development, building deep expertise in fast-changing telecommunications. (2) *Mental models* — staff and managers must surface and challenge entrenched assumptions, for example about legacy network technology, that limit innovation. (3) *Building shared vision* — Telkom should create a genuinely shared picture of the future (such as digital leadership) that inspires commitment rather than mere compliance. (4) *Team learning* — through dialogue and collective problem-solving, teams must learn together so the whole exceeds the sum of individuals. (5) *Systems thinking* — the cornerstone discipline integrates the other four, helping Telkom see the interrelationships across its networks, customers and markets rather than isolated parts.

**Effect.** Mastering these disciplines lets Telkom adapt continuously to competition, regulation and technological change instead of reacting too late.

**Conclusion.** By developing personal mastery, challenging mental models, building a shared vision, fostering team learning and applying systems thinking, Telkom can become a true learning organisation able to renew itself in a turbulent telecommunications market (Dalkir, 2022).`,
        answerPlan: ['See Paper 5 Question 1 worked solution; apply to Telkom training context.'],
        markingLogic: ['As Paper 5 Q1, with Telkom application: ~20.'],
        commonMistakes: ['No application to Telkom.'],
        paragraphStructure: 'Define > five disciplines > apply to Telkom > conclude.',
      },
      {
        id: 'ikm-p13-q2', number: 'Question 2', section: 'A', marks: 20,
        commandWords: ['Discuss', 'Apply'],
        prompt: 'Discuss how Telkom can apply the SECI model to create valuable knowledge from its training programmes.',
        unitIds: ['ikm-3'], theoryIds: ['ikm-tacit-explicit'], recommendedTheories: ['ikm-tacit-explicit'],
        workedSolution:
`**Introduction.** Telkom can turn its training programmes into valuable organisational knowledge by applying Nonaka and Takeuchi's SECI model, which converts tacit and explicit knowledge through four modes (Dalkir, 2022).

**Applying SECI to Telkom's training.** (1) *Socialisation* — experienced engineers and technicians share tacit know-how with trainees through mentoring, job-shadowing and hands-on practice, transferring skills that are hard to write down. (2) *Externalisation* — trainers and experts articulate this tacit expertise into explicit training materials, manuals, troubleshooting guides and standards, capturing it before it leaves with retiring staff. (3) *Combination* — Telkom combines these explicit materials with existing documentation into structured courses, e-learning modules and a searchable knowledge base accessible across the company. (4) *Internalisation* — trainees apply what they learn on real tasks until the explicit knowledge becomes their own tacit competence, completing the spiral and seeding the next round of socialisation.

**Value created.** Running the full spiral means each training cohort both consumes and contributes knowledge, steadily growing Telkom's intellectual capital and reducing dependence on a few experts.

**Conclusion.** By cycling its training through socialisation, externalisation, combination and internalisation, Telkom converts individual expertise into shared, reusable organisational knowledge, maximising the long-term value of its training investment (Dalkir, 2022).`,
        answerPlan: ['Apply SECI to Telkom: socialisation (mentoring), externalisation (modules), combination (LMS content), internalisation (on-the-job practice).'],
        markingLogic: ['Four conversions applied to Telkom training: ~18.', 'Value created: ~2.'],
        commonMistakes: ['Generic SECI with no Telkom application.'],
        paragraphStructure: 'Four conversions, each applied to Telkom training.',
      },
      {
        id: 'ikm-p13-q3', number: 'Question 3', section: 'B', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss how organisations use information systems to achieve strategic business objectives. (As Paper 3 Q2.)',
        unitIds: ['ikm-1'], theoryIds: [], recommendedTheories: ['ikm-is-strategy'],
        workedSolution:
`**Introduction.** Organisations use information systems (IS) to achieve six strategic business objectives that are now central to competing and surviving in a digital economy (Laudon and Laudon, 2023).

**The strategic objectives.** (1) *Operational excellence* — IS raise efficiency and productivity and reduce cost, for example through supply-chain and enterprise systems. (2) *New products, services and business models* — IS enable offerings and models that were previously impossible, such as digital platforms. (3) *Customer and supplier intimacy* — IS capture and apply knowledge of customers and suppliers to tailor service and improve terms, building loyalty. (4) *Improved decision-making* — IS deliver accurate, real-time information so managers decide on evidence rather than guesswork. (5) *Competitive advantage* — achieving the above lets a firm outperform rivals on cost, service or innovation. (6) *Survival* — some systems are necessities driven by regulation or industry change.

**How they achieve them.** Firms align IS investment with strategy, integrate data across functions, and use analytics to convert information into action, ensuring technology delivers measurable business value.

**Conclusion.** Organisations achieve strategic objectives — operational excellence, innovation, customer and supplier intimacy, better decisions, competitive advantage and survival — by aligning information-system investment with business strategy, making IS a strategic capability rather than mere support (Laudon and Laudon, 2023).`,
        answerPlan: ['See Paper 3 Question 2.'],
        markingLogic: ['As Paper 3 Q2.'], commonMistakes: ['As Paper 3 Q2.'],
        paragraphStructure: 'Six objectives explained.',
      },
      {
        id: 'ikm-p13-q4', number: 'Question 4', section: 'B', marks: 20,
        commandWords: ['Discuss', 'Explain'],
        prompt: 'Discuss Web 2.0 tools and explain how they are used by organisations in the knowledge economy. (As Paper 11 Q2.)',
        unitIds: ['ikm-2', 'ikm-5'], theoryIds: [], recommendedTheories: ['ikm-web-2'],
        workedSolution:
`**Introduction.** Web 2.0 refers to interactive, user-driven Internet technologies that let people create and share content collaboratively; in the knowledge economy these tools have become powerful enablers of knowledge sharing (Laudon and Laudon, 2023).

**Web 2.0 tools and their organisational use.** (1) *Wikis* — let employees co-create and continuously update shared knowledge bases and documentation. (2) *Blogs* — allow experts and leaders to share insights, updates and thought leadership internally and externally. (3) *Social-networking platforms* — connect employees across locations, helping them find expertise and build communities of practice. (4) *RSS and content syndication* — push relevant updates to staff, keeping them current. (5) *Tagging and folksonomies* — let users classify content collaboratively, improving findability. (6) *Mashups* — combine data from multiple sources into new applications. (7) *Crowdsourcing and online collaboration tools* — gather ideas and solve problems using collective intelligence.

**Value in the knowledge economy.** These tools lower the cost of capturing and sharing tacit knowledge, support socialisation and externalisation, and foster collaboration and innovation across boundaries.

**Conclusion.** Web 2.0 tools such as wikis, blogs, social networks and collaborative platforms let organisations capture, share and co-create knowledge interactively, making them valuable instruments for knowledge management and innovation in the knowledge economy (Laudon and Laudon, 2023).`,
        answerPlan: ['See Paper 11 Question 2.'],
        markingLogic: ['As Paper 11 Q2.'], commonMistakes: ['As Paper 11 Q2.'],
        paragraphStructure: 'Tools > use in knowledge economy.',
      },
      {
        id: 'ikm-p13-q5', number: 'Question 5', section: 'B', marks: 20,
        commandWords: ['Critically discuss'],
        prompt: 'Critically discuss the different types of information systems and how different management levels use them for decision-making. (As Paper 10 Q6.)',
        unitIds: ['ikm-1', 'ikm-5'], theoryIds: [], recommendedTheories: ['ikm-is-types'],
        workedSolution:
`**Introduction.** Organisations use different types of information systems matched to the needs of each management level, supporting decisions from routine operations to long-term strategy (Laudon and Laudon, 2023).

**Types of information systems and the levels they serve.** (1) *Transaction-processing systems (TPS)* — at the operational level, they record day-to-day transactions such as sales and payroll, supporting structured, routine decisions. (2) *Management-information systems (MIS)* — at the middle-management level, they summarise TPS data into routine reports that support monitoring and control. (3) *Decision-support systems (DSS)* — also for middle managers, they use models and what-if analysis to support semi-structured, less routine decisions. (4) *Executive-support systems (ESS)* — at the senior level, they integrate internal and external data into dashboards for unstructured, strategic decisions. Additional systems such as knowledge-management and office systems support knowledge and information workers.

**Critical discussion.** Lower levels need detailed, structured, internally focused information for frequent decisions, while senior levels need summarised, forward-looking, externally focused information for infrequent strategic choices. Integration across these systems is essential, since isolated systems create silos and inconsistent decisions.

**Conclusion.** TPS, MIS, DSS and ESS each serve a management level, providing the right type of information for operational, tactical and strategic decisions; their integration is what enables coherent organisation-wide decision-making (Laudon and Laudon, 2023).`,
        answerPlan: ['See Paper 10 Question 6 worked solution; add a critical note on integration/limits.'],
        markingLogic: ['Level-to-system mapping + decisions: ~16.', 'Critical note (limits/integration): ~4.'],
        commonMistakes: ['No critical dimension despite "critically discuss".'],
        paragraphStructure: 'Levels > systems > decisions > critical note.',
      },
      {
        id: 'ikm-p13-q6', number: 'Question 6', section: 'B', marks: 20,
        commandWords: ['Discuss', 'Differentiate'],
        prompt: 'Discuss the traditional SDLC and prototyping as two development methods, including the differences between them.',
        unitIds: ['ikm-5'], theoryIds: [], recommendedTheories: ['ikm-systems-development', 'ikm-prototyping'],
        workedSolution:
`**Introduction.** The traditional systems-development life cycle (SDLC) and prototyping are two contrasting methods for building information systems, each suited to different situations (Laudon and Laudon, 2023).

**Traditional SDLC.** This is a structured, sequential approach moving through defined phases — systems analysis, design, programming, testing, conversion and production-and-maintenance. Requirements are fixed early, documentation is thorough, and each phase is completed before the next begins. *Strengths:* strong control, clear milestones and good for large, complex, stable projects. *Weaknesses:* slow, costly, inflexible, and risky when requirements are unclear or change.

**Prototyping.** This is an iterative approach in which a working preliminary model is built quickly, shown to users, and refined repeatedly until it meets their needs. *Strengths:* fast, user-involved, ideal when requirements are uncertain, and reduces the risk of building the wrong system. *Weaknesses:* can skip rigorous documentation and testing, and may not scale well to large systems.

**Key differences.** SDLC is sequential, plan-driven and documentation-heavy with requirements fixed up front, whereas prototyping is iterative, user-driven and flexible with requirements discovered through successive versions.

**Conclusion.** The traditional SDLC suits large, well-understood projects needing control, while prototyping suits smaller or uncertain projects needing speed and user involvement; the choice depends on project size, clarity of requirements and risk (Laudon and Laudon, 2023).`,
        answerPlan: ['Describe SDLC (sequential, structured) and prototyping (iterative); tabulate differences (planning, requirements, speed, documentation, user involvement, risk).'],
        markingLogic: ['SDLC explained: ~7.', 'Prototyping explained: ~7.', 'Differences tabulated: ~6.'],
        commonMistakes: ['Explaining both but giving no differences.'],
        paragraphStructure: 'SDLC > prototyping > differences table.',
      },
    ],
  },
];
