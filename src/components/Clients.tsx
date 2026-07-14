"use client";

import { motion } from "framer-motion";

const clients = [
  "CMR Mall",
  "DMart",
  "R.S.Brothers",
  "SPAR",
  "Reliance Smart",
  "Sri Mahalaxmi",
  "Chennai Shopping Mall",
];

export default function Clients() {
  return (
    <section className="py-16 sm:py-20 section-darker relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-secondary-text">
            We Proudly{" "}
            <span className="text-gold-gradient">Collaborate With</span>
          </h2>
        </motion.div>

        {/* Marquee */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-card to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-card to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {/* Double the list for seamless loop */}
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={`${client}-${i}`}
                  className="inline-flex items-center justify-center mx-6 sm:mx-10"
                >
                  <span className="text-lg sm:text-xl font-heading font-bold text-white/20 hover:text-gold/50 transition-colors duration-300 whitespace-nowrap tracking-wide">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* And Many More */}
        <p className="text-center text-secondary-text text-sm mt-6 font-medium">
          And Many More...
        </p>
      </div>
    </section>
  );
}
