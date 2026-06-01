"use client"

import { siteData } from "@/app/data/site"

export default function Navbar() {
  const { company, social } = siteData

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 h-[68px] border-b border-white/[0.08] bg-[#030304]/85 backdrop-blur-xl">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#012c7a] to-[#02b2fe] border border-[#02b2fe]/40 flex items-center justify-center shadow-[0_0_16px_rgba(2,178,254,0.35)]">
          <span className="font-heading text-xs font-bold text-white">A</span>
        </div>
        <span className="font-heading text-lg font-bold tracking-tight">
          {company.shortName}
          <em className="not-italic text-gradient">.</em>
        </span>
      </div>

      {/* Nav links — hidden on mobile */}
      <div className="hidden md:flex items-center gap-8">
        {[
          { label: "Serviços",  id: "services" },
          { label: "Processo",  id: "process"  },
          { label: "Contato",   id: "cta"      },
        ].map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="font-mono text-[11px] text-[#94A3B8] hover:text-[#02b2fe] uppercase tracking-[2px] transition-colors duration-200"
          >
            {label}
          </button>
        ))}
      </div>

      {/* CTA */}
      <button
        onClick={() => scrollTo("cta")}
        className="bg-gradient-to-r from-[#012c7a] to-[#02b2fe] rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_-5px_rgba(2,178,254,0.5)] hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(2,178,254,0.7)] transition-all duration-300 cursor-pointer"
      >
        Falar com especialista
      </button>
    </nav>
  )
}
