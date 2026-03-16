"use client";
import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, Handshake, Globe, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const partnerships = [
  "White-label & reseller partnership",
  "Revenue-sharing models",
  "API-based integrations",
  "Custom enterprise solutions",
];

const PartnerWithUsSection = () => {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
      >
        <div className="absolute w-96 h-96 bg-purple-300 blur-[120px] rounded-full -top-10 -left-10"></div>
        <div className="absolute w-80 h-80 bg-pink-400 blur-[130px] rounded-full bottom-0 right-0"></div>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          🤝 Partner With Winixco
        </motion.h2>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Winixco empowers recruitment agencies, IT firms, HR consultants and
          SaaS resellers to expand their service offerings & grow revenue.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-10 text-left">
          {partnerships.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <BadgeCheck className="text-[#2563eb] w-6 h-6" />
              <p className="text-gray-700 font-medium">{item}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-12"
        >
          <Button className="px-10 py-5 text-lg bg-[#2563eb] text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition-all">
            Become a Partner
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerWithUsSection;