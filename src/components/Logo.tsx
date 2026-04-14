import Image from "next/image";
import Link from "next/link";

type Variant = "header" | "footer";

export default function Logo({
  className = "",
  variant = "footer",
}: {
  className?: string;
  variant?: Variant;
}) {
  if (variant === "header") {
    return (
      <Link href="/" className={`inline-flex flex-col group ${className}`}>
        <div className="relative h-10 md:h-12 w-[150px] md:w-[180px] transition-transform duration-500 group-hover:scale-[1.03]">
          <Image
            src="/logo-vuong.png"
            alt="Commercial Digitals"
            fill
            priority
            unoptimized
            className="object-contain object-left"
          />
        </div>
        <div className="mt-0.5 pl-[10px] text-[10px] font-plain text-brand tracking-tight leading-none">
          Solutions for the Digital Era
        </div>
      </Link>
    );
  }

  return (
    <Link href="/" className={`flex items-center gap-2.5 group ${className}`}>
      <div className="relative w-9 h-9 md:w-10 md:h-10 transition-transform duration-500 group-hover:rotate-12">
        <Image
          src="/logo.png"
          alt="Commercial Digitals"
          fill
          className="object-contain"
        />
      </div>
      <div className="leading-tight">
        <div className="font-display font-bold text-[14px] md:text-[15px] tracking-tight text-brand">
          COMMERCIAL
        </div>
        <div className="font-display font-bold text-[14px] md:text-[15px] tracking-tight text-brand -mt-1">
          DIGITALS
        </div>
        <div className="mt-0.5 text-[9px] md:text-[10px] font-plain text-muted/80 tracking-tight">
          Solutions for the Digital Era
        </div>
      </div>
    </Link>
  );
}
