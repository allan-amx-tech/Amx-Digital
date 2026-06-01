"use client"

import { useState, FormEvent } from "react"
import { siteData } from "@/app/data/site"

interface LeadFormProps {
  title?: string
  subtitle?: string
}

export default function LeadForm({ title, subtitle }: LeadFormProps) {
  const { form } = siteData
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    // TODO: conectar ao seu backend / CRM / Make / n8n
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
        <div className="w-14 h-14 rounded-full bg-[#02b2fe]/10 border border-[#02b2fe]/40 flex items-center justify-center shadow-[0_0_20px_rgba(2,178,254,0.25)]">
          <svg className="w-7 h-7 text-[#02b2fe]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-heading text-lg font-semibold text-white">Recebemos seu contato!</p>
        <p className="text-[#94A3B8] text-sm">Nosso time vai te responder em até 24h.</p>
      </div>
    )
  }

  return (
    <>
      {title && (
        <p className="font-heading font-semibold text-white mb-1.5">
          {title}
          {subtitle && (
            <span className="text-[#94A3B8] font-normal text-sm ml-2">— {subtitle}</span>
          )}
        </p>
      )}

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-5">
        {(["name", "email", "whatsapp"] as const).map((key) => (
          <div key={key} className="flex flex-col gap-2">
            <label className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-[2px]">
              {form.fields[key].label}
            </label>
            <input
              required
              type={key === "email" ? "email" : key === "whatsapp" ? "tel" : "text"}
              placeholder={form.fields[key].placeholder}
              className="bg-black/50 border-b-2 border-white/15 focus:border-[#02b2fe] focus:shadow-[0_8px_20px_-10px_rgba(2,178,254,0.35)] outline-none px-1 py-2.5 text-white placeholder:text-white/25 text-[15px] font-medium transition-all duration-200"
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={loading}
          className="mt-1 w-full bg-gradient-to-r from-[#012c7a] to-[#02b2fe] rounded-full py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_-5px_rgba(2,178,254,0.5)] hover:scale-[1.02] hover:shadow-[0_0_35px_-5px_rgba(2,178,254,0.7)] active:scale-[0.98] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {loading ? "Enviando..." : form.buttonText}
        </button>

        <p className="font-mono text-[10px] text-white/30 text-center tracking-[0.5px]">
          {form.disclaimer}
        </p>
      </form>
    </>
  )
}
