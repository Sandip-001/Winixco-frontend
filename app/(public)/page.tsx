"use client";
import React from "react";
import Header from "./_homeComponents/Header";
import Hero from "./_homeComponents/Hero";
import CompanySlider from "./_homeComponents/CompanySlider";
import Features from "./_homeComponents/Features";
import Benefits from "./_homeComponents/Benefits";
import Testimonials from "./_homeComponents/Testimonials";
import Pricing from "./_homeComponents/Pricing";
import FAQ from "./_homeComponents/FAQ";
import CTA from "./_homeComponents/CTA";
import AboutUs from "./_homeComponents/About";
import ModulesSection from "./_homeComponents/Modules";
import HowItWorks from "./_homeComponents/HowItWorks";
import HeroSection from "./_homeComponents/HeroSection";
import StatsSection from "./_homeComponents/StatsSection";
import TestimonialsSection from "./_homeComponents/TestiMonialSection";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CompanySlider />
      <Features />
      <StatsSection />
      <AboutUs />
      <ModulesSection />
      <TestimonialsSection />
      <Benefits />
      
      <Pricing />
      <HowItWorks />
      <FAQ />
      <CTA />
    </div>
  );
}
