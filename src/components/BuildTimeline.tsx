import { buildTimeline } from "@/data/buildData";

export function BuildTimeline() {
  return (
    <section className="rounded-2xl border border-base-border bg-base-panel/80 p-6 shadow-glow">
      <h2 className="text-xl font-semibold text-white">Build Process Timeline</h2>
      <p className="mt-1 text-sm text-slate-400">How the dashboard was produced across agent steps.</p>
      <ol className="mt-6 space-y-4">
        {buildTimeline.map((step) => (
          <li key={step.id} className="relative rounded-xl border border-base-border bg-black/25 p-4">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent-blue/25 text-xs font-bold text-accent-blue">
                {step.id}
              </span>
              <h3 className="text-sm font-semibold text-white md:text-base">{step.title}</h3>
            </div>
            <div className="grid gap-2 text-xs text-slate-300 md:grid-cols-3">
              <p>
                <span className="text-slate-500">Timestamp:</span> {step.timestamp}
              </p>
              <p>
                <span className="text-slate-500">Duration:</span> {step.duration}
              </p>
              <p>
                <span className="text-slate-500">Tool:</span> {step.tool}
              </p>
            </div>
            <p className="mt-2 text-sm text-slate-300">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
