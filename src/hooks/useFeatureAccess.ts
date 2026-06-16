import { useAuth } from '../context/AuthContext';
import type { FeatureKey, Plan } from '../types/subscription';
import { canAccessFeature, canAccessModule, getFreeLimit, isPremiumFeature } from '../lib/access';

interface UseFeatureAccessResult {
  canAccess: boolean;
  isPremium: boolean;
  freeLimit: number;
  plan: Plan;
  needsUpgrade: boolean;
}

export function useFeatureAccess(featureKey: FeatureKey, moduleId?: string): UseFeatureAccessResult {
  const { user, plan, subscriptionStatus } = useAuth();

  const isPremium = isPremiumFeature(featureKey);
  const freeLimit = getFreeLimit(featureKey);

  const canAccess = user ? canAccessFeature({ user, subscriptionStatus, plan }, featureKey) : false;
  const moduleAccess = moduleId ? (user ? canAccessModule({ user, subscriptionStatus, plan }, moduleId) : false) : true;

  const needsUpgrade = !canAccess || (moduleId ? !moduleAccess : false);

  return {
    canAccess: canAccess && (!moduleId || moduleAccess),
    isPremium,
    freeLimit,
    plan,
    needsUpgrade,
  };
}

export function usePlan() {
  const { plan, subscriptionStatus, isAuthenticated, user } = useAuth();

  return {
    plan,
    subscriptionStatus,
    isAuthenticated,
    user,
    isFree: plan === 'free',
    isOMMonthly: plan === 'om_monthly',
    isFullPGDBM: plan === 'full_pgdbm',
    isPremium: plan !== 'free',
  };
}
