import Link from 'next/link';
import { ArrowRight, ShieldCheck, Eye, Shield, Lock, Activity, CheckCircle2, Building2, Users, Clock3, BadgeCheck, DollarSign, Zap, Pill, Briefcase, BarChart3, Cpu, Mail, Globe } from 'lucide-react';

const proofMetrics = [
  { value: '247', label: 'avg AI apps found per enterprise', color: 'text-cyan-400' },
  { value: '87%', label: 'reduction in discovery time', color: 'text-indigo-400' },
  { value: '100%', label: 'policies enforced across agents', color: 'text-purple-400' },
  { value: '98%', label: 'compliance readiness score', color: 'text-green-400' },
  { value: '94%', label: 'faster threat detection vs manual', color: 'text-red-400' },
  { value: '32%', label: 'average reduction in AI spend', color: 'text-yellow-400' },
];

const pillars = [
  {
    title: 'Discover',
    icon: Eye,
    href: '/discover',
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
    desc: 'Continuously identifies AI agents, apps, and shadow AI across your enterprise so governance starts with complete visibility.',
  },
  {
    title: 'Govern',
    icon: Shield,
    href: '/govern',
    color: 'text-purple-400',
    border: 'border-purple-500/30',
    bg: 'bg-purple-500/10',
    desc: 'Defines enterprise policies, controls, and compliance guardrails that apply consistently across AI systems.',
  },
  {
    title: 'Enforce',
    icon: Lock,
    href: '/enforce',
    color: 'text-red-400',
    border: 'border-red-500/30',
    bg: 'bg-red-500/10',
    desc: 'Prevents violations in real time with automated blocking, escalation, and human-in-the-loop checks.',
  },
  {
    title: 'Monitor',
    icon: Activity,
    href: '/monitor',
    color: 'text-green-400',
    border: 'border-green-500/30',
    bg: 'bg-green-500/10',
    desc: 'Tracks cost, risk, compliance, and performance continuously to keep teams audit-ready and in control.',
  },
];

const industries = [
  {
    name: 'Financial Services',
    icon: DollarSign,
    desc: 'Ensure AI complies with SEC, FINRA, and internal risk policies.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
  },
  {
    name: 'Healthcare & Life Sciences',
    icon: Pill,
    desc: 'Meet HIPAA, FDA guidance, and clinical governance requirements.',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
  },
  {
    name: 'Technology & SaaS',
    icon: Cpu,
    desc: 'Control AI sprawl across engineering, product, and support teams.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
  },
  {
    name: 'Insurance',
    icon: Shield,
    desc: 'Govern AI used in underwriting, claims, and customer interactions.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30',
  },
  {
    name: 'Manufacturing & Industrial',
    icon: Zap,
    desc: 'Manage AI in operations, supply chain, and quality assurance.',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
  },
  {
    name: 'Professional Services',
    icon: Briefcase,
    desc: 'Apply consistent AI governance across client engagements.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
  },
];

