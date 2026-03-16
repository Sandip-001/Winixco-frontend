"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Winixco cut our hiring time in half. The AI resume screening is incredibly accurate, and our team loves the seamless integration.",
    name: "Sarah Chen",
    role: "Head of Talent, TechScale Inc.",
  },
  {
    quote:
      "The best recruitment platform we've used. From candidate sourcing to onboarding, everything is in one place.",
    name: "Marcus Rodriguez",
    role: "Founder, Recruiting Plus",
  },
  {
    quote:
      "Implementing Winixco was a game-changer. The automation alone has freed up 20 hours per week for strategic work.",
    name: "Emily Watson",
    role: "VP HR, Global Enterprises Ltd.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Trusted by Leading Companies
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            See what recruiters and HR teams say about Winixco
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-l-4 border-[#2563eb] shadow-md rounded-xl">
                <CardContent className="p-6">

                  <p className="text-gray-600 italic leading-relaxed">
                    "{item.quote}"
                  </p>

                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900">
                      {item.name}
                    </h4>

                    <p className="text-[#2563eb] text-sm">
                      {item.role}
                    </p>
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}