"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Bus, Car, Type, Sparkles, ArrowRight } from "lucide-react";

const formats = [
  {
    id: "apartment",
    label: "Apartment Gate",
    icon: Building2,
    mockupLabel: "ADWOX APARTMENTS",
    description: "LED display at apartment entrance",
    color: "gold" as const,
  },
  {
    id: "bus",
    label: "School Bus",
    icon: Bus,
    mockupLabel: "EICHER | ADWOX MOBILE ADVERTISING",
    description: "LED display on bus rear",
    color: "green" as const,
  },
  {
    id: "auto",
    label: "Auto Rickshaw",
    icon: Car,
    mockupLabel: "AUTO LED DISPLAY",
    description: "LED screen behind auto",
    color: "gold" as const,
  },
] as const;

const presetMessages = [
  "Happy Diwali! 🎆 Big Festive Sale",
  "Admissions Open 2025 | Apply Now",
  "50% OFF | Limited Time Offer!",
  "Grand Opening | Visit Us Today",
  "New Collection Arrived!",
  "Book Your Dream Home Today",
];

type LedColor = "gold" | "green" | "red" | "white";

const ledColorOptions: { id: LedColor; label: string; className: string; ringClass: string }[] = [
  { id: "gold", label: "Gold", className: "bg-[#F4C542]", ringClass: "ring-[#F4C542]" },
  { id: "green", label: "Green", className: "bg-[#39FF14]", ringClass: "ring-[#39FF14]" },
  { id: "red", label: "Red", className: "bg-[#FF3131]", ringClass: "ring-[#FF3131]" },
  { id: "white", label: "White", className: "bg-white", ringClass: "ring-white" },
];

