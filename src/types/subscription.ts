export type Plan = 'free' | 'om_monthly' | 'full_pgdbm';
export type SubscriptionStatus = 'free' | 'active' | 'past_due' | 'cancelled';

export interface User {
  id: string;
  email: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  subscriptionStatus: SubscriptionStatus;
  plan: Plan;
}

export type FeatureKey =
  | 'formula_library'
  | 'calculators'
  | 'case_lab'
  | 'question_classifier'
  | 'exam_builder'
  | 'mistake_log'
  | 'all_modules';
