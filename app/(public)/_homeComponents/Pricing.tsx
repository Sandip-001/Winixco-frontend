"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Zap, Shield, Star, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

/* ------------------ DATA ------------------ */

const features = [
  { text: "Unlimited Jobs & Candidates", highlight: true },
  { text: "FREE HRMS & CRM (No extra cost)", highlight: true },
  { text: "AI Resume Parsing" },
  { text: "AI Resume Formatting & Standardization" },
  { text: "AI JD Generator" },
  { text: "AI Based Candidate Scoring & Ranking" },
  { text: "AI Technical Assessments" },
  { text: "AI Interview Insights & Notes" },
  { text: "Geo-Location Enabled HRMS" },
  { text: "Live Attendance with Real-Time Location" },
  { text: "Recruiter & Team Performance Analytics" },
  { text: "Client & Vendor CRM (Included)" },
  { text: "PDPA, ISO 27001 & SOC 2 Ready" },
];

const comparisonData = [
  {
    feature: "AI Resume Parsing",
    winixco: "✔",
    zoho: "✔",
    freshteam: "✖",
    darwinbox: "✔",
  },
  {
    feature: "AI Candidate Scoring",
    winixco: "✔",
    zoho: "✖",
    freshteam: "✖",
    darwinbox: "✔",
  },
  {
    feature: "AI JD Generator",
    winixco: "✔",
    zoho: "✖",
    freshteam: "✖",
    darwinbox: "✔",
  },
  {
    feature: "AI Technical Assessment",
    winixco: "✔",
    zoho: "✖",
    freshteam: "✖",
    darwinbox: "✔",
  },
  {
    feature: "FREE HRMS",
    winixco: "✔",
    zoho: "✖",
    freshteam: "✖",
    darwinbox: "✔",
  },
  {
    feature: "FREE CRM",
    winixco: "✔",
    zoho: "✖",
    freshteam: "✖",
    darwinbox: "✖",
  },
  {
    feature: "Geo-Location HRMS",
    winixco: "✔",
    zoho: "✖",
    freshteam: "✖",
    darwinbox: "✔",
  },
  {
    feature: "Starting Price",
    winixco: "₹1,499",
    zoho: "₹2,500+",
    freshteam: "₹2,000+",
    darwinbox: "Enterprise",
  },
];

/* ------------------ HERO ------------------ */

const PricingHero = () => (
  <section className="py-20 bg-[#2563eb] relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <Badge className="mb-6 px-6 py-3 bg-white text-[#2563eb] font-bold border-0 text-base">
        <Star className="w-4 h-4 mr-2 inline fill-white" />
        SPECIAL LAUNCH OFFER
      </Badge>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
        Hire smarter. Track smarter, Manage everything from one platform.
      </h1>

      <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto">
        One powerful ATS with FREE HRMS & CRM{" "}
      </p>
    </div>
  </section>
);

/* ------------------ PRICING CARD ------------------ */

const MainPricingCard = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <Card className="rounded-3xl shadow-xl border border-[#c3dbe0] overflow-hidden">
          <CardContent className="p-10 text-center">
            <Badge className="mb-4 px-6 py-2 bg-blue-50 text-[#2563eb] font-extrabold">
              ALL-IN-ONE PLAN
            </Badge>

            <h2 className="text-4xl font-bold text-[#0d0d0d] mb-6">
              Winixco ATS
            </h2>

            {/* Toggle */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-lg font-semibold ${
                  billingCycle === "monthly"
                    ? "bg-[#2563eb] text-white"
                    : "bg-gray-100 text-[#7c7a7c]"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded-lg font-semibold ${
                  billingCycle === "yearly"
                    ? "bg-[#2563eb] text-white"
                    : "bg-gray-100 text-[#7c7a7c]"
                }`}
              >
                Yearly
              </button>
            </div>

            {/* Price */}
            {billingCycle === "monthly" ? (
              <>
                <div className="text-6xl font-extrabold text-[#0d0d0d]">
                  ₹1,499
                </div>
                <p className="text-[#7c7a7c]">per user / month</p>
              </>
            ) : (
              <>
                <div className="text-6xl font-extrabold text-[#0d0d0d]">
                  ₹14,999
                </div>
                <p className="text-[#7c7a7c]">per user / year</p>
              </>
            )}

            {/* CTA */}
            <Button className="mt-8 w-full h-14 text-lg font-bold rounded-xl bg-[#2563eb] text-white">
              <Zap className="w-5 h-5 mr-2" />
              Start 30-Day Free Trial
            </Button>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-4 mt-10 text-left">
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`flex gap-3 p-3 rounded-lg ${
                    f.highlight ? "bg-blue-100" : ""
                  }`}
                >
                  <Check className="text-[#2563eb]" />
                  <span className="text-[#0d0d0d]">{f.text}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

/* ------------------ COMPARISON ------------------ */

const ComparisonTable = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-[#0d0d0d] mb-8">
        Compare with Others
      </h2>

      <div className="overflow-x-auto rounded-2xl shadow border border-[#c3dbe0]">
        <table className="w-full">
          <thead className="bg-[#2563eb] text-white">
            <tr>
              <th className="px-6 py-4 text-left">Feature</th>
              <th className="px-6 py-4 text-center">Winixco</th>
              <th className="px-6 py-4 text-center">Zoho</th>
              <th className="px-6 py-4 text-center">Freshteam</th>
              <th className="px-6 py-4 text-center">Darwinbox</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, i) => (
              <tr key={i} className={i % 2 ? "bg-[#f7fbfc]" : "bg-white"}>
                <td className="px-6 py-4 font-medium text-[#0d0d0d]">
                  {row.feature}
                </td>
                <td className="px-6 py-4 text-center text-[#13afdc]">
                  {row.winixco}
                </td>
                <td className="px-6 py-4 text-center text-[#7c7a7c]">
                  {row.zoho}
                </td>
                <td className="px-6 py-4 text-center text-[#7c7a7c]">
                  {row.freshteam}
                </td>
                <td className="px-6 py-4 text-center text-[#7c7a7c]">
                  {row.darwinbox}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

/* ------------------ CTA ------------------ */

const CtaSection = () => {
  const router = useRouter();

  return (
    <section  className="py-20 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-[#0d0d0d] mb-6">
          Need Bulk Pricing or a Demo?
        </h2>
        <p className="text-xl text-black mb-8">
          Talk to our sales team for custom enterprise plans
        </p>

        <Button
          className="bg-[#2563eb] text-white px-10 py-6 text-lg"
          onClick={() => router.push("/contact")}
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
};

/* ------------------ MAIN ------------------ */

export default function PricingSection() {
  return (
    <div className="min-h-screen bg-white">
      <PricingHero />
      <MainPricingCard />
      <ComparisonTable />
      <CtaSection />
    </div>
  );
}
