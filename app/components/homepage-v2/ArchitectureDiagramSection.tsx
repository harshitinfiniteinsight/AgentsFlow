import { ArrowDown, Shield } from 'lucide-react';
import SectionIntro from './SectionIntro';
import { enterpriseConnectors } from './data';

const diagramStages = ['Business Applications', 'AgentsFlow', 'AI Gateways', 'Models', 'Cloud'];

export default function ArchitectureDiagramSection() {
  return (
    <section className="bg-[#091120] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionIntro
          eyebrow="Enterprise AI control plane"
          title="A governance layer across every AI system"
          description="Create one control plane that sits between business applications, AI gateways, model providers, and cloud environments without disrupting the stack you already run."
        />

        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0d1730] via-[#0c1527] to-[#0f1a31] p-6 lg:p-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-4">
              {diagramStages.map((stage, index) => (
                <div key={stage} className="flex flex-col items-center gap-4 text-center">
                  <div className={`w-full rounded-[1.5rem] border px-5 py-4 ${stage === 'AgentsFlow' ? 'border-cyan-400/30 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-cyan-500/20 shadow-[0_0_0_1px_rgba(103,232,249,0.1)]' : 'border-white/10 bg-white/[0.04]'}`}>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-left text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Layer 0{index + 1}</span>
                      {stage === 'AgentsFlow' && <Shield className="h-4 w-4 text-cyan-300" />}
                    </div>
                    <div className="mt-2 text-2xl font-black text-white">{stage}</div>
                  </div>
                  {index < diagramStages.length - 1 && <ArrowDown className="h-5 w-5 text-cyan-300/70" />}
                </div>
              ))}
              <p className="pt-3 text-center text-sm text-slate-400">One governance layer across every AI system.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {enterpriseConnectors.map((item) => (
                <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 card-hover">
                  <div className="mb-4 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                    <item.icon className="h-5 w-5 text-cyan-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
