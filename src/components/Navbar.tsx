"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20 md:h-24">
        <Logo variant="header" />

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  active
                    ? "text-brand"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 bg-brand rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-2.5 text-sm font-medium hover:bg-brand transition-colors"
          >
            Get started
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-full hover:bg-surface"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container-x py-4 flex flex-col gap-1">
            {links.map((l) => {
              const active =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-4 py-3 rounded-xl text-sm font-medium ${
                    active ? "bg-brand-soft text-brand" : "hover:bg-surface"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-black text-white px-5 py-3 text-sm font-medium"
            >
              Get started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
