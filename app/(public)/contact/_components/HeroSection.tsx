"use client";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const HeroSection: React.FC = () => (
  <section className="relative overflow-hidden py-24">
    {/* Animated Background Glow */}
    <motion.div
      className="absolute inset-0 opacity-20 pointer-events-none"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 10, repeat: Infinity }}
    >
      <div className="absolute w-96 h-96 bg-purple-400 blur-3xl rounded-full -top-10 -left-10"></div>
      <div className="absolute w-80 h-80 bg-pink-400 blur-3xl rounded-full bottom-0 right-0"></div>
    </motion.div>

    {/* Content */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative z-10 text-center px-6 max-w-4xl mx-auto"
    >
      <Badge className="mb-5 px-6 py-3 bg-purple-100 text-purple-700 tracking-wide">
        #1 CUSTOMER SUPPORT
      </Badge>

      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
        We’re Here to Help You{" "}
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Transform Your Business
        </span>
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
