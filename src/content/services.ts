import { Building2, Bus, Car } from "lucide-react";

export const services = [
  {
    id: "apartment-entrance-led",
    title: "Apartment Entrance LED",
    shortTitle: "Apartment LED",
    subtitle: "Premium Locations. Premium Brands.",
    icon: Building2,
    description:
      "Our Apartment Entrance LED Display Boards deliver unmatched visibility in high-footfall residential communities, ensuring your brand connects with a premium and engaged audience daily.",
    features: [
      "High-Resolution LED Display Boards",
      "Weatherproof & Durable Design",
      "24/7 Operation with Auto Brightness",
      "Easy Content Management",
      "Regular Maintenance & Support",
      "Guaranteed Uptime",
    ],
    benefits: [
      {
        title: "High Visibility",
        description:
          "LED displays at prime locations ensure maximum visibility.",
      },
      {
        title: "Targeted Audience",
        description:
          "Reach affluent residents, families, and visitors daily.",
      },
      {
        title: "Premium Environment",
        description:
          "Associate your brand with quality living spaces.",
      },
      {
        title: "Non-Intrusive Impact",
        description:
          "Digital displays create awareness without disrupting the surroundings.",
      },
      {
        title: "Flexible Content",
        description:
          "Promotions, offers, brand videos, or announcements to showcase what matters. Update scrolling text anytime for festivals, sales, or new campaigns.",
      },
    ],
    longTermValue: [
      "Premium Branding Opportunity",
      "24/7 Brand Exposure",
      "High Resident & Visitor Engagement",
      "Cost-Effective Advertising",
      "Enhanced Brand Recall",
      "Measurable Impact",
    ],
  },
  {
    id: "school-bus-branding",
    title: "School Bus Branding",
    shortTitle: "School Bus",
    subtitle: "Reaching Young Minds. Building Brands.",
    icon: Bus,
    description:
      "Turn school and college buses into moving billboards. Our LED displays on transit vehicles deliver your message across the city, reaching families, commuters, and communities every single day.",
    features: [
      "High-Impact LED Displays on Buses",
      "City-Wide Route Coverage",
      "Dynamic Scrolling Text Updates",
      "Morning & Evening Peak Visibility",
      "Durable All-Weather Installation",
      "Real-Time Content Changes",
    ],
    benefits: [
      {
        title: "Massive Reach",
        description:
          "Buses travel across the city, ensuring your ad reaches thousands daily.",
      },
      {
        title: "Family Audience",
        description:
          "Target families, parents, and students, who are key decision makers.",
      },
      {
        title: "Dynamic Content",
        description:
          "Update scrolling LED text for seasonal campaigns, new offers, or event promotions on the go.",
      },
      {
        title: "Cost-Effective",
        description:
          "Compared to traditional billboards, transit advertising offers superior cost-per-impression value.",
      },
    ],
    longTermValue: [
      "Wide Geographic Coverage",
      "Daily Commuter Exposure",
      "Community Trust Association",
      "Repeat Brand Impressions",
      "Budget-Friendly Campaigns",
      "Flexible Duration Contracts",
    ],
  },
  {
    id: "auto-led-advertising",
    title: "Auto LED Advertising",
    shortTitle: "Auto LED",
    subtitle: "Moving. Impactful. Unstoppable.",
    icon: Car,
    description:
      "Place your brand on the streets with Auto LED advertising. Our auto-rickshaw LED screens deliver hyper-local advertising across busy markets, residential areas, and commercial zones.",
    features: [
      "Compact LED Screens on Autos",
      "Hyper-Local Area Targeting",
      "Scrolling Text with Remote Updates",
      "Street-Level Brand Presence",
      "Affordable Entry-Level Campaigns",
      "Fleet Management Dashboard",
    ],
    benefits: [
      {
        title: "Street-Level Impact",
        description:
          "Autos navigate through narrow lanes and busy streets, reaching where billboards cannot.",
      },
      {
        title: "Hyper-Local Targeting",
        description:
          "Choose specific areas, markets, or neighborhoods for focused brand presence.",
      },
      {
        title: "Always Moving",
        description:
          "Your ad is never static, as it is constantly moving through traffic, markets, and communities.",
      },
      {
        title: "Real-Time Updates",
        description:
          "Change the scrolling text remotely, which is perfect for flash sales, event announcements, or festival greetings.",
      },
    ],
    longTermValue: [
      "Ground-Level Brand Penetration",
      "Flexible Campaign Duration",
      "Multi-Zone Coverage",
      "Immediate Visibility",
      "Affordable for SMBs",
      "Scalable Fleet Deployment",
    ],
  },
] as const;
