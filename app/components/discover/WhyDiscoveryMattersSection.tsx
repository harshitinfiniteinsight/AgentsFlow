'use client';

export default function WhyDiscoveryMattersSection() {
  return (
    <section className="bg-[#0b1222] py-6 lg:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Typography */}
          <div className="flex flex-col justify-center">
            <div className="mb-4">
              <h2 className="mb-3 text-3xl font-bold leading-tight text-white lg:text-4xl">
                Why Discovery Matters
              </h2>
              <p className="mb-4 text-xl font-semibold text-cyan-400">
                You cannot govern what you cannot see.
              </p>
              <p className="text-lg leading-relaxed text-slate-400">
                As AI expands across enterprise applications, cloud platforms, and third-party vendors, organizations
                need a continuously updated inventory of AI assets.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-400">
                AgentsFlow Discover provides a real-time system of record for enterprise AI.
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
                <radialGradient id="ecosystemGradient1" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0891b2" stopOpacity="0.4" />
                </radialGradient>
                <radialGradient id="ecosystemGradient2" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.4" />
                </radialGradient>
                <radialGradient id="ecosystemGradient3" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#2563eb" stopOpacity="0.4" />
                </radialGradient>
                <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Outer circle - Enterprise ecosystem */}
              <circle cx="200" cy="250" r="160" fill="none" stroke="#06b6d4" strokeWidth="1" opacity="0.2" />

              {/* Platform nodes - Top */}
              <circle cx="80" cy="100" r="30" fill="url(#ecosystemGradient1)" />
              <text x="80" y="105" textAnchor="middle" className="fill-white text-xs font-bold" fontSize="10">
                SaaS AI
              </text>

              <circle cx="200" cy="50" r="30" fill="url(#ecosystemGradient2)" />
              <text x="200" y="55" textAnchor="middle" className="fill-white text-xs font-bold" fontSize="10">
                Cloud ML
              </text>

              <circle cx="320" cy="100" r="30" fill="url(#ecosystemGradient3)" />
              <text x="320" y="105" textAnchor="middle" className="fill-white text-xs font-bold" fontSize="10">
                Agents
              </text>

              {/* Platform nodes - Middle */}
              <circle cx="50" cy="250" r="30" fill="url(#ecosystemGradient2)" />
              <text x="50" y="255" textAnchor="middle" className="fill-white text-xs font-bold" fontSize="10">
                APIs
              </text>

              <circle cx="350" cy="250" r="30" fill="url(#ecosystemGradient1)" />
              <text x="350" y="255" textAnchor="middle" className="fill-white text-xs font-bold" fontSize="10">
                Models
              </text>

              {/* Platform nodes - Bottom */}
              <circle cx="80" cy="400" r="30" fill="url(#ecosystemGradient3)" />
              <text x="80" y="405" textAnchor="middle" className="fill-white text-xs font-bold" fontSize="10">
                Data
              </text>

              <circle cx="200" cy="450" r="30" fill="url(#ecosystemGradient2)" />
              <text x="200" y="455" textAnchor="middle" className="fill-white text-xs font-bold" fontSize="10">
                VectorDB
              </text>

              <circle cx="320" cy="400" r="30" fill="url(#ecosystemGradient1)" />
              <text x="320" y="405" textAnchor="middle" className="fill-white text-xs font-bold" fontSize="10">
                Apps
              </text>

              {/* Center inventory node */}
              <circle cx="200" cy="250" r="50" fill="url(#centerGradient)" className="drop-shadow-lg" />
              <text x="200" y="250" textAnchor="middle" className="fill-white text-sm font-bold" fontSize="12">
                AI
              </text>
              <text x="200" y="265" textAnchor="middle" className="fill-slate-200 text-xs" fontSize="9">
                Inventory
              </text>

              {/* Connecting lines */}
              <line x1="200" y1="250" x2="80" y2="100" stroke="#06b6d4" strokeWidth="1" opacity="0.4" />
              <line x1="200" y1="250" x2="200" y2="50" stroke="#6366f1" strokeWidth="1" opacity="0.4" />
              <line x1="200" y1="250" x2="320" y2="100" stroke="#3b82f6" strokeWidth="1" opacity="0.4" />
              <line x1="200" y1="250" x2="50" y2="250" stroke="#06b6d4" strokeWidth="1" opacity="0.4" />
              <line x1="200" y1="250" x2="350" y2="250" stroke="#6366f1" strokeWidth="1" opacity="0.4" />
              <line x1="200" y1="250" x2="80" y2="400" stroke="#3b82f6" strokeWidth="1" opacity="0.4" />
              <line x1="200" y1="250" x2="200" y2="450" stroke="#06b6d4" strokeWidth="1" opacity="0.4" />
              <line x1="200" y1="250" x2="320" y2="400" stroke="#6366f1" strokeWidth="1" opacity="0.4" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
