"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { crm } from "@/services/Constants";



const CRMAdvantages: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
            Why Choose Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Companies Choose Our CRM
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Boost sales performance, strengthen customer relationships, and grow faster with a modern CRM solution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {crm.CRM_ADVANTAGES.map((advantage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="bg-white border-2 border-gray-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 h-full group">
                <CardContent className="pt-8">
                  <div className="w-14 h-14 rounded-xl bg-[#2563eb] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                    <div className="text-white">{advantage.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CRMAdvantages