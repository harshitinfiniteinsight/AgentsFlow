'use client';

import { ArrowDown } from 'lucide-react';
import { architectureLayers } from './data';

export default function MonitoringArchitecture() {
  return (
    <section className="bg-[#091120] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-white lg:text-4xl">Continuous Monitoring Across Every AI Runtime</h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="space-y-2">
            {architectureLayers.map((layer, index) => (
              <div key={layer.title}>
                <div className={`rounded-xl border p-4 backdrop-blur-sm transition-all duration-300 ${layer.highlight ? 'border-cyan-500/40 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 ring-2 ring-cyan-500/20' : 'border-white/10 bg-white/5 hover:border-cyan-500/20 hover:bg-white/10'}`}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className={`font-semibold ${layer.highlight ? 'text-cyan-200' : 'text-white'}`}>{layer.title}</h3>
                      <p className="mt-0.5 text-sm text-slate-400">{layer.description}</p>
                    </div>
                    {layer.highlight && (
                      <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">Observability Core</span>
                    )}
                  </div>
                </div>
                {index < architectureLayers.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="h-4 w-4 animate-bounce text-slate-600" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-base text-slate-400">One monitoring platform delivering continuous visibility across every AI interaction.</p>
        </div>
      </div>
    </section>
  );
}
