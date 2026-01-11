"use client";
import { useState } from "react";
function FooterForm() {
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
  )
}

export default FooterForm