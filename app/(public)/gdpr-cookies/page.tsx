"use client";

import { motion } from "framer-motion";
import { Globe, ShieldCheck, Cookie, FileText } from "lucide-react";

export default function GDPRCookiesPage() {
  return (
    <div className="bg-gray-50">
      {/* HEADER */}
      <section className="bg-sky-200 text-gray-900 py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl">
            <ShieldCheck className="w-10 h-10" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            GDPR & Cookies Policy
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Transparent data processing and privacy practices aligned with GDPR and global standards.
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-5xl mx-auto py-16 px-6 space-y-16">

        {/* GDPR MAIN SECTION */}
        <PolicySection
          icon={<Globe className="w-8 h-8 text-emerald-600" />}
          title="GDPR & Data Processing"
          content={
            <p>
              <strong>Controller vs Processor:</strong> For recruitment data uploaded by customers 
              (applicant CVs, interview notes, candidate profiles), Winixco acts as a{" "}
              <strong>Data Processor</strong>, while the subscribing customer is the{" "}
              <strong>Data Controller</strong>. For user account data collected directly by Winixco 
              (such as admin accounts), Winixco acts as the <strong>Data Controller</strong>.
            </p>
          }
        />

        {/* DPA SECTION */}
        <PolicySection
          icon={<FileText className="w-8 h-8 text-emerald-700" />}
          title="Data Processing Addendum (DPA)"
          content={
            <>
              <p className="mb-4">
                We provide a DPA upon request or include it in our subscription agreements. The DPA covers:
              </p>
              <ul className="list-disc ml-6 space-y-2 leading-relaxed">
                <li>Permitted processing activities (hosting, storage, backups, customer support).</li>
                <li>Security measures including encryption, access controls, and logging.</li>
                <li>Sub-processor list and advance notification of changes.</li>
                <li>Support for data subject rights and data deletion/return upon contract termination.</li>
              </ul>
            </>
          }
        />

        {/* GDPR RIGHTS SECTION */}
        <PolicySection
          icon={<ShieldCheck className="w-8 h-8 text-green-700" />}
          title="GDPR Rights & Assistance"
          content={
            <p>
              We help customers fulfill GDPR data subject requests (access, correction, deletion, 
              portability) for data processed on their behalf. Customers may contact{" "}
              <a href="mailto:support@winixco.com" className="text-blue-600 underline">
                support@winixco.com
              </a>{" "}
              with request details and proof of identity where applicable.
            </p>
          }
        />

        {/* INTERNATIONAL TRANSFERS */}
        <PolicySection
          icon={<Globe className="w-8 h-8 text-emerald-800" />}
          title="Standard Contractual Clauses & International Transfers"
          content={
            <p>
              For transfers of personal data from the EU to countries without adequacy decisions, 
              we rely on legally recognized safeguards such as Standard Contractual Clauses (SCCs). 
              Customers may request copies of applicable safeguards.
            </p>
          }
        />

        {/* COOKIES SECTION */}
        <PolicySection
          icon={<Cookie className="w-8 h-8 text-amber-600" />}
          title="Cookies & Tracking"
          content={
            <>
              <p className="mb-4">
                We use cookies and similar technologies to operate and secure the service, authenticate 
                users, remember preferences, and perform analytics. Cookie preferences can be managed via 
                browser settings or platform tools. Cookie categories include:
              </p>
              <ul className="list-disc ml-6 space-y-2 leading-relaxed">
                <li>
                  <strong>Essential:</strong> Required for authentication and platform functionality.
                </li>
                <li>
                  <strong>Performance & Analytics:</strong> Helps us understand usage and improve features.
                </li>
                <li>
                  <strong>Marketing:</strong> Used only with user consent to deliver updates and product information.
                </li>
              </ul>
            </>
          }
        />
      </section>
    </div>
  );
}

/* ---------------------- Reusable Component ---------------------- */

function PolicySection({
  icon,
  title,
  content,
}: {
  icon?: React.ReactNode;
  title: string;
  content: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-200"
    >
      {icon && <div className="mb-4">{icon}</div>}

      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        {title}
      </h2>

      <div className="text-gray-700 leading-relaxed">{content}</div>
    </motion.div>
  );
}
