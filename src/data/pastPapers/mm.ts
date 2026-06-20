// src/data/pastPapers/mm.ts
// MM Past Paper Intelligence. Derived from the uploaded scanned MM exam set.
// The 16-page MM file contains FIVE distinct papers; the McConnell's paper is
// printed twice (pages 1-3 and 6-9), so it is represented once here.
// Mapped to the MANCOSA MM Module Guide (2026) units 1-17.
//
// Referencing note: Kotler and Armstrong (2020) is the 2020+ prescribed text and
// is used for in-text support. Kotler and Armstrong (2020) appears in the data layer
// but is PRE-2020; per the brief it is avoided in worked solutions in favour of
// Kotler and Armstrong (2020) and the MM Module Guide (2026).
//
// Source status (all papers): Verbatim copies of the uploaded MANCOSA MM past
// papers (scanned images). Question wording transcribed from those images.

import type { PastPaper } from '../../types/pastPapers';

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
        workedSolution:
`**Introduction.** Going global is a major strategic decision that weighs growth opportunity against added risk (Kotler and Armstrong, 2020).

**1.1 Reasons to venture into global markets, and SA specifically.** Firms internationalise to escape saturation and slow growth in the home market, to win new revenue and customers, and to exploit economies of scale that lower unit cost. Global expansion spreads risk across markets so that a downturn in one economy is offset elsewhere. A heritage brand such as McConnell's also internationalises to exploit brand equity and country-of-origin appeal, and to follow demand where premium consumers exist. South Africa is attractive specifically because it has a growing premium-spirits segment, an established retail and on-trade distribution network, and serves as a gateway into the wider African market (MANCOSA MM Module Guide, 2026).

**1.2 Risks to weigh before going global.** Exchange-rate volatility erodes margins; political and economic instability raises uncertainty; cultural and taste differences may reject the product; excise, regulation and advertising restrictions on alcohol raise compliance cost; strong local competition and reliance on a distributor reduce control; and over-extension can dilute the brand.

**Critical conclusion.** The reasons are compelling for a premium heritage brand, but they are conditional: McConnell's should enter through a capable local partner, hedge currency exposure and adapt its marketing, so that the growth upside is not cancelled by avoidable risk (Kotler and Armstrong, 2020).`,
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
        workedSolution:
`**Introduction.** The country-of-origin (COO) effect is the influence that the country a product is made in or associated with has on consumer perceptions of its quality and value (Kotler and Armstrong, 2020).

**Assessing McConnell's Irish provenance.** Irish whiskey carries strong positive equity: a long craft heritage (the brand dates to 1776), associations of authenticity, tradition and quality, and a recognisable global category reputation. For McConnell's entering South Africa, this provenance functions as ready-made trust that a new brand would otherwise have to build over years. It directly supports a premium positioning, allowing higher price points and differentiation from local and mass-market spirits. It also gives the local distributor a clear, credible story for retailers and on-trade buyers, reducing the perceived risk of stocking an unknown label.

**Limits of the COO effect.** COO equity is not unconditional. It depends on the target consumer actually valuing Irish provenance; less informed buyers may not distinguish Irish from Scotch whisky. Stereotypes can also work against a brand, and provenance cannot compensate for poor taste fit, weak distribution or uncompetitive pricing.

**Conclusion.** McConnell's should lead its South African entry with its Irish heritage as the spine of its premium positioning, while supporting it with education, tasting activations and strong distribution so the COO advantage converts into trial and repeat purchase (MANCOSA MM Module Guide, 2026).`,
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
        workedSolution:
`**Introduction.** Consumer products are classified by how consumers buy them; each class implies a different marketing mix (Kotler and Armstrong, 2020).

**The four categories.** (1) *Convenience goods* are bought frequently, immediately and with minimal effort or comparison, and are price-sensitive: examples are bread, airtime and soft drinks. They need wide distribution and mass promotion. (2) *Shopping goods* are bought less often and consumers compare quality, price and style, investing real effort: examples are clothing, furniture and appliances. They need selective distribution and personal selling. (3) *Speciality goods* have unique characteristics or brand identity for which buyers will make a special effort and accept few substitutes, with low price sensitivity: examples are luxury cars, designer brands and premium whiskey. They need exclusive distribution and carefully targeted promotion. (4) *Unsought goods* are products the consumer does not know about or does not normally think of buying, such as life insurance or funeral cover; they require aggressive personal selling and advertising to create awareness.

**Conclusion.** The classification matters because purchasing behaviour drives mix design: convenience goods compete on availability and price, shopping goods on comparison and service, speciality goods on brand and exclusivity, and unsought goods on persuasion (Kotler and Armstrong, 2020).`,
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
        workedSolution:
