"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ServiceCTA() {
  return (
    <section className="py-20 bg-[#2563eb] text-white">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Ready to Transform Your Hiring Process?
        </motion.h2>

        <p className="mt-6 text-lg text-blue-100">
          Start using our AI-powered recruitment platform today.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">

          <Button className="bg-white text-[#2563eb] hover:bg-gray-100 px-8 py-6 text-lg rounded-xl">
            Start Free Trial
          </Button>

        </div>

      </div>

    </section>
  );
}