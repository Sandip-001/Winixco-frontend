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
    <section className="py-32 bg-gradient-to-br from-[#c3dbe0] to-white text-center relative overflow-hidden">
      {/* Soft animated background blobs */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bg-[#13afdc] rounded-full blur-3xl opacity-20 w-[28rem] h-[28rem] -top-20 -right-20"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute bg-[#0d0d0d] rounded-full blur-3xl opacity-10 w-[26rem] h-[26rem] -bottom-20 -left-20"
      />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 text-[#0d0d0d]"
        >
          How It{" "}
          <span className="bg-gradient-to-r from-[#13afdc] to-[#0d0d0d] bg-clip-text text-transparent">
            Works
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-[#7c7a7c] mb-16"
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
              <div className="flex justify-center mb-4 text-[#13afdc]">
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