"use client";
import React, {  } from "react";
import { motion } from "framer-motion";
import {
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./Animated";
import { home } from "@/services/Constants";



// Pricing Section
const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-t from-purple-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple & Transparent{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose a plan that fits your hiring scale
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-10">
          {home.plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-3xl shadow-xl transition-all border
                ${
                  plan.highlight
                    ? "bg-gradient-to-br from-purple-600 to-pink-600 text-white scale-105"
                    : "bg-white"
                }`}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-5xl font-bold mb-2">{plan.price}</div>
              <p className="text-sm opacity-80 mb-6">{plan.period}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <Check className="w-5 h-5 text-green-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.highlight ? "secondary" : "default"}
                className={`w-full py-6 font-semibold rounded-xl ${
                  plan.highlight
                    ? "bg-white text-purple-600 hover:shadow-2xl"
                    : "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing