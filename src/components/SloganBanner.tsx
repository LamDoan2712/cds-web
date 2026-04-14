export default function SloganBanner({
  slogan = "Your digital success starts here.",
  keywords = ["Scale", "Create", "Automate", "Grow"],
}: {
  slogan?: string;
  keywords?: string[];
}) {
  return (
    <section className="bg-black text-white py-20 md:py-24">
      <div className="container-x text-center">
        <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          {slogan}
        </h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {keywords.map((k) => (
            <span
              key={k}
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/80 hover:border-brand hover:text-brand hover:bg-white/5 transition-colors"
            >
              {k}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
