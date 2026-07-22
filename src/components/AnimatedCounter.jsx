import { useEffect, useRef, useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const [ref, isVisible] = useScrollAnimation(0.3)
  const started = useRef(false)

  const isText = isNaN(parseInt(target))

  useEffect(() => {
    if (!isVisible || started.current || isText) return
    started.current = true
    const num = parseInt(target.replace(/\D/g, ''))
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
  }, [isVisible, target, duration, isText])

  return (
    <span ref={ref}>
      {isText ? target : count}{suffix}
    </span>
  )
}