"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  PlayCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { atsPageData } from "@/services/Constants";



const HeroSection: React.FC = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6 px-6 py-2  bg-purple-100 text-purple-700  border-white/30 backdrop-blur-sm text-sm font-semibold">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            {atsPageData.hero.badge}
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            {atsPageData.hero.title}
          </h1>

          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-10">
            {atsPageData.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-gray-100 font-semibold px-8 py-6 text-lg shadow-xl"
            >
              {atsPageData.hero.primaryCta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white hover:bg-white/10 font-semibold px-8 py-6 text-lg"
            >
              <PlayCircle className="mr-2 w-5 h-5" />
              {atsPageData.hero.secondaryCta}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection