import type { UnitNotes } from '../types';

// Plain-language teaching notes for every IKM, OM and MM unit.
// Primary sources: MANCOSA module guides (2026) and prescribed textbooks
// (Kotler and Armstrong, 2020; Heizer, Render and Munson, 2020; Laudon and Laudon,
// 2023; Dalkir, 2022). Supplementary open references are labelled in each unit's sources.
export const UNIT_NOTES: Record<string, UnitNotes> = {
  "ikm-1": {
    "introduction": "This unit sets the foundation for the whole module: it explains what an information system actually is and why information has become the most valuable resource a modern business owns. An information system is simply the combination of people, processes and technology that collects raw facts, turns them into useful information, and helps people make decisions. The unit then shows how artificial intelligence (AI) is changing this picture, because AI lets systems not only store and report data but also learn from it and suggest or even make decisions.\n\nThe key mind-shift here is to stop thinking of IT as just computers and to start thinking of information as something that can give a business a real competitive edge. A firm that understands its data better than its rivals can serve customers better, cut costs and spot opportunities first.",
    "concepts": [
      {
        "concept": "Data, information, knowledge and wisdom (the DIKW hierarchy)",
        "explanation": "Data are raw, unorganised facts (numbers, names). Information is data that has been organised so it has meaning. Knowledge is information combined with experience so you know how to act on it. Wisdom is knowing the right thing to do over the long term. Each layer adds human judgement to the one below it.",
        "example": "A till records 500 sales (data). A report shows sales peak on Fridays (information). A manager knows to roster more staff on Fridays (knowledge). Over time the manager plans promotions around predictable peaks (wisdom)."
      },
      {
        "concept": "Information systems as a strategic resource",
        "explanation": "Information systems are not just support tools; used well they help a firm compete. They can lower costs, get closer to customers, speed up decisions and even create entirely new products and ways of doing business.",
        "example": "Capitec used simple, data-driven banking systems to offer cheaper, faster service and disrupt South Africa's big banks."
      },
      {
        "concept": "Artificial intelligence in business systems",
        "explanation": "AI is software that can learn patterns from data and make predictions or recommendations. In business it powers things like demand forecasting, fraud detection, chatbots and personalised recommendations, shifting systems from simply reporting the past to predicting and shaping the future.",
        "example": "An online store's AI notices what you browse and recommends products you are likely to buy, increasing sales without a human salesperson."
      }
    ],
    "application": "Everything later in the module builds on this unit. When you analyse a case, first ask what data the organisation has, whether it is being turned into useful information and knowledge, and whether the firm is using its systems strategically or just as plumbing.\n\nLink to theory: use the DIKW hierarchy to diagnose where an organisation gets stuck (often it drowns in data but never reaches knowledge), and use the strategic-objectives-of-information-systems view (Laudon and Laudon, 2023) to argue how a system delivers operational excellence, better decisions, customer intimacy, new products, competitive advantage or survival.",
    "map": [
      {
        "outcome": "Define IS and the data-to-wisdom progression",
        "content": "Nature of information systems; data vs information",
        "theory": "DIKW hierarchy"
      },
      {
        "outcome": "Explain IS as a source of advantage",
        "content": "Strategic role of IS; AI-driven business",
        "theory": "Strategic objectives of information systems (Laudon and Laudon, 2023)"
      },
      {
        "outcome": "Discuss AI's impact on systems",
        "content": "AI in decision-making",
        "theory": "DIKW hierarchy; IS for competitive advantage"
      }
    ],
    "sources": [
      "MANCOSA IKM Module Guide (2026)",
      "Laudon and Laudon (2023)",
      "supplementary: OpenStax Introduction to Business (2018) for foundational definitions"
    ]
  },
  "ikm-2": {
    "introduction": "This unit looks at how businesses no longer compete alone but as part of connected digital ecosystems. A digital business ecosystem is a web of organisations, customers, partners, platforms and technologies that interact and create value together, much like a natural ecosystem where many species depend on each other.\n\nThe central idea is that in the digital economy, value increasingly comes from connections and platforms rather than from one firm acting in isolation. Understanding this helps explain why platform businesses can grow so fast and why partnerships and data-sharing have become strategic.",
    "concepts": [
      {
        "concept": "Digital business ecosystem",
        "explanation": "A network of independent organisations and technologies that interact to deliver products and services. Each participant benefits from the others, and the platform at the centre coordinates the exchanges.",
        "example": "A food-delivery app connects restaurants, drivers, customers and payment providers; none could deliver the service alone, but together they form a thriving ecosystem."
      },
      {
        "concept": "Platforms and network effects",
        "explanation": "A platform is a digital foundation that lets others connect and transact. Network effects mean the platform becomes more valuable as more people use it, which makes successful platforms very hard for rivals to dislodge.",
        "example": "A marketplace like Takealot becomes more useful to buyers as more sellers join, and more attractive to sellers as more buyers arrive."
      },
      {
        "concept": "Value co-creation",
        "explanation": "Value is created jointly by many actors interacting, not produced by one firm and consumed by another. Customers, partners and even competitors can all contribute to the value that emerges.",
        "example": "App developers, advertisers and users together make a mobile platform valuable; the platform owner mostly sets the rules."
      }
    ],
    "application": "Use this unit when a case involves a platform, marketplace, partner network or digital transformation. Ask who the participants are, what the platform coordinates, and where the network effects and switching costs lie.\n\nLink to theory: the strategic-information-systems view (Laudon and Laudon, 2023) explains how ecosystem position and network effects create lasting competitive advantage that rivals struggle to copy.",
    "map": [
      {
        "outcome": "Explain digital business ecosystems",
        "content": "Ecosystem structure and participants",
        "theory": "IS for competitive advantage (Laudon and Laudon, 2023)"
      },
      {
        "outcome": "Analyse platforms and network effects",
        "content": "Platform strategy",
        "theory": "Strategic information systems"
      },
      {
        "outcome": "Discuss value co-creation",
        "content": "Collaborative value creation",
        "theory": "Service-ecosystem / co-creation thinking (supplementary: Vargo et al., 2022)"
      }
    ],
    "sources": [
      "MANCOSA IKM Module Guide (2026)",
      "Laudon and Laudon (2023)",
      "supplementary: Vargo et al. (2022) on service ecosystems"
    ]
  },
  "ikm-3": {
    "introduction": "This unit explains the difference between information and knowledge, and how organisations learn. Information is organised data that anyone can read; knowledge is what is in people's heads, built from experience, that tells them how to act. Much of an organisation's most valuable knowledge is tacit, meaning it is hard to write down.\n\nThe unit also introduces the idea of the learning organisation: a firm that deliberately builds its ability to learn and adapt faster than its rivals. This matters because in fast-changing markets, the ability to keep learning is itself a competitive advantage.",
    "concepts": [
      {
        "concept": "Tacit vs explicit knowledge",
        "explanation": "Explicit knowledge can be written down and shared easily (manuals, reports, databases). Tacit knowledge is personal know-how and intuition that is hard to express, so it spreads mainly through practice, mentoring and shared experience.",
        "example": "A recipe is explicit knowledge; a chef's feel for exactly when a sauce is ready is tacit and learned only by doing."
      },
      {
        "concept": "Knowledge conversion (the SECI spiral)",
        "explanation": "Nonaka and Takeuchi describe how knowledge grows by converting between tacit and explicit forms through socialisation (sharing experience), externalisation (writing tacit know-how down), combination (organising explicit knowledge) and internalisation (turning it back into personal skill).",
        "example": "A senior nurse mentors a junior (socialisation), they write a checklist (externalisation), it joins the ward manual (combination), and new staff practise until it becomes second nature (internalisation)."
      },
      {
        "concept": "The learning organisation",
        "explanation": "An organisation that continuously builds its capacity to learn, using Senge's five disciplines: personal mastery, challenging mental models, shared vision, team learning and systems thinking. The disciplines work together rather than separately.",
        "example": "A company that holds blame-free reviews after every project turns each success and failure into shared lessons, steadily out-learning competitors."
      }
    ],
    "application": "Use this unit whenever a case involves losing expertise when staff leave, struggling to share know-how across departments, or needing to adapt to change. Diagnose whether the problem is tacit knowledge that is not being captured or a culture that does not support learning.\n\nLink to theory: apply the tacit-explicit (SECI) model to explain how to capture and spread know-how, and Senge's learning-organisation disciplines to explain how a firm builds lasting adaptability.",
    "map": [
      {
        "outcome": "Distinguish information and knowledge",
        "content": "Knowledge types; tacit vs explicit",
        "theory": "Tacit vs explicit knowledge (SECI)"
      },
      {
        "outcome": "Explain knowledge creation",
        "content": "Knowledge conversion",
        "theory": "SECI model (Dalkir, 2022)"
      },
      {
        "outcome": "Describe organisational learning",
        "content": "Learning organisation",
        "theory": "Senge's five disciplines"
      }
    ],
    "sources": [
      "MANCOSA IKM Module Guide (2026)",
      "Dalkir (2022)",
      "Hislop, Bosua and Helms (2023)"
    ]
  },
  "ikm-4": {
    "introduction": "This unit covers how organisations keep their information safe, accurate, lawful and ethically used, which has become critical now that AI processes huge amounts of personal data. Information governance is the set of roles, rules and accountability that decides who owns information, how it is protected, how long it is kept and how it may be used.\n\nThe unit links security (keeping information safe) with ethics and law (using it responsibly). In South Africa this connects directly to the Protection of Personal Information Act (POPIA), which sets legal duties for handling personal data.",
    "concepts": [
      {
        "concept": "The CIA triad",
        "explanation": "The three core goals of information security: Confidentiality (only authorised people see data), Integrity (data stays accurate and unaltered) and Availability (authorised users can access data when needed). Good security balances all three.",
        "example": "An online bank encrypts statements (confidentiality), checks transactions are not tampered with (integrity), and keeps the app running during load-shedding (availability)."
      },
      {
        "concept": "Information governance",
        "explanation": "An organisation-wide framework that assigns ownership, standards and accountability for information so it is accurate, secure, compliant and used only for agreed purposes. It is a management responsibility, not just an IT task.",
        "example": "A retailer names data owners, sets retention rules and access controls so customer data is handled lawfully under POPIA and not misused."
      },
      {
        "concept": "Ethics and AI",
        "explanation": "Because AI makes decisions from data, it can be biased, opaque or invasive. Ethical use requires fairness, transparency, human oversight and respect for privacy, so automated decisions can be trusted and defended.",
        "example": "A bank tests its AI credit model for bias and keeps a human reviewer so loan decisions are fair and explainable."
      }
    ],
    "application": "Use this unit when a case involves a data breach, privacy concern, AI decision-making or compliance question. Identify which part of the CIA triad failed, whether governance roles and rules were in place, and what ethical or legal duties apply.\n\nLink to theory: use the CIA triad to structure a security analysis and the information-governance framework to recommend ownership, retention and accountability fixes.",
    "map": [
      {
        "outcome": "Explain information security goals",
        "content": "Security principles",
        "theory": "CIA triad"
      },
      {
        "outcome": "Apply governance frameworks",
        "content": "Information governance; POPIA",
        "theory": "Information governance (Laudon and Laudon, 2023)"
      },
      {
        "outcome": "Evaluate ethical AI use",
        "content": "Ethics in the AI era",
        "theory": "Information governance; AI ethics"
      }
    ],
    "sources": [
      "MANCOSA IKM Module Guide (2026)",
      "Laudon and Laudon (2023)",
      "POPIA (Republic of South Africa)"
    ]
  },
  "ikm-5": {
    "introduction": "This unit surveys the technologies and tools that help organisations capture, store, share and apply knowledge, collectively called knowledge management systems (KMS). The key lesson is that no single system does everything: different tools suit different kinds of knowledge.\n\nThe unit teaches you to match the technology to the need. Explicit knowledge suits repositories and search tools; tacit knowledge needs tools that connect people, such as expertise locators and collaboration platforms.",
    "concepts": [
      {
        "concept": "Types of knowledge management systems",
        "explanation": "KMS include document repositories (store explicit knowledge), expertise locators (find the right person to ask), collaboration platforms (let people work and share together) and learning systems. A complete KM solution usually blends several.",
        "example": "A consultancy uses a document library for past proposals, an expertise directory to find who knows about a sector, and a chat platform to discuss live problems."
      },
      {
        "concept": "Codification vs personalisation tools",
        "explanation": "Codification tools store knowledge as documents so it can be reused (good for routine, repeatable work). Personalisation tools connect people so tacit expertise can be shared through conversation (good for complex, bespoke work).",
        "example": "A firm doing standard tax returns relies on document templates; one doing complex advisory work relies on connecting experts."
      },
      {
        "concept": "Adoption and culture",
        "explanation": "Technology only delivers value if people actually use it. Adoption depends on training, incentives to share, and a culture that rewards contributing knowledge rather than hoarding it.",
        "example": "A repository sits empty until the firm recognises and rewards staff who contribute useful, reusable content."
      }
    ],
    "application": "Use this unit when a case involves choosing or fixing KM technology. First classify the knowledge (tacit or explicit, routine or complex), then recommend the matching tool, and always address adoption and culture, not just the software.\n\nLink to theory: use the types-of-KMS framework to match tools to needs and the codification-versus-personalisation strategy (linked to the next unit) to justify the choice.",
    "map": [
      {
        "outcome": "Describe KMS types",
        "content": "Repositories, expertise locators, collaboration tools",
        "theory": "Types of knowledge management systems"
      },
      {
        "outcome": "Match technology to knowledge",
        "content": "Codification vs personalisation",
        "theory": "KM strategy (codification vs personalisation)"
      },
      {
        "outcome": "Explain adoption factors",
        "content": "Culture and adoption",
        "theory": "Types of KMS; KM strategy"
      }
    ],
    "sources": [
      "MANCOSA IKM Module Guide (2026)",
      "Dalkir (2022)",
      "Laudon and Laudon (2023)"
    ]
  },
  "ikm-6": {
    "introduction": "This unit explains how to design and roll out a knowledge-management strategy so that KM effort actually supports business goals rather than becoming an aimless IT project. A KM strategy decides what knowledge matters most, how it will be captured and shared, and how success will be measured.\n\nA major theme is measurement: you cannot manage what you do not measure. The unit introduces tools like the Balanced Scorecard to link KM activities to strategic outcomes.",
    "concepts": [
      {
        "concept": "Knowledge-management strategy",
        "explanation": "A plan that aligns KM with business strategy by choosing a codification approach (reusing documented knowledge) or a personalisation approach (connecting experts), based on the kind of value the firm creates.",
        "example": "A firm competing on efficiency codifies best practices; one competing on bespoke expertise invests in connecting its specialists."
      },
      {
        "concept": "The Balanced Scorecard",
        "explanation": "A measurement framework that tracks performance across four perspectives: financial, customer, internal process, and learning and growth. It ensures intangible investments like knowledge and skills are measured alongside profit.",
        "example": "A company tracks not only revenue but also customer satisfaction, process speed and staff capability, so KM investment shows up in the scorecard."
      },
      {
        "concept": "Aligning KM with business goals",
        "explanation": "KM strategy must flow from business strategy: identify the knowledge that drives the firm's competitive advantage and focus KM resources there, rather than trying to capture everything.",
        "example": "A logistics firm whose edge is route optimisation focuses KM on capturing and reusing routing know-how."
      }
    ],
    "application": "Use this unit when a case asks how to start, justify or measure a KM programme. Recommend aligning KM to strategy, choosing the right codification or personalisation emphasis, and using a Balanced Scorecard to prove value.\n\nLink to theory: combine the KM-strategy framework with the Balanced Scorecard to show both what to do and how to measure whether it works.",
    "map": [
      {
        "outcome": "Develop a KM strategy",
        "content": "KM strategy design",
        "theory": "KM strategy (codification vs personalisation)"
      },
      {
        "outcome": "Align KM with strategy",
        "content": "Strategy alignment",
        "theory": "KM strategy; Balanced Scorecard"
      },
      {
        "outcome": "Measure KM performance",
        "content": "Measurement and metrics",
        "theory": "Balanced Scorecard"
      }
    ],
    "sources": [
      "MANCOSA IKM Module Guide (2026)",
      "Dalkir (2022)"
    ]
  },
  "ikm-7": {
    "introduction": "This unit scans the emerging trends reshaping information and knowledge management, so you can discuss where the field is heading. These include advanced AI and machine learning, big data analytics, automation, cloud and collaborative Web 2.0 tools, and the new ethical and governance challenges they bring.\n\nThe goal is not to predict the future exactly but to recognise the direction of travel: systems are becoming more intelligent, more connected and more central to how organisations compete and are governed.",
    "concepts": [
      {
        "concept": "AI, machine learning and big data",
        "explanation": "Machine learning lets systems find patterns in very large data sets (big data) and make predictions, moving KM from storing past knowledge to generating new insight automatically.",
        "example": "A retailer uses machine learning on sales and weather data to predict which products will sell where, before managers would have noticed the pattern."
      },
      {
        "concept": "Web 2.0 and collaborative tools",
        "explanation": "Interactive, user-driven tools such as wikis, blogs and social platforms let employees co-create and share knowledge easily, supporting socialisation and externalisation at low cost.",
        "example": "Staff across provinces co-write a living wiki of solutions so good practice spreads quickly."
      },
      {
        "concept": "New governance and ethical challenges",
        "explanation": "As systems grow more powerful and data-hungry, questions of privacy, bias, transparency and accountability become more pressing, making governance a permanent part of future IKM.",
        "example": "A firm adopting AI must build in bias checks and privacy safeguards from the start, not bolt them on later."
      }
    ],
    "application": "Use this unit for forward-looking or evaluate questions asking how trends will affect an organisation. Pick the relevant trends, explain the opportunity and the risk, and recommend how to prepare.\n\nLink to theory: use the strategic-IS view to argue how new technologies can create advantage, while drawing on governance and ethics to manage the accompanying risks.",
    "map": [
      {
        "outcome": "Identify future IKM trends",
        "content": "AI, big data, automation, Web 2.0",
        "theory": "Strategic information systems"
      },
      {
        "outcome": "Assess opportunities and risks",
        "content": "Emerging technologies",
        "theory": "IS for competitive advantage; information governance"
      },
      {
        "outcome": "Recommend preparation",
        "content": "Future readiness",
        "theory": "Strategic information systems"
      }
    ],
    "sources": [
      "MANCOSA IKM Module Guide (2026)",
      "Laudon and Laudon (2023)",
      "supplementary: Verhoef et al. (2021) on digital transformation"
    ]
  },
  "ikm-8": {
    "introduction": "This is the integrating, capstone unit. It asks you to pull together everything from earlier units and apply it to real case studies and consulting-style problems, just as the exam does. Rather than introducing many new ideas, it teaches you how to diagnose a messy real situation and recommend joined-up solutions.\n\nThe skill being built here is synthesis: reading a case, spotting which IKM concepts apply, and combining them into a coherent, referenced answer.",
    "concepts": [
      {
        "concept": "Diagnosing a case",
        "explanation": "Reading a scenario to identify the real problem (often a people, knowledge or governance issue disguised as a technology issue), the symptoms, and the underlying causes before recommending anything.",
        "example": "A firm blames its new software for poor adoption, but the real cause is no incentive to share knowledge and weak change management."
      },
      {
        "concept": "Integrating frameworks",
        "explanation": "Strong answers combine several frameworks rather than relying on one: for example using DIKW to show where value is lost, SECI to explain knowledge capture, governance to address risk, and the Balanced Scorecard to measure improvement.",
        "example": "A capstone answer on a struggling firm uses the KM cycle to diagnose, SECI to fix capture, and the scorecard to track results."
      },
      {
        "concept": "Consulting-style recommendations",
        "explanation": "Practical, prioritised recommendations that link each action to a diagnosed cause and a measurable outcome, in the order they should be tackled.",
        "example": "First fix governance and ownership, then capture tacit knowledge, then drive adoption with incentives, then measure with a scorecard."
      }
    ],
    "application": "This unit is the model for exam case questions across the module. Practise the routine: classify the problem, diagnose causes, integrate two or three frameworks, then give prioritised, referenced recommendations.\n\nLink to theory: draw on the full toolkit, DIKW, the KM cycle, KM strategy, strategic IS, information governance, the Balanced Scorecard and the learning organisation, choosing the frameworks that fit the case.",
    "map": [
      {
        "outcome": "Diagnose IKM problems in cases",
        "content": "Case analysis",
        "theory": "DIKW; KM cycle"
      },
      {
        "outcome": "Integrate multiple frameworks",
        "content": "Applied consulting",
        "theory": "KM strategy; strategic IS; information governance"
      },
      {
        "outcome": "Recommend and measure solutions",
        "content": "Capstone recommendations",
        "theory": "Balanced Scorecard; learning organisation"
      }
    ],
    "sources": [
      "MANCOSA IKM Module Guide (2026)",
      "Dalkir (2022)",
      "Laudon and Laudon (2023)"
    ]
  },
  "ikm-9": {
    "introduction": "This unit explains how good information and knowledge management make an organisation agile (able to change direction quickly), resilient (able to absorb shocks) and continuously innovative. The connecting idea is that well-managed information lets a firm sense change early and respond fast.\n\nA practical lens for this is business process management: by understanding and improving its processes, an organisation becomes both more efficient and more able to adapt them when conditions change.",
    "concepts": [
      {
        "concept": "Organisational agility and resilience",
        "explanation": "Agility is the ability to respond quickly to change; resilience is the ability to keep operating through disruption and recover. Both depend on timely, accurate information flowing to the right people.",
        "example": "During a supply shock, a firm with real-time stock and supplier data reroutes orders within days while rivals are still working out what happened."
      },
      {
        "concept": "Business process management (BPM)",
        "explanation": "A structured approach to mapping, analysing and improving the processes by which work gets done, so they are efficient and easy to change. Improving the process matters more than automating a broken one.",
        "example": "A claims department maps its workflow, removes duplicated approvals, and cuts processing time from weeks to days."
      },
      {
        "concept": "Continuous innovation",
        "explanation": "Steadily generating and applying new ideas by capturing, sharing and combining knowledge, rather than relying on occasional big breakthroughs.",
        "example": "A company that captures lessons from every project feeds them into the next, improving its products with each cycle."
      }
    ],
    "application": "Use this unit when a case involves disruption, slow response, inefficiency or the need to innovate. Show how better information flow and process improvement build agility and resilience.\n\nLink to theory: apply business process management to diagnose and redesign processes, and connect it to the learning-organisation idea to explain how the firm keeps improving.",
    "map": [
      {
        "outcome": "Explain agility and resilience",
        "content": "Agility, resilience, disruption",
        "theory": "Business process management"
      },
      {
        "outcome": "Apply process improvement",
        "content": "BPM and process redesign",
        "theory": "Business process management"
      },
      {
        "outcome": "Support continuous innovation",
        "content": "Innovation through knowledge",
        "theory": "BPM; learning organisation"
      }
    ],
    "sources": [
      "MANCOSA IKM Module Guide (2026)",
      "Laudon and Laudon (2023)",
      "supplementary: Smith and Fatorachian (2023) on resilience"
    ]
  },
  "ikm-10": {
    "introduction": "The final unit focuses on leadership and ethical stewardship: the responsibility of leaders to guide how knowledge and information are created, shared, protected and used for good. Technology and strategy only deliver value when leaders set the right culture, priorities and ethical standards.\n\nStewardship means treating information and knowledge as resources held in trust, to be looked after responsibly for the organisation, its people and wider society, not exploited carelessly.",
    "concepts": [
      {
        "concept": "Knowledge leadership",
        "explanation": "Leaders shape whether knowledge is shared or hoarded. By modelling openness, rewarding contribution and giving people time and tools to share, leaders build a knowledge-friendly culture.",
        "example": "A manager who openly shares lessons from a failed project signals that admitting and learning from mistakes is safe and valued."
      },
      {
        "concept": "Ethical stewardship and governance",
        "explanation": "Leaders are accountable for using information lawfully and ethically, respecting privacy, fairness and transparency, and ensuring governance is upheld across the organisation.",
        "example": "A leader insists that customer data collected for service is never quietly repurposed for unrelated marketing without consent."
      },
      {
        "concept": "Building a sustainable knowledge culture",
        "explanation": "A culture where sharing, learning and responsible use of information are normal and rewarded, so the organisation keeps improving and retains critical know-how as people come and go.",
        "example": "A firm builds mentoring and communities of practice into everyday work, so expertise stays even when individuals leave."
      }
    ],
    "application": "Use this unit for questions about leadership, culture, ethics or the human side of IKM. Argue that strategy and technology fail without leaders who build trust, share openly and govern responsibly.\n\nLink to theory: connect leadership and culture to information governance for the ethical and accountability dimension, and to the learning organisation for the culture of sharing and continuous learning.",
    "map": [
      {
        "outcome": "Explain knowledge leadership",
        "content": "Leadership in KM",
        "theory": "Information governance; learning organisation"
      },
      {
        "outcome": "Apply ethical stewardship",
        "content": "Ethics and accountability",
        "theory": "Information governance"
      },
      {
        "outcome": "Build a knowledge culture",
        "content": "Sustainable knowledge culture",
        "theory": "Learning organisation"
      }
    ],
    "sources": [
      "MANCOSA IKM Module Guide (2026)",
      "Dalkir (2022)",
      "Hislop, Bosua and Helms (2023)"
    ]
  },
  "om-1": {
    "introduction": "This unit introduces operations management: the part of a business that actually makes the products or delivers the services. It is about getting work done efficiently, reliably, at the right quality and at the right cost. Every organisation, from a factory to a hospital, has an operations function that turns inputs (people, materials, money, information) into outputs (goods and services) that customers value.\n\nThe unit's central measure is productivity, which compares how much output you get from the inputs you put in. Improving productivity means creating more value without simply spending more, which is the heart of operations management.",
    "concepts": [
      {
        "concept": "The transformation (input-output) process",
        "explanation": "Operations takes inputs and transforms them into outputs that are worth more than the inputs. Managing this transformation well is what creates value for customers and profit for the firm.",
        "example": "A bakery transforms flour, labour and oven time (inputs) into bread (output) that customers pay more for than the ingredients cost."
      },
      {
        "concept": "Productivity",
        "explanation": "Productivity = output divided by input. Single-factor productivity uses one input (like labour hours); multi-factor productivity uses several (labour, materials, energy, capital) for a fuller picture. Rising productivity means more value from the same resources.",
        "example": "If a team bakes 100 loaves in 10 hours, labour productivity is 10 loaves per hour; a better oven layout that yields 115 loaves in the same hours raises productivity."
      },
      {
        "concept": "Goods vs services",
        "explanation": "Goods are tangible and can be stored; services are intangible, often produced and consumed at the same time, and harder to standardise. Most operations involve a mix of both.",
        "example": "A restaurant sells a tangible meal (good) and the experience of being served (service) at once."
      }
    ],
    "application": "Use this unit to frame any operations question: identify the inputs, the transformation and the outputs, then ask how productivity could be improved without sacrificing quality. It underpins every later unit.\n\nLink to theory: use the productivity framework to measure and compare performance, and operations strategy (next unit) to decide which performance priorities matter most.",
    "map": [
      {
        "outcome": "Explain the operations function",
        "content": "Input-transformation-output",
        "theory": "Productivity and the transformation process"
      },
      {
        "outcome": "Measure productivity",
        "content": "Single- and multi-factor productivity",
        "theory": "Productivity"
      },
      {
        "outcome": "Distinguish goods and services",
        "content": "Nature of goods vs services",
        "theory": "Operations strategy"
      }
    ],
    "sources": [
      "MANCOSA OM Module Guide (2026)",
      "Heizer, Render and Munson (2020), Ch. 1",
      "supplementary: OpenStax Principles of Management (2019)"
    ]
  },
  "om-2": {
    "introduction": "This unit explains operations strategy: how the operations function supports the overall business strategy, especially when competing globally. A business cannot be the best at everything at once, so it must choose which operational priorities to excel at.\n\nThe key idea is alignment. Every operations decision, from where to locate to how much to automate, should reinforce the way the company has chosen to compete, whether that is on cost, quality, speed, flexibility or dependability.",
    "concepts": [
      {
        "concept": "Competitive priorities",
        "explanation": "The few things operations chooses to be best at: cost, quality, speed (delivery), flexibility and dependability. A firm picks the priorities its market rewards, because excelling at all simultaneously is rarely possible.",
        "example": "A budget airline prioritises low cost and dependability; a luxury tailor prioritises quality and flexibility."
      },
      {
        "concept": "Order-winners and order-qualifiers",
        "explanation": "Order-qualifiers are the minimum standards you must meet just to be considered; order-winners are the factors that actually make customers choose you. Operations should protect qualifiers and excel at winners.",
        "example": "For an airline, safety is a qualifier (everyone must have it); on-time performance or price may be the order-winner."
      },
      {
        "concept": "Global operations strategy",
        "explanation": "Operating across countries to gain advantages such as lower costs, access to markets, skills or resources, while managing the added complexity, risk and coordination that global supply chains bring.",
        "example": "A manufacturer makes components in several countries to cut cost and reach regional markets, but must manage shipping delays and currency risk."
      }
    ],
    "application": "Use this unit when a case involves strategic choices or competitiveness. Identify how the firm competes, check whether its operations decisions support that, and recommend alignment where they do not.\n\nLink to theory: use competitive priorities and order-winners/qualifiers to diagnose strategic fit, the same operations-strategy lens that runs through the whole module.",
    "map": [
      {
        "outcome": "Link operations to strategy",
        "content": "Operations strategy",
        "theory": "Operations strategy / competitive priorities"
      },
      {
        "outcome": "Identify order-winners",
        "content": "Order-winners and qualifiers",
        "theory": "Operations strategy"
      },
      {
        "outcome": "Analyse global operations",
        "content": "Global environment",
        "theory": "Operations strategy"
      }
    ],
    "sources": [
      "MANCOSA OM Module Guide (2026)",
      "Heizer, Render and Munson (2020), Ch. 2",
      "Slack, Jones and Burgess (2022)"
    ]
  },
  "om-3": {
    "introduction": "This unit covers quality and total quality management (TQM): making sure products and services consistently meet customer needs, and building quality in at every step rather than inspecting it at the end. Poor quality is expensive, through rework, returns, warranty claims and lost customers, so managing quality protects both reputation and profit.\n\nTQM is a company-wide philosophy: everyone, not just an inspection department, is responsible for quality and for continuously improving it.",
    "concepts": [
      {
        "concept": "Total quality management (TQM)",
        "explanation": "A whole-organisation approach where every employee continuously improves quality, driven by customer focus, teamwork and data. Quality is built into the process, not inspected in afterwards.",
        "example": "On a car line, each worker checks and improves their own step, so defects are caught immediately rather than at final inspection."
      },
      {
        "concept": "Continuous improvement (Kaizen) and PDCA",
        "explanation": "Steady, ongoing small improvements, often using the Plan-Do-Check-Act cycle: plan a change, try it, check the result, and act to standardise or adjust. Many small gains add up.",
        "example": "A team trials a new layout (plan-do), measures fewer delays (check), and makes it the new standard (act)."
      },
      {
        "concept": "Cost of quality",
        "explanation": "Quality has costs of prevention and appraisal (spent to get it right) and costs of failure (rework, scrap, returns, lost customers). Investing in prevention usually costs far less than paying for failures.",
        "example": "Spending on staff training and better tooling (prevention) is cheaper than mass product recalls (failure)."
      }
    ],
    "application": "Use this unit when a case involves defects, complaints, inconsistency or improvement programmes. Diagnose whether quality is being built in or merely inspected, and recommend TQM and continuous-improvement practices.\n\nLink to theory: apply the TQM philosophy and the cost-of-quality idea to justify prevention over inspection, connecting to the Six Sigma tools used for rigorous defect reduction.",
    "map": [
      {
        "outcome": "Explain TQM",
        "content": "Total quality management",
        "theory": "Total quality management (TQM)"
      },
      {
        "outcome": "Apply continuous improvement",
        "content": "Kaizen, PDCA",
        "theory": "TQM / continuous improvement"
      },
      {
        "outcome": "Evaluate cost of quality",
        "content": "Cost of quality",
        "theory": "TQM; Six Sigma"
      }
    ],
    "sources": [
      "MANCOSA OM Module Guide (2026)",
      "Heizer, Render and Munson (2020), Ch. 6",
      "Slack, Jones and Burgess (2022)"
    ]
  },
  "om-4": {
    "introduction": "This unit teaches forecasting: estimating future demand so the business can plan production, staffing, stock and capacity. Good forecasts prevent both shortages (lost sales) and excess (wasted money), even though no forecast is ever perfectly accurate.\n\nThe unit covers practical methods and, importantly, how to measure forecast error so you know whether your method is good enough and when to change it.",
    "concepts": [
      {
        "concept": "Time-series forecasting methods",
        "explanation": "Methods that use past demand to predict the future, such as moving averages, weighted moving averages and exponential smoothing. They assume the future will broadly resemble the recent past, adjusted for trend and seasonality.",
        "example": "A shop forecasts next month's sales as a weighted average of recent months, giving more weight to the most recent."
      },
      {
        "concept": "Trend and seasonality",
        "explanation": "Trend is a long-term upward or downward movement; seasonality is a regular pattern that repeats (for example festive-season spikes). Good forecasts account for both.",
        "example": "An ice-cream maker forecasts higher summer demand (seasonality) on top of steady yearly growth (trend)."
      },
      {
        "concept": "Forecast accuracy (MAD and tracking signal)",
        "explanation": "Mean Absolute Deviation (MAD) measures the average size of forecast errors; a tracking signal shows whether forecasts are consistently too high or too low. These tell you if a method can be trusted.",
        "example": "If MAD is large or the tracking signal keeps drifting, the forecaster switches to a better method."
      }
    ],
    "application": "Use this unit for any planning question involving uncertain demand. Choose a suitable method, account for trend and seasonality, and always check accuracy with MAD before relying on the forecast.\n\nLink to theory: apply the forecasting framework, and remember that calculation questions need the formula, the worked steps and a check of forecast error.",
    "map": [
      {
        "outcome": "Apply forecasting methods",
        "content": "Moving averages, smoothing",
        "theory": "Forecasting"
      },
      {
        "outcome": "Account for trend and seasonality",
        "content": "Trend and seasonal demand",
        "theory": "Forecasting"
      },
      {
        "outcome": "Measure forecast accuracy",
        "content": "MAD, tracking signal",
        "theory": "Forecasting"
      }
    ],
    "sources": [
      "MANCOSA OM Module Guide (2026)",
      "Heizer, Render and Munson (2020), Ch. 4"
    ]
  },
  "om-5": {
    "introduction": "This unit covers how goods and services are designed before they are made. Design decisions lock in most of a product's cost and quality, so getting design right early saves expensive changes later. The unit links what customers want to what engineers build.\n\nIt stresses designing for the customer and for ease of production at the same time, so a product is both desirable and economical to make.",
    "concepts": [
      {
        "concept": "Product design and development",
        "explanation": "The process of turning customer needs and ideas into a producible product, through stages from concept to detailed design, prototyping and launch. Early design choices set most of the lifetime cost.",
        "example": "A phone maker decides battery size and materials at design stage; changing them after launch is far more costly."
      },
      {
        "concept": "Quality function deployment (QFD)",
        "explanation": "A method for translating customer wants ('long battery life') into specific engineering requirements, so the product is designed around what customers actually value.",
        "example": "Customer demand for durability is converted into precise specifications for casing strength and water resistance."
      },
      {
        "concept": "Design for manufacturability",
        "explanation": "Designing products so they are easy, cheap and reliable to produce, by simplifying parts and considering the production process during design rather than after.",
        "example": "Reducing a product from 30 parts to 15 cuts assembly time, cost and defect opportunities."
      }
    ],
    "application": "Use this unit when a case involves new products, redesign or matching offerings to customer needs. Show how design choices affect cost, quality and manufacturability.\n\nLink to theory: apply the product-design framework and QFD to connect customer requirements to design, and tie it to process strategy because design and process must be planned together.",
    "map": [
      {
        "outcome": "Explain product design",
        "content": "Design and development process",
        "theory": "Design of goods and services"
      },
      {
        "outcome": "Apply QFD",
        "content": "Translating customer needs",
        "theory": "Design of goods and services (QFD)"
      },
      {
        "outcome": "Design for production",
        "content": "Manufacturability",
        "theory": "Design of goods and services; process strategy"
      }
    ],
    "sources": [
      "MANCOSA OM Module Guide (2026)",
      "Heizer, Render and Munson (2020), Ch. 5"
    ]
  },
  "om-6": {
    "introduction": "This unit covers process strategy (how work is organised to make the product) and capacity planning (how much the operation can produce). The two go together: the right process depends on the volume and variety of what you make, and capacity must match expected demand.\n\nThe core trade-off is between volume and variety: high-volume, low-variety work suits efficient assembly lines, while low-volume, high-variety work needs flexible processes.",
    "concepts": [
      {
        "concept": "Process types",
        "explanation": "Processes range from project and job-shop (high variety, low volume, flexible) through batch and repetitive to continuous (low variety, high volume, efficient). The right choice depends on the volume-variety mix.",
        "example": "Custom furniture uses a flexible job-shop process; mass-produced chairs use an efficient assembly line."
      },
      {
        "concept": "Capacity planning",
        "explanation": "Deciding how much the operation can produce. Design capacity is the theoretical maximum; effective capacity allows for realistic conditions. Utilisation and efficiency measure how well capacity is used.",
        "example": "A clinic calculates it can realistically see 40 patients a day (effective capacity), not the 50 the rooms could theoretically hold."
      },
      {
        "concept": "Matching capacity to demand",
        "explanation": "Capacity must balance the cost of having too much (idle resources) against the risk of too little (lost sales). Strategies include leading, lagging or tracking demand.",
        "example": "A water utility builds extra capacity ahead of population growth, accepting some spare capacity to avoid future shortages."
      }
    ],
    "application": "Use this unit when a case involves choosing how to produce, bottlenecks, or expansion decisions. Match the process to the volume-variety mix and check whether capacity fits demand before recommending investment.\n\nLink to theory: apply the process-strategy framework (volume-variety) together with capacity calculations to justify operational design choices.",
    "map": [
      {
        "outcome": "Select a process type",
        "content": "Process strategy",
        "theory": "Process strategy (volume-variety)"
      },
      {
        "outcome": "Calculate capacity",
        "content": "Capacity planning, utilisation",
        "theory": "Capacity planning"
      },
      {
        "outcome": "Match capacity to demand",
        "content": "Capacity strategy",
        "theory": "Capacity planning"
      }
    ],
    "sources": [
      "MANCOSA OM Module Guide (2026)",
      "Heizer, Render and Munson (2020), Ch. 7",
      "Slack, Jones and Burgess (2022)"
    ]
  },
  "om-7": {
    "introduction": "This unit covers location strategy: deciding where to put facilities such as factories, warehouses or stores. Location is a long-term, expensive decision that affects costs, delivery speed and access to customers, suppliers and labour for years.\n\nThe unit gives structured methods for weighing many factors so the choice is rational rather than based on a single consideration like cheap rent.",
    "concepts": [
      {
        "concept": "Location factors",
        "explanation": "The mix of factors that make a location good or bad: proximity to customers and suppliers, labour cost and availability, transport links, infrastructure, regulations and costs. The right weighting depends on the business.",
        "example": "An e-commerce warehouse weights proximity to customers and transport heavily; a mine is fixed by where the ore is."
      },
      {
        "concept": "Factor-rating method",
        "explanation": "A method that scores each candidate location against weighted factors and totals the scores, so subjective and objective factors can be compared fairly in one number.",
        "example": "Two sites are scored on transport, labour and cost; the weighted totals make the better overall choice clear."
      },
      {
        "concept": "Centre-of-gravity method",
        "explanation": "A technique for finding the location that minimises total transport cost to or from several points, by balancing the volumes and distances involved.",
        "example": "A distributor uses it to place a depot central to its biggest demand points, lowering total delivery cost."
      }
    ],
    "application": "Use this unit when a case involves choosing or evaluating a site. Identify the key factors, weight them by importance, and use factor-rating or centre-of-gravity logic rather than deciding on one factor alone.\n\nLink to theory: apply the location-strategy methods, remembering that location must also support the firm's competitive priorities (for example speed for an online retailer).",
    "map": [
      {
        "outcome": "Identify location factors",
        "content": "Location decision factors",
        "theory": "Location strategy"
      },
      {
        "outcome": "Apply factor rating",
        "content": "Factor-rating method",
        "theory": "Location strategy"
      },
      {
        "outcome": "Apply centre of gravity",
        "content": "Centre-of-gravity method",
        "theory": "Location strategy"
      }
    ],
    "sources": [
      "MANCOSA OM Module Guide (2026)",
      "Heizer, Render and Munson (2020), Ch. 8"
    ]
  },
  "om-8": {
    "introduction": "This unit covers the people side of operations: human resources, job design and how to organise work so people are productive, safe and motivated. Even highly automated operations depend on people, and how their jobs are designed strongly affects performance, quality and morale.\n\nThe unit balances efficiency (designing jobs to get work done well) with the human needs for safety, variety and motivation.",
    "concepts": [
      {
        "concept": "Job design",
        "explanation": "Deciding what tasks a job contains and how they are organised. Good job design balances efficiency with motivation, using approaches like job enlargement, rotation and enrichment to avoid monotony.",
        "example": "A warehouse rotates staff between tasks to reduce strain and boredom while keeping output high."
      },
      {
        "concept": "Ergonomics and the work environment",
        "explanation": "Designing the physical workplace and tasks to fit human capabilities, reducing injury, fatigue and error, which improves both wellbeing and productivity.",
        "example": "Adjustable workstations and proper lifting aids cut injuries and lost time on a packing line."
      },
      {
        "concept": "Labour standards and effectiveness",
        "explanation": "Setting fair, realistic standards for how long tasks should take, used for planning, costing and improvement, while respecting labour rights and the wider organisational context.",
        "example": "A plant sets a standard time per unit to schedule shifts and measure performance fairly."
      }
    ],
    "application": "Use this unit when a case involves staff productivity, morale, safety or turnover in an operational setting. Recommend job-design and ergonomic improvements alongside efficiency measures.\n\nLink to theory: apply job-design principles, and connect to operations strategy because how work is organised must support the firm's quality and flexibility goals.",
    "map": [
      {
        "outcome": "Apply job design",
        "content": "Job design approaches",
        "theory": "Human resources and job design"
      },
      {
        "outcome": "Improve the work environment",
        "content": "Ergonomics, safety",
        "theory": "Human resources and job design"
      },
      {
        "outcome": "Set labour standards",
        "content": "Labour standards, effectiveness",
        "theory": "Human resources and job design"
      }
    ],
    "sources": [
      "MANCOSA OM Module Guide (2026)",
      "Heizer, Render and Munson (2020), Ch. 10"
    ]
  },
  "om-9": {
    "introduction": "This unit covers supply chain management: coordinating the whole chain of suppliers, producers, distributors and customers that gets a product from raw material to end user. No firm operates alone, and weaknesses anywhere in the chain hurt everyone in it.\n\nThe big lesson is that coordination and information-sharing across the chain often matter more than optimising any single link, because poor information creates costly distortions.",
    "concepts": [
      {
        "concept": "The supply chain and integration",
        "explanation": "The network of organisations involved in supplying a product. Integration means aligning and sharing information across these partners so the chain behaves as one coordinated system rather than disconnected parts.",
        "example": "A retailer that shares real-time sales data with suppliers lets them replenish automatically, cutting both stockouts and excess."
      },
      {
        "concept": "The bullwhip effect",
        "explanation": "Small changes in customer demand get amplified into large swings further up the chain when partners do not share information, causing alternating shortages and gluts.",
        "example": "A minor rise in shop sales makes the warehouse over-order and the factory over-produce, then everyone is left with surplus."
      },
      {
        "concept": "Sourcing and supplier relationships",
        "explanation": "Choosing and managing suppliers, balancing cost against reliability and risk. Single-sourcing can be cheaper but riskier; multiple sourcing spreads risk.",
        "example": "A firm keeps a second supplier for a critical part so one factory closure cannot halt its production."
      }
    ],
    "application": "Use this unit when a case involves suppliers, stockouts, delays or coordination problems. Look for the bullwhip effect and weak information-sharing, and recommend integration and better supplier management.\n\nLink to theory: apply supply-chain integration and the bullwhip concept to diagnose coordination failures and justify information-sharing.",
    "map": [
      {
        "outcome": "Explain supply chains",
        "content": "Supply chain and integration",
        "theory": "Supply chain management"
      },
      {
        "outcome": "Diagnose the bullwhip effect",
        "content": "Bullwhip effect, information sharing",
        "theory": "Supply chain management"
      },
      {
        "outcome": "Manage sourcing",
        "content": "Sourcing and supplier risk",
        "theory": "Supply chain management"
      }
    ],
    "sources": [
      "MANCOSA OM Module Guide (2026)",
      "Heizer, Render and Munson (2020), Ch. 11",
      "Slack, Jones and Burgess (2022)"
    ]
  },
  "om-10": {
    "introduction": "This unit covers inventory management and just-in-time (JIT) systems: deciding how much stock to hold and when to reorder. Stock ties up money and can spoil or become obsolete, but too little causes shortages, so inventory management is about balance.\n\nJIT takes this further by aiming to hold as little stock as possible, receiving materials just as they are needed, which cuts waste but demands reliable suppliers and quality.",
    "concepts": [
      {
        "concept": "Economic order quantity (EOQ) and reorder point",
        "explanation": "EOQ is the order size that minimises the total of ordering and holding costs. The reorder point is the stock level that triggers a new order, set to cover demand during the supplier's lead time plus a safety buffer.",
        "example": "A depot calculates an EOQ that balances frequent small orders against bulk holding cost, and reorders when stock hits the lead-time level."
      },
      {
        "concept": "ABC analysis",
        "explanation": "Classifying stock items by value: a few high-value 'A' items deserve tight control, while many low-value 'C' items need only loose control. This focuses effort where it matters.",
        "example": "A retailer counts and monitors expensive electronics closely (A items) but manages cheap accessories loosely (C items)."
      },
      {
        "concept": "Just-in-time (JIT) and lean",
        "explanation": "A pull system where materials arrive exactly when needed, minimising inventory and exposing waste. It raises efficiency but increases vulnerability to supply disruption, so it needs reliable, quality suppliers.",
        "example": "A car plant receives seats hours before fitting, holding almost no stock, but must trust suppliers to deliver perfectly on time."
      }
    ],
    "application": "Use this unit when a case involves stock levels, holding costs, shortages or lean systems. Prioritise items with ABC analysis, size orders with EOQ logic, and weigh JIT's savings against its disruption risk, especially given local supply unreliability.\n\nLink to theory: apply inventory models (EOQ, reorder point, ABC) and JIT/lean principles; remember calculation questions need the formula and worked steps.",
    "map": [
      {
        "outcome": "Apply inventory models",
        "content": "EOQ, reorder point",
        "theory": "Inventory management"
      },
      {
        "outcome": "Prioritise with ABC",
        "content": "ABC analysis",
        "theory": "Inventory management"
      },
      {
        "outcome": "Evaluate JIT",
        "content": "JIT and lean systems",
        "theory": "Just-in-time / lean"
      }
    ],
    "sources": [
      "MANCOSA OM Module Guide (2026)",
      "Heizer, Render and Munson (2020), Ch. 12 and 16"
    ]
  },
  "om-11": {
    "introduction": "This unit covers aggregate (or sales and operations) planning: matching overall supply to demand over the medium term, usually several months to about a year. Rather than planning each product in detail, it plans capacity in broad terms, like total workforce and output, to meet expected demand at lowest cost.\n\nThe challenge is demand that rises and falls. The unit explains the levers managers can pull, and how to combine them economically.",
    "concepts": [
      {
        "concept": "Aggregate planning",
        "explanation": "Planning total output and capacity over the medium term to meet demand. It bridges long-term capacity decisions and short-term scheduling, working with product families rather than individual items.",
        "example": "A factory plans total monthly output and staffing for the next year rather than scheduling each product line yet."
      },
      {
        "concept": "Chase vs level strategies",
        "explanation": "A chase strategy varies output to follow demand (hiring, firing, overtime); a level strategy keeps output steady and absorbs swings with inventory or backorders. Most firms blend the two.",
        "example": "A toy maker builds stock in quiet months (level) and adds temporary staff for the festive peak (chase)."
      },
      {
        "concept": "Cost trade-offs",
        "explanation": "Each option carries costs: hiring and firing, overtime, holding inventory, or lost sales. Good aggregate plans minimise the total of these costs while meeting demand.",
        "example": "A producer compares the cost of overtime against the cost of building inventory early, and picks the cheaper mix."
      }
    ],
    "application": "Use this unit when a case involves seasonal or fluctuating demand and medium-term planning. Choose an appropriate mix of chase and level strategies and justify it on total cost.\n\nLink to theory: apply aggregate-planning strategies, linking them back to capacity planning and forecasting, which feed the demand picture this unit plans around.",
    "map": [
      {
        "outcome": "Explain aggregate planning",
        "content": "Aggregate / S&OP planning",
        "theory": "Aggregate scheduling"
      },
      {
        "outcome": "Compare planning strategies",
        "content": "Chase vs level",
        "theory": "Aggregate scheduling"
      },
      {
        "outcome": "Evaluate cost trade-offs",
        "content": "Planning costs",
        "theory": "Aggregate scheduling"
      }
    ],
    "sources": [
      "MANCOSA OM Module Guide (2026)",
      "Heizer, Render and Munson (2020), Ch. 13"
    ]
  },
  "om-12": {
    "introduction": "This unit covers materials requirements planning (MRP) and its extension MRP II: detailed systems that work out exactly which parts and materials are needed, in what quantity and by when, to meet the production schedule. MRP handles dependent demand, where the need for parts depends on the planned output of finished products.\n\nThe unit shows how MRP turns a master production schedule into precise, timed orders, and how MRP II extends this to plan other resources too.",
    "concepts": [
      {
        "concept": "Dependent demand and the bill of materials",
        "explanation": "Dependent demand is demand for components that derives from the demand for finished goods. The bill of materials (BOM) lists every part needed for a product, so MRP can calculate exact requirements.",
        "example": "Needing 100 bicycles means needing exactly 200 wheels and 100 frames, calculated from the BOM, not guessed."
      },
      {
        "concept": "MRP logic and timing",
        "explanation": "MRP 'explodes' the master schedule through the BOM and offsets for lead times, so each part is ordered to arrive just before it is needed, neither too early nor too late.",
        "example": "Knowing frames take two weeks to arrive, MRP places the frame order two weeks before assembly is due."
      },
      {
        "concept": "From MRP to MRP II",
        "explanation": "MRP II extends materials planning to integrate capacity, labour, finance and other resources, giving a fuller plan of whether the schedule is actually achievable.",
        "example": "MRP II checks not only that parts are available but that there is enough machine and labour capacity to build the order."
      }
    ],
    "application": "Use this unit when a case involves manufacturing with many components, dependent demand or coordinating part orders. Show how MRP turns a schedule into timed material orders and why accurate BOMs and inventory records are essential.\n\nLink to theory: apply MRP/MRP II logic, linking it to aggregate planning and inventory management, which provide the schedule and stock data MRP depends on.",
    "map": [
      {
        "outcome": "Explain dependent demand",
        "content": "Dependent demand, BOM",
        "theory": "Materials requirements planning (MRP)"
      },
      {
        "outcome": "Apply MRP logic",
        "content": "MRP explosion and timing",
        "theory": "MRP"
      },
      {
        "outcome": "Describe MRP II",
        "content": "MRP II resource integration",
        "theory": "MRP / MRP II"
      }
    ],
    "sources": [
      "MANCOSA OM Module Guide (2026)",
      "Heizer, Render and Munson (2020), Ch. 14"
    ]
  },
  "mm-1": {
    "introduction": "This unit explains what marketing really is. Many people think marketing means advertising, but marketing is much broader: it is the whole process of creating value for customers and capturing value in return. At its heart, marketing is about understanding what people need and want, and arranging an exchange that satisfies them while meeting the organisation's goals.\n\nThe unit also introduces how companies can be oriented toward the market in different ways, from simply pushing what they produce to genuinely starting with customer needs. This orientation shapes everything the firm does.",
    "concepts": [
      {
        "concept": "Needs, wants and demands",
        "explanation": "Needs are basic requirements (food, safety, belonging); wants are needs shaped by culture and personality into specific desires; demands are wants backed by the ability to pay. Marketing works with all three.",
        "example": "A person needs transport, wants a particular car brand, and demands it only if they can afford it."
      },
      {
        "concept": "Exchange and value",
        "explanation": "Marketing centres on exchange: giving something to get something in return. Customers exchange money for value, the benefits they get minus the costs they pay. Firms succeed by offering more value than rivals.",
        "example": "A coffee shop wins regulars by offering convenience, taste and atmosphere worth more to them than the price."
      },
      {
        "concept": "Company orientations (production, product, selling, marketing, societal)",
        "explanation": "Firms can focus on producing cheaply (production), on product features (product), on hard selling (selling), on understanding customers (marketing), or on customers plus society's wellbeing (societal). The marketing and societal orientations start with the customer.",
        "example": "A bakery that surveys customers and adjusts its range follows a marketing orientation; one that just bakes more of what it likes follows a production orientation."
      }
    ],
    "application": "This unit frames the whole module: every later topic is a way of creating and delivering value. When analysing a case, first check whether the firm truly starts with customer needs or merely pushes its products.\n\nLink to theory: use the marketing-concept (orientation) framework to judge how customer-led a firm is, and the customer-value idea to explain why customers choose one offer over another.",
    "map": [
      {
        "outcome": "Define marketing and exchange",
        "content": "What marketing is; exchange and transactions",
        "theory": "The marketing concept"
      },
      {
        "outcome": "Explain marketplaces and metamarkets",
        "content": "Marketplaces, marketspaces, metamarkets",
        "theory": "The marketing concept"
      },
      {
        "outcome": "Compare company orientations",
        "content": "Orientations toward the marketplace",
        "theory": "The marketing concept; customer value"
      }
    ],
    "sources": [
      "MANCOSA MM Module Guide (2026)",
      "Kotler and Armstrong (2020), Ch. 1",
      "supplementary: OpenStax Principles of Marketing (2023)"
    ]
  },
  "mm-2": {
    "introduction": "This unit shows how a company turns its big goals into a concrete marketing plan, working down from the whole corporation to individual business units. Strategy decides where to compete and how to win; the marketing plan turns that into specific actions.\n\nThe unit introduces classic planning tools that examiners love because they force clear, structured thinking about a firm's situation and growth options.",
    "concepts": [
      {
        "concept": "Strategic planning levels",
        "explanation": "Planning happens at corporate level (which businesses to be in), division level, and business-unit level (how each unit competes). Marketing plans sit mainly at the business-unit level but must fit the higher levels.",
        "example": "A group decides to invest in its retail arm (corporate), which then plans how to grow a particular store chain (business unit)."
      },
      {
        "concept": "SWOT analysis",
        "explanation": "A tool that audits internal Strengths and Weaknesses and external Opportunities and Threats, then matches them to set strategy, building on strengths to seize opportunities and shoring up weaknesses against threats.",
        "example": "A tourism firm pairs its strong brand (strength) with growing eco-tourism demand (opportunity) to launch green tours."
      },
      {
        "concept": "Growth tools: BCG matrix and Ansoff matrix",
        "explanation": "The BCG matrix sorts products into stars, cash cows, question marks and dogs to guide investment. The Ansoff matrix maps growth options (market penetration, market development, product development, diversification) by rising risk.",
        "example": "A drinks firm funds a fast-growing 'star' brand from a mature 'cash cow', and chooses lower-risk market penetration before risky diversification."
      }
    ],
    "application": "Use this unit for any strategy, planning or growth question. Apply SWOT to read the situation, the BCG matrix to allocate resources across products, and Ansoff to choose a growth direction by risk.\n\nLink to theory: SWOT, BCG and Ansoff are the core frameworks here; the skill is matching the tool to what the question asks and turning analysis into a recommendation.",
    "map": [
      {
        "outcome": "Explain strategic planning",
        "content": "Corporate and business-unit planning",
        "theory": "SWOT analysis"
      },
      {
        "outcome": "Apply portfolio tools",
        "content": "BCG growth-share matrix",
        "theory": "BCG matrix"
      },
      {
        "outcome": "Choose growth strategies",
        "content": "Ansoff growth matrix; marketing plan",
        "theory": "Ansoff matrix"
      }
    ],
    "sources": [
      "MANCOSA MM Module Guide (2026)",
      "Kotler and Armstrong (2020), Ch. 2"
    ]
  },
  "mm-3": {
    "introduction": "This unit explains how marketers gather information and read the environment around the business. Good marketing decisions depend on understanding the forces outside the firm, from the economy and technology to social and demographic change, that shape what customers want and can buy.\n\nThe unit introduces the marketing information system (how firms collect and use data) and environmental scanning (watching the wider forces), which links closely to the data and knowledge ideas in the IKM module.",
    "concepts": [
      {
        "concept": "Marketing information system (MIS)",
        "explanation": "The people, equipment and procedures that gather, sort and deliver the information marketers need, drawing on internal records, marketing intelligence and research.",
        "example": "A retailer combines sales records, competitor watching and customer surveys into dashboards that guide buying decisions."
      },
      {
        "concept": "The macro-environment (PESTEL)",
        "explanation": "The broad external forces, Political, Economic, Social, Technological, Environmental and Legal, that affect all firms in a market. Scanning them reveals opportunities and threats early.",
        "example": "New data-protection laws (legal) and rising mobile use (technological) reshape how a firm can reach customers."
      },
      {
        "concept": "Data warehousing and data-mining",
        "explanation": "Storing large amounts of customer and market data and analysing it to find useful patterns, turning raw data into marketing insight.",
        "example": "Mining loyalty-card data reveals which products customers buy together, guiding store layout and promotions."
      }
    ],
    "application": "Use this unit when a case involves understanding customers, markets or external change. Scan the macro-environment with PESTEL and show how the firm's information system turns data into insight.\n\nLink to theory: apply the marketing-environment (PESTEL) framework to read external forces and the research perspective to explain how information is gathered and used.",
    "map": [
      {
        "outcome": "Describe the MIS",
        "content": "Marketing information system",
        "theory": "Marketing environment; research"
      },
      {
        "outcome": "Scan the macro-environment",
        "content": "Demographic and macro forces",
        "theory": "Marketing environment (PESTEL)"
      },
      {
        "outcome": "Use data systems",
        "content": "Data warehouses and mining",
        "theory": "Marketing research"
      }
    ],
    "sources": [
      "MANCOSA MM Module Guide (2026)",
      "Kotler and Armstrong (2020), Ch. 3",
      "supplementary link to IKM data concepts"
    ]
  },
  "mm-4": {
    "introduction": "This unit covers marketing research (finding out what you need to know about customers and markets) and forecasting demand (estimating how much you can sell). Together they reduce the guesswork in marketing decisions, so big spending is based on evidence rather than hunches.\n\nThe unit teaches a structured research process and shows why representative, unbiased data matters, because decisions built on bad data lead to costly mistakes.",
    "concepts": [
      {
        "concept": "The marketing research process",
        "explanation": "A structured sequence: define the problem, design the research, collect data, analyse it, and present findings. Following the steps keeps research focused and useful.",
        "example": "Before a launch, a firm defines what it needs to know, surveys a representative sample, and uses the results to set price and features."
      },
      {
        "concept": "Primary vs secondary data",
        "explanation": "Primary data is collected first-hand for the specific question (surveys, interviews); secondary data already exists (reports, statistics). Secondary data is cheaper and faster; primary data is more tailored.",
        "example": "A firm first checks industry reports (secondary), then runs its own survey (primary) to fill the gaps."
      },
      {
        "concept": "Demand forecasting",
        "explanation": "Estimating future sales using past data, market trends and judgement, so the firm can plan production, budgets and targets realistically.",
        "example": "A retailer forecasts festive-season demand to order stock and plan staffing in advance."
      }
    ],
    "application": "Use this unit when a case involves a decision under uncertainty, a launch, or sizing a market. Recommend a sound research process and warn against biased samples or leading questions.\n\nLink to theory: apply the marketing-research framework, and connect forecasting here to the environmental scanning of the previous unit.",
    "map": [
      {
        "outcome": "Apply the research process",
        "content": "Marketing research steps",
        "theory": "Marketing research"
      },
      {
        "outcome": "Compare data types",
        "content": "Primary vs secondary data",
        "theory": "Marketing research"
      },
      {
        "outcome": "Forecast demand",
        "content": "Demand forecasting",
        "theory": "Marketing research"
      }
    ],
    "sources": [
      "MANCOSA MM Module Guide (2026)",
      "Kotler and Armstrong (2020), Ch. 4"
    ]
  },
  "mm-5": {
    "introduction": "This unit explains how firms create customer value, satisfaction and loyalty, and why keeping customers is usually far more profitable than constantly chasing new ones. Satisfied, loyal customers buy more, cost less to serve and recommend the brand to others.\n\nThe unit introduces the idea of customer lifetime value and the practices, especially good relationship management, that turn one-off buyers into long-term, profitable relationships.",
    "concepts": [
      {
        "concept": "Customer value and satisfaction",
        "explanation": "Value is the benefits a customer gets minus the costs they pay; satisfaction is how well the experience meets their expectations. Delivering value that meets or beats expectations drives satisfaction.",
        "example": "A bank that resolves problems quickly and fairly leaves customers feeling they got more than they paid for."
      },
      {
        "concept": "Customer lifetime value (CLV)",
        "explanation": "The total profit a customer brings over the whole relationship, not just one sale. Focusing on CLV shifts attention from single transactions to keeping valuable customers.",
        "example": "A telecoms firm invests in retaining a loyal contract customer because their lifetime value far exceeds one month's bill."
      },
      {
        "concept": "Customer relationship management (CRM)",
        "explanation": "A strategy (supported by systems) for building lasting, profitable relationships by understanding customers and serving them consistently across every touchpoint. CRM is a relationship approach, not just software.",
        "example": "An insurer uses customer history to offer relevant products and proactive service, deepening loyalty."
      }
    ],
    "application": "Use this unit when a case involves churn, loyalty, retention or customer profitability. Argue for focusing on lifetime value and relationship management rather than only acquiring new customers.\n\nLink to theory: apply the customer-value and CRM perspective to explain how satisfaction builds loyalty and long-term profit.",
    "map": [
      {
        "outcome": "Explain value and satisfaction",
        "content": "Customer value and satisfaction",
        "theory": "Customer value and CRM"
      },
      {
        "outcome": "Apply lifetime value",
        "content": "Customer lifetime value",
        "theory": "Customer value and CRM"
      },
      {
        "outcome": "Build relationships",
        "content": "Loyalty and CRM",
        "theory": "Customer value and CRM"
      }
    ],
    "sources": [
      "MANCOSA MM Module Guide (2026)",
      "Kotler and Armstrong (2020), Ch. 5"
    ]
  },
  "mm-6": {
    "introduction": "This unit explores how customers actually make buying decisions, covering both consumer markets (individuals and households) and business markets (organisations buying for their operations). Understanding the decision process lets marketers influence it at the right moments.\n\nThe unit shows that buying is shaped by more than rational calculation: culture, social groups, emotions and psychology all play a part, and business buying follows its own more formal logic.",
    "concepts": [
      {
        "concept": "The consumer decision process",
        "explanation": "Buyers typically move through need recognition, information search, evaluating alternatives, the purchase decision, and post-purchase behaviour. Marketers can intervene helpfully at each stage.",
        "example": "Someone notices a worn phone (need), reads reviews (search), compares models (evaluation), buys, then judges whether it met expectations."
      },
      {
        "concept": "Influences on consumer behaviour",
        "explanation": "Cultural, social, personal and psychological factors shape choices. Emotions and social influence often matter as much as price or features, so buyers are not purely rational.",
        "example": "A buyer chooses a brand partly because friends and family use it (social influence), not only on specifications."
      },
      {
        "concept": "Business (B2B) buying behaviour",
        "explanation": "Organisations buy more formally, often involving several people (a buying centre), clear specifications and longer relationships, with a stronger focus on reliability and total cost.",
        "example": "A factory's purchase of machinery involves engineers, finance and management, judged on reliability and lifetime cost, not impulse."
      }
    ],
    "application": "Use this unit when a case involves understanding or influencing buyers. Map the decision process, identify the key influences, and tailor marketing to the relevant stage, distinguishing consumer from business buying.\n\nLink to theory: apply consumer-behaviour models to explain and shape buying decisions for both consumer and business markets.",
    "map": [
      {
        "outcome": "Map the decision process",
        "content": "Consumer decision stages",
        "theory": "Consumer behaviour"
      },
      {
        "outcome": "Identify influences",
        "content": "Cultural, social, psychological factors",
        "theory": "Consumer behaviour"
      },
      {
        "outcome": "Explain B2B buying",
        "content": "Business markets and buying centre",
        "theory": "Consumer behaviour"
      }
    ],
    "sources": [
      "MANCOSA MM Module Guide (2026)",
      "Kotler and Armstrong (2020), Ch. 6"
    ]
  },
  "mm-7": {
    "introduction": "This unit covers segmentation, targeting and positioning (STP), one of the most important sequences in marketing. Because a firm cannot serve everyone equally well, it divides the market into segments, chooses which to target, and positions its offer to appeal clearly to them.\n\nSTP turns a vague 'sell to everyone' into a focused strategy where the whole marketing mix is aimed at a defined group, so the brand stands for something specific.",
    "concepts": [
      {
        "concept": "Segmentation",
        "explanation": "Dividing a market into groups of buyers with similar needs or characteristics, using bases such as geography, demographics, psychographics (lifestyle and values) and behaviour. Useful segments are measurable, reachable and worth serving.",
        "example": "A mobile operator segments by income and data usage, separating prepaid township users from corporate contract clients."
      },
      {
        "concept": "Targeting",
        "explanation": "Choosing which segment(s) to serve, based on their size, growth, profitability and fit with the firm's strengths. Options range from mass marketing to focusing on a single niche.",
        "example": "A smaller retailer targets a specific niche the big chains underserve rather than competing for everyone."
      },
      {
        "concept": "Positioning",
        "explanation": "Designing the offer and image so the target segment perceives a clear, distinctive place for the brand in their minds, relative to competitors. Positioning must be deliverable and defensible.",
        "example": "A car brand positions on safety and reliability, and aligns its whole marketing mix to reinforce that perception."
      }
    ],
    "application": "Use this unit whenever a case involves who to serve and how to stand out. Work through STP in order: segment the market, choose a target, and define a clear position the firm can deliver.\n\nLink to theory: STP is the central framework; a strong answer shows the segments, the chosen target and a position the marketing mix can support.",
    "map": [
      {
        "outcome": "Segment a market",
        "content": "Bases for segmentation",
        "theory": "STP"
      },
      {
        "outcome": "Select target segments",
        "content": "Targeting strategies",
        "theory": "STP"
      },
      {
        "outcome": "Position the offer",
        "content": "Positioning",
        "theory": "STP"
      }
    ],
    "sources": [
      "MANCOSA MM Module Guide (2026)",
      "Kotler and Armstrong (2020), Ch. 7"
    ]
  },
  "mm-8": {
    "introduction": "This unit covers branding: building a name, identity and set of associations that make a product stand out and command loyalty and often a premium price. A brand is far more than a logo; it is the meaning and trust that live in customers' minds.\n\nThe unit introduces brand equity, the value a strong brand adds, and how firms build and protect it over time.",
    "concepts": [
      {
        "concept": "Brand and brand equity",
        "explanation": "A brand is the identity and associations attached to a product; brand equity is the extra value those associations create, such as the ability to charge more or retain loyal customers, built on awareness, perceived quality, associations and loyalty.",
        "example": "Customers pay more for a trusted bank or sportswear brand than for an unknown equivalent because of the equity built up."
      },
      {
        "concept": "Brand positioning and identity",
        "explanation": "Deciding what the brand should stand for in customers' minds and expressing it consistently through name, design, message and experience, so the brand has a clear, distinctive meaning.",
        "example": "A brand built on adventure uses consistent imagery, tone and sponsorships so customers instantly associate it with that idea."
      },
      {
        "concept": "Brand strategy decisions",
        "explanation": "Choices about how to use brands: extending a brand into new products, creating sub-brands, or keeping separate brands. Over-stretching a brand into unrelated areas can dilute its meaning.",
        "example": "A premium brand extending into cheap products risks confusing customers and weakening its premium image."
      }
    ],
    "application": "Use this unit when a case involves brand strength, reputation, loyalty or repositioning. Diagnose the brand's equity and recommend how to build, position or protect it.\n\nLink to theory: apply brand-equity and positioning ideas, connecting to STP (the target shapes the position) and the product life cycle (branding needs change over a product's life).",
    "map": [
      {
        "outcome": "Explain brand equity",
        "content": "Branding and equity",
        "theory": "Branding"
      },
      {
        "outcome": "Position the brand",
        "content": "Brand positioning and identity",
        "theory": "Branding; STP"
      },
      {
        "outcome": "Make brand decisions",
        "content": "Brand strategy",
        "theory": "Branding; product life cycle"
      }
    ],
    "sources": [
      "MANCOSA MM Module Guide (2026)",
      "Kotler and Armstrong (2020), Ch. 9"
    ]
  },
  "mm-9": {
    "introduction": "This unit covers how firms deal with competition: analysing rivals and choosing how to compete given the firm's position in the market. Understanding the competitive landscape helps a firm decide where to attack, where to defend, and where to avoid costly battles.\n\nThe unit introduces tools for judging how attractive and contested an industry is, and strategies that suit market leaders, challengers, followers and nichers.",
    "concepts": [
      {
        "concept": "Porter's five forces",
        "explanation": "A framework for judging industry attractiveness through five forces: rivalry among competitors, threat of new entrants, threat of substitutes, bargaining power of buyers and of suppliers. Strong forces squeeze profits.",
        "example": "A new airline faces fierce rivalry, powerful airports (suppliers) and price-sensitive customers, so it competes on a low-cost niche rather than head-on."
      },
      {
        "concept": "Competitive positions and strategies",
        "explanation": "Firms play different roles: leaders defend share, challengers attack the leader's weaknesses, followers imitate to avoid costly fights, and nichers dominate a small specialised segment. The right strategy depends on your position.",
        "example": "A small retailer succeeds as a nicher serving a segment the big chains ignore, rather than attacking them directly."
      },
      {
        "concept": "Competitor analysis",
        "explanation": "Systematically studying rivals' strengths, weaknesses, objectives and likely moves, so the firm can anticipate and respond rather than be caught out.",
        "example": "Tracking a competitor's pricing and product moves lets a firm prepare its response in advance."
      }
    ],
    "application": "Use this unit when a case involves rivals, market entry or competitive pressure. Use the five forces to judge the industry and choose a competitive-position strategy that fits the firm's standing.\n\nLink to theory: apply Porter's five forces for industry analysis and the competitive-positions framework to pick the right strategy.",
    "map": [
      {
        "outcome": "Analyse the industry",
        "content": "Competitive forces",
        "theory": "Porter's five forces"
      },
      {
        "outcome": "Choose a competitive strategy",
        "content": "Competitive positions",
        "theory": "Competitive positions (leader, challenger, follower, nicher)"
      },
      {
        "outcome": "Analyse competitors",
        "content": "Competitor analysis",
        "theory": "Porter's five forces; competitive positions"
      }
    ],
    "sources": [
      "MANCOSA MM Module Guide (2026)",
      "Kotler and Armstrong (2020), Ch. 11"
    ]
  },
  "mm-10": {
    "introduction": "This unit covers the product, the first element of the marketing mix (the 4Ps). A product is anything offered to satisfy a need, and it has several layers, from the basic benefit to the added services around it. Decisions about products, ranges and lines shape what the firm actually sells.\n\nThe unit teaches you to think of a product not as a single object but as a bundle of benefits and choices managed over time.",
    "concepts": [
      {
        "concept": "Levels of a product",
        "explanation": "A product has layers: the core benefit (what the customer really buys), the actual product (features, design, brand), and the augmented product (extra services like warranty and support). Competition often happens at the augmented level.",
        "example": "A phone's core benefit is communication; the actual product is the handset; the augmented product includes warranty, support and apps."
      },
      {
        "concept": "Product mix and product lines",
        "explanation": "The product mix is all the products a firm sells; a product line is a group of related products. Firms decide the width (number of lines) and depth (variants per line) of their range.",
        "example": "A drinks company offers several lines (water, juice, soda), each with multiple flavours and sizes."
      },
      {
        "concept": "The marketing mix (4Ps) and the product's role",
        "explanation": "Product, Price, Place and Promotion must work together. The product decision anchors the others, since price, distribution and promotion all depend on what is being sold and to whom.",
        "example": "A premium product justifies a premium price, selective distribution and image-led promotion, all aligned."
      }
    ],
    "application": "Use this unit when a case involves what the firm sells, range decisions or differentiation. Analyse the product's levels and how the rest of the mix supports it.\n\nLink to theory: apply the marketing-mix (4Ps) framework with the product as the anchor, ensuring price, place and promotion reinforce it.",
    "map": [
      {
        "outcome": "Explain product levels",
        "content": "Levels of a product",
        "theory": "Marketing mix (4Ps)"
      },
      {
        "outcome": "Manage the product mix",
        "content": "Product lines and mix",
        "theory": "Marketing mix"
      },
      {
        "outcome": "Align the mix",
        "content": "Product within the 4Ps",
        "theory": "Marketing mix"
      }
    ],
    "sources": [
      "MANCOSA MM Module Guide (2026)",
      "Kotler and Armstrong (2020), Ch. 8"
    ]
  },
  "mm-11": {
    "introduction": "This unit covers the marketing of services, which differ from physical goods in important ways. Services are intangible (you cannot touch them before buying), often produced and consumed at the same time, variable in quality, and cannot be stored. These features create special marketing challenges.\n\nBecause of this, services marketing extends the 4Ps to 7Ps, adding people, process and physical evidence, since how a service is delivered is part of the product itself.",
    "concepts": [
      {
        "concept": "Characteristics of services",
        "explanation": "Services are intangible, inseparable (produced and consumed together), variable (quality differs by who delivers them and when) and perishable (cannot be stored). Each feature needs a marketing response.",
        "example": "A haircut cannot be tried in advance (intangible), happens with the stylist present (inseparable), varies by stylist (variable) and cannot be saved for later (perishable)."
      },
      {
        "concept": "The extended marketing mix (7Ps)",
        "explanation": "Services add People (staff who deliver), Process (how the service is delivered) and Physical evidence (tangible cues like premises) to the 4Ps, because these strongly shape the customer's experience.",
        "example": "A hospital manages friendly staff (people), smooth admissions (process) and clean, reassuring facilities (physical evidence)."
      },
      {
        "concept": "Managing service quality",
        "explanation": "Because services are variable, firms standardise key steps, train staff and use physical cues to signal quality and meet expectations consistently across locations and occasions.",
        "example": "An airline trains crew and standardises procedures so passengers get a consistent experience on every flight."
      },
      {
        "concept": "Designing and managing services",
        "explanation": "Service design maps the customer journey and the steps behind the scenes, so the experience is smooth and failures are designed out before they reach the customer.",
        "example": "A bank redesigns its onboarding journey to remove confusing steps, improving the customer experience."
      }
    ],
    "application": "Use this unit when a case involves a service business or experience quality. Apply the 7Ps and address intangibility and variability directly.\n\nLink to theory: apply the services-marketing (7Ps) framework, extending the marketing-mix thinking from the product unit to service settings.",
    "map": [
      {
        "outcome": "Explain service characteristics",
        "content": "Intangibility, inseparability, variability, perishability",
        "theory": "Services marketing"
      },
      {
        "outcome": "Apply the 7Ps",
        "content": "Extended marketing mix",
        "theory": "Services marketing; marketing mix"
      },
      {
        "outcome": "Manage service quality",
        "content": "Service quality and design",
        "theory": "Services marketing"
      }
    ],
    "sources": [
      "MANCOSA MM Module Guide (2026)",
      "Kotler and Armstrong (2020), Ch. 8 and 12"
    ]
  },
  "mm-12": {
    "introduction": "This unit covers pricing: deciding what to charge. Price is the only element of the marketing mix that directly brings in revenue (the others cost money), so getting it right strongly affects profit. Price also signals quality and positions the brand.\n\nThe unit shows that good pricing balances three forces: the firm's costs (the floor), customer-perceived value (the ceiling) and competitors' prices (the reference point).",
    "concepts": [
      {
        "concept": "Pricing approaches",
        "explanation": "Cost-based pricing adds a margin to cost; value-based pricing sets price by what customers think the offer is worth; competition-based pricing references rivals. Value-based pricing usually captures the most profit.",
        "example": "Software priced on the savings it delivers to customers (value-based) often earns more than simple cost-plus pricing."
      },
      {
        "concept": "Price and positioning",
        "explanation": "Price signals quality and position. A premium price supports a premium image; a low price suits a value position. Price must match the rest of the marketing mix.",
        "example": "A luxury brand priced like a discounter would confuse customers and undermine its image."
      },
      {
        "concept": "Pricing tactics",
        "explanation": "Specific techniques such as psychological pricing (R99,99), penetration pricing (low to gain share), skimming (high then lowering), and discounts. Tactics should fit the strategy, not start price wars.",
        "example": "A new entrant uses penetration pricing to win share quickly, then adjusts once established."
      }
    ],
    "application": "Use this unit when a case involves what to charge, margins, or price competition. Balance cost, value and competitor prices, and ensure price fits the brand's positioning.\n\nLink to theory: apply pricing strategy within the marketing mix, making sure price reinforces the product's position rather than undercutting it.",
    "map": [
      {
        "outcome": "Compare pricing approaches",
        "content": "Cost, value and competition-based pricing",
        "theory": "Pricing strategies"
      },
      {
        "outcome": "Link price to position",
        "content": "Price and positioning",
        "theory": "Pricing; marketing mix"
      },
      {
        "outcome": "Apply pricing tactics",
        "content": "Pricing tactics",
        "theory": "Pricing strategies"
      }
    ],
    "sources": [
      "MANCOSA MM Module Guide (2026)",
      "Kotler and Armstrong (2020), Ch. 10"
    ]
  },
  "mm-13": {
    "introduction": "This unit covers place, the distribution element of the marketing mix: how products get from the producer to the customer through channels and intermediaries. Even a great product fails if customers cannot get it conveniently, so distribution is a real source of advantage.\n\nThe unit explains the role of middlemen (wholesalers, retailers, agents) and how firms choose and manage distribution channels.",
    "concepts": [
      {
        "concept": "Marketing channels and intermediaries",
        "explanation": "The path a product takes to reach customers, often through intermediaries who add value by breaking bulk, holding stock, providing reach and offering convenience. Channels can be direct or indirect.",
        "example": "A farmer reaches shoppers through wholesalers and supermarkets rather than selling to each household directly."
      },
      {
        "concept": "Channel design and intensity",
        "explanation": "Choosing how many intermediaries to use: intensive (everywhere, for convenience goods), selective (chosen outlets), or exclusive (few, for premium goods). Intensity must match the product and brand.",
        "example": "Sweets use intensive distribution (sold everywhere); luxury watches use exclusive distribution through few authorised dealers."
      },
      {
        "concept": "Channel management and conflict",
        "explanation": "Coordinating channel partners so they cooperate rather than clash, for example when a firm's own online store competes with its retailers. Good management aligns incentives across the channel.",
        "example": "A brand manages tension between its website and its shops by pricing and positioning each channel clearly."
      }
    ],
    "application": "Use this unit when a case involves getting products to customers, channel choice or distribution problems. Match channel intensity to the product and manage partner relationships.\n\nLink to theory: apply place/distribution within the marketing mix, ensuring the channel supports the product's positioning and the customer's convenience.",
    "map": [
      {
        "outcome": "Explain channels",
        "content": "Channels and intermediaries",
        "theory": "Marketing mix (place)"
      },
      {
        "outcome": "Design channel intensity",
        "content": "Intensive, selective, exclusive",
        "theory": "Marketing mix"
      },
      {
        "outcome": "Manage the channel",
        "content": "Channel management and conflict",
        "theory": "Marketing mix"
      }
    ],
    "sources": [
      "MANCOSA MM Module Guide (2026)",
      "Kotler and Armstrong (2020), Ch. 12"
    ]
  },
  "mm-14": {
    "introduction": "This unit covers integrated marketing communications (IMC): how a firm coordinates all its messages, advertising, social media, public relations, sales promotion, personal selling and direct marketing, so they tell one consistent story. Customers hear a brand through many channels, and mixed messages confuse them.\n\nThe key idea is integration: every channel reinforces the same positioning, rather than each running its own separate message.",
    "concepts": [
      {
        "concept": "The promotion mix",
        "explanation": "The set of communication tools: advertising, sales promotion, public relations, personal selling, direct and digital marketing. Each suits different goals, audiences and budgets, and they work best in combination.",
        "example": "A launch might combine TV advertising for awareness, social media for engagement and in-store promotion for trial."
      },
      {
        "concept": "Integrated marketing communications (IMC)",
        "explanation": "Coordinating all communication tools and messages around one clear idea and positioning, so the brand speaks with a single voice across every channel and touchpoint.",
        "example": "A campaign uses the same theme and look across radio, social media and in-store, so customers get one consistent story."
      },
      {
        "concept": "Choosing channels for the audience",
        "explanation": "Selecting communication channels based on where the target audience actually is and how they consume media, rather than habit, and increasingly using digital and mobile channels.",
        "example": "A brand targeting young, mobile-first customers prioritises social and WhatsApp messaging over print."
      }
    ],
    "application": "Use this unit when a case involves promotion, advertising, brand messaging or campaigns. Recommend an integrated approach where every channel reinforces one positioning, chosen around the audience.\n\nLink to theory: apply the IMC framework within the marketing mix (promotion), stressing consistency across channels.",
    "map": [
      {
        "outcome": "Explain the promotion mix",
        "content": "Communication tools",
        "theory": "Integrated marketing communications"
      },
      {
        "outcome": "Apply IMC",
        "content": "Integration of messages",
        "theory": "IMC"
      },
      {
        "outcome": "Select channels",
        "content": "Channel choice; digital media",
        "theory": "IMC; marketing mix"
      }
    ],
    "sources": [
      "MANCOSA MM Module Guide (2026)",
      "Kotler and Armstrong (2020), Ch. 14",
      "supplementary: Sharabati et al. (2024) on digital marketing"
    ]
  },
  "mm-15": {
    "introduction": "This unit covers how firms introduce new market offerings, from generating ideas to launching products, and how products move through their life cycle. New products are risky and most fail, so a structured development process improves the odds of success.\n\nThe unit also introduces the product life cycle, which shows how a product's marketing needs change from launch through growth, maturity and decline.",
    "concepts": [
      {
        "concept": "The new-product development process",
        "explanation": "A structured sequence: idea generation, screening, concept testing, business analysis, development, test marketing and commercialisation. Each stage filters out weak ideas before big money is spent.",
        "example": "A firm tests a product concept with customers before investing in full production, dropping it early if interest is weak."
      },
      {
        "concept": "The product life cycle (PLC)",
        "explanation": "Products typically pass through introduction (build awareness), growth (build share), maturity (defend share, often on price) and decline (harvest or withdraw). The marketing mix should change at each stage.",
        "example": "A new phone model is heavily advertised at launch, competes on price at maturity, and is phased out in decline."
      },
      {
        "concept": "Managing innovation risk",
        "explanation": "Because most new products fail, firms reduce risk through research, testing and staged investment, and by learning from each launch rather than betting everything at once.",
        "example": "A company test-markets a product in one region before a national rollout, limiting the cost of failure."
      }
    ],
    "application": "Use this unit when a case involves launching, innovating or managing a product over time. Apply the development process to reduce launch risk and the PLC to adapt the marketing mix to the product's stage.\n\nLink to theory: combine the new-product process with the product-life-cycle framework, linking to the marketing mix at each stage.",
    "map": [
      {
        "outcome": "Apply NPD process",
        "content": "New-product development",
        "theory": "Marketing mix; product life cycle"
      },
      {
        "outcome": "Use the PLC",
        "content": "Product life cycle stages",
        "theory": "Product life cycle"
      },
      {
        "outcome": "Manage innovation risk",
        "content": "Reducing launch risk",
        "theory": "Product life cycle"
      }
    ],
    "sources": [
      "MANCOSA MM Module Guide (2026)",
      "Kotler and Armstrong (2020), Ch. 8 and 9"
    ]
  },
  "mm-16": {
    "introduction": "This unit covers global marketing: taking products and brands into foreign markets. Going global opens large opportunities but adds risk and complexity, from different cultures and laws to currency swings and logistics. Firms must decide whether and how to enter, and how much to adapt.\n\nThe central tension is standardisation versus adaptation: keep the offer the same everywhere for efficiency, or tailor it to each market for relevance.",
    "concepts": [
      {
        "concept": "Market-entry strategies",
        "explanation": "Ways to enter a foreign market with rising commitment and risk: exporting, licensing, joint ventures and direct investment. Lower-commitment modes are safer for testing a market first.",
        "example": "A food brand exports to neighbouring SADC countries through local distributors before building its own facilities."
      },
      {
        "concept": "Standardisation vs adaptation",
        "explanation": "Standardisation keeps the marketing mix the same across countries to save cost and build a consistent brand; adaptation tailors it to local tastes, language and rules for better fit. Most firms balance the two.",
        "example": "A global chain keeps its core brand but adapts its menu to local tastes in each country."
      },
      {
        "concept": "Global environment and risk",
        "explanation": "International marketing must manage cultural, political, legal, economic and currency differences. Misreading local context is a common and costly mistake.",
        "example": "A campaign that works at home may offend or fall flat abroad if cultural differences are ignored."
      }
    ],
    "application": "Use this unit when a case involves expanding abroad or international competition. Recommend an entry mode that matches the firm's risk appetite and the right balance of standardisation and adaptation.\n\nLink to theory: apply the global market-entry framework, weighing commitment against risk and local fit.",
    "map": [
      {
        "outcome": "Choose an entry mode",
        "content": "Market-entry strategies",
        "theory": "Global market entry"
      },
      {
        "outcome": "Balance standardisation and adaptation",
        "content": "Standardisation vs adaptation",
        "theory": "Global market entry"
      },
      {
        "outcome": "Manage global risk",
        "content": "Global environment and risk",
        "theory": "Global market entry"
      }
    ],
    "sources": [
      "MANCOSA MM Module Guide (2026)",
      "Kotler and Armstrong (2020), Ch. 15"
    ]
  },
  "mm-17": {
    "introduction": "The final unit covers holistic marketing: the idea that marketing should be integrated across the whole organisation and consider all stakeholders and society, not just immediate customers and sales. It pulls the module together by showing how the parts must work as one.\n\nHolistic marketing includes internal marketing (aligning staff), integrated marketing (coordinating the mix), relationship marketing (building lasting bonds) and performance/societal marketing (measuring results and acting responsibly).",
    "concepts": [
      {
        "concept": "The four dimensions of holistic marketing",
        "explanation": "Internal marketing (everyone in the firm embraces marketing values), integrated marketing (all mix elements coordinated), relationship marketing (long-term bonds with customers and partners) and performance marketing (measuring financial and societal results).",
        "example": "A firm trains all staff to be customer-focused, coordinates its 4Ps, nurtures loyal customers and tracks both profit and social impact."
      },
      {
        "concept": "Stakeholder and societal orientation",
        "explanation": "Treating the organisation as a web of relationships, customers, employees, partners, society, whose interests must be balanced, and considering long-term wellbeing, not just short-term sales.",
        "example": "A retailer integrates local sourcing and community upliftment into its brand, responding to stakeholders and society."
      },
      {
        "concept": "Sustainability and responsible marketing",
        "explanation": "Marketing that considers environmental and social impact as part of strategy, not as an afterthought or public-relations add-on, which increasingly builds trust and advantage.",
        "example": "A brand genuinely reduces packaging and is transparent about it, strengthening trust rather than greenwashing."
      }
    ],
    "application": "Use this unit for integrative questions about marketing's role across the firm and society. Argue that the marketing mix, customer relationships, internal alignment and responsibility must work together.\n\nLink to theory: apply the holistic-marketing framework to connect the whole module, drawing in stakeholder and sustainability thinking.",
    "map": [
      {
        "outcome": "Explain holistic marketing",
        "content": "Four dimensions of holistic marketing",
        "theory": "Holistic marketing"
      },
      {
        "outcome": "Adopt a stakeholder view",
        "content": "Stakeholder and societal orientation",
        "theory": "Holistic marketing"
      },
      {
        "outcome": "Apply responsible marketing",
        "content": "Sustainability and responsibility",
        "theory": "Holistic marketing"
      }
    ],
    "sources": [
      "MANCOSA MM Module Guide (2026)",
      "Kotler and Armstrong (2020), Ch. 1 and 22",
      "supplementary: Bridoux and Stoelhorst (2022) on stakeholder theory"
    ]
  }
};
