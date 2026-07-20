'use client';

import { ArrowRight, Bot, Globe2, Shield, Radar, Network } from 'lucide-react';

const roadmapStages = [
  {
    title: 'Discover',
    description: 'Know what AI exists.',
    icon: Radar,
    accent: 'from-cyan-500/20 to-cyan-500/5',
    border: 'border-cyan-400/20',
    iconBg: 'bg-cyan-500/10 text-cyan-300',
  },
  {
    title: 'Govern',
    description: 'Define policy and lifecycle.',
    icon: Shield,
    accent: 'from-indigo-500/20 to-indigo-500/5',
    border: 'border-indigo-400/20',
    iconBg: 'bg-indigo-500/10 text-indigo-300',
  },
  {
    title: 'Enforce',
    description: 'Apply policy consistently.',
    icon: Globe2,
    accent: 'from-violet-500/20 to-violet-500/5',
    border: 'border-violet-400/20',
    iconBg: 'bg-violet-500/10 text-violet-300',
  },
  {
    title: 'Monitor',
    description: 'Continuously validate operations.',
    icon: Bot,
    accent: 'from-blue-500/20 to-blue-500/5',
    border: 'border-blue-400/20',
    iconBg: 'bg-blue-500/10 text-blue-300',
  },
  {
    title: 'AI Mesh',
    description: 'Orchestrate trusted AI ecosystems.',
    icon: Network,
    accent: 'from-cyan-500/30 via-indigo-500/20 to-violet-500/30',
    border: 'border-cyan-300/40',
    iconBg: 'bg-white/10 text-cyan-200',
    comingSoon: true,
    emphasized: true,
  },
];

