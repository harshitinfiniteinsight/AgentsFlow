import EnforceHero from '../components/enforce-v2/EnforceHero';
import WhyEnforcementMattersSection from '../components/enforce-v2/WhyEnforcementMattersSection';
import PolicyTranslationSection from '../components/enforce-v2/PolicyTranslationSection';
import SupportedPlatformsSection from '../components/enforce-v2/SupportedPlatformsSection';
import RuntimeArchitectureSection from '../components/enforce-v2/RuntimeArchitectureSection';
import BenefitsSection from '../components/enforce-v2/BenefitsSection';
import FinalCTASection from '../components/enforce-v2/FinalCTASection';

export const metadata = {
  title: 'Enforce - AgentsFlow',
  description: 'Automatically translate governance policies into runtime controls across every AI platform.',
};

export default function EnforceV2Page() {
  return (
    <div className="min-h-screen bg-[#08101f]">
      <EnforceHero />
      <WhyEnforcementMattersSection />
      <PolicyTranslationSection />
      <SupportedPlatformsSection />
      <RuntimeArchitectureSection />
      <BenefitsSection />
      <FinalCTASection />
    </div>
  );
}
