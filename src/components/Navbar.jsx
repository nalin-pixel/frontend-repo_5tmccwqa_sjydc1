import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
      <nav className="backdrop-blur-sm/0 flex items-center justify-between px-6 md:px-10 py-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-fuchsia-500 shadow-[0_0_30px_#f0f]" />
          <span className="text-fuchsia-400 font-black tracking-wider text-lg md:text-xl drop-shadow-[0_0_10px_rgba(244,63,94,0.7)]">
            NeonKind
          </span>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {['Mission','Impact','Partners','Donate'].map(i => (
            <li key={i}>
              <a href={`#${i.toLowerCase()}`} className="text-white/80 hover:text-lime-400 transition-colors">
                {i}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur-xl border-t border-white/10">
          <ul className="px-6 py-4 space-y-3">
            {['Mission','Impact','Partners','Donate'].map(i => (
              <li key={i}>
                <a href={`#${i.toLowerCase()}`} className="block py-2 text-white/90" onClick={() => setOpen(false)}>
                  {i}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
