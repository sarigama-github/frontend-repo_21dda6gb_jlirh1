import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Youtube, Instagram, BadgeCent } from 'lucide-react'
import { useState } from 'react'

function NavItem({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
          isActive
            ? 'text-white bg-white/10'
            : 'text-zinc-300 hover:text-white hover:bg-white/5'
        }`
      }
    >
      {children}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-amber-400 shadow-inner shadow-red-900" />
            <span className="text-white font-black tracking-wider text-lg">EMBERLANCE</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/music">Music</NavItem>
            <NavItem to="/videos">Videos</NavItem>
            <NavItem to="/about">About</NavItem>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="px-4 py-2 text-sm font-semibold rounded-md bg-gradient-to-r from-red-600 to-amber-500 text-white shadow hover:opacity-95 transition-opacity">Contact</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 rounded-md text-zinc-300 hover:text-white hover:bg-white/10 transition-colors" aria-label="YouTube">
              <Youtube size={20} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="p-2 rounded-md text-zinc-300 hover:text-white hover:bg-white/10 transition-colors" aria-label="TikTok">
              <BadgeCent size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-md text-zinc-300 hover:text-white hover:bg-white/10 transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-zinc-300 hover:text-white hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-white/10">
            <nav className="flex flex-col gap-1 pt-3">
              <NavItem to="/" onClick={() => setOpen(false)}>Home</NavItem>
              <NavItem to="/music" onClick={() => setOpen(false)}>Music</NavItem>
              <NavItem to="/videos" onClick={() => setOpen(false)}>Videos</NavItem>
              <NavItem to="/about" onClick={() => setOpen(false)}>About</NavItem>
              <a href="#contact" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-sm font-semibold bg-gradient-to-r from-red-600 to-amber-500 text-white mt-2 text-center">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
