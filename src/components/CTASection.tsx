import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="container-x py-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand via-brand-dark to-black p-10 md:p-16 text-white">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="relative grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-display text-3xl md:text-5xl font-bold leading-tight">
              Ready to take your business to the next level?
            </h3>
            <p className="mt-4 text-white/80 max-w-lg">
              We know how. Tell us about your project and we will contact you
              soon.
            </p>
          </div>
          <div className="flex md:justify-end">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-4 text-sm font-semibold hover:bg-black hover:text-white transition-colors"
            >
              Start your project
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
