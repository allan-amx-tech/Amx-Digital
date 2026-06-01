import Navbar from "@/app/components/Navbar"
import Hero from "@/app/components/Hero"
import Stats from "@/app/components/Stats"
import Services from "@/app/components/Services"
import Process from "@/app/components/Process"
import CTA from "@/app/components/CTA"
import Footer from "@/app/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <CTA />
      <Footer />
    </main>
  )
}
