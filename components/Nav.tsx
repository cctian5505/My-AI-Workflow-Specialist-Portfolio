"use client";

import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#what-i-do", label: "What I Do" },
  { href: "#projects", label: "Projects" },
  { href: "#tools", label: "Tools" },
  { href: "#contact", label: "Contact" },
];

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .map((w) => w[0]?.toUpperCase())
    .slice(0, 2)
    .join("");
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display font-semibold tracking-tight text-lg text-text hover:text-accent transition-colors"
          aria-label={`${portfolio.profile.name} — home`}
        >
          {initials(portfolio.profile.name)}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden sm:flex items-center gap-8 font-mono text-[13px] tracking-wide uppercase text-text-muted">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-text transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="sm:hidden font-mono text-[13px] uppercase tracking-wide text-text-muted hover:text-text transition-colors"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
