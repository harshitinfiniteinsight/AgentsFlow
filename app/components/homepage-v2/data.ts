import {
  Activity,
  Bot,
  Briefcase,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Cloud,
  CloudCog,
  Cpu,
  Eye,
  FileCheck2,
  Fingerprint,
  Gauge,
  GitBranch,
  Globe,
  LayoutDashboard,
  Lock,
  Orbit,
  Radar,
  Scale,
  SearchCode,
  Shield,
  Sparkles,
  UserRoundCheck,
  WalletCards,
  Workflow,
  LucideIcon,
} from 'lucide-react';

export interface CapabilityCard {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  border: string;
  items: string[];
  cta: string;
  href: string;
}

export const trustedTeams = [
  'Enterprise Architecture',
  'Security',
  'Legal',
  'Compliance',
  'Risk',
  'Platform Engineering',
  'AI Innovation',
];

export const aiPlatforms = [
  'Microsoft Copilot',
  'Salesforce Agentforce',
  'ServiceNow AI',
  'SAP Joule',
  'Oracle AI',
  'AWS Bedrock',
  'Azure AI Foundry',
  'Google Vertex AI',
  'OpenAI',
  'Anthropic Claude',
  'Internal AI Applications',
  'Thousands of AI Agents',
];

export const problemQuestions = [
  'What AI is running?',
  'Where is enterprise data flowing?',
  'Who approved these AI systems?',
  'Which AI is high risk?',
  'Are runtime guardrails active?',
  'Are third-party AI capabilities compliant?',
];

export const controlPlanePoints = [
  {
    icon: SearchCode,
    title: 'Discovery across the stack',
    text: 'Continuously map AI assets across cloud, SaaS, gateways, and internal workflows.',
  },
  {
    icon: Scale,
    title: 'Lifecycle governance',
    text: 'Standardize intake, review, approval, risk, and compliance across every AI initiative.',
  },
  {
    icon: Fingerprint,
    title: 'Runtime policy translation',
    text: 'Convert business policy into controls enforced where prompts, models, and agents execute.',
  },
];

export const capabilityCards: CapabilityCard[] = [
  {
    title: 'Discover',
    description: 'Know every AI capability across your enterprise.',
    icon: Eye,
    color: 'text-cyan-300',
    gradient: 'from-cyan-500/20 via-cyan-400/10 to-blue-500/20',
    border: 'border-cyan-500/30',
    items: ['AI Applications', 'AI Agents', 'AI Models', 'MCP Servers', 'SaaS AI', 'Shadow AI', 'APIs', 'Data Sources'],
    cta: 'Learn More →',
    href: '/discover',
  },
  {
    title: 'Govern',
    description: 'Manage AI throughout its lifecycle.',
    icon: Shield,
    color: 'text-violet-300',
    gradient: 'from-violet-500/20 via-fuchsia-400/10 to-indigo-500/20',
    border: 'border-violet-500/30',
    items: ['Intake', 'Risk', 'Architecture', 'Security', 'Privacy', 'Compliance', 'Approvals', 'Evaluations'],
    cta: 'Learn More →',
    href: '/govern',
  },
  {
    title: 'Enforce',
    description: 'Translate business policies into runtime controls.',
    icon: Lock,
    color: 'text-rose-300',
    gradient: 'from-rose-500/20 via-red-400/10 to-pink-500/20',
    border: 'border-rose-500/30',
    items: ['Azure AI', 'AWS', 'Google', 'Portkey', 'Kong', 'LiteLLM'],
    cta: 'Learn More →',
    href: '/enforce',
  },
  {
    title: 'Monitor',
    description: 'Continuously monitor AI in production.',
    icon: Activity,
    color: 'text-emerald-300',
    gradient: 'from-emerald-500/20 via-green-400/10 to-cyan-500/20',
    border: 'border-emerald-500/30',
    items: ['Costs', 'Usage', 'Drift', 'Hallucinations', 'Policy Violations', 'Human Reviews', 'Runtime Health'],
    cta: 'Learn More →',
    href: '/monitor',
  },
];

