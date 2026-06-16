import { Link } from 'react-router-dom';
import { Card } from '../../components/ui';

const FEATURE_SECTIONS = [
  {
    title: 'Formula Library',
    description: 'Browse all OM formulas with clear definitions, variables, step-by-step application guides, common mistakes, and exam interpretation sentences.',
    features: [
      'Searchable formula database',
      'Plain-English explanations',
      'Variable definitions with units',
      'Step-by-step application guides',
      'Common exam mistakes highlighted',
      'Links to calculators and worked examples',
    ],
  },
  {
    title: 'Calculator Hub',
    description: 'Interactive calculators for EOQ, productivity, capacity, MAD, ROP, and more. Enter your values and see instant results with interpretive guidance.',
    features: [
      'EOQ (Economic Order Quantity) calculator',
      'ROP (Reorder Point) calculator',
      'Productivity calculator',
      'Utilisation and Efficiency calculator',
      'MAD forecast accuracy calculator',
      'Live results with interpretation',
    ],
  },
  {
    title: 'Past Paper Case Lab',
    description: 'Work through OM cases step-by-step. Classify the question, identify relevant formulas, calculate solutions, and build exam paragraphs.',
    features: [
      'Past paper style cases',
      'Step-by-step guided solutions',
      'Question classification',
      'Formula application',
      'Exam paragraph models',
      'Critical judgement notes',
    ],
  },
  {
    title: 'Question Classifier',
    description: 'Paste a case-style question and get instant guidance on the likely unit, concept, formula, and answer structure.',
    features: [
      'Instant keyword matching',
      'Unit identification',
      'Formula suggestions',
      'Answer structure templates',
      'Key terms to include',
      'Related case links',
    ],
  },
  {
    title: 'Exam Answer Builder',
    description: 'Turn your analysis into a structured postgraduate answer with theory definitions, applications, and critical evaluation.',
    features: [
      'Command word detection',
      'Theory template insertion',
      'Application paragraph builder',
      'Evaluation guidance',
      'Word count tracking',
      'Referencing support',
    ],
  },
  {
    title: 'Mistake Log & Tracking',
    description: 'Mark formulas and concepts you get wrong. Review them before exams for targeted revision.',
    features: [
      'Personal mistake tracking',
      'Formula bookmarking',
      'Concept tagging',
      'Revision prioritisation',
      'Progress overview',
      'Export for offline review',
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#3B1D6E]">
              <span className="text-lg text-white font-bold">P</span>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#C9A24B]">MANCOSA PGDBM</p>
              <p className="font-bold text-[#241349]">Exam Companion</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link to="/features" className="text-sm font-medium text-[#3B1D6E]">Features</Link>
            <Link to="/pricing" className="text-sm font-medium text-slate-600 hover:text-[#3B1D6E]">Pricing</Link>
            <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-[#3B1D6E]">About</Link>
            <Link to="/sign-in" className="text-sm font-medium text-slate-600 hover:text-[#3B1D6E]">Sign in</Link>
            <Link to="/sign-up" className="rounded-full bg-[#3B1D6E] px-4 py-2 text-sm font-bold text-white hover:bg-[#2d1654]">
              Start free
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-[#241349] md:text-4xl">
            Features
          </h1>
          <p className="mt-2 text-lg text-slate-600">
            Purpose-built tools for MANCOSA PGDBM exam preparation
          </p>
        </div>
      </section>

      {/* Feature sections */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="space-y-8">
          {FEATURE_SECTIONS.map((section) => (
            <Card key={section.title} tone="white">
              <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
                <div>
                  <h2 className="text-xl font-bold text-[#241349]">{section.title}</h2>
                  <p className="mt-2 text-slate-600">{section.description}</p>
                  <Link
                    to="/sign-up"
                    className="mt-4 inline-block rounded-full bg-[#3B1D6E] px-5 py-2 text-sm font-bold text-white hover:bg-[#2d1654]"
                  >
                    Try it free
                  </Link>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-700">Includes:</h3>
                  <ul className="mt-2 space-y-1">
                    {section.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                        <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="rounded-2xl bg-[#3B1D6E] p-8 text-center">
          <h2 className="text-xl font-bold text-white">
            Start preparing for your OM exam today
          </h2>
          <p className="mt-2 text-slate-200">
            Free plan available. Upgrade for full access.
          </p>
          <Link
            to="/sign-up"
            className="mt-4 inline-block rounded-full bg-white px-8 py-3 text-lg font-bold text-[#3B1D6E] hover:bg-slate-100"
          >
            Get started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/privacy">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
