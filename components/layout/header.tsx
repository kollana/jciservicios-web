"use client"

import { useState } from "react";

const NAV_LINKS = ["Servicios", "Proyectos", "Nostros", "Contactos"];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 h-16 border-b border-rule bg-ground/95 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-volt flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M8 1L2 8h5l-1 5 6-7H7L8 1z" fill="#080808" strokeWidth="0"/>
            </svg>
          </div>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.12em' }} className="uppercase tracking-widest">
            Voltex<span className="text-volt">.</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted hover:text-chalk transition-colors duration-200"
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[11px] font-semibold tracking-[0.15em] uppercase px-5 py-2.5 bg-volt text-ground hover:bg-chalk transition-colors duration-200"
          >
            Contactar ahora
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-chalk transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-6 h-px bg-chalk transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-chalk transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>

        {mobileOpen && (
          <div className="absolute top-16 left-0 right-0 bg-surface border-b border-rule py-6 flex flex-col gap-4 px-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium tracking-[0.15em] uppercase text-muted hover:text-chalk transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        )}
      </nav>
  )
}