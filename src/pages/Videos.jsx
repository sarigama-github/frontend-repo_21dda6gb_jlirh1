import Navbar from '../components/Navbar'
import { VideosGrid, ContactSection } from '../components/Sections'
import Footer from '../components/Footer'

export default function VideosPage() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div className="pt-20" />
      <VideosGrid />
      <ContactSection />
      <Footer />
    </div>
  )
}
