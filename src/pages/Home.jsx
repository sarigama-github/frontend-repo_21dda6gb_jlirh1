import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { MusicSection, AboutSection, ContactSection } from '../components/Sections'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <MusicSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
