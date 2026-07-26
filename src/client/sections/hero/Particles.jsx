import { useMemo } from 'react'
import '../../assets/styles/particles.css'

export default function Particles({ amount = 45 }) {
  const particles = useMemo(() =>
    Array.from({ length: amount }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 8 + 5}s`,
      animationDelay: `${Math.random() * 5}s`,
      opacity: Math.random(),
      size: `${Math.random() * 5 + 2}px`,
    })), [amount])

  return (
    <div className="particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
            opacity: p.opacity,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  )
}