const testimonials = [
  {
    initial: 'R',
    text: "LTCS catered our daughter's wedding — the food was exceptional. Everything was pure veg, and the paneer and dal dishes were absolutely outstanding. Guests kept complimenting the flavours all evening.",
    name: 'Ramesh Gupta',
    role: 'Wedding Client, Kanpur',
  },
  {
    initial: 'P',
    text: 'We have used Lala Trivedi Catering for our annual corporate events for 6 years now. The reliability, quality, and variety of vegetarian food is simply unmatched in Kanpur. Highly recommended!',
    name: 'Priya Agarwal',
    role: 'Corporate Client, Kanpur',
  },
  {
    initial: 'S',
    text: 'The Jain food options they provided for our family function were handled with great care and attention. Since 1982 — and it truly shows in their quality and dedication to every detail.',
    name: 'Sunita Jain',
    role: 'Family Function, Kanpur',
  },
]

export default function Testimonials() {
  return (
    <section id="testi">
      <div className="ct">
        <div className="th">
          <span className="ey">Client Reviews</span>
          <span className="gline"></span>
          <h2 className="st">What Our Clients Say</h2>
        </div>

        <div className="tgrid">
          {testimonials.map((t) => (
            <div className="tc" key={t.name}>
              <div className="tstars">★★★★★</div>
              <div className="tq">"</div>
              <p className="tt">{t.text}</p>
              <div className="tauth">
                <div className="tavt">{t.initial}</div>
                <div>
                  <div className="tname">{t.name}</div>
                  <div className="trole">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
