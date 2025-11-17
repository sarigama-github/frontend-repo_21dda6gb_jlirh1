export default function Footer() {
  return (
    <footer className="bg-black text-zinc-400 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Emberlance. All rights reserved.</p>
        <div className="text-xs">Crafted with AI fire.</div>
      </div>
    </footer>
  )
}
