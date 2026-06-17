import { createContext, useContext, type ReactNode } from "react";
import type { Plan, SubscriptionStatus } from "../types/subscription";

type User = {
  name: string;
  email: string;
};

type AuthContextValue = {
  user: User;
  isAuthenticated: boolean;
  loading: boolean;
  plan: Plan;
  subscriptionStatus: SubscriptionStatus;
  signIn: (...args: any[]) => Promise<void>;
  signUp: (...args: any[]) => Promise<void>;
  signOut: (...args: any[]) => void;
  upgradePlan: (...args: any[]) => void;
};

const localAuth: AuthContextValue = {
  user: {
    name: "Siphokazi",
    email: "local@study.app",
  },
  isAuthenticated: true,
  loading: false,
  plan: "om_monthly" as Plan,
  subscriptionStatus: "active" as SubscriptionStatus,
  signIn: async () => {},
  signUp: async () => {},
  signOut: () => {},
  upgradePlan: () => {},
};

const AuthContext = createContext<AuthContextValue>(localAuth);

export function AuthProvider({ children }: { children: ReactNode }) {
  return <AuthContext.Provider value={localAuth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
