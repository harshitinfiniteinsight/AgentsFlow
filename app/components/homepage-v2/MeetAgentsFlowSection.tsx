import { ArrowRight, Shield } from 'lucide-react';
import Link from 'next/link';
import SectionIntro from './SectionIntro';
import { controlPlanePoints, executiveSignals } from './data';

export default function MeetAgentsFlowSection() {
  return (
    <section className="bg-[#091120] py-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <SectionIntro
            eyebrow="Meet AgentsFlow"
            title="One Enterprise. Every AI. One Control Plane."
            description="AgentsFlow provides a vendor-neutral control plane that discovers AI assets, governs the complete AI lifecycle, translates business policies into runtime controls, and continuously monitors AI in production."
            align="left"
          />
          <div className="space-y-4">
            {controlPlanePoints.map((point) => (
              <div key={point.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl border border-indigo-400/20 bg-indigo-400/10 p-2.5">
                    <point.icon className="h-5 w-5 text-indigo-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{point.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{point.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/platform" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors hover:text-cyan-200">
            Explore the full platform
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-indigo-500/10 via-[#11182b] to-cyan-500/10 p-6 lg:p-8">
          <div className="absolute -right-20 top-12 h-52 w-52 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="absolute -left-16 bottom-10 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="relative">
            <div className="mb-6 flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-[#0c1528]/90 p-5">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Control plane status</p>
                <p className="mt-2 text-2xl font-black text-white">Active across 14 AI vendors</p>
              </div>
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                <Shield className="h-6 w-6 text-cyan-300" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {executiveSignals.map((signal) => (
                <div key={signal.label} className="rounded-[1.35rem] border border-white/10 bg-white/[0.05] p-5 card-hover">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-slate-400">{signal.label}</p>
                    <signal.icon className="h-4 w-4 text-cyan-300" />
                  </div>
                  <p className="mt-3 text-3xl font-black text-white">{signal.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
