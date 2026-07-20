import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionIntro from './SectionIntro';
import { capabilityCards } from './data';

export default function CapabilitiesGridSection() {
  return (
    <section className="bg-[#0b1222] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionIntro
          eyebrow="Core capabilities"
          title="Four capabilities. One operational model."
          description="A premium control plane built to discover AI, govern lifecycle decisions, enforce runtime policy, and monitor AI in production from one executive-ready system."
        />

        <div className="grid gap-6 xl:grid-cols-2">
          {capabilityCards.map((card) => (
            <div
              key={card.title}
              className={`rounded-[2rem] border ${card.border} bg-gradient-to-br ${card.gradient} p-6 shadow-[0_30px_80px_rgba(15,23,42,0.26)] backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(59,130,246,0.14)] lg:p-7`}
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-xl">
                  <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/10 p-3">
                    <card.icon className={`h-6 w-6 ${card.color}`} />
                  </div>
                  <h3 className="text-2xl font-black text-white">{card.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-300">{card.description}</p>
                </div>
                <Link
                  href={card.href}
                  className={`inline-flex items-center gap-2 text-sm font-semibold ${card.color} transition-colors hover:text-white`}
                >
                  {card.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {card.items.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-[#0c1528]/75 px-4 py-3 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
