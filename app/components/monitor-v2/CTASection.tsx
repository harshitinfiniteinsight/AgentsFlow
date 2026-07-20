'use client';

import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.18),transparent_28%),linear-gradient(180deg,#081121_0%,#091120_100%)] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-8 py-10 text-center shadow-[0_30px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl lg:px-12">
          <h2 className="mb-3 text-3xl font-bold text-white lg:text-4xl">Ready to Monitor Every AI Interaction?</h2>
          <p className="mx-auto mb-6 max-w-2xl text-base text-slate-400">
            Continuously observe AI behavior, runtime performance, compliance, and business outcomes with AgentsFlow Monitor.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <button className="group rounded-lg bg-gradient-to-r from-cyan-600 to-indigo-600 px-8 py-3.5 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:shadow-cyan-500/20 active:scale-95">
              <span className="flex items-center gap-2">
                Request Demo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            <button className="rounded-lg border border-white/10 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors hover:border-cyan-500/30 hover:bg-white/10">
              Explore Platform
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
