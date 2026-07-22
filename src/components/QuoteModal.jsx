import { useState } from 'react'
import { submitBooking } from '../api/api'

export default function QuoteModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', eventType: '', eventDate: '', guests: '', message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.eventType) {
      setError('Please fill in name, phone and event type.')
      return
    }
    setLoading(true)
    setError('')
    try {
      await submitBooking(form)
      setSuccess(true)
      setForm({ name: '', phone: '', email: '', eventType: '', eventDate: '', guests: '', message: '' })
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setSuccess(false)
    setError('')
    onClose()
  }

  return (
    <div
      className={`qmodal ${isOpen ? 'open' : ''}`}
      onClick={(e) => { if (e.target.classList.contains('qmodal')) handleClose() }}
    >
      <div className="qbox">
        <button className="qclose" onClick={handleClose}>×</button>
        <span className="ey">Book Now</span>
        <h3>Request a Quote</h3>
        <p className="qsub">Fill in your details and we will get back within 24 hours!</p>

        {success ? (
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
            <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.6rem', color: 'var(--green-dk)', marginBottom: '8px' }}>
              Request Sent!
            </h4>
            <p style={{ color: 'var(--muted)', fontSize: '.9rem' }}>
              We will contact you within 24 hours.<br />
              You can also WhatsApp us at +91-9936485155
            </p>
            <button className="btn btn-g" style={{ marginTop: '20px' }} onClick={handleClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            {error && (
              <div style={{ background: '#FFF3F3', border: '1px solid #FFCDD2', padding: '10px 14px', borderRadius: '4px', color: '#C62828', fontSize: '.85rem', marginBottom: '14px' }}>
                {error}
              </div>
            )}

            <div className="f2col">
              <div className="fr">
                <label>Name *</label>
                <input type="text" name="name" placeholder="Your full name" value={form.name} onChange={handle} />
              </div>
              <div className="fr">
                <label>Phone *</label>
                <input type="tel" name="phone" placeholder="+91 xxxxx xxxxx" value={form.phone} onChange={handle} />
              </div>
            </div>

            <div className="fr">
              <label>Email (optional)</label>
              <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handle} />
            </div>

            <div className="fr">
              <label>Event Type *</label>
              <select name="eventType" value={form.eventType} onChange={handle}>
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
                <input type="date" name="eventDate" value={form.eventDate} onChange={handle} />
              </div>
              <div className="fr">
                <label>No. of Guests</label>
                <input type="number" name="guests" placeholder="~100" value={form.guests} onChange={handle} />
              </div>
            </div>

            <div className="fr">
              <label>Requirements</label>
              <textarea name="message" placeholder="Menu preferences, Jain food, event details…" value={form.message} onChange={handle}></textarea>
            </div>

            <button
              className="btn btn-g fsub"
              onClick={handleSubmit}
              disabled={loading}
              style={{ opacity: loading ? 0.7 : 1 }}
            >
              {loading ? 'Sending...' : 'Send Enquiry →'}
            </button>

            <div style={{ textAlign: 'center', marginTop: '12px' }}>
              <a
                href="https://wa.me/919936485155?text=Hello! I would like to book catering."
                target="_blank"
                rel="noreferrer"
                className="wa-btn"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Or Chat on WhatsApp
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  )
}