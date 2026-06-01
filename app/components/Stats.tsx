import { siteData } from "@/app/data/site"

export default function Stats() {
  const { stats } = siteData

  return (
    <section className="border-y border-white/[0.08] bg-[#0F1115] grid grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`relative px-6 py-10 text-center ${
            i < stats.length - 1 ? "border-r border-white/[0.08]" : ""
          }`}
        >
          {/* top accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/5 h-px bg-gradient-to-r from-transparent via-[#02b2fe]/40 to-transparent" />

          <p
            className="font-heading text-[2.8rem] font-bold leading-none text-gradient"
          >
            {stat.value}
          </p>
          <p className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-[2px] mt-2">
            {stat.label}
          </p>
        </div>
      ))}
    </section>
  )
}
