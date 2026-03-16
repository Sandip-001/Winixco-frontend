'use client'
import ModulesSection from "../_homeComponents/Modules";
import ServiceCTA from "./_components/ServiceCTA";
import ServiceHero from "./_components/ServiceHero";
import ServicesList from "./_components/ServicesList";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHero />
      <ModulesSection />
      <ServicesList />
      <ServiceCTA />
    </div>
  );
}