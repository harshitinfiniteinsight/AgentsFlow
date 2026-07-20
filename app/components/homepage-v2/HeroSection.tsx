'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Sparkles } from 'lucide-react';

const heroBadges = ['Discover', 'Govern', 'Enforce', 'Monitor'];
const signalCards = [
  { label: 'AI assets discovered', value: '1,284' },
  { label: 'Runtime controls active', value: '147' },
  { label: 'Vendors governed', value: '14' },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14),_transparent_32%),linear-gradient(180deg,#081121_0%,#0a0f1e_48%,#0b1325_100%)] pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute top-32 left-[10%] h-64 w-64 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute bottom-10 right-[8%] h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]">
        <svg className="h-full w-full opacity-40" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M140 180C300 140 420 220 560 210C680 200 782 116 930 142C1100 172 1208 300 1320 260" stroke="url(#heroGradient)" strokeWidth="1.2" className="node-line" />
          <path d="M120 510C310 468 370 620 560 590C732 564 810 410 980 436C1126 460 1258 620 1340 590" stroke="url(#heroGradient)" strokeWidth="1.2" className="node-line" />
          <path d="M300 110V760" stroke="url(#heroGradient)" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="4 8" />
          <path d="M720 80V790" stroke="url(#heroGradient)" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="4 8" />
          <path d="M1120 100V760" stroke="url(#heroGradient)" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="4 8" />
          <defs>
            <linearGradient id="heroGradient" x1="0" y1="0" x2="1440" y2="900" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38bdf8" />
              <stop offset="0.5" stopColor="#6366f1" />
              <stop offset="1" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            Enterprise AI Control Plane
          </div>

          <h1 className="max-w-5xl text-5xl font-black tracking-tight text-white md:text-6xl lg:text-7xl xl:text-[5.3rem] xl:leading-[1.02]">
            Enterprise AI Control Plane
          </h1>

          <div className="mt-8 space-y-3 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl lg:text-[2rem]">
            <div>Discover Every AI.</div>
            <div>Govern Every Agent.</div>
            <div>Enforce Every Policy.</div>
            <div>Monitor Every Interaction.</div>
          </div>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-400 md:text-xl">
            The vendor-neutral platform for discovering, governing, enforcing, and monitoring AI across every cloud, SaaS application, AI gateway, and enterprise agent.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#demo"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(59,130,246,0.35)] transition-all hover:-translate-y-0.5 hover:opacity-95"
            >
              Request Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/platform"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-100 backdrop-blur transition-all hover:border-white/20 hover:bg-white/10"
            >
              Explore Platform
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {heroBadges.map((badge) => (
              <div key={badge} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300">
                {badge}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-indigo-500/15 to-cyan-500/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-5 shadow-2xl backdrop-blur-xl">
            <div className="grid gap-4 md:grid-cols-[1fr_0.9fr]">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#0e1830]/90 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Unified command layer</p>
                    <h3 className="mt-1 text-lg font-bold text-white">AgentsFlow mesh</h3>
                  </div>
                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-2">
                    <Shield className="h-5 w-5 text-cyan-300" />
                  </div>
                </div>

                <div className="space-y-3">
                  {['Business Apps', 'AgentsFlow', 'AI Gateways', 'Models', 'Cloud'].map((item, index) => (
                    <div key={item} className="relative rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-slate-200">
                      <div className="flex items-center justify-between gap-4">
                        <span>{item}</span>
                        <span className="text-xs text-slate-500">0{index + 1}</span>
                      </div>
                      {index < 4 && <div className="absolute left-1/2 top-full h-3 w-px -translate-x-1/2 bg-gradient-to-b from-cyan-300/70 to-transparent" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {signalCards.map((card) => (
                  <div key={card.label} className="rounded-[1.25rem] border border-white/10 bg-white/[0.05] p-4 card-hover">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{card.label}</p>
                    <p className="mt-2 text-3xl font-black text-white">{card.value}</p>
                  </div>
                ))}
                <div className="rounded-[1.25rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Runtime posture</p>
                      <p className="mt-2 text-base font-semibold text-white">One governance layer across every AI system</p>
                    </div>
                    <div className="h-12 w-12 rounded-full bg-cyan-400/20" />
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
