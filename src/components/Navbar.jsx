import { useState, useEffect } from 'react'
import logoBase64 from '../assets/logo.js'

export default function Navbar({ onBookNow }) {
  const [mobOpen, setMobOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobOpen])

  const closeMob = () => setMobOpen(false)

  return (
    <>
      <nav style={{ boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,.1)' : 'none' }}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            <img src={`data:image/png;base64,${logoBase64}`} alt="LTCS Logo" />
            <div className="nav-logo-text">
              <span className="main">Lala Trivedi Catering</span>
              <span className="sub">Only Veg Food Series · Since 1982</span>
            </div>
          </a>

          <ul className="nav-links">
            <li><a href="#about">Our Story</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#testi">Reviews</a></li>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>

          <div className="nav-cta">
            <div className="veg-badge">
              <div className="veg-dot"></div>100% Veg
            </div>
            <button className="btn btn-g" onClick={onBookNow}>Book Now</button>
          </div>

          <button className="hamburger" onClick={() => setMobOpen(true)} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mob-menu ${mobOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeMob}>×</button>
        <a href="#about" onClick={closeMob}>Our Story</a>
        <a href="#services" onClick={closeMob}>Services</a>
        <a href="#menu" onClick={closeMob}>Menu</a>
        <a href="#testi" onClick={closeMob}>Reviews</a>
        <a href="#faq" onClick={closeMob}>FAQs</a>
        <a href="#gallery" onClick={closeMob}>Gallery</a>
        <button className="btn btn-g" onClick={() => { closeMob(); onBookNow(); }}>Book Now</button>
      </div>
    </>
  )
}
