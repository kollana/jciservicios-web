"use client"

import { useState } from "react";

const SERVICES = [
  {
    number: "01",
    title: "Industrial Wiring",
    desc: "Complete electrical infrastructure for factories, warehouses, and heavy-duty facilities. Engineered for maximum load capacity and long-term reliability.",
  },
  {
    number: "02",
    title: "Power Distribution",
    desc: "High-voltage switchgear, transformer installation, and MV/LV distribution panel design. Compliant with IEC and NEC standards.",
  },
  {
    number: "03",
    title: "Building Automation",
    desc: "Intelligent building systems integrating lighting control, HVAC, security, and energy monitoring on a unified platform.",
  },
  {
    number: "04",
    title: "Emergency Systems",
    desc: "UPS, standby generators, fire alarm wiring, and emergency lighting. Certified installation and mandatory testing protocols.",
  },
  {
    number: "05",
    title: "Solar & Renewables",
    desc: "Grid-tied and off-grid PV systems, battery storage solutions, and EV charging infrastructure at commercial scale.",
  },
  {
    number: "06",
    title: "Maintenance & Audit",
    desc: "Thermographic inspection, power quality analysis, periodic testing, and full compliance documentation.",
  },
];

export function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);
  
  return (
    <section id="services" className="px-8 md:px-16 py-28 border-t border-rule">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-volt mb-4">Lo que hacemos</p>
            <h2
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, lineHeight: 1 }}
              className="text-[clamp(2.5rem,6vw,5rem)] uppercase"
            >
              Servicios<br />clave
            </h2>
          </div>
          <p className="text-muted text-sm leading-relaxed max-w-sm md:text-right">
            Todo se gestiona internamente, sin subcontratistas ni lagunas en la rendición de cuentas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-rule">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="border-b border-r border-rule p-8 cursor-pointer group transition-colors duration-200"
              style={{ background: activeService === i ? '#111111' : 'transparent' }}
              onMouseEnter={() => setActiveService(i)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="flex items-start justify-between mb-6">
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }} className="text-[11px] tracking-[0.2em] uppercase text-volt">
                  {s.number}
                </span>
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-volt"
                >
                  <path d="M2 14L14 2M14 2H4M14 2v10" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <h3
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, lineHeight: 1.1 }}
                className="text-2xl uppercase mb-3 group-hover:text-volt transition-colors duration-200"
              >
                {s.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
  )
}