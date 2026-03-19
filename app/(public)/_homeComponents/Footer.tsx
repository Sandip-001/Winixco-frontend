"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Twitter,
  Linkedin,
  Github,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Product",
    items: [
      { label: "Features", url: "/features" },
      { label: "HRMS", url: "/hrms" },
      { label: "ATS", url: "/ats" },
      { label: "CRM", url: "/crm" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Us", url: "/about" },
      { label: "Careers", url: "/careers" },
      { label: "Blog", url: "/blog" },
      { label: "Contact", url: "/contact" },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Privacy Policy", url: "/privacy-policy" },
      { label: "Terms of Service", url: "/terms-and-conditions" },
      { label: "Refund Policy", url: "/refund-policy" },
      //{ label: "GDPR & Cookies", url: "/gdpr-cookies"},
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-10 pb-10 relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-purple-600 to-pink-600 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-10">
        {/* Brand (Logo Update Section) */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="min-w-[230px] flex-1"
        >
          <div className="flex items-center mb-4 gap-3">
            {/* White background for logo */}
            <div className="w-50 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
              {/* Replace this image with your actual logo */}
              <img
                src="/logo.png"
                alt="Company Logo"
                className="w-50 h-12 object-contain"
              />
            </div>
          </div>

          <p className="text-sm opacity-80 max-w-xs">
            Hire smarter & faster — AI screening, automation & collaborative
            recruitment tools.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[
              Facebook,
              Instagram,
              MessageCircle,
              Twitter,
              Linkedin,
              Github,
            ].map((Icon, idx) => (
              <Icon
                key={idx}
                className="w-6 h-6 hover:text-white hover:scale-110 transition cursor-pointer"
              />
            ))}
          </div>
        </motion.div>

        {/* Footer Links */}
        {/* Footer Links */}
        {footerLinks.map((col, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="min-w-[140px]"
          >
            <h4 className="font-semibold text-white text-lg mb-4">
              {col.title}
            </h4>

            <ul className="space-y-3">
              {col.items.map((item, i) => (
                <li
                  key={i}
                  className="text-sm opacity-80 hover:opacity-100 transition"
                >
                  <Link href={item.url} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Bottom */}
      <div className="mt-14 pt-6 border-t border-gray-700/40 text-center text-sm opacity-70">
        © {new Date().getFullYear()} — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