`**Introduction.** A first-mover (pioneer) is the firm that first enters a market or commercialises a technology; for a network surpassing 5G, the pioneer carries both large advantages and large risks (Kotler and Armstrong, 2020).

**Pioneer advantages.** The first mover can win market leadership and define the category, set technical standards that rivals must follow, and build brand recognition as the innovator. It can lock in early customers through contracts, switching costs and network effects, move down the learning/experience curve to lower cost, and pre-empt scarce resources such as spectrum, sites and key partnerships.

**Pioneer disadvantages.** Pioneering a capital-intensive telecoms technology means very high R&D and infrastructure cost carried before revenue, and demand uncertainty about whether the market will adopt. Fast followers can free-ride on the pioneer's market education and avoid its mistakes at lower cost, and rapid technology shifts can strand early investment in a superseded standard.

**Appraisal.** For a revolutionary SA mobile network, the net position favours pioneering only if the firm can fund the build, secure spectrum and lock in customers fast enough to create durable network effects before fast followers arrive. Absent that, a fast-follower strategy may capture much of the value at far lower risk. The judgement is therefore conditional on financing and speed of customer lock-in (MANCOSA MM Module Guide, 2026).`,
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
        workedSolution:
`**Introduction.** Apple's iPhone is a market leader, and a leader's task is to keep its dominant share against constant attack (Kotler and Armstrong, 2020).

**Market-leader strategies.** Leaders defend position three ways: *expand total demand* (find new users, uses and more usage), *protect current share* through position, flanking, pre-emptive and counter-offensive defence, and *expand share* where profitable.

**Application to Apple.** Apple expands total demand by widening the iPhone into new segments and price tiers and by adding services. It protects share through a tightly integrated ecosystem (iOS, App Store, iCloud, Watch, AirPods) that raises switching costs, sustained product and design innovation, and a premium brand that supports loyalty and pricing power. It defends pre-emptively by controlling its supply chain and silicon.

**To what extent can pole position be retained?** The ecosystem and brand make Apple's lead durable in the premium tier, but the position is not unconditional. Smartphone markets are saturated with slowing replacement cycles; Android rivals compete hard on features and price; and antitrust and app-store regulation threaten the ecosystem lock-in that underpins Apple's defence.

**Conclusion.** Apple can retain leadership in the premium segment for the foreseeable future, but only by continuing to innovate, deepen services revenue and manage regulatory risk; its dominance is strong but not guaranteed (Kotler and Armstrong, 2020).`,
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
        workedSolution:
`**Introduction.** Porter's five forces assess the structural attractiveness of an industry; a prospective entrant to South African retail should use it to judge whether profits are defensible (Kotler and Armstrong, 2020).

**The five forces applied to SA retail.** (1) *Competitive rivalry* is intense: established groups such as Shoprite, Pick n Pay, Woolworths and Spar compete on price, footprint and private label, compressing margins. (2) *Threat of new entrants* is moderated by high barriers, scale economies, established supplier and property relationships and brand loyalty, which a newcomer must overcome. (3) *Threat of substitutes* is rising through e-commerce, informal traders and quick-commerce delivery. (4) *Bargaining power of buyers* is high: consumers are price-sensitive and switch easily between chains. (5) *Bargaining power of suppliers* varies; large FMCG manufacturers hold power, but dominant retailers also exert strong counter-power over smaller suppliers.

**Conclusion on attractiveness.** The combined picture is a structurally tough industry: strong rivalry, powerful buyers and high entry barriers make SA retail relatively unattractive for an undifferentiated new entrant. A newcomer should enter only with a clear differentiator (a niche format, a digital model or an underserved segment) that softens at least one force (MANCOSA MM Module Guide, 2026).`,
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
        workedSolution:
`**Introduction.** Marketing ethics concern the moral standards that should guide advertising, including truthfulness, non-deception and fairness (Kotler and Armstrong, 2020).

**Ethical implications of the advertising.** The central tension is between creative claims and consumer expectations: an advertisement that promises a sensory experience (a 'heavenly' chocolate flavour) raises an ethical question if the product does not match the impression created. Even where a claim is legally permissible, it may be ethically questionable if it misleads ordinary consumers or exploits emotional appeal. Legal compliance is the floor; ethical responsibility asks whether the brand has set honest expectations and protected consumer trust. Falling short risks regulatory complaints (for example to the advertising regulator), reputational damage and erosion of long-term brand equity.

**Advice: balancing creativity with customer expectation.** The firm should (1) substantiate any claim that consumers will read as factual; (2) use creative, aspirational language clearly understood as such rather than as a literal promise; (3) ensure labelling and product experience align with the advertised image; (4) pre-clear sensitive campaigns against advertising codes; and (5) treat long-term trust as worth more than a short-term creative win.

**Conclusion.** Creativity and ethics are not opposites: the strongest campaigns are imaginative and honest. Tiger Brands should let creativity dramatise a truthful benefit, never substitute for one (MANCOSA MM Module Guide, 2026).`,
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
        workedSolution:
