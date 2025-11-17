import { motion } from 'framer-motion'

export function MusicSection() {
  const tracks = [
    {
      title: 'Ashen Skies',
      desc: 'Anthemic riff-driven metal with cinematic AI choirs and soaring leads.',
      audio: '/audio/ashen-skies.mp3',
      video: '/video/ashen-skies.mp4',
    },
    {
      title: 'Neon Forge',
      desc: 'Synth-infused melodic rock where cyber pulses meet thunder drums.',
      audio: '/audio/neon-forge.mp3',
      video: '/video/neon-forge.mp4',
    },
    {
      title: 'Ember Crown',
      desc: 'Slow-burn ballad turning into a blazing solo – embers to inferno.',
      audio: '/audio/ember-crown.mp3',
      video: '/video/ember-crown.mp4',
    },
  ]

  return (
    <section className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-black tracking-tight"
        >
          Music
        </motion.h2>

        <div className="mt-10 space-y-12">
          {tracks.map((t, idx) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="grid md:grid-cols-2 gap-6 p-5 rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950"
            >
              <div>
                <h3 className="text-2xl font-bold">{t.title}</h3>
                <p className="text-zinc-300 mt-2">{t.desc}</p>
                <audio controls className="mt-4 w-full">
                  <source src={t.audio} type="audio/mpeg" />
                </audio>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden border border-white/10 bg-black/50">
                <video className="w-full h-full object-cover" controls>
                  <source src={t.video} type="video/mp4" />
                </video>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function VideosGrid() {
  const videos = [
    { title: 'Forged Intro', src: '/video/intro.mp4' },
    { title: 'Studio Sparks', src: '/video/studio.mp4' },
    { title: 'Neon Forge Live', src: '/video/neon-live.mp4' },
    { title: 'Ashen Skies Solo', src: '/video/solo.mp4' },
  ]

  return (
    <section className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-black tracking-tight"
        >
          Videos
        </motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, idx) => (
            <motion.details
              key={v.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              className="group rounded-xl border border-white/10 bg-zinc-950/80 p-0 overflow-hidden"
            >
              <summary className="cursor-pointer list-none select-none p-4 flex items-center justify-between text-zinc-200 hover:text-white">
                <span className="font-semibold">{v.title}</span>
                <span className="text-xs uppercase tracking-widest text-zinc-400">Open</span>
              </summary>
              <div className="px-4 pb-4">
                <div className="aspect-video rounded-lg overflow-hidden border border-white/10 bg-black/50">
                  <video className="w-full h-full object-cover" controls>
                    <source src={v.src} type="video/mp4" />
                  </video>
                </div>
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AboutSection() {
  return (
    <section className="relative bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(244,63,94,0.15),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-black tracking-tight"
        >
          About
        </motion.h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <p className="text-zinc-300 leading-relaxed">
            Emberlance is a solo project forging melodic heavy metal and rock with the fire of AI. From classic riff craft to futuristic sound design, the music blends human emotion with machine precision – anthemic hooks, cinematic textures, and solos that blaze.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            Rooted in years of rock performance and studio work, the journey evolved into AI-assisted creation: models for drum design, choir synthesis, and tone shaping. Every track is a collaboration between intuition and intelligent tools – a new kind of metal alchemy.
          </p>
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="contact" className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Contact</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full bg-zinc-900/80 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
            <input type="email" placeholder="Email" className="w-full bg-zinc-900/80 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
            <textarea rows="5" placeholder="Message" className="w-full bg-zinc-900/80 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500" />
            <button type="submit" className="px-6 py-3 rounded-md bg-gradient-to-r from-red-600 to-amber-500 text-white font-semibold shadow-lg shadow-red-900/30">Send</button>
          </form>
          <div className="space-y-4 text-zinc-300">
            <p>For bookings, collaborations, or press: reach out via the form or email below.</p>
            <a href="mailto:contact@emberlance.com" className="text-white font-semibold">contact@emberlance.com</a>
            <div className="pt-4 text-sm text-zinc-400">
              Follow on socials: YouTube, TikTok, Instagram
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
