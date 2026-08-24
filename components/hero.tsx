"use client";

import { useEffect, useState } from "react";

const STATS = [
  { value: 10, unit: " YEARS", label: "In the industry" },
  { value: 100, unit: "+", label: "Projects completed" },
  { value: 99.7, unit: "%", label: "System uptime" },
  { value: 5, unit: "", label: "Leading companies" },
];

export function Hero() {
  const [counts, setCounts] = useState(STATS.map(() => 0));

  useEffect(() => {
    const startTime = performance.now();
    const duration = 2400;
    let frameId = 0;

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCounts(STATS.map((stat) => stat.value * easedProgress));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col pt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-ground"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1413882353314-73389f63b6fd?w=1600&h=1000&fit=crop&auto=format')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.30,
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, #080808 100%)' }} />

        <div className="relative z-10 flex-1 flex items-center px-8 md:px-16 pt-12">
          <div className="max-w-5xl">
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-volt mb-8 max-sm:max-w-xs">
              More than 10 years of industry experience.
            </p>

            <h1
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.01em' }}
              className="text-[clamp(4rem,12vw,10rem)] uppercase text-chalk"
            >
              Solutions<br />
              <span className="text-volt">Built</span><br />
              to keep moving.
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 mt-12 items-start">
              <p className="text-muted text-sm leading-relaxed max-w-90">
                Electrical infrastructure and technology solutions designed, supplied, and installed for demanding environments.
              </p>
              <div className="flex gap-4 sm:ml-auto shrink-0">
                <a
                  href="#services"
                  className="px-8 py-4 bg-volt text-ground text-xs font-bold tracking-[0.15em] uppercase hover:bg-chalk transition-colors"
                >
                  Services
                </a>
                <a
                  href="#projects"
                  className="px-8 py-4 border border-rule text-xs font-medium tracking-[0.15em] uppercase text-muted hover:border-chalk hover:text-chalk transition-colors"
                >
                  Projects
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
                {s.value % 1 === 0 ? Math.round(counts[i]) : counts[i].toFixed(1)}<span className="text-volt">{s.unit}</span>
              </div>
              <div className="text-[11px] tracking-[0.15em] uppercase text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
    </section>
  )
}