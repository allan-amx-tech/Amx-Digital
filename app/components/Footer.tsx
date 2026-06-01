import { siteData } from "@/app/data/site"

export default function Footer() {
  const { company, social } = siteData
  const year = new Date().getFullYear()

  const links = [
    { label: "Instagram", href: social.instagram },
    { label: "LinkedIn",  href: social.linkedin  },
    { label: "WhatsApp",  href: social.whatsapp  },
    { label: company.domain, href: `https://${company.domain}` },
  ].filter((l) => l.href)

  return (
    <footer className="border-t border-white/[0.08] bg-[#030304] px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <span className="font-heading text-base font-bold">
        {company.shortName}
        <em className="not-italic text-gradient">.</em>
        {" "}{company.name.replace(company.shortName, "").trim()}
      </span>

      <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
        {links.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-[#94A3B8] hover:text-[#02b2fe] uppercase tracking-[1.5px] transition-colors duration-200"
          >
            {label}
          </a>
        ))}
      </nav>

      <span className="font-mono text-[10px] text-white/20 tracking-[1px]">
        © {year} {company.name}
      </span>
    </footer>
  )
}
