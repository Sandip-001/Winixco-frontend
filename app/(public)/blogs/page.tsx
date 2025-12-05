"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const BLOGS = [
  {
    title: "Why CRM is Essential for Scaling Modern Businesses",
    description:
      "Discover how CRM solutions boost growth, streamline communication & maximise revenue.",
    author: "Sandip Chowdhury",
    date: "Dec 05, 2025",
    image:
      "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=800&q=80",
    readTime: "5 min read",
  },
  {
    title: "How Automation Improves Sales Team Productivity",
    description:
      "Learn why automation is becoming a must-have feature for sales operations.",
    author: "Priya Sharma",
    date: "Nov 28, 2025",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    readTime: "4 min read",
  },
  {
    title: "Top CRM Trends to Watch Out in 2026",
    description:
      "AI-driven CRMs, predictive analytics & more – see what the future holds.",
    author: "Arjun Patel",
    date: "Oct 15, 2025",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="py-24 px-6 text-center bg-gradient-to-b from-purple-600 via-blue-600 to-indigo-700 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Insights & Resources for Your Growth
        </motion.h1>
        <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
          Explore the latest blogs, guides, and articles to help your business scale smarter.
        </p>
      </section>

      {/* Blog List */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOGS.map((blog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {blog.description}
                </p>

                <div className="flex items-center gap-3 text-gray-500 text-xs mt-4">
                  <User className="w-4 h-4" />
                  <span>{blog.author}</span>
                  <span>•</span>
                  <Calendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <span className="text-xs text-purple-600 font-medium">
                    {blog.readTime}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-purple-700 border-purple-200 hover:bg-purple-100"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gray-50 px-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Want More Industry Insights?
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Subscribe to our newsletter and stay updated with the latest trends.
        </p>
        <div className="mt-8">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-10"
          >
            Subscribe Now
          </Button>
        </div>
      </section>
    </main>
  );
}
