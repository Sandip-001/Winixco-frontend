"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {MapPin} from 'lucide-react';
import { CONTACT_DATA } from '@/services/Constants';



// Global Offices Component
const GlobalOffices: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-20"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      {CONTACT_DATA.offices.title}
    </h2>
    <p className="text-gray-600 mb-12">{CONTACT_DATA.offices.description}</p>
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {CONTACT_DATA.offices.locations.map((location, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ y: -5 }}
        >
          <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">{location.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{location.city}</h3>
              <div className="flex items-start justify-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-blue-600" />
                <div>
                  <p>{location.address}</p>
                  <p>{location.address2}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default GlobalOffices