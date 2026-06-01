import type { Metadata } from "next"
import "./globals.css"
import { siteData } from "@/app/data/site"

export const metadata: Metadata = {
  title: siteData.company.name,
  description: siteData.hero.subtext,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
