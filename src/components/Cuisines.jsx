const cuisines = [
  {
    name: 'North Indian',
    badge: '⭐ Most Popular',
    badgeColor: '#1B7B34',
    desc: 'Paneer delicacies, rich curries, butter naan, dal makhani, and authentic Punjabi flavors.',
    img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=85',
  },
  {
    name: 'South Indian',
    badge: '🥥 Traditional',
    badgeColor: '#7B4F1B',
    desc: 'Fresh dosas, idlis, uttapams, sambhar, coconut chutneys, and traditional specialties.',
    img: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=800&q=85',
  },
  {
    name: 'Chinese',
    badge: '🔥 Chef\'s Special',
    badgeColor: '#C2185B',
    desc: 'Noodles, fried rice, Manchurian, spring rolls, and Indo-Chinese favorites.',
    img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=85',
  },
  {
    name: 'Italian',
    badge: '🍕 Kids\' Favorite',
    badgeColor: '#1565C0',
    desc: 'Wood-fired pizzas, creamy pasta, garlic bread, and lasagna.',
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=85',
  },
  {
    name: 'Continental',
    badge: '✨ Premium Selection',
    badgeColor: '#4A148C',
    desc: 'Fresh salads, grilled vegetables, gourmet pasta, and international cuisine.',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85',
  },
  {
    name: 'Street Food',
    badge: '🎉 Party Favourite',
    badgeColor: '#E65100',
    desc: 'Pani Puri, Chaat, Tikki, Pav Bhaji, and live street-food counters.',
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=85',
  },
  {
    name: 'Desserts',
    badge: '🍮 Sweet Moments',
    badgeColor: '#880E4F',
    desc: 'Traditional Indian sweets, pastries, cakes, ice cream, and dessert stations.',
    img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=85',
  },
  {
    name: 'Jain & Healthy',
    badge: '🌿 Healthy Choice',
    badgeColor: '#2E7D32',
    desc: 'Pure Jain cuisine, vegan options, and customized healthy meal selections.',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=85',
  },
]

export default function Cuisines() {
  return (
    <section id="cuisines">
      <div className="ct">
        {/* Section Header */}
        <div className="cuisines-header">
          <span className="ey">What We Serve</span>
          <span className="gline"></span>
          <h2 className="st">Explore Our Signature Cuisines</h2>
          <p className="cuisines-subtitle">
            From authentic Indian delicacies to international favorites, we craft memorable dining
            experiences for weddings, corporate events, birthdays, and every special celebration.
          </p>
        </div>

        {/* Card Grid */}
        <div className="cuisines-grid">
          {cuisines.map((c) => (
            <div className="cuisine-card" key={c.name}>
              {/* Image */}
              <div className="cuisine-img-wrap">
                <img src={c.img} alt={c.name} className="cuisine-img" />
                <div className="cuisine-gradient"></div>

                {/* Badge */}
                <span
                  className="cuisine-badge"
                  style={{ background: c.badgeColor }}
                >
                  {c.badge}
                </span>
              </div>

              {/* Body */}
              <div className="cuisine-body">
                <h3 className="cuisine-name">{c.name}</h3>
                <p className="cuisine-desc">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
