import { Instagram, Twitter, Linkedin, DollarSign } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="donate" className="relative bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_0%,rgba(217,70,239,0.2),transparent),radial-gradient(600px_300px_at_80%_100%,rgba(163,230,53,0.2),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-white">Join the movement. Make it matter.</h3>
            <p className="mt-2 text-white/70">Back people and ideas that move the world forward.</p>
          </div>

          <div className="flex items-center gap-3">
            <a href="#" className="p-3 rounded-full border border-lime-400/60 text-lime-300 hover:bg-white/5">
              <DollarSign size={18} />
            </a>
            <a href="#" className="p-3 rounded-full border border-fuchsia-400/60 text-fuchsia-300 hover:bg-white/5">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-3 rounded-full border border-cyan-400/60 text-cyan-300 hover:bg-white/5">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-3 rounded-full border border-blue-400/60 text-blue-300 hover:bg-white/5">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} NeonKind Foundation</div>
      </div>
    </footer>
  )
}
