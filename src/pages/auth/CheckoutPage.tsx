import { useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { Card, Badge } from '../../components/ui';
import { useAuth } from '../../context/AuthContext';
import { getPlanName, getPlanPrice } from '../../lib/access';
import type { Plan } from '../../types/subscription';

export default function CheckoutSuccessPage() {
  const navigate = useNavigate();
  const { upgradePlan, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      upgradePlan('om_monthly');
    }
  }, [isAuthenticated, upgradePlan]);

  return (
    <div className="min-h-screen bg-[#F5F5F7] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Card tone="white">
          <div className="text-center py-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="mt-4 text-xl font-bold text-[#241349]">Payment successful!</h1>
            <p className="mt-2 text-slate-600">
              {isAuthenticated
                ? 'Your subscription has been activated. You now have access to premium features.'
                : 'Your account has been created and your subscription is active.'}
            </p>
            <div className="mt-4"><Badge tone="gold">Demo mode: Payment simulated</Badge></div>
            <div className="mt-6 space-y-3">
              <Link
                to="/om"
                className="block w-full rounded-full bg-[#3B1D6E] py-3 font-bold text-white text-center hover:bg-[#2d1654]"
              >
                Go to Dashboard
              </Link>
              <Link
                to="/account"
                className="block w-full rounded-full border border-slate-300 py-3 font-bold text-slate-600 text-center hover:bg-white"
              >
                View Account
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export function CheckoutCancelPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Card tone="white">
          <div className="text-center py-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100">
              <svg className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h1 className="mt-4 text-xl font-bold text-[#241349]">Payment cancelled</h1>
            <p className="mt-2 text-slate-600">
              Your payment was cancelled. You can try again or continue with the free plan.
            </p>
            <div className="mt-6 space-y-3">
              <Link
                to="/pricing"
                className="block w-full rounded-full bg-[#3B1D6E] py-3 font-bold text-white text-center hover:bg-[#2d1654]"
              >
                View Pricing
              </Link>
              <Link
                to="/om"
                className="block w-full rounded-full border border-slate-300 py-3 font-bold text-slate-600 text-center hover:bg-white"
              >
                Continue with Free Plan
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export function CheckoutPendingPage() {
  const { upgradePlan, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const plan = (searchParams.get('plan') as Plan) || 'om_monthly';

  const handleDemoComplete = () => {
    if (isAuthenticated) {
      upgradePlan('om_monthly');
    }
    navigate('/checkout/success');
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Card tone="white">
          <div className="text-center py-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#3B1D6E]/10">
              <svg className="h-8 w-8 text-[#3B1D6E] animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h1 className="mt-4 text-xl font-bold text-[#241349]">Complete your purchase</h1>
            <p className="mt-2 text-slate-600">
              You're subscribing to <strong>{getPlanName(plan)}</strong> for {getPlanPrice(plan)}
            </p>
            <div className="mt-4"><Badge tone="gold">Demo mode</Badge></div>
            <p className="mt-4 text-sm text-slate-500">
              Payment integration (Paystack/Stripe) coming soon.
              <br />
              For now, click below to simulate a successful payment.
            </p>
            <div className="mt-6 space-y-3">
              <button
                onClick={handleDemoComplete}
                className="block w-full rounded-full bg-[#3B1D6E] py-3 font-bold text-white hover:bg-[#2d1654]"
              >
                Simulate Successful Payment
              </button>
              <Link
                to="/checkout/cancel"
                className="block w-full rounded-full border border-slate-300 py-3 font-bold text-slate-600 text-center hover:bg-white"
              >
                Cancel
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
