"use client";

import { motion } from "framer-motion";
import { industries } from "@/content/industries";

export default function Industries() {
  return (
    <section id="industries" className="py-20 sm:py-28 section-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-dark text-sm font-medium tracking-widest uppercase">
            Industries We Serve
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4 text-dark">
            Ideal For{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#B8962E] bg-clip-text text-transparent">
              Every Industry
            </span>
          </h2>
          <p className="text-dark/60 max-w-2xl mx-auto text-base sm:text-lg">
            From retail brands to government campaigns, our advertising
            formats adapt to your industry&apos;s unique needs.
          </p>
        </motion.div>

        {/* Industry Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group bg-white rounded-xl p-5 sm:p-6 border border-gray-100 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 text-center cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="font-heading font-semibold text-dark text-sm sm:text-base mb-1">
                  {industry.name}
                </h3>
                <p className="text-dark/50 text-xs">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
