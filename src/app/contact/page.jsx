"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle, ContactRound } from "lucide-react";
import Links from "../components/Links";
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
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>

          <h2 className=" text-5xl md:text-6xl mb-6 leading-tight">
            Get In Touch
          </h2>

          <p className="text-xl text-secondary leading-relaxed max-w-3xl">
            Have a project in mind? Let&apos;s discuss how we can work together
            to bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 px-6">
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

              <div className="space-y-6">
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
              {/* Social Links */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent shrink-0">
                <ContactRound size={24} /></div>
                <div>
                  <h4 className="font-semibold mb-4">Follow Me</h4>
                  <div className="flex items-center gap-4">
                    {/* Facebook */}
                    <Links path={siteConfig.social.facebook} styleType="link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={28}
                        height={28}
                        viewBox="0 0 16 16"
                        className="hover:opacity-70 transition-opacity"
                      >
                        <path
                          fill="#92360f"
                          d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131c.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                        />
                      </svg>
                    </Links>

                    {/* YouTube */}
                    <Links path={siteConfig.social.youtube} styleType="link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        viewBox="0 0 20 20"
                        className="hover:opacity-70 transition-opacity"
                      >
                        <path
                          fill="#92360f"
                          d="M11.603 9.833L9.357 8.785C9.161 8.694 9 8.796 9 9.013v1.974c0 .217.161.319.357.228l2.245-1.048c.197-.092.197-.242.001-.334M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4m0 13.5c-4.914 0-5-.443-5-3.9s.086-3.9 5-3.9s5 .443 5 3.9s-.086 3.9-5 3.9"
                        />
                      </svg>
                    </Links>

                    {/* LinkedIn */}
                    <Links path={siteConfig.social.linkedin} styleType="link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        viewBox="0 0 20 20"
                        className="hover:opacity-70 transition-opacity"
                      >
                        <path
                          fill="#92360f"
                          d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6s9.6-4.298 9.6-9.6S15.302.4 10 .4M7.65 13.979H5.706V7.723H7.65zm-.984-7.024c-.614 0-1.011-.435-1.011-.973c0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973m8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355c-.537 0-.856.371-.997.728c-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01c1.279 0 2.238.857 2.238 2.699z"
                        />
                      </svg>
                    </Links>

                    {/* Instagram */}
                    <Links path={siteConfig.social.instagram} styleType="link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={34}
                        height={34}
                        viewBox="0 0 20 20"
                        className="hover:opacity-70 transition-opacity"
                      >
                        <path
                          fill="#92360f"
                          d="M13 10a3 3 0 1 1-6 0q.001-.257.049-.5H6v3.997c0 .278.225.503.503.503h6.995a.503.503 0 0 0 .502-.503V9.5h-1.049q.048.243.049.5m-3 2a2 2 0 1 0-.001-4.001A2 2 0 0 0 10 12m2.4-4.1h1.199a.3.3 0 0 0 .301-.3V6.401a.3.3 0 0 0-.301-.301H12.4a.3.3 0 0 0-.301.301V7.6c.001.165.136.3.301.3M10 .4A9.6 9.6 0 0 0 .4 10a9.6 9.6 0 0 0 9.6 9.6a9.6 9.6 0 0 0 9.6-9.6A9.6 9.6 0 0 0 10 .4m5 13.489C15 14.5 14.5 15 13.889 15H6.111C5.5 15 5 14.5 5 13.889V6.111C5 5.5 5.5 5 6.111 5h7.778C14.5 5 15 5.5 15 6.111z"
                        />
                      </svg>
                    </Links>
                  </div>
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
                      className="w-full bg-primary text-primary px-4 py-3 rounded-lg border border-subtle focus:outline-none focus:border-accent transition-colors"
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
                      className="w-full bg-primary text-primary px-4 py-3 rounded-lg border border-subtle focus:outline-none focus:border-accent transition-colors"
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
                      className="w-full bg-primary text-primary px-4 py-3 rounded-lg border border-subtle focus:outline-none focus:border-accent transition-colors"
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
                      className="w-full bg-primary text-primary px-4 py-3 rounded-lg border border-subtle focus:outline-none focus:border-accent transition-colors resize-none"
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
