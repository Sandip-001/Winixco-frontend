"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, PlayCircle, Users, UserCog, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { home } from "@/services/Constants";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 px-4 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply blur-3xl opacity-30"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-40 -right-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply blur-3xl opacity-30"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute -bottom-20 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply blur-3xl opacity-30"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-6"
        >
          🚀 All-In-One Talent & Workforce Platform
        </motion.span>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          Build Powerful{" "}
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            ATS, HRMS & CRM
          </span>{" "}
          Solutions
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto"
        >
          Winixco helps organizations simplify hiring, manage employees,
          and enhance client relationships — all in one platform.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-xl hover:scale-105 transition-all"
          >
            Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg font-semibold rounded-xl border-2 hover:bg-gray-50"
          >
            <PlayCircle className="mr-2 w-5 h-5" />
            Watch Overview
          </Button>
        </motion.div>

        {/* Trust checklist */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex justify-center gap-4 text-gray-600 text-sm"
        >
          <Check className="w-5 h-5 text-green-500" /> No credit card required
          <span className="mx-2">•</span>
          <Check className="w-5 h-5 text-green-500" /> 14-day free trial
        </motion.div>

        {/* Product Highlight Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { icon: Users, title: "ATS", desc: "Automate hiring, AI screening & smoother interviews." },
            { icon: UserCog, title: "HRMS", desc: "Employee onboarding, payroll & performance." },
            { icon: Briefcase, title: "CRM", desc: "Manage clients & strengthen candidate relationships." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100"
            >
              <item.icon className="w-10 h-10 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {home.stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;