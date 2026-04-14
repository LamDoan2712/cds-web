import type { Metadata } from "next";
import { Ysabeau, Ysabeau_SC } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ysabeau = Ysabeau({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const ysabeauDisplay = Ysabeau_SC({
  variable: "--font-display",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Commercial Digitals — Solution for the Digital Era",
  description:
    "A growth-focused solutions provider specializing in Digital Growth, 360° Marketing, AI Production, Technology Development, Music Distribution, and Media Build-up & Optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ysabeau.variable} ${ysabeauDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
