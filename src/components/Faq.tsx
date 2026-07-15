"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FaqItem[] = [
  {
    question: "Can I change my advertisement during the campaign?",
    answer:
      "Yes. ADWOX allows you to update your advertisement multiple times during your campaign without changing the LED display hardware. Simply send us your updated artwork, and we'll handle the change.",
  },
  {
    question: "Which advertising platforms are available?",
    answer: (
      <div>
        We offer three premium, high-impact Digital Out-of-Home (DOOH) platforms:
        <ul className="list-disc pl-5 mt-2 space-y-1.5 text-secondary-text">
          <li>City Auto Rickshaw LED Displays</li>
          <li>School Bus LED Displays</li>
          <li>Apartment Entrance LED Displays</li>
        </ul>
      </div>
    ),
  },
  {
    question: "What type of businesses can advertise?",
    answer:
      "Any business looking to boost local brand visibility! This includes retail stores, hospitals, pharmacies, educational institutions, coaching centers, restaurants, grocery stores, jewellery brands, real estate companies, banks, movie promotions, government campaigns, and local events.",
  },
  {
    question: "Is the LED display visible at night?",
    answer:
      "Yes. Our high-brightness, premium digital LED displays are designed for excellent visibility during both daytime and nighttime conditions, ensuring constant brand exposure 24/7.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 section-dark relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-medium tracking-widest uppercase flex items-center justify-center gap-2">
            <HelpCircle size={16} /> FAQ
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <p className="text-secondary-text max-w-2xl mx-auto text-base">
            Everything you need to know about starting your digital outdoor campaign with ADWOX.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`glass-card overflow-hidden border transition-all duration-300 ${
                  isOpen ? "border-gold/30 bg-gold/[0.02]" : "border-white/5 hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-white text-base sm:text-lg pr-4">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen ? "border-gold/30 text-gold bg-gold/10" : "border-white/10 text-secondary-text"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-secondary-text text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
