import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  const colorBorder = {
    lime: 'border-lime-400/70',
    fuchsia: 'border-fuchsia-400/70',
    cyan: 'border-cyan-400/70',
  }
  const colorText = {
    lime: 'text-lime-400',
    fuchsia: 'text-fuchsia-400',
    cyan: 'text-cyan-400',
  }

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#030712]">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for neon vibe */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-40 blur-3xl opacity-40" style={{
          background: 'conic-gradient(from 180deg at 50% 50%, rgba(217,70,239,0.3), rgba(34,197,94,0.3), rgba(59,130,246,0.3), rgba(217,70,239,0.3))'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 pt-32 pb-24 flex flex-col items-start justify-center min-h-[100svh]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight text-lime-400 drop-shadow-[0_0_25px_rgba(163,230,53,0.5)]">
          Give Bold.
          <br />
          Change Everything.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-fuchsia-200/90">
          High-impact philanthropy with unapologetic energy. We channel resources to movements that empower, protect, and inspire.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          {[
            { title: 'Empower', color: 'lime', desc: 'Fuel community leadership and equitable access.' },
            { title: 'Protect', color: 'fuchsia', desc: 'Defend rights, safety, and our shared future.' },
            { title: 'Inspire', color: 'cyan', desc: 'Spark creativity, culture, and bold ideas.' },
          ].map((c) => (
            <a key={c.title} href={`#${c.title.toLowerCase()}`} className="group relative overflow-hidden rounded-2xl border bg-black/40 p-6 backdrop-blur-xl">
              <div className="absolute inset-0 opacity-60 group-hover:opacity-100 transition-opacity"
                   style={{ boxShadow: `inset 0 0 60px rgba(0,0,0,0.6)` }} />
              <div className={`absolute inset-0 rounded-2xl border-2 ${colorBorder[c.color]}`} />
              <div className="relative">
                <h3 className={`text-2xl font-extrabold ${colorText[c.color]} drop-shadow-[0_0_15px_rgba(255,255,255,0.25)]`}>{c.title}</h3>
                <p className="mt-2 text-white/80">{c.desc}</p>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-14 text-white/70 text-sm">
          Scroll
          <span className="inline-block ml-2 animate-bounce">↓</span>
        </motion.div>
      </div>
    </section>
  )
}
