import { Lock } from 'lucide-react';
import PillarPage from '../components/PillarPage';

export default function EnforcePage() {
  return (
    <PillarPage
      icon={Lock}
      label="Enforce"
      tagline="Stop Violations Before They Happen."
      description="Having policies means nothing if they are not enforced. AgentsFlow's Enforce module acts as your real-time AI firewall - automatically blocking, flagging, or escalating anything that breaks your rules, before it causes harm."
      gradient="from-red-500 to-pink-500"
      bgGlow="bg-red-500"
      borderColor="border-red-500/30"
      textColor="text-red-400"
      features={[
        { title: 'Real-Time Policy Enforcement', desc: 'Every AI request, query, and action is checked against your governance policies in milliseconds - before it is executed.' },
        { title: 'Automatic Blocking', desc: 'Requests that violate your policies are blocked instantly and automatically - no human intervention required.' },
        { title: 'Smart Escalation', desc: 'For borderline cases, AgentsFlow escalates to a human reviewer rather than blocking or allowing blindly - giving you control over edge cases.' },
        { title: 'Hallucination Guardrails', desc: 'Detect when AI agents produce outputs that are factually incorrect, inconsistent, or potentially harmful - and prevent those outputs from reaching end users.' },
        { title: 'Data Leak Prevention', desc: 'Prevent AI agents from outputting sensitive, confidential, or PII data that they should not be exposing - even if the underlying model generates it.' },
        { title: 'Violation Logging & Alerts', desc: 'Every blocked request, flagged output, and policy violation is logged in full - with instant alerts sent to your compliance and IT teams.' },
      ]}
      stats={[
        { value: '0', label: 'policy violations slip through' },
        { value: '<50ms', label: 'enforcement latency added' },
        { value: '94%', label: 'faster threat detection vs manual' },
        { value: '100%', label: 'of AI requests checked in real time' },
      ]}
      howItWorks={[
        'AgentsFlow sits between your users and AI agents as an intelligent governance layer - intercepting every request and response.',
        'Each interaction is evaluated against your active policy set in real time - taking less than 50 milliseconds per check.',
        'Violations are blocked automatically. Borderline cases are queued for human-in-the-loop review. All clean interactions pass through without delay.',
        'Every enforcement action is logged - creating a tamper-proof record for compliance audits, security reviews, and incident investigations.',
      ]}
      nextPillar={{ label: 'Monitor', href: '/monitor' }}
    />
  );
}
