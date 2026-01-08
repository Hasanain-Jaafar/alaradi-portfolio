"use client";

import { useState } from "react";
import Image from "next/image";
import Links from "./Links";
import Link from "next/link";
import { siteConfig } from "@/config/site";

function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // 'success', 'error', or null
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus(null), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(null), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="mt-auto bg-bg-secondary w-full">
      <div className="container mx-auto px-6 pt-10  md:pt-10 md:pb-2">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-6">
          {/* Logo & Contact Information */}
          <div className="flex flex-col">
            <Links path="/" styleType="link">
              <div className="w-32 md:w-40 mb-8">
                <Image
                  src="/logo.png"
                  width={395}
                  height={108}
                  alt="Alaradi Logo"
                  priority
                />
              </div>
            </Links>

            <h6 className="text-text-primary mb-4 text-lg font-semibold">
              Contact Information
            </h6>

            <Link
              href={`mailto:${siteConfig.email}`}
              className="font-heading text-text-secondary flex items-center gap-2 mb-3 hover:text-text-accent transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
              >
                <path
                  fill="#cccccc7b"
                  d="M3.87 4h13.25C18.37 4 19 4.59 19 5.79v8.42c0 1.19-.63 1.79-1.88 1.79H3.87c-1.25 0-1.88-.6-1.88-1.79V5.79c0-1.2.63-1.79 1.88-1.79m6.62 8.6l6.74-5.53c.24-.2.43-.66.13-1.07c-.29-.41-.82-.42-1.17-.17l-5.7 3.86L4.8 5.83c-.35-.25-.88-.24-1.17.17c-.3.41-.11.87.13 1.07z"
                />
              </svg>
              {siteConfig.email}
            </Link>

            <Link
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="font-heading text-text-secondary flex items-center gap-2 hover:text-text-accent transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 448 512"
              >
                <path
                  fill="#cccccc7b"
                  d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3z"
                />
              </svg>
              {siteConfig.phone}
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="flex flex-col max-w-34">
            <h6 className="text-text-secondary mb-4 text-lg font-semibold">
              Helpful Links
            </h6>
            <div className="flex flex-col gap-3">
              <Links path="/about" name="About" styleType="footerLink" />
              <Links path="/services" name="Services" styleType="footerLink" />
              <Links path="/faq" name="FAQ" styleType="footerLink" />
              <Links path="/blogs" name="Blogs" styleType="footerLink" />
              <Links path="/myWork" name="My Work" styleType="footerLink" />
              <Links path="/contact" name="Contact" styleType="footerLink" />
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="flex flex-col">
            <h5 className="text-text-secondary mb-4 text-xl font-bold">
              Get In Touch!
            </h5>

            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex border border-accent h-12 relative">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-2 bg-bg-primary text-text-primary  focus:outline-none focus:border-border-accent transition-colors disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex justify-center border-none items-center gap-2 bg-bg-accent px-4 py-2 text-txt-btn shadow-md cursor-pointer transition-all duration-300 ease-in-out hover:bg-text-accent-light text-sm md:text-base whitespace-nowrap min-w-30 disabled:opacity-50 disabled:cursor-not-allowed absolute right-1 top-1/2 -translate-y-1/2 "
                >
                  {isSubmitting ? "Sending..." : "Subscribe"}
                </button>
              </div>

              {/* Success Message */}
              {status === "success" && (
                <p className="text-green-500 text-sm mt-2">
                  ✓ Subscribed! Check your email.
                </p>
              )}

              {/* Error Message */}
              {status === "error" && (
                <p className="text-red-500 text-sm mt-2">
                  ✗ Something went wrong. Try again.
                </p>
              )}
            </form>

            <h6 className="text-text-secondary mb-3 text-lg font-semibold">
              Follow Us
            </h6>
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

        {/* Divider */}
        <hr className="border-white/10 mb-6" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-text-secondary text-sm">
            &copy; 2025 Copyright Alaradi. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Links
              path="/pages/privacy"
              name="Privacy Policy"
              styleType="footerLink"
            />
            <Links
              path="/pages/terms"
              name="Terms & Condition"
              styleType="footerLink"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
