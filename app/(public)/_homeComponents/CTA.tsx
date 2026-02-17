"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// CTA Section
const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-[#1FC8DB] to-[#7FD8E7] text-white text-center relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-20"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <div className="absolute bg-white rounded-full w-96 h-96 blur-3xl -top-10 -left-10"></div>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Transform the way your business
          <span className="bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
            {" "}
            hires, manages & grows
          </span>
        </h2>

        <p className="text-lg md:text-xl text-white/90 mb-10">
          Winixco brings HRMS, ATS & CRM together — so your teams stay aligned,
          productive and future-ready.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="px-10 py-6 text-lg bg-white text-[#0ea5b7] font-bold rounded-xl shadow-lg hover:bg-[#0ea5b7] hover:text-white hover:shadow-2xl hover:scale-105 transition-transform"
          >
            Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-slate-600 px-10 py-6 text-lg font-bold rounded-xl hover:bg-white/10 transition-all"
          >
            Book a Demo
          </Button>
        </div>

        <p className="mt-6 text-sm text-white/80">
          No credit card required · Quick setup · Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;