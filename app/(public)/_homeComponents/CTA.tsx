"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// CTA Section
const CTA = () => {
  const router = useRouter();
  return (
    <section className="py-24 bg-[#2563eb] text-white text-center relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-20"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <div className="absolute bg-white rounded-full w-96 h-96 blur-3xl -top-10 -left-10"></div>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Ready to Transform Your Hiring?
        </h2>

        <p className="text-lg md:text-xl text-white/90 mb-10">
          Join hundreds of companies already using Winixco to hire smarter,
          faster, and with confidence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="px-10 py-6 text-lg bg-white text-[#2563eb] font-medium rounded-xl shadow-lg hover:bg-white hover:text-[#2563eb] hover:shadow-2xl hover:scale-105 transition-transform"
            onClick={()=>router.push("#pricing")}
          >
            Start Your Free Trial Today<ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
