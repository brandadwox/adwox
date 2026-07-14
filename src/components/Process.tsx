"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  ClipboardList,
  Wrench,
  RefreshCw,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "Understanding your brand, goals, and target audience.",
  },
  {
    icon: ClipboardList,
    title: "Planning",
    description: "Strategic location selection and campaign design.",
  },
  {
    icon: Wrench,
    title: "Installation",
    description: "Premium LED display installation at chosen sites.",
  },
  {
    icon: RefreshCw,
    title: "Content Updates",
    description: "Dynamic content management with real-time updates.",
  },
  {
    icon: BarChart3,
    title: "Monitoring",
    description: "Ongoing performance tracking and optimization.",
  },
];

export default function Process() {
  return (
    <section className="py-20 sm:py-28 section-dark relative overflow-hidden">
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
            How It Works
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Our <span className="text-gold-gradient">Process</span>
          </h2>
          <p className="text-secondary-text max-w-2xl mx-auto text-base sm:text-lg">
            From first conversation to live campaign, creating a seamless journey to
            powerful brand visibility.
          </p>
        </motion.div>

        {/* Timeline — Desktop */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="text-center relative"
                >
                  {/* Node */}
                  <div className="w-24 h-24 rounded-full border border-gold/30 bg-dark-card flex items-center justify-center mx-auto mb-5 relative z-10 group hover:border-gold/60 transition-colors">
                    <Icon className="w-8 h-8 text-gold" />
                    {/* Step number */}
                    <span className="absolute -top-1 -right-1 w-6 h-6 bg-gold-gradient text-dark rounded-full text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-secondary-text text-xs sm:text-sm leading-relaxed px-2">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Timeline — Mobile */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex gap-4 items-start"
              >
                {/* Step indicator */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border border-gold/30 bg-dark-card flex items-center justify-center relative">
                    <Icon className="w-5 h-5 text-gold" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold-gradient text-dark rounded-full text-[10px] font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px h-8 bg-gold/20 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="font-heading font-bold text-base mb-1">
                    {step.title}
                  </h3>
                  <p className="text-secondary-text text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
