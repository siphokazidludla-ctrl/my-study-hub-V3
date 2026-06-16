import { Link } from 'react-router-dom';

export default function TermsPage() {
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
        <h1 className="text-3xl font-extrabold text-[#241349]">Terms of Service</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: June 2026</p>

        <div className="mt-8 space-y-6 text-slate-600">
          <section>
            <h2 className="text-lg font-bold text-[#241349]">1. Acceptance of Terms</h2>
            <p className="mt-2">
              By accessing and using PGDBM Exam Companion, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#241349]">2. Use License</h2>
            <p className="mt-2">
              Permission is granted to temporarily access the materials on PGDBM Exam Companion for personal, non-commercial study use only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained on the platform</li>
              <li>Remove any copyright or other proprietary notations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#241349]">3. Subscription and Payments</h2>
            <p className="mt-2">
              Some features of the platform require a paid subscription. Subscription fees are billed monthly or annually as selected. All payments are processed securely through our payment provider (Paystack or Stripe). You may cancel your subscription at any time from your account page.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#241349]">4. Content Disclaimer</h2>
            <p className="mt-2">
              The materials on PGDBM Exam Companion are provided for general information and educational purposes only. While we strive to keep the information accurate and current, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the materials.
            </p>
            <p className="mt-2 font-semibold">
              This platform is an independent study support tool and is not affiliated with or endorsed by MANCOSA. Students must always rely on their official module guides, prescribed textbooks, and institutional instructions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#241349]">5. User Accounts</h2>
            <p className="mt-2">
              You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#241349]">6. Limitation of Liability</h2>
            <p className="mt-2">
              In no event shall PGDBM Exam Companion, its operators, or its contributors be liable for any damages arising out of the use or inability to use the materials on this platform, even if we have been notified of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#241349]">7. Changes to Terms</h2>
            <p className="mt-2">
              We reserve the right to modify these terms at any time. Continued use of the platform after any such changes shall constitute your consent to such changes.
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