export default function CampaignSimulator() {
  const [activeFormat, setActiveFormat] = useState(0);
  const [campaignText, setCampaignText] = useState("Happy Diwali! 🎆 Big Festive Sale");
  const [ledColor, setLedColor] = useState<LedColor>("gold");
  const [isScrolling, setIsScrolling] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  // Cycle through presets if user hasn't typed
  const [presetIndex, setPresetIndex] = useState(0);
  const [isCustomText, setIsCustomText] = useState(false);

  const handlePresetClick = (text: string) => {
    setCampaignText(text);
    setIsCustomText(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCampaignText(e.target.value);
    setIsCustomText(true);
  };

  const format = formats[activeFormat];

  return (
    <section
      id="campaign-simulator"
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #090909 0%, #0d0d0d 50%, #090909 100%)",
      }}
    >
      {/* Subtle radial glow behind the display */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-[0.06] blur-3xl pointer-events-none"
        style={{
          background:
            ledColor === "gold"
              ? "radial-gradient(circle, #D4AF37, transparent)"
              : ledColor === "green"
              ? "radial-gradient(circle, #39FF14, transparent)"
              : ledColor === "red"
              ? "radial-gradient(circle, #FF3131, transparent)"
              : "radial-gradient(circle, #FFFFFF, transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 rounded-full border border-gold/30 bg-gold/5">
            <Sparkles size={14} className="text-gold" />
            <span className="text-xs sm:text-sm text-gold font-medium tracking-wide uppercase">
              Interactive Demo
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            See Your Brand{" "}
            <span className="text-gold-gradient">In Action</span>
          </h2>
          <p className="text-secondary-text max-w-xl mx-auto text-base sm:text-lg">
            Type your campaign message and watch it come alive on our LED
            displays, exactly how your audience would see it.
          </p>
        </motion.div>

        {/* Format Selector */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {formats.map((fmt, idx) => {
            const Icon = fmt.icon;
            const isActive = idx === activeFormat;
            return (
              <button
                key={fmt.id}
                onClick={() => setActiveFormat(idx)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gold/15 border border-gold/50 text-gold shadow-lg shadow-gold/10"
                    : "bg-dark-card border border-white/10 text-secondary-text hover:border-white/20 hover:text-white"
                }`}
              >
                <Icon size={18} />
                {fmt.label}
              </button>
            );
          })}
        </motion.div>

        {/* LED Display Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          {/* Mockup Frame */}
          <div className="max-w-3xl mx-auto">
            {/* Top label bar — simulates the signboard header */}
            <div className="bg-dark-card border border-white/10 border-b-0 rounded-t-xl px-4 sm:px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                  {(() => {
                    const ActiveIcon = format.icon;
                    return <ActiveIcon size={16} className="text-gold" />;
                  })()}
                </div>
                <div>
                  <p className="text-xs text-gold font-heading font-semibold tracking-wider uppercase">
                    ADWOX
                  </p>
                  <p className="text-[10px] text-secondary-text">
                    {format.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] text-green-500/80 font-medium">
                  LIVE
                </span>
              </div>
            </div>

            {/* The LED display itself */}
            <div className="led-display-frame py-10 sm:py-14 px-6">
              <div className="led-dots-overlay" />

              {/* Scrolling or static text */}
              <div className="relative z-[1] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={campaignText + ledColor + isScrolling}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`${isScrolling ? "overflow-hidden" : "text-center"}`}
                  >
                    <p
                      className={`led-text led-text-${ledColor} text-2xl sm:text-3xl md:text-4xl font-bold whitespace-nowrap ${
                        isScrolling ? "led-ticker-scroll" : ""
                      }`}
                    >
                      {campaignText || "Type your message..."}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="bg-dark-card border border-white/10 border-t-0 rounded-b-xl px-4 sm:px-6 py-2.5 flex items-center justify-between">
              <p className="text-[10px] text-secondary-text">
                {format.mockupLabel}
              </p>
              <div className="flex items-center gap-3">
                {/* Scroll toggle */}
                <button
                  onClick={() => setIsScrolling(!isScrolling)}
                  className={`text-[10px] px-2.5 py-1 rounded-md transition-colors ${
                    isScrolling
                      ? "bg-gold/15 text-gold border border-gold/30"
                      : "bg-white/5 text-secondary-text border border-white/10"
                  }`}
                >
                  {isScrolling ? "Scrolling" : "Static"}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto space-y-5"
        >
          {/* Text Input */}
          <div className="relative">
            <Type
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-text"
            />
            <input
              ref={inputRef}
              type="text"
              value={campaignText}
              onChange={handleInputChange}
              placeholder="Type your campaign message..."
              maxLength={100}
              className="w-full bg-dark-card border border-white/15 rounded-xl pl-11 pr-4 py-4 text-white text-sm sm:text-base placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-secondary-text">
              {campaignText.length}/100
            </span>
          </div>

          {/* LED Color Selector + Preset Row */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Color options */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-secondary-text mr-1">Color:</span>
              {ledColorOptions.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setLedColor(color.id)}
                  className={`w-7 h-7 rounded-full transition-all ${color.className} ${
                    ledColor === color.id
                      ? `ring-2 ring-offset-2 ring-offset-dark scale-110 ${color.ringClass}`
                      : "opacity-50 hover:opacity-80"
                  }`}
                  aria-label={`${color.label} LED color`}
                />
              ))}
            </div>
          </div>

          {/* Preset Messages */}
          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-secondary-text self-center mr-1">
              Try:
            </span>
            {presetMessages.slice(0, 4).map((msg) => (
              <button
                key={msg}
                onClick={() => handlePresetClick(msg)}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                  campaignText === msg
                    ? "bg-gold/15 border-gold/40 text-gold"
                    : "bg-dark-card border-white/10 text-secondary-text hover:text-white hover:border-white/20"
                }`}
              >
                {msg.length > 25 ? msg.slice(0, 25) + "…" : msg}
              </button>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gold-gradient text-dark px-8 py-3.5 rounded-lg font-bold text-sm hover:shadow-lg hover:shadow-gold/25 transition-all hover:scale-[1.03]"
          >
            Want This for Your Brand?
            <ArrowRight size={16} />
          </a>
          <p className="text-secondary-text text-xs mt-3">
            Dynamic LED content that you control, allowing you to update messages anytime for
            festivals, sales, or events.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
