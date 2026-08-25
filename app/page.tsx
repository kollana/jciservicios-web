"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { ClientsCarousel } from "@/components/clients-carousel";

const PROJECTS = [
  {
    id: "621905251189",
    title: "Savar",
    category: "Ingeniería eléctrica",
    year: "2024",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: "473341304170",
    title: "Fibra Prime",
    category: "Baja y media tensión",
    year: "2023",
    img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: "1555963966",
    title: "Royal Plaza",
    category: "Mantenimiento eléctrico",
    year: "2024",
    img: "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?w=800&h=600&fit=crop&auto=format",
  },
  {
    id: "1758101755915",
    title: "Pardos Chicken, Cineplanet, Plaza Vea y Real Plaza",
    category: "Sistemas eléctricos y conexos",
    year: "2023",
    img: "https://images.unsplash.com/photo-1758101755915-462eddc23f57?w=800&h=600&fit=crop&auto=format",
  },
];

const SERVICES = [
  {
    number: "01",
    title: "Sistema de Puesta a Tierra",
    desc: "Construcción, evaluación del terreno y mantenimiento preventivo con equipo MEGABRASS. Analizamos fugas, desfogamos energía parásita y corregimos conexiones.",
  },
  {
    number: "02",
    title: "Grupo Electrógeno",
    desc: "Mantenimiento preventivo y correctivo, calibración, instalación, traslado y pruebas de carga para validar el rendimiento.",
  },
  {
    number: "03",
    title: "Tableros Eléctricos MT y BT",
    desc: "Diseño, fabricación, mantenimiento, análisis de cargas, termografía y ensamblaje de tableros eléctricos y bancos de condensadores.",
  },
  {
    number: "04",
    title: "Aire Acondicionado",
    desc: "Mantenimiento, instalación de sistemas split, piso-techo y VRF, limpieza de ductos y proyectos integrales de climatización.",
  },
  {
    number: "05",
    title: "Corrientes Débiles",
    desc: "Alarma DACI, control de accesos, data, fibra óptica, cableado estructurado y diseño e instalación de CCTV.",
  },
  {
    number: "06",
    title: "Baja, Media Tensión e Iluminación",
    desc: "Ingeniería, canalización electromecánica, tuberías, tomacorrientes, luminarias LED, iluminación de emergencia y control inteligente.",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
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
          <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-volt mb-2">
            {project.category} — {project.year}
          </span>
          <h3
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              lineHeight: 1.05,
            }}
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
    <div
      className="min-h-screen bg-ground text-chalk"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <Header />
      <Hero />
      <Services />
      <ClientsCarousel />
      {/* ── PROJECTS ── */}
      <section
        id="projects"
        className="px-8 md:px-16 pt-28 pb-44 border-t border-rule"
      >
        <div className="flex flex-col items-center text-center mb-16 gap-6">
          <div>
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-volt mb-4">
              Clientes destacados
            </p>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                lineHeight: 1,
              }}
              className="text-[clamp(2.5rem,6vw,5rem)] uppercase"
            >
              Proyectos destacados
            </h2>
          </div>
          <a
            href="#contact"
            className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted hover:text-volt transition-colors"
          >
            Solicitar una asesoría →
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
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-volt  mb-4">
              Nosotros
            </p>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                lineHeight: 1,
              }}
              className="text-[clamp(2.5rem,5vw,4.5rem)] uppercase mb-8"
            >
              Ingeniería
              <br />
              con calidad
              <br />y propósito
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-6 max-w-md">
              JCI Servicios Eléctricos S.A.C. es una empresa fundada en 2018,
              especializada en el diseño, construcción e instalación de redes,
              iluminación y proyectos de energía renovable. Ofrecemos asesorías
              y soluciones integrales.
            </p>
            <p className="text-muted text-sm leading-relaxed max-w-md">
              Trabajamos con calidad, innovación y eficiencia, priorizando la
              satisfacción del cliente, la responsabilidad social y ambiental,
              la seguridad laboral y el mejoramiento continuo.
            </p>

            <div className="mt-8 grid gap-5 max-w-lg">
              <div>
                <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-volt mb-2">
                  Misión
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  Ofrecer servicios eléctricos y conexos con calidad, innovación
                  y eficiencia, priorizando la satisfacción del cliente y la
                  responsabilidad social y ambiental.
                </p>
              </div>
              <div>
                <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-volt mb-2">
                  Visión
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  Ser líderes nacionales en servicios eléctricos, destacando por
                  profesionalismo y calidad, promoviendo el desarrollo
                  sostenible, el uso eficiente de la energía y la seguridad
                  laboral.
                </p>
              </div>
              <div>
                <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-volt mb-2">
                  Marcas asociadas
                </div>
                <p className="text-muted text-sm leading-relaxed">
                  Panduit, Fluke, Indeco, Megabras, Bticino, Schneider Electric,
                  ABB, Legrand y 3M.
                </p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              {[
                { label: "2018", sub: "Año de fundación" },
                { label: "0", sub: "Accidentes" },
                { label: "7+", sub: "Años de experiencia" },
                { label: "24 / 7", sub: "Atención de emergencias" },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-volt pl-4">
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                    }}
                    className="text-xl uppercase text-chalk"
                  >
                    {item.label}
                  </div>
                  <div className="text-[11px] tracking-widest uppercase text-muted mt-0.5">
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden min-h-100 lg:min-h-0">
            <img
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=900&h=900&fit=crop&auto=format"
              alt="Ingeniero eléctrico de JCI en campo"
              className="w-full h-full object-cover opacity-65"
            />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-volt px-6 py-4 inline-block">
                <p
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                  }}
                  className="text-ground text-lg uppercase tracking-wide"
                >
                  Cero accidentes
                  <br />y compromiso con la seguridad
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
            alt="Infraestructura eléctrica"
            className="h-full w-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-linear-to-r from-volt via-volt/85 to-transparent" />
        </div>
        <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              lineHeight: 1,
            }}
            className="text-[clamp(2rem,5vw,4rem)] uppercase text-ground"
          >
            ¿Listo para impulsar
            <br />
            tu próximo proyecto?
          </h2>
          <a
            href="#contact"
            className="shrink-0 px-10 py-5 bg-[#080808] text-[#f5f5f0] text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#1a1a1a] transition-colors"
          >
            Contactar al equipo
          </a>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        id="contact"
        className="px-8 md:px-16 py-28 border-t border-[#2a2a2a]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-[#e8f000] mb-4">
              Contáctanos
            </p>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                lineHeight: 1,
              }}
              className="text-[clamp(2.5rem,5vw,4.5rem)] uppercase mb-6"
            >
              Hablemos de tu proyecto
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted mb-10">
              Cuéntanos qué necesitas y nuestro equipo te ayudará a definir la
              solución eléctrica adecuada.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              {[
                {
                  label: "Dirección",
                  value:
                    "Calle los Tulipanes mz d lote 2\nViña Alta - La Molina",
                  href: "https://maps.google.com/?q=Calle+los+Tulipanes+Viña+Alta+La+Molina",
                },
                {
                  label: "Área comercial",
                  value: "941 326 826",
                  href: "tel:+51941326826",
                },
                {
                  label: "Área gerencial",
                  value: "932 490 863",
                  href: "tel:+51932490863",
                },
                {
                  label: "Correo",
                  value: "comercial@jciservicioselectricos.com",
                  href: "mailto:comercial@jciservicioselectricos.com",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`border-t border-[#2a2a2a] pt-4 ${item.label === "Área comercial" ? "border-t-[#e8f000]" : ""}`}
                >
                  <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#6b6b6b] mb-2">
                    {item.label}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className={`text-sm whitespace-pre-line transition-colors hover:text-[#e8f000] ${item.label === "Área comercial" ? "text-[#e8f000]" : "text-[#f5f5f0]"}`}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <div className="text-sm text-[#f5f5f0] whitespace-pre-line">
                      {item.value}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#6b6b6b] mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full bg-[#111111] border border-[#2a2a2a] px-4 py-3 text-sm text-[#f5f5f0] placeholder-[#3a3a3a] focus:outline-none focus:border-[#e8f000] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#6b6b6b] mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  placeholder="Nombre de tu empresa"
                  className="w-full bg-[#111111] border border-[#2a2a2a] px-4 py-3 text-sm text-[#f5f5f0] placeholder-[#3a3a3a] focus:outline-none focus:border-[#e8f000] transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#6b6b6b] mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="correo@empresa.com"
                className="w-full bg-[#111111] border border-[#2a2a2a] px-4 py-3 text-sm text-[#f5f5f0] placeholder-[#3a3a3a] focus:outline-none focus:border-[#e8f000] transition-colors"
              />
            </div>
            <div>
              <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#6b6b6b] mb-2">
                Servicio requerido
              </label>
              <select className="w-full bg-[#111111] border border-[#2a2a2a] px-4 py-3 text-sm text-[#6b6b6b] focus:outline-none focus:border-[#e8f000] transition-colors appearance-none">
                <option value="">Selecciona un servicio</option>
                {SERVICES.map((s) => (
                  <option key={s.number} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#6b6b6b] mb-2">
                Detalles del proyecto
              </label>
              <textarea
                rows={5}
                placeholder="Describe el alcance, plazo y necesidades de tu proyecto..."
                className="w-full bg-[#111111] border border-[#2a2a2a] px-4 py-3 text-sm text-[#f5f5f0] placeholder-[#3a3a3a] focus:outline-none focus:border-[#e8f000] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-[#e8f000] text-[#080808] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#f5f5f0] transition-colors"
            >
              Enviar consulta
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
