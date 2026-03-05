import { architectureText } from "@/data/buildData";

export function ArchitectureDiagram() {
  return (
    <section className="rounded-2xl border border-base-border bg-base-panel/80 p-6">
      <h2 className="text-xl font-semibold text-white">Architecture Diagram</h2>
      <p className="mt-1 text-sm text-slate-400">Control flow from request to deployment.</p>
      <div className="mt-5 rounded-xl border border-base-border bg-black/35 p-4">
        <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-sm leading-relaxed text-slate-200">
          {architectureText.join("\n")}
        </pre>
      </div>
    </section>
  );
}
