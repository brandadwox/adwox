export const siteConfig = {
  name: "ADWOX",
  fullName: "ADWOX Advertising Network",
  tagline: "Your Brand. Everywhere.",
  headline: "India's Premium Outdoor Advertising Network",
  subheadline:
    "Transforming high-traffic spaces into powerful advertising opportunities using LED displays, transit branding and apartment entrance media.",
  ctaTagline: "We Don't Just Advertise, We Move Brands",
  description:
    "ADWOX Advertising Network is a next-generation outdoor digital advertising platform delivering unmatched visibility through Apartment Entrance LED Displays, School Bus Branding, and Auto LED Advertising.",

  // Contact — update these when the client confirms
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "9441673791",
  phones: ["9441673791"],
  email: "brand.adwox@gmail.com",
  website: "www.adwox.in",

  // Social links (placeholders — update when available)
  socials: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
    youtube: "#",
  },

  // SEO
  seo: {
    title: "ADWOX Advertising Network | India's Premium Outdoor Advertising",
    description:
      "Transform your brand visibility with ADWOX, India's leading outdoor advertising network specializing in Apartment Entrance LED, School Bus Branding, and Auto LED Advertising.",
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
    name: "Alim",
    role: "Founder & CEO",
    tagline: "Visionary Leader | Entrepreneur | Innovator",
    bio: "Building India's most powerful mobile advertising network, one street, one campus, and one apartment gate at a time. At ADWOX, we don't display advertisements. We create visibility, build brand value, and deliver meaningful business growth.",
    mission:
      "To transform everyday public spaces into premium advertising platforms that connect brands with real people in real places.",
  },
} as const;
