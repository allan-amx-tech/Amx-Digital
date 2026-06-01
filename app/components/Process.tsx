import { siteData } from "@/app/data/site"

export default function Process() {
  const { process } = siteData

  return (
    <section id="process" className="relative px-6 md:px-12 py-24 bg-[#0F1115] overflow-hidden">
      {/* Center glow */}
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[#02b2fe] opacity-[0.04] blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="mb-14">
        <p className="font-mono text-[11px] text-[#02b2fe] uppercase tracking-[3px] mb-3">
          // {process.sectionLabel}
        </p>
        <h2 className="font-heading text-[clamp(2rem,3.5vw,3rem)] font-bold tracking-tight mb-3">
          {process.title}{" "}
          <span className="text-gradient">{process.titleAccent}</span>
        </h2>
        <p className="text-[#94A3B8] text-base leading-relaxed max-w-[480px]">
          {process.subtitle}
        </p>
      </div>

      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Connecting line — desktop only */}
        <div className="hidden md:block absolute top-[28px] left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-[#02b2fe]/30 to-transparent" />

        {process.steps.map((step, i) => (
          <div key={i} className="relative text-center px-2 z-10">
            {/* Node */}
            <div
              className={`w-14 h-14 rounded-full mx-auto mb-6 flex items-center justify-center border transition-all duration-300 ${
                i % 2 === 0
                  ? "bg-[#030304] border-[#02b2fe]/40 shadow-[0_0_20px_rgba(2,178,254,0.15)]"
                  : "bg-[#02b2fe]/08 border-[#00e5ff]/50 shadow-[0_0_20px_rgba(0,229,255,0.2)]"
              }`}
            >
              <span className="font-mono text-sm font-medium text-[#02b2fe]">
                {step.number}
              </span>
            </div>

            <h3 className="font-heading text-base font-semibold mb-2">{step.title}</h3>
            <p className="text-[#94A3B8] text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
