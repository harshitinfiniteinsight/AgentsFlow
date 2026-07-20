import {
  FileCheck2,
  Briefcase,
  Cpu,
  AlertTriangle,
  Lock,
  Shield,
  CheckSquare,
  ThumbsUp,
  Zap,
  Archive,
  ClipboardList,
  TrendingUp,
  CheckCircle2,
  LucideIcon,
} from 'lucide-react';

export interface CapabilityCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface LifecycleStage {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BenefitItem {
  text: string;
}

export const lifecycleStages: LifecycleStage[] = [
  {
    title: 'Intake',
    description: 'Register new AI initiatives',
    icon: FileCheck2,
  },
  {
    title: 'Business Case',
    description: 'Document objectives and value',
    icon: Briefcase,
  },
  {
    title: 'Architecture Review',
    description: 'Evaluate technical design',
    icon: Cpu,
  },
  {
    title: 'Risk Assessment',
    description: 'Assess operational risks',
    icon: AlertTriangle,
  },
  {
    title: 'Privacy Review',
    description: 'Validate data handling',
    icon: Lock,
  },
  {
    title: 'Security Review',
    description: 'Ensure security controls',
    icon: Shield,
  },
  {
    title: 'Compliance Mapping',
    description: 'Map to regulations',
    icon: CheckSquare,
  },
  {
    title: 'Human Approval',
    description: 'Structured sign-offs',
    icon: ThumbsUp,
  },
  {
    title: 'AI Evaluation',
    description: 'Assess model quality',
    icon: Zap,
  },
  {
    title: 'Deployment',
    description: 'Release to production',
    icon: TrendingUp,
  },
  {
    title: 'Monitoring',
    description: 'Continuous oversight',
    icon: Shield,
  },
  {
    title: 'Retirement',
    description: 'Decommission safely',
    icon: Archive,
  },
];

export const governanceCapabilities: CapabilityCard[] = [
  {
    title: 'Intake',
    description: 'Capture and register new AI initiatives through a standardized intake process.',
    icon: FileCheck2,
  },
  {
    title: 'Business Case',
    description: 'Document objectives, expected value, stakeholders, and business justification.',
    icon: Briefcase,
  },
  {
    title: 'Architecture Review',
    description: 'Evaluate technical architecture, integrations, scalability, and enterprise standards.',
    icon: Cpu,
  },
  {
    title: 'Risk Assessment',
    description: 'Assess operational, legal, ethical, and business risks before deployment.',
    icon: AlertTriangle,
  },
  {
    title: 'Privacy Review',
    description: 'Validate handling of sensitive and regulated data.',
    icon: Lock,
  },
  {
    title: 'Security Review',
    description: 'Ensure AI solutions meet enterprise security requirements and controls.',
    icon: Shield,
  },
  {
    title: 'Compliance Mapping',
    description: 'Map initiatives to applicable regulatory frameworks and internal policies.',
    icon: CheckSquare,
  },
  {
    title: 'Human Approval',
    description: 'Support structured approval workflows with auditable decision records.',
    icon: ThumbsUp,
  },
  {
    title: 'AI Evaluation',
    description: 'Evaluate model quality, safety, bias, performance, and readiness before production.',
    icon: Zap,
  },
  {
    title: 'Evidence Management',
    description: 'Maintain centralized documentation, assessments, approvals, and audit evidence throughout the AI lifecycle.',
    icon: ClipboardList,
  },
];

export const governanceBenefits: BenefitItem[] = [
  { text: 'Standardize AI governance across the enterprise.' },
  { text: 'Accelerate approvals through repeatable workflows.' },
  { text: 'Reduce operational and regulatory risk.' },
  { text: 'Improve collaboration between business, security, legal, and compliance teams.' },
  { text: 'Maintain complete audit evidence.' },
  { text: 'Increase executive visibility into AI initiatives.' },
  { text: 'Enable scalable AI adoption.' },
];

export const workflowStages = [
  {
    title: 'Business Request',
    description: 'New AI initiative',
  },
  {
    title: 'AgentsFlow Govern',
    description: 'Central governance hub',
  },
  {
    title: 'Risk & Architecture',
    description: 'Technical review',
  },
  {
    title: 'Compliance & Security',
    description: 'Regulatory check',
  },
  {
    title: 'Approvals',
    description: 'Human sign-off',
  },
  {
    title: 'Production Ready',
    description: 'Deploy with confidence',
  },
];
