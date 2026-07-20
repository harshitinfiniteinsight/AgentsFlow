'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Eye, Lock, Activity, ChevronDown, CheckCircle, TrendingDown, AlertTriangle, BarChart3, Star } from 'lucide-react';

const pillars = [
  { id:'discover', icon:Eye, label:'Discover', color:'from-cyan-500 to-blue-500', bg:'bg-cyan-500/10', border:'border-cyan-500/30', text:'text-cyan-400', desc:"Find every AI agent and app across your organisation - even the ones IT doesn't know about.", href:'/discover', stat:'247 apps found' },
  { id:'govern', icon:Shield, label:'Govern', color:'from-purple-500 to-indigo-500', bg:'bg-purple-500/10', border:'border-purple-500/30', text:'text-purple-400', desc:'Set policies, rules, and guardrails for how AI can and cannot be used inside your company.', href:'/govern', stat:'100% policies enforced' },
  { id:'enforce', icon:Lock, label:'Enforce', color:'from-red-500 to-pink-500', bg:'bg-red-500/10', border:'border-red-500/30', text:'text-red-400', desc:'Automatically block or flag anything that breaks your rules - in real time, before damage is done.', href:'/enforce', stat:'0 violations slip through' },
  { id:'monitor', icon:Activity, label:'Monitor', color:'from-green-500 to-emerald-500', bg:'bg-green-500/10', border:'border-green-500/30', text:'text-green-400', desc:'Track costs, performance, compliance, and risk across all AI systems - continuously.', href:'/monitor', stat:'340ms avg latency' },
];

const stats = [
  { value:'78%', label:'of enterprises have untracked AI costs', icon:TrendingDown, color:'text-red-400' },
  { value:'2.3s', label:'average AI latency without governance', icon:AlertTriangle, color:'text-yellow-400' },
  { value:'23', label:'unmanaged Shadow AI tools per company on average', icon:Eye, color:'text-cyan-400' },
  { value:'12', label:'open policy violations in a typical enterprise', icon:Shield, color:'text-purple-400' },
];

const advantages = [
  { title:'Regulatory Expertise', desc:'Deep knowledge of EU AI Act, GDPR, HIPAA, and emerging global AI regulations.', icon:'⚖️' },
  { title:'Enterprise Scale', desc:'Built for Fortune 500 complexity - enterprise-grade security and scalability.', icon:'🏢' },
  { title:'300% ROI', desc:'Average 300% return within 12 months through reduced compliance costs.', icon:'📈' },
  { title:'Industry Focus', desc:'Specialised for financial services, healthcare, insurance, and regulated sectors.', icon:'🎯' },
  { title:'Continuous Innovation', desc:'Regular updates to stay ahead of evolving regulations and emerging AI risks.', icon:'🔄' },
  { title:'Expert Support', desc:'Dedicated compliance experts and technical support to ensure your success.', icon:'🤝' },
];

const methodology = [
  { step:'01', title:'Assess', desc:'We map every AI agent and app in your organisation - including shadow AI your IT team may not know about. We review compliance posture, costs, and risks.', time:'1–2 weeks' },
  { step:'02', title:'Design', desc:'We build a governance framework tailored to your industry and regulatory requirements. This includes guardrails, policies, and a compliance blueprint.', time:'2–4 weeks' },
  { step:'03', title:'Implement', desc:'We deploy tools and processes with minimal disruption to your existing workflows. Your teams stay productive while governance goes live.', time:'2–6 weeks' },
  { step:'04', title:'Monitor', desc:'Continuous tracking of costs, performance, and compliance. We alert you before problems happen and optimise your governance over time.', time:'Ongoing' },
];

