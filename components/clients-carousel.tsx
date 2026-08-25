"use client";

const CLIENTS = [
  {
    name: "Savar",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=640&h=420&fit=crop&auto=format",
  },
  {
    name: "Fibra Prime",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=640&h=420&fit=crop&auto=format",
  },
  {
    name: "Royal Plaza",
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=640&h=420&fit=crop&auto=format",
  },
  {
    name: "Pardos Chicken",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=640&h=420&fit=crop&auto=format",
  },
  {
    name: "Cineplanet",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=640&h=420&fit=crop&auto=format",
  },
  {
    name: "Plaza Vea",
    image: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=640&h=420&fit=crop&auto=format",
  },
  {
    name: "Real Plaza",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=640&h=420&fit=crop&auto=format",
  },
];

function ClientCard({ client }: { client: (typeof CLIENTS)[number] }) {
  return (
    <div className="group/card relative h-32 w-56 shrink-0 overflow-hidden border border-rule bg-ground transition-colors hover:border-volt">
      <img
        src={client.image}
        alt={`Imagen referencial de ${client.name}`}
        className="h-full w-full object-cover opacity-70 transition duration-500 group-hover/card:scale-105 group-hover/card:opacity-90"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-linear-to-t from-ground via-ground/15 to-transparent" />
      <span className="absolute bottom-4 left-4 right-4 text-sm font-semibold uppercase tracking-[0.12em] text-chalk">
        {client.name}
      </span>
    </div>
  );
}

export function ClientsCarousel() {
  return (
    <section className="overflow-hidden bg-ground py-12" aria-label="Nuestros clientes">
      <div className="mb-7 flex items-end justify-between px-8 md:px-16">
        <div>
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.3em] text-volt">Nuestros clientes</p>
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              lineHeight: 1,
            }}
            className="text-3xl uppercase text-chalk md:text-4xl"
          >
            Confían en nosotros
          </h2>
        </div>
        <span className="hidden text-[10px] uppercase tracking-[0.2em] text-muted sm:block">07 empresas</span>
      </div>

      <div className="group relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-ground to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-ground to-transparent" />
        <div className="clients-carousel-track flex w-max gap-4 px-4 group-hover:[animation-play-state:paused]">
          {[...CLIENTS, ...CLIENTS].map((client, index) => (
            <ClientCard key={`${client.name}-${index}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
