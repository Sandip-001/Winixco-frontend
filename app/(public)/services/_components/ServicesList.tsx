"use client";

import ServiceCard from "./ServiceCard";
import { Users, Brain, BarChart, Shield } from "lucide-react";

const services = [
  {
    title: "AI Resume Screening",
    description:
      "Automatically analyze thousands of resumes and identify the best candidates using advanced AI matching algorithms.",
    icon: <Brain size={40} />,
  },
  {
    title: "Candidate Management",
    description:
      "Organize and manage candidate pipelines with powerful tools for tracking interviews, feedback, and hiring stages.",
    icon: <Users size={40} />,
  },
  {
    title: "Recruitment Analytics",
    description:
      "Track hiring performance with detailed insights, reports, and analytics to improve your recruitment strategy.",
    icon: <BarChart size={40} />,
  },
  {
    title: "Secure HR Management",
    description:
      "Ensure secure handling of candidate data with enterprise-level security and compliance features.",
    icon: <Shield size={40} />,
  },
];

export default function ServicesList() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            What We Offer
          </h2>

          <p className="mt-4 text-gray-600">
            Our platform provides everything modern hiring teams need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}

        </div>

      </div>

    </section>
  );
}