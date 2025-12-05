"use client";
import React from "react";
import { motion } from "framer-motion";
import { CalendarCheck, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Personalized walkthrough of ATS, HRMS & CRM",
  "Explore dashboards, workflows & automation",
  "Pricing, setup & integration guidance",
  "Ask anything tailored to your business needs",
];

const BookDemoSection = () => {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
      >
        
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900"
        >
          🗓️ Book a Demo or{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Consultation
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Want to see how Winixco can improve hiring, HR operations or client
          management? Get your free 1-on-1 demo — our team responds within 12 hours.
        </motion.p>

        {/* Feature List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-4 md:grid-cols-2 max-w-2xl mx-auto mt-10 text-left"
        >
          {features.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle className="text-purple-600 w-6 h-6" />
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row gap-5 justify-center mt-12"
        >
          <Button
            size="lg"
            className="px-9 py-6 text-lg rounded-xl font-bold shadow-xl bg-purple-600 text-white hover:bg-purple-700 hover:scale-105 transition-transform"
          >
            <CalendarCheck className="mr-2 w-5 h-5" />
            Book My Demo
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-9 py-6 text-lg rounded-xl font-bold border-2 text-purple-700 hover:bg-purple-100 transition-all"
          >
            <Send className="mr-2 w-5 h-5" />
            Contact Sales
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BookDemoSection;