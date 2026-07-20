import SectionIntro from './SectionIntro';
import { enterprisePillars } from './data';

export default function BuiltForEnterpriseSection() {
  return (
    <section className="bg-[#0b1222] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionIntro
          eyebrow="Built for enterprise"
          title="Enterprise AI isn't built in one place."
          description="It spans clouds, SaaS applications, AI gateways, APIs, agents, and custom platforms. AgentsFlow connects them all through a unified governance control plane."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {enterprisePillars.map((pillar) => (
            <div key={pillar.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 card-hover">
              <div className="mb-4 inline-flex rounded-2xl border border-indigo-400/20 bg-indigo-400/10 p-3">
                <pillar.icon className="h-5 w-5 text-indigo-300" />
              </div>
              <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
