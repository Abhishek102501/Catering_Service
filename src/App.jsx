import { useState } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Founder from './components/Founder'
import Services from './components/Services'
import Cuisines from './components/Cuisines'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import WhyUs from './components/WhyUs'
import Faq from './components/Faq'
import Gallery from './components/Gallery'
import Cta from './components/Cta'
import ContactBar from './components/ContactBar'
import Footer from './components/Footer'
import QuoteModal from './components/QuoteModal'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <>
      <TopBar />
      <Navbar onBookNow={openModal} />
      <Hero onBookNow={openModal} />
      <About onBookNow={openModal} />
      <Founder />
      <Services />
      <Cuisines />
      <Stats />
      <Testimonials />
      <WhyUs />
      <Faq onBookNow={openModal} />
      <Gallery />
      <Cta onBookNow={openModal} />
      <ContactBar />
      <Footer />
      <QuoteModal isOpen={modalOpen} onClose={closeModal} />
    </>
  )
}
