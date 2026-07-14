import {
  Building,
  Home,
  Landmark,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Gem,
  Car,
} from "lucide-react";

export const industries = [
  {
    name: "Real Estate",
    description: "Builders & Developers",
    icon: Building,
  },
  {
    name: "Home Appliances",
    description: "Home Appliance Brands",
    icon: Home,
  },
  {
    name: "Banks & Finance",
    description: "Financial Services",
    icon: Landmark,
  },
  {
    name: "Education",
    description: "Institutions & Coaching",
    icon: GraduationCap,
  },
  {
    name: "Healthcare",
    description: "Hospitals & Wellness",
    icon: HeartPulse,
  },
  {
    name: "Retail & E-commerce",
    description: "Retail & Online Brands",
    icon: ShoppingBag,
  },
  {
    name: "Jewellery",
    description: "Jewellery & Luxury Brands",
    icon: Gem,
  },
  {
    name: "Automotive",
    description: "Auto Dealers & Services",
    icon: Car,
  },
] as const;
