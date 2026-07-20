import SectionIntro from './SectionIntro';
import { useCases } from './data';

export default function UseCasesSection() {
  return (
    <section className="bg-[#0b1222] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionIntro
          eyebrow="Enterprise use cases"
          title="Govern the full enterprise AI portfolio"
          description="From inventory and approvals to runtime policy and executive reporting, AgentsFlow unifies the workflows enterprises need to operationalize AI safely at scale."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="rounded-[1.75rem] border border-white/10 bg-[#0f172b]/90 p-6 card-hover">
              <div className="mb-4 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                <useCase.icon className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="text-lg font-bold text-white">{useCase.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{useCase.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
