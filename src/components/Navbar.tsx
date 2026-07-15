"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/content/siteConfig";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why ADWOX", href: "#why-adwox" },
  { label: "Industries", href: "#industries" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md border-b border-gold/20 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden border border-gold/20 bg-dark-card flex items-center justify-center flex-shrink-0">
              <img
                src="/images/logo.jpg"
                alt="ADWOX Logo"
                className="w-full h-full object-cover scale-[1.35] -translate-y-[8%]"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-heading font-bold tracking-tight text-white leading-none group-hover:text-gold transition-colors">
                ADWOX
              </span>
              <span className="text-[8px] uppercase tracking-[0.2em] text-secondary-text leading-none mt-1">
                Advertising Network
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-secondary-text hover:text-gold transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gold-gradient text-dark px-5 py-2.5 rounded-lg text-sm font-bold hover:shadow-lg hover:shadow-gold/20 transition-all duration-200 hover:scale-[1.03]"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-card/98 backdrop-blur-lg border-b border-gold/20 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-lg text-secondary-text hover:text-gold transition-colors py-2 font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="bg-gold-gradient text-dark px-6 py-3 rounded-lg text-center font-bold mt-2"
              >
                Get Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
