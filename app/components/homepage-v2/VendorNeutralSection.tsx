import SectionIntro from './SectionIntro';
import { vendorNeutralPoints } from './data';

export default function VendorNeutralSection() {
  return (
    <section className="bg-[#091120] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionIntro
          eyebrow="Why vendor neutral"
          title="Why Vendor Neutral Matters"
          description="Cloud providers optimize their own ecosystems. Enterprise AI does not live in one ecosystem. AgentsFlow helps organizations govern AI consistently across multiple vendors, clouds, and runtime environments without introducing platform lock-in."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {vendorNeutralPoints.map((point, index) => (
            <div
              key={point.title}
              className={`rounded-[2rem] border p-7 ${index === 0 ? 'border-white/10 bg-white/[0.04]' : 'border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-indigo-500/10 to-transparent'}`}
            >
              <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3">
                <point.icon className={`h-5 w-5 ${index === 0 ? 'text-slate-200' : 'text-cyan-300'}`} />
              </div>
              <h3 className="text-2xl font-black text-white">{point.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-400">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