`**Introduction.** Consumer perceptions shape brand trust and reputation, and expert or opinion-leader consumers exert influence far beyond their numbers (Kotler and Armstrong, 2020).

**Analysis: perception, trust and reputation.** Brand trust is built from consistent experiences that confirm the brand's promise; reputation is the aggregated, socially shared version of that trust. Expert consumers, reviewers and opinion leaders carry disproportionate weight because others treat their judgement as credible and because their views spread rapidly through word-of-mouth and social media. A negative expert perception can therefore cascade: it lowers trust among followers, is amplified online, and hardens into reputational damage that is costly to reverse. Positive expert endorsement works the same way in reverse, conferring credibility a brand cannot buy directly.

**Strategies to address negative perceptions.** The firm should (1) respond quickly and transparently rather than defensively; (2) fix the underlying product or service problem so the criticism loses its basis; (3) set realistic expectations so the gap between promise and experience narrows; (4) engage credible experts and satisfied advocates to rebalance the conversation; and (5) monitor sentiment continuously so issues are caught early.

**Conclusion.** Because expert perceptions drive reputation disproportionately, brand management must combine genuine product improvement with transparent, responsive communication and proactive influencer engagement (MANCOSA MM Module Guide, 2026).`,
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
        workedSolution:
`**Introduction.** Six months after launch, Amazon's SA branch should be judged on metrics that connect marketing activity to business objectives (Kotler and Armstrong, 2020).

**Five metrics, critically analysed.** (1) *Sales growth / market share* measures whether the branch is gaining ground; it links to the objective of establishing presence, but early figures can be flattered by launch promotions. (2) *Customer acquisition cost (CAC)* measures the marketing spend needed to win each customer; it links to efficient growth, but a low CAC may simply reflect discounting that is unsustainable. (3) *Customer lifetime value (CLV) and retention* measures whether acquired customers stay and repurchase; it links to durable profitability, but six months is too short to estimate CLV reliably. (4) *Conversion rate* measures how effectively traffic becomes orders; it links to commercial efficiency of the platform, but ignores order value. (5) *Customer satisfaction / NPS* measures experience quality; it links to reputation and retention, but is a leading indicator that must be paired with hard sales data.

**Conclusion.** No single metric is sufficient: acquisition metrics show reach, retention and CLV show durability, and satisfaction shows future risk. Amazon should read them together and weight retention and satisfaction more heavily as the launch period ends (MANCOSA MM Module Guide, 2026).`,
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
        workedSolution:
`**Introduction.** In the growth stage of the product life cycle, sales rise rapidly, profits improve and new competitors enter; the marketing mix shifts from creating awareness to building preference and share (Kotler and Armstrong, 2020).

**Assessing the growth-stage mix (e.g. a Samsung smartphone).** *Product:* the firm adds features, variants and improved quality to widen appeal and stay ahead of imitators, for example new models, storage tiers and camera upgrades. *Price:* pricing is set to penetrate and hold share against entrants; it may stay competitive or fall as volumes and economies of scale grow, while still capturing the early adopter premium where possible. *Place:* distribution is widened from selective to intensive, adding carriers, retailers and online channels to maximise availability as demand scales. *Promotion:* the emphasis moves from informative advertising (awareness) to persuasive advertising that builds brand preference and differentiates from rivals, supported by retailer and trade promotion.

**Critical note.** Growth-stage tactics aim to convert rising demand into durable market share before maturity, but aggressive expansion and feature proliferation raise cost and can cannibalise the firm's own range.

**Conclusion.** A growth-stage device succeeds by broadening the product line, widening distribution and shifting promotion to preference-building, so the firm banks share while the market is still expanding (Kotler and Armstrong, 2020).`,
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
        workedSolution:
