"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Megaphone,
  Bot,
  Code2,
  Music,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const capabilities = [
  {
    slug: "marketing",
    title: "360° Marketing",
    desc: "Full-funnel campaigns across paid, owned, and earned media channels.",
    icon: Megaphone,
  },
  {
    slug: "ai-production",
    title: "AI Production",
    desc: "Scalable content creation using artificial intelligence for speed and efficiency.",
    icon: Bot,
  },
  {
    slug: "technology",
    title: "Technology (Tech)",
    desc: "Custom-built platforms, automation tools, and growth infrastructure.",
    icon: Code2,
  },
  {
    slug: "music-distribution",
    title: "Music Distribution",
    desc: "Global digital distribution and monetization across major streaming platforms.",
    icon: Music,
  },
  {
    slug: "media-buildup",
    title: "Media Build-up & Optimization",
    desc: "Channel development, audience growth, and performance optimization.",
    icon: TrendingUp,
  },
  {
    slug: "ai-content",
    title: "AI Content",
    desc: "AI-generated video, design, scriptwriting and multi-language content at scale.",
    icon: Sparkles,
  },
];

export default function CoreCapabilities() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">
          Our core capabilities
        </span>
        <h2 className="font-display mt-3 text-4xl md:text-5xl font-bold leading-tight">
          Integrated growth, <span className="text-brand">end-to-end.</span>
        </h2>
        <p className="mt-4 text-muted">
          Every capability is designed to accelerate digital growth and deliver
          measurable business outcomes.
        </p>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {capabilities.map((c, i) => (
          <motion.div
            key={c.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.06 }}
          >
            <Link
              href={`/services#${c.slug}`}
              className="group block h-full rounded-3xl border border-border bg-white p-7 hover:border-brand hover:shadow-lg hover:shadow-brand/5 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-brand-soft text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors">
                  <c.icon size={20} />
                </div>
                <span className="text-xs text-muted group-hover:text-brand transition-colors">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{c.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                Explore
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
