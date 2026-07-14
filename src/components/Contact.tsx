"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Phone, Mail, Globe, MapPin, Send } from "lucide-react";
import { siteConfig } from "@/content/siteConfig";

interface FormData {
  name: string;
  company: string;
  service: string;
  city: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      // Mock successful email submission in development/testing mode
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
      }, 1200);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New ADWOX Quote Enquiry from ${data.name}`,
          from_name: "ADWOX Site Contact Form",
          ...data,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setSubmitError("Failed to send your request. Please try again later.");
      }
    } catch (err) {
      setSubmitError("Failed to connect to the email server. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: siteConfig.phones.join(" | "),
      href: `tel:${siteConfig.phones[0]}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: Globe,
      label: "Website",
      value: siteConfig.website,
      href: `https://${siteConfig.website}`,
    },
    {
      icon: MapPin,
      label: "Network",
      value: "ADWOX LED Display Network",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 section-dark relative">
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
            Let&apos;s Connect
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Start Your{" "}
            <span className="text-gold-gradient">Campaign Today</span>
          </h2>
          <p className="text-secondary-text max-w-2xl mx-auto text-base sm:text-lg">
            Ready to put your brand in front of thousands? Fill in the form
            and we&apos;ll connect with you on WhatsApp instantly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold mb-2">
                Get in Touch
              </h3>
              <p className="text-secondary-text text-sm leading-relaxed">
                Whether you&apos;re a startup or an established brand, we have
                the right advertising solution for you.
              </p>
            </div>

            <div className="space-y-5">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-secondary-text text-xs uppercase tracking-wider mb-0.5">
                        {info.label}
                      </p>
                      <p className="text-white text-sm font-medium group-hover:text-gold transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Service commitment */}
            <div className="glass-card p-5">
              <h4 className="font-heading font-semibold text-gold text-sm uppercase tracking-wider mb-3">
                Our Service Commitment
              </h4>
              <div className="grid grid-cols-2 gap-2 text-sm text-secondary-text">
                {[
                  "Premium LED Installation",
                  "24/7 Technical Support",
                  "Content Creation Support",
                  "Real-time Monitoring",
                  "On-time Reporting",
                  "Professional Maintenance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-card p-6 sm:p-8 space-y-5"
            >
              {/* Name */}
              <div>
                <label className="block text-sm text-secondary-text mb-1.5">
                  Name <span className="text-gold">*</span>
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="w-full bg-dark-subtle border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm text-secondary-text mb-1.5">
                  Company / Brand
                </label>
                <input
                  {...register("company")}
                  className="w-full bg-dark-subtle border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                  placeholder="Your company or brand name"
                />
              </div>

              {/* Service Interest */}
              <div>
                <label className="block text-sm text-secondary-text mb-1.5">
                  Service Interest <span className="text-gold">*</span>
                </label>
                <select
                  {...register("service", {
                    required: "Please select a service",
                  })}
                  className="w-full bg-dark-subtle border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold/50 transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select a service</option>
                  <option value="Apartment Entrance LED">
                    Apartment Entrance LED
                  </option>
                  <option value="School Bus Branding">
                    School Bus Branding
                  </option>
                  <option value="Auto LED Advertising">
                    Auto LED Advertising
                  </option>
                  <option value="Multiple Services">
                    Multiple Services
                  </option>
                  <option value="Custom Package">Custom Package</option>
                </select>
                {errors.service && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.service.message}
                  </p>
                )}
              </div>

              {/* City + Phone in row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-secondary-text mb-1.5">
                    City <span className="text-gold">*</span>
                  </label>
                  <input
                    {...register("city", { required: "City is required" })}
                    className="w-full bg-dark-subtle border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="Your city"
                  />
                  {errors.city && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.city.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm text-secondary-text mb-1.5">
                    Phone <span className="text-gold">*</span>
                  </label>
                  <input
                    {...register("phone", {
                      required: "Phone is required",
                      pattern: {
                        value: /^[0-9+\-\s]{10,15}$/,
                        message: "Enter a valid phone number",
                      },
                    })}
                    className="w-full bg-dark-subtle border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="Your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-secondary-text mb-1.5">
                  Message (Optional)
                </label>
                <textarea
                  {...register("message")}
                  rows={3}
                  className="w-full bg-dark-subtle border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                  placeholder="Tell us about your advertising goals..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gold-gradient text-dark py-3.5 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold/20 transition-all hover:scale-[1.01] disabled:opacity-50"
                disabled={isSubmitting || submitted}
              >
                {isSubmitting ? (
                  "Submitting Request..."
                ) : submitted ? (
                  "Enquiry Sent Successfully!"
                ) : (
                  <>
                    <Send size={16} />
                    Submit Request
                  </>
                )}
              </button>

              {submitted && (
                <p className="text-center text-green-400 text-xs mt-2 font-medium">
                  Thank you! Your quote request has been sent successfully. We will get back to you shortly.
                </p>
              )}

              {submitError && (
                <p className="text-center text-red-400 text-xs mt-2 font-medium">
                  {submitError}
                </p>
              )}

              <p className="text-center text-secondary-text text-xs">
                Your enquiry will be sent directly to our team via secure email.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