`**Introduction.** The choice between pioneering a market and entering later is a strategic trade-off; for 8ta, a late entrant against entrenched SA mobile operators, the late-mover lens is decisive (Kotler and Armstrong, 2020).

**Pioneer advantages and disadvantages.** Pioneers can set standards, build brand leadership and lock in customers, but they bear high cost and demand uncertainty and educate the market for others.

**Late-entrant advantages and disadvantages.** A late entrant such as 8ta can learn from the pioneers' mistakes, adopt proven technology at lower cost, target gaps the incumbents left, and avoid the cost of educating the market. The offsetting disadvantage is severe: incumbents (Vodacom, MTN, Cell C) already hold the customer base, spectrum, distribution and brand loyalty, with high switching costs protecting them. The late entrant must overcome entrenched network effects and saturated demand.

**Critical assessment for 8ta.** As a late entrant, 8ta's realistic route to value was not to attack incumbents head-on but to exploit a differentiator (price, a specific segment, or Telkom's existing infrastructure and bundling). Late entry lowered technology risk but exposed 8ta to the much harder problem of taking share from established, loyal customer bases.

**Conclusion.** For 8ta the late-mover position offered cost and learning advantages but a weak competitive starting point; success depended on a clear differentiated niche rather than imitation (MANCOSA MM Module Guide, 2026).`,
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
        recommendedTheories: ['mm-research'],
        workedSolution:
`**Introduction.** A research title frames the study; research questions translate the problem into investigable parts (MANCOSA MM Module Guide, 2026).

**Suggested research title.** 'Employment equity and workforce diversity at the Department of Trade and Industry: an assessment of policy implementation and its effect on organisational outcomes.' The title names the variables (equity, diversity), the context (the DTI) and the focus (implementation and effect).

**Eight research questions.** (1) How is employment-equity policy currently implemented at the DTI? (2) To what extent is workforce diversity reflected across occupational levels? (3) What barriers hinder the achievement of equity and diversity targets? (4) How do employees perceive the fairness of equity practices? (5) What is the relationship between workforce diversity and team performance? (6) How effective are current monitoring and reporting mechanisms? (7) What role does leadership play in advancing equity and diversity? (8) What interventions would improve equity and diversity outcomes?

**Conclusion.** Each question is specific, researchable and aligned to the title, and together they move from describing the current state, through diagnosing barriers and perceptions, to recommending improvement, giving the study a clear logical structure (MANCOSA MM Module Guide, 2026).`,
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
        recommendedTheories: ['mm-research'],
        workedSolution:
`**Introduction.** A research problem states the specific gap or issue the study addresses and must be substantiated with current literature (MANCOSA MM Module Guide, 2026).

**Statement of the research problem.** Despite legislative frameworks on employment equity, organisations such as the DTI continue to experience uneven representation across occupational levels and uncertainty about whether diversity is translating into improved organisational outcomes. The problem is the gap between equity policy on paper and equitable, high-performing practice in reality, and the limited evidence on what drives that gap in the South African public sector.

**Substantiation from literature.** Recent scholarship (post-2020) on workforce diversity links well-managed diversity to better decision-making and innovation, while warning that representation without inclusion produces tokenism and disengagement. Studies of public-sector transformation note that policy compliance does not guarantee genuine inclusion, and that leadership commitment and monitoring quality are decisive. This literature establishes both that the problem matters (diversity affects performance and legitimacy) and that it is under-researched in this specific context.

**Link to objectives.** The problem justifies objectives to assess implementation, diagnose barriers, examine the diversity-performance link and recommend interventions.

**Conclusion.** The problem is significant, current and researchable, and the literature confirms a genuine gap between equity policy and equitable outcomes that the study can address (sources to be cited per the MANCOSA Referencing Guide, 2026, using peer-reviewed work from 2020 onward).`,
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
        recommendedTheories: ['mm-research'],
        workedSolution:
`**Introduction.** A literature review synthesises recent scholarship rather than summarising sources one by one (MANCOSA Referencing Guide, 2026).

**3.1 Sourcing (method, not the articles themselves).** Identify five peer-reviewed journal articles published within the last three years (2023 onward) on diversity and equity, located through academic databases (for example EBSCO, Emerald, Sabinet); blogs, Wikipedia and undated web pages are excluded per the brief. Each is recorded with full Harvard details for the reference list.

**3.2 Literature review (synthesis structure, ~500 words in submission).** Open by defining workforce diversity and employment equity and stating the review's scope. Then organise by theme, not by article: (a) *the business case* — recent studies associating well-managed diversity with innovation and decision quality; (b) *the inclusion gap* — work showing that representation without inclusion yields tokenism and turnover; (c) *implementation barriers* — leadership commitment, organisational culture and weak monitoring as recurring obstacles; and (d) *the public-sector context* — evidence on transformation and compliance in South African institutions. For each theme, show where authors agree, where they disagree, and what remains unresolved, citing each source in-text in Harvard style. Close by naming the gap the present study fills.

**Conclusion.** A strong review demonstrates command of current debate, integrates the five sources around themes, and justifies the study, rather than listing summaries (MANCOSA MM Module Guide, 2026).`,
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
        workedSolution:
