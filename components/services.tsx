"use client"

import { useState } from "react";

const SERVICES = [
  {
    number: "01",
    title: "Industrial Wiring",
    desc: "Complete electrical infrastructure for factories, warehouses, and heavy-duty facilities. Engineered for maximum load capacity and long-term reliability.",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&h=700&fit=crop&auto=format",
  },
  {
    number: "02",
    title: "Power Distribution",
    desc: "High-voltage switchgear, transformer installation, and MV/LV distribution panel design. Compliant with IEC and NEC standards.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&h=700&fit=crop&auto=format",
  },
  {
    number: "03",
    title: "Building Automation",
    desc: "Intelligent building systems integrating lighting control, HVAC, security, and energy monitoring on a unified platform.",
    image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=900&h=700&fit=crop&auto=format",
  },
  {
    number: "04",
    title: "Emergency Systems",
    desc: "UPS, standby generators, fire alarm wiring, and emergency lighting. Certified installation and mandatory testing protocols.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&h=700&fit=crop&auto=format",
  },
  {
    number: "05",
    title: "Solar & Renewables",
    desc: "Grid-tied and off-grid PV systems, battery storage solutions, and EV charging infrastructure at commercial scale.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&h=700&fit=crop&auto=format",
  },
  {
    number: "06",
    title: "Maintenance & Audit",
    desc: "Thermographic inspection, power quality analysis, periodic testing, and full compliance documentation.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&h=700&fit=crop&auto=format",
  },
];

export function Services() {
  const [activeService, setActiveService] = useState(0);

  const service = SERVICES[activeService];
  
  return (
    <section id="services" className="px-8 md:px-16 py-28 border-t border-rule">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-volt mb-4">What we do</p>
            <h2
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, lineHeight: 1 }}
              className="text-[clamp(2.5rem,6vw,5rem)] uppercase"
            >
              Core services
            </h2>
          </div>
          <p className="text-muted text-sm leading-relaxed max-w-sm md:text-right">
            Everything is managed in-house, with no subcontractors and no gaps in accountability.
          </p>
        </div>

        <div className="border border-rule bg-surface">
          <div className="grid min-h-72 grid-cols-1 md:grid-cols-[1.6fr_1fr]">
            <div key={service.number} aria-live="polite" className="service-content-transition flex flex-col justify-center p-8 md:p-12">
              <span className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-volt">Featured capability</span>
              <h3
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, lineHeight: 1.05 }}
                className="mb-5 text-[clamp(2.5rem,5vw,5rem)] uppercase text-chalk"
              >
                {service.title}
              </h3>
              <p className="max-w-2xl text-sm leading-relaxed text-muted md:text-base">{service.desc}</p>
            </div>
            <div key={`${service.number}-image`} className="service-content-transition relative min-h-64 overflow-hidden border-t border-rule md:border-l md:border-t-0">
              <img
                src={service.image}
                alt={`${service.title} service`} 
                className="h-full w-full object-cover opacity-65 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ground/70 via-transparent to-transparent" />
              <span className="absolute right-6 top-6 z-10 bg-ground/80 px-3 py-2 text-xs tracking-[0.15em] text-chalk backdrop-blur-sm">
                {String(activeService + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
              </span>
              <span className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.2em] text-chalk/80">Voltex field operations</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 border-t border-rule p-4 md:px-12">
            {SERVICES.map((item, index) => (
              <button
                key={item.number}
                type="button"
                onClick={() => setActiveService(index)}
                aria-label={`Show ${item.title}`}
                aria-current={activeService === index}
                className={`px-3 py-2 text-[10px] font-medium uppercase tracking-[0.15em] transition-colors ${
                  activeService === index ? "bg-volt text-ground" : "text-muted hover:text-chalk"
                }`}
              >
                {item.number}
              </button>
            ))}
          </div>
        </div>
      </section>
  )
}