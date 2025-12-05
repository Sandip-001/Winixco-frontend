"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Rocket, Shield, Zap, MessageCircle, Calendar, Clock } from "lucide-react";
import Link from "next/link";

// Feature data
const features = [
  { text: "Fast and transparent customer support", icon: Rocket },
  { text: "Simple onboarding and quick implementation", icon: Zap },
  { text: "Scalable modules for startups to enterprises", icon: CheckCircle },
  { text: "Custom features built on request", icon: MessageCircle },
  { text: "Secure, cloud-based infrastructure", icon: Shield },
  { text: "Real-time analytics and reporting", icon: Clock }, // New feature added
];


const ChooseWinixco = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          ⭐ Why Businesses{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Choose Winixco
          </span>
        </motion.h2>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 justify-center">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-4"
            >
              <item.icon className="w-8 h-8 text-purple-600" />
              <p className="text-lg text-gray-700 font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


// Contact CTA Section
const WeLoveToHearFromYou = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center bg-white p-12 rounded-3xl shadow-xl"
      >
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          📣 We’d Love to Hear From You
        </h2>

        <p className="text-gray-600 mt-6 text-lg">
          Your message helps us understand your business better — and deliver the right solution.
          Let’s build something powerful for your organisation.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          <Link
            href="#contact"
            className="px-8 py-4 text-lg font-semibold rounded-xl bg-purple-600 hover:bg-purple-700 text-white transition-all hover:scale-105"
          >
            👉 Send Message
          </Link>

          <Link
            href="#book-demo"
            className="px-8 py-4 text-lg font-semibold rounded-xl border-2 border-purple-600 text-purple-700 hover:bg-purple-50 transition-all hover:scale-105"
          >
            👉 Book a Demo
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export { ChooseWinixco, WeLoveToHearFromYou };