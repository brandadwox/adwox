"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { packages, packageNote } from "@/content/packages";

export default function Packages() {
  return (
    <section id="packages" className="py-20 sm:py-28 section-darker relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-widest uppercase">
            Flexible Plans
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Advertising <span className="text-gold-gradient">Packages</span>
          </h2>
          <p className="text-secondary-text max-w-2xl mx-auto text-base sm:text-lg">
            Choose a package that fits your brand&apos;s reach goals. All
            packages include premium LED installation, content management, and
            dedicated support.
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 sm:p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                pkg.highlighted
                  ? "bg-gradient-to-b from-gold/10 to-dark-card border-2 border-gold/40 shadow-lg shadow-gold/10"
                  : "glass-card"
              }`}
            >
              {/* Recommended badge */}
              {pkg.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-gradient text-dark px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Star size={12} fill="currentColor" />
                  Recommended
                </div>
              )}

              {/* Package Name */}
              <h3 className="font-heading text-xl font-bold mb-6 text-center">
                {pkg.name}
              </h3>

              {/* Details */}
              <div className="space-y-4 flex-1 mb-6">
                <div className="flex items-center gap-3">
                  <Check size={16} className="text-gold flex-shrink-0" />
                  <span className="text-secondary-text text-sm">
                    <strong className="text-white">{pkg.displays}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={16} className="text-gold flex-shrink-0" />
                  <span className="text-secondary-text text-sm">
                    Duration: <strong className="text-white">{pkg.duration}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={16} className="text-gold flex-shrink-0" />
                  <span className="text-secondary-text text-sm">
                    Premium LED Installation
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={16} className="text-gold flex-shrink-0" />
                  <span className="text-secondary-text text-sm">
                    24/7 Technical Support
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={16} className="text-gold flex-shrink-0" />
                  <span className="text-secondary-text text-sm">
                    Content Management
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="text-center mb-4">
                <span className="text-gold font-heading font-bold text-sm">
                  {pkg.price}
                </span>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center py-3 rounded-lg font-bold text-sm transition-all duration-200 hover:scale-[1.02] ${
                  pkg.highlighted
                    ? "bg-gold-gradient text-dark hover:shadow-lg hover:shadow-gold/20"
                    : "border border-gold/30 text-gold hover:bg-gold/10"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-secondary-text text-sm mt-8 italic"
        >
          {packageNote}
        </motion.p>
      </div>
    </section>
  );
}
