const menuItems = [
  {
    cat: 'North Indian Classic',
    name: 'Dal Makhani',
    desc: 'Slow-cooked black lentils in a rich, buttery tomato gravy — a timeless vegetarian classic served at every LTCS celebration.',
    img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80',
  },
  {
    cat: 'Live Station Favourite',
    name: 'Paneer Live Station',
    desc: 'Shahi Paneer, Kadai Paneer, Paneer Tikka — freshly prepared live at your event for the richest, most aromatic flavours.',
    img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80',
  },
  {
    cat: 'Sweets & Desserts',
    name: 'Indian Mithai & Dessert Bar',
    desc: 'Gulab Jamun, Halwa, Kheer, and seasonal sweets — a lavish vegetarian dessert spread curated for every joyful occasion.',
    img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80',
  },
]

export default function Menu({ onBookNow }) {
  return (
    <section id="menu">
      <div className="ct">
        <div className="mh">
          <span className="ey">Our Offerings</span>
          <span className="gline"></span>
          <h2 className="st">Pure Veg — Always Delicious</h2>
        </div>

        <div className="mgrid">
          {menuItems.map((item) => (
            <div className="mc" key={item.name}>
              <img src={item.img} alt={item.name} />
              <div className="mc-body">
                <div className="mc-cat">{item.cat}</div>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <span className="veg-icon">Pure Veg</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
