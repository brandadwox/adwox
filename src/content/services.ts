import { Building2, Bus, Car } from "lucide-react";

export const services = [
  {
    id: "apartment-entrance-led",
    title: "Apartment Entrance LED Advertising",
    shortTitle: "Apartment Entrance",
    subtitle: "Engage residents exactly where they live.",
    icon: Building2,
    description:
      "Our premium LED display boards are installed at apartment entrances, offering continuous advertising exposure to residents, visitors, delivery partners, and daily commuters. Apartment entrance advertising delivers one of the highest advertising recall rates because audiences see the message repeatedly every day.",
    features: [
      "High-Resolution LED Display Boards",
      "Weatherproof & Durable Design",
      "24/7 Operation with Auto Brightness",
      "Easy Content Management",
      "Regular Maintenance & Support",
      "Guaranteed Uptime",
    ],
    targetLabel: "Ideal For",
    targets: [
      "Local Businesses",
      "Hospitals",
      "Pharmacies",
      "Restaurants",
      "Grocery Stores",
      "Fitness Centers",
      "Banks",
      "Real Estate",
      "Schools",
      "Retail Stores",
    ],
    benefits: [
      {
        title: "High Visibility",
        description: "LED displays at prime locations ensure maximum visibility.",
      },
      {
        title: "Targeted Audience",
        description: "Reach affluent residents, families, and visitors daily.",
      },
      {
        title: "Premium Environment",
        description: "Associate your brand with quality living spaces.",
      },
      {
        title: "Non-Intrusive Impact",
        description: "Digital displays create awareness without disrupting the surroundings.",
      },
      {
        title: "Flexible Content",
        description: "Promotions, offers, brand videos, or announcements to showcase what matters.",
      },
    ],
  },
  {
    id: "school-bus-branding",
    title: "School Bus LED Advertising",
    shortTitle: "School Bus",
    subtitle: "Reaching families, students, and communities.",
    icon: Bus,
    description:
      "Reach families, students, teachers, and premium residential communities through our school bus LED advertising network. School buses travel through carefully planned routes every day, providing consistent visibility in high-income residential and educational zones.",
    features: [
      "High-Impact LED Displays on Buses",
      "City-Wide Route Coverage",
      "Dynamic Scrolling Text Updates",
      "Morning & Evening Peak Visibility",
      "Durable All-Weather Installation",
      "Real-Time Content Changes",
    ],
    targetLabel: "Best For",
    targets: [
      "Schools & Colleges",
      "Coaching Institutes",
      "Hospitals",
      "Healthcare Brands",
      "Children's Products",
      "Educational Apps",
      "Family Services",
    ],
    benefits: [
      {
        title: "Massive Reach",
        description: "Buses travel across the city, ensuring your ad reaches thousands daily.",
      },
      {
        title: "Family Audience",
        description: "Target families, parents, and students, who are key decision makers.",
      },
      {
        title: "Dynamic Content",
        description: "Update scrolling LED text for seasonal campaigns, new offers, or event promotions on the go.",
      },
      {
        title: "Cost-Effective",
        description: "Compared to traditional billboards, transit advertising offers superior value.",
      },
    ],
  },
  {
    id: "auto-led-advertising",
    title: "LED Auto Rickshaw Advertising",
    shortTitle: "Auto LED",
    subtitle: "Moving. Impactful. Unstoppable.",
    icon: Car,
    description:
      "Take your brand directly into the heart of the city. Our LED display-equipped auto rickshaws travel across busy commercial areas, residential neighborhoods, shopping districts, business hubs, and major traffic corridors, creating continuous exposure throughout the day.",
    features: [
      "Compact LED Screens on Autos",
      "Hyper-Local Area Targeting",
      "Scrolling Text with Remote Updates",
      "Street-Level Brand Presence",
      "Affordable Entry-Level Campaigns",
      "Fleet Management Dashboard",
    ],
    targetLabel: "Perfect For",
    targets: [
      "Retail Brands",
      "Restaurants",
      "Hospitals",
      "Educational Institutions",
      "Jewellery Stores",
      "Real Estate Projects",
      "Banks",
      "Automobile Showrooms",
      "Government Campaigns",
      "Movie Promotions",
      "FMCG Brands",
    ],
    benefits: [
      {
        title: "Street-Level Impact",
        description: "Autos navigate through narrow lanes and busy streets, reaching where billboards cannot.",
      },
      {
        title: "Hyper-Local Targeting",
        description: "Choose specific areas, markets, or neighborhoods for focused brand presence.",
      },
      {
        title: "Always Moving",
        description: "Your ad is never static, as it is constantly moving through traffic, markets, and communities.",
      },
      {
        title: "Real-Time Updates",
        description: "Change the scrolling text remotely, which is perfect for flash sales, event announcements, or festival greetings.",
      },
    ],
  },
] as const;
