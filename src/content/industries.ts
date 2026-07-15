import {
  Building,
  Landmark,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Gem,
  Car,
  Film,
  Compass,
  Hotel,
} from "lucide-react";

export const industries = [
  {
    name: "Real Estate",
    description: "Builders, Developers & Projects",
    icon: Building,
  },
  {
    name: "Retail & Malls",
    description: "Shopping Malls, Restaurants & Fashion",
    icon: ShoppingBag,
  },
  {
    name: "Jewellery",
    description: "Jewellery Showrooms & Luxury Brands",
    icon: Gem,
  },
  {
    name: "Hospitals & Healthcare",
    description: "Hospitals, Clinics & Pharmacies",
    icon: HeartPulse,
  },
  {
    name: "Education",
    description: "Schools, Universities & Coaching Institutes",
    icon: GraduationCap,
  },
  {
    name: "Banks & Insurance",
    description: "Banks, Financial Services & Insurance",
    icon: Landmark,
  },
  {
    name: "Automotive & Electronics",
    description: "Auto Dealers, Showrooms & Tech Stores",
    icon: Car,
  },
  {
    name: "Campaigns & Entertainment",
    description: "Movie Promotions, Events, Tourism & Government Campaigns",
    icon: Film,
  },
  {
    name: "Tourism",
    description: "Travel Agencies, Packages & Destinations",
    icon: Compass,
  },
  {
    name: "Hotels",
    description: "Hotels, Resorts & Premium Hospitality",
    icon: Hotel,
  },
] as const;
