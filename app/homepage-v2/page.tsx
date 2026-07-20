import ArchitectureDiagramSection from '../components/homepage-v2/ArchitectureDiagramSection';
import BenefitsSection from '../components/homepage-v2/BenefitsSection';
import BuiltForEnterpriseSection from '../components/homepage-v2/BuiltForEnterpriseSection';
import CapabilitiesGridSection from '../components/homepage-v2/CapabilitiesGridSection';
import AiMeshRoadmapSection from '../components/homepage-v2/AiMeshRoadmapSection';
import ExecutiveDashboardSection from '../components/homepage-v2/ExecutiveDashboardSection';
import FinalCTASection from '../components/homepage-v2/FinalCTASection';
import HeroSection from '../components/homepage-v2/HeroSection';
import MeetAgentsFlowSection from '../components/homepage-v2/MeetAgentsFlowSection';
import ProblemSection from '../components/homepage-v2/ProblemSection';
import TrustedBySection from '../components/homepage-v2/TrustedBySection';
import UseCasesSection from '../components/homepage-v2/UseCasesSection';
import VendorNeutralSection from '../components/homepage-v2/VendorNeutralSection';

export default function HomepageV2() {
  return (
    <div className="min-h-screen bg-[#08101f] pt-16">
      <HeroSection />
      <TrustedBySection />
      <ProblemSection />
      <MeetAgentsFlowSection />
      <CapabilitiesGridSection />
      <AiMeshRoadmapSection />
      <ArchitectureDiagramSection />
      <BuiltForEnterpriseSection />
      <VendorNeutralSection />
      <UseCasesSection />
      <ExecutiveDashboardSection />
      <BenefitsSection />
      <FinalCTASection />
    </div>
  );
}
