import founderImg from '../assets/founder.jpg'

export default function Founder() {
  return (
    <section id="founder">
      <div className="founder-inner">
        <div className="ct">

          {/* Top Label */}
          <div className="founder-top-label">
            <span className="founder-line"></span>
            <span className="founder-eyebrow">The Man Behind LTCS</span>
            <span className="founder-line"></span>
          </div>

          <div className="founder-grid">

            {/* LEFT — Photo + decorative */}
            <div className="founder-left">
              <div className="founder-circle-wrap">
                <img
                  src={founderImg}
                  alt="Lala Trivedi"
                  className="founder-circle-img"
                />
                <div className="founder-ring"></div>
              </div>
              <div className="founder-exp-card">
                <span className="founder-exp-num">42</span>
                <span className="founder-exp-plus">+</span>
                <span className="founder-exp-lbl">Years of Dedication</span>
              </div>
            </div>

            {/* RIGHT — Content */}
            <div className="founder-right">

              <h2 className="founder-name">Lala Trivedi</h2>
              <p className="founder-role">Founder &amp; CEO — Lala Trivedi Catering Service</p>

              <p className="founder-story">
                Born and raised in Kanpur, Lala Trivedi began his culinary journey 
                at a very young age, learning the art of pure vegetarian cooking 
                from his family traditions. Driven by a deep passion for food and 
                an unwavering commitment to quality, he laid the foundation of 
                <strong> LTCS in 1982</strong> — with nothing but dedication, 
                a handful of recipes, and a dream to feed people with love.
              </p>

              <p className="founder-story">
                Today, four decades later, that dream has grown into Kanpur's most 
                trusted vegetarian catering brand — having served over 
                <strong> 5,000+ events</strong>, from intimate family gatherings 
                to large corporate celebrations, never once compromising on purity 
                or taste.
              </p>

              {/* Philosophy Card */}
              <div className="founder-philosophy">
                <div className="founder-philosophy-icon">🍽️</div>
                <div>
                  <div className="founder-philosophy-title">His Philosophy</div>
                  <div className="founder-philosophy-text">
                    "Food is not just nourishment — it is an expression of love, 
                    culture, and devotion. Every meal we serve carries the 
                    blessings of Mata Annapurna."
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="founder-stats-row">
                <div className="founder-stat-box">
                  <div className="founder-stat-val">1982</div>
                  <div className="founder-stat-lbl">Founded</div>
                </div>
                <div className="founder-stat-sep"></div>
                <div className="founder-stat-box">
                  <div className="founder-stat-val">5K+</div>
                  <div className="founder-stat-lbl">Events</div>
                </div>
                <div className="founder-stat-sep"></div>
                <div className="founder-stat-box">
                  <div className="founder-stat-val">Kanpur</div>
                  <div className="founder-stat-lbl">Hometown</div>
                </div>
                <div className="founder-stat-sep"></div>
                <div className="founder-stat-box">
                  <div className="founder-stat-val">100%</div>
                  <div className="founder-stat-lbl">Veg Always</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}