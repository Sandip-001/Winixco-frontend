"use client";

import { motion } from "framer-motion";
import { FileText, Scale, UserCheck, Wallet, Lock } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="bg-gray-50">
      {/* HEADER SECTION */}
      <section className="bg-[#2563eb] text-white py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl">
            <Scale className="w-10 h-10" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Terms & Conditions
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Please read these Terms carefully before using Winixco’s SaaS
            platform. By using our service, you agree to these terms.
          </p>
        </motion.div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-5xl mx-auto py-16 px-6 space-y-16">

        {/* INTRO */}
        <TermsSection
          icon={<FileText className="w-8 h-8 text-blue-600" />}
          title="Terms of Service (SaaS)"
          content={
            <p>
              <strong>Scope.</strong> These Terms govern your use of Winixco’s SaaS
              platform, including web application, APIs, and related services.
            </p>
          }
        />

        {/* 1. Account Registration */}
        <TermsSection
          icon={<UserCheck className="w-8 h-8 text-purple-600" />}
          title="1. Account Registration"
          content={
            <p>
              Customers must provide accurate information and keep account
              credentials secure. You are liable for all activity under your
              account.
            </p>
          }
        />

        {/* 2. Subscriptions & Billing */}
        <TermsSection
          icon={<Wallet className="w-8 h-8 text-blue-700" />}
          title="2. Subscriptions & Billing"
          content={
            <ul className="list-disc ml-6 space-y-2 leading-relaxed">
              <li>
                Subscriptions are offered on monthly or annual plans. Billing
                cycles begin on activation date.
              </li>
              <li>
                By subscribing you authorize Winixco (and our payment processors)
                to charge the payment method you provide for recurring fees until
                subscription cancellation.
              </li>
              <li>
                We may offer trial periods — trial usage and limits will be
                disclosed. At the end of a trial, charges begin automatically
                unless cancelled before the trial ends.
              </li>
            </ul>
          }
        />

        {/* 3. Non-Refundable Items */}
        <TermsSection
          icon={<Lock className="w-8 h-8 text-indigo-600" />}
          title="3. Non-Refundable Items"
          content={
            <div>
              <p className="mb-4">
                The following items are explicitly non-refundable once charged or
                consumed:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Monthly subscription fees</li>
                <li>Annual subscription fees once activated</li>
                <li>AI credits consumed</li>
                <li>Setup or onboarding fees</li>
                <li>Custom integrations</li>
                <li>
                  <strong>Cloud Storage charges</strong> (storage for customer data
                  and backups)
                </li>
              </ul>
            </div>
          }
        />

        {/* 4. Usage Limits */}
        <TermsSection
          title="4. Usage Limits & Fair Use"
          content={
            <p>
              Plans may include limits (users, API calls, AI credits, storage).
              Excess usage may be billed or throttled. Fraudulent or abusive use
              may result in suspension.
            </p>
          }
        />

        {/* 5. Customer Data */}
        <TermsSection
          title="5. Customer Data & Ownership"
          content={
            <p>
              Customers retain ownership of all uploaded recruitment data.
              Winixco processes such data only to provide services. Customers are
              responsible for obtaining necessary consents from job applicants
              and other data subjects.
            </p>
          }
        />

        {/* 6. Service Levels */}
        <TermsSection
          title="6. Service Levels & Support"
          content={
            <p>
              We aim for high availability but cannot guarantee uninterrupted
              service. SLAs and support response times depend on your subscription
              plan.
            </p>
          }
        />

        {/* 7. Intellectual Property */}
        <TermsSection
          title="7. Intellectual Property"
          content={
            <p>
              Winixco owns the Service, trademarks, and software. Customers
              receive a limited license to use the Service during their
              subscription.
            </p>
          }
        />

        {/* 8. Confidentiality */}
        <TermsSection
          title="8. Confidentiality"
          content={
            <p>
              Both parties must protect confidential information of the other and
              disclose it only when required to provide the Service or by law.
            </p>
          }
        />

        {/* 9. Limitations */}
        <TermsSection
          title="9. Limitations of Liability"
          content={
            <p>
              Winixco’s total liability will not exceed the fees paid in the 12
              months prior to a claim. We are not liable for indirect or
              consequential damages.
            </p>
          }
        />

        {/* 10. Termination */}
        <TermsSection
          title="10. Termination"
          content={
            <p>
              Either party may terminate subscriptions per agreed terms. Customers
              may export their data for a limited period after termination. Data
              may be deleted after this window.
            </p>
          }
        />

        {/* 11. Governing Law */}
        <TermsSection
          title="11. Governing Law & Jurisdiction"
          content={
            <p>
              These Terms are governed by the laws of <strong>India</strong>.
              Global customers agree to resolve disputes via arbitration in India
              or mutually agreed jurisdiction.
            </p>
          }
        />
      </section>
    </div>
  );
}

/* ---------------------- REUSABLE COMPONENT ---------------------- */

function TermsSection({
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