`**Introduction.** Positivism and interpretivism are contrasting research philosophies that shape how reality is understood and studied (MANCOSA MM Module Guide, 2026).

**Positivism.** Positivism assumes a single, objective reality independent of the observer (realist ontology) and that knowledge comes from observable, measurable facts (objective epistemology). It favours quantitative methods, hypothesis testing, large samples and statistical generalisation. *Example:* a survey testing whether diversity scores correlate with measured team performance, producing generalisable numerical findings.

**Interpretivism.** Interpretivism assumes reality is socially constructed and multiple (relativist ontology) and that knowledge is built by interpreting the meanings people give to their experience (subjective epistemology). It favours qualitative methods, interviews and rich, context-bound understanding. *Example:* in-depth interviews exploring how DTI employees personally experience inclusion and fairness, producing deep but context-specific insight.

**Critical contrast.** Positivism offers breadth, replicability and generalisability but can strip out context and meaning; interpretivism offers depth and contextual insight but limited generalisability and greater researcher subjectivity. Neither is superior in the abstract: positivism suits 'how much / how many' questions, interpretivism suits 'how / why' questions.

**Conclusion.** The appropriate philosophy depends on the research question; a study seeking measurable relationships leans positivist, one seeking lived meaning leans interpretivist, and complex problems often justify combining both (MANCOSA MM Module Guide, 2026).`,
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
        workedSolution:
`**Introduction.** Method choice and ethics are both central to credible research (MANCOSA MM Module Guide, 2026).

**5.1 When mixed methods are appropriate.** Mixed methods combine quantitative and qualitative approaches and are appropriate when one method alone is insufficient. They suit (1) *triangulation*, where convergent findings from both methods strengthen validity; (2) *complementarity*, where numbers show the scale of a pattern and interviews explain why it occurs; (3) *development/sequencing*, where qualitative work shapes a survey instrument or survey results identify cases for deeper study; and (4) problems needing both breadth and depth, such as assessing equity outcomes (measurable) and lived experiences of inclusion (interpretive). They are less appropriate when time, budget or expertise are limited, since they are demanding to design and integrate.

**5.2 Ensuring ethical research.** The researcher must secure *informed consent* (participants understand purpose and agree freely), guarantee *voluntary participation* and the right to withdraw, protect *confidentiality and anonymity* of data, ensure *no harm* (physical, psychological or reputational), maintain *integrity and honesty* (no fabrication or plagiarism, accurate reporting), and obtain *ethics committee approval* before fieldwork, storing data securely.

**Conclusion.** Mixed methods are chosen where breadth and depth are both required, and ethical safeguards must protect participants and the integrity of the study throughout (MANCOSA MM Module Guide, 2026).`,
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
        workedSolution:
`**Introduction.** Sampling strategy and statistical tests must fit the research problem and hypotheses (MANCOSA MM Module Guide, 2026).

**6.1 Probability versus non-probability sampling.** *Probability sampling* gives every population member a known, non-zero chance of selection (for example simple random or stratified sampling). It supports representativeness and statistical generalisation, so it fits a problem that asks how widespread equity outcomes are across the workforce. *Non-probability sampling* selects participants by judgement or convenience (purposive, convenience, snowball). It cannot be generalised statistically but fits a problem that needs information-rich participants, such as senior managers who understand equity implementation. The choice follows the question: generalisable measurement leans probability; deep, targeted insight leans non-probability.

**6.2 Four statistical tests, justified.** (1) *Independent-samples t-test* — compares the means of two groups (for example performance of diverse versus less-diverse teams); justified for a two-group comparison. (2) *ANOVA* — compares means across three or more groups (for example across occupational levels); justified when more than two categories exist. (3) *Chi-square test* — examines association between categorical variables (for example demographic group and promotion outcome); justified for frequency data. (4) *Correlation/regression* — tests the strength and direction of the relationship between diversity and an outcome, and lets one variable predict another; justified for testing relationship hypotheses.

**Conclusion.** Sampling follows the generalisation requirement, and each test is selected to match the variable type and hypothesis being tested (MANCOSA MM Module Guide, 2026).`,
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
        workedSolution:
