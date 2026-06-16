import { Link } from 'react-router-dom';
import { Card, Badge } from '../../components/ui';
import type { Plan } from '../../types/subscription';

interface PricingPlan {
  id: Plan;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  ctaLink: string;
  badge?: string;
}

const PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free Plan',
    price: 'R0',
    period: 'forever',
    description: 'Try the platform with limited previews',
    features: [
      'Unit overview',
      'Limited formula previews (3)',
      'Limited concept previews',
      '1 sample calculator',
      '1 sample case',
      'Community support',
    ],
    cta: 'Start free',
    ctaLink: '/sign-up',
  },
  {
    id: 'om_monthly',
    name: 'OM Monthly',
    price: 'R149',
    period: 'per month',
    description: 'Full Operations Management access',
    features: [
      'Full Operations Management access',
      'Complete Formula Library',
      'All Calculators (EOQ, ROP, MAD, etc.)',
      'Applied calculations & worked examples',
      'Full Case Lab access',
      'Question Classifier',
      'Exam Answer Builder',
      'Mistake Log tracking',
    ],
    highlighted: true,
    cta: 'Subscribe',
    ctaLink: '/checkout?plan=om_monthly',
    badge: 'Most popular',
  },
  {
    id: 'full_pgdbm',
    name: 'Full PGDBM',
    price: 'R299',
    period: 'per month',
    description: 'All PGDBM modules in one plan',
    features: [
      'OM, ORB, IKM and MM support',
      'All modules and tools',
      'All calculators and case labs',
      'Progress and mistake tracking',
      'Exam practice workflows',
      'Priority email support',
      'Early access to new features',
    ],
    cta: 'Subscribe',
    ctaLink: '/checkout?plan=full_pgdbm',
    badge: 'Best value',
  },
];

export default function PricingPage() {
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
            <Link to="/features" className="text-sm font-medium text-slate-600 hover:text-[#3B1D6E]">Features</Link>
            <Link to="/pricing" className="text-sm font-medium text-[#3B1D6E]">Pricing</Link>
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
            Simple, transparent pricing
          </h1>
          <p className="mt-2 text-lg text-slate-600">
            Choose the plan that fits your study needs
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Payment integration coming soon. Demo mode available.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="grid gap-6 md:grid-cols-3">
          {PLANS.map((plan) => (
            <Card
              key={plan.id}
              tone={plan.highlighted ? 'gold' : 'white'}
            >
              <div className={`space-y-4 ${plan.highlighted ? 'ring-2 ring-[#3B1D6E] rounded-xl' : ''}`}>
                {plan.badge && (
                  <div className="flex justify-center"><Badge tone="gold">{plan.badge}</Badge></div>
                )}
                <div>
                  <h2 className="text-xl font-bold text-[#241349]">{plan.name}</h2>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-[#3B1D6E]">{plan.price}</span>
                    <span className="text-slate-500">/{plan.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">{plan.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-700">Includes:</h3>
                  <ul className="mt-2 space-y-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={plan.ctaLink}
                  className={`block w-full rounded-full py-3 text-center font-bold ${
                    plan.highlighted
                      ? 'bg-[#3B1D6E] text-white hover:bg-[#2d1654]'
                      : 'border-2 border-[#3B1D6E] text-[#3B1D6E] hover:bg-slate-50'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <Card tone="white">
          <h2 className="text-xl font-bold text-[#241349]">Frequently asked questions</h2>
          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-semibold text-slate-700">Can I try before I buy?</h3>
              <p className="text-sm text-slate-600">Yes! The Free plan gives you limited access to explore the platform. No credit card required.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-700">What payment methods do you accept?</h3>
              <p className="text-sm text-slate-600">Payment integration (Paystack/Stripe) is coming soon. For now, you can explore the demo mode.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-700">Can I upgrade or downgrade my plan?</h3>
              <p className="text-sm text-slate-600">Yes, you can change your plan at any time from your account page.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-700">Is this affiliated with MANCOSA?</h3>
              <p className="text-sm text-slate-600">No, this is an independent study support tool. Always use official MANCOSA materials as your primary source.</p>
            </div>
          </div>
        </Card>
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
