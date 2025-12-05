"use client";

import React from "react";
import { motion } from "framer-motion";
import { crm, hrms } from "@/services/Constants";


const ValueProposition: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {crm.VALUE_PROPOSITION.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {crm.VALUE_PROPOSITION.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition