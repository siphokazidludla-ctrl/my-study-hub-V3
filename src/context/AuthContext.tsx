import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Plan, SubscriptionStatus, User, AuthState } from '../types/subscription';

interface AuthContextValue extends AuthState {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  upgradePlan: (plan: Plan) => void;
}

const STORAGE_KEY = 'pgdbm_exam_companion_auth';

const defaultAuthState: AuthState = {
  user: null,
  loading: true,
  isAuthenticated: false,
  subscriptionStatus: 'free',
  plan: 'free',
};

const AuthContext = createContext<AuthContextValue | null>(null);

function getStoredAuth(): AuthState | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // Ignore parse errors
  }
  return null;
}

function setStoredAuth(state: AuthState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore storage errors
  }
}

function clearStoredAuth(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignore storage errors
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>(() => {
    const stored = getStoredAuth();
    return stored ? { ...stored, loading: false } : { ...defaultAuthState, loading: false };
  });

  useEffect(() => {
    // Check stored auth on mount
    const stored = getStoredAuth();
    if (stored) {
      setState({ ...stored, loading: false });
    } else {
      setState((prev) => ({ ...prev, loading: false }));
    }
  }, []);

  const signIn = async (email: string, _password: string): Promise<void> => {
    // Demo mode: accept any email/password
    const newState: AuthState = {
      user: {
        id: `user_${Date.now()}`,
        email,
        createdAt: new Date().toISOString(),
      },
      loading: false,
      isAuthenticated: true,
      subscriptionStatus: state.subscriptionStatus,
      plan: state.plan,
    };
    setStoredAuth(newState);
    setState(newState);
  };

  const signUp = async (email: string, _password: string): Promise<void> => {
    // Demo mode: create new user with free plan
    const newState: AuthState = {
      user: {
        id: `user_${Date.now()}`,
        email,
        createdAt: new Date().toISOString(),
      },
      loading: false,
      isAuthenticated: true,
      subscriptionStatus: 'free',
      plan: 'free',
    };
    setStoredAuth(newState);
    setState(newState);
  };

  const signOut = () => {
    clearStoredAuth();
    setState(defaultAuthState);
  };

  const upgradePlan = (plan: Plan) => {
    const newState: AuthState = {
      ...state,
      subscriptionStatus: 'active',
      plan,
    };
    setStoredAuth(newState);
    setState(newState);
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        signUp,
        signOut,
        upgradePlan,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
