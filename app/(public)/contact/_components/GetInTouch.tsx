"use client";
import React from "react";
import { motion } from "framer-motion";
import { CONTACT_DATA } from "@/services/Constants";

const GetInTouch: React.FC = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      
      {/* Background Gradient Blobs */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-30"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity }}
      >
      
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          {CONTACT_DATA.getInTouch.title}
          <span className="block mt-2 bg-[#2563eb] bg-clip-text text-transparent">
            Let’s Connect
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          {CONTACT_DATA.getInTouch.description}
        </motion.p>

        {/* Contact Methods */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
          {CONTACT_DATA.getInTouch.methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 mx-auto mb-5 rounded-xl flex items-center justify-center shadow-md ${method.color} `}
              >
                <method.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {method.title}
              </h3>

              <p className="text-gray-600 text-sm mb-2">{method.description}</p>

              <p className="font-semibold text-[#2563eb]">{method.contact}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GetInTouch;