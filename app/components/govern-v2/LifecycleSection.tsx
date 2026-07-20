'use client';

import { lifecycleStages } from './data';

export default function LifecycleSection() {
  return (
    <section className="bg-[#091120] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            Manage AI From Idea to Retirement
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Twelve structured governance stages guide every AI initiative through the enterprise
          </p>
        </div>

        {/* Lifecycle timeline - responsive horizontal scroll on mobile, grid on desktop */}
        <div className="overflow-x-auto">
          <div className="inline-flex w-full gap-4 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-4 lg:gap-6 md:w-auto">
            {lifecycleStages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 md:flex-shrink min-w-[180px] md:min-w-0 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4 transition-all duration-300 hover:border-indigo-500/30 hover:bg-white/10 backdrop-blur-sm"
                >
                  <div className="mb-3 inline-flex rounded-lg bg-indigo-500/10 p-2 text-indigo-400">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-2 text-base font-semibold text-white">
                    {stage.title}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {stage.description}
                  </p>

                  {/* Stage number badge */}
                  <div className="mt-4 inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-bold text-indigo-300">
                    Stage {index + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Flow indicator */}
        <p className="mt-6 text-center text-slate-400">
          Each stage includes reviews, assessments, approvals, and evidence collection
        </p>
      </div>
    </section>
  );
}
