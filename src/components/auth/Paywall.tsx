import type { ReactNode } from "react";

type PaywallProps = {
  children?: ReactNode;
  featureName?: string;
  description?: string;
  requiredPlan?: string;
};

export default function Paywall({ children }: PaywallProps) {
  return <>{children}</>;
}