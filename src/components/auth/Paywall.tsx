import { Link } from 'react-router-dom';
import { Card, Badge } from '../ui';
import { useAuth } from '../../context/AuthContext';
import { getPlanName } from '../../lib/access';

interface PaywallProps {
  featureName: string;
  description?: string;
  requiredPlan?: 'om_monthly' | 'full_pgdbm';
  showCurrentPlan?: boolean;
}

export default function Paywall({
  featureName,
  description,
  requiredPlan = 'om_monthly',
  showCurrentPlan = true,
}: PaywallProps) {
  const { plan } = useAuth();

  return (
    <Card title="Premium Feature" tone="gold">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <svg className="h-12 w-12 text-[#3B1D6E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <div>
            <h3 className="font-semibold text-lg">{featureName}</h3>
            {description && <p className="text-sm text-slate-600">{description}</p>}
          </div>
        </div>

        {showCurrentPlan && (
          <div className="rounded-lg bg-slate-50 p-3">
            <p className="text-sm text-slate-600">
              Your current plan: <Badge>{getPlanName(plan)}</Badge>
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Upgrade to <strong>{requiredPlan === 'om_monthly' ? 'OM Monthly' : 'Full PGDBM'}</strong> to unlock this feature.
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          <Link
            to="/pricing"
            className="rounded-full bg-[#3B1D6E] px-5 py-2 text-sm font-bold text-white hover:bg-[#2d1654]"
          >
            View Pricing
          </Link>
          <Link
            to="/account"
            className="rounded-full border border-[#3B1D6E] px-5 py-2 text-sm font-bold text-[#3B1D6E] hover:bg-slate-50"
          >
            Manage Subscription
          </Link>
        </div>
      </div>
    </Card>
  );
}
