import { Link } from 'react-router-dom';
import { Card } from '../../components/ui';

export default function DisclaimerPage() {
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
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-3xl font-extrabold text-[#241349]">Disclaimer</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: June 2026</p>

        <Card tone="gold" title="Disclaimer">
          <div className="text-lg text-slate-700">
            <p className="font-semibold">This platform is an independent study support tool.</p>
            <p className="mt-3">
              It is not affiliated with, endorsed by, or connected to MANCOSA in any way.
            </p>
            <p className="mt-3">
              Students must rely on their official module guides, prescribed textbooks, and institutional instructions as their primary sources of information.
            </p>
            <p className="mt-3">
              The platform provides study support, calculators, summaries, and exam preparation workflows as supplementary educational resources.
            </p>
          </div>
        </Card>

        <div className="mt-8 space-y-6 text-slate-600">
          <section>
            <h2 className="text-lg font-bold text-[#241349]">No guarantee of results</h2>
            <p className="mt-2">
              While we strive to provide accurate and helpful study materials, we do not guarantee any specific results or examination outcomes. Your success depends on many factors including your own study efforts and understanding of the official course materials.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#241349]">Accuracy of information</h2>
            <p className="mt-2">
              We make every effort to ensure that the information provided on this platform is accurate and up to date. However, we cannot guarantee that all information is error-free. If you find any errors or discrepancies, please contact us so we can correct them.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#241349]">External links</h2>
            <p className="mt-2">
              This platform may contain links to external websites. We are not responsible for the content or accuracy of information on external sites.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#241349]">Calculated values</h2>
            <p className="mt-2">
              The calculators provided on this platform are for educational and practice purposes only. Always verify calculations using approved methods during your actual examinations. We are not responsible for any errors in calculated values.
            </p>
          </section>
        </div>

        <div className="mt-8">
          <Link to="/" className="text-[#3B1D6E] font-medium hover:underline">
            ← Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
