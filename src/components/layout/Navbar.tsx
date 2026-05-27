"use client";

import { useState } from "react";
import { Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [dark, setDark] = useState(true);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 lg:px-24 py-6">
      {/* Logo */}
      <a href="/" className="text-white text-2xl font-black select-none" aria-label="Home">
        ✳
      </a>

      {/* Links + toggle */}
      <div className="flex items-center gap-8">
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-white/70 hover:text-white text-sm tracking-wide transition-colors duration-200"
          >
            {label}
          </a>
        ))}

        <button
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle theme"
          className="text-white/70 hover:text-white transition-colors duration-200 ml-2"
        >
          {dark ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </nav>
  );
}
