'use client';

import { platforms } from './data';

export default function SupportedPlatformsSection() {
  return (
    <section className="bg-[#0b1222] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-white lg:text-4xl">
            Deploy Policies Across Every AI Runtime
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Native connectors for every major AI gateway and cloud platform
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <div
                key={index}
                className="group rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className={`rounded-lg bg-white/5 p-2 ${platform.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-white text-sm">{platform.title}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{platform.description}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Connected
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
