"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ServiceCard({ icon, title, description, colors }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        display:'flex',
        flexDirection:'column',
        backgroundColor: colors.bgSecondary,
        padding: "2rem",
        borderRadius: "0.5rem",
        border: `1px solid ${isHovered ? colors.accent : colors.borderSubtle}`,
        transition: "all 0.3s",
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-4 justify-center items-center">
          <div
            style={{
              width: "3.5rem",
              height: "3.5rem",
              backgroundColor: isHovered ? "rgba(165, 165, 165, 0.2)" : "transparent",
              borderRadius: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1.5rem",
              color: colors.textSecondary,
              transition: "all 0.3s",
            }}
          >
            {icon}
          </div>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: colors.textPrimary,
            }}
          >
            {title}
          </h3>
      </div>
      <p
        style={{
          color: colors.textSecondary,
          lineHeight: "1.75",
          textAlign:"center",
          marginBottom: "1.5rem",
        }}
      >
        {description}
      </p>
      <Link
        href="#"
        style={{
          color: colors.accent,
          fontWeight: 600,
          marginTop:'auto',
          display: "inline-flex",
          alignItems: "center",
          gap: isHovered ? "0.75rem" : "0.5rem",
          textDecoration: "none",
          transition: "all 0.3s",
          margin:'auto',
        }}
      >
        Learn More <ArrowRight size={18} />
      </Link>
    </div>
  );
}
