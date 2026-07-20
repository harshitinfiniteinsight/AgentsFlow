'use client';

import { dashboardMetrics } from './data';

export default function MonitoringDashboard() {
  return (
    <section className="bg-[#0b1222] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-white lg:text-4xl">Your AI Operations Command Center</h2>
          <p className="mx-auto max-w-2xl text-slate-400">Executive observability dashboards with live metrics, charts, and alerts</p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.12),transparent_34%),radial-gradient(circle_at_top_right,rgba(99,102,241,0.12),transparent_34%),rgba(255,255,255,0.04)] p-4 shadow-[0_30px_90px_rgba(15,23,42,0.35)] backdrop-blur-2xl lg:p-6">
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {dashboardMetrics.slice(0, 8).map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">{metric.label}</div>
                    <div className="mt-2 text-xl font-bold text-white">{metric.value}</div>
                    <div className="mt-1 text-xs text-emerald-300">{metric.delta}</div>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-[#091120] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Usage Trend</p>
                      <h3 className="mt-1 text-lg font-semibold text-white">Token Consumption</h3>
                    </div>
                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">Live</span>
                  </div>
                  <div className="flex h-44 items-end gap-2 rounded-xl bg-[linear-gradient(180deg,rgba(6,182,212,0.12),rgba(6,182,212,0.02))] p-3">
                    {[22, 34, 28, 46, 38, 60, 54, 72, 68, 78].map((h, idx) => (
                      <div key={idx} className="flex-1 rounded-t-lg bg-gradient-to-t from-cyan-500 via-indigo-500 to-violet-500" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#091120] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Operational Health</p>
                      <h3 className="mt-1 text-lg font-semibold text-white">Alert Feed</h3>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">Healthy</span>
                  </div>
                  <div className="space-y-2">
                    {['Policy validated across 14 models', 'Drift threshold breached and resolved', 'Compliance evidence exported'].map((item, idx) => (
                      <div key={item} className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 text-sm text-slate-300">
                        <span className={`h-2 w-2 rounded-full ${idx === 0 ? 'bg-cyan-400' : idx === 1 ? 'bg-amber-400' : 'bg-emerald-400'} animate-pulse`} />
                        <span>{item}</span>
                        <span className="ml-auto text-xs text-slate-500">now</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-[#091120] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">KPI Snapshot</h3>
                  <span className="text-xs uppercase tracking-[0.24em] text-slate-500">Today</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ['Policy Violations', '23'],
                    ['Model Drift Alerts', '7'],
                    ['Human Reviews', '41'],
                    ['Business KPIs', '12'],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-xl border border-white/8 bg-white/5 p-3">
                      <div className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</div>
                      <div className="mt-2 text-2xl font-bold text-white">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#091120] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">Business Outcomes</h3>
                  <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-300">Executive</span>
                </div>
                <div className="space-y-3">
                  {['Customer outcomes +18%', 'AI cost variance -5%', 'Response latency -12%'].map((item, idx) => (
                    <div key={item} className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 text-sm text-slate-300">
                      <div className="flex items-center justify-between">
                        <span>{item}</span>
                        <span className="text-xs text-slate-500">trend</span>
                      </div>
                      <div className="mt-2 h-1.5 rounded-full bg-white/5">
                        <div className={`h-full rounded-full ${idx === 0 ? 'w-[78%] bg-gradient-to-r from-cyan-500 to-indigo-500' : idx === 1 ? 'w-[62%] bg-gradient-to-r from-violet-500 to-indigo-500' : 'w-[70%] bg-gradient-to-r from-blue-500 to-cyan-500'}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
