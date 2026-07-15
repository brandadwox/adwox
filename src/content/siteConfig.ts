export const siteConfig = {
  name: "ADWOX",
  fullName: "ADWOX Advertising Network",
  tagline: "Your Brand. Everywhere People Go.",
  headline: "India's Next-Generation Digital Outdoor Advertising Network",
  subheadline:
    "Transforming outdoor advertising with innovative LED display solutions that deliver unmatched visibility, flexibility, and impact.",
  ctaTagline: "We Don't Just Advertise, We Move Brands",
  description:
    "ADWOX Advertising Network is transforming outdoor advertising with innovative LED display solutions that deliver unmatched visibility, flexibility, and impact. We connect brands with millions of people through strategically placed LED displays on city auto rickshaws, school buses, and apartment entrance locations.",

  // Contact
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9441673791",
  phones: ["+91 94416 73791", "+91 83338 03377"],
  email: "brand.adwox@gmail.com",
  website: "www.adwox.in",

  // Social links
  socials: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
    youtube: "#",
  },

  // SEO
  seo: {
    title: "ADWOX Advertising Network | India's Next-Generation Digital Outdoor Advertising",
    description:
      "ADWOX Advertising Network is transforming outdoor advertising with innovative LED display solutions that deliver unmatched visibility, flexibility, and impact.",
    keywords: [
      "outdoor advertising",
      "DOOH",
      "OOH media",
      "LED advertising",
      "apartment entrance branding",
      "school bus advertising",
      "auto advertising",
      "transit advertising",
      "digital signage",
      "brand visibility",
      "India advertising network",
    ],
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://adwox.vercel.app",
  },

  // Founder
  founder: {
    name: "Alim Mohammad",
    role: "Founder & CEO",
    tagline: "Visionary Leader | Entrepreneur | Innovator",
    bio: "ADWOX Advertising Network is one of India's emerging Digital Out-of-Home (DOOH) media companies, offering premium LED display advertising solutions across high-traffic urban environments. We specialize in installing high-brightness LED display systems on moving and fixed advertising platforms that provide continuous brand visibility throughout the day and night. Whether your audience is travelling through busy city roads, entering residential communities, or commuting on school transportation, ADWOX ensures your brand stays visible where it matters most. We believe outdoor advertising should be intelligent, flexible, measurable, and visually powerful.",
    mission:
      "To empower brands with innovative, affordable, and high-impact outdoor advertising solutions through city autos, school buses, and apartment entrance LED display networks.",
    vision:
      "To become India's most trusted Digital Outdoor Advertising Network by building a nationwide ecosystem of intelligent LED advertising platforms that help businesses connect with people in everyday life.",
    values: [
      "Innovation",
      "Quality",
      "Transparency",
      "Reliability",
      "Customer Success",
      "Integrity",
      "Professional Excellence",
    ],
  },
} as const;
