"use client";

import { Phone, Mail, Globe } from "lucide-react";
import { siteConfig } from "@/content/siteConfig";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Why ADWOX", href: "#why-adwox" },
  { label: "Industries", href: "#industries" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "Apartment Entrance LED", href: "#apartment-entrance-led" },
  { label: "School Bus Branding", href: "#school-bus-branding" },
  { label: "Auto LED Advertising", href: "#auto-led-advertising" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-card border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-block mb-4">
              <span className="text-2xl font-heading font-bold text-gold-gradient">
                ADWOX
              </span>
            </a>
            <p className="text-secondary-text text-sm leading-relaxed mb-4">
              Transforming Spaces into Powerful Branding Opportunities.
            </p>
            <p className="text-gold/60 text-xs italic">
              {siteConfig.ctaTagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-secondary-text text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-secondary-text text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${siteConfig.phones[0]}`}
                  className="flex items-center gap-2 text-secondary-text text-sm hover:text-gold transition-colors"
                >
                  <Phone size={14} className="text-gold/60" />
                  {siteConfig.phones[0]}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phones[1]}`}
                  className="flex items-center gap-2 text-secondary-text text-sm hover:text-gold transition-colors"
                >
                  <Phone size={14} className="text-gold/60" />
                  {siteConfig.phones[1]}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-secondary-text text-sm hover:text-gold transition-colors"
                >
                  <Mail size={14} className="text-gold/60" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-secondary-text text-sm">
                  <Globe size={14} className="text-gold/60" />
                  {siteConfig.website}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-secondary-text text-xs text-center sm:text-left">
            © {currentYear} {siteConfig.fullName}. All rights reserved.
          </p>
          <p className="text-gold/60 text-xs tracking-wider">
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
