import BenefitsSection from '../components/monitor-v2/BenefitsSection';
import CTASection from '../components/monitor-v2/CTASection';
import MonitoringArchitecture from '../components/monitor-v2/MonitoringArchitecture';
import MonitoringCapabilities from '../components/monitor-v2/MonitoringCapabilities';
import MonitoringDashboard from '../components/monitor-v2/MonitoringDashboard';
import MonitorHero from '../components/monitor-v2/MonitorHero';
import WhyMonitoringSection from '../components/monitor-v2/WhyMonitoringSection';

export const metadata = {
  title: 'Monitor - AgentsFlow',
  description: 'Continuously observe AI behavior, runtime performance, compliance, and business outcomes.',
};

export default function MonitorV2Page() {
  return (
    <div className="min-h-screen bg-[#08101f]">
      <MonitorHero />
      <WhyMonitoringSection />
      <MonitoringCapabilities />
      <MonitoringDashboard />
      <MonitoringArchitecture />
      <BenefitsSection />
      <CTASection />
    </div>
  );
}
