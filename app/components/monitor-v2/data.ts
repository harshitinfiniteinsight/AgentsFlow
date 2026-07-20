import {
  Activity,
  AlertTriangle,
  BarChart3,
  Brain,
  CheckCircle2,
  Cloud,
  FileText,
  Gauge,
  HeartPulse,
  LayoutDashboard,
  LineChart,
  Lock,
  Network,
  Radar,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  LucideIcon,
} from 'lucide-react';

export interface CapabilityCard {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface MetricCard {
  label: string;
  value: string;
  delta?: string;
}

export interface BenefitItem {
  text: string;
}

export const monitoringCapabilities: CapabilityCard[] = [
  { title: 'Runtime Observability', description: 'Monitor AI requests, latency, throughput, health, and runtime activity.', icon: Activity },
  { title: 'Cost Analytics', description: 'Track token usage, model costs, cloud spending, and optimization opportunities.', icon: BarChart3 },
  { title: 'Model Drift', description: 'Detect changing model behavior and degradation over time.', icon: Brain },
  { title: 'Hallucination Detection', description: 'Identify unreliable or inaccurate AI responses using configurable evaluation rules.', icon: AlertTriangle },
  { title: 'Policy Violations', description: 'Continuously detect runtime violations against governance policies.', icon: Shield },
  { title: 'Human-in-the-Loop', description: 'Capture reviews, approvals, escalations, and intervention workflows.', icon: Users },
  { title: 'Security Events', description: 'Monitor prompt injection attempts, sensitive data exposure, and runtime threats.', icon: Lock },
  { title: 'Compliance Evidence', description: 'Automatically collect logs, evaluations, approvals, and audit artifacts.', icon: FileText },
  { title: 'Executive Reporting', description: 'Provide leadership dashboards with AI adoption, risk, and outcome metrics.', icon: LayoutDashboard },
];

export const dashboardMetrics: MetricCard[] = [
  { label: 'Runtime Health', value: '98.7%', delta: '+0.6%' },
  { label: 'Active AI Agents', value: '436', delta: '+12' },
  { label: 'Risk Score', value: '72/100', delta: '-4' },
  { label: 'Compliance Score', value: '99.1%', delta: '+0.3%' },
  { label: 'Policy Violations', value: '23', delta: '-8' },
  { label: 'Model Drift', value: '1.8%', delta: '-0.4%' },
  { label: 'Hallucination Alerts', value: '7', delta: '-3' },
  { label: 'Token Usage', value: '94.2M', delta: '+8%' },
  { label: 'Cloud Costs', value: '$312K', delta: '-5%' },
  { label: 'Human Reviews', value: '41', delta: '+9' },
  { label: 'Business KPIs', value: '12', delta: '+2' },
  { label: 'Customer Outcomes', value: '$3.2M', delta: '+18%' },
];

export const architectureLayers = [
  { title: 'Business Applications', description: 'Apps and workflows invoking AI' },
  { title: 'AI Agents', description: 'Autonomous and assistive agents' },
  { title: 'AI Gateways', description: 'Traffic control and routing layer' },
  { title: 'Foundation Models', description: 'Models and hosted endpoints' },
  { title: 'Telemetry & Events', description: 'Logs, traces, metrics, and reviews' },
  { title: 'AgentsFlow Monitor', description: 'Continuous observability platform', highlight: true },
  { title: 'Executive Dashboards', description: 'Leadership and operator views' },
  { title: 'Compliance Evidence', description: 'Audit-ready records and artifacts' },
];

export const benefits: BenefitItem[] = [
  { text: 'Monitor every AI interaction.' },
  { text: 'Detect operational risks early.' },
  { text: 'Reduce AI downtime.' },
  { text: 'Maintain continuous compliance.' },
  { text: 'Improve model quality.' },
  { text: 'Increase executive visibility.' },
  { text: 'Support regulatory audits.' },
  { text: 'Optimize AI costs.' },
  { text: 'Drive better business outcomes.' },
];
