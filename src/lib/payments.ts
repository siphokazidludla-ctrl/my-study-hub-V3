import type { Plan } from '../types/subscription';

interface CheckoutSession {
  id: string;
  url: string;
  plan: Plan;
  createdAt: string;
}

const DEMO_CHECKOUT_KEY = 'pgdbm_demo_checkout';

export async function createCheckoutSession(plan: Plan): Promise<CheckoutSession> {
  // Demo mode: return a mock checkout session
  // In production, this would call Paystack or Stripe API

  const session: CheckoutSession = {
    id: `checkout_${Date.now()}`,
    url: `/checkout/pending?plan=${plan}`,
    plan,
    createdAt: new Date().toISOString(),
  };

  // Store session for demo purposes
  try {
    localStorage.setItem(DEMO_CHECKOUT_KEY, JSON.stringify(session));
  } catch {
    // Ignore storage errors
  }

  return session;
}

export async function getStoredCheckoutSession(): Promise<CheckoutSession | null> {
  try {
    const stored = localStorage.getItem(DEMO_CHECKOUT_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Ignore parse errors
  }
  return null;
}

export function clearCheckoutSession(): void {
  try {
    localStorage.removeItem(DEMO_CHECKOUT_KEY);
  } catch {
    // Ignore storage errors
  }
}

// In production, you would also have:
// - verifyPayment(reference: string): Promise<PaymentVerification>
// - getSubscription(subscriptionId: string): Promise<Subscription>
// - cancelSubscription(subscriptionId: string): Promise<void>
// - updatePaymentMethod(customerId: string): Promise<string>

export function getPaymentProviderInfo(): { name: string; comingSoon: boolean } {
  return {
    name: 'Paystack',
    comingSoon: true,
  };
}
