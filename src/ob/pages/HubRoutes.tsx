import HubPage from "./HubPage";

export function MotivationPage() {
  return <HubPage hubId="motivation" backLink="/theories" backLabel="Theories" />;
}

export function LeadershipPage() {
  return <HubPage hubId="leadership" backLink="/theories" backLabel="Theories" />;
}

export function CultureChangePage() {
  return (
    <div className="space-y-5">
      <a
        href="/ob/theories"
        className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D9D2EC] bg-white px-4 py-2 text-sm font-bold text-[#3B1D6E] shadow-sm transition hover:border-[#C9A24B] hover:text-[#7A5E12]"
      >
        <span className="text-base">{"<"}</span> Theories
      </a>

      <div className="mb-2">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C9A24B]">
          Combined Hub
        </p>
        <h2 className="font-display text-2xl font-semibold text-[#241349] md:text-3xl">
          Culture and Change
        </h2>
        <p className="mt-1 max-w-3xl text-sm text-[#564E6C]">
          Culture shapes how change is received; change reshapes culture. This combined hub links both topics for integrated exam answers.
        </p>
      </div>

      <HubPage hubId="culture" backLink="/theories" backLabel="Theories" />
      <HubPage hubId="change" backLink="/theories" backLabel="Theories" />
    </div>
  );
}

export function ConflictPowerPoliticsPage() {
  return <HubPage hubId="conflict" backLink="/theories" backLabel="Theories" />;
}

export function StressWellbeingPage() {
  return <HubPage hubId="stress" backLink="/theories" backLabel="Theories" />;
}