export default function AiMeshRoadmapSection() {
  return (
    <section className="bg-[#091120] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_36%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.14),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6 shadow-[0_30px_90px_rgba(15,23,42,0.35)] backdrop-blur-2xl lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.15)]">
                Coming Soon
              </div>

              <h2 className="mb-3 text-3xl font-bold tracking-tight text-white lg:text-4xl">
                Introducing AI Mesh
              </h2>
              <p className="mb-4 max-w-2xl text-xl font-semibold leading-tight text-slate-100 lg:text-2xl">
                The Next Evolution of Enterprise AI Infrastructure
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-slate-400 lg:text-lg">
                AI Mesh is the trusted orchestration layer that securely connects AI agents, enterprise applications, MCP servers, AI gateways, and cloud platforms.
              </p>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-400 lg:text-lg">
                It enables governed agent-to-agent collaboration, federated identity, shared policy enforcement, and cross-platform observability.
              </p>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-400 lg:text-lg">
                This positions AI Mesh as the orchestration layer that sits above every enterprise AI deployment.
              </p>

              <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-cyan-400/30 hover:bg-white/10">
                Learn More About AI Mesh
                <ArrowRight className="h-4 w-4 text-cyan-300" />
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <svg className="w-full max-w-xl" viewBox="0 0 520 420" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="meshLine" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.75" />
                    <stop offset="50%" stopColor="#6366f1" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.75" />
                  </linearGradient>
                  <radialGradient id="meshNode" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#67e8f9" stopOpacity="1" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.45" />
                  </radialGradient>
                  <radialGradient id="meshCore" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="1" />
                    <stop offset="100%" stopColor="#312e81" stopOpacity="0.85" />
                  </radialGradient>
                </defs>

                {/* Core mesh */}
                <circle cx="260" cy="270" r="54" fill="rgba(168,85,247,0.12)" stroke="#a855f7" strokeWidth="1.5" opacity="0.9" />
                <circle cx="260" cy="270" r="32" fill="url(#meshCore)" className="drop-shadow-[0_0_28px_rgba(168,85,247,0.35)]" />
                <text x="260" y="266" textAnchor="middle" fill="#f5f3ff" fontSize="12" fontWeight="700">AI Mesh</text>
                <text x="260" y="282" textAnchor="middle" fill="#ddd6fe" fontSize="9">Orchestration</text>

                {/* Upper nodes */}
                {[120, 260, 400].map((x, index) => (
                  <g key={index}>
                    <circle cx={x} cy="110" r="20" fill="url(#meshNode)" className="drop-shadow-lg" opacity="0.92" />
                    <text x={x} y="114" textAnchor="middle" fill="#ecfeff" fontSize="8.5" fontWeight="700">
                      {index === 0 ? 'Apps' : index === 1 ? 'Agents' : 'MCP'}
                    </text>
                    <line x1={x} y1="130" x2="260" y2="215" stroke="url(#meshLine)" strokeWidth="1.5" strokeDasharray="5,4" opacity="0.65" className="animate-pulse" />
                  </g>
                ))}

                {/* Mid nodes */}
                {[160, 360].map((x, index) => (
                  <g key={index}>
                    <circle cx={x} cy="190" r="18" fill="url(#meshNode)" className="drop-shadow-lg" opacity="0.82" />
                    <text x={x} y="194" textAnchor="middle" fill="#ecfeff" fontSize="8" fontWeight="700">
                      {index === 0 ? 'AI Gateways' : 'Cloud'}
                    </text>
                    <line x1={x} y1="208" x2="235" y2="240" stroke="url(#meshLine)" strokeWidth="1.5" strokeDasharray="5,4" opacity="0.65" className="animate-pulse" />
                  </g>
                ))}

                {/* Enterprise apps layer */}
                <rect x="48" y="28" width="126" height="28" rx="14" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.16)" />
                <text x="111" y="47" textAnchor="middle" fill="#cbd5e1" fontSize="10" fontWeight="600">Enterprise Apps</text>

                <line x1="111" y1="56" x2="120" y2="90" stroke="url(#meshLine)" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.55" />
                <line x1="111" y1="56" x2="260" y2="90" stroke="url(#meshLine)" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.55" />
                <line x1="111" y1="56" x2="400" y2="90" stroke="url(#meshLine)" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.55" />

                {/* Support labels */}
                <g opacity="0.9">
                  <rect x="62" y="336" width="120" height="24" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
                  <text x="122" y="352" textAnchor="middle" fill="#cbd5e1" fontSize="9.5" fontWeight="600">Federated Identity</text>

                  <rect x="340" y="336" width="118" height="24" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
                  <text x="399" y="352" textAnchor="middle" fill="#cbd5e1" fontSize="9.5" fontWeight="600">Shared Policy</text>
                </g>
              </svg>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-4 text-center lg:mb-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Platform Vision Roadmap</p>
            </div>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-3">
              {roadmapStages.map((stage, index) => {
                const Icon = stage.icon;
                const isLast = index === roadmapStages.length - 1;
                return (
                  <div key={stage.title} className="flex items-center gap-4 lg:flex-1 lg:gap-3">
                    <div
                      className={`group relative flex-1 rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg lg:p-4 ${
                        stage.emphasized
                          ? `border-cyan-400/40 bg-gradient-to-br ${stage.accent} shadow-[0_0_30px_rgba(34,211,238,0.18)] lg:scale-[1.03]`
                          : `border-white/10 bg-white/5 ${stage.border}`
                      }`}
                    >
                      {stage.comingSoon && (
                        <div className="mb-2 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
                          Coming Soon
                        </div>
                      )}
                      <div className="mb-3 inline-flex rounded-lg bg-white/8 p-2 text-white/90 backdrop-blur-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mb-1 text-base font-semibold text-white">{stage.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-400">{stage.description}</p>
                    </div>

                    {!isLast && (
                      <div className="hidden flex-col items-center justify-center lg:flex">
                        <div className="h-px w-6 bg-gradient-to-r from-white/20 to-cyan-400/40" />
                        <div className="my-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#091120] text-slate-400 shadow-inner">
                          →
                        </div>
                        <div className="h-px w-6 bg-gradient-to-r from-cyan-400/40 to-white/20" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="mx-auto max-w-4xl text-lg leading-relaxed text-slate-300 lg:text-xl">
              AgentsFlow is evolving beyond governance into the trusted orchestration layer for enterprise AI ecosystems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
