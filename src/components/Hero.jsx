import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ae2hGmiZhBrvMhFY/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/90 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 pt-36 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight"
        >
          EMBERLANCE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 text-xl sm:text-2xl text-zinc-200 max-w-2xl"
        >
          Melodic Heavy Metal Forged With AI Fire.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="/music" className="px-6 py-3 rounded-md bg-gradient-to-r from-red-600 to-amber-500 text-white font-semibold shadow-lg shadow-red-900/30">
            Listen
          </a>
          <a href="/videos" className="px-6 py-3 rounded-md bg-white/10 text-white font-semibold hover:bg-white/20 transition">
            Watch
          </a>
          <a href="/about" className="px-6 py-3 rounded-md bg-white/10 text-white font-semibold hover:bg-white/20 transition">
            About
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-12 max-w-3xl w-full aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/60"
        >
          <video className="w-full h-full object-cover" controls poster="/placeholder-poster.jpg">
            <source src="/teaser.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  )
}
