import { siteData } from "@/app/data/site"

const icons = [
  // Tráfego Pago
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="#02b2fe" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
    <path d="M3 3h18v4H3zM3 10h18v4H3zM3 17h18v4H3z"/>
  </svg>,
  // Redes Sociais
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="#02b2fe" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8M12 17v4"/>
  </svg>,
  // Landing Pages
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="#02b2fe" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
    <path d="M12 20h9M16.5 3.5l4 4L7 21H3v-4z"/>
  </svg>,
]

export default function Services() {
  const { services } = siteData

  return (
    <section id="services" className="relative px-6 md:px-12 py-24 overflow-hidden">
      <div className="mb-14">
        <p className="font-mono text-[11px] text-[#02b2fe] uppercase tracking-[3px] mb-3">
          // {services.sectionLabel}
        </p>
        <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-bold tracking-tight mb-3">
          {services.title}{" "}
          <span className="text-gradient">{services.titleAccent}</span>
        </h2>
        <p className="text-[#94A3B8] text-base leading-relaxed max-w-[480px]">
          {services.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.items.map((item, i) => (
          <div
            key={i}
            className="group relative bg-[#0F1115] border border-white/[0.08] rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#02b2fe]/40 hover:shadow-[0_0_40px_-10px_rgba(2,178,254,0.2)] cursor-default"
          >
            {/* Top glow on hover */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#02b2fe]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Icon box */}
            <div className="w-12 h-12 rounded-xl bg-[#02b2fe]/12 border border-[#02b2fe]/30 flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(2,178,254,0.3)] transition-all duration-300">
              {icons[i]}
            </div>

            <p className="font-mono text-[10px] text-[#02b2fe]/50 tracking-[2px] mb-2">
              // {item.number}
            </p>
            <h3 className="font-heading text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed">{item.description}</p>

            {/* Arrow */}
            <span className="absolute bottom-6 right-6 text-[#02b2fe]/30 text-xl group-hover:text-[#02b2fe] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
              ↗
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
