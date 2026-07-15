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
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                {/* Visual Mockup Column (5 cols) */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"} w-full`}
                >
                  <div className="relative aspect-[4/3] sm:aspect-video lg:aspect-[3/4] rounded-2xl overflow-hidden border border-gold/25 shadow-2xl group bg-dark-card">
                    <img
                      src={service.image}
                      alt={`${service.title} Mockup`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Glowing border glow effect on hover */}
                    <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 rounded-2xl transition-colors duration-300" />

                    {/* Visual details badge */}
                    <div className="absolute top-4 left-4 bg-dark/80 backdrop-blur-md border border-gold/30 text-gold text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-full">
                      Live Mockup Preview
                    </div>
                  </div>
                </motion.div>

                {/* Content Column (7 cols) */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"} space-y-8`}
                >
                  {/* Why This Works (Benefits) */}
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-gold flex items-center gap-2 mb-4">
                      <Sparkles size={18} />
                      Why This Works
                    </h3>
                    <div className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="glass-card p-4 transition-all duration-300 border border-white/5"
                        >
                          <h4 className="font-heading font-semibold text-white text-sm mb-1">
                            {benefit.title}
                          </h4>
                          <p className="text-secondary-text text-xs sm:text-sm leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features & Ideal For Grid */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Features List */}
                    <div>
                      <h3 className="font-heading text-base font-semibold text-white mb-3">
                        Key Features
                      </h3>
                      <div className="space-y-2.5">
                        {service.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2.5 text-xs sm:text-sm"
                          >
                            <CheckCircle
                              size={14}
                              className="text-gold flex-shrink-0 mt-0.5"
                            />
                            <span className="text-secondary-text">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Target Industries */}
                    {service.targets && (
                      <div>
                        <h3 className="font-heading text-base font-semibold text-gold mb-3">
                          {service.targetLabel || "Perfect For"}
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                          {service.targets.map((target, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-xs text-secondary-text"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-gold/50 flex-shrink-0" />
                              <span className="truncate">{target}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="pt-2">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 bg-gold-gradient text-dark px-6 py-3.5 rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-gold/20 transition-all hover:scale-[1.03]"
                    >
                      Get a Quote for {service.shortTitle}
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
