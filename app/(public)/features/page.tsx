"use client";
import { motion } from "framer-motion";
import {
  Sparkles,
  Layers,
  BarChart3,
  Users,
  CheckCircle2,
  ShieldCheck,
  Workflow,
  LineChart,
  WorkflowIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FEATURES_DATA = [
  {
    icon: Users,
    title: "Smart Candidate Management",
    description:
      "Track candidates effortlessly with pipeline stages, auto tagging & resume parsing.",
  },
  {
    icon: Layers,
    title: "Unified ATS + CRM Platform",
    description:
      "Manage hiring, leads & clients under one powerful and connected workspace.",
  },
  {
    icon: CheckCircle2,
    title: "Automated Workflows",
    description:
      "Reduce manual tasks with automated approvals, reminders & email triggers.",
  },
  {
    icon: WorkflowIcon,
    title: "Task & Team Collaboration",
    description:
      "Assign tasks, manage roles, and collaborate with real-time updates.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access",
    description:
      "Secure & compliant access controls to protect sensitive data.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Get real-time dashboards for hiring performance and revenue growth.",
  },
];

export default function FeaturesPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="py-24 text-center px-6 bg-gradient-to-b from-white to-blue-50">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900"
        >
          Powerful Features to Turbocharge Your{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Hiring & CRM
          </span>
        </motion.h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to streamline recruitment, manage clients and
          scale your business — all in one platform.
        </p>
      </section>

      {/* FEATURE GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {FEATURES_DATA.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white rounded-3xl border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center shadow-md mb-5">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA STRIP */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-purple-700 text-white text-center px-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Experience The Future of Hiring & Client Management
        </motion.h2>
        <p className="text-lg max-w-2xl mx-auto opacity-90 mb-8">
          Try Winixco now and transform the way your business grows.
        </p>

        <Button size="lg" className="text-lg bg-white text-blue-700 hover:bg-blue-100">
          Book a Live Demo
        </Button>
      </section>
    </main>
  );
}
