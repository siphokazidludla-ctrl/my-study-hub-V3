import { Link } from 'react-router-dom';
import { Card } from '../../components/ui';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-[#3B1D6E]">About</Link>
            <Link to="/sign-in" className="text-sm font-medium text-slate-600 hover:text-[#3B1D6E]">Sign in</Link>
            <Link to="/sign-up" className="rounded-full bg-[#3B1D6E] px-4 py-2 text-sm font-bold text-white hover:bg-[#2d1654]">
              Start free
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="text-3xl font-extrabold text-[#241349] md:text-4xl">Contact us</h1>
        <p className="mt-2 text-slate-600">Have questions or feedback? We'd love to hear from you.</p>

        <Card tone="white" title="Contact us">
          {submitted ? (
            <div className="text-center py-8">
              <svg className="mx-auto h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h2 className="mt-4 text-xl font-bold text-[#241349]">Message sent!</h2>
              <p className="mt-2 text-slate-600">Thank you for reaching out. We'll get back to you as soon as possible.</p>
              <Link to="/" className="mt-4 inline-block rounded-full bg-[#3B1D6E] px-6 py-2 font-bold text-white hover:bg-[#2d1654]">
                Back to home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:border-[#3B1D6E] focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:border-[#3B1D6E] focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700">Subject</label>
                <select
                  id="subject"
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:border-[#3B1D6E] focus:outline-none"
                >
                  <option value="general">General inquiry</option>
                  <option value="support">Support request</option>
                  <option value="feedback">Feedback</option>
                  <option value="billing">Billing question</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:border-[#3B1D6E] focus:outline-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-[#3B1D6E] px-6 py-3 font-bold text-white hover:bg-[#2d1654]"
              >
                Send message
              </button>
            </form>
          )}
        </Card>
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
