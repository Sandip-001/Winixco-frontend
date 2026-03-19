"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./Animated";
import { home } from "@/services/Constants";

// Features Section
const Features = () => {
  return (
    <section
      id="features"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-[#2563eb] rounded-full text-sm font-semibold mb-4">
            POWERFUL FEATURES
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0d0d0d]">
            Powerful AI Driven Features to Turbocharge your Hiring Process
          </h2>

          <p className="text-xl text-[#7c7a7c] max-w-3xl mx-auto">
            Everything you need to streamline your hiring process with AI-powered intelligence.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {home.features.map((feature, index) => (
            <AnimatedSection key={index}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="h-full"
              >
                <Card className="h-full bg-white border border-[#c3dbe0] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-8">
                    <div
                      className="
                        w-14 h-14 rounded-xl 
                        bg-blue-100
                        flex items-center justify-center 
                        mb-6 
                        group-hover:scale-110
                        transition-transform
                      "
                    >
                      <div className="text-white text-3xl text-center">
                        {feature.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-[#0d0d0d]">
                      {feature.title}
                    </h3>

                    <p className="text-[#7c7a7c] leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
