"use client";

import {
  Twitter,
  Linkedin,
  Facebook,
  Link as LinkIcon,
  Check,
} from "lucide-react";
import { useState } from "react";

export default function ShareButtons({ title, url }) {
  const [copied, setCopied] = useState(false);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title
    )}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <h6 className="text-text-accent-light  font-semibold">Share:</h6>

      {/* Twitter */}
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 bg-bg-secondary border border-border-subtle hover:border-text-accent hover:bg-bg-accent transition-all group"
        aria-label="Share on Twitter"
      >
        <Twitter
          size={18}
          className="text-text-secondary group-hover:text-white transition-colors"
        />
      </a>

      {/* LinkedIn */}
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 bg-bg-secondary border border-border-subtle hover:border-text-accent hover:bg-bg-accent transition-all group"
        aria-label="Share on LinkedIn"
      >
        <Linkedin
          size={18}
          className="text-text-secondary group-hover:text-white transition-colors"
        />
      </a>

      {/* Facebook */}
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 bg-bg-secondary border border-border-subtle hover:border-text-accent hover:bg-bg-accent transition-all group"
        aria-label="Share on Facebook"
      >
        <Facebook
          size={18}
          className="text-text-secondary group-hover:text-white transition-colors"
        />
      </a>

      {/* Copy Link */}
      <button
        onClick={copyToClipboard}
        className="flex items-center justify-center w-10 h-10 bg-bg-secondary border border-border-subtle hover:border-text-accent hover:bg-bg-accent transition-all group"
        aria-label="Copy link"
      >
        {copied ? (
          <Check size={18} className="text-green-500" />
        ) : (
          <LinkIcon
            size={18}
            className="text-text-secondary group-hover:text-white transition-colors"
          />
        )}
      </button>
    </div>
  );
}
