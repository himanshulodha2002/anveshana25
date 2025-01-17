"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLinkActive = (link: { hash: string; name: string }) => {
    if (link.hash.startsWith("/#")) {
      return activeSection === link.name;
    }
    return pathname === link.hash;
  };

  return (
    <header className="z-[999] relative">
      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Hamburger Menu Button */}
      <button
        className="fixed top-4 right-4 z-[60] p-3 md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? (
          <X className="h-6 w-6 text-orange-400" />
        ) : (
          <Menu className="h-6 w-6 text-orange-400" />
        )}
      </button>

      {/* Navigation Menu */}
      <nav
        className={clsx(
          "fixed md:flex transition-all duration-300 ease-in-out w-full md:w-auto z-[45]",
          isMenuOpen
            ? "flex top-16 opacity-100 bg-orange-950/90 backdrop-blur-md" // Adjusted top position
            : "top-[-100%] opacity-0 md:opacity-100",
          "md:top-[2.2rem] left-1/2 h-auto -translate-x-1/2 py-2 sm:h-[initial] sm:py-0 md:bg-transparent"
        )}
      >
        <ul
          className={clsx(
            "flex flex-col md:flex-row w-[90%] md:w-[33.85rem] mx-auto items-center justify-center gap-y-5 md:gap-5 text-[0.9rem] font-medium text-gray-900",
            "bg-orange-300/20 backdrop-blur-[0.5rem] rounded-lg md:rounded-full border border-white/10 p-6 md:p-0",
            isMenuOpen ? "flex" : "hidden md:flex"
          )}
        >
          {links.map((link) => (
            <motion.li
              className="relative w-full md:w-auto"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-4 py-2 hover:text-green-950 transition text-center relative",
                  "text-base md:text-lg font-mono text-orange-400",
                  {
                    "text-gray-950": isLinkActive(link),
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                  setIsMenuOpen(false);
                }}
              >
                {link.name}
                {isLinkActive(link) && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
