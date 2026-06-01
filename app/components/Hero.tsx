"use client"

import { siteData } from "@/app/data/site"
import LeadForm from "./LeadForm"

export default function Hero() {
  const { hero } = siteData

  return (
    <section className="relative min-h-[calc(100vh-68px)] grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-6 md:px-12 py-16 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

      {/* Ambient glows */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-[#02b2fe] opacity-[0.06] blur-[120px] -top-24 right-0 pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-[#012c7a] opacity-[0.15] blur-[100px] bottom-0 left-0 pointer-events-none" />

      {/* LEFT — text + form */}
      <div className="relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#02b2fe]/10 border border-[#02b2fe]/30 rounded-full px-4 py-1.5 mb-8">
          <span className="relative flex h-[7px] w-[7px]">
            <span className="animate-ping-blue absolute inline-flex h-full w-full rounded-full bg-[#02b2fe] opacity-75" />
            <span className="relative inline-flex rounded-full h-[7px] w-[7px] bg-[#02b2fe]" />
          </span>
          <span className="font-mono text-[11px] text-[#02b2fe] uppercase tracking-[2px]">
            {hero.badge}
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-[clamp(2.8rem,4.5vw,5rem)] font-bold leading-[1.05] tracking-tight mb-6">
          {hero.headline.map((line) => (
            <span key={line} className="block">{line}</span>
          ))}
          <span className="text-gradient">{hero.headlineAccent}</span>
        </h1>

        <p className="text-[#94A3B8] text-lg leading-relaxed mb-10 max-w-[460px]">
          {hero.subtext}
        </p>

        {/* Form card */}
        <div className="relative bg-[#0F1115]/90 border border-white/[0.08] rounded-2xl p-8 max-w-[460px] shadow-[0_0_50px_-10px_rgba(2,178,254,0.12)] backdrop-blur-sm glow-line-top overflow-hidden">
          <LeadForm
            title="Análise gratuita"
            subtitle="retorno em até 24h"
          />
        </div>
      </div>

      {/* RIGHT — Orb */}
      <div className="hidden lg:flex items-center justify-center relative z-10">
        <div className="relative w-[380px] h-[380px] animate-float">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border border-[#00e5ff]/20 animate-spin-reverse" />
          {/* Dot on outer ring */}
          <div className="absolute top-[-4px] left-1/2 w-[8px] h-[8px] rounded-full bg-[#00e5ff] shadow-[0_0_10px_#00e5ff] -translate-x-1/2 animate-spin-reverse origin-[0_190px]" />

          {/* Inner ring */}
          <div className="absolute inset-5 rounded-full border border-[#02b2fe]/30 animate-spin-slow" />
          {/* Dot on inner ring */}
          <div className="absolute bottom-[-4px] right-[20%] w-[8px] h-[8px] rounded-full bg-[#02b2fe] shadow-[0_0_12px_#02b2fe] animate-spin-slow origin-[-150px_0]" />

          {/* Orb core */}
          <div
            className="absolute inset-[60px] rounded-full shadow-[0_0_60px_rgba(2,178,254,0.4),0_0_120px_rgba(1,44,122,0.3)]"
            style={{
              background: "radial-gradient(circle at 40% 40%, #02b2fe, #012c7a 70%, #000)",
            }}
          />

          {/* Center label */}
          <div className="absolute inset-[60px] flex flex-col items-center justify-center z-10">
            <span className="font-heading text-[2.2rem] font-bold text-white leading-none">
              {hero.orb.mainValue}
            </span>
            <span className="font-mono text-[9px] text-[#02b2fe] uppercase tracking-[2px] mt-1">
              {hero.orb.mainLabel}
            </span>
          </div>

          {/* Floating stat cards */}
          {hero.floatingCards.map((card, i) => (
            <FloatingCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FloatingCard({
  card,
  index,
}: {
  card: { label: string; value: string; color: "blue" | "gold" | "white" }
  index: number
}) {
  const positions = [
    "top-5 -right-4",
    "bottom-10 -left-4",
    "top-1/2 -right-8 -translate-y-1/2",
  ]
  const colorClass =
    card.color === "blue"
      ? "text-[#02b2fe]"
      : card.color === "gold"
      ? "text-[#00e5ff]"
      : "text-white"
  const delays = ["0s", "0.5s", "1s"]

  return (
    <div
      className={`absolute ${positions[index]} bg-[#0F1115]/90 border border-[#02b2fe]/20 rounded-xl px-4 py-3 backdrop-blur-sm shadow-[0_0_20px_rgba(2,178,254,0.1)] animate-float`}
      style={{ animationDelay: delays[index] }}
    >
      <p className="font-mono text-[9px] text-[#94A3B8] uppercase tracking-[1.5px]">
        {card.label}
      </p>
      <p className={`font-heading text-lg font-bold mt-0.5 ${colorClass}`}>
        {card.value}
      </p>
    </div>
  )
}
