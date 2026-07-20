'use client';

export default function WhyEnforcementMattersSection() {
  return (
    <section className="bg-[#0b1222] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-3 text-3xl font-bold leading-tight text-white lg:text-4xl">
              Governance Only Works When Policies Are Enforced
            </h2>
            <p className="mb-4 text-lg font-semibold text-violet-400">
              Defining governance policies is only the first step.
            </p>
            <p className="text-base leading-relaxed text-slate-400">
              Real enterprise control requires those policies to be automatically enforced wherever AI is running.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-400">
              AgentsFlow converts business policies into platform-specific runtime controls without requiring manual implementation for every vendor.
            </p>
          </div>

          {/* Right — policy flow illustration */}
          <div className="flex items-center justify-center">
            <svg className="w-full max-w-sm" viewBox="0 0 360 380" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="policyFlowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
                </linearGradient>
              </defs>

              {/* Central policy box */}
              <rect x="100" y="20" width="160" height="40" fill="rgba(168,85,247,0.15)" stroke="#a855f7" strokeWidth="2" rx="8" />
              <text x="180" y="45" textAnchor="middle" fill="#d8b4fe" fontWeight="700" fontSize="12">Business Policy</text>

              {/* Center engine */}
              <circle cx="180" cy="155" r="38" fill="rgba(168,85,247,0.2)" stroke="#a855f7" strokeWidth="2" />
              <text x="180" y="150" textAnchor="middle" fill="#e9d5ff" fontWeight="700" fontSize="11">AgentsFlow</text>
              <text x="180" y="165" textAnchor="middle" fill="#c4b5fd" fontSize="10">Policy Engine</text>

              {/* Flow line from policy to engine */}
              <line x1="180" y1="60" x2="180" y2="117" stroke="#a855f7" strokeWidth="2" strokeDasharray="5,4" opacity="0.6" className="animate-pulse" />

              {/* Outgoing lines to platforms */}
              <line x1="142" y1="175" x2="60" y2="240" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.5" />
              <line x1="162" y1="190" x2="120" y2="255" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.5" />
              <line x1="180" y1="193" x2="180" y2="255" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.5" />
              <line x1="198" y1="190" x2="240" y2="255" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.5" />
              <line x1="218" y1="175" x2="300" y2="240" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.5" />

              {/* Platform nodes */}
              {[
                { cx: 60, cy: 255, label: 'Azure' },
                { cx: 120, cy: 270, label: 'Bedrock' },
                { cx: 180, cy: 275, label: 'Vertex' },
                { cx: 240, cy: 270, label: 'Portkey' },
                { cx: 300, cy: 255, label: 'Kong' },
              ].map((node, i) => (
                <g key={i}>
                  <circle cx={node.cx} cy={node.cy} r="18" fill="rgba(99,102,241,0.15)" stroke="#6366f1" strokeWidth="1.5" />
                  <text x={node.cx} y={node.cy + 4} textAnchor="middle" fill="#a5b4fc" fontSize="9" fontWeight="600">{node.label}</text>
                </g>
              ))}

              {/* Runtime controls label */}
              <rect x="60" y="310" width="240" height="24" fill="rgba(16,185,129,0.10)" stroke="#10b981" strokeWidth="1.5" rx="12" />
              <text x="180" y="327" textAnchor="middle" fill="#6ee7b7" fontWeight="600" fontSize="10">Runtime Controls Active</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
