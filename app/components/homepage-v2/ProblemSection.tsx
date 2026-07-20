import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import SectionIntro from './SectionIntro';
import { aiPlatforms, problemQuestions } from './data';

export default function ProblemSection() {
  return (
    <section className="bg-[#0b1222] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <SectionIntro
          eyebrow="The problem"
          title="AI is Growing Faster Than Enterprise Control"
          description="Every new copilot, model endpoint, agent workflow, and embedded AI feature increases enterprise complexity. Visibility rarely scales at the same speed."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 lg:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-2">
                <AlertTriangle className="h-5 w-5 text-cyan-300" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Expanding AI surface area</p>
                <p className="text-sm text-slate-400">The average enterprise now operates across a mix of cloud-native and embedded AI platforms.</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {aiPlatforms.map((platform, index) => (
                <div
                  key={platform}
                  className="rounded-2xl border border-white/8 bg-[#0f172b] px-4 py-3 text-sm text-slate-200 transition-all hover:-translate-y-0.5 hover:border-white/15 hover:bg-[#111d35]"
                >
                  <div className="mb-1 text-[11px] uppercase tracking-[0.2em] text-slate-500">AI {String(index + 1).padStart(2, '0')}</div>
                  {platform}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.03] p-6 lg:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl border border-indigo-400/20 bg-indigo-400/10 p-2">
                <CheckCircle2 className="h-5 w-5 text-indigo-300" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Most organizations cannot answer</p>
                <p className="text-sm text-slate-400">Critical questions remain fragmented across legal, security, architecture, and platform teams.</p>
              </div>
            </div>

            <div className="space-y-3">
              {problemQuestions.map((question) => (
                <div key={question} className="rounded-2xl border border-white/8 bg-[#0f172b]/80 px-4 py-3 text-sm text-slate-200">
                  • {question}
                </div>
              ))}
            </div>

            <p className="mt-6 border-t border-white/10 pt-6 text-sm leading-relaxed text-slate-400">
              Without a unified control plane, AI governance becomes fragmented, reactive, and difficult to scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
