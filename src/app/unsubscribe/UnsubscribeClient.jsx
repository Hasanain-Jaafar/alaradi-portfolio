"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function UnsubscribeClient() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState("idle"); // idle, loading, success, error, manual
  const [message, setMessage] = useState("");
  const [unsubscribedEmail, setUnsubscribedEmail] = useState("");
  const [manualEmail, setManualEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const token = searchParams.get("token");

    // If no token, show manual unsubscribe form
    if (!token) {
      setStatus("manual");
      return;
    }

    // Validate token format
    if (!/^[a-f0-9]{64}$/.test(token)) {
      setStatus("manual");
      setMessage("Invalid token. Please enter your email below to unsubscribe.");
      return;
    }

    // Auto-unsubscribe with token
    setStatus("loading");
    const unsubscribe = async () => {
      try {
        const response = await fetch("/api/unsubscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });

        const data = await response.json();

        if (data.success) {
          setStatus("success");
          setMessage(data.message);
          setUnsubscribedEmail(data.email);
        } else {
          setStatus("manual");
          setMessage(data.error || "Token invalid. Please enter your email below.");
        }
      } catch (error) {
        setStatus("manual");
        setMessage("An error occurred. Please enter your email below to unsubscribe.");
        console.error("Unsubscribe error:", error);
      }
    };

    unsubscribe();
  }, [searchParams]);

  const handleManualUnsubscribe = async (e) => {
    e.preventDefault();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(manualEmail)) {
      setMessage("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: manualEmail }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setUnsubscribedEmail(data.email);
        setMessage(data.message);
      } else {
        setMessage(data.error || "Failed to unsubscribe. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
      console.error("Manual unsubscribe error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 md:p-12 shadow-2xl">
          {status === "loading" && (
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mb-6"></div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Processing your request...
              </h1>
              <p className="text-gray-400">
                Please wait while we unsubscribe you from the newsletter.
              </p>
            </div>
          )}

          {status === "manual" && (
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Unsubscribe from Newsletter
              </h1>
              {message && (
                <p className="text-orange-400 mb-6">{message}</p>
              )}
              <p className="text-gray-400 mb-8">
                Enter your email address to unsubscribe from Alaradi Newsletter.
              </p>

              <form onSubmit={handleManualUnsubscribe} className="max-w-md mx-auto">
                <div className="mb-6">
                  <input
                    type="email"
                    value={manualEmail}
                    onChange={(e) => setManualEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
                >
                  {isSubmitting ? "Processing..." : "Unsubscribe"}
                </button>
              </form>

              <div className="mt-8">
                <Link
                  href="/"
                  className="text-gray-400 hover:text-orange-500 text-sm underline"
                >
                  Return to Homepage
                </Link>
              </div>
            </div>
          )}

          {status === "success" && (
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-6">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Successfully Unsubscribed
              </h1>
              <p className="text-gray-300 mb-2">
                {unsubscribedEmail && `${unsubscribedEmail} has been removed from our newsletter.`}
              </p>
              <p className="text-gray-400 mb-8">
                We&apos;re sorry to see you go! You will no longer receive emails from
                Alaradi Newsletter.
              </p>
              <div className="space-y-4">
                <p className="text-gray-400 text-sm">
                  Changed your mind? You can always subscribe again from our
                  homepage.
                </p>
                <Link
                  href="/"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
                >
                  Return to Homepage
                </Link>
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-gray-500 text-sm mt-6">
          Alaradi Newsletter - Delivering quality content on web development and
          design
        </p>
      </div>
    </div>
  );
}
