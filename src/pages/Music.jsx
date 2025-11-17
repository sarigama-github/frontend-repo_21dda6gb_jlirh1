import Navbar from '../components/Navbar'
import { MusicSection, ContactSection } from '../components/Sections'
import Footer from '../components/Footer'

export default function MusicPage() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <MusicSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
