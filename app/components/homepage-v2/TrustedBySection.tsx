import { trustedTeams } from './data';

export default function TrustedBySection() {
  return (
    <section className="border-b border-white/5 bg-[#0a1326] py-6 lg:py-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
          Trusted by the teams shaping enterprise AI
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
          {trustedTeams.map((team) => (
            <div
              key={team}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm transition-colors hover:border-cyan-400/30 hover:text-white"
            >
              {team}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
