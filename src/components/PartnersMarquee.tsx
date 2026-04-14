import Image from "next/image";

type Partner = {
  name: string;
  src: string;
  w: number;
  h: number;
  /** Visual scale to compensate for empty padding baked into the source image */
  scale?: number;
};

const partners: Partner[] = [
  { name: "APP ROI", src: "/LOGO_PARTNER/IMG_7238.PNG", w: 1080, h: 1080, scale: 1.35 },
  { name: "ADTECK", src: "/LOGO_PARTNER/ADTECK.PNG", w: 1080, h: 1080, scale: 1.2 },
  { name: "Alive", src: "/LOGO_PARTNER/ALIVE.png", w: 200, h: 200, scale: 1.1 },
  { name: "BigFish", src: "/LOGO_PARTNER/BIGFISH.png", w: 1315, h: 1275 },
  { name: "Chin Media", src: "/LOGO_PARTNER/CHIN.PNG", w: 1080, h: 1080, scale: 1.25 },
  { name: "DAO", src: "/LOGO_PARTNER/DAO.PNG", w: 1080, h: 1080, scale: 1.15 },
  { name: "Haustek", src: "/LOGO_PARTNER/HAUSTEK.PNG", w: 1080, h: 1080, scale: 1.1 },
  { name: "Kind", src: "/LOGO_PARTNER/KIND.PNG", w: 1080, h: 1080, scale: 1.5 },
  { name: "Orin", src: "/LOGO_PARTNER/ORIN.PNG", w: 1080, h: 1080, scale: 1.35 },
  { name: "Rush Media", src: "/LOGO_PARTNER/RUSHMEDIA.png", w: 1042, h: 417 },
  { name: "Tubrr", src: "/LOGO_PARTNER/TUBRR.png", w: 2048, h: 2048, scale: 1.1 },
  { name: "YinYang", src: "/LOGO_PARTNER/YINYANG.png", w: 964, h: 223 },
];

export default function PartnersMarquee() {
  const loop = [...partners, ...partners];
  return (
    <section className="border-y border-border bg-background py-14">
      <div className="container-x">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted mb-10">
          Trusted by global partners
        </p>
      </div>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-14 md:gap-20 items-center animate-marquee w-max">
          {loop.map((p, i) => (
            <div
              key={i}
              title={p.name}
              className="flex items-center justify-center h-20 md:h-24 w-[180px] md:w-[220px] shrink-0"
            >
              <Image
                src={p.src}
                alt={p.name}
                width={p.w}
                height={p.h}
                sizes="260px"
                style={{ transform: p.scale ? `scale(${p.scale})` : undefined }}
                className="max-h-full max-w-full w-auto h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
