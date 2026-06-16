import { Link } from 'react-router-dom';

export default function PrivacyPage() {
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
        <h1 className="text-3xl font-extrabold text-[#241349]">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: June 2026</p>

        <div className="mt-8 space-y-6 text-slate-600">
          <section>
            <h2 className="text-lg font-bold text-[#241349]">1. Information We Collect</h2>
            <p className="mt-2">
              We collect information you provide directly to us, such as when you create an account, subscribe to our service, or contact us for support. This includes:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Name and email address</li>
              <li>Account credentials (hashed passwords)</li>
              <li>Payment information (processed securely by our payment provider)</li>
              <li>Study progress and preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#241349]">2. How We Use Your Information</h2>
            <p className="mt-2">We use the information we collect to:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#241349]">3. Information Sharing</h2>
            <p className="mt-2">
              We do not share your personal information with third parties except as described in this policy or with your consent. We may share information with:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Service providers who perform services on our behalf</li>
              <li>Payment processors to complete your transactions</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#241349]">4. Data Security</h2>
            <p className="mt-2">
              We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#241349]">5. Your Rights</h2>
            <p className="mt-2">You have the right to:</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Access and update your personal information</li>
              <li>Delete your account and associated data</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#241349]">6. Contact Us</h2>
            <p className="mt-2">
              If you have any questions about this Privacy Policy, please contact us through our <Link to="/contact" className="text-[#3B1D6E] hover:underline">contact page</Link>.
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
