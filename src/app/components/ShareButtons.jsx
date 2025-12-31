"use client";

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
      setTimeout(() => setCopied(false), 4000);
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={48}
          height={48}
          viewBox="0 0 16 16"
        >
          <path
            fill="#cccccc7b"
            d="M0 0v16h16V0zm12.8 5.6v.3c0 3.3-2.5 7-7 7c-1.4 0-2.7-.4-3.8-1.1h.6c1.2 0 2.2-.4 3.1-1.1c-1.1 0-2-.7-2.3-1.7h.5c.2 0 .4 0 .6-.1c-1.1-.2-2-1.2-2-2.4c.3.2.7.3 1.1.3c-.7-.4-1.1-1.2-1.1-2q0-.75.3-1.2C4 5.1 5.9 6 7.9 6.1c0-.2-.1-.4-.1-.6C7.8 4.1 8.9 3 10.3 3c.7 0 1.3.3 1.8.8c.6-.1 1.1-.3 1.6-.6c-.2.6-.6 1.1-1.1 1.4c.5-.1 1-.2 1.4-.4c-.3.6-.7 1-1.2 1.4"
          ></path>
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 bg-bg-secondary border border-border-subtle hover:border-text-accent hover:bg-bg-accent transition-all group"
        aria-label="Share on LinkedIn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={48}
          height={48}
          viewBox="0 0 448 512"
        >
          <path
            fill="#cccccc7b"
            d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3M135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5m282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9z"
          ></path>
        </svg>
      </a>

      {/* Facebook */}
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10  hover:border-text-accent hover:bg-bg-accent transition-all group"
        aria-label="Share on Facebook"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={48}
          height={48}
          viewBox="0 0 20 20"
        >
          <path
            fill="#cccccc7b"
            fillRule="evenodd"
            d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.792C0 19.506.494 20 1.104 20h9.578v-7.745H8.076V9.237h2.606V7.01c0-2.584 1.578-3.99 3.883-3.99c1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.596-1.496 1.47v1.927h2.989l-.39 3.018h-2.6V20h5.097c.61 0 1.104-.494 1.104-1.104V1.104C20 .494 19.506 0 18.896 0"
          ></path>
        </svg>
      </a>

      {/* Copy Link */}
      <button
        onClick={copyToClipboard}
        className="flex items-center justify-center w-12 h-12  hover:border-text-accent hover:bg-bg-accent transition-all group"
        aria-label="Copy link"
      >
        {copied ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={42}
            height={42}
            viewBox="0 0 8 8"
          >
            <path fill="#0ec2177a" d="M3 5L1 3v2l2 2l4-4V1M0 8V0h8v8"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={48}
            height={48}
            viewBox="0 0 48 48"
          >
            <path
              fill="none"
              stroke="#cccccc7b"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={4}
              d="M28 6h14v14m0 9.474V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h9m7.8 16.2L41.1 6.9"
            ></path>
          </svg>
        )}
      </button>
    </div>
  );
}
