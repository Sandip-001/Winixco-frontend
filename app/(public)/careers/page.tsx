"use client";
import { motion } from "framer-motion";
import { Briefcase, Users, Target, HeartHandshake, ArrowRight } from "lucide-react";
import Link from "next/link";

const openRoles = [
  {
    title: "Frontend Developer",
    department: "Engineering",
    type: "Full Time",
    location: "Remote / India",
  },
  {
    title: "Backend Developer",
    department: "Engineering",
    type: "Full Time",
    location: "Remote",
  },
  {
    title: "Sales Executive",
    department: "Sales & Marketing",
    type: "Full Time",
    location: "Kolkata, India",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    type: "Full Time",
    location: "Remote",
  },
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      
      {/* HERO */}
      <section className="py-24 text-center bg-gradient-to-b from-white to-blue-50">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          Build Your Future With Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xl max-w-2xl mx-auto"
        >
          Join a passionate team shaping the future of CRM solutions across the globe.
        </motion.p>
      </section>

      {/* CULTURE SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Life at Our Company</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A culture built to encourage creativity, innovation, and collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <Users className="w-10 h-10 text-blue-600" />,
              title: "Collaborative Team",
              desc: "Work with talented individuals who uplift each other every day.",
            },
            {
              icon: <Target className="w-10 h-10 text-purple-600" />,
              title: "Performance Driven",
              desc: "We believe in rewarding effort, creativity & dedication.",
            },
            {
              icon: <HeartHandshake className="w-10 h-10 text-pink-600" />,
              title: "People First",
              desc: "We focus on employee happiness, growth, and well-being.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OPEN ROLES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-3">Open Positions</h2>
            <p className="text-gray-600 text-lg">
              We’re looking for dreamers, doers & problem solvers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {openRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-6 rounded-xl shadow-md border bg-gray-50 hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-semibold mb-2">{role.title}</h3>
                <p className="text-gray-600 mb-4">{role.department}</p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
                  <span>{role.type}</span>
                  <span>{role.location}</span>
                </div>

                <Link
                  href="/apply"
                  className="text-blue-600 font-medium flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <h2 className="text-4xl font-bold mb-6">Didn’t find a suitable role?</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          We are always looking for great talent. Send us your resume!
        </p>

        <Link
          href="/contact"
          className="bg-white text-purple-700 hover:text-purple-900 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
