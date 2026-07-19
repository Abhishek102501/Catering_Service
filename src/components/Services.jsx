const services = [
  {
    tag: 'Lunch Box',
    name: 'Lunch Box Catering',
    items: ['Corporate Meetings', 'Seminars', 'School Events', 'Office Training', 'Travel Groups'],
    img: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&q=80',
    alt: 'Lunch Box Catering',
  },
  {
    tag: 'Thali',
    name: 'Thali Catering',
    items: ['Birthday Parties', 'Housewarming', 'Puja', 'Family Functions', 'Small Gatherings'],
    img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80',
    alt: 'Thali Catering',
  },
  {
    tag: 'Live Buffet',
    name: 'Live Buffet Catering',
    items: ['Wedding', 'Reception', 'Anniversary', 'Corporate Events', 'Festivals'],
    img: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80',
    alt: 'Live Buffet Catering',
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="ct">
        <div className="sh">
          <span className="ey">What We Do</span>
          <span className="gline"></span>
          <h2 className="st">
            Freshly Prepared Meals for Every Occasion
          </h2>
          <p className="services-subheading">
            From intimate gatherings to large corporate events, we deliver hygienic, delicious meals on time.
          </p>
        </div>

        <div className="sgrid">
          {services.map((s) => (
            <div className="sc" key={s.name}>
              <img src={s.img} alt={s.alt} />
              <div className="so">
                <span className="stag">{s.tag}</span>
                <div className="sname">{s.name}</div>
                <ul className="slist">
                  {s.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="sarrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
