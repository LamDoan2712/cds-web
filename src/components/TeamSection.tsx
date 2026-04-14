"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { LinkedinIcon } from "./icons/Social";

type Member = {
  role: string;
  name: string;
  short: string;
  bio: string[];
};

const team: Member[] = [
  {
    role: "CEO",
    name: "Harry Doan",
    short:
      "Founder with over 20 years of cross-industry experience, pioneering sustainable digital growth platforms.",
    bio: [
      "With over 20 years of experience across multiple industries, I have been passionate about building businesses that combine creativity, scalability, and long-term impact. My career began at global organizations such as Unilever, Prudential, and VPBank, where I developed a strong foundation in business strategy, market development, and resource management.",
      "Over time, I shifted my focus toward the media and entertainment space — building, investing in, and supporting the growth of media companies, artist management, and content production ecosystems. I believe that sustainable success comes from the ability to connect strategy, technology, and creativity into one cohesive growth system.",
      "As a Founder, my mission is to drive sustainable digital growth by leveraging innovative thinking, scalable business models, and the power of AI and content. I aim to create not just businesses, but platforms that empower brands, creators, and communities to grow and thrive in an ever-evolving digital world.",
    ],
  },
  {
    role: "CTO",
    name: "Alan Doan",
    short:
      "15+ years leading Tech Development, building and scaling systems that handle billions of monthly views.",
    bio: [
      "I am a CTO in the Media Tech industry with over 15 years of experience leading Tech Development, building and scaling systems that handle billions of monthly views, ensuring >99.9% uptime while optimizing infrastructure costs.",
      "I specialize in microservices architecture, cloud platforms (AWS/GCP), CI/CD, data pipelines, and applying AI/ML to automate content production, improving operational efficiency by 30–50%.",
      "I drive technology strategy aligned with business growth, implement agile/scrum practices, and lead engineering teams to reduce time-to-market and maximize product ROI.",
    ],
  },
  {
    role: "CMO",
    name: "Thao Le",
    short:
      "20+ years in Digital Marketing including a tenure as Project Manager at WPP Media.",
    bio: [
      "With over 20 years of experience in Digital Marketing, including a tenure as a Project Manager at WPP Media, leading large-scale, multi-channel campaigns across global markets.",
      "I specialize in performance marketing, brand strategy, and data-driven growth, leveraging MarTech, analytics, and automation to optimize CAC, LTV, and conversion rates.",
      "I align marketing strategy with business objectives, build high-performing teams, and drive scalable growth through integrated media, content, and digital ecosystems.",
    ],
  },
];

export default function TeamSection() {
  const [active, setActive] = useState<Member | null>(null);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section className="container-x py-20 md:py-28">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">
          Trusted by members
        </span>
        <h2 className="font-display mt-3 text-4xl md:text-5xl font-bold leading-tight">
          Meet the leadership.
        </h2>
        <p className="mt-4 text-muted">
          Click on any profile to see the full story.
        </p>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {team.map((m, i) => (
          <motion.button
            key={m.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setActive(m)}
            className="group relative overflow-hidden rounded-3xl bg-surface border border-border text-left p-7 hover:border-brand hover:shadow-xl transition-all"
          >
            <div className="absolute top-7 right-7 w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-colors">
              <ArrowUpRight size={16} />
            </div>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center text-white font-display font-bold text-2xl">
              {m.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div className="mt-6">
              <div className="text-xs uppercase tracking-wider text-brand font-semibold">
                {m.role}
              </div>
              <div className="font-display text-2xl font-bold mt-1">
                {m.name}
              </div>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {m.short}
              </p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-8 md:p-10"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface hover:bg-brand hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand to-brand-dark flex items-center justify-center text-white font-display font-bold text-2xl shrink-0">
                  {active.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-brand font-semibold">
                    {active.role}
                  </div>
                  <h3 className="font-display text-3xl font-bold">{active.name}</h3>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                {active.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:border-brand hover:text-brand transition-colors"
                >
                  <LinkedinIcon width={14} height={14} /> LinkedIn
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