`**Introduction.** Private (store) labels are products manufactured for and sold under a retailer's own brand; large retailers such as Massmart increasingly prefer them (Kotler and Armstrong, 2020).

**Why Massmart prefers private labels.** (1) *Higher margins* — cutting out the national-brand manufacturer's marketing and brand premium lets the retailer earn more per unit. (2) *Differentiation* — exclusive products that competitors cannot stock distinguish the retailer. (3) *Customer loyalty* — a trusted store brand ties shoppers to the retailer, since the product is only available there. (4) *Price and supply control* — the retailer controls specification, pricing and sourcing. (5) *Customer value* — private labels offer comparable quality at lower prices, attractive to value-seeking SA shoppers.

**Threats of private labels.** (1) *Quality-perception risk* — if a store-brand product disappoints, it damages the whole retailer's reputation, not just one product. (2) *Supplier conflict* — national-brand suppliers may resist or retaliate when the retailer competes against them. (3) *Cannibalisation* — store brands can erode sales of higher-margin national brands the retailer also stocks. (4) *Brand dependence* — the store brand's success rests entirely on the retailer's own reputation. (5) *Limited innovation* — followers of national brands rather than category leaders.

**Conclusion.** Private labels strengthen margin, loyalty and differentiation, but the retailer absorbs the quality and reputational risk directly, so quality control and balanced assortment are essential (MANCOSA MM Module Guide, 2026).`,
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
        workedSolution:
`**Introduction.** The macro-environment is the set of broad, uncontrollable forces a firm must monitor and adapt to; four are most relevant to a South African retail transformation (Kotler and Armstrong, 2020).

**Four environmental forces, with SA examples.** (1) *Economic* — household income, inflation, interest rates and unemployment shape spending; in SA, pressure on disposable income pushes demand toward value formats and private labels, so the transformation must protect affordability. (2) *Technological* — e-commerce, mobile payment and data analytics reshape how customers shop; the retailer must invest in online and omnichannel capability to stay relevant. (3) *Socio-cultural* — changing demographics, lifestyles and a growing, diverse, increasingly health- and convenience-conscious consumer base affect assortment and store format. (4) *Political-legal* — regulation, B-BBEE, consumer-protection and labour law shape how the transformation can be executed and create both compliance cost and opportunity.

**Advice.** The managing director should scan these forces continuously, stress-test the transformation against each, and build flexibility so the firm adapts rather than reacts; for example pairing value pricing (economic) with digital investment (technological) and inclusive sourcing (political-legal).

**Conclusion.** Because these forces are uncontrollable, competitive advantage comes from monitoring and adapting to them faster than rivals, not from ignoring them (MANCOSA MM Module Guide, 2026).`,
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
        recommendedTheories: ['mm-marketing-mix'],
        workedSolution:
`**Introduction.** As wholesaling and retailing institutions evolve, channel integration becomes central; the manager must combine physical, online and emerging channels into a coherent system (Kotler and Armstrong, 2020).

**Channels and integration defined.** A marketing channel is the set of intermediaries that make a product available to consumers. Integration means coordinating multiple channels so they reinforce rather than conflict, evolving from *multichannel* (several separate channels) to *omnichannel* (a seamless experience across channels) and often formalised through a *vertical marketing system (VMS)* that aligns channel members under shared control.

**Critical discussion of integration.** Integrating stores, e-commerce, mobile, click-and-collect and emerging delivery models lets customers move freely between channels and gives the retailer unified data and consistent pricing and service. The benefits are wider reach, better customer experience and stronger loyalty. The costs are real: integration demands heavy IT investment, disciplined inventory and pricing consistency, and active management of *channel conflict* when online undercuts stores or partners. Complexity and coordination cost rise sharply, and poor execution produces a fragmented experience that erodes trust.

**Conclusion.** Channel integration is necessary as institutions evolve, but it is justified only where the retailer can fund the systems, keep experience consistent and manage conflict; integration is a capability to be built deliberately, not a feature switched on (MANCOSA MM Module Guide, 2026).`,
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
        workedSolution:
`**Introduction.** Firms rarely charge one fixed price; they adjust prices for different customers and situations to capture value and respond to demand (Kotler and Armstrong, 2020).

**Price-adjustment strategies (applied to a chosen retailer).** (1) *Discount and allowance pricing* — cash, quantity, seasonal and trade discounts reward desired behaviour (for example bulk or off-peak buying). (2) *Segmented pricing* — different prices for different customer groups, locations or times (student, pensioner or loyalty pricing). (3) *Psychological pricing* — prices set to influence perception (R99.99 rather than R100; premium prices signalling quality). (4) *Promotional pricing* — temporary cuts to drive traffic and clear stock. (5) *Geographical pricing* — prices varying with location and delivery cost. (6) *Dynamic pricing* — prices adjusted in real time to demand, common in online retail. (7) *International pricing* — prices set per market for cost, currency and competition.

**Critical note.** These tactics raise revenue and match price to willingness-to-pay, but carry risks: frequent discounting erodes margin and trains customers to wait; segmented and dynamic pricing can be perceived as unfair if not transparent; and psychological pricing can look manipulative.

**Conclusion.** Price adjustment should be used selectively and transparently, aligned to segment value, so that revenue gains do not come at the cost of margin or customer trust (Kotler and Armstrong, 2020).`,
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
        workedSolution:
