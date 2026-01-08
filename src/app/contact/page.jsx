"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import Link from "next/link";
// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        // Auto-hide success message after 2 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 2000);
      } else {
        setSubmitStatus("error");
        // Auto-hide error message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary text-primary">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>

          <h1 className="mb-12">Get In Touch</h1>

          <p className="text-xl text-secondary leading-relaxed max-w-3xl">
            Have a project in mind? Let&apos;s discuss how we can work together
            to bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pt-8 pb-18 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Contact Info - Left Side */}
            <div className="md:col-span-2">
              <div className="mb-12">
                <h2 className="font-display text-3xl font-bold mb-6">
                  Contact Information
                </h2>
                <p className="text-secondary leading-relaxed mb-8">
                  Feel free to reach out through any of these channels. I
                  typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6 flex flex-col gap-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <Link
                      href={`mailto:${siteConfig.email}`}
                      className="text-text-secondary hover:text-accent transition-colors"
                    >
                      {siteConfig.email}
                    </Link>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <Link
                      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                      className="text-text-secondary hover:text-accent transition-colors"
                    >
                      {siteConfig.phone}
                    </Link>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-secondary">{siteConfig.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="md:col-span-3">
              <div className="bg-bg-secondary border border-subtle rounded-lg p-8">
                <h2 className="font-display text-2xl font-bold mb-6">
                  Send Me a Message
                </h2>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6 text-text-secondary placeholder:text-text-secondary"
                >
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold mb-2"
                    >
                      Name *
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      id="name"
                      className="w-full cta text-primary px-4 py-3  border border-subtle focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-2"
                    >
                      Email *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      id="email"
                      className="w-full cta text-primary px-4 py-3  border border-subtle focus:outline-none focus:border-accent transition-colors"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      {...register("subject")}
                      type="text"
                      id="subject"
                      className="w-full cta text-primary px-4 py-3  border border-subtle focus:outline-none focus:border-accent transition-colors"
                      placeholder="What's this about?"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      id="message"
                      rows="6"
                      className="w-full cta text-primary px-4 py-3  border border-subtle focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-bg-accent hover:bg-text-accent-light text-white px-8 py-4 font-semibold text-lg transition-all shadow-accent flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message <Send size={20} />
                      </>
                    )}
                  </button>

                  {/* Success Message */}
                  {submitStatus === "success" && (
                    <div className="bg-green-500/10 border border-green-500 p-4 flex items-start gap-3 animate-fadeIn">
                      <CheckCircle
                        size={24}
                        className="text-green-500 shrink-0 mt-0.5"
                      />
                      <div>
                        <h4 className="font-semibold text-green-500 mb-1">
                          Message Sent!
                        </h4>
                        <p className="text-sm text-secondary">
                          Thank you for reaching out. I&apos;ll get back to you
                          as soon as possible.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === "error" && (
                    <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 flex items-start gap-3">
                      <XCircle
                        size={24}
                        className="text-red-500 shrink-0 mt-0.5"
                      />
                      <div>
                        <h4 className="font-semibold text-red-500 mb-1">
                          Something Went Wrong
                        </h4>
                        <p className="text-sm text-secondary">
                          Please try again or email me directly at
                          support@alaradi.com
                        </p>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
