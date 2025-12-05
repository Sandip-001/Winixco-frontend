"use client";
import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./Animated";
import { home } from "@/services/Constants";

const Benefits = () => {
  return (
    <section
      id="solutions"
      className="py-24 bg-gradient-to-br from-purple-600 to-pink-600 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Heading */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Winixco?
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Winixco helps companies stay efficient, connected, and future-ready. 
            With automation, accuracy, and real-time syncing, every department works smarter — not harder.
          </p>
        </AnimatedSection>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {home.benefits.map((feature, index) => (
            <AnimatedSection key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white">{feature.icon}</span>
                </div>

                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-purple-100">{feature.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
