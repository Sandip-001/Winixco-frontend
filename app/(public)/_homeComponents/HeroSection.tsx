"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full bg-[linear-gradient(135deg,_#FFFFFF_0%,_#F9FAFB_50%,_#DBEAFE_100%)] py-26 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Hire Smarter with AI-Powered Recruitment Software
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            All-in-one ATS, HRMS, and Recruitment CRM platform designed for
            modern hiring teams
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mt-8">
            <Button className="w-full sm:w-auto bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-6 text-base rounded-xl">
              Start Free Trial
            </Button>

            <Button
              variant="outline"
              className="w-full sm:w-auto border-[#2563eb] text-[#2563eb] px-8 py-6 text-base rounded-xl"
            >
              Schedule Demo
            </Button>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-200"
        >
          <div className="bg-white rounded-3xl shadow-md p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-base sm:text-lg font-semibold text-gray-700">
                Recruitment Pipeline
              </h4>

              <span className="h-3 w-3 rounded-full bg-green-500"></span>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <StatCard title="ACTIVE POSITIONS" value="24" />
              <StatCard title="TOTAL CANDIDATES" value="1,847" />
              <StatCard title="INTERVIEWS THIS WEEK" value="12" />
              <StatCard title="AVG TIME TO HIRE" value="18d" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="border-l-4 border-[#2563eb] bg-gray-50 rounded-xl p-4 sm:p-5">
      <p className="text-xs sm:text-sm text-gray-500">{title}</p>
      <p className="text-lg sm:text-xl font-bold text-[#2563eb] mt-1">{value}</p>
    </div>
  );
}