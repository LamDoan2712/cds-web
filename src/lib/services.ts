import {
  Bot,
  Megaphone,
  Music,
  TrendingUp,
  Code2,
  LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  short: string;
  icon: LucideIcon;
  features: string[];
  highlights: { value: string; label: string; note?: string }[];
  examples?: { label: string; url?: string; note?: string }[];
};

export const services: Service[] = [
  {
    slug: "ai-production",
    title: "AI Production",
    tagline: "AI Content at scale",
    short:
      "Scalable content production powered by artificial intelligence, enabling faster delivery, lower costs, and consistent quality.",
    icon: Bot,
    features: [
      "AI-generated video (short-form, ads, storytelling)",
      "AI image & design production",
      "Automated content creation at scale",
      "Scriptwriting & creative direction using AI",
      "Localization & multi-language content",
      "Content optimization based on performance data",
    ],
    highlights: [
      { value: "20B+", label: "Views on all platforms" },
      { value: "10+", label: "Strategy partners", note: "US, UK, Ukraine, India, Vietnam" },
    ],
    examples: [
      { label: "Short-form reel", url: "https://www.facebook.com/reel/1233052128386387" },
      { label: "AI storytelling", url: "https://www.facebook.com/reel/1388996576156428" },
      { label: "Ads production", url: "https://www.facebook.com/reel/830183149940508" },
    ],
  },
  {
    slug: "marketing",
    title: "360° Marketing",
    tagline: "Full-funnel growth",
    short:
      "End-to-end marketing solutions designed to drive customer acquisition, engagement, and revenue growth across all digital channels.",
    icon: Megaphone,
    features: [
      "Market research & audience insights",
      "Brand strategy & positioning",
      "Full-funnel campaign planning (Awareness → Conversion)",
      "Paid media (Meta, Google, TikTok, YouTube)",
      "SEO & content marketing",
      "Social media management",
      "Performance tracking & optimization (KPIs, ROI)",
    ],
    highlights: [
      { value: "100+", label: "Branding campaigns" },
      { value: "20+", label: "Entertainment campaigns" },
      { value: "360°", label: "Marketing solution" },
    ],
    examples: [
      {
        label: "Kitkat × TikTok (10M views)",
        url: "https://www.tiktok.com/@kitkat_vietnam/video/7558119989279083783",
      },
      {
        label: "The New Voice USA / Australia (100M views)",
        url: "https://www.facebook.com/TheNewVoiceUSA",
      },
      {
        label: "Ca Men Foods — 360° campaign",
        url: "https://www.facebook.com/camenfoods",
      },
    ],
  },
  {
    slug: "music-distribution",
    title: "Music Distribution",
    tagline: "Global reach for artists",
    short:
      "Global music distribution and monetization across major streaming platforms, helping artists and labels scale their audience and revenue.",
    icon: Music,
    features: [
      "Distribution to Spotify, Apple Music, YouTube Music, etc.",
      "Content management & release strategy",
      "Royalty collection & reporting",
      "Playlist pitching & promotion",
      "YouTube Content ID & monetization",
      "Artist branding & digital presence growth",
    ],
    highlights: [
      { value: "5+", label: "Official partners", note: "ADDA, WMG, UMG..." },
      { value: "10K+", label: "Songs released" },
    ],
  },
  {
    slug: "media-buildup",
    title: "Media Build-up & Optimization",
    tagline: "Owned channels that compound",
    short:
      "Building and scaling owned media channels to create sustainable digital growth ecosystems.",
    icon: TrendingUp,
    features: [
      "Channel setup & branding (YouTube, TikTok, Facebook, Websites)",
      "Content strategy & publishing system",
      "Audience growth & community building",
      "SEO for media platforms (YouTube SEO, Social SEO)",
      "Performance analytics & continuous optimization",
      "Monetization strategy (ads, affiliate, products, services)",
    ],
    highlights: [
      { value: "1,200+", label: "TikTok channels" },
      { value: "1,911+", label: "Meta channels" },
      { value: "400+", label: "YouTube channels" },
      { value: "1,000+", label: "Instagram channels" },
      { value: "230+", label: "Snapchat channels" },
    ],
  },
  {
    slug: "technology",
    title: "Technology Development",
    tagline: "Infrastructure for growth",
    short:
      "Custom-built technology solutions that support automation, scalability, and digital growth infrastructure.",
    icon: Code2,
    features: [
      "Custom platforms & CMS systems",
      "Marketing automation systems",
      "Data tracking & analytics integration",
      "API integrations & system connectivity",
      "AI tool integration for business operations",
    ],
    highlights: [
      { value: "Internal", label: "System for Resource / Channel / Performance" },
      { value: "Automation", label: "AI creative video tool" },
    ],
  },
];
