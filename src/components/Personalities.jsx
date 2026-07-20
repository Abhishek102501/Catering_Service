import { FaLandmark, FaFlag, FaFilm, FaMusic } from 'react-icons/fa'
import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'

const personalities = [
  {
    img: p1,
    name: 'CM Yogi Adityanath',
    title: 'Chief Minister, Uttar Pradesh',
    tag: <><FaLandmark /> Political Leader</>,
  },
  {
    img: p2,
    name: 'PM Narendra Modi',
    title: 'Prime Minister of India',
    tag: <><FaFlag /> Prime Minister</>,
  },
  {
    img: p3,
    name: 'Vindu Dara Singh',
    title: 'Actor & Celebrity',
    tag: <><FaFilm /> Bollywood</>,
  },
  {
    img: p4,
    name: 'Udit Narayan',
    title: 'Legendary Playback Singer',
    tag: <><FaMusic /> Music Icon</>,
  },
]

export default function Personalities() {
  return (
    <section id="personalities">
      <div className="ct">

        {/* Header */}
        <div className="pers-header">
          <span className="ey">Our Honour</span>
          <span className="gline"></span>
          <h2 className="st">Trusted by the Greatest</h2>
          <p className="pers-subtitle">
            Over the decades, LTCS has had the privilege of serving and being
            associated with some of India's most celebrated personalities.
          </p>
        </div>

        {/* Cards */}
        <div className="pers-grid">
          {personalities.map((p, i) => (
            <div className="pers-card" key={i}>
              <div className="pers-img-wrap">
                <img src={p.img} alt={p.name} className="pers-img" />
                <div className="pers-overlay">
                  <div className="pers-overlay-content">
                    <div className="pers-tag">{p.tag}</div>
                    <div className="pers-overlay-name">{p.name}</div>
                    <div className="pers-overlay-title">{p.title}</div>
                  </div>
                </div>
              </div>
              <div className="pers-body">
                <div className="pers-name">{p.name}</div>
                <div className="pers-title">{p.title}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="pers-bottom-quote">
          <p>We are honoured to have served India's finest — a testament to our
          commitment to quality, purity, and hospitality.</p>
        </div>

      </div>
    </section>
  )
}