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

  const handleNavClick = (e, id) => {
    e.preventDefault()
    closeMob()
    const el = document.getElementById(id)
    if (el) {
      const offset = 70
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  const links = [
    { label: 'Our Story', id: 'about' },
    { label: 'Founder', id: 'founder' },
    { label: 'Services', id: 'services' },
    { label: 'Cuisines', id: 'cuisines' },
    { label: 'Reviews', id: 'testi' },
    { label: 'FAQs', id: 'faq' },
    { label: 'Gallery', id: 'gallery' },
  ]

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
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={(e) => handleNavClick(e, l.id)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-cta">
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
        {links.map((l) => (
          <a key={l.id} href={`#${l.id}`} onClick={(e) => handleNavClick(e, l.id)}>
            {l.label}
          </a>
        ))}
        <button className="btn btn-g" onClick={() => { closeMob(); onBookNow() }}>
          Book Now
        </button>
      </div>
    </>
  )
}