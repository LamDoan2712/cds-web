"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { FacebookIcon } from "@/components/icons/Social";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <section className="relative overflow-hidden bg-grid">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-soft blur-3xl opacity-60 pointer-events-none" />
        <div className="container-x relative pt-16 md:pt-24 pb-12 md:pb-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">
              Contact
            </span>
            <h1 className="font-display mt-4 text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
              Ready to take your business to <span className="text-brand">the next level?</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted">
              We know how. Tell us about your project and we will contact you
              soon.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x pb-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <InfoCard
              icon={<MapPin size={18} />}
              title="Office"
              body="17 Ho Hao Hon Street, Cau Ong Lanh Ward, Ho Chi Minh City, Viet Nam."
            />
            <InfoCard
              icon={<Mail size={18} />}
              title="Email"
              body={
                <a
                  href="mailto:contact@commercialdigitals.com"
                  className="hover:text-brand transition-colors"
                >
                  contact@commercialdigitals.com
                </a>
              }
            />
            <InfoCard
              icon={<FacebookIcon width={18} height={18} />}
              title="Fanpage"
              body={
                <a
                  href="https://www.facebook.com/commercialdigitals"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand transition-colors break-all"
                >
                  facebook.com/commercialdigitals
                </a>
              }
            />

            <div className="rounded-3xl bg-black text-white p-8">
              <div className="font-display text-2xl font-bold leading-tight">
                Prefer a direct conversation?
              </div>
              <p className="mt-3 text-white/80 text-sm">
                Shoot us an email and a team member will reply within one
                business day.
              </p>
              <a
                href="mailto:contact@commercialdigitals.com"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:bg-brand hover:text-white transition-colors"
              >
                <Mail size={14} /> Email us
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-border bg-white p-8 md:p-10">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-brand-soft text-brand flex items-center justify-center mx-auto">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-bold">
                    Thank you!
                  </h3>
                  <p className="mt-3 text-muted max-w-md mx-auto">
                    We&apos;ve received your message. Our team will contact
                    you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:border-brand hover:text-brand transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold">
                      Start your project
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      Tell us a bit about what you&apos;re building.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Your name" name="name" placeholder="Full name" required />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="name@company.com"
                      required
                    />
                  </div>

                  <Field label="Phone" name="phone" placeholder="+84 ..." />

                  <div>
                    <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                      About your project
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about your goals, timeline, and any context that would help us prepare..."
                      className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm focus:border-brand focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand text-white px-7 py-3.5 text-sm font-medium hover:bg-brand-dark transition-colors disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send message"}
                    {!loading && <Send size={14} />}
                  </button>

                  <p className="text-xs text-muted">
                    We&apos;ll contact you within one business day.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-3xl border border-border bg-white p-6">
      <div className="w-11 h-11 shrink-0 rounded-2xl bg-brand-soft text-brand flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted font-semibold">
          {title}
        </div>
        <div className="mt-1 text-sm">{body}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm focus:border-brand focus:outline-none transition-colors"
      />
    </div>
  );
}
