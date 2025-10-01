import Hero from "../components/layout/Hero"
import AboutSection from "../components/home/AboutSection"
import ServicesSection from "../components/home/ServicesSection"
import Testimonials from "../components/home/Testimonials"
import LocationSection from "../components/home/LocationSection"

export default function Home() {
  return (
    <div className="bg-[#fdfbf5]">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <Testimonials />
      <LocationSection />
    </div>
  )
}