function ArchitectureDiagram() {
  return (
    <div className="relative w-full max-w-lg mx-auto float">
      <svg viewBox="0 0 400 340" className="w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8"/>
          </linearGradient>
        </defs>
        <circle cx="200" cy="170" r="100" fill="url(#centerGlow)"/>
        <rect x="140" y="10" width="120" height="36" rx="8" fill="#1e293b" stroke="#6366f1" strokeWidth="1.5"/>
        <text x="200" y="33" textAnchor="middle" fill="#a5b4fc" fontSize="12" fontWeight="600">Business Apps</text>
        <rect x="140" y="294" width="120" height="36" rx="8" fill="#1e293b" stroke="#06b6d4" strokeWidth="1.5"/>
        <text x="200" y="317" textAnchor="middle" fill="#67e8f9" fontSize="12" fontWeight="600">Cloud / Models</text>
        <rect x="10" y="152" width="100" height="36" rx="8" fill="#1e293b" stroke="#8b5cf6" strokeWidth="1.5"/>
        <text x="60" y="175" textAnchor="middle" fill="#c4b5fd" fontSize="12" fontWeight="600">Gateways</text>
        <rect x="290" y="152" width="100" height="36" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5"/>
        <text x="340" y="175" textAnchor="middle" fill="#6ee7b7" fontSize="12" fontWeight="600">SaaS AI</text>
        <line x1="200" y1="46" x2="200" y2="118" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="5,3" className="node-line"/>
        <line x1="200" y1="222" x2="200" y2="294" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="5,3" className="node-line"/>
        <line x1="110" y1="170" x2="148" y2="170" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="5,3" className="node-line"/>
        <line x1="252" y1="170" x2="290" y2="170" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="5,3" className="node-line"/>
        <rect x="120" y="118" width="160" height="104" rx="16" fill="#1e293b" stroke="#6366f1" strokeWidth="2"/>
        <text x="200" y="158" textAnchor="middle" fill="white" fontSize="14" fontWeight="800">AgentsFlow</text>
        <text x="200" y="178" textAnchor="middle" fill="#818cf8" fontSize="10">Enterprise AI Control Plane</text>
        <text x="148" y="204" textAnchor="middle" fill="#67e8f9" fontSize="9">Discover</text>
        <text x="176" y="204" textAnchor="middle" fill="#c4b5fd" fontSize="9">Govern</text>
        <text x="204" y="204" textAnchor="middle" fill="#f87171" fontSize="9">Enforce</text>
        <text x="232" y="204" textAnchor="middle" fill="#6ee7b7" fontSize="9">Monitor</text>
      </svg>
    </div>
  );
}

