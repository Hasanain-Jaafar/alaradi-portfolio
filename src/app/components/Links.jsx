"use client";

import Link from "next/link";

const styles = {
  logo: "font-logo text-4xl text-white cursor-pointer transition-all duration-200 hover:text-white/65",
  link: "font-heading text-lg text-txt-btn cursor-pointer transition-all duration-300 hover:text-text-accent-light",
  footerLink:
    "font-heading text-text-secondary cursor-pointer transition-all duration-200 hover:text-white/65",
};

function Links(
  { path, name = "", styleType, children, onClick = () => {}, className = "" }) {
    const defaultColor = className ? '' : 'text-white';
  return (
    <Link
      href={path}
      className={`${styles[styleType]} ${defaultColor} ${className}`}
      onClick={onClick}
    >
      {name}
      {children}
    </Link>
  );
}

export default Links;
