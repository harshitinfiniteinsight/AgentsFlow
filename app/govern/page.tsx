import { Shield } from 'lucide-react';
import PillarPage from '../components/PillarPage';

export default function GovernPage() {
  return (
    <PillarPage
      icon={Shield}
      label="Govern"
      tagline="Set the Rules. Own the Framework."
      description="Once you know what AI tools exist, you need to control how they can be used. AgentsFlow's Govern module lets you build policies, guardrails, and compliance frameworks that apply across every AI agent in your enterprise."
      gradient="from-purple-500 to-indigo-500"
      bgGlow="bg-purple-500"
      borderColor="border-purple-500/30"
      textColor="text-purple-400"
      features={[
        { title: 'Policy Builder', desc: 'Create governance policies in plain language - no coding required. Define what AI can and cannot do, who can use it, and under what conditions.' },
        { title: 'Industry-Specific Blueprints', desc: 'Pre-built compliance templates for GDPR, EU AI Act, HIPAA, SOC 2, and more. Go from zero to governed in days, not months.' },
        { title: 'Role-Based Access Control', desc: 'Define who in your organisation can use specific AI tools - and at what level. Prevent unauthorised access before it happens.' },
        { title: 'Data Classification Rules', desc: 'Specify which AI agents can access sensitive data. Automatically tag and restrict AI access to PII, financial data, and confidential records.' },
        { title: 'Approval Workflows', desc: 'New AI tools go through a structured approval process before they can be used - with sign-off from IT, Legal, and Compliance teams.' },
        { title: 'Governance Audit Trail', desc: 'Every policy decision, change, and approval is logged automatically - giving you a complete audit trail for regulators and auditors.' },
      ]}
      stats={[
        { value: '100%', label: 'policies enforced across all agents' },
        { value: '12 days', label: 'avg time to full governance framework' },
        { value: '98%', label: 'compliance readiness score' },
        { value: '0', label: 'manual policy processes required' },
      ]}
      howItWorks={[
        'Choose from our library of industry-specific compliance blueprints - or build your own governance framework from scratch using our policy builder.',
        'Define rules for data access, approved AI tools, user permissions, and acceptable use cases across your organisation.',
        'Policies are pushed automatically to every connected AI agent and application - no manual configuration required on each tool.',
        'Any change to a policy is logged, version-controlled, and auditable - so you always know who changed what and when.',
      ]}
      nextPillar={{ label: 'Enforce', href: '/enforce' }}
    />
  );
}
