'use client';

import { governanceCapabilities } from './data';

export default function CapabilitiesGridSection() {
  return (
    <section className="bg-[#0b1222] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Govern Every AI Initiative with Confidence
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Comprehensive governance capabilities for complete AI control
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {governanceCapabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4 transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/10 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-violet-500/0 opacity-0 transition-opacity duration-300 group-hover:from-indigo-500/5 group-hover:to-violet-500/5 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-3 inline-flex rounded-lg bg-indigo-500/10 p-2 text-indigo-400 transition-colors group-hover:bg-indigo-500/20">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {capability.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-400">
                    {capability.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
