import { techStack } from "@/data/buildData";

export function TechStack() {
  return (
    <section className="rounded-2xl border border-base-border bg-base-panel/80 p-6">
      <h2 className="text-xl font-semibold text-white">Tech Stack</h2>
      <p className="mt-1 text-sm text-slate-400">Core tools used to produce and deploy this dashboard.</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {techStack.map((item) => (
          <article
            key={item.name}
            className="rounded-xl border border-base-border bg-black/25 p-4 transition hover:border-accent-blue/50"
          >
            <p className="text-sm font-semibold text-white">{item.name}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-accent-blue">{item.subtitle}</p>
            <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
