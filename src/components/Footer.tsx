import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { FacebookIcon, LinkedinIcon } from "./icons/Social";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo variant="header" />
            <p className="mt-4 text-sm text-muted max-w-xs">
              Solutions for the Digital Era. Driving scalable digital growth
              for modern brands with AI, marketing, and technology.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted hover:text-brand">Home</Link></li>
              <li><Link href="/about" className="text-muted hover:text-brand">About us</Link></li>
              <li><Link href="/services" className="text-muted hover:text-brand">Services</Link></li>
              <li><Link href="/blog" className="text-muted hover:text-brand">Blog</Link></li>
              <li><Link href="/contact" className="text-muted hover:text-brand">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand" />
                <span>17 Ho Hao Hon Street, Cau Ong Lanh Ward, Ho Chi Minh City, Viet Nam</span>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-brand" />
                <a href="mailto:contact@commercialdigitals.com" className="hover:text-brand">
                  contact@commercialdigitals.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Follow us</h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/commercialdigitals"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon width={16} height={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-brand hover:text-white hover:border-brand transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon width={16} height={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} Commercial Digitals. All rights reserved.</p>
          <p>Solution for the Digital Era.</p>
        </div>
      </div>
    </footer>
  );
}
