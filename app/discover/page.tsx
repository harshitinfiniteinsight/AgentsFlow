import DiscoverHero from '../components/discover/DiscoverHero';
import WhyDiscoveryMattersSection from '../components/discover/WhyDiscoveryMattersSection';
import CapabilitiesGridSection from '../components/discover/CapabilitiesGridSection';
import DiscoveryVisualizationSection from '../components/discover/DiscoveryVisualizationSection';
import BenefitsSection from '../components/discover/BenefitsSection';
import FinalCTASection from '../components/discover/FinalCTASection';

export const metadata = {
  title: 'Discover - AgentsFlow',
  description: 'Continuously discover every AI asset across your enterprise with AgentsFlow Discover.',
};

export default function DiscoverPage() {
  return (
    <div className="min-h-screen bg-[#08101f]">
      <DiscoverHero />
      <WhyDiscoveryMattersSection />
      <CapabilitiesGridSection />
      <DiscoveryVisualizationSection />
      <BenefitsSection />
      <FinalCTASection />
    </div>
  );
}
