"use client";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { CONTACT_DATA } from "@/services/Constants";

const HeroSection: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-center mb-16 mt-10"
  >
    <Badge className="mb-4 px-4 py-2 bg-purple-100 text-purple-700">
      {CONTACT_DATA.hero.badge}
    </Badge>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
      {CONTACT_DATA.hero.title}{" "}
      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        us
      </span>
    </h1>
    <p className="text-lg md:text-xl text-gray-600 mb-2 max-w-3xl mx-auto">
      {CONTACT_DATA.hero.description}
    </p>
    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
      {CONTACT_DATA.hero.subtitle}
    </p>
  </motion.div>
);

export default HeroSection;
