import Link from 'next/link';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$2,500',
    period: '/month',
    desc: 'For organisations beginning their AI governance journey.',
    badge: null,
    gradient: 'from-indigo-600/20 to-purple-600/20',
    border: 'border-white/10',
    features: [
      'Up to 25 AI agents & apps',
      'Discover module - full inventory',
      'Basic policy templates',
      'Monthly compliance reports',
      'Email support',
      'Standard onboarding (2 weeks)',
    ],
    cta: 'Get Started',
    ctaStyle: 'bg-white/10 border border-white/20 hover:bg-white/20',
  },
  {
    name: 'Professional',
    price: '$6,500',
    period: '/month',
    desc: 'For growing enterprises with active AI programmes.',
    badge: 'Most Popular',
    gradient: 'from-indigo-600/40 to-cyan-600/40',
    border: 'border-indigo-500/50',
    features: [
      'Up to 150 AI agents & apps',
      'All four pillars - Discover, Govern, Enforce, Monitor',
      'Industry-specific compliance blueprints',
      'Real-time enforcement & alerting',
      'Weekly compliance reports',
      'Dedicated customer success manager',
      'Priority support (4hr response)',
      'Onboarding in 4 weeks',
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'bg-gradient-to-r from-indigo-600 to-cyan-600 hover:opacity-90 pulse-glow',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    desc: 'For large organisations with complex, multi-cloud AI environments.',
    badge: null,
    gradient: 'from-purple-600/20 to-pink-600/20',
    border: 'border-white/10',
    features: [
      'Unlimited AI agents & apps',
      'All four pillars + AI Mesh roadmap access',
      'Custom governance framework design',
      'Human-in-the-loop validation team',
      'Real-time audit readiness dashboard',
      'Executive governance reports (AI.GO)',
      'SLA-backed 24/7 support',
      'Dedicated implementation team',
      'Custom integrations (Salesforce, ServiceNow, Workday)',
    ],
    cta: 'Contact Sales',
    ctaStyle: 'bg-white/10 border border-white/20 hover:bg-white/20',
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Every plan gives you access to the full AgentsFlow platform. Choose the level of support and scale that fits your organisation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => (
              <div key={plan.name}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${plan.gradient} border ${plan.border} flex flex-col card-hover`}>
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white text-xs font-bold rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" /> {plan.badge}
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-sm text-gray-400 mb-6">{plan.desc}</p>
                  <div className="flex items-end gap-1 mb-8">
                    <span className="text-5xl font-black text-white">{plan.price}</span>
                    <span className="text-gray-400 text-sm pb-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-10 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/#demo"
                  className={`w-full py-3 rounded-xl text-white font-semibold text-center transition-all flex items-center justify-center gap-2 ${plan.ctaStyle}`}>
                  {plan.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ-style trust section */}
          <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: '🔒', title: 'No Lock-In', desc: 'Cancel or change plans at any time. We earn your business every month.' },
              { icon: '⚡', title: 'Fast Onboarding', desc: 'Most customers are fully live within 2–6 weeks depending on their plan.' },
              { icon: '💬', title: 'Always Supported', desc: 'Every plan includes access to our team of governance experts.' },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white/3 border border-white/10">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
