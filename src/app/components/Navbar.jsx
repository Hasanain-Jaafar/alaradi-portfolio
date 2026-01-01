"use client";

import { useState } from "react";
import Links from "./Links";
import { usePathname } from "next/navigation";
import Custbutton from "./Button";
import Image from "next/image";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  // Check if link is active
  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <div className="mx-auto bg-bg-secondary shadow-white/5 shadow-md min-w-full sticky top-0 z-50">
      <nav
        aria-label="Main navigation"
        className="flex items-center justify-between py-4 md:py-8 container mx-auto px-6"
      >
        {/* Logo */}
        <div>
          <Links path="/" styleType="link" onClick={closeMenu}>
            <div className="w-24 md:w-36">
              <Image
                src="/logo.png"
                width={395}
                height={108}
                alt="Alaradi Logo"
                priority
              />
            </div>
          </Links>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Links
            path="/blogs"
            name="Blogs"
            styleType="link"
            className={isActive("/blogs") ? "text-bg-accent!" : " "}
          />
          <Links
            path="/services"
            name="Services"
            styleType="link"
            className={isActive("/services") ? "text-bg-accent!" : ""}
          />
          <Links
            path="/about"
            name="About"
            styleType="link"
            className={isActive("/about") ? "text-bg-accent!" : ""}
          />
          <Links
            path="/myWork"
            name="My Work"
            styleType="link"
            className={isActive("/myWork") ? "text-bg-accent!" : ""}
          />
          <Links path="/contact" styleType="link">
            <Custbutton btn="Contact" styleType="smCta" />
          </Links>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Slide-in */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-bg-secondary shadow-2xl z-50 
          transform transition-transform duration-300 ease-in-out md:hidden
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button
            onClick={closeMenu}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className="flex flex-col gap-6 px-6">
          <Links
            path="/blogs"
            name="Blogs"
            styleType="link"
            onClick={closeMenu}
            className={isActive("/blogs") ? "text-bg-accent!" : ""}
          />
          <Links
            path="/services"
            name="Services"
            styleType="link"
            onClick={closeMenu}
            className={isActive("/services") ? "text-bg-accent!" : ""}
          />
          <Links
            path="/about"
            name="About"
            styleType="link"
            onClick={closeMenu}
            className={isActive("/about") ? "text-bg-accent!" : ""}
          />
          <Links
            path="/myWork"
            name="My Work"
            styleType="link"
            onClick={closeMenu}
            className={isActive("/myWork") ? "text-bg-accent!" : ""}
          />
          <Links path="/contact" styleType="link" onClick={closeMenu}>
            <Custbutton btn="Contact" styleType="smCta" />
          </Links>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
