"use client";

import { Asterisk } from "lucide-react";
import { ToggleTheme } from "@/components/ui/toggle-theme";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-5">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <a href="/" aria-label="Home" className="text-[#818cf8] hover:opacity-80 transition-opacity duration-200">
          <Asterisk size={26} strokeWidth={2.5} />
        </a>

        <div className="flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="dark:text-white/70 dark:hover:text-white text-gray-500 hover:text-gray-900 text-sm tracking-wide transition-colors duration-200"
            >
              {label}
            </a>
          ))}

          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
}
