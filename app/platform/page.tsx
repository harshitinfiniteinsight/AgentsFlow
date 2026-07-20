import Link from 'next/link';
import { ArrowRight, Eye, Shield, Lock, Activity, Zap, Globe } from 'lucide-react';

export default function PlatformPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-6">
              <Zap className="w-3 h-3" /> Platform Overview
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              One Platform.<br /><span className="gradient-text">Complete Control.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              AgentsFlow is the Enterprise AI Control Plane - a single, unified platform that sits between your business and every AI agent, tool, and model you use.
            </p>
          </div>

          {/* Architecture visual */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <div className="p-6 rounded-2xl bg-white/3 border border-white/10 text-center">
              <Globe className="w-8 h-8 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Your Enterprise</h3>
              <p className="text-sm text-gray-400">Business apps, users, workflows, and data - your existing environment, untouched.</p>
            </div>
            <div className="p-6 rounded-2xl bg-indigo-500/15 border border-indigo-500/50 text-center glow">
              <Zap className="w-8 h-8 text-indigo-300 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">AgentsFlow Control Plane</h3>
              <p className="text-sm text-gray-400">Discover → Govern → Enforce → Monitor. All four pillars working together in real time.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/3 border border-white/10 text-center">
              <Activity className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-bold mb-2">Your AI Ecosystem</h3>
              <p className="text-sm text-gray-400">Every AI agent, model, SaaS app, and gateway - governed and controlled.</p>
            </div>
          </div>

          {/* Four pillars in platform context */}
          <h2 className="text-3xl font-black text-white text-center mb-10">The Four Pillars - Working Together</h2>
          <div className="space-y-4 mb-20">
            {[
              { icon: Eye, color: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', label: 'Discover', href: '/discover', desc: 'Automatically finds and catalogues every AI tool, agent, and application inside your organisation. The foundation of everything else.' },
              { icon: Shield, color: 'text-purple-400', border: 'border-purple-500/30', bg: 'bg-purple-500/10', label: 'Govern', href: '/govern', desc: 'Uses the inventory from Discover to build and apply policies, guardrails, and compliance rules across every AI tool - automatically.' },
              { icon: Lock, color: 'text-red-400', border: 'border-red-500/30', bg: 'bg-red-500/10', label: 'Enforce', href: '/enforce', desc: 'Applies the policies from Govern in real time - blocking violations, flagging risks, and escalating edge cases before damage is done.' },
              { icon: Activity, color: 'text-green-400', border: 'border-green-500/30', bg: 'bg-green-500/10', label: 'Monitor', href: '/monitor', desc: 'Tracks everything - costs, compliance, performance, and risk - and feeds insights back into Discover and Govern to continuously improve your posture.' },
            ].map((p, i) => (
              <Link key={p.label} href={p.href}
                className={`flex items-center gap-6 p-6 rounded-2xl ${p.bg} border ${p.border} card-hover group`}>
                <div className="text-2xl font-black text-white/20 w-8 shrink-0">{String(i + 1).padStart(2, '0')}</div>
                <p.icon className={`w-8 h-8 ${p.color} shrink-0`} />
                <div className="flex-1">
                  <div className={`font-bold text-lg ${p.color} mb-1`}>{p.label}</div>
                  <div className="text-sm text-gray-400">{p.desc}</div>
                </div>
                <ArrowRight className={`w-5 h-5 ${p.color} shrink-0 group-hover:translate-x-1 transition-transform`} />
              </Link>
            ))}
          </div>

          {/* Integrations */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-4">Integrates With Your Stack</h2>
            <p className="text-gray-400 mb-10">AgentsFlow connects to the tools your enterprise already uses - with no rip-and-replace.</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Salesforce', 'ServiceNow', 'Workday', 'Microsoft 365', 'Google Workspace', 'AWS', 'Azure', 'Slack', 'Jira'].map((tool) => (
                <div key={tool} className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
