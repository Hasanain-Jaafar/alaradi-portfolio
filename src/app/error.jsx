'use client';

import Link from 'next/link';
import { Home, RefreshCcw } from 'lucide-react';

export default function Error({ reset }) {
  return (
    <div className="min-h-screen bg-primary text-primary flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        
        {/* Error Icon */}
        <h1 className="text-9xl md:text-[12rem] animate-pulse font-bold text-text-accent-light mb-4 font-display leading-none">
          ⚠️
        </h1>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-text-secondary mb-4 font-logo">
          Something Went Wrong
        </h2>

        {/* Description */}
        <p className="text-secondary text-lg mb-8 leading-relaxed">
          An unexpected error occurred. Don&apos;t worry, we&apos;re on it.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 text-text-primary bg-text-accent-light hover:bg-[#fb923c] px-8 py-3 font-semibold transition-all"
          >
            <RefreshCcw size={20} />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 text-text-accent border border-border-accent hover:bg-bg-secondary px-8 py-3 font-semibold transition-all"
          >
            <Home size={20} />
            Back to Home
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-subtle">
          <p className="text-secondary text-sm mb-4">
            Try these pages instead:
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link
              href="/about"
              className="text-accent hover:text-[#fb923c] transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-accent hover:text-[#fb923c] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/work"
              className="text-accent hover:text-[#fb923c] transition-colors"
            >
              Work
            </Link>
            <Link
              href="/blogs"
              className="text-accent hover:text-[#fb923c] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-accent hover:text-[#fb923c] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}