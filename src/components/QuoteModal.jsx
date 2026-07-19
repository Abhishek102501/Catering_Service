import { useEffect } from 'react'

export default function QuoteModal({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  const handleSubmit = () => {
    alert('Thank you! We will contact you within 24 hours.\n\nYou can also WhatsApp us at +91-9936485155 for faster response.')
    onClose()
  }

  return (
    <div
      className={`qmodal ${isOpen ? 'open' : ''}`}
      onClick={(e) => { if (e.target.classList.contains('qmodal')) onClose() }}
    >
      <div className="qbox">
        <button className="qclose" onClick={onClose}>×</button>
        <span className="ey">Book Now</span>
        <h3>Request a Quote</h3>
        <p className="qsub">Fill in your details and we will get back within 24 hours!</p>

        <div className="f2col">
          <div className="fr">
            <label>Name</label>
            <input type="text" placeholder="Your full name" />
          </div>
          <div className="fr">
            <label>Phone</label>
            <input type="tel" placeholder="+91 xxxxx xxxxx" />
          </div>
        </div>

        <div className="fr">
          <label>Email (optional)</label>
          <input type="email" placeholder="you@example.com" />
        </div>

        <div className="fr">
          <label>Event Type</label>
          <select>
            <option value="">Select event type…</option>
            <option>Wedding</option>
            <option>Corporate Event</option>
            <option>Birthday / Anniversary</option>
            <option>Pooja / Religious Function</option>
            <option>Social Gathering</option>
            <option>VIP Private Party</option>
            <option>Other</option>
          </select>
        </div>

        <div className="f2col">
          <div className="fr">
            <label>Event Date</label>
            <input type="date" />
          </div>
          <div className="fr">
            <label>No. of Guests</label>
            <input type="number" placeholder="~100" />
          </div>
        </div>

        <div className="fr">
          <label>Requirements</label>
          <textarea placeholder="Menu preferences, Jain food, event details…"></textarea>
        </div>

        <button className="btn btn-g fsub" onClick={handleSubmit}>
          Send Enquiry →
        </button>

        <div style={{ textAlign: 'center', marginTop: '12px' }}>
          <a
            href="https://wa.me/919936485155?text=Hello! I would like to book catering."
            target="_blank"
            rel="noreferrer"
            className="wa-btn"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            💬 Or Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
