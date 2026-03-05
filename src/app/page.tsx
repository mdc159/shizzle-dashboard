import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { BuildTimeline } from "@/components/BuildTimeline";
import { CostBreakdown } from "@/components/CostBreakdown";
import { TechStack } from "@/components/TechStack";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="min-h-screen bg-aurora px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <section className="rounded-2xl border border-base-border bg-base-panel/75 p-6 shadow-glow">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-blue">Meta Dashboard</p>
          <h1 className="mt-3 text-3xl font-bold text-white md:text-4xl">Shizzle Dashboard: Built by AI</h1>
          <p className="mt-3 max-w-3xl text-slate-300">
            This dashboard visualizes its own construction lifecycle: orchestration, coding, validation, and deployment.
          </p>
        </section>

        <div className="grid gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <BuildTimeline />
          </div>
          <div>
            <CostBreakdown />
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          <ArchitectureDiagram />
          <TechStack />
        </div>
      </div>
    </main>
  );
}
