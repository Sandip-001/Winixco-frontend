import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import AnimatedSection from "./Animated";
import { home } from "@/services/Constants";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % home.testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = home.testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#c3dbe0] text-[#0d0d0d] rounded-full text-sm font-semibold mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0d0d0d]">
            Loved by{" "}
            <span className="bg-gradient-to-r from-[#13afdc] to-[#c3dbe0] bg-clip-text text-transparent">
              Our Clients
            </span>
          </h2>
          <p className="text-xl text-[#7c7a7c] max-w-3xl mx-auto">
            See what our customers have to say about their experience
          </p>
        </AnimatedSection>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-gradient-to-br from-[#c3dbe0] to-white rounded-3xl p-12 shadow-xl"
            >
              <Quote className="w-12 h-12 text-[#13afdc] mb-6" />

              <p className="text-2xl text-[#0d0d0d] mb-8 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#13afdc] to-[#c3dbe0] flex items-center justify-center text-3xl">
                  {testimonial.image}
                </div>

                <div>
                  <h4 className="font-bold text-lg text-[#0d0d0d]">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#7c7a7c]">{testimonial.role}</p>
                  <p className="text-[#13afdc] font-semibold">
                    {testimonial.company}
                  </p>
                </div>

                <div className="ml-auto flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#13afdc] text-[#13afdc]"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {home.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#13afdc] w-8"
                    : "bg-gray-300 w-3 hover:bg-[#c3dbe0]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;