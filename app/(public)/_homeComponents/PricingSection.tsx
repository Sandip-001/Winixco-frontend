"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default function PricingSection() {
  const features = [
    "Unlimited Jobs & Candidates",
    "FREE HRMS & CRM",
    "AI Resume Parsing",
    "AI JD Generator",
    "AI Candidate Scoring",
    "AI Technical Assessments",
    "Geo-Location Enabled HRMS",
    "Live Attendance with Location",
    "Recruiter Performance Analytics",
    "Client & Vendor CRM",
  ];

  return (
    <div id="pricing" className="w-full bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          Hire smarter. Track smarter. Manage everything from one platform.
        </h1>

        <p className="mt-4 text-base md:text-lg text-slate-600">
          One powerful ATS with{" "}
          <span className="font-semibold text-black">
            FREE HRMS & CRM
          </span>{" "}
          , AI automation and real-time geo-location tracking
        </p>

        {/* Pricing Card */}
        <Card className="mt-12 max-w-xl mx-auto rounded-3xl shadow-xl border-0">
          <CardContent className="p-8 md:p-10">
            
            <Badge className="bg-green-100 text-green-700 mb-4">
              ALL-IN-ONE PLAN • HRMS & CRM FREE
            </Badge>

            <h2 className="text-2xl font-bold">
              Winixco ATS – One Plan
            </h2>

            <div className="mt-6">
              <div className="text-5xl font-extrabold">₹1,999</div>
              <div className="text-sm text-slate-500">
                per user / month
              </div>
              <div className="text-green-600 font-semibold mt-2">
                ₹19,990 per user / year (2 months FREE)
              </div>
            </div>

            <Button className="w-full mt-6 text-lg py-6 rounded-xl">
              Start 30-Day Free Trial
            </Button>

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
              {features.map((item, index) => (
                <div key={index} className="flex items-start gap-2 text-sm text-slate-700">
                  <Check className="text-green-600 w-4 h-4 mt-1" />
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sections */}
        <div className="mt-16 space-y-12 text-left">
          
          {/* Simple Pricing */}
          <div>
            <h2 className="text-2xl font-bold">Simple Per-Seat Pricing</h2>
            <p className="text-slate-600 mt-2">
              Each recruiter or HR team member requires one seat. All seats include full access to ATS, HRMS, CRM and AI features.
            </p>

            <ul className="mt-4 list-disc list-inside space-y-1 text-slate-700">
              <li>1 Seat = 1 User</li>
              <li>No separate charges</li>
              <li>All AI features included</li>
              <li>Scale anytime</li>
            </ul>
          </div>

          {/* Bulk Pricing */}
          <div>
            <h2 className="text-2xl font-bold">Bulk Team Pricing</h2>

            <div className="grid md:grid-cols-3 gap-4 mt-4">
              {[
                {
                  title: "Startup Team (5-20 seats)",
                  price: "₹1,899 / seat / month",
                },
                {
                  title: "Growth Team (21-50 seats)",
                  price: "₹1,799 / seat / month",
                },
                {
                  title: "Enterprise (50+ seats)",
                  price: "Custom pricing",
                },
              ].map((plan, i) => (
                <Card key={i} className="rounded-2xl shadow-md">
                  <CardContent className="p-6">
                    <h3 className="font-semibold">{plan.title}</h3>
                    <p className="mt-2 text-blue-600 font-bold">
                      {plan.price}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* ROI Section */}
          <div>
            <h2 className="text-2xl font-bold">Recruitment ROI Example</h2>
            <Card className="mt-4 rounded-2xl shadow-md">
              <CardContent className="p-6 text-slate-700">
                10 recruiters using Winixco can save ~400 hours/month through AI automation resulting in productivity worth ₹4L+ per month.
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <p className="mb-4 text-slate-600">
            Need bulk pricing or demo?
          </p>
          <Button className="px-8 py-6 text-lg rounded-xl">
            Contact Sales
          </Button>
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white text-center py-3 font-semibold">
        Start 30-Day Free Trial – ₹67/day per recruiter
      </div>
    </div>
  );
}