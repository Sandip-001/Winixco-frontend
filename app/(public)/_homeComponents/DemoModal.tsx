"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const blockedDomains = [
  "gmail.com",
  "yahoo.com",
  "outlook.com",
  "hotmail.com",
  "icloud.com",
];

export default function DemoModal({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    company: "",
    designation: "",
    solution: "",
    description: "",
  });

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

      setOpen(false);
      setForm({
        name: "",
        email: "",
        phoneNumber: "",
        company: "",
        designation: "",
        solution: "",
        description: "",
      });
    } catch (err) {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent
        className="
    w-[95%] sm:w-full
    max-w-lg
    p-0
    rounded-2xl
    overflow-hidden
    max-h-[90vh]
    flex flex-col
  "
      >
        {/* Header (Fixed) */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5 sm:p-6 text-white shrink-0">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold">
              Book a Demo
            </DialogTitle>
            <p className="text-xs sm:text-sm opacity-90">
              See how Winixco can transform your hiring process
            </p>
          </DialogHeader>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 space-y-4">
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
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

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
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
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
              onValueChange={(value) => setForm({ ...form, solution: value })}
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
        </div>

        {/* Sticky Footer Button */}
        <div className="p-4 sm:p-5 border-t bg-white">
          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full text-base sm:text-lg py-5 rounded-xl bg-blue-600 hover:bg-blue-700"
          >
            {loading ? "Submitting..." : "Submit Request"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
