"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Commercial Digitals transformed how we scale content across markets. Their AI-driven approach cut our production time in half.",
    name: "Zak Lambert",
    role: "GM EMEA, Plaid",
  },
  {
    quote:
      "The campaign hit 10M views in the first week — a clean, strategic execution from brief to optimization.",
    name: "David Singlezzo",
    role: "Former CTO, Stripe",
  },
  {
    quote:
      "An integrated partner that connects strategy, tech, and creative. They understand both the data and the brand.",
    name: "Jessica Nguyen",
    role: "Head of Growth, JS Holding",
  },
  {
    quote:
      "They scaled our YouTube and TikTok channels from zero to millions of followers with a repeatable system.",
    name: "Michael Tran",
    role: "Artist Manager, Metub",
  },
];

export default function FeedbackCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[index];

  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">
            Feedback
          </span>
          <h2 className="font-display mt-3 text-4xl md:text-5xl font-bold leading-tight">
            What our clients say.
          </h2>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="relative rounded-3xl bg-white border border-border p-8 md:p-12 min-h-[260px] overflow-hidden">
            <Quote className="absolute top-6 right-6 text-brand-soft" size={64} />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                <p className="font-display text-xl md:text-2xl leading-relaxed">
                  “{t.quote}”
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand to-brand-dark text-white flex items-center justify-center font-display font-bold">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-display font-bold">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-brand" : "w-1.5 bg-border"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