export const enterpriseConnectors = [
  {
    icon: Building2,
    title: 'Business applications',
    text: 'ERP, CRM, ITSM, collaboration, and line-of-business workflows.',
  },
  {
    icon: Workflow,
    title: 'AI gateways',
    text: 'Centralized policy enforcement across routing, orchestration, and inference layers.',
  },
  {
    icon: Bot,
    title: 'Models and agents',
    text: 'Third-party models, copilots, MCP servers, and internally built agent systems.',
  },
  {
    icon: CloudCog,
    title: 'Cloud and data',
    text: 'Multi-cloud infrastructure, APIs, vector stores, and governed enterprise data access.',
  },
];

export const enterprisePillars = [
  { icon: Globe, title: 'Multi-cloud reality', text: 'AI spans Azure, AWS, Google Cloud, and private infrastructure.' },
  { icon: Briefcase, title: 'SaaS everywhere', text: 'Copilots and embedded AI arrive through business applications your teams already use.' },
  { icon: GitBranch, title: 'Runtime complexity', text: 'Prompts, agents, evaluators, models, and gateways each introduce new control points.' },
  { icon: FileCheck2, title: 'Regulatory pressure', text: 'Security, privacy, and compliance expectations continue to rise as AI expands.' },
];

export const vendorNeutralPoints = [
  {
    title: 'Cloud providers optimize for their ecosystems',
    text: 'Each vendor gives strong tooling inside its own stack, but enterprise AI rarely lives in only one stack.',
    icon: Cloud,
  },
  {
    title: 'AgentsFlow governs across every environment',
    text: 'Apply consistent discovery, governance, enforcement, and monitoring without introducing platform lock-in.',
    icon: Orbit,
  },
];

export const useCases = [
  { title: 'AI Inventory', icon: LayoutDashboard, text: 'Create a complete inventory of AI systems, agents, models, and business owners.' },
  { title: 'Third-Party SaaS Governance', icon: Briefcase, text: 'Assess and govern embedded AI inside SaaS platforms before business rollout.' },
  { title: 'Shadow AI Discovery', icon: Radar, text: 'Detect unsanctioned AI usage across teams before risk accumulates.' },
  { title: 'AI Lifecycle Management', icon: ClipboardCheck, text: 'Standardize intake, review, approval, and retirement processes for AI initiatives.' },
  { title: 'Runtime Policy Enforcement', icon: Lock, text: 'Enforce data, privacy, and security rules directly in runtime workflows.' },
  { title: 'Executive AI Dashboards', icon: Gauge, text: 'Give leadership a unified view of AI inventory, risk, spend, and adoption.' },
  { title: 'Compliance Automation', icon: FileCheck2, text: 'Generate evidence, audit trails, and reporting aligned to enterprise controls.' },
  { title: 'AI Cost Governance', icon: WalletCards, text: 'Track spend, usage efficiency, and business value across the AI portfolio.' },
];

export const dashboardStats = [
  { label: 'AI Inventory', value: '1,284', trend: '+18 this week' },
  { label: 'Active Agents', value: '436', trend: '+12 today' },
  { label: 'Risk Score', value: '72/100', trend: '-6 improving' },
  { label: 'Compliance Score', value: '98%', trend: 'Across frameworks' },
  { label: 'Token Usage', value: '94.2M', trend: 'Across 14 vendors' },
  { label: 'Runtime Violations', value: '23', trend: 'Auto-contained' },
  { label: 'Human Reviews', value: '41', trend: 'Pending triage' },
  { label: 'Business KPIs', value: '12', trend: 'Tracked outcomes' },
  { label: 'Customer Outcomes', value: '$3.2M', trend: 'Value unlocked' },
];

export const benefits = [
  'Reduce AI deployment risk',
  'Accelerate AI adoption',
  'Maintain regulatory compliance',
  'Increase executive visibility',
  'Reduce governance overhead',
  'Enable vendor flexibility',
];

export const benefitIcon = CheckCircle2;
export const executiveSignals = [
  { label: 'Policies pushed', value: '2,918', icon: UserRoundCheck },
  { label: 'Controls active', value: '147', icon: Fingerprint },
  { label: 'Runtime coverage', value: '99.4%', icon: Sparkles },
  { label: 'Models monitored', value: '62', icon: Cpu },
];
