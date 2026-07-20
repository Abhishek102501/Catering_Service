import { FaLeaf, FaUtensils, FaBullseye, FaHandshake } from 'react-icons/fa'

const reasons = [
  {
    icon: <FaLeaf />,
    title: '100% Pure Vegetarian',
    desc: 'We serve ONLY vegetarian food — no compromise, ever. Ideal for Jain, Brahmin, and health-conscious clients.',
  },
  {
    icon: <FaUtensils />,
    title: 'Expert Chefs Since 1982',
    desc: 'Over four decades of culinary mastery. Our time-tested recipes and seasoned chefs guarantee exceptional taste.',
  },
  {
    icon: <FaBullseye />,
    title: 'Customised Menus',
    desc: 'Every event is unique. We craft menus tailored to your preferences, budget, occasion, and dietary needs.',
  },
  {
    icon: <FaHandshake />,
    title: 'End-to-End Service',
    desc: 'Menu planning, tasting, setup, service, clean-up — we handle everything so you enjoy your event stress-free.',
  },
]

export default function WhyUs() {
  return (
    <section id="why">
      <div className="ct">
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <span className="ey">Why Choose Us</span>
          <span className="gline" style={{ margin: '10px auto 18px' }}></span>
          <h2 className="st">The LTCS Difference</h2>
        </div>
        <div className="why-grid">
          {reasons.map((r) => (
            <div className="wc" key={r.title}>
              <span className="wicon">{r.icon}</span>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}