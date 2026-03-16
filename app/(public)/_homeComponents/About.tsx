import React from "react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  Award,
  Sparkles,
} from "lucide-react";
import { home } from "@/services/Constants";

const AboutUs: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Images */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="relative"
          >
            {/* Main Large Image */}
            <motion.div
              variants={imageVariants}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-[#2563eb] to-[#c3dbe0] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 bg-[#2563eb] rounded-2xl flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-black font-medium">
                    Team Collaboration
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Top Right Small Image */}
            <motion.div
              variants={imageVariants}
              transition={{ delay: 0.2 }}
              className="absolute -top-6 -right-6 w-32 h-32 md:w-40 md:h-40 z-20"
            >
              <div className="w-full h-full rounded-xl overflow-hidden shadow-xl bg-[#2563eb] flex items-center justify-center border-4 border-white">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            {/* Bottom Left Small Image */}
            <motion.div
              variants={imageVariants}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-8 -left-8 w-36 h-36 md:w-44 md:h-44 z-20"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl bg-[#2563eb] flex items-center justify-center border-4 border-white">
                <Award className="w-14 h-14 text-white" />
              </div>
            </motion.div>

            {/* Bottom Right Floating Card */}
            <motion.div
              variants={imageVariants}
              transition={{ delay: 0.6 }}
              className="absolute bottom-4 right-4 z-30 bg-white rounded-xl shadow-2xl p-4 border border-[#c3dbe0]"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#2563eb] rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-[#0d0d0d]">500K+</p>
                  <p className="text-xs text-[#7c7a7c]">Successful Hires</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Blur */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#13afdc]/20 rounded-full blur-3xl opacity-40 -z-10"
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <Badge className="mb-4 px-4 py-2 bg-blue-50 text-[#2563eb] font-semibold">
                <Sparkles className="w-4 h-4 mr-2 inline" />
                {home.about.badge}
              </Badge>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0d0d0d] leading-tight"
            >
              {home.about.heading}
            </motion.h2>

            <motion.h3
              variants={itemVariants}
              className="text-xl sm:text-2xl font-semibold text-[#2563eb]"
            >
              {home.about.subheading}
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-[#7c7a7c] text-lg leading-relaxed"
            >
              {home.about.description}
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 py-6"
            >
              {home.about.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-xl bg-gradient-to-br from-white to-[#c3dbe0]/40 border border-[#c3dbe0]"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-[#2563eb]" />
                  <p className="text-2xl font-bold text-[#0d0d0d]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#7c7a7c] mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Highlights */}
            <motion.div variants={itemVariants} className="space-y-3">
              {home.about.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-[#2563eb]" />
                  </div>
                  <span className="text-[#0d0d0d]">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <Button
                size="lg"
                className="bg-[#2563eb] text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {home.about.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            {/* Trust Badge */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 pt-4 text-sm text-[#7c7a7c]"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-[#2563eb] border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span>Trusted by 15,000+ companies worldwide</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;