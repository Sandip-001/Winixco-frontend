import BenefitsSection from "./_components/Benefits";
import CtaSection from "./_components/CTA";
import FaqSection from "./_components/FAQ";
import FeaturesSection from "./_components/Features";
import HeroSection from "./_components/Hero";
import OverviewSection from "./_components/Overview";
import WorkflowSection from "./_components/WorkFlow";


// Main ATS Page Component
const ATSPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <OverviewSection />
      <BenefitsSection />
      <FeaturesSection />
      <WorkflowSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
};

export default ATSPage;