import { useState } from 'react'

export default function Charity() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', type: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = () => {
    if (!form.name || !form.phone) {
      alert('Please enter your name and phone number.')
      return
    }
    setSubmitted(true)
  }

  return (
    <section id="charity">
      <div className="charity-inner">
        <div className="ct">

          {/* Header */}
          <div className="charity-header">
            <span className="charity-eyebrow">Seva & Compassion</span>
            <span className="charity-gline"></span>
            <h2 className="charity-title">Food is Love. Let's Share It.</h2>
            <p className="charity-subtitle">
              Every Saturday & Sunday, we distribute free meals outside the temple —
              because no one should sleep hungry. Join us in this sacred mission.
            </p>
          </div>

          {/* Info Cards Row */}
          <div className="charity-cards">
            <div className="charity-card">
              <div className="charity-card-icon">🕌</div>
              <h3>Where</h3>
              <p>Outside Shri Annapurna Temple, Kanpur, U.P.</p>
            </div>
            <div className="charity-card">
              <div className="charity-card-icon">📅</div>
              <h3>When</h3>
              <p>Every Saturday & Sunday<br />12:00 PM – 2:00 PM</p>
            </div>
            <div className="charity-card">
              <div className="charity-card-icon">🍱</div>
              <h3>What We Serve</h3>
              <p>Fresh, hot, pure vegetarian meals prepared with love and hygiene.</p>
            </div>
            <div className="charity-card">
              <div className="charity-card-icon">🤝</div>
              <h3>How to Help</h3>
              <p>Donate meals, volunteer your time, or sponsor a Sunday distribution.</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="charity-main">

            {/* Left — Story */}
            <div className="charity-story">
              <span className="ey" style={{ color: 'var(--yellow)' }}>Our Mission</span>
              <h3 className="charity-story-title">
                Serving the Community<br />
                <em style={{ color: 'var(--yellow)', fontStyle: 'italic' }}>Every Weekend</em>
              </h3>
              <p>
                At LTCS, we believe food is more than a business — it is a blessing.
                Inspired by the teachings of <strong>Mata Annapurna</strong>, we have
                been distributing free meals to the needy every weekend outside the
                temple premises.
              </p>
              <p>
                From underprivileged families to daily wage workers, our volunteers
                ensure that warm, nutritious, pure vegetarian food reaches those who
                need it most — with dignity and love.
              </p>

              <div className="charity-highlights">
                <div className="charity-highlight">
                  <span className="charity-highlight-num">500+</span>
                  <span className="charity-highlight-lbl">Meals Every Weekend</span>
                </div>
                <div className="charity-highlight">
                  <span className="charity-highlight-num">52+</span>
                  <span className="charity-highlight-lbl">Weeks a Year</span>
                </div>
                <div className="charity-highlight">
                  <span className="charity-highlight-num">∞</span>
                  <span className="charity-highlight-lbl">Love & Devotion</span>
                </div>
              </div>
            </div>

            {/* Right — Donate Form */}
            <div className="charity-form-wrap">
              <div className="charity-form-header">
                <h3>Be Part of This Mission</h3>
                <p>Join us as a volunteer or sponsor meals for those in need.</p>
              </div>

              {submitted ? (
                <div className="charity-success">
                  <div className="charity-success-icon">🙏</div>
                  <h4>Thank You!</h4>
                  <p>We will contact you soon. Your kindness matters.</p>
                </div>
              ) : (
                <div className="charity-form">
                  <div className="charity-form-row">
                    <div className="fr">
                      <label>Your Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full name"
                        value={form.name}
                        onChange={handle}
                      />
                    </div>
                    <div className="fr">
                      <label>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 xxxxx xxxxx"
                        value={form.phone}
                        onChange={handle}
                      />
                    </div>
                  </div>
                  <div className="fr">
                    <label>Email (optional)</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handle}
                    />
                  </div>
                  <div className="fr">
                    <label>I want to</label>
                    <select name="type" value={form.type} onChange={handle}>
                      <option value="">Select your contribution…</option>
                      <option>Volunteer on weekends</option>
                      <option>Sponsor meals (one time)</option>
                      <option>Sponsor meals (monthly)</option>
                      <option>Donate groceries / supplies</option>
                      <option>Spread awareness</option>
                    </select>
                  </div>
                  <div className="fr">
                    <label>Message (optional)</label>
                    <textarea
                      name="message"
                      placeholder="Any message for us…"
                      value={form.message}
                      onChange={handle}
                    ></textarea>
                  </div>
                  <button className="charity-submit" onClick={submit}>
                    🌿 Join the Mission
                  </button>
                  <a
                    href="https://wa.me/919936485155?text=Hello! I want to volunteer/donate for your food charity."
                    target="_blank"
                    rel="noreferrer"
                    className="charity-wa"
                  >
                    💬 Or WhatsApp Us Directly
                  </a>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}