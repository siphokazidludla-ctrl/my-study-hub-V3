export function useFeatureAccess(...args: any[]) {
  return {
    hasAccess: true,
    canAccess: true,
    needsUpgrade: false,
    isAuthenticated: true,
    plan: "local",
    subscriptionStatus: "active",
    requiresUpgrade: false,
    reason: "",
    feature: args[0] ?? null,
    id: args[1] ?? null,
  };
}

export function useCanAccessFeature(..._args: any[]) {
  return true;
}

export function usePlan() {
  return {
    plan: "local",
    subscriptionStatus: "active",
    isAuthenticated: true,
    isFree: false,
    isPro: true,
  };
}