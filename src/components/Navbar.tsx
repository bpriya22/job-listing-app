"use client";

type Props = {
  query: string;
  onChange: (v: string) => void;
};

export default function Navbar({ query, onChange }: Props) {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <div className="text-lg font-semibold tracking-tight">JobFinder</div>
        <div className="flex-1" />
        <div className="w-full max-w-md">
          <input
            value={query}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search by title, company, location, tag…"
            className="w-full rounded-xl border px-3 py-2 outline-none focus:ring"
          />
        </div>
      </div>
    </header>
  );
}
