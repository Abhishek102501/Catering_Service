const images = [
  { src: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80', cls: 'tall' },
  { src: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80', cls: '' },
  { src: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80', cls: '' },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80', cls: 'tall' },
  { src: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=900&q=80', cls: 'wide' },
  { src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80', cls: '' },
  { src: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80', cls: '' },
]

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="ct">
        <div className="gh">
          <span className="ey">Photo Gallery</span>
          <span className="gline"></span>
          <h2 className="st">A Glimpse of Our Spreads</h2>
        </div>

        <div className="ggrid">
          {images.map((img, i) => (
            <div className={`gi ${img.cls}`} key={i}>
              <img src={img.src} alt={`Gallery ${i + 1}`} />
              <div className="gi-overlay"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
