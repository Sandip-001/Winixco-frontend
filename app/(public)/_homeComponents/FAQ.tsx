"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "./Animated";
import { home } from "@/services/Constants";

// FAQ Section
const FAQ = () => {
  return (
    <section
      id="faq"
      className="py-24 bg-gradient-to-b from-white to-[#c3dbe0]/40"
    >
      <div className="max-w-4xl mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-[#2563eb] rounded-full text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0d0d0d]">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-black">
            Everything you need to know about Winixco
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <Accordion type="single" collapsible className="space-y-4">
            {home.faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-[#c3dbe0]/60 px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg text-[#0d0d0d] hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#7c7a7c] pb-6 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;