import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { SearchBox, Badge } from "./ui";
import { theories, units, hubs, theoryMatchesSearch } from "../data";

type NavLink = { to: string; label: string; short: string; icon: string };

const NAV_LINKS: NavLink[] = [
  { to: "/ob", label: "Home", short: "Home", icon: "\u2302" },
  { to: "/ob/units", label: "Units", short: "Units", icon: "\u2234" },
  { to: "/ob/theories", label: "Theories", short: "Theory", icon: "\u2699" },
  { to: "/ob/motivation", label: "Motivation", short: "Motiv", icon: "\u2605" },
  { to: "/ob/leadership", label: "Leadership", short: "Lead", icon: "\u25C6" },
  { to: "/ob/culture-change", label: "Culture & Change", short: "Cult", icon: "\u25A0" },
  { to: "/ob/conflict-power-politics", label: "Conflict, Power & Politics", short: "Conf", icon: "\u2694" },
  { to: "/ob/stress-wellbeing", label: "Stress & Wellbeing", short: "Stress", icon: "\u2665" },
  { to: "/ob/case-analyzer", label: "Case Analyzer", short: "Case", icon: "\u2315" },
  { to: "/ob/exam-builder", label: "Exam Builder", short: "Exam", icon: "\u270E" },
  { to: "/ob/paragraph-bank", label: "Paragraph Bank", short: "Para", icon: "\u2630" },
  { to: "/ob/past-papers", label: "Past Papers", short: "Papers", icon: "\u29C9" },
  { to: "/ob/command-words", label: "Command Words", short: "Words", icon: "\u2753" },
  { to: "/ob/checklist", label: "Checklist", short: "Check", icon: "\u2713" },
];

const BOTTOM_NAV = NAV_LINKS.slice(0, 5);

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  const filteredCount = theories.filter((t) => theoryMatchesSearch(t, searchTerm)).length;

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#FBF7EC] text-[#241349] selection:bg-[#E4CE92]">
      <header className="sticky top-0 z-40 border-b border-[#E6E1F2] bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 md:px-6">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D9D2EC] text-[#3B1D6E] md:hidden"
            aria-label="Toggle menu"
          >
            <span className="text-lg">{menuOpen ? "\u2715" : "\u2630"}</span>
          </button>

          <Link to="/ob" className="flex-shrink-0" onClick={closeMenu}>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#C9A24B]">
              ORB801
            </p>
            <h1 className="font-display text-base font-semibold leading-tight text-[#241349] md:text-lg">
              Exam Command Centre
            </h1>
          </Link>

          <div className="ml-auto hidden w-full max-w-xs md:block">
            <SearchBox value={searchTerm} onChange={setSearchTerm} />
          </div>

          <div className="ml-2 hidden flex-shrink-0 gap-2 lg:flex">
            <Badge tone="mist">{`${filteredCount} theories`}</Badge>
            <Badge tone="gold">{`${units.length} units`}</Badge>
            <Badge tone="royal">{`${hubs.length} hubs`}</Badge>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-30 md:hidden" onClick={closeMenu}>
          <div className="absolute inset-0 bg-black/20" />
          <nav
            className="absolute left-0 top-0 h-full w-64 overflow-y-auto bg-white p-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4">
              <SearchBox value={searchTerm} onChange={setSearchTerm} placeholder="Search..." />
            </div>
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={closeMenu}
                    className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold transition ${
                      location.pathname === link.to
                        ? "bg-[#F4F1FA] text-[#3B1D6E]"
                        : "text-[#564E6C] hover:bg-[#FBF7EC] hover:text-[#3B1D6E]"
                    }`}
                  >
                    <span className="w-5 text-center">{link.icon}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <nav className="hidden border-b border-[#E6E1F2] bg-white md:block">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-1.5 px-4 py-2 md:px-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-full px-3.5 py-1.5 text-[13px] font-bold transition ${
                location.pathname === link.to
                  ? "border border-[#3B1D6E] bg-[#3B1D6E] text-white shadow-sm"
                  : "border border-[#D9D2EC] bg-white text-[#3B1D6E] hover:border-[#C9A24B] hover:text-[#7A5E12]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      <main className="mx-auto w-full max-w-7xl px-4 pb-20 pt-4 md:px-6 md:pb-8 md:pt-6">
        <Outlet />

        <footer className="mt-10 border-t border-[#E6E1F2] pt-4 text-center text-xs text-[#6B6580]">
          <p>© {new Date().getFullYear()} Siphokazi Dludla. All rights reserved.</p>
          <p className="mt-1">
            Built for personal MANCOSA PGDBM study support. Academic sources remain the property of their respective owners.
          </p>
        </footer>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#E6E1F2] bg-white/95 backdrop-blur-sm md:hidden">
        <div className="flex">
          {BOTTOM_NAV.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`flex flex-1 flex-col items-center gap-0.5 py-2 text-[10px] font-semibold ${
                location.pathname === link.to ? "text-[#3B1D6E]" : "text-[#9A93AD]"
              }`}
            >
              <span className="text-base">{link.icon}</span>
              {link.short}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}