import { Activity } from 'lucide-react';
import PillarPage from '../components/PillarPage';

export default function MonitorPage() {
  return (
    <PillarPage
      icon={Activity}
      label="Monitor"
      tagline="Full Visibility. Zero Surprises."
      description="Governance is not a one-time event. AgentsFlow's Monitor module gives you a live, continuous view of every AI agent's performance, cost, compliance status, and risk - so you are never caught off guard."
      gradient="from-green-500 to-emerald-500"
      bgGlow="bg-green-500"
      borderColor="border-green-500/30"
      textColor="text-green-400"
      features={[
        { title: 'Live Governance Dashboard', desc: 'A single screen showing costs, compliance score, risk score, and adoption metrics - updated in real time across all AI agents and applications.' },
        { title: 'Cost Tracking & Alerts', desc: 'Track AI spending per agent, per team, and per department. Get automatic alerts when spending exceeds your defined thresholds.' },
        { title: 'Compliance Score Monitoring', desc: 'Your compliance score is calculated continuously - not just at audit time. Know your posture every day, not once a year.' },
        { title: 'Performance Metrics', desc: 'Track latency, error rates, and uptime for every AI agent. Identify performance degradation before it impacts your users or customers.' },
        { title: 'Risk Score Dashboard', desc: 'Each AI agent carries a dynamic risk score based on data access, usage patterns, and compliance status. Watch risks trend up or down over time.' },
        { title: 'Automated Reporting', desc: 'Generate compliance reports, audit summaries, and executive dashboards with one click - ready for your board, regulators, or auditors.' },
      ]}
      stats={[
        { value: '340ms', label: 'average monitored latency' },
        { value: '32%', label: 'average reduction in AI spend' },
        { value: '78%', label: 'reduction in deployment incidents' },
        { value: '24/7', label: 'continuous monitoring - no gaps' },
      ]}
      howItWorks={[
        'AgentsFlow collects telemetry data from every connected AI agent and application - passively, with no performance impact on your systems.',
        'All data is aggregated into a single real-time dashboard - showing costs, compliance, risk, performance, and adoption in one place.',
        'Custom alert thresholds are configured during onboarding. You receive instant notifications via email, Slack, or your ITSM tool when thresholds are breached.',
        'Monthly and quarterly reports are generated automatically - giving your leadership team, board, and regulators a clean view of AI governance health.',
      ]}
      nextPillar={{ label: 'Back to Home', href: '/' }}
    />
  );
}
