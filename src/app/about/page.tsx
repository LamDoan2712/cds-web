"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Handshake, Target, BarChart3 } from "lucide-react";
import TeamSection from "@/components/TeamSection";
import FeedbackCarousel from "@/components/FeedbackCarousel";
import SloganBanner from "@/components/SloganBanner";
import CTASection from "@/components/CTASection";

const achievements = [
  { v: "20B+", l: "Views on all platforms" },
  { v: "10+", l: "Global strategy partners" },
  { v: "100+", l: "Branding campaigns" },
  { v: "5K+", l: "Media channels managed" },
  { v: "10K+", l: "Songs distributed globally" },
  { v: "99.9%", l: "System uptime" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-grid">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-soft blur-3xl opacity-60 pointer-events-none" />
        <div className="container-x relative pt-16 md:pt-24 pb-16 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">
              About us
            </span>
            <h1 className="font-display mt-4 text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
              Driving <span className="text-brand">scalable digital growth</span> for modern brands.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted">
              An integrated approach combining marketing, AI, and technology to
              deliver measurable results in competitive global markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our story */}
      <section className="container-x py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">
              Our story
            </span>
            <h2 className="font-display mt-3 text-4xl md:text-5xl font-bold leading-tight">
              Built from bold ideas, <br /> scaled with discipline.
            </h2>
            <p className="mt-6 text-muted leading-relaxed">
              We exist at the intersection of creativity and technology. Over
              years of hands-on work with global brands, artists, and growth
              teams, we&apos;ve developed a playbook for building digital
              ecosystems that actually compound — not just campaigns that come
              and go.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              From content automation to platform development and global
              distribution, every solution is designed to accelerate digital
              growth and deliver measurable business outcomes.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-6 gap-4">
            {[
              { span: "col-span-4 row-span-2 aspect-square", icon: <Handshake size={28} />, label: "Partnership" },
              { span: "col-span-2 aspect-square", icon: <Target size={22} />, label: "Strategy" },
              { span: "col-span-2 aspect-square", icon: <BarChart3 size={22} />, label: "Growth" },
            ].map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${b.span} rounded-3xl p-6 flex flex-col justify-between ${
                  i === 0
                    ? "bg-black text-white"
                    : i === 1
                    ? "bg-brand text-white"
                    : "bg-surface border border-border"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    i === 0 ? "bg-white/10" : i === 1 ? "bg-white/15" : "bg-brand-soft text-brand"
                  }`}
                >
                  {b.icon}
                </div>
                <div className="font-display font-bold text-lg">{b.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-surface py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">
                Achievements
              </span>
              <h2 className="font-display mt-3 text-4xl md:text-5xl font-bold leading-tight">
                What we&apos;ve got so far.
              </h2>
            </div>
            <p className="text-muted max-w-md">
              Real numbers from campaigns, channels, and platforms we&apos;ve
              built with partners across the globe.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {achievements.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.06 }}
                className="rounded-3xl bg-white border border-border p-8 hover:border-brand transition-colors"
              >
                <div className="font-display text-5xl font-bold">{s.v}</div>
                <div className="text-sm text-muted mt-2">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SloganBanner
        slogan="How we develop — strategy, tech, and creative as one system."
        keywords={["Insight", "Build", "Scale", "Optimize"]}
      />

      <TeamSection />

      <FeedbackCarousel />

      <section className="container-x py-20">
        <div className="rounded-3xl border border-border bg-white p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-bold">
              Let&apos;s build something worth scaling.
            </h3>
            <p className="mt-2 text-muted">Explore our services or get in touch.</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/services"
              className="rounded-full bg-brand text-white px-6 py-3 text-sm font-medium hover:bg-brand-dark transition-colors inline-flex items-center gap-2"
            >
              Our services <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-brand hover:text-brand transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
