import Home from './pages/Home'
import MusicPage from './pages/Music'
import VideosPage from './pages/Videos'
import AboutPage from './pages/About'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/music" element={<MusicPage />} />
      <Route path="/videos" element={<VideosPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  )
}

export default App
