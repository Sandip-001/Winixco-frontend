"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "60-80%",
    label: "Faster Hiring Process",
  },
  {
    value: "500+",
    label: "Happy Customers",
  },
  {
    value: "50+",
    label: "Countries Supported",
  },
  {
    value: "100+",
    label: "Integrations Available",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-[#dbe7f4] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-[#2563eb]">
              {stat.value}
            </h2>

            <p className="mt-3 text-gray-700 text-lg">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}