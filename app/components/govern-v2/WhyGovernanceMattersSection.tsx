'use client';

export default function WhyGovernanceMattersSection() {
  return (
    <section className="bg-[#0b1222] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Typography */}
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <h2 className="mb-4 text-3xl font-bold leading-tight text-white lg:text-4xl">
                Enterprise AI Requires Structured Governance
              </h2>
              <p className="mb-4 text-lg font-semibold text-indigo-400">
                Successful AI adoption depends on repeatable governance processes that balance innovation, risk, security, privacy, and compliance.
              </p>
              <p className="text-lg leading-relaxed text-slate-400">
                Without centralized governance, AI initiatives become inconsistent, difficult to audit, and challenging to scale across business units.
              </p>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative flex items-center justify-center">
            <svg
              className="w-full max-w-md"
              viewBox="0 0 400 500"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="workflowGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="workflowGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Governance checkpoints */}
              <rect x="30" y="50" width="140" height="50" fill="url(#workflowGradient1)" rx="6" className="drop-shadow-lg" />
              <text x="100" y="82" textAnchor="middle" className="fill-white font-bold" fontSize="12">
                Business Review
              </text>

              <line x1="100" y1="100" x2="100" y2="130" stroke="#6366f1" strokeWidth="2" opacity="0.5" />

              <rect x="230" y="50" width="140" height="50" fill="url(#workflowGradient2)" rx="6" className="drop-shadow-lg" />
              <text x="300" y="82" textAnchor="middle" className="fill-white font-bold" fontSize="12">
                Risk & Compliance
              </text>

              <line x1="300" y1="100" x2="300" y2="130" stroke="#3b82f6" strokeWidth="2" opacity="0.5" />

              {/* Central approval */}
              <circle cx="200" cy="200" r="40" fill="url(#workflowGradient1)" className="drop-shadow-lg" />
              <text x="200" y="205" textAnchor="middle" className="fill-white font-bold text-center" fontSize="11">
                Approval
              </text>

              {/* Input flows */}
              <line x1="100" y1="130" x2="165" y2="165" stroke="#6366f1" strokeWidth="1.5" opacity="0.4" strokeDasharray="5,5" />
              <line x1="300" y1="130" x2="235" y2="165" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4" strokeDasharray="5,5" />

              {/* Output flows */}
              <line x1="165" y1="235" x2="100" y2="270" stroke="#10b981" strokeWidth="2" opacity="0.6" />
              <line x1="235" y1="235" x2="300" y2="270" stroke="#10b981" strokeWidth="2" opacity="0.6" />

              {/* Output boxes */}
              <rect x="30" y="270" width="140" height="50" fill="url(#workflowGradient1)" rx="6" opacity="0.6" className="drop-shadow-lg" />
              <text x="100" y="302" textAnchor="middle" className="fill-slate-200 font-bold" fontSize="11">
                Deploy to Prod
              </text>

              <rect x="230" y="270" width="140" height="50" fill="url(#workflowGradient2)" rx="6" opacity="0.6" className="drop-shadow-lg" />
              <text x="300" y="302" textAnchor="middle" className="fill-slate-200 font-bold" fontSize="11">
                Monitor & Audit
              </text>

              {/* Policy enforcement */}
              <rect x="80" y="380" width="240" height="40" fill="none" stroke="#6366f1" strokeWidth="2" rx="4" opacity="0.5" />
              <text x="200" y="405" textAnchor="middle" className="fill-indigo-300 font-semibold" fontSize="12">
                Policy &amp; Compliance Framework
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
