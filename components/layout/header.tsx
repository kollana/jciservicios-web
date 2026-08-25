"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "Servicios", href: "#services" },
  { label: "Proyectos", href: "#projects" },
  { label: "Nosotros", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 h-16 border-b border-rule bg-ground/95 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 bg-volt flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M8 1L2 8h5l-1 5 6-7H7L8 1z"
              fill="#080808"
              strokeWidth="0"
            />
          </svg>
        </div>
        <span
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            letterSpacing: "0.12em",
          }}
          className="uppercase tracking-widest"
        >
          JCI Servicios<span className="text-volt">.</span>
        </span>
      </div>

      <div className="hidden md:flex items-center gap-10">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="relative text-[11px] font-medium tracking-[0.15em] uppercase text-muted transition-colors duration-200 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-volt after:transition-transform after:duration-200 hover:text-chalk hover:after:scale-x-100"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="text-[11px] font-semibold tracking-[0.15em] uppercase px-5 py-2.5 bg-volt text-ground transition-all duration-200 hover:bg-chalk hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(232,240,0,0.18)]"
        >
          Contactar ahora
        </a>
      </div>

      <button
        className="md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Abrir menú"
      >
        <span
          className={`block w-6 h-px bg-chalk transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`}
        />
        <span
          className={`block w-6 h-px bg-chalk transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`}
        />
        <span
          className={`block w-6 h-px bg-chalk transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
        />
      </button>

      {mobileOpen && (
        <div className="absolute top-16 left-0 right-0 bg-surface border-b border-rule py-6 flex flex-col gap-4 px-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="relative text-sm font-medium tracking-[0.15em] uppercase text-muted transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-12 after:origin-left after:scale-x-0 after:bg-volt after:transition-transform after:duration-200 hover:text-chalk hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
