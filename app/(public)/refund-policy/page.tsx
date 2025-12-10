"use client";

import { motion } from "framer-motion";
import { RotateCcw, FileWarning, CreditCard, Mail, Shield } from "lucide-react";

export default function RefundCancellationPage() {
  return (
    <div className="bg-gray-50">
      {/* HEADER SECTION */}
      <section className="bg-sky-200 text-gray-900 py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl">
            <RotateCcw className="w-10 h-10" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Refund & Cancellation Policy
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Clear, transparent, and customer-first refund guidelines for all Winixco SaaS users.
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-5xl mx-auto py-16 px-6 space-y-16">
        {/* 1. Cancellation */}
        <PolicySection
          icon={<FileWarning className="w-8 h-8 text-red-600" />}
          title="1. Cancellation"
          content={
            <p>
              Customers may cancel subscriptions at any time via the dashboard or by contacting
              support. Cancellation takes effect at the end of the current billing period unless
              otherwise stated in the plan. No partial-period refunds will be provided except as
              specified in this policy.
            </p>
          }
        />

        {/* 2. Refund Eligibility */}
        <PolicySection
          icon={<Shield className="w-8 h-8 text-rose-700" />}
          title="2. Refund Eligibility"
          content={
            <ul className="list-disc ml-6 space-y-2 leading-relaxed">
              <li>
                <strong>Technical failure:</strong> If a significant service outage occurs and Winixco
                fails to restore service in a reasonable timeframe, partial refunds or credits may be
                issued as per SLA.
              </li>
              <li>
                <strong>Duplicate or erroneous charges:</strong> Incorrect or duplicate charges will
                be refunded after verification.
              </li>
              <li>
                <strong>Trial-related charges:</strong> If a user is incorrectly charged at the end of
                a trial, the charge will be refunded upon timely request.
              </li>
            </ul>
          }
        />

        {/* 3. Non-Refundable Items */}
        <PolicySection
          icon={<CreditCard className="w-8 h-8 text-pink-600" />}
          title="3. Non-Refundable Items"
          content={
            <ul className="list-disc ml-6 space-y-2 leading-relaxed">
              <li>Monthly subscription fees</li>
              <li>Annual subscription fees once activated</li>
              <li>AI credits consumed</li>
              <li>Setup charges or onboarding fees</li>
              <li>Custom integrations</li>
              <li><strong>Cloud Storage charges</strong></li>
            </ul>
          }
        />

        {/* 4. Refund Process */}
        <PolicySection
          icon={<Mail className="w-8 h-8 text-red-700" />}
          title="4. Refund Process"
          content={
            <ol className="list-decimal ml-6 space-y-3 leading-relaxed">
              <li>
                Contact{" "}
                <a href="mailto:support@winixco.com" className="text-blue-600 underline">
                  support@winixco.com
                </a>{" "}
                with subscription or order details.
              </li>
              <li>We will acknowledge your request within 3 business days and may request documentation.</li>
              <li>
                If approved, refunds will be processed to the original payment method within 7–14
                business days (processing time varies by provider).
              </li>
            </ol>
          }
        />

        {/* 5. Chargebacks */}
        <PolicySection
          icon={<RotateCcw className="w-8 h-8 text-rose-800" />}
          title="5. Chargebacks"
          content={
            <p>
              Initiating a chargeback with your bank may result in temporary account suspension while
              we investigate. If a chargeback is found to be invalid, Winixco reserves the right to
              reinstate charges and recover outstanding fees.
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
