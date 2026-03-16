"use client";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const HeroSection: React.FC = () => (
  <section className="relative overflow-hidden py-16 bg-[linear-gradient(135deg,_#FFFFFF_0%,_#F9FAFB_50%,_#DBEAFE_100%)]">
    {/* Content */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative z-10 text-center px-6 max-w-4xl mx-auto"
    >
      <Badge className="mb-5 px-6 py-3 bg-blue-50 text-[#2563eb] tracking-wide">
        #1 CUSTOMER SUPPORT
      </Badge>

      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
        We’re Here to Help You Transform Your Business
      </h1>

      <p className="text-lg md:text-xl mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Whether you're exploring our ATS, HRMS, or CRM solutions — or need
        support for your existing account — our team is ready with fast, expert guidance.
      </p>

      <p className="text-lg md:text-xl mt-3 text-gray-700 max-w-3xl mx-auto font-medium">
        Let’s Connect & Grow Together.
      </p>
    </motion.div>
  </section>
);

export default HeroSection;
