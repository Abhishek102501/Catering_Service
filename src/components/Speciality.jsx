import { FaLeaf, FaSeedling, FaRecycle, FaFlask, FaBan } from 'react-icons/fa'
import { FadeUp } from './AnimatedSection'

const specialities = [
  {
    icon: <FaBan />,
    title: 'No Onion No Garlic',
    desc: 'Pure satvik food preparation'
  },
  {
    icon: <FaLeaf />,
    title: '100% Plant-Based',
    desc: 'Eco-Friendly Cutlery'
  },
  {
    icon: <FaRecycle />,
    title: 'Biodegradable',
    desc: 'Disposable Cutlery'
  },
  {
    icon: <FaFlask />,
    title: 'Food-Grade & Non-Toxic',
    desc: 'Sustainable Cutlery'
  },
  {
    icon: <FaSeedling />,
    title: 'Plastic-Free',
    desc: 'Premium Cutlery'
  },
]

export default function Speciality() {
  return (
    <section id="speciality">
      <FadeUp>
        <div className="speciality-header">
          <span className="speciality-label">Our Speciality</span>
        </div>
        <div className="speciality-strip">
          {specialities.map((s, i) => (
            <div className="speciality-item" key={i}>
              <div className="speciality-icon">{s.icon}</div>
              <div className="speciality-text">
                <div className="speciality-title">{s.title}</div>
                <div className="speciality-desc">{s.desc}</div>
              </div>
              {i < specialities.length - 1 && (
                <div className="speciality-divider" />
              )}
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  )
}