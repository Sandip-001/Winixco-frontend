"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CONTACT_DATA } from '@/services/Constants';

// Quick Actions Component
const QuickActions: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="grid md:grid-cols-2 gap-8 mb-20"
  >
    {CONTACT_DATA.quickActions.map((action, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
      >
        <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
          <CardContent className="p-8 text-center">
            <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${action.color} rounded-2xl flex items-center justify-center`}>
              <action.icon className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{action.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {action.description}
            </p>
            <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">
              {action.cta}
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </motion.div>
);

export default QuickActions