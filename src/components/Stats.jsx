import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    const isText = isNaN(parseInt(target))
    if (isText) { setCount(target); return }

    const num = parseInt(target.toString().replace(/\D/g, ''))
    const duration = 2000
    const steps = 60
    const increment = num / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= num) {
        setCount(num)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {typeof count === 'number' ? count.toLocaleString() : count}{suffix}
    </span>
  )
}

const stats = [
  { num: 42, unit: '+', label: 'Years of Service' },
  { num: 300, unit: '+', label: 'Veg Menu Varieties' },
  { num: 10000, unit: '+', label: 'Events Catered' },
  { num: 100, unit: '%', label: 'Pure Vegetarian' },
]

export default function Stats() {
  return (
    <section id="stats">
      <div className="ct">
        <div className="srow">
          {stats.map((s, i) => (
            <motion.div
              className="si"
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="sn">
                <Counter target={s.num} suffix={s.unit} />
              </div>
              <div className="sl">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}