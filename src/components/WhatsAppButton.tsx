"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/siteConfig";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello ADWOX! I'm interested in your advertising services. Please get in touch."
  );
  const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-2xl shadow-black/30 hover:shadow-[#25D366]/30 hover:scale-105 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

      <MessageCircle
        size={22}
        fill="white"
        className="relative z-10 flex-shrink-0"
      />
      <span className="relative z-10 text-sm font-semibold hidden sm:inline whitespace-nowrap">
        WhatsApp Us
      </span>
    </motion.a>
  );
}
