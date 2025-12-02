"use client";
import React, {  } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./Animated";
import { home } from "@/services/Constants";




// Company Logos Slider
const CompanySlider = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection>
          <p className="text-center text-gray-600 font-semibold mb-12">
            TRUSTED BY LEADING COMPANIES WORLDWIDE
          </p>
        </AnimatedSection>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-12 items-center"
          >
            {[...home.companies, ...home.companies].map(
              (company, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-xl min-w-fit hover:bg-gray-100 transition-colors"
                >
                  <span className="text-4xl">{company.logo}</span>
                  <span className="text-xl font-bold text-gray-800 whitespace-nowrap">
                    {company.name}
                  </span>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanySlider