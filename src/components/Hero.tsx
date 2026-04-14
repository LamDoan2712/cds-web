"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-surface pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-soft blur-3xl opacity-70 pointer-events-none" />

      <div className="container-x relative pt-16 md:pt-24 pb-20 md:pb-32">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted"
            >
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              Solution for the Digital Era
            </motion.div>

            <h1 className="font-display mt-6 text-5xl md:text-7xl lg:text-[88px] font-bold leading-[0.95] tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="block"
              >
                SOLUTION
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="block"
              >
                FOR <span className="text-brand">THE</span>
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="block text-gradient"
              >
                DIGITAL ERA
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 text-lg md:text-xl text-muted max-w-xl"
            >
              Your digital success starts here. We help brands, creators, and
              enterprises scale faster, smarter, and more sustainably with AI,
              marketing, and technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-full bg-brand text-white px-6 py-3.5 text-sm font-medium hover:bg-brand-dark transition-colors"
              >
                Choose services
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-medium hover:border-brand hover:text-brand transition-colors"
              >
                About us
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl"
            >
              {[
                { v: "20B+", l: "views" },
                { v: "10+", l: "global partners" },
                { v: "100+", l: "campaigns" },
                { v: "10K+", l: "songs distributed" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl md:text-3xl font-bold">
                    {s.v}
                  </div>
                  <div className="text-xs text-muted mt-1">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <AnimatedLogo />
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedLogo() {
  return (
    <div className="relative aspect-square max-w-[420px] mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-soft via-background to-surface border border-border shadow-xl shadow-black/5 overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid opacity-40" />

        {/* Concentric pulse rings */}
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: [0, 0.35, 0], scale: [0.4, 1.4, 1.8] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-brand"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: [0, 0.25, 0], scale: [0.4, 1.6, 2.2] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-brand"
        />

        {/* Real logo — assembles from scale + rotate */}
        <motion.div
          initial={{ opacity: 0, scale: 0.4, rotate: -45 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 14, delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-56 md:h-56 animate-float"
        >
          <Image
            src="/logo.png"
            alt="Commercial Digitals logo"
            fill
            priority
            className="object-contain drop-shadow-xl"
          />
        </motion.div>

        <div className="absolute top-6 left-6 text-xs font-medium text-muted">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            Live
          </span>
        </div>
        <div className="absolute bottom-6 right-6 text-right">
          <div className="font-display text-xl font-bold">Digital Era</div>
          <div className="text-xs text-muted">Commercial Digitals</div>
        </div>
      </motion.div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute -top-4 -left-4 bg-background border border-border rounded-2xl p-3 shadow-lg animate-float"
      >
        <div className="text-[10px] text-muted">Growth</div>
        <div className="font-display font-bold">+230%</div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="absolute -bottom-4 -right-4 bg-black text-white rounded-2xl p-3 shadow-lg animate-float"
        style={{ animationDelay: "1s" }}
      >
        <div className="text-[10px] opacity-70">AI Production</div>
        <div className="font-display font-bold">Scale</div>
      </motion.div>
    </div>
  );
}
