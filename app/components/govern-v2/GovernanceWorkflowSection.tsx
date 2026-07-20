'use client';

import { workflowStages } from './data';

export default function GovernanceWorkflowSection() {
  return (
    <section className="bg-[#091120] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
            One Unified Governance Workflow
          </h2>
        </div>

        <div className="mx-auto max-w-5xl">
          {/* Workflow diagram */}
          <div className="relative">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {workflowStages.map((stage, index) => (
                <div key={index}>
                  <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-4 backdrop-blur-sm transition-all hover:border-indigo-500/30 hover:bg-white/10">
                    <div className="mb-2 flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-sm font-bold text-indigo-300">
                        {index + 1}
                      </div>
                      <h3 className="font-semibold text-white">{stage.title}</h3>
                    </div>
                    <p className="text-sm text-slate-400">{stage.description}</p>
                  </div>

                  {/* Arrow connector for non-last items */}
                  {index < workflowStages.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center py-4">
                      <div className="h-0.5 w-12 bg-gradient-to-r from-indigo-500/20 to-transparent" />
                      <div className="text-indigo-500/50 text-lg">→</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Supporting text */}
          <p className="mt-6 text-center text-lg text-slate-400">
            A standardized governance workflow accelerates AI adoption while maintaining enterprise control.
          </p>
        </div>
      </div>
    </section>
  );
}
