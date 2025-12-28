"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ServiceCard({ icon, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-col p-8 bg-bg-secondary border   ${
        isHovered ? "border-text-secondary" : "border-bg-primary"
      } transition-all duration-300 cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex gap-4 justify-center items-center">
        <div
          className={`${
            isHovered ? "bg-border-subtle" : "bg-transparent"
          } flex items-center justify-center w-14 h-14 mb-6 text-text-secondary transition-all duration-300`}
        >
          {icon}
        </div>
        <h5 className="text-text-secondary mb-4">{title}</h5>
      </div>
      <p className="mb-6 mt-auto text-center text-text-secondary">
        {description}
      </p>
      <Link
        href="#"
        className={`text-bg-accent mt-auto inline-flex items-center transition-all duration-300 mx-auto ${
          isHovered ? "gap-3" : "gap-2"
        } `}
      >
        Learn More <ArrowRight size={18} />
      </Link>
    </div>
  );
}
