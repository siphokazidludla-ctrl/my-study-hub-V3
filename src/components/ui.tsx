import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

export function Badge({ children, tone='mist' }: { children: ReactNode; tone?: 'mist'|'gold'|'purple'|'red' }) {
  const styles = {
    mist: 'border-[#D9D2EC] bg-[#F4F1FA] text-[#3B1D6E]',
    gold: 'border-[#E4CE92] bg-[#FBF7EC] text-[#7A5E12]',
    purple: 'border-[#3B1D6E] bg-[#3B1D6E] text-white',
    red: 'border-red-200 bg-red-50 text-red-700',
  }[tone];
  return <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-bold ${styles}`}>{children}</span>;
}

export function Card({ title, children, right, tone='white' }: { title?: string; children: ReactNode; right?: ReactNode; tone?: 'white'|'gold'|'purple' }) {
  const styles = tone === 'purple' ? 'border-[#D9D2EC] bg-[#3B1D6E] text-white' : tone === 'gold' ? 'border-[#E4CE92] bg-[#FBF7EC] text-[#241349]' : 'border-[#E6E1F2] bg-white text-[#241349]';
  return <section className={`rounded-3xl border p-4 shadow-sm ${styles}`}>
    {title && <div className="mb-3 flex items-center justify-between gap-3"><h3 className={`text-xs font-extrabold uppercase tracking-[0.16em] ${tone==='purple'?'text-[#E4CE92]':'text-[#5B3A9E]'}`}>{title}</h3>{right}</div>}
    <div className="space-y-3 text-sm leading-relaxed">{children}</div>
  </section>;
}

export function PageHeading({ kicker, title, sub }: { kicker: string; title: string; sub: string }) {
  return <header className="rounded-3xl bg-[#3B1D6E] p-6 text-white shadow-sm">
    <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#E4CE92]">{kicker}</p>
    <h1 className="mt-2 font-display text-3xl font-bold leading-tight md:text-4xl">{title}</h1>
    <p className="mt-2 max-w-3xl text-sm text-[#EFEAFB]">{sub}</p>
  </header>;
}

export function BulletList({ items }: { items: string[] }) {
  return <ul className="list-disc space-y-1 pl-5 text-sm">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export function LinkCard({ to, title, eyebrow, text, tags=[] }: { to: string; title: string; eyebrow?: string; text?: string; tags?: string[] }) {
  return <Link to={to} className="block rounded-3xl border border-[#E6E1F2] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#C9A24B] hover:shadow-md">
    {eyebrow && <p className="mb-1 text-xs font-extrabold uppercase tracking-[0.14em] text-[#C9A24B]">{eyebrow}</p>}
    <h3 className="font-bold text-[#241349]">{title}</h3>
    {text && <p className="mt-1 text-sm text-[#6B6580]">{text}</p>}
    {tags.length > 0 && <div className="mt-3 flex flex-wrap gap-2">{tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>}
  </Link>;
}

export function Input({ value, onChange, placeholder }: { value: string; onChange: (value: string)=>void; placeholder?: string }) {
  return <input value={value} onChange={(e)=>onChange(e.target.value)} placeholder={placeholder} className="w-full rounded-full border border-[#D9D2EC] bg-white px-4 py-2 text-sm outline-none focus:border-[#C9A24B] focus:ring-2 focus:ring-[#FBF7EC]" />;
}

export function Select({ value, onChange, options, allLabel }: { value: string; onChange: (value: string)=>void; options: { value: string; label: string }[]; allLabel?: string }) {
  return (
    <select value={value} onChange={(e)=>onChange(e.target.value)} className="w-full rounded-full border border-[#D9D2EC] bg-white px-4 py-2 text-sm outline-none focus:border-[#C9A24B] focus:ring-2 focus:ring-[#FBF7EC]">
      {allLabel !== undefined && <option value="">{allLabel}</option>}
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}

export function SourceTag({ refs }: { refs: string[] }) {
  return <div className="flex flex-wrap gap-1">{refs.map((r) => <Badge key={r} tone="gold">{r}</Badge>)}</div>;
}
