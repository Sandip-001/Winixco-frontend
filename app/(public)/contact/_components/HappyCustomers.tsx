"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users,
  Star
} from 'lucide-react';
import { CONTACT_DATA } from '@/services/Constants';


// Happy Customers Component
const HappyCustomers: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 rounded-3xl p-8 md:p-12"
  >
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <Badge className="mb-4 px-4 py-2 bg-yellow-100 text-yellow-800 border-yellow-300">
            <Star className="w-4 h-4 mr-2 inline fill-yellow-500" />
            {CONTACT_DATA.customers.badge}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {CONTACT_DATA.customers.title}
            <span className="text-orange-600">{CONTACT_DATA.customers.highlight}</span>
          </h2>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
          >
            Try for FREE
          </Button>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Users className="w-8 h-8 text-purple-600" />
              <div>
                <p className="text-3xl font-bold text-gray-900">{CONTACT_DATA.customers.count}</p>
                <p className="text-sm text-gray-600">{CONTACT_DATA.customers.label}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {CONTACT_DATA.customers.logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center h-20">
                  <span className={`font-bold text-lg ${logo.color}`}>{logo.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default HappyCustomers