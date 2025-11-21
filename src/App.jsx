import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParallaxSections from './components/ParallaxSections'
import Footer from './components/Footer'
import NoiseOverlay from './components/NoiseOverlay'

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <NoiseOverlay />
      <Navbar />
      <Hero />
      <ParallaxSections />
      <Footer />
    </div>
  )
}

export default App