const teamAreas = [
  {
    title: 'Leadership Team',
    desc: 'Decades of combined experience in compliance, AI, and enterprise software',
    icon: Building2,
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/30',
  },
  {
    title: 'Engineering',
    desc: 'World-class engineers from top tech companies building scalable solutions',
    icon: Cpu,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30',
  },
  {
    title: 'Compliance Experts',
    desc: 'Former regulators and auditors ensuring best-in-class compliance guidance',
    icon: Shield,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-12 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20" />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-5">
            <ShieldCheck className="w-3.5 h-3.5" /> About AgentsFlow
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
            The <span className="gradient-text">Enterprise AI Control Plane</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            AgentsFlow helps enterprises discover every AI system, govern usage with clear policies,
            enforce controls in real time, and continuously monitor outcomes. We exist to make AI adoption safe,
            compliant, and measurable at enterprise scale.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/#demo" className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all pulse-glow inline-flex items-center gap-2">
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/platform" className="px-6 py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
              Explore Platform
            </Link>
          </div>
        </div>
      </section>

      {/* Proof Metrics */}
      <section className="py-10 lg:py-12 bg-[#0f172a] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {proofMetrics.map((m) => (
              <div key={m.label} className="p-5 rounded-2xl bg-white/3 border border-white/10 card-hover">
                <div className={`text-3xl font-black ${m.color} mb-1`}>{m.value}</div>
                <div className="text-xs text-gray-400">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-14 lg:py-16 bg-[#0a0f1e]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-9">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">What We Do</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Our platform is built around four capabilities that create one closed-loop governance system.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((p) => (
              <Link key={p.title} href={p.href} className={`p-5 rounded-2xl ${p.bg} border ${p.border} card-hover group`}>
                <p.icon className={`w-6 h-6 ${p.color} mb-3`} />
                <h3 className={`text-lg font-bold ${p.color} mb-2`}>{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">{p.desc}</p>
                <span className={`text-xs ${p.color} inline-flex items-center gap-1`}>Explore {p.title} <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Platform & Trust */}
      <section className="py-14 lg:py-16 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white/3 border border-white/10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">How the Platform Works</h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              AgentsFlow sits between enterprise users and AI systems as a governance layer. Discovery feeds inventory,
              governance defines policy, enforcement applies controls at runtime, and monitoring tracks outcomes.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Building2, title: 'Enterprise Scale', txt: 'Built for complex app portfolios and multi-team ownership.' },
                { icon: Users, title: 'Role-Based Controls', txt: 'Supports IT, Risk, Security, and Compliance teams.' },
                { icon: Clock3, title: '24/7 Monitoring', txt: 'Continuous visibility for costs, risk posture, and performance.' },
                { icon: BadgeCheck, title: 'Audit-Ready', txt: 'Policy changes and enforcement actions are fully traceable.' },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <item.icon className="w-4 h-4 text-indigo-300 mb-2" />
                  <div className="text-sm font-semibold text-white mb-1">{item.title}</div>
                  <div className="text-xs text-gray-400">{item.txt}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/30">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Trust & Assurance</h2>
            <div className="space-y-3">
              {[
                'Policy enforcement across AI workflows with runtime controls',
                'Human-in-the-loop checkpoints for sensitive and edge-case scenarios',
                'Continuous monitoring and alerting across cost, risk, and compliance',
                'Audit trails for approvals, policy changes, and violations',
                'Support for regulated industries and enterprise security expectations',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-14 lg:py-16 bg-[#0a0f1e]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-9">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Industries We Serve</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">AgentsFlow is built for regulated, mission-critical industries where AI governance is non-negotiable.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind) => (
              <div key={ind.name} className={`p-5 rounded-2xl ${ind.bg} border ${ind.border} card-hover`}>
                <ind.icon className={`w-6 h-6 ${ind.color} mb-3`} />
                <h3 className={`text-lg font-bold ${ind.color} mb-2`}>{ind.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services as Secondary */}
      <section className="py-12 lg:py-14 bg-[#0f172a] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">How We Deliver (Secondary)</h2>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              Services support the platform rollout. They do not replace the product story.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white/3 border border-white/10">
              <div className="text-sm font-semibold text-indigo-300 mb-2">Advisory & Architecture</div>
              <p className="text-sm text-gray-400">Framework design, policy architecture, and rollout planning for organisations building governance programs.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white/3 border border-white/10">
              <div className="text-sm font-semibold text-green-300 mb-2">Managed Services</div>
              <p className="text-sm text-gray-400">Ongoing monitoring, policy operations, change governance, and audit-readiness support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-14 lg:py-16 bg-[#0a0f1e]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Our Team</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Experts in AI, compliance, and enterprise technology</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamAreas.map((area) => (
              <div key={area.title} className={`p-6 rounded-2xl ${area.bg} border ${area.border} card-hover text-center`}>
                <area.icon className={`w-10 h-10 ${area.color} mx-auto mb-4`} />
                <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 lg:py-16 bg-gradient-to-br from-indigo-900/50 to-cyan-900/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Build Responsible AI at Enterprise Scale</h2>
          <p className="text-gray-300 mb-7 max-w-2xl mx-auto">See how AgentsFlow can help your teams adopt AI with visibility, control, and measurable outcomes.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/#demo" className="px-7 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-bold rounded-xl hover:opacity-90 transition-all pulse-glow inline-flex items-center gap-2">
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/platform" className="px-7 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all">
              See Platform Walkthrough
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
