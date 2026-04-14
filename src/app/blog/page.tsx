"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Clock, ArrowUpRight } from "lucide-react";

type Post = {
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
};

const posts: Post[] = [
  {
    title: "How AI Production is reshaping short-form content",
    category: "AI Production",
    excerpt:
      "A look at how AI-powered pipelines are collapsing content production timelines from weeks to hours, without sacrificing brand consistency.",
    readTime: "6 min read",
    date: "Apr 8, 2026",
  },
  {
    title: "Full-funnel marketing in a fragmented channel landscape",
    category: "Marketing",
    excerpt:
      "Why treating awareness, engagement, and conversion as one integrated system consistently outperforms siloed campaign thinking.",
    readTime: "8 min read",
    date: "Apr 2, 2026",
  },
  {
    title: "Scaling owned media to 5,000+ channels — lessons learned",
    category: "Media Build-up",
    excerpt:
      "Inside the operational playbook for managing thousands of channels across TikTok, Meta, YouTube, Instagram and Snapchat.",
    readTime: "10 min read",
    date: "Mar 28, 2026",
  },
  {
    title: "The economics of global music distribution in 2026",
    category: "Music",
    excerpt:
      "A breakdown of streaming payouts, Content ID monetization, and the playlist pitching landscape for independent artists and labels.",
    readTime: "7 min read",
    date: "Mar 20, 2026",
  },
  {
    title: "Building internal systems that actually scale",
    category: "Technology",
    excerpt:
      "How we approach resource, channel, and performance management with custom-built platforms designed around real workflow.",
    readTime: "9 min read",
    date: "Mar 14, 2026",
  },
  {
    title: "From 0 to 10M views: a 360° marketing case study",
    category: "Marketing",
    excerpt:
      "A step-by-step look at how an integrated campaign delivered 10M views on TikTok within a single sprint for a global FMCG brand.",
    readTime: "12 min read",
    date: "Mar 5, 2026",
  },
];

const categories = ["All", "AI Production", "Marketing", "Media Build-up", "Music", "Technology"];

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = posts.filter((p) => {
    const matchesQuery =
      !query ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(query.toLowerCase());
    const matchesCat = cat === "All" || p.category === cat;
    return matchesQuery && matchesCat;
  });

  return (
    <>
      <section className="relative overflow-hidden bg-grid">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-soft blur-3xl opacity-60 pointer-events-none" />
        <div className="container-x relative pt-16 md:pt-24 pb-8 md:pb-12">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">
              Blog
            </span>
            <h1 className="font-display mt-4 text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
              Field notes on <span className="text-brand">digital growth.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted">
              Strategy, operations, and craft — straight from our work with
              global brands, creators, and platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-full border border-border bg-white pl-12 pr-5 py-3.5 text-sm focus:border-brand focus:outline-none transition-colors"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  cat === c
                    ? "bg-brand text-white"
                    : "border border-border text-muted hover:border-brand hover:text-brand"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-3xl border border-border bg-white overflow-hidden hover:border-brand hover:shadow-xl transition-all"
            >
              <div className="relative aspect-[5/3] bg-gradient-to-br from-brand-soft via-surface to-white overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-50" />
                <div className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-medium">
                  {p.category}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold leading-snug group-hover:text-brand transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
                  {p.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between text-xs text-muted">
                  <span>{p.date}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock size={12} /> {p.readTime}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center text-muted">
            No articles found. Try a different keyword.
          </div>
        )}
      </section>
    </>
  );
}
