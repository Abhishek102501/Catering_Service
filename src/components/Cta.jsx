export default function Cta({ onBookNow }) {
  return (
    <section id="cta">
      <div className="ct">
        <span className="ey" style={{ color: 'rgba(255,255,255,.65)' }}>Ready to Celebrate?</span>
        <span className="gline" style={{ margin: '10px auto 18px', background: 'var(--yellow)' }}></span>
        <h2>
          Make Your Event <em>Truly Memorable</em><br />
          with Pure Vegetarian Perfection
        </h2>
        <p>Contact us today and let us craft a personalised vegetarian menu for your occasion.</p>
        <div className="cta-actions">
          <button className="btn btn-y" onClick={onBookNow}>Get a Free Quote</button>
          <a
            href="https://wa.me/919936485155?text=Hello! I would like to enquire about catering for my event."
            target="_blank"
            rel="noreferrer"
            className="wa-btn"
          >
            💬 WhatsApp Now
          </a>
        </div>
      </div>
    </section>
  )
}
