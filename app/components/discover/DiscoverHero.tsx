'use client';

import { ArrowRight, Sparkles } from 'lucide-react';

export default function DiscoverHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#08101f] via-[#0a1326] to-[#0b1222] pt-20 pb-6 lg:pt-24 lg:pb-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Radial gradients */}
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-1/4 right-1/3 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center">
          {/* Eyebrow */}
          <div className="mb-4 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              AI Discovery
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Know Every AI Running Inside{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Your Enterprise
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-6 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Continuously discover AI applications, agents, models, SaaS AI capabilities, cloud AI services, and
            shadow AI across your enterprise.
          </p>

          {/* CTA Buttons */}
          <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <button className="group rounded-lg bg-gradient-to-r from-cyan-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:shadow-cyan-500/20 active:scale-95">
              <div className="flex items-center justify-center gap-2">
                Explore Discovery
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </button>
            <button className="rounded-lg border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition-colors hover:border-cyan-500/30 hover:bg-white/10 backdrop-blur-sm">
              Request Demo
            </button>
          </div>

          {/* Hero Visualization - Network Diagram */}
          <div className="relative mx-auto max-w-4xl">
            <svg className="w-full" viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
              {/* Define gradients */}
              <defs>
                <linearGradient id="discoverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.6" />
                </linearGradient>
                <radialGradient id="nodeGradient" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="1" />
                  <stop offset="100%" stopColor="#0891b2" stopOpacity="0.5" />
                </radialGradient>
              </defs>

              {/* Connecting lines */}
              <path d="M 300 305 L 300 250" stroke="url(#discoverGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
              <path d="M 300 250 L 150 190" stroke="url(#discoverGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
              <path d="M 300 250 L 300 190" stroke="url(#discoverGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
              <path d="M 300 250 L 450 190" stroke="url(#discoverGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
              <path d="M 150 190 L 100 130" stroke="url(#discoverGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
              <path d="M 150 190 L 200 130" stroke="url(#discoverGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
              <path d="M 300 190 L 300 130" stroke="url(#discoverGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
              <path d="M 450 190 L 400 130" stroke="url(#discoverGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
              <path d="M 450 190 L 500 130" stroke="url(#discoverGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />

              {/* Nodes - Bottom (AgentsFlow) */}
              <circle cx="300" cy="305" r="20" fill="url(#nodeGradient)" className="drop-shadow-lg" />
              <text x="300" y="320" textAnchor="middle" fill="#67e8f9" fontWeight="600" fontSize="10">AgentsFlow</text>

              {/* Nodes - Middle Layer */}
              <circle cx="150" cy="190" r="15" fill="url(#nodeGradient)" className="drop-shadow-lg" opacity="0.8" />
              <circle cx="300" cy="190" r="15" fill="url(#nodeGradient)" className="drop-shadow-lg" opacity="0.8" />
              <circle cx="450" cy="190" r="15" fill="url(#nodeGradient)" className="drop-shadow-lg" opacity="0.8" />

              {/* Nodes - Top Layer */}
              <circle cx="100" cy="130" r="12" fill="url(#nodeGradient)" className="drop-shadow-lg" opacity="0.6" />
              <circle cx="200" cy="130" r="12" fill="url(#nodeGradient)" className="drop-shadow-lg" opacity="0.6" />
              <circle cx="300" cy="130" r="12" fill="url(#nodeGradient)" className="drop-shadow-lg" opacity="0.6" />
              <circle cx="400" cy="130" r="12" fill="url(#nodeGradient)" className="drop-shadow-lg" opacity="0.6" />
              <circle cx="500" cy="130" r="12" fill="url(#nodeGradient)" className="drop-shadow-lg" opacity="0.6" />

              {/* Labels */}
              <text x="300" y="258" textAnchor="middle" fill="#94a3b8" fontSize="10">AI Inventory Layer</text>
            </svg>
          </div>

          {/* Stats Row */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
              <div className="text-2xl font-bold text-cyan-400">1,284</div>
              <div className="text-xs text-slate-400">AI Assets Discovered</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
              <div className="text-2xl font-bold text-indigo-400">99.4%</div>
              <div className="text-xs text-slate-400">Coverage Rate</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
              <div className="text-2xl font-bold text-blue-400">Real-time</div>
              <div className="text-xs text-slate-400">Continuous Updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
