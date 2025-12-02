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

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <CompanySlider />
      <Features />
      <AboutUs />
      <Benefits />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  );
}
