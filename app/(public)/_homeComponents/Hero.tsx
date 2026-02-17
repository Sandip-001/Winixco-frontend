"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  Users,
  UserCog,
  Briefcase,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { home } from "@/services/Constants";

const Hero = () => {
  return (
    <section
      className="
        relative overflow-hidden
        bg-white
        pt-28 pb-20 md:pt-32 md:pb-24
      "
    >
      {/* Background grid + Java/Botticelli glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(15,23,42,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,1) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* Top glow */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0.35, scale: 0.95 }}
          animate={{ opacity: [0.25, 0.4, 0.25], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -top-24 -left-24 h-80 w-80 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(31,200,219,0.45) 0%, transparent 60%)",
          }}
        />

        {/* Bottom glow */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0.25, scale: 0.95 }}
          animate={{ opacity: [0.18, 0.32, 0.18], scale: [0.95, 1.08, 0.95] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute -bottom-32 right-0 h-[28rem] w-[28rem] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(127,216,231,0.55) 0%, transparent 62%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left: copy */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium"
              style={{
                borderColor: "rgba(31,200,219,0.35)",
                backgroundColor: "rgba(31,200,219,0.10)",
                color: "#065F67",
              }}
            >
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: "#1FC8DB" }}
              />
              All-in-one ATS • HRMS • CRM for modern teams
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl"
            >
              Hire faster with a{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #1FC8DB 0%, #7FD8E7 100%)",
                }}
              >
                clean ATS workflow
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl"
            >
              Winixco streamlines pipelines, interview scheduling, and employee
              operations—so your team can focus on decisions, not admin work.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-start justify-center"
            >
              <Button
                size="lg"
                className="rounded-xl px-7 py-6 text-base font-semibold shadow-md text-white"
                style={{
                  background:
                    "linear-gradient(90deg, #1FC8DB 0%, #7FD8E7 100%)",
                }}
              >
                Book a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-7 py-6 text-base font-semibold border-slate-300"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Overview
              </Button>
            </motion.div>

            {/* Trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-slate-600 lg:justify-start"
            >
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-500" />
                No credit card required
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-500" />
                14-day free trial
              </span>
            </motion.div>

            {/* Feature chips */}
            <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
              {[
                { icon: Users, title: "ATS", desc: "Pipeline + sourcing" },
                { icon: UserCog, title: "HRMS", desc: "Onboarding + reviews" },
                { icon: Briefcase, title: "CRM", desc: "Clients + pools" },
              ].map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-3"
                  style={{ borderColor: "rgba(15,23,42,0.10)" }}
                >
                  <div
                    className="grid h-10 w-10 place-items-center rounded-xl"
                    style={{ backgroundColor: "rgba(31,200,219,0.14)" }}
                  >
                    <f.icon className="h-5 w-5 text-slate-800" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-sm font-semibold text-slate-900">
                      {f.title}
                    </div>
                    <div className="text-xs text-slate-600">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right preview stays same, only accent changed */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="relative"
          >
            <div className="rounded-3xl border bg-white shadow-xl border-slate-200">
              {/* Fake topbar */}{" "}
              <div
                className="flex items-center justify-between border-b px-5 py-4"
                style={{ borderColor: "rgba(15,23,42,0.08)" }}
              >
                {" "}
                <div className="flex items-center gap-3">
                  {" "}
                  <div className="flex gap-1.5">
                    {" "}
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />{" "}
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />{" "}
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />{" "}
                  </div>{" "}
                  <div className="text-sm font-semibold text-slate-900">
                    Winixco ATS
                  </div>{" "}
                </div>{" "}
                <div className="text-xs text-slate-500">Today</div>{" "}
              </div>{" "}
              {/* Fake content */}{" "}
              <div className="p-5">
                {" "}
                <div className="grid gap-4 md:grid-cols-2">
                  {" "}
                  <div
                    className="rounded-2xl border p-4"
                    style={{ borderColor: "rgba(15,23,42,0.10)" }}
                  >
                    {" "}
                    <div className="text-xs font-semibold text-slate-500">
                      Pipeline
                    </div>{" "}
                    <div className="mt-2 space-y-2">
                      {" "}
                      {["Applied", "Screening", "Interview", "Offer"].map(
                        (t) => (
                          <div
                            key={t}
                            className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2"
                          >
                            {" "}
                            <span className="text-sm font-medium text-slate-800">
                              {t}
                            </span>{" "}
                            <span className="text-xs text-slate-500">
                              +12
                            </span>{" "}
                          </div>
                        ),
                      )}{" "}
                    </div>{" "}
                  </div>{" "}
                  <div
                    className="rounded-2xl border p-4"
                    style={{ borderColor: "rgba(15,23,42,0.10)" }}
                  >
                    {" "}
                    <div className="text-xs font-semibold text-slate-500">
                      Upcoming interviews
                    </div>{" "}
                    <div className="mt-3 space-y-2">
                      {" "}
                      {[
                        {
                          name: "A. Roy",
                          role: "Frontend Dev",
                          time: "11:00 AM",
                        },
                        {
                          name: "S. Das",
                          role: "Sales Lead",
                          time: "02:30 PM",
                        },
                        { name: "K. Singh", role: "HR Ops", time: "05:00 PM" },
                      ].map((x) => (
                        <div
                          key={x.name}
                          className="flex items-center justify-between rounded-xl px-3 py-2 bg-white"
                        >
                          {" "}
                          <div>
                            {" "}
                            <div className="text-sm font-semibold text-slate-900">
                              {x.name}
                            </div>{" "}
                            <div className="text-xs text-slate-500">
                              {x.role}
                            </div>{" "}
                          </div>{" "}
                          <div
                            className="rounded-full px-3 py-1 text-xs font-semibold"
                            style={{
                              backgroundColor: "rgba(5,245,228,0.18)",
                              color: "#064E47",
                            }}
                          >
                            {" "}
                            {x.time}{" "}
                          </div>{" "}
                        </div>
                      ))}{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                {/* Stats row from your constants */}{" "}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  {" "}
                  {home.stats.slice(0, 2).map((s, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border p-4"
                      style={{ borderColor: "rgba(15,23,42,0.10)" }}
                    >
                      {" "}
                      <div className="text-xs font-semibold text-slate-500">
                        {s.label}
                      </div>{" "}
                      <div className="mt-2 text-2xl font-extrabold text-slate-900">
                        {s.value}
                      </div>{" "}
                      <div className="mt-2 h-1.5 w-full rounded-full bg-slate-100">
                        {" "}
                        <div
                          className="h-1.5 rounded-full"
                          style={{ width: "62%", backgroundColor: "#05F5E4" }}
                        />{" "}
                      </div>{" "}
                    </div>
                  ))}{" "}
                </div>{" "}
              </div>
            </div>

            {/* Accent glow */}
            <div
              className="pointer-events-none absolute -inset-2 -z-10 rounded-[2rem] opacity-60 blur-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(31,200,219,0.45), rgba(127,216,231,0.35))",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
