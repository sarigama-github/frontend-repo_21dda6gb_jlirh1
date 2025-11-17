import Navbar from '../components/Navbar'
import { AboutSection, ContactSection } from '../components/Sections'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
