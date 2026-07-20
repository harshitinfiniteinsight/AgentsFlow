import SectionIntro from './SectionIntro';
import { benefits, benefitIcon as BenefitIcon } from './data';

export default function BenefitsSection() {
  return (
    <section className="bg-[#0b1222] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionIntro
          eyebrow="Benefits"
          title="Built to help enterprises move faster with better control"
          description="A modern enterprise control plane should reduce friction while improving accountability, risk management, and executive visibility."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-3 rounded-[1.5rem] border border-white/10 bg-white/[0.04] px-5 py-4 text-base text-slate-200">
              <BenefitIcon className="h-5 w-5 text-emerald-300 shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
