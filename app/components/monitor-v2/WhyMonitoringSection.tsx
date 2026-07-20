'use client';

export default function WhyMonitoringSection() {
  return (
    <section className="bg-[#0b1222] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center">
            <h2 className="mb-3 text-3xl font-bold leading-tight text-white lg:text-4xl">
              Why Monitoring Matters
            </h2>
            <p className="mb-4 text-xl font-semibold text-cyan-400">
              AI governance doesn't end at deployment.
            </p>
            <p className="text-base leading-relaxed text-slate-400">
              Continuous monitoring ensures AI systems remain compliant, performant, and aligned with business objectives.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-400">
              Organizations need real-time visibility into AI behavior to detect risks early, maintain trust, and continuously improve AI performance.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <svg className="w-full max-w-lg" viewBox="0 0 420 360" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="monitorFlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.75" />
                </linearGradient>
                <radialGradient id="monitorNode" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#67e8f9" stopOpacity="1" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.45" />
                </radialGradient>
              </defs>

              <rect x="20" y="36" width="110" height="36" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.14)" />
              <text x="75" y="58" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontWeight="600">Production AI</text>

              <rect x="290" y="36" width="110" height="36" rx="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.14)" />
              <text x="345" y="58" textAnchor="middle" fill="#cbd5e1" fontSize="11" fontWeight="600">Telemetry</text>

              <circle cx="210" cy="168" r="46" fill="rgba(6,182,212,0.12)" stroke="#06b6d4" strokeWidth="2" />
              <circle cx="210" cy="168" r="24" fill="url(#monitorNode)" className="drop-shadow-lg" />
              <text x="210" y="164" textAnchor="middle" fill="#ecfeff" fontSize="11" fontWeight="700">AgentsFlow</text>
              <text x="210" y="178" textAnchor="middle" fill="#a5f3fc" fontSize="10">Monitor</text>

              <line x1="75" y1="72" x2="175" y2="138" stroke="url(#monitorFlow)" strokeWidth="1.8" strokeDasharray="5,4" opacity="0.7" className="animate-pulse" />
              <line x1="345" y1="72" x2="245" y2="138" stroke="url(#monitorFlow)" strokeWidth="1.8" strokeDasharray="5,4" opacity="0.7" className="animate-pulse" />
              <line x1="210" y1="214" x2="210" y2="300" stroke="url(#monitorFlow)" strokeWidth="1.8" strokeDasharray="5,4" opacity="0.7" className="animate-pulse" />

              {[80, 150, 270, 340].map((x, idx) => (
                <g key={idx}>
                  <circle cx={x} cy="300" r="18" fill="url(#monitorNode)" opacity="0.82" />
                  <text x={x} y="304" textAnchor="middle" fill="#ecfeff" fontSize="9" fontWeight="700">
                    {idx === 0 ? 'Logs' : idx === 1 ? 'Traces' : idx === 2 ? 'Metrics' : 'Events'}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
