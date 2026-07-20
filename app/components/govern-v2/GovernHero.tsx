'use client';

import { ArrowRight, Sparkles } from 'lucide-react';

export default function GovernHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#08101f] via-[#0a1326] to-[#0b1222] pt-20 pb-6 lg:pt-24 lg:pb-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute top-1/3 left-1/3 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center">
          {/* Eyebrow */}
          <div className="mb-4 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-300 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              AI Governance
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Govern the Complete{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              AI Lifecycle
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-6 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Manage AI initiatives from idea to retirement with built-in governance, approvals, and compliance.
          </p>

          {/* CTA Buttons */}
          <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <button className="group rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:shadow-indigo-500/20 active:scale-95">
              <div className="flex items-center justify-center gap-2">
                Request Demo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
            <button className="rounded-lg border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition-colors hover:border-indigo-500/30 hover:bg-white/10 backdrop-blur-sm">
              Explore Governance
            </button>
          </div>

          {/* Lifecycle Visualization */}
          <div className="relative mx-auto max-w-4xl">
            <svg className="w-full" viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="governGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
                </linearGradient>
                <radialGradient id="governNodeGradient" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="1" />
                  <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.5" />
                </radialGradient>
              </defs>

              {/* Horizontal flow line */}
              <path
                d="M 40 110 L 560 110"
                stroke="url(#governGradient)"
                strokeWidth="2"
                strokeDasharray="10,5"
                className="animate-pulse"
              />

              {/* Stage 1 */}
              <circle cx="80" cy="110" r="16" fill="url(#governNodeGradient)" className="drop-shadow-lg" />
              <text x="80" y="138" textAnchor="middle" className="fill-slate-300 text-xs font-semibold" fontSize="10">
                Idea
              </text>

              {/* Stage 2 */}
              <circle cx="180" cy="110" r="16" fill="url(#governNodeGradient)" className="drop-shadow-lg" opacity="0.8" />
              <text x="180" y="138" textAnchor="middle" className="fill-slate-300 text-xs font-semibold" fontSize="10">
                Intake
              </text>

              {/* Stage 3 */}
              <circle cx="280" cy="110" r="16" fill="url(#governNodeGradient)" className="drop-shadow-lg" opacity="0.8" />
              <text x="280" y="138" textAnchor="middle" className="fill-slate-300 text-xs font-semibold" fontSize="10">
                Review
              </text>

              {/* Stage 4 */}
              <circle cx="380" cy="110" r="16" fill="url(#governNodeGradient)" className="drop-shadow-lg" opacity="0.8" />
              <text x="380" y="138" textAnchor="middle" className="fill-slate-300 text-xs font-semibold" fontSize="10">
                Approve
              </text>

              {/* Stage 5 */}
              <circle cx="480" cy="110" r="16" fill="url(#governNodeGradient)" className="drop-shadow-lg" opacity="0.8" />
              <text x="480" y="138" textAnchor="middle" className="fill-slate-300 text-xs font-semibold" fontSize="10">
                Deploy
              </text>

              {/* Stage 6 - Highlighted */}
              <circle cx="560" cy="110" r="18" fill="url(#governNodeGradient)" className="drop-shadow-lg" />
              <circle cx="560" cy="110" r="22" fill="none" stroke="#6366f1" strokeWidth="2" opacity="0.6" />
              <text x="560" y="138" textAnchor="middle" className="fill-indigo-300 text-xs font-semibold" fontSize="10">
                Monitor
              </text>

              {/* Status badges */}
              <rect x="30" y="20" width="90" height="22" fill="rgba(6,182,212,0.12)" stroke="#06b6d4" strokeWidth="1.5" rx="11" />
              <text x="75" y="36" textAnchor="middle" fill="#67e8f9" fontWeight="600" fontSize="10">
                In Progress
              </text>

              <rect x="480" y="20" width="90" height="22" fill="rgba(16,185,129,0.12)" stroke="#10b981" strokeWidth="1.5" rx="11" />
              <text x="525" y="36" textAnchor="middle" fill="#6ee7b7" fontWeight="600" fontSize="10">
                Approved
              </text>
            </svg>
          </div>

          {/* Stats Row */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
              <div className="text-2xl font-bold text-indigo-400">12</div>
              <div className="text-xs text-slate-400">Governance Stages</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
              <div className="text-2xl font-bold text-violet-400">100%</div>
              <div className="text-xs text-slate-400">Audit Coverage</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
              <div className="text-2xl font-bold text-blue-400">3x</div>
              <div className="text-xs text-slate-400">Faster Approvals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
