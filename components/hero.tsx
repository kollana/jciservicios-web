const STATS = [
  { value: "10", unit: "AÑOS", label: "En el rubro" },
  { value: "100+", unit: "", label: "Proyectos completados" },
  { value: "99.7", unit: "%", label: "Tiempo de actividad" },
  { value: "5", unit: "", label: "Empresas lideres" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-ground"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1413882353314-73389f63b6fd?w=1600&h=1000&fit=crop&auto=format')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.18,
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, #080808 100%)' }} />

        <div className="relative z-10 flex-1 flex items-center px-8 md:px-16 pt-12">
          <div className="max-w-5xl">
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-volt mb-8">
              Más de 10 años de experiencia en el rubro.
            </p>

            <h1
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.01em' }}
              className="text-[clamp(4rem,12vw,10rem)] uppercase text-chalk"
            >
              Infraestructura<br />
              <span className="text-volt">Para</span><br />
              no detenerse.
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 mt-12 items-start">
              <p className="text-muted text-sm leading-relaxed max-w-md">
                Contamos con la infraestructura y medios tecnológicos necesarios con capacidad para diseñar, proveer e instalar soluciones en Sistemas Eléctricos.
              </p>
              <div className="flex gap-4 sm:ml-auto shrink-0">
                <a
                  href="#services"
                  className="px-8 py-4 bg-volt text-ground text-xs font-bold tracking-[0.15em] uppercase hover:bg-chalk transition-colors"
                >
                  Nuestros servicios
                </a>
                <a
                  href="#projects"
                  className="px-8 py-4 border border-rule text-xs font-medium tracking-[0.15em] uppercase text-muted hover:border-chalk hover:text-chalk transition-colors"
                >
                  Ver proyectos
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 border-t border-rule grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={i}
              className={`px-8 md:px-12 py-7 ${i < 3 ? 'border-b md:border-b-0 md:border-r border-rule' : ''} ${i === 1 ? 'border-r border-rule' : ''}`}
            >
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }} className="text-[2.2rem] text-chalk leading-none">
                {s.value}<span className="text-volt">{s.unit}</span>
              </div>
              <div className="text-[11px] tracking-[0.15em] uppercase text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
    </section>
  )
}