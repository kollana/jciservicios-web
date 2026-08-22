export function Footer() {
  return (
    <footer className="border-t border-rule px-8 md:px-16 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-volt flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                <path d="M8 1L2 8h5l-1 5 6-7H7L8 1z" fill="#080808"/>
              </svg>
            </div>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: '0.1em' }} className="text-sm uppercase">
              Voltex<span className="text-volt">.</span>
            </span>
          </div>
          <p className="text-[11px] tracking-widest uppercase text-[#3a3a3a]">
            © 2026 Voltex Engineering. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Legal", "Certifications"].map((l) => (
              <a key={l} href="#" className="text-[11px] tracking-widest uppercase text-[#3a3a3a] hover:text-muted transition-colors">
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
  )
}