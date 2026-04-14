import ServicesList from "@/components/ServicesList";
import CTASection from "@/components/CTASection";

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-grid">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand-soft blur-3xl opacity-60 pointer-events-none" />
        <div className="container-x relative pt-16 md:pt-24 pb-12 md:pb-16">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">
              Services
            </span>
            <h1 className="font-display mt-4 text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
              The services we bring to <span className="text-brand">scale your brand.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted">
              Click on any service to see the full breakdown — what&apos;s
              included, the highlights, and campaign examples.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-12 md:py-16">
        <ServicesList />
      </section>

      <CTASection />
    </>
  );
}
