"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/content/services";

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 section-dark relative">
      {/* Decorative top gold line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

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
            What We Do
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Our <span className="text-gold-gradient">Services</span>
          </h2>
          <p className="text-secondary-text max-w-2xl mx-auto text-base sm:text-lg">
            Three powerful advertising formats designed to put your brand in
            front of real people in real spaces, every single day.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.id}
                href={`#${service.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group glass-card p-6 sm:p-8 flex flex-col cursor-pointer transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-7 h-7 text-gold" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2 group-hover:text-gold-gradient transition-all">
                  {service.title}
                </h3>

                {/* Subtitle */}
                <p className="text-gold/80 text-sm font-medium mb-4 italic">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-secondary-text text-sm leading-relaxed flex-1 mb-6">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
