import { Link } from 'react-router-dom';
import { Card, Badge } from '../../components/ui';
import { useAuth } from '../../context/AuthContext';
import { getPlanName, getPlanFeatures } from '../../lib/access';
import { getPaymentProviderInfo } from '../../lib/payments';

export default function AccountPage() {
  const { user, plan, subscriptionStatus, signOut, upgradePlan } = useAuth();
  const paymentProvider = getPaymentProviderInfo();

  if (!user) {
    return (
      <div className="min-h-screen bg-[#F5F5F7] flex items-center justify-center px-4">
        <Card tone="white">
          <h1 className="text-xl font-bold text-[#241349]">Sign in required</h1>
          <p className="mt-2 text-slate-600">Please sign in to view your account.</p>
          <Link
            to="/sign-in"
            className="mt-4 inline-block rounded-full bg-[#3B1D6E] px-6 py-2 font-bold text-white hover:bg-[#2d1654]"
          >
            Sign in
          </Link>
        </Card>
      </div>
    );
  }

  const handleUpgrade = (newPlan: 'om_monthly' | 'full_pgdbm') => {
    // Demo mode: directly upgrade
    upgradePlan(newPlan);
    alert(`Demo: Upgraded to ${getPlanName(newPlan)}! In production, this would redirect to payment.`);
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
            <Link to="/account" className="text-sm font-medium text-[#3B1D6E]">Account</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-2xl font-bold text-[#241349]">Your Account</h1>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* Profile info */}
          <Card tone="white">
            <h2 className="font-bold text-[#241349]">Profile</h2>
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-sm text-slate-500">Email</p>
                <p className="font-medium text-slate-900">{user.email}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Account ID</p>
                <p className="font-mono text-sm text-slate-600">{user.id}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Created</p>
                <p className="text-sm text-slate-600">
                  {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
            <button
              onClick={signOut}
              className="mt-4 rounded-full border border-red-300 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
            >
              Sign out
            </button>
          </Card>

          {/* Subscription */}
          <Card tone="white">
            <h2 className="font-bold text-[#241349]">Subscription</h2>
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-sm text-slate-500">Current plan</p>
                <p className="font-medium text-slate-900">{getPlanName(plan)}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Status</p>
                <Badge tone={subscriptionStatus === 'active' ? 'gold' : 'mist'}>
                  {subscriptionStatus}
                </Badge>
              </div>
            </div>

            {plan === 'free' && (
              <div className="mt-4 space-y-3">
                <p className="text-sm text-slate-600">Upgrade to unlock premium features:</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleUpgrade('om_monthly')}
                    className="rounded-full bg-[#3B1D6E] px-4 py-2 text-sm font-bold text-white hover:bg-[#2d1654]"
                  >
                    OM Monthly (R149/mo)
                  </button>
                  <button
                    onClick={() => handleUpgrade('full_pgdbm')}
                    className="rounded-full border border-[#3B1D6E] px-4 py-2 text-sm font-bold text-[#3B1D6E] hover:bg-slate-50"
                  >
                    Full PGDBM (R299/mo)
                  </button>
                </div>
                <p className="text-xs text-slate-500">
                  Payment via {paymentProvider.name} coming soon. Demo mode active.
                </p>
              </div>
            )}

            {plan !== 'free' && (
              <div className="mt-4">
                <p className="text-sm text-slate-600">
                  Manage your subscription through the billing portal.
                </p>
                <button
                  className="mt-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
                  onClick={() => alert('Billing portal coming soon!')}
                >
                  Manage billing
                </button>
                <p className="mt-2 text-xs text-slate-500">
                  Billing management will connect to {paymentProvider.name} soon.
                </p>
              </div>
            )}
          </Card>
        </div>

        {/* Plan features */}
        <Card tone="white">
          <h2 className="font-bold text-[#241349]">Your plan includes</h2>
          <ul className="mt-4 grid gap-2 md:grid-cols-2">
            {getPlanFeatures(plan).map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </Card>

        {/* Quick links */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/om" className="rounded-full bg-[#3B1D6E] px-4 py-2 text-sm font-bold text-white hover:bg-[#2d1654]">
            Go to Dashboard
          </Link>
          <Link to="/pricing" className="rounded-full border border-slate-300 px-4 py-2 text-sm font-bold text-slate-600 hover:bg-white">
            Compare plans
          </Link>
        </div>
      </main>
    </div>
  );
}
