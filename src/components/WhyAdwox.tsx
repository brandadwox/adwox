"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Target, Users, Megaphone, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Targeted Visibility",
    description:
      "Precision placement in high-footfall locations where your audience lives, commutes, and shops.",
  },
  {
    icon: Users,
    title: "Maximum Reach",
    description:
      "Our multi-format network ensures your brand reaches thousands of real people every single day.",
  },
  {
    icon: Megaphone,
    title: "Powerful Impact",
    description:
      "LED displays and transit branding create memorable, high-frequency brand impressions.",
  },
  {
    icon: TrendingUp,
    title: "Brand Growth",
    description:
      "From awareness to recall to conversion, our advertising drives measurable business growth.",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Locations" },
  { value: 10000, suffix: "+", label: "Daily Impressions" },
  { value: 50, suffix: "+", label: "Brands Served" },
  { value: 3, suffix: "", label: "Cities" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-gold-gradient font-heading text-3xl sm:text-4xl md:text-5xl font-bold">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function WhyAdwox() {
  return (
    <section id="why-adwox" className="py-20 sm:py-28 section-dark relative">
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
            Our Advantage
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Why Choose <span className="text-gold-gradient">ADWOX</span>?
          </h2>
          <p className="text-secondary-text max-w-2xl mx-auto text-base sm:text-lg">
            Four pillars that make ADWOX the preferred outdoor advertising
            partner for leading brands across India.
          </p>
        </motion.div>

        {/* 4 Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 text-center group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">
                  {pillar.title}
                </h3>
                <p className="text-secondary-text text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 sm:p-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-secondary-text text-sm mt-2 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
