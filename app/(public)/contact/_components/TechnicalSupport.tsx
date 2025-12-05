"use client";
import React from "react";
import { motion } from "framer-motion";
import { Wrench, Clock, Zap, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const supportPoints = [
  "ATS, HRMS & CRM module setup guidance",
  "Integrations including email, SSO & APIs",
  "Troubleshooting & bug resolution",
  "Custom workflow or feature implementation",
];

const TechnicalSupportSection = () => {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Glow */}
      <motion.div
        className="absolute inset-0 opacity-25 pointer-events-none"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
      >
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900"
          >
            🛠️ Technical Support &{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Assistance
            </span>
          </motion.h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Already using Winixco? We’re here to ensure everything works seamlessly
            — fast responses & expert support guaranteed.
          </p>
        </div>

        {/* Support Features */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-12">
          {supportPoints.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <HelpCircle className="text-purple-600 w-6 h-6" />
              <p className="text-gray-700 font-medium">{item}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="px-10 py-5 text-lg font-bold text-purple-700 border-2 rounded-xl hover:bg-purple-100 transition-all"
          >
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSupportSection;