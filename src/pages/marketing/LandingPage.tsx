import { Link } from 'react-router-dom';
import { Card, Badge } from '../../components/ui';

const FEATURES = [
  {
    title: 'Formula Library',
    description: 'Browse OM formulas with definitions, variables, step-by-step application, common mistakes, and exam interpretation sentences.',
    icon: '📐',
    link: '/om/formula-library',
  },
  {
    title: 'Calculator Hub',
    description: 'Interactive calculators for EOQ, productivity, capacity, MAD, ROP and more with live results and formula references.',
    icon: '🧮',
    link: '/om/calculators',
  },
  {
    title: 'Past Paper Case Lab',
    description: 'Work through OM cases step-by-step with classification, calculation, exam paragraphs and critical judgement.',
    icon: '📚',
    link: '/om/cases',
  },
  {
    title: 'Question Classifier',
    description: 'Paste a case-style question and get the likely unit, concept, formula and answer structure.',
    icon: '🔍',
    link: '/om/question-classifier',
  },
  {
    title: 'Exam Answer Builder',
    description: 'Turn your analysis into a structured exam answer with theory, application, and evaluation.',
    icon: '✍️',
    link: '/om/exam-builder',
  },
  {
    title: 'Mistake Log',
    description: 'Track formulas and concepts you get wrong. Review before exams for targeted revision.',
    icon: '📝',
    link: '/om/mistake-log',
  },
];

const STEPS = [
  { step: 1, title: 'Choose your module', description: 'Select OM, IKM, MM or OB and see unit structure and progress mapping.' },
  { step: 2, title: 'Study the concept or formula', description: 'Browse formulas, concepts, and theories with plain-English explanations.' },
  { step: 3, title: 'Use the calculator or case lab', description: 'Apply what you learn with interactive tools and guided case missions.' },
  { step: 4, title: 'Build a structured exam answer', description: 'Turn your analysis into a postgraduate-quality answer.' },
  { step: 5, title: 'Track mistakes and revise', description: 'Mark weak areas and review them before your exam.' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F5F7] to-white">
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
            <Link to="/features" className="text-sm font-medium text-slate-600 hover:text-[#3B1D6E]">Features</Link>
            <Link to="/pricing" className="text-sm font-medium text-slate-600 hover:text-[#3B1D6E]">Pricing</Link>
            <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-[#3B1D6E]">About</Link>
            <Link to="/sign-in" className="text-sm font-medium text-slate-600 hover:text-[#3B1D6E]">Sign in</Link>
            <Link to="/sign-up" className="rounded-full bg-[#3B1D6E] px-4 py-2 text-sm font-bold text-white hover:bg-[#2d1654]">
              Start free
            </Link>
          </nav>
          <Link to="/sign-up" className="rounded-full bg-[#3B1D6E] px-4 py-2 text-sm font-bold text-white hover:bg-[#2d1654] md:hidden">
            Start free
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="text-center">
          <div className="mb-4"><Badge tone="gold">Interactive Study Platform</Badge></div>
          <h1 className="text-4xl font-extrabold text-[#241349] md:text-5xl lg:text-6xl">
            PGDBM Exam Companion
          </h1>
          <p className="mt-4 text-xl text-slate-600 md:text-2xl">
            From formula recognition to exam-ready answers
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-slate-500">
            The interactive study platform for MANCOSA PGDBM students. Master formulas, practice with past paper cases, and build structured exam answers.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/sign-up"
              className="rounded-full bg-[#3B1D6E] px-8 py-3 text-lg font-bold text-white hover:bg-[#2d1654]"
            >
              Start free
            </Link>
            <Link
              to="/pricing"
              className="rounded-full border-2 border-[#3B1D6E] px-8 py-3 text-lg font-bold text-[#3B1D6E] hover:bg-slate-50"
            >
              View pricing
            </Link>
            <Link
              to="/om"
              className="rounded-full border border-slate-300 px-8 py-3 text-lg font-bold text-slate-700 hover:bg-white"
            >
              Open demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-center text-2xl font-bold text-[#241349] md:text-3xl">
          Everything you need to ace your OM exam
        </h2>
        <p className="mt-2 text-center text-slate-600">
          Purpose-built tools for MANCOSA PGDBM Operations Management
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <Link
              key={feature.title}
              to={feature.link}
              className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-[#3B1D6E] hover:shadow-lg"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{feature.icon}</span>
                <h3 className="font-semibold text-slate-900 group-hover:text-[#3B1D6E]">{feature.title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-center text-2xl font-bold text-[#241349] md:text-3xl">
          How it works
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {STEPS.map((step) => (
            <div key={step.step} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#3B1D6E] text-lg font-bold text-white">
                {step.step}
              </div>
              <h3 className="mt-3 font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-1 text-xs text-slate-500">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <Card tone="gold" title="Disclaimer">
          <p className="text-center text-sm text-slate-600">
            This is an independent study support tool and does not replace official MANCOSA materials.
            Students must rely on their official module guides, prescribed textbooks and institutional instructions.
          </p>
        </Card>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl bg-[#3B1D6E] p-8 text-center md:p-12">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Ready to improve your exam preparation?
          </h2>
          <p className="mt-2 text-slate-200">
            Start with the free plan. Upgrade when you need full access.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              to="/sign-up"
              className="rounded-full bg-white px-8 py-3 text-lg font-bold text-[#3B1D6E] hover:bg-slate-100"
            >
              Get started free
            </Link>
            <Link
              to="/pricing"
              className="rounded-full border-2 border-white px-8 py-3 text-lg font-bold text-white hover:bg-white/10"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="font-bold text-[#241349]">PGDBM Exam Companion</p>
              <p className="text-sm text-slate-500">Interactive study support for MANCOSA PGDBM</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
              <Link to="/features">Features</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/disclaimer">Disclaimer</Link>
            </div>
          </div>
          <div className="mt-6 text-center text-xs text-slate-400">
            <p>This platform is an independent study support tool. It is not affiliated with or endorsed by MANCOSA.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
