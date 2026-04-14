"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react";
import { services, type Service } from "@/lib/services";

export default function ServicesList() {
  const [active, setActive] = useState<Service | null>(null);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
      history.replaceState(null, "", `#${active.slug}`);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const s = services.find((x) => x.slug === hash);
      if (s) setActive(s);
    }
  }, []);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((s, i) => (
          <motion.div
            key={s.slug}
            id={s.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-white hover:border-brand hover:shadow-xl hover:shadow-brand/5 transition-all"
          >
            <div className="p-8">
              <div className="flex items-start justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-brand-soft text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors">
                    <s.icon size={22} />
                  </div>
                  <div className="mt-5">
                    <div className="text-xs uppercase tracking-[0.2em] text-muted font-semibold">
                      {s.tagline}
                    </div>
                    <h3 className="mt-1 font-display text-2xl md:text-3xl font-bold">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted leading-relaxed max-w-md">
                      {s.short}
                    </p>
                  </div>
                </div>

                <span className="text-xs text-muted font-mono">
                  0{i + 1}
                </span>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <button
                  onClick={() => setActive(s)}
                  className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-5 py-2.5 text-sm font-medium hover:bg-brand-dark transition-colors"
                >
                  Choose <ArrowRight size={14} />
                </button>
                <button
                  onClick={() => setActive(s)}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:border-brand hover:text-brand transition-colors"
                >
                  Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-start md:items-center justify-center p-4 overflow-y-auto"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl rounded-3xl bg-white my-8"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface hover:bg-brand hover:text-white flex items-center justify-center transition-colors z-10"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand text-white flex items-center justify-center">
                    <active.icon size={22} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">
                      {active.tagline}
                    </div>
                    <h3 className="font-display text-3xl font-bold">{active.title}</h3>
                  </div>
                </div>

                <p className="mt-6 text-muted leading-relaxed">{active.short}</p>

                <div className="mt-8">
                  <h4 className="font-display font-bold text-lg">What&apos;s included</h4>
                  <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                    {active.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check size={16} className="text-brand mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {active.highlights.length > 0 && (
                  <div className="mt-8">
                    <h4 className="font-display font-bold text-lg">Highlights</h4>
                    <div className="mt-4 grid sm:grid-cols-2 gap-3">
                      {active.highlights.map((h) => (
                        <div
                          key={h.label}
                          className="rounded-2xl border border-border p-4"
                        >
                          <div className="font-display text-2xl font-bold">
                            {h.value}
                          </div>
                          <div className="text-sm text-muted mt-1">{h.label}</div>
                          {h.note && (
                            <div className="text-xs text-muted mt-1">{h.note}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {active.examples && active.examples.length > 0 && (
                  <div className="mt-8">
                    <h4 className="font-display font-bold text-lg">Examples</h4>
                    <div className="mt-4 space-y-2">
                      {active.examples.map((e) => (
                        <a
                          key={e.label}
                          href={e.url ?? "#"}
                          target="_blank"
                          rel="noreferrer"
                          className="group flex items-center justify-between rounded-2xl border border-border p-4 hover:border-brand transition-colors"
                        >
                          <div>
                            <div className="font-medium text-sm">{e.label}</div>
                            {e.note && (
                              <div className="text-xs text-muted">{e.note}</div>
                            )}
                          </div>
                          <ArrowUpRight
                            size={18}
                            className="text-muted group-hover:text-brand transition-colors"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    onClick={() => setActive(null)}
                    className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-6 py-3 text-sm font-medium hover:bg-brand-dark transition-colors"
                  >
                    Contact us <ArrowRight size={14} />
                  </Link>
                  <button
                    onClick={() => setActive(null)}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-brand hover:text-brand transition-colors"
                  >
                    Back to services
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
