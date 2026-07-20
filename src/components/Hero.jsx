export default function Hero({ onBookNow }) {
  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Pure Vegetarian.<br />
          <em>Unforgettable</em> Flavours.
        </h1>
        <div className="hero-sub-hindi">
          लाला त्रिवेदी कैटरिंग सर्विस — आपके हर उत्सव का साथी
        </div>
        <p className="hero-sub">
          Crafting exceptional vegetarian culinary experiences for weddings,
          corporate events, and celebrations across Kanpur.
        </p>
        <div className="hero-actions">
          <button className="btn btn-y" onClick={onBookNow}>Get a Free Quote</button>
          <a
            href="https://wa.me/919936485155"
            target="_blank"
            rel="noreferrer"
            className="btn"
            style={{ background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,.6)' }}
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>

      <div className="hero-stats">
        <div className="hstat">
          <div className="hstat-num">42<span style={{ fontSize: '1.5rem' }}>+</span></div>
          <div className="hstat-lbl">Years of Excellence</div>
        </div>
        <div className="hstat">
          <div className="hstat-num">100<span style={{ fontSize: '1.5rem' }}>%</span></div>
          <div className="hstat-lbl">Pure Vegetarian</div>
        </div>
      </div>

      <div className="hero-strip">
        <div className="hero-strip-inner ct">
          <div className="strip-item">🍽️ Weddings</div>
          <div className="strip-item">🏢 Corporate Events</div>
          <div className="strip-item">🎉 Social Gatherings</div>
          <div className="strip-item">👑 VIP Parties</div>
        </div>
      </div>
    </section>
  )
}
