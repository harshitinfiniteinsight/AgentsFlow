import {
  Eye,
  Database,
  Bot,
  Cpu,
  Shield,
  Network,
  Code2,
  GitBranch,
  Zap,
  TrendingUp,
  CheckCircle2,
  LucideIcon,
} from 'lucide-react';

export interface CapabilityCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BenefitItem {
  text: string;
}

export const discoverCapabilities: CapabilityCard[] = [
  {
    title: 'AI Inventory',
    description: 'Maintain a continuously updated inventory of all enterprise AI assets.',
    icon: Database,
  },
  {
    title: 'Agent Registry',
    description: 'Track every deployed AI agent across your organization.',
    icon: Bot,
  },
  {
    title: 'Model Discovery',
    description: 'Identify foundation models, LLMs, and custom models in use.',
    icon: Cpu,
  },
  {
    title: 'SaaS AI Discovery',
    description: 'Detect AI capabilities embedded within enterprise SaaS platforms.',
    icon: Eye,
  },
  {
    title: 'Shadow AI Detection',
    description: 'Surface unauthorized or unmanaged AI usage across the enterprise.',
    icon: Shield,
  },
  {
    title: 'MCP Server Discovery',
    description: 'Automatically discover connected MCP servers and integrations.',
    icon: Network,
  },
  {
    title: 'API Discovery',
    description: 'Identify AI-enabled APIs and service endpoints across environments.',
    icon: Code2,
  },
  {
    title: 'Knowledge Source Mapping',
    description: 'Map enterprise data sources used by AI systems.',
    icon: GitBranch,
  },
  {
    title: 'AI Relationship Graph',
    description: 'Visualize how applications, agents, models, APIs, and data are connected.',
    icon: Network,
  },
  {
    title: 'Data Lineage',
    description: 'Trace how enterprise data flows through AI systems for governance and compliance.',
    icon: TrendingUp,
  },
];

export const discoverBenefits: BenefitItem[] = [
  { text: 'Gain complete visibility into your AI landscape.' },
  { text: 'Reduce unmanaged AI risk.' },
  { text: 'Understand dependencies.' },
  { text: 'Support audits and compliance.' },
  { text: 'Accelerate governance.' },
  { text: 'Improve executive visibility into enterprise AI.' },
];

export const visualizationLayers = [
  {
    title: 'Business Applications',
    description: 'Your enterprise applications',
    icon: Eye,
  },
  {
    title: 'AI Agents',
    description: 'Deployed agents and workflows',
    icon: Bot,
  },
  {
    title: 'Models',
    description: 'Foundation models and LLMs',
    icon: Cpu,
  },
  {
    title: 'APIs',
    description: 'AI-enabled APIs and endpoints',
    icon: Code2,
  },
  {
    title: 'Knowledge Sources',
    description: 'Enterprise data and vectors',
    icon: Database,
  },
  {
    title: 'AgentsFlow Discover',
    description: 'Continuous AI inventory',
    icon: Eye,
  },
];
