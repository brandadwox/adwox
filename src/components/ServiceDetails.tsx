"use client";

import { motion } from "framer-motion";
import { CheckCircle, Sparkles } from "lucide-react";
import { services } from "@/content/services";

export default function ServiceDetails() {
  return (
    <div className="section-darker">
      {services.map((service, sIdx) => {
        const Icon = service.icon;
        const isEven = sIdx % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 sm:py-24 ${sIdx > 0 ? "border-t border-white/5" : ""}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold">
                      {service.title}
                    </h2>
                    <p className="text-gold/80 text-sm italic mt-1">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-secondary-text text-base sm:text-lg max-w-3xl leading-relaxed mt-4">
                  {service.description}
                </p>
              </motion.div>

              {/* Two Column Layout */}
              <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 ${isEven ? "" : "lg:direction-rtl"}`}>
                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="space-y-5"
                >
                  <h3 className="font-heading text-lg font-semibold text-gold flex items-center gap-2">
                    <Sparkles size={18} />
                    Why This Works
                  </h3>
                  {service.benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="glass-card p-4 sm:p-5 transition-all duration-300"
                    >
                      <h4 className="font-heading font-semibold text-white mb-1.5">
                        {benefit.title}
                      </h4>
                      <p className="text-secondary-text text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  ))}
                </motion.div>

                {/* Features + Long-term Value */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="space-y-8"
                >
                  {/* Features List */}
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white mb-4">
                      Features
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 text-sm"
                        >
                          <CheckCircle
                            size={16}
                            className="text-gold flex-shrink-0 mt-0.5"
                          />
                          <span className="text-secondary-text">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Long-term Value */}
                  <div className="glass-card p-5 sm:p-6">
                    <h3 className="font-heading text-lg font-semibold text-gold mb-4">
                      Long-Term Value
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {service.longTermValue.map((value, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-1.5" />
                          <span className="text-secondary-text">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-gold-gradient text-dark px-6 py-3 rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-gold/20 transition-all hover:scale-[1.03]"
                  >
                    Get a Quote for {service.shortTitle}
                  </a>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
