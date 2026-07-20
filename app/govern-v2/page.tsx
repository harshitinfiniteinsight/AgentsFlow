import GovernHero from '../components/govern-v2/GovernHero';
import WhyGovernanceMattersSection from '../components/govern-v2/WhyGovernanceMattersSection';
import LifecycleSection from '../components/govern-v2/LifecycleSection';
import CapabilitiesGridSection from '../components/govern-v2/CapabilitiesGridSection';
import GovernanceWorkflowSection from '../components/govern-v2/GovernanceWorkflowSection';
import BenefitsSection from '../components/govern-v2/BenefitsSection';
import FinalCTASection from '../components/govern-v2/FinalCTASection';

export const metadata = {
  title: 'Govern - AgentsFlow',
  description: 'Manage the complete AI lifecycle with centralized governance, approvals, and compliance.',
};

export default function GovernV2Page() {
  return (
    <div className="min-h-screen bg-[#08101f]">
      <GovernHero />
      <WhyGovernanceMattersSection />
      <LifecycleSection />
      <CapabilitiesGridSection />
      <GovernanceWorkflowSection />
      <BenefitsSection />
      <FinalCTASection />
    </div>
  );
}
