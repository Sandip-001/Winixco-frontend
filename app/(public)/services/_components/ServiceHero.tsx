"use client";

import { motion } from "framer-motion";

export default function ServiceHero() {
  return (
    <section className="w-full bg-[linear-gradient(135deg,_#FFFFFF_0%,_#F9FAFB_50%,_#DBEAFE_100%)] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          Our Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          We provide powerful AI-driven recruitment solutions to help
          businesses hire faster, smarter, and more efficiently.
        </motion.p>

      </div>
    </section>
  );
}