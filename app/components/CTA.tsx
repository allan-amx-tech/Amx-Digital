import { siteData } from "@/app/data/site"
import LeadForm from "./LeadForm"

export default function CTA() {
  const { cta } = siteData

  return (
    <section id="cta" className="relative px-6 md:px-12 py-24 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute w-[600px] h-[300px] rounded-full bg-[#02b2fe] opacity-[0.06] blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto bg-[#0F1115] border border-[#02b2fe]/20 rounded-3xl p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center shadow-[0_0_80px_-20px_rgba(2,178,254,0.15)] overflow-hidden">
        {/* Top glow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#02b2fe]/50 to-transparent" />

        {/* Left — copy */}
        <div>
          <p className="font-mono text-[11px] text-[#02b2fe] uppercase tracking-[3px] mb-4">
            // {cta.sectionLabel}
          </p>
          <h2 className="font-heading text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-tight leading-[1.1] mb-4">
            {cta.title}{" "}
            <span className="text-gradient">{cta.titleAccent}</span>
          </h2>

          <ul className="flex flex-col gap-3 mt-6">
            {cta.bullets.map((bullet, i) => (
              <li key={i} className="flex items-center gap-3 text-[#94A3B8] text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#02b2fe] flex-shrink-0 shadow-[0_0_8px_#02b2fe]" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — form */}
        <div className="relative bg-[#030304]/50 border border-white/[0.08] rounded-2xl p-7 overflow-hidden glow-line-top">
          <LeadForm title={cta.formTitle} />
        </div>
      </div>
    </section>
  )
}
