"use client"

import { useEffect, useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";

const PROJECTS = [
  {
    id: "621905251189",
    title: "Northgate Industrial Complex",
    category: "Industrial Wiring",
    year: "2024",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: "473341304170",
    title: "Kellner Power Grid Extension",
    category: "Power Distribution",
    year: "2023",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: "1555963966",
    title: "Meridian Data Center",
    category: "Emergency Systems",
    year: "2024",
    img: "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: "1758101755915",
    title: "Halcyon Office Tower",
    category: "Building Automation",
    year: "2023",
    img: "https://images.unsplash.com/photo-1758101755915-462eddc23f57?w=800&h=600&fit=crop&auto=format",
  },
];

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

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[number]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const card = document.getElementById(`project-${project.id}`);
    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [project.id]);

  return (
    <div
      id={`project-${project.id}`}
      className={`relative transition-all duration-700 ease-out ${
        isVisible
          ? "translate-x-0 opacity-100"
          : index % 2 === 0
            ? "-translate-x-16 opacity-0"
            : "translate-x-16 opacity-0"
      } aspect-4/3 md:aspect-auto ${index === 0 || index === 3 ? "md:col-span-7" : "md:col-span-5"}`}
    >
      <div className="relative h-full overflow-hidden group bg-ground cursor-pointer">
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-75"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-volt mb-2">{project.category} — {project.year}</span>
          <h3
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, lineHeight: 1.05 }}
            className="text-3xl uppercase text-chalk transition-transform duration-300 group-hover:translate-x-2"
          >
            {project.title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-ground text-chalk" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Header />
      <Hero />
      <Services />
      {/* ── PROJECTS ── */}
      <section id="projects" className="px-8 md:px-16 pt-28 pb-44 border-t border-rule">
        <div className="flex flex-col items-center text-center mb-16 gap-6">
          <div>
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-volt mb-4">Selected Work</p>
            <h2
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, lineHeight: 1 }}
              className="text-[clamp(2.5rem,6vw,5rem)] uppercase"
            >
              Featured Projects
            </h2>
          </div>
          <a href="#contact" className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted hover:text-volt transition-colors">
            All Projects →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[minmax(260px,30vw)] gap-4">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="border-t border-rule">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="px-8 md:px-16 py-28">
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-volt  mb-4">Who We Are</p>
            <h2
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, lineHeight: 1 }}
              className="text-[clamp(2.5rem,5vw,4.5rem)] uppercase mb-8"
            >
              Engineering<br />Without<br />Compromise
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-6 max-w-md">
              Founded in 1996, Voltex has grown from a regional contractor into an international electrical engineering firm serving industries across 12 countries. Our team of 340+ certified engineers brings precision to every kilowatt.
            </p>
            <p className="text-muted text-sm leading-relaxed max-w-md">
              We hold ISO 9001 quality certification, NFPA 70E compliance, and maintain an unblemished safety record across 28 consecutive years of operation.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8">
              {[
                { label: "ISO 9001", sub: "Quality Certified" },
                { label: "NFPA 70E", sub: "Safety Compliant" },
                { label: "340+", sub: "Engineers on Staff" },
                { label: "24 / 7", sub: "Emergency Response" },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-volt pl-4">
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700 }} className="text-xl uppercase text-chalk">
                    {item.label}
                  </div>
                  <div className="text-[11px] tracking-widest uppercase text-muted mt-0.5">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden min-h-100 lg:min-h-0">
            <img
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=900&h=900&fit=crop&auto=format"
              alt="Voltex engineer at work"
              className="w-full h-full object-cover opacity-65"
            />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-volt px-6 py-4 inline-block">
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }} className="text-ground text-lg uppercase tracking-wide">
                  Zero lost-time injuries<br />in 2023 — 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="relative isolate overflow-hidden border-t border-rule bg-volt px-8 py-16 md:px-16">
        <div className="absolute inset-y-0 right-0 hidden w-[58%] md:block">
          <img
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=500&fit=crop&auto=format"
            alt="Electrical power infrastructure"
            className="h-full w-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-linear-to-r from-volt via-volt/85 to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <h2
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, lineHeight: 1 }}
          className="text-[clamp(2rem,5vw,4rem)] uppercase text-ground"
        >
          Ready to power<br />your next project?
        </h2>
        <a
          href="#contact"
          className="shrink-0 px-10 py-5 bg-[#080808] text-[#f5f5f0] text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#1a1a1a] transition-colors"
        >
          Contact our team
        </a>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="px-8 md:px-16 py-28 border-t border-[#2a2a2a]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#e8f000] mb-4">Get in touch</p>
            <h2
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, lineHeight: 1 }}
              className="text-[clamp(2.5rem,5vw,4.5rem)] uppercase mb-6"
            >
              Start a conversation
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted mb-10">
              Tell us what you are building, and our engineering team will help you define the right electrical solution.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              {[
                { label: "Headquarters", value: "14 Ampere Boulevard, Suite 800\nCharlotte, NC 28202", href: "#contact" },
                { label: "General enquiries", value: "enquiries@voltex-eng.com", href: "mailto:enquiries@voltex-eng.com" },
                { label: "Emergency line", value: "+1 (800) 556-2490", href: "tel:+18005562490" },
                { label: "Operating hours", value: "Mon–Fri 07:00–18:00\nEmergency: 24 / 7" },
              ].map((item) => (
                <div key={item.label} className={`border-t border-[#2a2a2a] pt-4 ${item.label === "Emergency line" ? "border-t-[#e8f000]" : ""}`}>
                  <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#6b6b6b] mb-2">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className={`text-sm whitespace-pre-line transition-colors hover:text-[#e8f000] ${item.label === "Emergency line" ? "text-[#e8f000]" : "text-[#f5f5f0]"}`}>
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm text-[#f5f5f0] whitespace-pre-line">{item.value}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#6b6b6b] mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  className="w-full bg-[#111111] border border-[#2a2a2a] px-4 py-3 text-sm text-[#f5f5f0] placeholder-[#3a3a3a] focus:outline-none focus:border-[#e8f000] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#6b6b6b] mb-2">Company</label>
                <input
                  type="text"
                  placeholder="Acme Industries"
                  className="w-full bg-[#111111] border border-[#2a2a2a] px-4 py-3 text-sm text-[#f5f5f0] placeholder-[#3a3a3a] focus:outline-none focus:border-[#e8f000] transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#6b6b6b] mb-2">Email</label>
              <input
                type="email"
                placeholder="jane@acme.com"
                className="w-full bg-[#111111] border border-[#2a2a2a] px-4 py-3 text-sm text-[#f5f5f0] placeholder-[#3a3a3a] focus:outline-none focus:border-[#e8f000] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#6b6b6b] mb-2">Service required</label>
              <select className="w-full bg-[#111111] border border-[#2a2a2a] px-4 py-3 text-sm text-[#6b6b6b] focus:outline-none focus:border-[#e8f000] transition-colors appearance-none">
                <option value="">Select a service</option>
                {SERVICES.map((s) => <option key={s.number} value={s.title}>{s.title}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#6b6b6b] mb-2">Project brief</label>
              <textarea
                rows={5}
                placeholder="Describe your project scope, timeline, and requirements..."
                className="w-full bg-[#111111] border border-[#2a2a2a] px-4 py-3 text-sm text-[#f5f5f0] placeholder-[#3a3a3a] focus:outline-none focus:border-[#e8f000] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-[#e8f000] text-[#080808] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#f5f5f0] transition-colors"
            >
              Submit enquiry
            </button>
          </form>
        </div>
      </section>

      <Footer />

    </div>
  );
}