`**Introduction.** Market-entry mode determines how much commitment, control and risk a firm takes when entering foreign markets; entry modes rise in commitment from exporting to direct investment (Kotler and Armstrong, 2020).

**Entry modes, applied to West African grocery entry.** (1) *Exporting* — selling from the home base, lowest cost and risk but least control and weak local presence; suitable only for an initial test of demand. (2) *Licensing/franchising* — granting local partners the right to operate the format; lower investment, fast roll-out and local knowledge, but reduced control over standards. (3) *Joint venture* — partnering with a local firm to share investment, risk and crucial local market and regulatory knowledge; well suited to unfamiliar West African markets where local relationships, supply chains and compliance matter. (4) *Direct (wholly owned) investment* — building or buying local operations; maximum control and profit but highest cost and risk.

**Advice.** For a leading African grocery retailer entering three West African markets, *joint ventures* are the most suitable lead mode: they secure local knowledge, share political and currency risk and ease regulatory access, while retaining meaningful control. Franchising can support faster scale-up once the model is proven, and direct investment only where a market becomes large and stable.

**Conclusion.** Recommend a staged approach: joint venture to enter and learn, then deeper commitment as confidence grows, matching mode to risk and local-knowledge needs (MANCOSA MM Module Guide, 2026).`,
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
        workedSolution:
`**Introduction.** As rivals like Coca-Cola, Pepsi and Monster enter the energy-drink category, Red Bull's defensible strengths are its hardest-to-copy assets (Kotler and Armstrong, 2020).

**Red Bull's greatest strengths.** (1) *Brand equity and identity* — Red Bull effectively created and still defines the category; its slogan, can and identity are globally recognised, which rivals cannot simply buy. (2) *First-mover and category leadership* — long lead time has built distribution, shelf presence and consumer habit. (3) *Experiential and content marketing* — Red Bull's investment in extreme sports, events and its own media builds an emotional brand world rather than competing on price; this is expensive and slow for rivals to replicate. (4) *Loyal youth community* — a strong emotional connection with a defined audience produces advocacy and repeat purchase. (5) *Distribution strength* — wide, intensive availability with dedicated merchandising.

**Why these are hard to copy.** Competitors can match formulation and price quickly, but cannot quickly replicate decades of brand meaning, an owned content ecosystem and an emotionally loyal community; these are intangible and path-dependent.

**Conclusion.** Red Bull's durable advantage lies less in the drink than in brand meaning, experiential marketing and loyalty; defending those, rather than entering a price war, is its best response to new entrants (MANCOSA MM Module Guide, 2026).`,
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
        workedSolution:
`**Introduction.** Designing a sales force means making structured decisions about its strategy, structure, size and management; this report outlines a sales-force design for Red Bull (Kotler and Armstrong, 2020).

**Sales-force design elements.** (1) *Strategy* — how the firm sells; for Red Bull, a field-based merchandising and trade-relationship model that secures visibility and placement in retail, on-trade and events. (2) *Structure* — territorial structure (reps own a geographic area) is efficient for intensive distribution, combined with a customer/account structure for key national retail chains. (3) *Size* — set using a workload approach: number of accounts multiplied by required call frequency and call length, divided by the time one rep has, gives the number of reps needed. (4) *Recruitment and selection* — energetic, brand-aligned people who fit the youthful brand. (5) *Training* — product, merchandising and relationship-selling skills. (6) *Compensation* — a base salary plus incentives tied to distribution, visibility and volume targets. (7) *Supervision and motivation* — clear call plans, sales-force automation and recognition. (8) *Evaluation* — measured on placement, distribution gains, sales and account development.

**Conclusion.** Red Bull's design should pair territorial coverage with key-account management, a workload-based size, and incentives linked to availability and visibility, because the brand competes on presence and merchandising as much as on the product itself (MANCOSA MM Module Guide, 2026).`,
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
        workedSolution:
