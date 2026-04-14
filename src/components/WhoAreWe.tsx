"use client";

import { motion } from "framer-motion";
import { Sparkles, Cpu, Users } from "lucide-react";

export default function WhoAreWe() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative aspect-[5/4] rounded-3xl overflow-hidden bg-gradient-to-br from-black via-neutral-900 to-brand-dark">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-3 p-8">
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm"
                    style={{
                      background:
                        i % 5 === 0
                          ? "#c80815"
                          : i % 3 === 0
                          ? "rgba(255,255,255,0.08)"
                          : "rgba(255,255,255,0.04)",
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="text-xs opacity-70">Gen Z × Gen Y</div>
              <div className="font-display text-xl font-bold mt-1">
                Creativity meets strategy
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex absolute -bottom-6 -right-6 items-center gap-3 bg-white rounded-2xl border border-border shadow-xl p-4"
          >
            <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
              <Sparkles size={18} />
            </div>
            <div>
              <div className="font-display font-bold text-sm">AI + Content</div>
              <div className="text-xs text-muted">High-impact</div>
            </div>
          </motion.div>
        </motion.div>

        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">
            Who are we?
          </span>
          <h2 className="font-display mt-3 text-4xl md:text-5xl font-bold leading-tight">
            The balance between <br /> innovation and execution.
          </h2>
          <p className="mt-6 text-muted leading-relaxed">
            Our team combines the bold creativity and agility of Gen Z with the
            strategic thinking and experience of Gen Y, creating a balanced
            approach between innovation and execution.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            By integrating advanced technology (Tech & AI) with high-impact
            content creation, we deliver scalable, performance-driven solutions
            that fuel sustainable digital growth.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <Feature icon={<Cpu size={18} />} title="Tech & AI" desc="Advanced systems built for scale" />
            <Feature icon={<Users size={18} />} title="Gen Z × Gen Y" desc="Creative agility + strategy" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-3 rounded-2xl border border-border bg-white p-4">
      <div className="w-10 h-10 shrink-0 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="font-display font-semibold">{title}</div>
        <div className="text-xs text-muted mt-0.5">{desc}</div>
      </div>
    </div>
  );
}
