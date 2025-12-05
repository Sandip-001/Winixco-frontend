import HRMSAdvantages from "./_components/Advantages";
import FAQSection from "./_components/FAQ";
import FinalCTA from "./_components/FinalCTA";
import HRMSHero from "./_components/Hero";
import HRAnalytics from "./_components/HRAnalytics";
import ModulesOverview from "./_components/Modules";
import ValueProposition from "./_components/Value";
import WorkflowProcess from "./_components/WorkFlow";

// Main ATS Page Component
const HRMSPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <HRMSHero />
      <ValueProposition />
      <ModulesOverview />
      <HRMSAdvantages />
      <WorkflowProcess />
      <HRAnalytics />
      <FAQSection />
      <FinalCTA />
    </div>
  );
};

export default HRMSPage;
