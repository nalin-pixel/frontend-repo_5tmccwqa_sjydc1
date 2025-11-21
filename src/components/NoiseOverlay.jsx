export default function NoiseOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[5] opacity-[0.08] mix-blend-soft-light" style={{ backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)' }} />
  )
}
