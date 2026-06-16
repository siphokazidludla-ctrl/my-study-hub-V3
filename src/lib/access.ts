import type { Plan, FeatureKey, User, SubscriptionStatus } from '../types/subscription';

interface AuthState {
  user: User | null;
  subscriptionStatus: SubscriptionStatus;
  plan: Plan;
}

const PREMIUM_FEATURES: FeatureKey[] = [
  'formula_library',
  'calculators',
  'case_lab',
  'question_classifier',
  'exam_builder',
  'mistake_log',
];

const OM_MODULE_ID = 'om';
const IKM_MODULE_ID = 'ikm';
const MM_MODULE_ID = 'mm';

const ALL_MODULES = [OM_MODULE_ID, IKM_MODULE_ID, MM_MODULE_ID, 'ob'];

export function isPremiumFeature(featureKey: FeatureKey): boolean {
  return PREMIUM_FEATURES.includes(featureKey);
}

export function canAccessFeature(auth: AuthState, featureKey: FeatureKey): boolean {
  if (!auth.user) return false;
  if (auth.plan === 'full_pgdbm') return true;
  if (auth.plan === 'om_monthly') {
    // OM Monthly can access all OM features
    return true;
  }
  // Free plan has limited access
  return false;
}

export function canAccessModule(auth: AuthState, moduleId: string): boolean {
  if (!auth.user) return false;

  const normalized = moduleId.toLowerCase();

  // Free users can only see limited previews
  if (auth.plan === 'free') {
    return false;
  }

  // OM Monthly can only access OM module
  if (auth.plan === 'om_monthly') {
    return normalized === OM_MODULE_ID || normalized === 'ob';
  }

  // Full plan can access all modules
  if (auth.plan === 'full_pgdbm') {
    return true;
  }

  return false;
}

export function getFreeLimit(featureKey: FeatureKey): number {
  switch (featureKey) {
    case 'formula_library':
      return 3;
    case 'calculators':
      return 1;
    case 'case_lab':
      return 1;
    default:
      return 0;
  }
}

export function isFeatureUnlockedForPlan(plan: Plan, featureKey: FeatureKey, moduleId?: string): boolean {
  if (plan === 'full_pgdbm') return true;
  if (plan === 'om_monthly') {
    // OM Monthly unlocks all OM features
    if (moduleId === OM_MODULE_ID || moduleId === 'ob') return true;
    return ['formula_library', 'calculators', 'case_lab', 'question_classifier', 'exam_builder', 'mistake_log'].includes(featureKey);
  }
  return false;
}

export function getPlanName(plan: Plan): string {
  switch (plan) {
    case 'free':
      return 'Free Plan';
    case 'om_monthly':
      return 'OM Monthly';
    case 'full_pgdbm':
      return 'Full PGDBM';
    default:
      return 'Unknown Plan';
  }
}

export function getPlanPrice(plan: Plan): string {
  switch (plan) {
    case 'free':
      return 'R0';
    case 'om_monthly':
      return 'R149/month';
    case 'full_pgdbm':
      return 'R299/month';
    default:
      return '';
  }
}

export function getPlanFeatures(plan: Plan): string[] {
  switch (plan) {
    case 'free':
      return [
        'Unit overview',
        'Limited formula previews (3)',
        'Limited concept previews',
        '1 sample calculator',
        '1 sample case',
      ];
    case 'om_monthly':
      return [
        'Full Operations Management access',
        'Formula Library',
        'Calculator Hub',
        'Applied calculations',
        'Case Lab',
        'Question Classifier',
        'Exam Answer Builder',
        'Mistake Log',
      ];
    case 'full_pgdbm':
      return [
        'OM, ORB, IKM and MM support',
        'All modules',
        'All calculators and case labs',
        'Progress and mistake tracking',
        'Exam practice workflows',
        'Priority support',
      ];
    default:
      return [];
  }
}
