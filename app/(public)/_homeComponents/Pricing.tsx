"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  Users,
  ChevronDown,
  Star,
  Clock,
} from "lucide-react";
import { useRouter } from "next/navigation";

// Types
interface Feature {
  text: string;
  highlight?: boolean;
}

interface ComparisonRow {
  feature: string;
  winixco: string;
  zoho: string;
  freshteam: string;
  darwinbox: string;
}

interface BenefitCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

// Data
const features: Feature[] = [
  { text: "Unlimited Jobs & Candidates", highlight: true },
  { text: "FREE HRMS & CRM (No extra cost)", highlight: true },
  { text: "AI Resume Parsing", highlight: false },
  { text: "AI Resume Formatting & Standardization", highlight: false },
  { text: "AI JD Generator", highlight: false },
  { text: "AI Based Candidate Scoring & Ranking", highlight: false },
  { text: "AI Technical Assessments", highlight: false },
  { text: "AI Interview Insights & Notes", highlight: false },
  { text: "Geo‑Location Enabled HRMS", highlight: false },
  { text: "Live Attendance with Real‑Time Location", highlight: false },
  { text: "Recruiter & Team Performance Analytics", highlight: false },
  { text: "Client & Vendor CRM (Included)", highlight: false },
  { text: "PDPA, ISO 27001 & SOC 2 Ready", highlight: false },
];

const comparisonData: ComparisonRow[] = [
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
    feature: "Geo‑Location HRMS",
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

const benefitCards: BenefitCard[] = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "All-In-One Platform",
    description:
      "Get ATS, HRMS, and CRM in one unified platform. No need for multiple subscriptions or integrations.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "AI-Powered Automation",
    description:
      "All AI features bundled in — no add-ons, no hidden limits. Automate screening, scoring, and more.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security",
    description:
      "PDPA, ISO 27001 & SOC 2 ready. Your candidate data is protected with enterprise-grade security.",
    color: "from-orange-500 to-red-500",
  },
];

// Hero Section
const PricingHero: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-base">
            <Star className="w-4 h-4 mr-2 inline fill-white" />
            SPECIAL LAUNCH OFFER
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Hire smarter. Track smarter.{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Manage everything
            </span>{" "}
            from one platform.
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
            One powerful ATS with{" "}
            <span className="font-bold text-blue-600">FREE HRMS & CRM</span>, AI
            automation and real-time geo‑location tracking
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Main Pricing Card
const MainPricingCard: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="max-w-4xl mx-auto rounded-3xl shadow-2xl border-2 border-blue-100 overflow-hidden relative">
            {/* Popular Badge */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 text-sm font-bold rounded-bl-2xl">
              <Sparkles className="w-4 h-4 inline mr-1" />
              MOST POPULAR
            </div>

            <CardContent className="p-8 md:p-12">
              {/* Header */}
              <div className="text-center mb-8">
                <Badge className="mb-4 px-6 py-2 bg-green-100 text-green-700 border-green-200 text-base">
                  ALL‑IN‑ONE PLAN • HRMS & CRM FREE
                </Badge>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Winixco ATS – One Plan
                </h2>

                {/* Billing Toggle */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <button
                    onClick={() => setBillingCycle("monthly")}
                    className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                      billingCycle === "monthly"
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle("yearly")}
                    className={`px-6 py-2 rounded-lg font-semibold transition-all relative ${
                      billingCycle === "yearly"
                        ? "bg-blue-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    Yearly
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      Save 17%
                    </span>
                  </button>
                </div>

                {/* Pricing Display */}
                {billingCycle === "monthly" ? (
                  <div>
                    <div className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-2">
                      ₹1,499
                    </div>
                    <p className="text-lg text-gray-600">per user / month</p>
                    <p className="mt-3 text-sm text-blue-600 font-semibold">
                      <Clock className="w-4 h-4 inline mr-1" />
                      Just ₹50/day per recruiter
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-2">
                      ₹14,999
                    </div>
                    <p className="text-lg text-gray-600">per user / year</p>
                    <p className="mt-3 text-lg text-green-600 font-bold">
                      Save ₹3,000 — Get 2 months FREE! 🎉
                    </p>
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                className="w-full h-16 text-xl font-bold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl mb-4"
              >
                <Zap className="w-6 h-6 mr-2" />
                Start 30‑Day Free Trial
              </Button>

              <p className="text-center text-sm text-gray-500 mb-8">
                No credit card required • Cancel anytime • Full access during
                trial
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((item: Feature, index: number) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.02 }}
                    className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
                      item.highlight ? "bg-blue-50" : ""
                    }`}
                  >
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span
                      className={`text-sm md:text-base ${
                        item.highlight
                          ? "text-blue-700 font-semibold"
                          : "text-gray-700"
                      }`}
                    >
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

// Benefits Section
const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
        >
          Why Choose Winixco?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefitCards.map((card: BenefitCard, index: number) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white mb-6`}
                  >
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Comparison Table
const ComparisonTable: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Compare with Others
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            See why Winixco offers the best value for your investment
          </p>

          <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-200">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Winixco
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Zoho Recruit
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Freshteam
                  </th>
                  <th className="px-6 py-4 text-center font-semibold">
                    Darwinbox
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row: ComparisonRow, index: number) => (
                  <tr
                    key={row.feature}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`${
                          row.winixco === "✔"
                            ? "text-green-600 text-2xl"
                            : row.winixco === "✖"
                            ? "text-red-500 text-2xl"
                            : "font-semibold text-blue-600"
                        }`}
                      >
                        {row.winixco}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`${
                          row.zoho === "✔"
                            ? "text-green-600 text-2xl"
                            : row.zoho === "✖"
                            ? "text-red-500 text-2xl"
                            : "text-gray-700"
                        }`}
                      >
                        {row.zoho}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`${
                          row.freshteam === "✔"
                            ? "text-green-600 text-2xl"
                            : row.freshteam === "✖"
                            ? "text-red-500 text-2xl"
                            : "text-gray-700"
                        }`}
                      >
                        {row.freshteam}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`${
                          row.darwinbox === "✔"
                            ? "text-green-600 text-2xl"
                            : row.darwinbox === "✖"
                            ? "text-red-500 text-2xl"
                            : "text-gray-700"
                        }`}
                      >
                        {row.darwinbox}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// CTA Section
const CtaSection: React.FC = () => {
  const router = useRouter();
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Need Bulk Pricing or a Demo?
          </h2>
          <p className="text-xl mb-10">
            Talk to our sales team for custom enterprise plans and volume
            discounts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white border text-blue-700 hover:bg-gray-100 font-semibold px-10 py-7 text-lg shadow-xl"
              onClick={()=>router.push("/contact")}
            >
              Contact Us
            </Button>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Component
export default function PricingSection() {
  return (
    <div className="min-h-screen bg-white">
      <PricingHero />
      <MainPricingCard />
      <BenefitsSection />
      <ComparisonTable />
      <CtaSection />
    </div>
  );
}