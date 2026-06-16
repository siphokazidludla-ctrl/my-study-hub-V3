import { Link } from 'react-router-dom';
import { Card } from '../../components/ui';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F7]">
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
            <Link to="/about" className="text-sm font-medium text-[#3B1D6E]">About</Link>
            <Link to="/sign-in" className="text-sm font-medium text-slate-600 hover:text-[#3B1D6E]">Sign in</Link>
            <Link to="/sign-up" className="rounded-full bg-[#3B1D6E] px-4 py-2 text-sm font-bold text-white hover:bg-[#2d1654]">
              Start free
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-3xl font-extrabold text-[#241349] md:text-4xl">About PGDBM Exam Companion</h1>

        <Card tone="white">
          <h2 className="text-xl font-bold text-[#241349]">Our mission</h2>
          <p className="mt-3 text-slate-600">
            PGDBM Exam Companion is an independent study support platform designed to help MANCOSA PGDBM students prepare more effectively for their exams. We provide interactive tools, formula calculators, case study workflows, and exam answer builders that complement your official module materials.
          </p>
        </Card>

        <Card tone="white">
          <h2 className="text-xl font-bold text-[#241349]">Who we are</h2>
          <p className="mt-3 text-slate-600">
            We are an independent team of educators and developers passionate about making postgraduate business education more accessible. Our platform is built specifically for the MANCOSA PGDBM curriculum, with careful attention to the prescribed textbooks and module guides.
          </p>
        </Card>

        <Card tone="white">
          <h2 className="text-xl font-bold text-[#241349]">What we offer</h2>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li className="flex items-start gap-2">
              <svg className="mt-0.5 h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Interactive formula calculators with step-by-step guidance
            </li>
            <li className="flex items-start gap-2">
              <svg className="mt-0.5 h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Past paper style case studies with worked solutions
            </li>
            <li className="flex items-start gap-2">
              <svg className="mt-0.5 h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Question classifier to help identify problem types
            </li>
            <li className="flex items-start gap-2">
              <svg className="mt-0.5 h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Exam answer builder with postgraduate structure
            </li>
            <li className="flex items-start gap-2">
              <svg className="mt-0.5 h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Mistake tracking and revision support
            </li>
          </ul>
        </Card>

        <Card tone="gold">
          <h2 className="text-xl font-bold text-[#241349]">Important disclaimer</h2>
          <p className="mt-3 text-slate-600">
            This platform is an independent study support tool. It is not affiliated with, endorsed by, or connected to MANCOSA in any way. Students must always rely on their official module guides, prescribed textbooks, and institutional instructions as their primary sources of information.
          </p>
        </Card>

        <div className="mt-8 flex justify-center gap-4">
          <Link to="/features" className="rounded-full bg-[#3B1D6E] px-6 py-2.5 font-bold text-white hover:bg-[#2d1654]">
            Explore features
          </Link>
          <Link to="/contact" className="rounded-full border-2 border-[#3B1D6E] px-6 py-2.5 font-bold text-[#3B1D6E] hover:bg-slate-50">
            Contact us
          </Link>
        </div>
      </main>

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
