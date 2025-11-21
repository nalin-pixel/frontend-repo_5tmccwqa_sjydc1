import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Heart, Shield, Sparkles } from 'lucide-react'

function Section({ id, title, subtitle, bgImage, accent, icon: Icon }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.3, 1, 0.3])

  return (
    <section id={id} ref={ref} className="relative h-[100svh] overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${bgImage})`, filter: 'grayscale(20%) contrast(110%) brightness(80%)' }}
        />
        <div className="absolute inset-0 mix-blend-screen" style={{
          background: `radial-gradient(1200px 600px at 30% 20%, rgba(217,70,239,0.25), transparent), radial-gradient(900px 600px at 70% 80%, rgba(163,230,53,0.25), transparent)`
        }} />
      </motion.div>

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur">
            <Icon className={`text-${accent}-400`} />
            <span className={`text-${accent}-300/90 font-semibold`}>{title}</span>
          </div>
          <h2 className="mt-6 text-5xl md:text-7xl font-black tracking-tight text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            {subtitle}
          </h2>
          <p className="mt-4 max-w-2xl text-white/80">
            We direct funds to high-leverage initiatives with measurable outcomes, radical transparency, and community accountability.
          </p>
          <div className="mt-8">
            <a href="#donate" className={`inline-flex items-center rounded-full border-2 border-${accent}-400/70 px-6 py-3 font-bold text-${accent}-300 hover:bg-white/5 transition-colors`}>
              Act Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ParallaxSections() {
  const imgs = {
    empower: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1974&auto=format&fit=crop',
    protect: 'https://images.unsplash.com/photo-1522030299830-2005c1e7aaa2?q=80&w=1974&auto=format&fit=crop',
    inspire: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1974&auto=format&fit=crop',
  }

  return (
    <div>
      <Section id="empower" title="Empower" subtitle="Fund power where it lives: in community." bgImage={imgs.empower} accent="lime" icon={Heart} />
      <Section id="protect" title="Protect" subtitle="Protect rights. Guard futures. No compromise." bgImage={imgs.protect} accent="fuchsia" icon={Shield} />
      <Section id="inspire" title="Inspire" subtitle="Invest in imagination and cultural momentum." bgImage={imgs.inspire} accent="cyan" icon={Sparkles} />
    </div>
  )
}
