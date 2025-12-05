import CRMAdvantages from "./_components/Advantages";
import FAQSection from "./_components/FAQ";
import FinalCTA from "./_components/FinalCTA";
import CRMHero from "./_components/Hero";
import CRMAnalytics from "./_components/CRMAnalytics";
import ModulesOverview from "./_components/Modules";
import ValueProposition from "./_components/Value";
import WorkflowProcess from "./_components/WorkFlow";

// Main ATS Page Component
const CRMPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <CRMHero />
      <ValueProposition />
      <ModulesOverview />
      <CRMAdvantages />
      <WorkflowProcess />
      <CRMAnalytics />
      <FAQSection />
      <FinalCTA />
    </div>
  );
};

export default CRMPage;
