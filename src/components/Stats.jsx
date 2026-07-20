const stats = [
  { num: '42', unit: '+', label: 'Years of Service' },
  { num: '300', unit: '+', label: 'Veg Menu Varieties' },
  { num: '100', unit: '%', label: 'Pure Vegetarian' },
  { num: '10K', unit: '+', label: 'Events Catered' },
]

export default function Stats() {
  return (
    <section id="stats">
      <div className="ct">
        <div className="srow">
          {stats.map((s) => (
            <div className="si" key={s.label}>
              <div className="sn">
                {s.num}<span className="su">{s.unit}</span>
              </div>
              <div className="sl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
