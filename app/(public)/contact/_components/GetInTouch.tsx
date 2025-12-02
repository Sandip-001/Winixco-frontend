"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_DATA } from '@/services/Constants';



// Get In Touch Component
const GetInTouch: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-20"
  >
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {CONTACT_DATA.getInTouch.title}
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        {CONTACT_DATA.getInTouch.description}
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8">
      {CONTACT_DATA.getInTouch.methods.map((method, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="text-center"
        >
          <div className={`w-16 h-16 mx-auto mb-4 bg-white rounded-2xl shadow-md flex items-center justify-center ${method.color}`}>
            <method.icon className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{method.description}</p>
          <p className={`font-semibold ${method.color}`}>{method.contact}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default GetInTouch