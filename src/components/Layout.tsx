import { Link, Outlet, useLocation } from 'react-router-dom';
import { MODULES } from '../data';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const globalLinks = [
  { to: '/', label: 'Home' },
  { to: '/command-words', label: 'Command Words' },
  { to: '/references', label: 'References' },
];

const tools = ['units','theories','cases','past-papers','exam-builder','paragraph-bank','checklist'];

export default function Layout() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { isAuthenticated, user, signOut, plan } = useAuth();
  const isActive = (to: string) => location.pathname === to || (to !== '/' && location.pathname.startsWith(to));

  const nav = (
    <div className="space-y-4">
      <div>
        <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#9A93AD]">Global</p>
        <div className="flex flex-col gap-1">
          {globalLinks.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className={`rounded-full px-3 py-2 text-sm font-bold ${isActive(l.to) ? 'bg-[#3B1D6E] text-white' : 'bg-white text-[#3B1D6E] hover:bg-[#F4F1FA]'}`}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#9A93AD]">Subjects</p>
        <div className="space-y-2">
          <div className="rounded-2xl border border-[#E6E1F2] bg-white p-2">
            <Link to="/ob" onClick={() => setOpen(false)} className={`block rounded-xl px-3 py-2 text-sm font-extrabold ${isActive('/ob') ? 'bg-[#FBF7EC] text-[#7A5E12]' : 'text-[#241349]'}`}>ORB801 - Organisational Behaviour</Link>
            <div className="mt-1 grid grid-cols-2 gap-1">
              {['units','theories','case-analyzer','past-papers','exam-builder','paragraph-bank','checklist','command-words'].map((tool) => (
                <Link key={tool} to={`/ob/${tool}`} onClick={() => setOpen(false)} className="rounded-full px-2 py-1 text-[11px] font-semibold text-[#6B6580] hover:bg-[#F4F1FA]">{tool.replace('-', ' ')}</Link>
              ))}
            </div>
          </div>
          {MODULES.map((m) => (
            <div key={m.id} className="rounded-2xl border border-[#E6E1F2] bg-white p-2">
              <Link to={`/${m.id}`} onClick={() => setOpen(false)} className={`block rounded-xl px-3 py-2 text-sm font-extrabold ${isActive(`/${m.id}`) ? 'bg-[#FBF7EC] text-[#7A5E12]' : 'text-[#241349]'}`}>{m.code} - {m.name}</Link>
              <div className="mt-1 grid grid-cols-2 gap-1">
                {tools.map((tool) => (
                  <Link key={tool} to={`/${m.id}/${tool}`} onClick={() => setOpen(false)} className="rounded-full px-2 py-1 text-[11px] font-semibold text-[#6B6580] hover:bg-[#F4F1FA]">{tool.replace('-', ' ')}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#9A93AD]">Help</p>
        <div className="flex flex-col gap-1">
          <Link to="/features" onClick={() => setOpen(false)} className="rounded-full px-3 py-2 text-sm font-bold bg-white text-[#3B1D6E] hover:bg-[#F4F1FA]">Features</Link>
          <Link to="/pricing" onClick={() => setOpen(false)} className="rounded-full px-3 py-2 text-sm font-bold bg-white text-[#3B1D6E] hover:bg-[#F4F1FA]">Pricing</Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      <header className="sticky top-0 z-30 border-b border-[#E6E1F2] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
          <button className="rounded-full border border-[#D9D2EC] px-3 py-2 text-[#3B1D6E] lg:hidden" onClick={() => setOpen(!open)}>{open ? 'x' : '='}</button>
          <Link to="/" className="mr-auto">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#C9A24B]">MANCOSA PGDBM</p>
            <h1 className="font-display text-lg font-bold text-[#241349]">Exam Companion</h1>
          </Link>
          <div className="hidden gap-2 lg:flex">
            <Link to="/landing" className="rounded-full border border-[#D9D2EC] bg-white px-3 py-2 text-sm font-bold text-[#3B1D6E] hover:bg-[#F4F1FA]">Landing</Link>
            <Link to="/ob" className={`rounded-full border px-3 py-2 text-sm font-bold ${isActive('/ob') ? 'border-[#3B1D6E] bg-[#3B1D6E] text-white' : 'border-[#D9D2EC] bg-white text-[#3B1D6E]'}`}>OB</Link>
            {MODULES.map((m) => (
              <Link key={m.id} to={`/${m.id}`} className={`rounded-full border px-3 py-2 text-sm font-bold ${isActive(`/${m.id}`) ? 'border-[#3B1D6E] bg-[#3B1D6E] text-white' : 'border-[#D9D2EC] bg-white text-[#3B1D6E]'}`}>{m.code}</Link>
            ))}
          </div>
          <div className="hidden gap-2 lg:flex items-center">
            {isAuthenticated ? (
              <>
                <Link to="/account" className="rounded-full border border-[#D9D2EC] bg-white px-3 py-2 text-sm font-bold text-[#3B1D6E] hover:bg-[#F4F1FA]">Account</Link>
                <button onClick={signOut} className="rounded-full border border-red-200 bg-white px-3 py-2 text-sm font-bold text-red-600 hover:bg-red-50">Sign out</button>
              </>
            ) : (
              <>
                <Link to="/sign-in" className="rounded-full border border-[#D9D2EC] bg-white px-3 py-2 text-sm font-bold text-[#3B1D6E] hover:bg-[#F4F1FA]">Sign in</Link>
                <Link to="/sign-up" className="rounded-full bg-[#3B1D6E] px-3 py-2 text-sm font-bold text-white hover:bg-[#2d1654]">Start free</Link>
              </>
            )}
          </div>
          <Link to="/sign-up" className="rounded-full bg-[#3B1D6E] px-3 py-2 text-sm font-bold text-white hover:bg-[#2d1654] lg:hidden">
            {isAuthenticated ? 'Account' : 'Sign in'}
          </Link>
        </div>
      </header>
      {open && (
        <aside className="fixed inset-0 z-20 bg-black/20 lg:hidden" onClick={() => setOpen(false)}>
          <nav onClick={(e) => e.stopPropagation()} className="h-full w-80 overflow-y-auto bg-[#F5F5F7] p-4 shadow-xl">
            {nav}
            <div className="mt-4 pt-4 border-t border-[#E6E1F2]">
              {isAuthenticated ? (
                <div className="space-y-2">
                  <p className="text-xs text-slate-500">Signed in as {user?.email}</p>
                  <Link to="/account" onClick={() => setOpen(false)} className="block rounded-full bg-[#3B1D6E] px-3 py-2 text-sm font-bold text-white text-center">Account</Link>
                  <button onClick={() => { signOut(); setOpen(false); }} className="block w-full rounded-full border border-red-200 bg-white px-3 py-2 text-sm font-bold text-red-600">Sign out</button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Link to="/sign-in" onClick={() => setOpen(false)} className="block rounded-full border border-[#D9D2EC] bg-white px-3 py-2 text-sm font-bold text-[#3B1D6E] text-center">Sign in</Link>
                  <Link to="/sign-up" onClick={() => setOpen(false)} className="block rounded-full bg-[#3B1D6E] px-3 py-2 text-sm font-bold text-white text-center">Start free</Link>
                </div>
              )}
            </div>
          </nav>
        </aside>
      )}
      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-5 lg:grid-cols-[320px_1fr]">
        <aside className="hidden lg:block">{nav}</aside>
        <main className="min-w-0 pb-10"><Outlet /></main>
      </div>
    </div>
  );
}
