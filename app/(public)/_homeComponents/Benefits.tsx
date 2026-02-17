"use client";
import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./Animated";
import { home } from "@/services/Constants";

const Benefits = () => {
  return (
    <section
      id="solutions"
      className="py-24 bg-gradient-to-br from-[#13afdc] to-[#c3dbe0] relative overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0d0d0d]">
            Why Choose Winixco?
          </h2>
          <p className="text-xl text-[#0d0d0d]/70 max-w-3xl mx-auto">
            Winixco helps companies stay efficient, connected, and future-ready.
            With automation, accuracy, and real-time syncing, every department
            works smarter — not harder.
          </p>
        </AnimatedSection>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {home.benefits.map((feature, index) => (
            <AnimatedSection key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 rounded-2xl bg-white/80 backdrop-blur-lg border border-[#c3dbe0] hover:bg-white transition-all shadow-lg"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#13afdc] to-[#c3dbe0] flex items-center justify-center">
                  <span className="text-white">{feature.icon}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-[#0d0d0d]">
                  {feature.title}
                </h3>
                <p className="text-[#7c7a7c]">
                  {feature.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
