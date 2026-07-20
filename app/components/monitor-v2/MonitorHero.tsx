'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import { dashboardMetrics } from './data';

export default function MonitorHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#08101f] via-[#0a1326] to-[#0b1222] pt-20 pb-6 lg:pt-24 lg:pb-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-blue-500/8 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="mb-4 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              AI Observability
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Monitor Every AI Interaction
          </h1>
          <p className="mx-auto mb-6 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Continuously observe AI behavior, runtime performance, compliance, and business outcomes.
          </p>

          <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <button className="group rounded-lg bg-gradient-to-r from-cyan-600 to-indigo-600 px-8 py-3.5 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:shadow-cyan-500/20 active:scale-95">
              <span className="flex items-center gap-2">
                Request Demo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            <button className="rounded-lg border border-white/10 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors hover:border-cyan-500/30 hover:bg-white/10">
              Explore Monitoring
            </button>
          </div>

          <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.14),transparent_34%),radial-gradient(circle_at_top_right,rgba(99,102,241,0.12),transparent_34%),rgba(255,255,255,0.04)] p-4 shadow-[0_30px_90px_rgba(15,23,42,0.35)] backdrop-blur-2xl lg:p-6">
            <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-2xl border border-white/10 bg-[#091120] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Live AI Operations</p>
                    <p className="mt-1 text-sm text-slate-400">Executive monitoring dashboard</p>
                  </div>
                  <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    Live
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  {dashboardMetrics.slice(0, 8).map((metric) => (
                    <div key={metric.label} className="rounded-xl border border-white/8 bg-white/5 p-3">
                      <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">{metric.label}</div>
                      <div className="mt-2 text-2xl font-bold text-white">{metric.value}</div>
                      <div className="mt-1 text-xs text-emerald-300">{metric.delta}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                      <span>Runtime Health</span><span>Last 24h</span>
                    </div>
                    <div className="h-24 rounded-lg bg-[linear-gradient(180deg,rgba(6,182,212,0.2),rgba(99,102,241,0.02))] relative overflow-hidden">
                      <div className="absolute inset-x-0 bottom-0 h-[64%] bg-[linear-gradient(90deg,rgba(6,182,212,0.9),rgba(99,102,241,0.9))] opacity-80" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
                      <span>Alerts Timeline</span><span>Now</span>
                    </div>
                    <div className="space-y-2">
                      {['PII redaction', 'Policy violation', 'Human review', 'Cost anomaly'].map((item, idx) => (
                        <div key={item} className="flex items-center gap-3 rounded-lg border border-white/5 bg-[#08101f] px-3 py-2 text-xs text-slate-300">
                          <span className={`h-2.5 w-2.5 rounded-full ${idx === 0 ? 'bg-cyan-400' : idx === 1 ? 'bg-rose-400' : idx === 2 ? 'bg-amber-400' : 'bg-indigo-400'} animate-pulse`} />
                          <span className="flex-1">{item}</span>
                          <span className="text-slate-500">2m</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-[#091120] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Runtime Status</p>
                      <h3 className="mt-1 text-lg font-semibold text-white">Production Health</h3>
                    </div>
                    <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                      Healthy
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      ['Policy Compliance', '99.1%'],
                      ['Token Usage', '94.2M'],
                      ['Requests/sec', '12.4K'],
                      ['Human Reviews', '41'],
                    ].map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between rounded-lg border border-white/8 bg-white/5 px-3 py-2.5">
                        <span className="text-sm text-slate-400">{label}</span>
                        <span className="text-sm font-semibold text-white">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#091120] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">Activity Feed</h3>
                    <span className="text-xs uppercase tracking-[0.24em] text-slate-500">Now</span>
                  </div>
                  <div className="space-y-2">
                    {['Policy validated across 3 gateways', 'Model drift alert closed', 'Executive KPI refreshed'].map((item, idx) => (
                      <div key={item} className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 text-sm text-slate-300">
                        <span className={`h-2 w-2 rounded-full ${idx === 0 ? 'bg-cyan-400' : idx === 1 ? 'bg-emerald-400' : 'bg-indigo-400'} animate-pulse`} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
