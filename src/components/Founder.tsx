"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/content/siteConfig";
import { Quote } from "lucide-react";

export default function Founder() {
  return (
    <section id="founder" className="py-20 sm:py-28 section-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/[0.02] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/[0.02] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Image placeholder / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Styled frame for founder visual */}
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-gold/20">
              {/* Dark premium background with gold accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark-card via-dark-subtle to-dark-card" />

              {/* Central content */}
              <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                {/* Monogram */}
                <div className="w-24 h-24 rounded-full border-2 border-gold/40 flex items-center justify-center mb-6">
                  <span className="text-4xl font-heading font-bold text-gold-gradient">
                    A
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-1">
                  {siteConfig.founder.name}
                </h3>
                <p className="text-gold text-sm font-medium mb-4">
                  {siteConfig.founder.role}
                </p>
                <p className="text-secondary-text text-xs tracking-wide">
                  {siteConfig.founder.tagline}
                </p>

                {/* Decorative divider */}
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mt-6 mb-6" />

                {/* Brand pillars */}
                <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                  {["Innovation", "Quality", "Transparency", "Reliability"].map(
                    (pillar) => (
                      <div
                        key={pillar}
                        className="text-[10px] uppercase tracking-wider text-gold/60 py-2 px-3 border border-gold/10 rounded-lg font-medium"
                      >
                        {pillar}
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Corner gold accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/30 rounded-br-2xl" />
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              Meet the Founder
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-6">
              About <span className="text-gold-gradient">ADWOX</span>
            </h2>

            {/* Bio */}
            <div className="relative mb-8">
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gold/20" />
              <p className="text-secondary-text text-base leading-relaxed pl-8">
                {siteConfig.founder.bio}
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="glass-card p-5 border border-white/5">
                <h4 className="font-heading font-semibold text-gold text-xs uppercase tracking-wider mb-2">
                  Our Mission
                </h4>
                <p className="text-secondary-text text-xs leading-relaxed">
                  {siteConfig.founder.mission}
                </p>
              </div>
              <div className="glass-card p-5 border border-white/5">
                <h4 className="font-heading font-semibold text-gold text-xs uppercase tracking-wider mb-2">
                  Our Vision
                </h4>
                <p className="text-secondary-text text-xs leading-relaxed">
                  {siteConfig.founder.vision}
                </p>
              </div>
            </div>

            {/* Core Values */}
            {siteConfig.founder.values && (
              <div className="mb-8">
                <h4 className="font-heading font-semibold text-gold text-xs uppercase tracking-wider mb-3">
                  Core Values
                </h4>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.founder.values.map((val) => (
                    <span
                      key={val}
                      className="bg-white/5 border border-white/10 text-secondary-text text-xs px-3 py-1.5 rounded-full"
                    >
                      {val}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-gold-gradient text-dark px-6 py-3 rounded-lg font-bold text-sm text-center hover:shadow-lg hover:shadow-gold/20 transition-all hover:scale-[1.03]"
              >
                Connect with ADWOX
              </a>
              <a
                href={`tel:${siteConfig.phones[0]}`}
                className="border border-gold/30 text-gold px-6 py-3 rounded-lg font-medium text-sm text-center hover:bg-gold/10 transition-all"
              >
                📞 {siteConfig.phones[0]}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
