export function Footer() {
  return (
    <footer className="border-t border-rule px-8 md:px-16 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-12 pb-16">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-7 h-7 bg-volt flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M8 1L2 8h5l-1 5 6-7H7L8 1z" fill="#080808"/>
              </svg>
            </div>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: '0.1em' }} className="text-lg uppercase">
              Voltex<span className="text-volt">.</span>
            </span>
          </div>
          <p className="text-muted text-sm leading-relaxed max-w-xs">
            Electrical engineering for projects that cannot stop.
          </p>
        </div>
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-volt mb-5">Explore</p>
          <div className="flex flex-col items-start gap-3">
            {[['Services', '#services'], ['Projects', '#projects'], ['About', '#about'], ['Contact', '#contact']].map(([label, href]) => (
              <a key={label} href={href} className="text-xs uppercase tracking-[0.15em] text-muted hover:text-chalk hover:translate-x-1 transition-all duration-200">
                {label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-volt mb-5">Contact</p>
          <a href="mailto:enquiries@voltex-eng.com" className="block text-sm text-chalk hover:text-volt transition-colors mb-2">
            enquiries@voltex-eng.com
          </a>
          <a href="tel:+18005562490" className="block text-sm text-muted hover:text-chalk transition-colors">
            +1 (800) 556-2490
          </a>
        </div>
      </div>
      <div className="border-t border-rule pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-[10px] tracking-[0.15em] uppercase text-[#3a3a3a]">
          © 2026 Voltex Engineering. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy", "Legal", "Certifications"].map((label) => (
            <a key={label} href="#" className="text-[10px] tracking-[0.15em] uppercase text-[#3a3a3a] hover:text-muted transition-colors">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}