"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const blockedDomains = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "icloud.com",
];

// Contact Form Component
const ContactForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    company: "",
    designation: "",
    solution: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // 🔹 Business Email Validation
  const isBusinessEmail = (email: string) => {
    const domain = email.split("@")[1];
    return domain && !blockedDomains.includes(domain.toLowerCase());
  };

  const handleSubmit = async () => {
    if (
      !form.name ||
      !form.email ||
      !form.phoneNumber ||
      !form.company ||
      !form.designation ||
      !form.solution
    ) {
      toast.error("Please fill all required fields.");
      return;
    }

    if (!isBusinessEmail(form.email)) {
      toast.error("Please use your business email (no Gmail/Yahoo etc.)");
      return;
    }

    try {
      setLoading(true);

      // 🔹 Call API (you will create below)
      const res = await fetch("/api/demo-lead", {
        method: "POST",
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      toast.success("Demo request submitted successfully!");

      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phoneNumber: "",
        company: "",
        designation: "",
        solution: "",
        description: "",
      });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-3xl mx-auto mb-20"
    >
      <Card className="bg-white border-gray-200 shadow-xl">
        <CardContent className="p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Send us a message
            </h2>
            <p className="text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Thank you!
              </h3>
              <p className="text-gray-600">
                Your message has been sent successfully.
              </p>
            </motion.div>
          ) : (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label className="mb-2 block">Name *</Label>
                  <Input
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div>
                  <Label className="mb-2 block">Business Email *</Label>
                  <Input
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label className="mb-2 block">Phone Number *</Label>
                  <Input
                    type="tel"
                    placeholder="+91 9876543210"
                    value={form.phoneNumber}
                    onChange={(e) =>
                      setForm({ ...form, phoneNumber: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label className="mb-2 block">Company Name *</Label>
                  <Input
                    placeholder="Your company"
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <Label className="mb-2 block">Designation *</Label>
                <Input
                  placeholder="Your role"
                  value={form.designation}
                  onChange={(e) =>
                    setForm({ ...form, designation: e.target.value })
                  }
                />
              </div>

              <div>
                <Label className="mb-2 block">Solution *</Label>
                <Select
                  onValueChange={(value) =>
                    setForm({ ...form, solution: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select solution" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ATS">ATS</SelectItem>
                    <SelectItem value="HRMS">HRMS</SelectItem>
                    <SelectItem value="CRM">CRM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="mb-2 block">Description (Optional)</Label>
                <Textarea
                  placeholder="Tell us your requirement..."
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                />
              </div>

              <Button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-[#2563eb] hover:from-purple-700 hover:to-pink-700 text-white"
              >
                {loading ? "Submitting..." : "Submit Request"}{" "}
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
