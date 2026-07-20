import {
  Shield,
  Zap,
  Lock,
  Filter,
  UserCheck,
  FileText,
  AlertTriangle,
  Cpu,
  Cloud,
  Globe,
  CheckCircle2,
  LucideIcon,
} from 'lucide-react';

export interface PlatformCard {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface CapabilityCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BenefitItem {
  text: string;
}

export const runtimeControls: CapabilityCard[] = [
  { title: 'Prompt Filtering', description: 'Block or modify unsafe prompts before they reach models.', icon: Filter },
  { title: 'Content Safety', description: 'Enforce content policies and safety guardrails at runtime.', icon: Shield },
  { title: 'PII Protection', description: 'Automatically detect and redact sensitive personal data.', icon: Lock },
  { title: 'Token Limits', description: 'Enforce usage quotas and token budget policies per application.', icon: Zap },
  { title: 'Rate Limiting', description: 'Control request frequency across AI platforms and gateways.', icon: AlertTriangle },
  { title: 'Model Restrictions', description: 'Restrict which models can be invoked per policy or team.', icon: Cpu },
  { title: 'Human Approvals', description: 'Trigger human-in-the-loop reviews for high-risk AI actions.', icon: UserCheck },
  { title: 'Audit Logging', description: 'Capture complete audit trails of every AI interaction.', icon: FileText },
];

export const platforms: PlatformCard[] = [
  { title: 'Azure AI Foundry', description: 'Full policy enforcement across Azure AI services and agents.', icon: Cloud, color: 'text-blue-400' },
  { title: 'AWS Bedrock', description: 'Runtime controls for Amazon Bedrock models and APIs.', icon: Cloud, color: 'text-orange-400' },
  { title: 'Google Vertex AI', description: 'Policy enforcement across Vertex AI and Gemini services.', icon: Cloud, color: 'text-emerald-400' },
  { title: 'Portkey', description: 'Governance layer integration with Portkey AI gateway.', icon: Globe, color: 'text-violet-400' },
  { title: 'Kong AI Gateway', description: 'Policy enforcement via Kong AI plugin architecture.', icon: Globe, color: 'text-cyan-400' },
  { title: 'LiteLLM', description: 'Centralized policy controls across LiteLLM proxy deployments.', icon: Globe, color: 'text-rose-400' },
  { title: 'Custom Gateways', description: 'Flexible adapter framework for any custom AI gateway.', icon: Globe, color: 'text-indigo-400' },
];

export const enforceBenefits: BenefitItem[] = [
  { text: 'One business policy. Every runtime.' },
  { text: 'Consistent governance across all vendors.' },
  { text: 'Eliminate manual policy duplication.' },
  { text: 'Accelerate AI deployments.' },
  { text: 'Reduce operational risk.' },
  { text: 'Support regulatory compliance.' },
  { text: 'Maintain vendor flexibility.' },
  { text: 'Simplify runtime governance.' },
  { text: 'Complete audit trail for every AI action.' },
];

export const architectureLayers = [
  { title: 'Business Applications', description: 'Enterprise apps triggering AI workflows' },
  { title: 'AgentsFlow Enforce', description: 'Central enforcement hub', highlight: true },
  { title: 'Policy Engine', description: 'Translates policies to platform configs' },
  { title: 'Runtime Adapters', description: 'Platform-specific connectors' },
  { title: 'AI Gateways', description: 'Request routing and control layer' },
  { title: 'Foundation Models', description: 'LLMs and AI model endpoints' },
];
