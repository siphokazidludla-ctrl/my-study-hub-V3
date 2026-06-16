import { Link } from 'react-router-dom';
import { Badge } from '../ui';
import type { Plan } from '../../types/subscription';
import { getPlanName, getPlanPrice } from '../../lib/access';

interface UpgradePromptProps {
  currentPlan: Plan;
  requiredPlan: Plan;
  featureName?: string;
  compact?: boolean;
}

export default function UpgradePrompt({
  currentPlan,
  requiredPlan,
  featureName,
  compact = false,
}: UpgradePromptProps) {
  if (compact) {
    return (
      <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-sm font-medium text-amber-800">
              {featureName ? `Unlock ${featureName}` : 'Upgrade required'}
            </span>
          </div>
          <Link
            to="/pricing"
            className="text-sm font-semibold text-[#3B1D6E] hover:underline"
          >
            Upgrade
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border-2 border-dashed border-[#3B1D6E] bg-slate-50 p-6 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#3B1D6E]/10">
        <svg className="h-8 w-8 text-[#3B1D6E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>

      <h3 className="text-lg font-bold text-slate-900">
        {featureName ? `${featureName} is a premium feature` : 'Upgrade to unlock'}
      </h3>

      <p className="mt-2 text-sm text-slate-600">
        Your <Badge>{getPlanName(currentPlan)}</Badge> doesn't include this feature.
        <br />
        Upgrade to <Badge tone="gold">{getPlanName(requiredPlan)}</Badge> ({getPlanPrice(requiredPlan)}) to unlock it.
      </p>

      <div className="mt-4 flex flex-wrap justify-center gap-3">
        <Link
          to="/pricing"
          className="rounded-full bg-[#3B1D6E] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#2d1654]"
        >
          View Pricing
        </Link>
        <Link
          to="/sign-in"
          className="rounded-full border border-slate-300 px-6 py-2.5 text-sm font-bold text-slate-700 hover:bg-white"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
}
