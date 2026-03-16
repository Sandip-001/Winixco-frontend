"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Globe, UserCheck, FileText } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50">
      {/* HEADER SECTION */}
      <section className="bg-[#2563eb] text-gray-900 py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl">
            <Shield className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white">
            Your trust matters. We protect your data with top-tier security,
            transparency, and compliance.
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-5xl mx-auto py-16 px-6 space-y-16">

        {/* INTRO */}
        <PolicySection
          icon={<FileText className="w-8 h-8 text-blue-600" />}
          title="Privacy Policy"
          content={
            <p>
              This Privacy Policy explains how <strong>Winixco</strong> collects,
              uses, discloses, and protects personal data of users of our
              AI-powered ATS and SaaS platform worldwide.
            </p>
          }
        />

        {/* 1. Data We Collect */}
        <PolicySection
          icon={<UserCheck className="w-8 h-8 text-purple-600" />}
          title="1. Data We Collect"
          content={
            <ul className="list-disc ml-6 space-y-2 leading-relaxed">
              <li>
                <strong>Account & Contact Data:</strong> name, company, business
                email, phone number, billing address, job title.
              </li>
              <li>
                <strong>Credentials:</strong> secure login details (hashed).
              </li>
              <li>
                <strong>Payment & Billing:</strong> payment identifiers processed
                via PCI-compliant providers.
              </li>
              <li>
                <strong>Usage & Analytics:</strong> logs, session times, IP,
                device/browser details, audit logs.
              </li>
              <li>
                <strong>Recruitment Data (customer uploaded):</strong> resumes,
                candidate info, interview details, assessments.
              </li>
              <li>
                <strong>Support & Communications:</strong> emails, chat
                transcripts, survey responses.
              </li>
            </ul>
          }
        />

        {/* 2. How We Use Data */}
        <PolicySection
          icon={<Shield className="w-8 h-8 text-blue-700" />}
          title="2. How We Use Your Data"
          content={
            <ul className="list-disc ml-6 space-y-2">
              <li>Provide and operate the Service.</li>
              <li>Process subscriptions, billing & payments.</li>
              <li>Manage accounts and hiring workflows.</li>
              <li>Improve features and AI models (anonymized where possible).</li>
              <li>Prevent fraud, abuse & security incidents.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          }
        />

        {/* 3. Legal Bases */}
        <PolicySection
          icon={<Lock className="w-8 h-8 text-indigo-600" />}
          title="3. Legal Bases for Processing"
          content={
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>Contractual necessity</strong> – required to provide the
                Service.
              </li>
              <li>
                <strong>Legitimate interests</strong> – security, fraud
                prevention, product improvement.
              </li>
              <li>
                <strong>Consent</strong> – marketing communication.
              </li>
            </ul>
          }
        />

        {/* 4. Sharing */}
        <PolicySection
          icon={<Globe className="w-8 h-8 text-blue-500" />}
          title="4. Sharing & Disclosures"
          content={
            <ul className="list-disc ml-6 space-y-2">
              <li>
                Shared with trusted service providers (payment, hosting,
                analytics, email, identity).
              </li>
              <li>
                Applicant data processed only under customer instruction.
              </li>
              <li>
                Legal disclosures only when required by law.
              </li>
            </ul>
          }
        />

        {/* 5–9 Remaining Sections */}
        <PolicySection
          title="5. Data Retention"
          content={
            <p>
              We retain data only as long as necessary for service delivery or
              legal compliance. Customers may export or request deletion anytime.
            </p>
          }
        />

        <PolicySection
          title="6. Security"
          content={
            <p>
              We apply encryption, access controls, monitoring, and best-practice
              safeguards. In case of a data incident, affected users and
              regulators will be notified as required.
            </p>
          }
        />

        <PolicySection
          title="7. International Transfers"
          content={
            <p>
              Data may be transferred globally. We use legal safeguards such as
              Standard Contractual Clauses for international transfers.
            </p>
          }
        />

        <PolicySection
          title="8. Your Rights & Controls"
          content={
            <ul className="list-disc ml-6 space-y-2">
              <li>Access, rectify, delete or export your data.</li>
              <li>Restrict or object to processing.</li>
              <li>Withdraw consent for marketing.</li>
              <li>
                Contact:{" "}
                <a
                  href="mailto:support@winixco.com"
                  className="text-blue-600 underline"
                >
                  support@winixco.com
                </a>
              </li>
            </ul>
          }
        />

        <PolicySection
          title="9. Children"
          content={
            <p>
              Our service is not intended for children under 16. Contact us if
              you believe a child has provided data.
            </p>
          }
        />
      </section>
    </div>
  );
}

/* ---------------------- REUSABLE SECTION COMPONENT ---------------------- */

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
