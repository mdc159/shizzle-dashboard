import { costBreakdown, totalEstimatedCost } from "@/data/buildData";

export function CostBreakdown() {
  return (
    <section className="rounded-2xl border border-base-border bg-base-panel/80 p-6">
      <h2 className="text-xl font-semibold text-white">Cost Breakdown</h2>
      <p className="mt-1 text-sm text-slate-400">Placeholder values can be updated after full production rollout.</p>
      <div className="mt-5 overflow-hidden rounded-xl border border-base-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-black/35 text-slate-300">
            <tr>
              <th className="px-3 py-2">Category</th>
              <th className="px-3 py-2">Cost</th>
              <th className="px-3 py-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            {costBreakdown.map((row) => (
              <tr key={row.item} className="border-t border-base-border text-slate-200">
                <td className="px-3 py-2">{row.item}</td>
                <td className="px-3 py-2 font-semibold text-accent-blue">{row.value}</td>
                <td className="px-3 py-2 text-slate-400">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center justify-between rounded-lg border border-accent-purple/40 bg-accent-purple/10 px-4 py-3">
        <span className="text-sm text-slate-200">Total estimated cost</span>
        <span className="text-lg font-bold text-accent-purple">{totalEstimatedCost}</span>
      </div>
    </section>
  );
}
