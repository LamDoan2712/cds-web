"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { v: "20B+", l: "Views on all platforms" },
  { v: "10+", l: "Global strategy partners" },
  { v: "100+", l: "Branding campaigns" },
  { v: "5K+", l: "Media channels managed" },
  { v: "10K+", l: "Songs distributed" },
];

export default function CompanyOverview() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-6">
          <span className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">
            Company overview
          </span>
          <h2 className="font-display mt-3 text-4xl md:text-5xl font-bold leading-tight">
            A growth-focused <span className="text-brand">solutions provider</span>
            <br />for the digital economy.
          </h2>
          <p className="mt-6 text-muted leading-relaxed">
            We specialize in Digital Growth, 360° Marketing, AI Production,
            Technology Development, Music Distribution, and Media Build-up &
            Optimization.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Our mission is to help brands, creators, and enterprises scale
            faster, smarter, and more sustainably. By combining data-driven
            strategy, AI-powered content production, and advanced technology,
            we build integrated growth systems that maximize reach, engagement,
            and revenue.
          </p>
        </div>

        <div className="lg:col-span-3 relative flex items-center justify-center order-last lg:order-none">
          <FloatingLogo />
        </div>

        <div className="lg:col-span-3 grid gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-white p-5 hover:border-brand transition-colors"
            >
              <div className="font-display text-3xl font-bold">{s.v}</div>
              <div className="text-xs text-muted mt-1">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingLogo() {
  return (
    <div className="relative w-full aspect-square max-w-[280px]">
      {/* Halo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="absolute inset-4 rounded-full bg-brand-soft blur-2xl"
      />
      {/* Pulse ring */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.15, 0.35] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-6 rounded-full border-2 border-brand/40"
      />
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 70, damping: 12 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-40 h-40 md:w-48 md:h-48"
        >
          <Image
            src="/logo.png"
            alt="Commercial Digitals"
            fill
            className="object-contain drop-shadow-xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