export default function HomePage() {
  const [activeStep, setActiveStep] = useState(0);
  const [roiAgents, setRoiAgents] = useState(50);

  const annualSavings = Math.round(roiAgents * 1200);
  const agentsflowCost = Math.round(roiAgents * 300);
  const net = annualSavings - agentsflowCost;

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[82vh] flex items-center justify-center pt-16 lg:pt-20 pb-10 lg:pb-12 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(circle at 1px 1px, rgba(99,102,241,0.4) 1px, transparent 0)',backgroundSize:'40px 40px'}}/>
        <div className="absolute top-32 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"/>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-600/15 rounded-full blur-3xl"/>
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"/>
              Introducing AgentsFlow v3.0
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              The Enterprise<br/><span className="gradient-text">AI Control Plane</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-lg">
              While your teams build and deploy AI agents, AgentsFlow governs them. One platform to <strong className="text-white">Discover</strong>, <strong className="text-white">Govern</strong>, <strong className="text-white">Enforce</strong>, and <strong className="text-white">Monitor</strong> every AI agent in your enterprise.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link href="#pillars" className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all pulse-glow flex items-center gap-2">
                See It in Action <ArrowRight className="w-4 h-4"/>
              </Link>
              <Link href="#demo" className="px-6 py-3 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
                Book a Demo
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 border-t border-white/10 pt-6">
              {[{v:'-34%',l:'Cost Reduction'},{v:'340ms',l:'Avg Latency'},{v:'100%',l:'Policy Enforcement'},{v:'98%',l:'Compliance Ready'}].map(m=>(
                <div key={m.l}><div className="text-xl font-black text-white">{m.v}</div><div className="text-xs text-gray-500">{m.l}</div></div>
              ))}
            </div>
          </div>
          <div className="flex justify-center"><ArchitectureDiagram/></div>
        </div>
        <a href="#pillars" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white transition-colors">
          <ChevronDown className="w-6 h-6 animate-bounce"/>
        </a>
      </section>

      {/* CRISIS STATS */}
      <section className="py-14 lg:py-16 bg-gradient-to-b from-[#0a0f1e] to-[#0f172a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">The AI Governance Crisis is <span className="gradient-text">Already Here</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">While enterprises rush to deploy AI agents, they are creating ungoverned ecosystems that put compliance, costs, and customer trust at serious risk.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(s=>(
              <div key={s.label} className="text-center p-6 rounded-2xl bg-white/3 border border-white/10 card-hover">
                <s.icon className={`w-8 h-8 ${s.color} mx-auto mb-3`}/>
                <div className={`text-4xl font-black ${s.color} mb-2`}>{s.value}</div>
                <div className="text-xs text-gray-400 leading-relaxed">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section id="pillars" className="py-16 lg:py-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Four Pillars. One Platform.</h2>
            <p className="text-gray-400 max-w-xl mx-auto">AgentsFlow is built around four capabilities that together form a complete AI governance system for your enterprise.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map(p=>(
              <Link key={p.id} href={p.href} className={`group p-6 rounded-2xl ${p.bg} border ${p.border} card-hover flex flex-col gap-4`}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <p.icon className="w-6 h-6 text-white"/>
                </div>
                <div>
                  <div className={`text-lg font-bold ${p.text} mb-2`}>{p.label}</div>
                  <div className="text-sm text-gray-400 leading-relaxed">{p.desc}</div>
                </div>
                <div className={`text-xs font-semibold ${p.text} mt-auto flex items-center gap-1`}>
                  <CheckCircle className="w-3 h-3"/> {p.stat}
                </div>
                <div className={`text-xs ${p.text} flex items-center gap-1 group-hover:gap-2 transition-all`}>
                  Explore {p.label} <ArrowRight className="w-3 h-3"/>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 lg:py-20 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Two Ways to Work With Us</h2>
            <p className="text-gray-400 max-w-lg mx-auto">You get all four pillars regardless of which path you choose. The difference is how we deliver them.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name:'Advisory & Architecture', badge:'4–12 weeks', badgeColor:'bg-indigo-500/20 text-indigo-300 border-indigo-500/30', desc:'Strategic guidance for companies that want a governance framework designed and ready to deploy.', items:['AI governance framework design','Industry-specific compliance blueprints','Cost and latency optimization models','Executive-level governance insights'], gradient:'from-indigo-600/20 to-purple-600/20', border:'border-indigo-500/30' },
              { name:'Managed Services', badge:'Ongoing partnership', badgeColor:'bg-green-500/20 text-green-300 border-green-500/30', desc:'Hands-on management for companies that want governance fully handled by our team.', items:['24/7 monitoring and alerting','Human-in-the-loop validation','Automated change management','Ongoing compliance maintenance'], gradient:'from-green-600/20 to-cyan-600/20', border:'border-green-500/30' },
            ].map(s=>(
              <div key={s.name} className={`p-8 rounded-2xl bg-gradient-to-br ${s.gradient} border ${s.border} card-hover`}>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${s.badgeColor} mb-4`}>{s.badge}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{s.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{s.desc}</p>
                <ul className="space-y-3 mb-8">
                  {s.items.map(item=>(
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0"/> {item}
                    </li>
                  ))}
                </ul>
                <Link href="#demo" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/20 text-white text-sm font-semibold rounded-xl hover:bg-white/20 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4"/>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-16 lg:py-20 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Our Methodology</h2>
            <p className="text-gray-400 max-w-lg mx-auto">A proven four-step approach that balances speed with rigour. Click each step to learn more.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {methodology.map((m,i)=>(
              <button key={m.step} onClick={()=>setActiveStep(i)}
                className={`text-left p-6 rounded-2xl border transition-all ${activeStep===i?'bg-indigo-500/15 border-indigo-500/50 scale-105':'bg-white/3 border-white/10 hover:border-white/20'}`}>
                <div className="text-4xl font-black text-indigo-500/40 mb-2">{m.step}</div>
                <div className="text-lg font-bold text-white mb-1">{m.title}</div>
                <div className="text-xs text-indigo-300 font-medium">{m.time}</div>
              </button>
            ))}
          </div>
          <div className="p-6 rounded-2xl bg-white/3 border border-indigo-500/30">
            <div className="text-sm font-semibold text-indigo-300 mb-2">Step {methodology[activeStep].step} - {methodology[activeStep].title} ({methodology[activeStep].time})</div>
            <p className="text-gray-300 leading-relaxed">{methodology[activeStep].desc}</p>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-16 lg:py-20 bg-[#0a0f1e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Why Leading Enterprises Choose <span className="gradient-text">AgentsFlow</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {advantages.map(a=>(
              <div key={a.title} className="p-6 rounded-2xl bg-white/3 border border-white/10 card-hover">
                <div className="text-3xl mb-4">{a.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{a.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <section id="demo" className="py-16 lg:py-20 bg-[#0f172a]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Calculate Your <span className="gradient-text">ROI</span></h2>
            <p className="text-gray-400">Adjust the slider to see how much AgentsFlow could save your organisation.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="p-8 rounded-2xl bg-white/3 border border-white/10">
              <label className="block text-sm text-gray-300 font-medium mb-2">
                Number of AI Agents &amp; Apps: <span className="text-white font-bold">{roiAgents}</span>
              </label>
              <input type="range" min="5" max="500" value={roiAgents} onChange={e=>setRoiAgents(Number(e.target.value))} className="w-full accent-indigo-500 mb-8"/>
              <div className="space-y-4">
                {[
                  {label:'Current Annual AI Spend (est.)',value:`$${(roiAgents*6000).toLocaleString()}`,color:'text-gray-300'},
                  {label:'Projected Annual Savings',value:`$${annualSavings.toLocaleString()}`,color:'text-green-400'},
                  {label:'AgentsFlow Annual Cost',value:`$${agentsflowCost.toLocaleString()}`,color:'text-yellow-400'},
                  {label:'Net Annual Benefit',value:`$${net.toLocaleString()}`,color:net>=0?'text-cyan-400':'text-red-400'},
                ].map(row=>(
                  <div key={row.label} className="flex justify-between items-center border-b border-white/10 pb-3">
                    <span className="text-sm text-gray-400">{row.label}</span>
                    <span className={`font-bold ${row.color}`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-[#0a0f1e] border border-indigo-500/30 glow">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-semibold text-white">Live Governance Dashboard</span>
                <span className="flex items-center gap-1 text-xs text-green-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/> Live
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  {label:'Total Cost',value:'$1,616',icon:BarChart3,color:'text-yellow-400'},
                  {label:'Risk Score',value:'62/100',icon:AlertTriangle,color:'text-red-400'},
                  {label:'Compliance',value:'92%',icon:Shield,color:'text-green-400'},
                  {label:'Adoption',value:'74%',icon:Activity,color:'text-cyan-400'},
                ].map(card=>(
                  <div key={card.label} className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <card.icon className={`w-4 h-4 ${card.color} mb-2`}/>
                    <div className={`text-xl font-black ${card.color}`}>{card.value}</div>
                    <div className="text-xs text-gray-500">{card.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400 shrink-0"/>
                <span className="text-xs text-green-300">All systems operational - no active alerts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-14 lg:py-16 bg-gradient-to-br from-indigo-900/50 to-cyan-900/30 border-y border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Transform Your <span className="gradient-text">AI Governance?</span></div>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">Join leading enterprises who trust AgentsFlow to navigate the complex landscape of AI compliance and governance.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://iagentsflow.com" target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-bold rounded-xl hover:opacity-90 transition-all pulse-glow flex items-center gap-2 text-lg">
              Schedule a Demo <ArrowRight className="w-5 h-5"/>
            </a>
            <Link href="/pricing" className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-lg">
              View Pricing
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-400">
            {['SOC 2 Type II','GDPR Ready','ISO 27001','HIPAA Compliant'].map(badge=>(
              <span key={badge} className="flex items-center gap-1"><Star className="w-3 h-3 text-indigo-400"/> {badge}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