`**Introduction.** Growth opportunities can be assessed with the Ansoff product/market expansion grid, which sets existing and new products against existing and new markets (Kotler and Armstrong, 2020).

**The four Ansoff options, critically assessed for a chosen firm.** (1) *Market penetration* (existing products, existing markets) — grow share through more usage, promotion and loyalty; lowest risk and quickest return, but limited headroom in a saturated market. (2) *Market development* (existing products, new markets) — enter new geographies or segments; moderate risk, leveraging proven products, but requires market knowledge and distribution. (3) *Product development* (new products, existing markets) — launch new or improved products to current customers; moderate risk, exploiting brand and relationships, but needs R&D and carries launch failure risk. (4) *Diversification* (new products, new markets) — highest risk and potential return; stretches the firm furthest from its core competence and should be pursued only with strong capability or to escape a declining core.

**Critical judgement.** The firm should prioritise penetration and development of proven products for reliable return, treat product development as the engine of medium-term growth, and approach diversification cautiously given its risk.

**Conclusion.** Ansoff orders growth options by risk: a balanced strategy banks low-risk penetration while selectively investing in development, reserving diversification for clear, capability-backed opportunities (MANCOSA MM Module Guide, 2026).`,
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
        recommendedTheories: ['mm-research'],
        workedSolution:
`**Introduction.** Marketers are well placed to scan the environment, and a marketing information system (MIS) turns that scanning into decision-ready insight (Kotler and Armstrong, 2020).

**4.1 Advantages marketers have in observing the environment.** Marketers sit at the boundary between the firm and its market, so they have direct, continuous contact with customers, channels and competitors. They run intelligence systems (sales data, research, social listening) that detect shifts early; they interpret customer needs and trends as part of their core role; and they are trained to convert weak signals (changing tastes, new entrants, regulation) into implications for the mix. This boundary position gives marketing earlier and richer environmental information than internally focused functions.

**4.2 Components of a marketing information system.** An MIS has four parts: (1) *internal records* — orders, sales, costs and inventory already inside the firm; (2) *marketing intelligence* — systematic gathering of everyday information about the external environment and competitors; (3) *marketing research* — structured studies designed to answer specific questions; and (4) *analysis and decision support* — the tools, models and analytics that turn data into insight and distribute it to managers.

**Conclusion.** Marketers' market-facing position makes them the firm's environmental sensors, and the MIS is the structured system that channels internal records, intelligence and research into better marketing decisions (Kotler and Armstrong, 2020).`,
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
        workedSolution:
`**Introduction.** Pricing objectives are the goals a firm pursues through price, and they must align with overall strategy (Kotler and Armstrong, 2020).

**The pricing objectives, critically analysed.** (1) *Survival* — when facing overcapacity, intense competition or a downturn, the firm prices to cover variable cost and stay operating; it is a short-term objective only, since prices below full cost are unsustainable. (2) *Profit (current return) maximisation* — set price to maximise current profit or return on investment; it can ignore long-run share and customer relationships if pushed too hard. (3) *Market-share leadership* — price low to win the largest share and exploit experience-curve cost advantages; it builds dominance but sacrifices near-term margin and can trigger price wars. (4) *Product-quality leadership* — premium pricing to signal and fund superior quality; it builds brand and margin but limits volume and exposes the firm if quality is not delivered. (5) *Status quo* — price to stabilise the market and avoid price competition; it protects margins but can leave the firm passive and vulnerable to disruptors.

**Conclusion.** Each objective trades off short-term profit, long-term share and brand positioning; the right choice depends on market conditions and strategy, and most firms shift objectives over the product life cycle rather than holding one (MANCOSA MM Module Guide, 2026).`,
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
        recommendedTheories: ['mm-marketing-mix'],
        workedSolution:
`**Introduction.** New-product development moves from raw ideas to tested concepts; concept development and testing refine attractive ideas before costly investment (Kotler and Armstrong, 2020).

**Idea, concept and image.** A *product idea* is a possible product the firm might offer. A *product concept* is a detailed version of that idea stated in meaningful consumer terms. A *product image* is the way consumers actually perceive the product. The task is to turn an idea into clear concepts and test how consumers perceive them.

**Concept development.** Take the attractive idea and build several alternative concepts that specify, in consumer language, who it is for, what benefit it delivers, when and how it is used and at what price level. For example, one electric-vehicle idea could become a concept aimed at eco-conscious city commuters and another aimed at premium long-distance buyers.

**Concept testing.** Present each concept (in words, images or prototypes) to a sample of target consumers and gather reactions: comprehension, believability, need fit, intention to buy and preferred features. Use the feedback to select and refine the strongest concept, discarding weak ones before development.

**Conclusion.** Concept development generates clear consumer-meaningful options and concept testing validates them against real target reactions, reducing the risk of launching a product the market does not want; this sits early in the NPD process, before marketing-strategy and business analysis (MANCOSA MM Module Guide, 2026).`,
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
