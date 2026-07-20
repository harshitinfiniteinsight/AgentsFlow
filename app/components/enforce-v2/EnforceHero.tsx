'use client';

import { ArrowRight, Sparkles } from 'lucide-react';

const policyLayers = [
  { label: 'Business Policies', y: 28, color: '#f59e0b', opacity: 1 },
  { label: 'AgentsFlow Enforce', y: 86, color: '#a855f7', opacity: 1, highlight: true },
  { label: 'Policy Engine', y: 144, color: '#6366f1', opacity: 0.9 },
  { label: 'Platform Connectors', y: 202, color: '#3b82f6', opacity: 0.8 },
];

const platformLabels = [
  { label: 'Azure AI', x: 60 },
  { label: 'Bedrock', x: 155 },
  { label: 'Vertex AI', x: 250 },
  { label: 'Portkey', x: 345 },
  { label: 'Kong', x: 440 },
  { label: 'LiteLLM', x: 535 },
];

export default function EnforceHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#08101f] via-[#0a1326] to-[#0b1222] pt-20 pb-6 lg:pt-24 lg:pb-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 h-80 w-80 rounded-full bg-rose-500/8 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-indigo-500/8 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center">
          {/* Eyebrow */}
          <div className="mb-4 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-300 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Runtime Policy Enforcement
            </span>
          </div>

          {/* Headline */}
          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Turn Business Policies into{' '}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Runtime Controls
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-6 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Automatically translate governance policies into platform-specific guardrails and runtime configurations across every AI platform.
          </p>

          {/* CTAs */}
          <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <button className="group rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-3.5 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:shadow-violet-500/20 active:scale-95">
              <span className="flex items-center gap-2">
                Request Demo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            <button className="rounded-lg border border-white/10 bg-white/5 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition-colors hover:border-violet-500/30 hover:bg-white/10">
              Explore Enforcement
            </button>
          </div>

          {/* Policy Flow Visualization */}
          <div className="relative mx-auto max-w-4xl">
            <svg className="w-full" viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="enforceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.7" />
                </linearGradient>
                <radialGradient id="enforceNodeGrad" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="1" />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.5" />
                </radialGradient>
                <radialGradient id="highlightNodeGrad" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="1" />
                  <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.8" />
                </radialGradient>
              </defs>

              {/* Vertical flow line */}
              <line x1="300" y1="50" x2="300" y2="230" stroke="url(#enforceGrad)" strokeWidth="2" strokeDasharray="6,4" className="animate-pulse" />

              {/* Fan-out lines to platforms */}
              {platformLabels.map((p, i) => (
                <line key={i} x1="300" y1="230" x2={p.x + 25} y2="272" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.5" className="animate-pulse" />
              ))}

              {/* Top layer - Business Policies */}
              <rect x="190" y="14" width="220" height="28" fill="rgba(245,158,11,0.12)" stroke="#f59e0b" strokeWidth="1.5" rx="14" />
              <text x="300" y="33" textAnchor="middle" fill="#fcd34d" fontWeight="600" fontSize="11">Business Policies</text>

              {/* AgentsFlow Enforce node - highlighted */}
              <rect x="170" y="72" width="260" height="30" fill="rgba(168,85,247,0.18)" stroke="#a855f7" strokeWidth="2" rx="15" />
              <text x="300" y="92" textAnchor="middle" fill="#d8b4fe" fontWeight="700" fontSize="12">AgentsFlow Enforce</text>

              {/* Policy Engine */}
              <rect x="195" y="130" width="210" height="26" fill="rgba(99,102,241,0.12)" stroke="#6366f1" strokeWidth="1.5" rx="13" />
              <text x="300" y="148" textAnchor="middle" fill="#a5b4fc" fontWeight="600" fontSize="11">Policy Engine</text>

              {/* Platform Connectors */}
              <rect x="195" y="188" width="210" height="26" fill="rgba(59,130,246,0.12)" stroke="#3b82f6" strokeWidth="1.5" rx="13" />
              <text x="300" y="206" textAnchor="middle" fill="#93c5fd" fontWeight="600" fontSize="11">Platform Connectors</text>

              {/* Platform destination nodes */}
              {platformLabels.map((p, i) => (
                <g key={i}>
                  <rect x={p.x} y="258" width="50" height="22" fill="rgba(99,102,241,0.10)" stroke="#6366f1" strokeWidth="1" rx="11" />
                  <text x={p.x + 25} y="274" textAnchor="middle" fill="#a5b4fc" fontWeight="500" fontSize="8.5">{p.label}</text>
                </g>
              ))}
            </svg>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
              <div className="text-2xl font-bold text-violet-400">7+</div>
              <div className="text-xs text-slate-400">Supported Platforms</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
              <div className="text-2xl font-bold text-indigo-400">Real-time</div>
              <div className="text-xs text-slate-400">Policy Propagation</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
              <div className="text-2xl font-bold text-blue-400">Zero-touch</div>
              <div className="text-xs text-slate-400">Policy Translation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
