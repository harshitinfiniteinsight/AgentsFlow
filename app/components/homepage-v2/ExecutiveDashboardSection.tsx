import { Activity, ArrowUpRight, ShieldCheck } from 'lucide-react';
import SectionIntro from './SectionIntro';
import { dashboardStats } from './data';

export default function ExecutiveDashboardSection() {
  return (
    <section className="bg-[#091120] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionIntro
          eyebrow="Executive dashboard"
          title="Your AI command center."
          description="A premium analytics surface for leaders who need one place to understand inventory, usage, risk, compliance, runtime health, and business outcomes across the AI estate."
        />

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0f1730] to-[#0d1426] p-5 shadow-[0_40px_100px_rgba(2,8,23,0.55)] lg:p-7">
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {dashboardStats.map((stat, index) => (
                <div key={stat.label} className={`rounded-[1.4rem] border p-4 ${index === 3 ? 'border-emerald-500/25 bg-emerald-500/10' : 'border-white/10 bg-white/[0.04]'}`}>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">{stat.label}</p>
                  <p className="mt-3 text-3xl font-black text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{stat.trend}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/10 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Executive view</p>
                    <h3 className="mt-2 text-xl font-black text-white">Portfolio health summary</h3>
                  </div>
                  <ShieldCheck className="h-5 w-5 text-cyan-300" />
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    { label: 'High-risk agents', value: '12', width: 'w-3/4' },
                    { label: 'Policies mapped to runtime', value: '91%', width: 'w-[91%]' },
                    { label: 'Budget variance', value: '+4.2%', width: 'w-1/2' },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                        <span>{item.label}</span>
                        <span>{item.value}</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div className={`h-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 ${item.width}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Business outcomes</p>
                    <h3 className="mt-2 text-xl font-black text-white">Measured with governance context</h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-slate-300" />
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {['Time to approval', 'Audit readiness', 'AI value delivered'].map((metric, index) => (
                    <div key={metric} className="rounded-2xl border border-white/10 bg-[#11182d] p-4">
                      <p className="text-xs text-slate-500">{metric}</p>
                      <p className="mt-2 text-lg font-bold text-white">{['4 days', '98%', '$3.2M'][index]}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Activity className="h-4 w-4 text-emerald-300" />
                  Runtime activity across all governed environments is updating continuously.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
