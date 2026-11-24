import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Menu from './components/Menu.jsx'
import About from './components/About.jsx'
import Gallery from './components/Gallery.jsx'
import Location from './components/Location.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import { useReveal } from './hooks/useReveal.js'

export default function App() {
  useReveal()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Gallery />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
