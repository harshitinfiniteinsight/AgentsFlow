'use client';

import { ArrowDown } from 'lucide-react';
import { architectureLayers } from './data';

export default function RuntimeArchitectureSection() {
  return (
    <section className="bg-[#091120] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-white lg:text-4xl">
            Vendor-Neutral Runtime Enforcement
          </h2>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="space-y-2">
            {architectureLayers.map((layer, index) => (
              <div key={index}>
                <div
                  className={`rounded-xl border p-4 backdrop-blur-sm transition-all duration-300 ${
                    layer.highlight
                      ? 'border-violet-500/40 bg-gradient-to-r from-violet-500/10 to-indigo-500/10 ring-2 ring-violet-500/20'
                      : 'border-white/10 bg-white/5 hover:border-violet-500/20 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className={`font-semibold ${layer.highlight ? 'text-violet-200' : 'text-white'}`}>
                        {layer.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-slate-400">{layer.description}</p>
                    </div>
                    {layer.highlight && (
                      <span className="ml-4 flex-shrink-0 rounded-full bg-violet-500/20 px-3 py-1 text-xs font-semibold text-violet-300">
                        Control Plane
                      </span>
                    )}
                  </div>
                </div>
                {index < architectureLayers.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="h-4 w-4 text-slate-600 animate-bounce" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-base text-slate-400">
            One centralized policy engine consistently enforces governance across every AI platform.
          </p>
        </div>
      </div>
    </section>
  );
}
