"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { hrms } from "@/services/Constants";




const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-24 px-6 bg-[#2563eb] text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-20 pointer-events-none"
        animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(255,255,255,0.25) 0, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold"
        >
          {hrms.FINAL_CTA.title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg mt-4 text-white/90 max-w-2xl mx-auto"
        >
          {hrms.FINAL_CTA.subtitle}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Button
            size="lg"
            className="px-10 py-6 text-lg font-semibold bg-white text-blue-700 hover:bg-gray-100 hover:scale-105 transition-all rounded-xl shadow-lg"
          >
            {hrms.FINAL_CTA.ctaText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA