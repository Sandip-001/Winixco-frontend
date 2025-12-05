"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import {
  home,
  Module,
  ModuleCardProps,
  ModuleFeature,
} from "@/services/Constants";
import { useRouter } from "next/navigation";



const ModuleCard: React.FC<ModuleCardProps> = ({ module, index }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const router = useRouter();

  const handleClick = (): void => {
    router.push(module.route);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        className={`bg-gradient-to-br ${module.bgColor} border-2 border-transparent hover:border-gray-200 transition-all duration-500 cursor-pointer group h-full ${module.hoverColor} overflow-hidden relative`}
        onClick={handleClick}
      >
        <CardContent className="p-8 md:p-10 relative z-10">
          {/* Icon and Badge */}
          <div className="flex items-start justify-between mb-6">
            <motion.div
              animate={{
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 5 : 0,
              }}
              transition={{ duration: 0.3 }}
              className={`w-20 h-20 bg-gradient-to-br ${module.color} rounded-2xl flex items-center justify-center shadow-lg`}
            >
              <module.icon className="w-10 h-10 text-white" />
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.2 + 0.3 }}
            >
              <Badge className={`${module.accentColor} bg-white border-2`}>
                New
              </Badge>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            className="mb-6 rounded-2xl overflow-hidden shadow-lg h-48 relative"
            animate={{
              y: isHovered ? -10 : 0,
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={module.imageUrl}
              alt={module.title}
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${module.color} opacity-20 group-hover:opacity-30 transition-opacity`}
            />
          </motion.div>

          {/* Title */}
          <h3
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text"
            style={{
              backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
            }}
          >
            {module.title}
          </h3>

          {/* Description */}
          <p className="text-gray-700 mb-3 leading-relaxed">
            {module.description}
          </p>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            {module.subDescription}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {module.features.map((feature: ModuleFeature, idx: number) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + idx * 0.1 }}
                className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-lg p-3"
              >
                <feature.icon className={`w-4 h-4 ${module.accentColor}`} />
                <span className="text-sm font-medium text-gray-700">
                  {feature.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
            <Button
              className={`w-full bg-gradient-to-r ${module.color} hover:shadow-xl text-white font-semibold group-hover:scale-105 transition-transform`}
              size="lg"
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Checkmark for Completeness */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + 0.5, type: "spring" }}
            className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
          >
            <CheckCircle className="w-5 h-5 text-white" />
          </motion.div>
        </CardContent>

        {/* Decorative Elements */}
        <motion.div
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.3 : 0.1,
          }}
          transition={{ duration: 0.5 }}
          className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${module.color} rounded-full blur-3xl`}
        />
      </Card>
    </motion.div>
  );
};

const ModulesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 px-6 py-2  bg-purple-100 text-purple-700  border-0">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            {home.module.badge}
          </Badge>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {home.module.title}{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Offers
            </span>{" "}
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {home.module.subtitle}
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {home.module.modules.map((module: Module, index: number) => (
            <ModuleCard key={module.id} module={module} index={index} />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 border-0 max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg text-blue-100 mb-8">
                Get started with all three modules and experience seamless
                integration
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                >
                  Start Free Trial
                  <Sparkles className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white  bg-white hover:bg-white/10"
                >
                  Schedule Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ModulesSection;
