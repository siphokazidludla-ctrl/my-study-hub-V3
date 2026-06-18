import { Link, Outlet, useLocation } from "react-router-dom";
import { MODULES } from "../data";
import { useState } from "react";

const globalLinks = [
  { to: "/", label: "Home" },
  { to: "/command-words", label: "Command Words" },
  { to: "/references", label: "References" },
];

const tools = [
  "units",
  "theories",
  "cases",
  "past-papers",
  "exam-builder",
  "paragraph-bank",
  "checklist",
  "calculator",
  "formulas",
];

const moduleTools: Record<string, string[]> = {
  ob: [
    "units",
    "theories",
    "case-analyzer",
    "past-papers",
    "exam-builder",
    "paragraph-bank",
    "checklist",
    "command-words",
    "references",
  ],
  ikm: tools,
  om: tools,
  mm: tools,
};

export default function Layout() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (to: string) =>
    location.pathname === to || (to !== "/" && location.pathname.startsWith(to));

  const nav = (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#9A93AD]">
          Global
        </p>
        <div className="flex flex-col gap-1">
          {globalLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`rounded-full px-3 py-2 text-sm font-bold ${
                isActive(l.to)
                  ? "bg-[#3B1D6E] text-white"
                  : "bg-white text-[#3B1D6E] hover:bg-[#F4F1FA]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#9A93AD]">
          Subjects
        </p>

        <div className="space-y-2">
          {MODULES.map((m) => (
            <div key={m.id} className="rounded-2xl border border-[#E6E1F2] bg-white p-2">
              <Link
                to={`/${m.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-3 py-2 text-sm font-extrabold ${
                  isActive(`/${m.id}`) ? "bg-[#FBF7EC] text-[#7A5E12]" : "text-[#241349]"
                }`}
              >
                {m.code} - {m.name}
              </Link>

              <div className="mt-1 grid grid-cols-2 gap-1">
                {(moduleTools[m.id] ?? tools).map((tool) => (
                  <Link
                    key={tool}
                    to={`/${m.id}/${tool}`}
                    onClick={() => setOpen(false)}
                    className="rounded-full px-2 py-1 text-[11px] font-semibold text-[#6B6580] hover:bg-[#F4F1FA]"
                  >
                    {tool.replace("-", " ")}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      <header className="sticky top-0 z-30 border-b border-[#E6E1F2] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
          <button
            className="rounded-full border border-[#D9D2EC] px-3 py-2 text-[#3B1D6E] lg:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? "x" : "="}
          </button>

          <Link to="/" className="mr-auto">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#C9A24B]">
              MANCOSA PGDBM
            </p>
            <h1 className="font-display text-lg font-bold text-[#241349]">
              Exam Companion
            </h1>
          </Link>

          <div className="hidden gap-2 lg:flex">
            {MODULES.map((m) => (
              <Link
                key={m.id}
                to={`/${m.id}`}
                className={`rounded-full border px-3 py-2 text-sm font-bold ${
                  isActive(`/${m.id}`)
                    ? "border-[#3B1D6E] bg-[#3B1D6E] text-white"
                    : "border-[#D9D2EC] bg-white text-[#3B1D6E]"
                }`}
              >
                {m.code}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {open && (
        <aside className="fixed inset-0 z-20 bg-black/20 lg:hidden" onClick={() => setOpen(false)}>
          <nav
            onClick={(e) => e.stopPropagation()}
            className="h-full w-80 overflow-y-auto bg-[#F5F5F7] p-4 shadow-xl"
          >
            {nav}
          </nav>
        </aside>
      )}

      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-5 lg:grid-cols-[320px_1fr]">
        <aside className="hidden lg:block">{nav}</aside>
        <main className="min-w-0 pb-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
