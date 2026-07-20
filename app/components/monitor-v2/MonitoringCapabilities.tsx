'use client';

import { monitoringCapabilities } from './data';

export default function MonitoringCapabilities() {
  return (
    <section className="bg-[#091120] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-white lg:text-4xl">Continuous Visibility Across Your AI Ecosystem</h2>
          <p className="mx-auto max-w-2xl text-slate-400">Premium monitoring capabilities for runtime intelligence and continuous governance</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {monitoringCapabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div key={index} className="group rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/30 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="mb-3 inline-flex rounded-lg bg-cyan-500/10 p-2 text-cyan-400 transition-colors group-hover:bg-cyan-500/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1.5 text-base font-semibold text-white">{capability.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{capability.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
