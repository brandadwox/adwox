"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Sun,
  MapPin,
  RefreshCw,
  Layers,
  Eye,
  IndianRupee,
  Settings,
  AlertCircle,
  Check,
} from "lucide-react";

const advantages = [
  {
    icon: Sun,
    title: "Premium LED Displays",
    description: "High-brightness displays with crystal-clear visibility during both day and night.",
  },
  {
    icon: MapPin,
    title: "Strategic Locations",
    description: "Positioned directly where thousands of people travel and commute every day.",
  },
  {
    icon: RefreshCw,
    title: "Flexible Updates",
    description: "Update your advertising creatives anytime during your campaign without hardware replacement.",
  },
  {
    icon: Layers,
    title: "Multiple Platforms",
    description: "Advertise across city autos, school buses, and apartment entrances with one trusted partner.",
  },
  {
    icon: Eye,
    title: "High Engagement",
    description: "Moving and fixed LED displays naturally attract public attention and improve recall.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Packages",
    description: "Premium digital outdoor advertising solutions designed for businesses of every size.",
  },
  {
    icon: Settings,
    title: "Professional Management",
    description: "Our experienced team manages installation, scheduling, updates, monitoring, and support.",
  },
];

const benefits = [
  "Change your advertisement anytime",
  "Premium digital appearance",
  "High visibility in all lighting conditions",
  "Strong brand recall",
  "Continuous public exposure",
  "Cost-effective campaigns",
  "Modern outdoor advertising technology",
];

const stats = [
  { value: 500, suffix: "+", label: "Strategic Locations" },
  { value: 100000, suffix: "+", label: "Daily Impressions" },
  { value: 50, suffix: "+", label: "Active Campaigns" },
  { value: 98, suffix: "%", label: "Ad Recall Rate" },
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
    <section id="why-adwox" className="py-20 sm:py-28 section-dark relative overflow-hidden">
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
            Built for Maximum Brand Visibility
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300 border border-white/5"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-heading text-base font-bold mb-2 text-white">
                  {adv.title}
                </h3>
                <p className="text-secondary-text text-sm leading-relaxed">
                  {adv.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* LED vs Traditional Comparison */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4">
                <AlertCircle className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-white">
                Traditional Printed Ads
              </h3>
              <p className="text-secondary-text text-sm sm:text-base leading-relaxed">
                Traditional printed billboard and transit advertising is completely static, slow to deploy, and very expensive to replace when updating offers or creative designs.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 text-xs text-secondary-text/60 italic">
              requires physical print, high logistics labor & setup fees
            </div>
          </motion.div>

          {/* LED Advertising */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-gold-gradient/5 border border-gold/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="relative z-10">
              <span className="bg-gold/10 border border-gold/30 text-gold text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                The Smart Solution
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold mt-4 mb-6 text-white">
                Why LED Display Advertising?
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-gold" />
                    </div>
                    <span className="text-secondary-text text-sm font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Ambient gold glow */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
          </motion.div>
        </div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 sm:p-12 border border-white/5"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-secondary-text text-xs sm:text-sm mt-2 font-medium">
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
