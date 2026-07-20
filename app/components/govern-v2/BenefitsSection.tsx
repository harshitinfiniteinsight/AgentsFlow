'use client';

import { CheckCircle2 } from 'lucide-react';
import { governanceBenefits } from './data';

export default function BenefitsSection() {
  return (
    <section className="bg-[#0b1222] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white lg:text-4xl">
            Benefits
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          {governanceBenefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4 transition-all hover:border-indigo-500/30 hover:bg-white/10 backdrop-blur-sm"
            >
              <div className="flex-shrink-0 text-emerald-400">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <p className="text-sm text-slate-300">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
