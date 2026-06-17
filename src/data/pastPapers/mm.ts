// src/data/pastPapers/mm.ts
// MM Past Paper Intelligence. Derived from the uploaded scanned MM exam set.
// The 16-page MM file contains FIVE distinct papers; the McConnell's paper is
// printed twice (pages 1-3 and 6-9), so it is represented once here.
// Mapped to the MANCOSA MM Module Guide (2026) units 1-17.
//
// Referencing note: Kotler and Armstrong (2020) is the 2020+ prescribed text and
// is used for in-text support. Kotler and Keller (2016) appears in the data layer
// but is PRE-2020; per the brief it is avoided in worked solutions in favour of
// Kotler and Armstrong (2020) and the MM Module Guide (2026).
//
// Source status (all papers): Verbatim copies of the uploaded MANCOSA MM past
// papers (scanned images). Question wording transcribed from those images.

import type { PastPaper } from '../../types/Pastpapers';

export const MM_PAST_PAPERS: PastPaper[] = [
  {
    id: 'mm-paper-1',
    module: 'mm',
    title: "McConnell's Irish Whisky Now Available in SA",
    paperRef: 'Section A (market entry, SA) + Section B (printed twice in the set)',
    totalMarks: 100,
    saContext: true,
    frequency: 'High',
    sourceStatus: 'Uploaded MANCOSA MM past paper (appears twice in the scan: pages 1-3 and 6-9). Transcribed from scan.',
    caseSummary:
      "A heritage Irish whiskey brand, McConnell's, enters the South African market (and 39 other countries) in partnership with a local distributor, leveraging Irish provenance, premium positioning and award-winning expressions.",
    keyFacts: [
      'A 1776 Irish heritage brand entering South Africa and ~40 global markets (SA market entry).',
      'Local partnership (Firebrand Africa) used for distribution.',
      'Premium positioning built on Irish country-of-origin and product range.',
    ],
    keyProblem: 'How a heritage brand enters new international markets, manages risk and leverages country-of-origin to build value.',
    questions: [
      {
        id: 'mm-p1-q1', number: 'Question 1 (1.1, 1.2)', section: 'A', marks: 20,
        commandWords: ['Critically discuss', 'Discuss'],
        prompt: '1.1 Critically discuss reasons for venturing into global markets and SA specifically (10). 1.2 Discuss the risks before deciding to go global (10).',
        unitIds: ['mm-16', 'mm-2'], theoryIds: ['mm-environment'],
        recommendedTheories: ['mm-global-entry'],
        answerPlan: [
          '1.1 Reasons to go global: market saturation at home, growth/new revenue, economies of scale, spreading risk, exploiting brand/heritage, following demand; why SA (growing premium spirits market, gateway to Africa).',
          '1.2 Risks: currency/exchange-rate, political/economic instability, cultural/taste differences, regulation/excise, competition, distribution control, brand dilution.',
          'Critically weigh reasons against risks.',
        ],
        markingLogic: ['1.1 reasons + SA rationale, critically discussed: ~10.', '1.2 risks identified and discussed: ~10.'],
        commonMistakes: ['Listing reasons/risks with no critical weighing.', 'No SA-specific rationale in 1.1.'],
        paragraphStructure: '1.1 reasons + SA > critical weighing | 1.2 risks discussed.',
      },
      {
        id: 'mm-p1-q2', number: 'Question 2', section: 'A', marks: 20,
        commandWords: ['Assess'],
        prompt: 'Assess how McConnell\u2019s can leverage country-of-origin perceptions to facilitate global entry.',
        unitIds: ['mm-16', 'mm-8'], theoryIds: ['mm-branding'],
        recommendedTheories: ['mm-global-entry'],
        answerPlan: [
          'Define country-of-origin effect: consumer perceptions shaped by where a product is made/associated.',
          'Assess Irish whiskey provenance as positive equity (heritage, craft, authenticity).',
          'Show how it supports premium positioning, trust and differentiation in SA.',
          'Note limits (stereotypes, relevance to local taste).',
        ],
        markingLogic: ['Country-of-origin defined: ~4.', 'Assessed for McConnell\u2019s/Irish whiskey: ~12.', 'Limits noted: ~4.'],
        commonMistakes: ['Describing the brand instead of assessing country-of-origin effect.'],
        paragraphStructure: 'Define COO > assess Irish provenance equity > positioning benefit > limits.',
      },
      {
        id: 'mm-p1-q3', number: 'Question 3', section: 'B', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss the four main categories of consumer goods, detailing consumer purchasing patterns, with examples.',
        unitIds: ['mm-10'], theoryIds: ['mm-marketing-mix'],
        recommendedTheories: ['mm-product-classification'],
        answerPlan: [
          'Four consumer-product categories (Kotler and Armstrong, 2020): convenience, shopping, speciality, unsought goods.',
          'For each: buying behaviour (frequency, effort, comparison, price sensitivity) + example.',
          'Conclude on marketing-mix implications per category.',
        ],
        markingLogic: ['Four categories named: ~4.', 'Purchasing pattern + example each: ~12.', 'Mix implication: ~4.'],
        commonMistakes: ['Confusing consumer goods with industrial goods.', 'No examples.'],
        paragraphStructure: 'Four categories, each: definition > buying pattern > example > mix implication.',
      },
      {
        id: 'mm-p1-q4', number: 'Question 4', section: 'B', marks: 20,
        commandWords: ['Appraise'],
        prompt: 'For a revolutionary new SA mobile network surpassing 5G, appraise pioneer (first-mover) advantages and disadvantages.',
        unitIds: ['mm-15', 'mm-9'], theoryIds: [],
        recommendedTheories: ['mm-first-mover'],
        answerPlan: [
          'Define first-mover/pioneer advantage.',
          'Advantages: market leadership, brand/standard setting, customer lock-in, learning-curve cost, scarce-resource pre-emption.',
          'Disadvantages: high R&D/risk/cost, market uncertainty, free-rider/fast-follower threat, technology shifts.',
          'Appraise net position for a capital-intensive telecoms innovation.',
        ],
        markingLogic: ['Defined: ~2.', 'Advantages: ~7.', 'Disadvantages: ~7.', 'Net appraisal: ~4.'],
        commonMistakes: ['Only advantages.', 'No appraisal/judgement.'],
        paragraphStructure: 'Define > advantages > disadvantages > net appraisal.',
      },
      {
        id: 'mm-p1-q5', number: 'Question 5', section: 'B', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'iPhone is a market leader. Discuss to what extent Apple can retain pole position, using marketing strategies and tactics.',
        unitIds: ['mm-9'], theoryIds: [],
        recommendedTheories: ['mm-competitive-positions'],
        answerPlan: [
          'Market-leader strategies (Kotler and Armstrong, 2020): expand total market, defend share (position/flanking defence), expand share.',
          'Apply to Apple: innovation, ecosystem lock-in, brand equity, premium pricing.',
          'Discuss limits (saturation, rivals, regulation) and "to what extent".',
        ],
        markingLogic: ['Leader strategies explained: ~8.', 'Applied to Apple: ~8.', '"To what extent" judgement: ~4.'],
        commonMistakes: ['No judgement on the "extent".', 'Generic strategy with no Apple tactics.'],
        paragraphStructure: 'Leader strategies > apply to Apple > extent/limits.',
      },
      {
        id: 'mm-p1-q6', number: 'Question 6', section: 'B', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss how Porter\u2019s five forces matter to a prospective new entrant to the South African retail industry.',
        unitIds: ['mm-9', 'mm-3'], theoryIds: ['mm-environment'],
        recommendedTheories: ['mm-five-forces'],
        answerPlan: [
          'State the five forces: rivalry, new entrants, substitutes, buyer power, supplier power.',
          'Assess each for SA retail (intense rivalry, low/high entry barriers, strong buyer power, concentrated suppliers).',
          'Conclude on industry attractiveness for a new entrant.',
        ],
        markingLogic: ['Five forces named: ~5.', 'Applied to SA retail: ~13.', 'Attractiveness conclusion: ~2.'],
        commonMistakes: ['Generic five forces with no SA retail application.'],
        paragraphStructure: 'Five forces > apply to SA retail > attractiveness conclusion.',
      },
    ],
  },

  {
    id: 'mm-paper-2',
    module: 'mm',
    title: "Tiger Brands: 'Heavenly' Chocolate Advertising Complaint",
    paperRef: 'Section A (Tiger Brands / ARB, SA) + Section B',
    totalMarks: 100,
    saContext: true,
    frequency: 'High',
    sourceStatus: 'Uploaded MANCOSA MM past paper (SA Advertising Regulatory Board case). Transcribed from scan.',
    caseSummary:
      "Tiger Brands faced an Advertising Regulatory Board complaint that its Beacon 'Heavenly Milk Tart' slab did not taste as advertised; the ARB ruled the packaging was not misleading, raising questions about advertising ethics and consumer expectations.",
    keyFacts: [
      'A South African ARB ruling on a Tiger Brands product (SA context).',
      'An expert consumer challenged the advertised flavour claim.',
      'The ARB judged the packaging reasonable, not misleading.',
    ],
    keyProblem: 'Balancing creative product marketing with ethical responsibility and managing consumer perception and brand trust.',
    questions: [
      {
        id: 'mm-p2-q1', number: 'Question 1', section: 'A', marks: 20,
        commandWords: ['Discuss', 'Provide advice'],
        prompt: 'Discuss the ethical implications of Tiger Brands\u2019 advertising and advise how to balance creativity with meeting customer expectations.',
        unitIds: ['mm-14', 'mm-1'], theoryIds: ['mm-imc'],
        recommendedTheories: ['mm-marketing-ethics'],
        answerPlan: [
          'Define marketing/advertising ethics (truthfulness, non-deception, fairness).',
          'Apply to the case: flavour claim vs consumer expectation; legal compliance vs ethical responsibility.',
          'Advise: substantiate claims, manage expectations, transparent labelling, protect long-term trust over short-term creativity.',
        ],
        markingLogic: ['Ethics framed: ~5.', 'Applied to the case: ~9.', 'Balanced advice: ~6.'],
        commonMistakes: ['Moralising without marketing-ethics concepts.', 'No practical advice.'],
        paragraphStructure: 'Define ethics > apply to case > advice on balance.',
      },
      {
        id: 'mm-p2-q2', number: 'Question 2', section: 'A', marks: 20,
        commandWords: ['Analyse', 'Propose'],
        prompt: 'Analyse how expert-consumer perceptions influence brand trust and reputation, and propose strategies to address negative perceptions.',
        unitIds: ['mm-6', 'mm-8'], theoryIds: ['mm-consumer-behaviour', 'mm-branding'],
        answerPlan: [
          'Analyse perception, brand trust and reputation links; the disproportionate influence of expert/opinion-leader consumers and word-of-mouth.',
          'Propose strategies: responsiveness, transparency, product improvement, expectation-setting, reputation management, engaging influencers.',
        ],
        markingLogic: ['Perception/trust/reputation analysed: ~10.', 'Strategies proposed: ~10.'],
        commonMistakes: ['Describing perception without linking to trust/reputation.'],
        paragraphStructure: 'Analyse perception-trust link > propose strategies.',
      },
      {
        id: 'mm-p2-q3', number: 'Question 3', section: 'B', marks: 20,
        commandWords: ['Discuss'],
        prompt: 'Discuss the different company orientations toward the marketplace, with examples.',
        unitIds: ['mm-1'], theoryIds: ['mm-marketing-concept'],
        workedSolution:
`**Introduction.** A company\u2019s orientation is the philosophy guiding how it approaches its market. Five orientations have evolved over time (Kotler and Armstrong, 2020).

**The five orientations.** (1) *Production concept*: consumers favour available, affordable products, so the firm focuses on efficiency and mass distribution; it risks "marketing myopia". (2) *Product concept*: consumers favour the highest quality and features, so the firm focuses on continuous product improvement, but may neglect what customers actually need. (3) *Selling concept*: consumers will not buy enough unless aggressively sold to, so the firm pushes promotion and selling; suited to unsought goods but short-term. (4) *Marketing concept*: achieving goals depends on knowing the target market\u2019s needs and delivering satisfaction better than competitors; it is customer-driven (outside-in). (5) *Societal marketing concept*: the firm balances customer wants, company profit and society\u2019s long-run welfare, including sustainability and ethics (Kotler and Armstrong, 2020).

**Examples.** A low-cost commodity producer reflects the production concept; an engineering-led electronics firm the product concept; an insurance cold-caller the selling concept; a customer-research-led retailer the marketing concept; and a sustainability-led brand the societal concept (MANCOSA MM Module Guide, 2026).

**Conclusion.** The trajectory runs from inside-out (production/product/selling) to outside-in (marketing/societal); modern marketing favours the marketing and societal concepts because they build durable customer value rather than one-off sales (Kotler and Armstrong, 2020).`,
        answerPlan: [
          'Five orientations: production, product, selling, marketing, societal.',
          'Define each with its focus and risk + an example.',
          'Conclude on the inside-out to outside-in shift.',
        ],
        markingLogic: ['Five orientations named: ~5.', 'Each defined + example: ~13.', 'Conclusion on the shift: ~2.'],
        commonMistakes: ['Confusing the selling and marketing concepts.', 'No examples.'],
        paragraphStructure: 'Five orientations > define + example each > inside-out to outside-in conclusion.',
      },
      {
        id: 'mm-p2-q4', number: 'Question 4', section: 'B', marks: 20,
        commandWords: ['Identify', 'Critically analyse', 'Assess'],
        prompt: 'For Amazon\u2019s SA branch after six months, identify and critically analyse five key performance metrics, assessing each against business objectives.',
        unitIds: ['mm-4'], theoryIds: [],
        recommendedTheories: ['mm-marketing-metrics'],
        answerPlan: [
          'Five marketing metrics: market share/sales growth, customer acquisition cost, customer lifetime value/retention, conversion rate, customer satisfaction/NPS.',
          'For each: what it measures, why it matters, link to a business objective, and a limitation.',
        ],
        markingLogic: ['Five relevant metrics: ~5.', 'Critical analysis + objective link each: ~13.', 'Balance/limits: ~2.'],
        commonMistakes: ['Listing metrics with no critical analysis or objective link.'],
        paragraphStructure: 'Five metrics, each: define > significance > objective link > limit.',
      },
      {
        id: 'mm-p2-q5', number: 'Question 5', section: 'B', marks: 20,
        commandWords: ['Assess'],
        prompt: 'For a product in the growth stage of its life cycle (e.g. Samsung smartphone), assess the marketing-mix tactics used to drive sales.',
        unitIds: ['mm-10', 'mm-2'], theoryIds: ['mm-marketing-mix'],
        recommendedTheories: ['mm-plc'],
        answerPlan: [
          'Locate the growth stage of the PLC (rising sales, new competitors).',
          'Assess each mix element in growth: product (new features/variants), price (penetration/competitive), place (widen distribution), promotion (build preference, brand).',
          'Apply to the chosen device.',
        ],
        markingLogic: ['Growth stage characterised: ~3.', '4Ps assessed for growth: ~13.', 'Applied to product: ~4.'],
        commonMistakes: ['Describing all PLC stages instead of the growth stage.'],
        paragraphStructure: 'Growth stage > 4Ps tactics > apply to product.',
      },
      {
        id: 'mm-p2-q6', number: 'Question 6', section: 'B', marks: 20,
        commandWords: ['Critically assess'],
        prompt: 'Critically assess pioneer vs later market entry from the perspective of 8ta (a Telkom cellular subsidiary in SA).',
        unitIds: ['mm-9', 'mm-15'], theoryIds: [],
        recommendedTheories: ['mm-first-mover'],
        answerPlan: [
          'Contrast first-mover advantages vs late-entrant advantages (learning from pioneers, lower risk) and disadvantages (entrenched incumbents).',
          'Apply to 8ta as a late entrant against established SA operators.',
          'Reasoned judgement.',
        ],
        markingLogic: ['Pioneer vs late contrast: ~10.', 'Applied to 8ta/SA telecoms: ~8.', 'Judgement: ~2.'],
        commonMistakes: ['Generic first-mover discussion with no 8ta application.'],
        paragraphStructure: 'Pioneer vs late > apply to 8ta > judgement.',
      },
    ],
  },

  // NOTE: MM Paper 3 in the scanned set (pages 6-9) is an exact reprint of
  // mm-paper-1 (McConnell's). It is intentionally not duplicated here.

  {
    id: 'mm-paper-4',
    module: 'mm',
    title: 'The Equity and Diversity Programme (DTI) \u2013 Marketing Research Focus',
    paperRef: 'Section A (DTI, SA, research design) + Section B (research methods)',
    totalMarks: 100,
    saContext: true,
    frequency: 'Medium',
    sourceStatus: 'Uploaded MANCOSA MM past paper (research-methods focused, SA DTI case). Transcribed from scan.',
    caseSummary:
      'A South African Department of Trade and Industry extract on its equity and diversity programme is used as the basis for a research-design paper: formulating a research title, research questions and problem, conducting a literature review, and choosing methodology and sampling.',
    keyFacts: [
      'SA public-sector case (DTI equity targets) used as a research scenario (SA context).',
      'Paper centres on marketing/business research design and methodology.',
      'Aligns with MM Units 3 and 4 (gathering information; marketing research).',
    ],
    keyProblem: 'Designing rigorous marketing/business research: questions, problem, literature, philosophy, methods and sampling.',
    questions: [
      {
        id: 'mm-p4-q1', number: 'Question 1', section: 'A', marks: 20,
        commandWords: ['Formulate', 'Outline'],
        prompt: 'Formulate a research title for the extract and outline eight research questions to solve the research problem.',
        unitIds: ['mm-4', 'mm-3'], theoryIds: [],
        recommendedTheories: ['mm-research-process'],
        answerPlan: [
          'Write a clear, focused research title naming variables and context (equity/diversity at the DTI).',
          'Outline eight research questions that are specific, researchable and aligned to the title.',
        ],
        markingLogic: ['Appropriate, specific title: ~4.', 'Eight aligned, researchable questions: ~16 (~2 each).'],
        commonMistakes: ['Vague title; questions that are not researchable or not aligned to the title.'],
        paragraphStructure: 'Title > eight aligned research questions.',
      },
      {
        id: 'mm-p4-q2', number: 'Question 2', section: 'A', marks: 20,
        commandWords: ['State', 'Substantiate'],
        prompt: 'State the research problem and substantiate it with important literature.',
        unitIds: ['mm-4'], theoryIds: [],
        recommendedTheories: ['mm-research-process'],
        answerPlan: [
          'State a clear research problem (the gap/issue the study addresses).',
          'Substantiate with current (2020+) literature showing why the problem matters.',
          'Link problem to objectives.',
        ],
        markingLogic: ['Clear problem statement: ~6.', 'Substantiated with literature: ~12.', 'Linked to objectives: ~2.'],
        commonMistakes: ['Describing the topic instead of stating a problem.', 'No supporting literature.'],
        paragraphStructure: 'Problem statement > literature substantiation > objective link.',
      },
      {
        id: 'mm-p4-q3', number: 'Question 3 (3.1, 3.2)', section: 'B', marks: 20,
        commandWords: ['Search', 'Write'],
        prompt: '3.1 Find five academic articles (\u22643 years old) on diversity and equity (10). 3.2 Write a 500-word literature review referencing them (10).',
        unitIds: ['mm-4'], theoryIds: [],
        recommendedTheories: ['mm-research-process'],
        answerPlan: [
          'Identify five recent (2020+) peer-reviewed sources (respect the brief: no blogs/Wikipedia).',
          'Synthesise (not summarise) themes across the five; reference each using MANCOSA Harvard in-text style.',
          'Show agreement, disagreement and the gap.',
        ],
        markingLogic: ['Five recent academic sources: ~10.', 'Synthesised 500-word review with correct referencing: ~10.'],
        commonMistakes: ['Listing article summaries instead of synthesising.', 'Using non-academic sources.'],
        paragraphStructure: 'Five sources > synthesised themes > gap, with in-text citations.',
      },
      {
        id: 'mm-p4-q4', number: 'Question 4', section: 'B', marks: 20,
        commandWords: ['Critically discuss', 'Illustrate'],
        prompt: 'Critically discuss, with examples, the difference between interpretivism and positivism research philosophies.',
        unitIds: ['mm-4'], theoryIds: [],
        recommendedTheories: ['mm-research-philosophy'],
        answerPlan: [
          'Positivism: objective reality, quantitative, hypothesis testing, generalisable.',
          'Interpretivism: socially constructed reality, qualitative, meaning/context, depth.',
          'Contrast on ontology, epistemology, methods, with an example of each.',
          'Critically note when each is appropriate.',
        ],
        markingLogic: ['Positivism explained: ~6.', 'Interpretivism explained: ~6.', 'Contrast + examples: ~6.', 'Appropriateness judgement: ~2.'],
        commonMistakes: ['Defining both but not contrasting.', 'No examples.'],
        paragraphStructure: 'Positivism > interpretivism > contrast + examples > appropriateness.',
      },
      {
        id: 'mm-p4-q5', number: 'Question 5 (5.1, 5.2)', section: 'B', marks: 20,
        commandWords: ['Discuss'],
        prompt: '5.1 Circumstances where mixed methods are appropriate (10). 5.2 How to ensure research is conducted ethically (10).',
        unitIds: ['mm-4'], theoryIds: [],
        recommendedTheories: ['mm-research-philosophy'],
        answerPlan: [
          '5.1 Mixed methods rationale: triangulation, complementarity, when one method is insufficient, breadth + depth.',
          '5.2 Research ethics: informed consent, confidentiality/anonymity, voluntary participation, no harm, integrity, ethics approval.',
        ],
        markingLogic: ['5.1 mixed-methods circumstances: ~10.', '5.2 ethics principles explained: ~10.'],
        commonMistakes: ['Listing ethics terms without explanation.'],
        paragraphStructure: 'Mixed-methods circumstances > ethics principles.',
      },
      {
        id: 'mm-p4-q6', number: 'Question 6 (6.1, 6.2)', section: 'B', marks: 20,
        commandWords: ['Discuss', 'Outline', 'Justify'],
        prompt: '6.1 Probability vs non-probability sampling re problem formulation (10). 6.2 Outline and justify four statistical tests for the study hypotheses (10).',
        unitIds: ['mm-4'], theoryIds: [],
        recommendedTheories: ['mm-research-philosophy'],
        answerPlan: [
          '6.1 Probability (random, generalisable) vs non-probability (purposive/convenience, not generalisable); when each fits the problem.',
          '6.2 Four tests (e.g. t-test, chi-square, ANOVA, correlation/regression) with a justification for each.',
        ],
        markingLogic: ['6.1 sampling contrast: ~10.', '6.2 four tests outlined + justified: ~10.'],
        commonMistakes: ['Naming tests without justifying their use against a hypothesis type.'],
        paragraphStructure: 'Probability vs non-probability > four tests + justification.',
      },
    ],
  },

  {
    id: 'mm-paper-5',
    module: 'mm',
    title: 'Massmart CEO Shares Business Insights After 100 Days',
    paperRef: 'Section A (Massmart/Game, SA) + Section B',
    totalMarks: 100,
    saContext: true,
    frequency: 'High',
    sourceStatus: 'Uploaded MANCOSA MM past paper (SA retail/Massmart case). Transcribed from scan.',
    caseSummary:
      "Massmart's new (Walmart-appointed) CEO shares 100-day insights on competing in South African retail through private-label value (e.g. Camp Master), procurement scale, cost discipline and revitalising the Game value proposition.",
    keyFacts: [
      'Massmart is a major SA retailer; Game is a key format (SA context).',
      'Private-label and supplier-development used for value (e.g. R99 cooler box).',
      'Strategy framed around growth, cost control and customer value.',
    ],
    keyProblem: 'Building a strong, diversified retail group through growth strategy, value, channels and pricing.',
    questions: [
      {
        id: 'mm-p5-q1', number: 'Question 1', section: 'A', marks: 20,
        commandWords: ['Advise'],
        prompt: 'Advise the CEO on the four intensive growth strategies to build the strongest, healthiest retail group.',
        unitIds: ['mm-2', 'mm-9'], theoryIds: [],
        recommendedTheories: ['mm-ansoff'],
        workedSolution:
`**Introduction.** Intensive growth pursues fuller exploitation of current products and markets before diversifying. The Ansoff product-market matrix sets out four intensive strategies along two axes, existing versus new products and existing versus new markets (Kotler and Armstrong, 2020).

**The four strategies.** (1) *Market penetration* (existing products, existing markets): grow share with current customers through pricing, promotion, loyalty and availability \u2014 for Massmart, driving more sales of current ranges in existing Game stores. (2) *Market development* (existing products, new markets): take current ranges to new geographies or segments, such as expanding Game formats into new African markets or new customer segments. (3) *Product development* (new products, existing markets): launch new or improved products to current customers, for example extending the private-label range to existing shoppers. (4) *Diversification* (new products, new markets): the most risky, entering new products and markets together (Kotler and Armstrong, 2020).

**Advice for Massmart.** The lowest-risk path to a "strongest and healthiest" group is to lead with market penetration (leveraging procurement scale and private-label value to win share), supported by product development (expanding private labels) and selective market development across the continent, reserving diversification for where capabilities transfer (MANCOSA MM Module Guide, 2026).

**Conclusion.** Ansoff gives the CEO a risk-ordered growth agenda: exploit the core first, extend products and markets next, and diversify only where the group has a genuine advantage (Kotler and Armstrong, 2020).`,
        answerPlan: [
          'Introduce the Ansoff matrix.',
          'Explain market penetration, market development, product development, diversification.',
          'Advise Massmart on the risk-ordered sequence with examples.',
        ],
        markingLogic: ['Ansoff framed: ~3.', 'Four strategies explained: ~10.', 'Applied advice to Massmart: ~7.'],
        commonMistakes: ['Listing the four without applying to Massmart.', 'Confusing diversification with market development.'],
        paragraphStructure: 'Ansoff matrix > four strategies > Massmart advice.',
      },
      {
        id: 'mm-p5-q2', number: 'Question 2', section: 'A', marks: 20,
        commandWords: ['Make a presentation', 'Discuss'],
        prompt: 'As marketing manager, present on private labels: why Massmart prefers them, and discuss private-label threats.',
        unitIds: ['mm-8', 'mm-10'], theoryIds: ['mm-branding'],
        recommendedTheories: ['mm-private-label'],
        answerPlan: [
          'Define private/store labels.',
          'Why preferred: higher margin, differentiation, customer loyalty, price control, value to customers.',
          'Threats: quality perception risk, supplier conflict, brand cannibalisation, reliance on retailer reputation.',
        ],
        markingLogic: ['Private labels defined: ~3.', 'Reasons preferred: ~9.', 'Threats discussed: ~8.'],
        commonMistakes: ['Benefits only, no threats.'],
        paragraphStructure: 'Define > reasons preferred > threats.',
      },
      {
        id: 'mm-p5-q3', number: 'Question 3', section: 'B', marks: 20,
        commandWords: ['Advise'],
        prompt: 'Advise a retail managing director on four broad environmental forces that could affect a transformation, with theory and examples.',
        unitIds: ['mm-3'], theoryIds: ['mm-environment'],
        recommendedTheories: ['mm-macro-environment'],
        answerPlan: [
          'Macro-environment forces (Kotler and Armstrong, 2020): demographic, economic, natural, technological, political-legal, socio-cultural; choose four most relevant to SA retail.',
          'For each: how it affects the transformation + an SA example.',
          'Note the firm must monitor and adapt.',
        ],
        markingLogic: ['Four forces explained: ~12.', 'SA examples + transformation link: ~6.', 'Monitoring/adaptation: ~2.'],
        commonMistakes: ['Confusing macro forces with the micro-environment (competitors/suppliers).'],
        paragraphStructure: 'Four macro forces > effect + SA example each > adapt.',
      },
      {
        id: 'mm-p5-q4', number: 'Question 4', section: 'B', marks: 20,
        commandWords: ['Critically discuss'],
        prompt: 'As a retail marketing manager, critically discuss how you would integrate different channel systems as new wholesaling/retailing institutions evolve.',
        unitIds: ['mm-13'], theoryIds: [],
        recommendedTheories: ['mm-channels'],
        answerPlan: [
          'Define marketing channels and channel integration (multichannel/omnichannel; VMS).',
          'Discuss integrating physical, online and emerging channels; managing conflict and consistency.',
          'Critically weigh benefits vs complexity/cost.',
        ],
        markingLogic: ['Channels/integration defined: ~5.', 'Integration approach discussed: ~11.', 'Critical weighing: ~4.'],
        commonMistakes: ['Listing channels without addressing integration or conflict.'],
        paragraphStructure: 'Define channels > integration approach > critical weighing.',
      },
      {
        id: 'mm-p5-q5', number: 'Question 5', section: 'B', marks: 20,
        commandWords: ['Critically discuss'],
        prompt: 'For a company of choice, critically discuss how it adjusts prices for different customers and situations.',
        unitIds: ['mm-12'], theoryIds: ['mm-pricing'],
        answerPlan: [
          'Price-adjustment strategies (Kotler and Armstrong, 2020): discount/allowance, segmented, psychological, promotional, geographical, dynamic, international pricing.',
          'Apply to a chosen company with examples.',
          'Critically note risks (margin erosion, perceived unfairness).',
        ],
        markingLogic: ['Adjustment strategies explained: ~10.', 'Applied to company: ~8.', 'Critical risks: ~2.'],
        commonMistakes: ['Listing strategies with no application or critique.'],
        paragraphStructure: 'Adjustment strategies > apply to company > risks.',
      },
      {
        id: 'mm-p5-q6', number: 'Question 6', section: 'B', marks: 20,
        commandWords: ['Advise'],
        prompt: 'For a leading African grocery retailer entering three West African markets, advise on suitable market-entry mode strategies, with theory and examples.',
        unitIds: ['mm-16'], theoryIds: [],
        recommendedTheories: ['mm-global-entry'],
        answerPlan: [
          'Entry modes (Kotler and Armstrong, 2020): exporting, licensing/franchising, joint venture, direct investment; rising commitment/risk/control.',
          'Advise which suit West African grocery entry and why (regulation, local knowledge, risk).',
          'Recommend with justification.',
        ],
        markingLogic: ['Entry modes explained: ~10.', 'Advice applied to West Africa: ~8.', 'Justified recommendation: ~2.'],
        commonMistakes: ['Listing modes without recommending a suitable one.'],
        paragraphStructure: 'Entry modes > suitability for West Africa > recommendation.',
      },
    ],
  },

  {
    id: 'mm-paper-6',
    module: 'mm',
    title: 'Red Bull: Integrated Marketing Communications',
    paperRef: 'Section A + Section B (IMC / branding case)',
    totalMarks: 100,
    saContext: false,
    frequency: 'High',
    sourceStatus: 'Uploaded MANCOSA MM past paper (Red Bull IMC case). Section split inferred from format; source status: requires verification for exact A/B division.',
    caseSummary:
      'A case on Red Bull\u2019s integrated marketing communications: building a billion-dollar energy-drink category through event sponsorship, seeding, opinion leaders, point-of-purchase and an "anti-marketing" image aligned to its young, rebellious target audience.',
    keyFacts: [
      'Red Bull built the energy-drink category through IMC, not traditional ads first.',
      'Tactics: event sponsorship, seeding, opinion leaders, POP, sampling at usage occasions.',
      'Brand image of authenticity, originality and community.',
    ],
    keyProblem: 'Using integrated marketing communications, branding and sales structure to build and defend a category.',
    questions: [
      {
        id: 'mm-p6-q1', number: 'Question 1', section: 'A', marks: 20,
        commandWords: ['Explain'],
        prompt: 'Explain what you regard as Red Bull\u2019s greatest strengths as competitors (Coca-Cola, Pepsi, Monster) enter the energy-drink category.',
        unitIds: ['mm-8', 'mm-9'], theoryIds: ['mm-branding'],
        answerPlan: [
          'Identify strengths: strong brand equity/identity, category creator/first-mover, IMC and experiential marketing, loyal youth community, distribution.',
          'Explain why each is hard for rivals to copy.',
        ],
        markingLogic: ['Strengths identified: ~8.', 'Explained as defensible advantages: ~10.', 'Link to competition: ~2.'],
        commonMistakes: ['Listing strengths without explaining defensibility.'],
        paragraphStructure: 'Strengths > why defensible > competitive relevance.',
      },
      {
        id: 'mm-p6-q2', number: 'Question 2', section: 'A', marks: 20,
        commandWords: ['Write a report', 'Outline'],
        prompt: 'As a consultant, report on the contents of a sales-force design for Red Bull.',
        unitIds: ['mm-14'], theoryIds: ['mm-imc'],
        recommendedTheories: ['mm-sales-force'],
        answerPlan: [
          'Sales-force design elements (Kotler and Armstrong, 2020): structure (territorial/product/customer), size, strategy, recruitment/selection, training, compensation, supervision, evaluation.',
          'Apply to Red Bull (e.g. van-driver merchandising teams, POP focus).',
        ],
        markingLogic: ['Design elements covered: ~14.', 'Applied to Red Bull: ~6.'],
        commonMistakes: ['Describing selling generally, not a sales-force design.'],
        paragraphStructure: 'Design elements > apply to Red Bull.',
      },
      {
        id: 'mm-p6-q3', number: 'Question 3', section: 'B', marks: 20,
        commandWords: ['Critically assess'],
        prompt: 'As marketing manager, critically assess the growth opportunities you are pursuing for a company of choice.',
        unitIds: ['mm-2', 'mm-9'], theoryIds: [],
        recommendedTheories: ['mm-ansoff'],
        answerPlan: ['Use the Ansoff matrix (see Paper 5 Q1 worked solution); critically assess each option\u2019s risk/return for the chosen firm.'],
        markingLogic: ['Ansoff applied: ~12.', 'Critical assessment of options: ~6.', 'Recommendation: ~2.'],
        commonMistakes: ['No critical assessment / risk weighting.'],
        paragraphStructure: 'Ansoff options > critical risk/return assessment > recommendation.',
      },
      {
        id: 'mm-p6-q4', number: 'Question 4 (4.1, 4.2)', section: 'B', marks: 20,
        commandWords: ['Critically discuss'],
        prompt: '4.1 Advantages marketing managers have in observing the environment (10). 4.2 Components of a marketing information system (10).',
        unitIds: ['mm-3', 'mm-4'], theoryIds: ['mm-environment'],
        recommendedTheories: ['mm-mis'],
        answerPlan: [
          '4.1 Why marketers are best placed for environmental scanning (customer/market contact, intelligence systems).',
          '4.2 MIS components (Kotler and Armstrong, 2020): internal records, marketing intelligence, marketing research, and decision-support/analysis.',
        ],
        markingLogic: ['4.1 environmental-scanning advantages: ~10.', '4.2 MIS components explained: ~10.'],
        commonMistakes: ['Confusing a marketing information system with a general IT system.'],
        paragraphStructure: '4.1 scanning advantages > 4.2 MIS components.',
      },
      {
        id: 'mm-p6-q5', number: 'Question 5', section: 'B', marks: 20,
        commandWords: ['Critically analyse'],
        prompt: 'Critically analyse the alternative pricing objectives a company may pursue.',
        unitIds: ['mm-12'], theoryIds: ['mm-pricing'],
        answerPlan: [
          'Pricing objectives: survival, profit/return maximisation, market-share leadership, product-quality leadership, status quo.',
          'Critically analyse trade-offs and when each is appropriate.',
        ],
        markingLogic: ['Objectives explained: ~12.', 'Critical analysis of trade-offs: ~6.', 'Conclusion: ~2.'],
        commonMistakes: ['Listing objectives without critique.'],
        paragraphStructure: 'Pricing objectives > trade-offs > appropriateness.',
      },
      {
        id: 'mm-p6-q6', number: 'Question 6', section: 'B', marks: 20,
        commandWords: ['Assist', 'Conduct'],
        prompt: 'Refining attractive ideas into testable concepts: assist a company to conduct concept development and testing for a new product.',
        unitIds: ['mm-15'], theoryIds: [],
        recommendedTheories: ['mm-npd'],
        answerPlan: [
          'Distinguish idea, concept and image.',
          'Concept development: turn the idea into detailed consumer concepts.',
          'Concept testing: present concepts to target consumers, gather reactions, refine; place within the NPD process.',
        ],
        markingLogic: ['Idea vs concept distinction: ~4.', 'Concept development: ~8.', 'Concept testing: ~8.'],
        commonMistakes: ['Describing the whole NPD process instead of concept development and testing specifically.'],
        paragraphStructure: 'Idea vs concept > development > testing.',
      },
    ],
  },
];
