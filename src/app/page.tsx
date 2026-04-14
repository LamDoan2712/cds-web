import Hero from "@/components/Hero";
import PartnersMarquee from "@/components/PartnersMarquee";
import CompanyOverview from "@/components/CompanyOverview";
import WhoAreWe from "@/components/WhoAreWe";
import CoreCapabilities from "@/components/CoreCapabilities";
import SloganBanner from "@/components/SloganBanner";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <PartnersMarquee />
      <CompanyOverview />
      <WhoAreWe />
      <CoreCapabilities />
      <SloganBanner
        slogan="Your digital success starts here."
        keywords={["Strategy", "AI Production", "Technology", "Scale"]}
      />
      <CTASection />
    </>
  );
}
