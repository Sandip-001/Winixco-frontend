"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  ClipboardCheck,
  UserPlus,
  DollarSign,
  Handshake,
} from "lucide-react";

const steps = [
  {
    icon: <Briefcase className="w-10 h-10" />,
    title: "Post Jobs in 1 Click",
    desc: "Publish roles across multiple job boards instantly.",
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Track Applications",
    desc: "View, filter & collaborate on candidates with smart ATS.",
  },
  {
    icon: <ClipboardCheck className="w-10 h-10" />,
    title: "Hire Smarter",
    desc: "Shortlist, schedule interviews & make quick decisions.",
  },
  {
    icon: <UserPlus className="w-10 h-10" />,
    title: "Onboard to Employee",
    desc: "Convert hires seamlessly into HRMS — no data re-entry!",
  },
  {
    icon: <DollarSign className="w-10 h-10" />,
    title: "Manage HR & Payroll",
    desc: "Attendance, payroll & performance in one place.",
  },
  {
    icon: <Handshake className="w-10 h-10" />,
    title: "Nurture Clients & Grow",
    desc: "Built-in CRM to boost retention, sales & business scale.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-32 bg-[#2563eb] text-center relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 text-white"
        >
          How It Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-white mb-16"
        >
          Winixco connects your hiring, HR and CRM workflows into one powerful
          operating system — from job posting to payroll & business growth.
        </motion.p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="flex justify-center mb-4 text-[#2563eb]">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#0d0d0d]">
                {step.title}
              </h3>
              <p className="text-sm text-[#7c7a7c]">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-12 text-sm text-[#7c7a7c]"
        >
          Complete the loop. Grow endlessly.
        </motion.p>
      </div>
    </section>
  );
};

export default HowItWorks;
