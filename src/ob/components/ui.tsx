import { type ReactNode } from "react";

type Tone = "royal" | "gold" | "plum" | "mist" | "white";

const toneStyles: Record<Tone, string> = {
  royal: "border-[#D9D2EC] bg-[#F4F1FA] text-[#241349]",
  gold: "border-[#E4CE92] bg-[#FBF7EC] text-[#5A4410]",
  plum: "border-[#D1C6EC] bg-[#EFEAFB] text-[#2D1654]",
  mist: "border-[#E6E1F2] bg-white text-[#241349]",
  white: "border-[#E6E1F2] bg-white text-[#241349]",
};

export function Card({
  title,
  tone = "white",
  children,
  right,
}: {
  title?: string;
  tone?: Tone;
  children: ReactNode;
  right?: ReactNode;
}) {
  return (
    <section className={`rounded-3xl border p-4 shadow-sm ${toneStyles[tone]}`}>
      {title && (
        <div className="mb-3 flex items-center justify-between gap-2">
          <h3 className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#5B3A9E]">
            {title}
          </h3>
          {right}
        </div>
      )}
      <div className="space-y-3 text-sm leading-relaxed">{children}</div>
    </section>
  );
}

export function Pill({
  children,
  tone = "mist",
}: {
  children: ReactNode;
  tone?: "mist" | "gold" | "royal" | "solid";
}) {
  const styles: Record<string, string> = {
    mist: "bg-[#EFEAFB] text-[#4A2487] border border-[#D9D2EC]",
    gold: "bg-[#FBF7EC] text-[#7A5E12] border border-[#E4CE92]",
    royal: "bg-white text-[#3B1D6E] border border-[#D9D2EC]",
    solid: "bg-[#3B1D6E] text-white border border-[#3B1D6E]",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ${styles[tone]}`}
    >
      {children}
    </span>
  );
}

export function Badge({
  children,
  tone = "mist",
}: {
  children: ReactNode;
  tone?: "mist" | "gold" | "royal" | "solid";
}) {
  return <Pill tone={tone}>{children}</Pill>;
}

export function Ref({ children }: { children: ReactNode }) {
  return (
    <span className="ml-1 align-middle text-[10px] font-semibold text-[#9A93AD]">
      [{children}]
    </span>
  );
}

export function TextArea({
  value,
  onChange,
  placeholder,
  rows = 4,
  readOnly,
}: {
  value: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  rows?: number;
  readOnly?: boolean;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      readOnly={readOnly}
      className="w-full rounded-2xl border border-[#D9D2EC] bg-white p-3 text-sm leading-relaxed text-[#241349] outline-none focus:border-[#5B3A9E] focus:ring-2 focus:ring-[#E4CE92]"
    />
  );
}

export function SourceStatus({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-dashed border-[#E4CE92] bg-[#FBF7EC] p-3 text-[12px] text-[#7A5E12]">
      <span className="font-bold uppercase tracking-wide">Source status: </span>
      {children}
    </div>
  );
}

export function BulletList({ items, tone = "royal" }: { items: string[]; tone?: "royal" | "gold" }) {
  const dot = tone === "gold" ? "text-[#C9A24B]" : "text-[#5B3A9E]";
  return (
    <ul className="space-y-1.5">
      {items.map((it, i) => (
        <li key={i} className="flex gap-2">
          <span className={`mt-[2px] font-bold ${dot}`}>{">"}</span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function ClickCard({
  eyebrow,
  title,
  blurb,
  tags,
  to,
  accent = "royal",
}: {
  eyebrow?: string;
  title: string;
  blurb?: string;
  tags?: string[];
  to: string;
  accent?: "royal" | "gold";
}) {
  const bar = accent === "gold" ? "bg-[#C9A24B]" : "bg-[#3B1D6E]";
  return (
    <a
      href={to}
      className="group relative flex w-full flex-col items-start gap-2 overflow-hidden rounded-3xl border border-[#E6E1F2] bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-[#C9A24B] hover:shadow-md"
    >
      <span className={`absolute left-0 top-0 h-full w-1.5 ${bar}`} />
      {eyebrow && (
        <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#9A93AD]">
          {eyebrow}
        </span>
      )}
      <span className="font-display text-[17px] font-semibold leading-snug text-[#241349]">
        {title}
      </span>
      {blurb && <span className="text-[13px] leading-relaxed text-[#564E6C]">{blurb}</span>}
      {tags && tags.length > 0 && (
        <span className="mt-1 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <Pill key={t}>{t}</Pill>
          ))}
        </span>
      )}
      <span className="mt-1 text-[12px] font-bold text-[#5B3A9E] group-hover:text-[#7A5E12]">
        Open detail page {">"}
      </span>
    </a>
  );
}

export function SectionCard({
  title,
  subtitle,
  tone = "white",
  right,
  children,
}: {
  title: string;
  subtitle?: string;
  tone?: Tone;
  right?: ReactNode;
  children: ReactNode;
}) {
  return (
    <Card
      title={title}
      tone={tone}
      right={
        right ?? (subtitle ? <span className="text-xs font-semibold text-[#6B6580]">{subtitle}</span> : undefined)
      }
    >
      {children}
    </Card>
  );
}

export function PageHeading({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <div className="mb-5">
      <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#C9A24B]">
        {kicker}
      </p>
      <h2 className="font-display text-2xl font-semibold leading-tight text-[#241349] md:text-3xl">
        {title}
      </h2>
      {sub && <p className="mt-1 max-w-3xl text-sm text-[#564E6C]">{sub}</p>}
    </div>
  );
}

export function EmptyState({
  title,
  details,
  action,
}: {
  title: string;
  details?: string;
  action?: ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-[#E6E1F2] bg-white p-6 text-sm text-[#564E6C] shadow-sm">
      <div className="font-display text-lg font-semibold text-[#241349]">{title}</div>
      {details && <div className="mt-2 leading-relaxed">{details}</div>}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}

export function SearchBox({
  value,
  onChange,
  placeholder = "Search theories, units, concepts, case clues...",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-3xl border border-[#D9D2EC] bg-white p-2 shadow-sm">
      <div className="px-2 text-[#9A93AD]" aria-hidden>
        &#x2315;
      </div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent px-1 py-2 text-sm text-[#241349] outline-none"
      />
      {value.trim().length > 0 && (
        <button
          onClick={() => onChange("")}
          className="rounded-full border border-[#E6E1F2] bg-white px-3 py-1.5 text-[12px] font-bold text-[#5B3A9E] hover:border-[#C9A24B] hover:text-[#7A5E12]"
        >
          Clear
        </button>
      )}
    </div>
  );
}
