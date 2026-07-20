'use client';

import { runtimeControls } from './data';

export default function PolicyTranslationSection() {
  return (
    <section className="bg-[#091120] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold text-white lg:text-4xl">
            One Policy. Multiple Runtime Environments.
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Runtime controls automatically derived from a single governance policy definition
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {runtimeControls.map((control, index) => {
            const Icon = control.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/30 hover:bg-white/10"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 bg-gradient-to-br from-violet-500/5 to-indigo-500/5 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="mb-3 inline-flex rounded-lg bg-violet-500/10 p-2 text-violet-400 transition-colors group-hover:bg-violet-500/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-1.5 text-base font-semibold text-white">{control.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{control.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
