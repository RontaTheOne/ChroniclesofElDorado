import { useEffect, useRef } from 'react'

export function useParallax(intensity = 45) {
  const ref = useRef(null)

  useEffect(() => {
    const handleMove = (e) => {
      const x = (window.innerWidth / 2 - e.pageX) / intensity
      const y = (window.innerHeight / 2 - e.pageY) / intensity
      if (ref.current) {
        ref.current.style.transform = `translate(${x}px, ${y}px) scale(1.08)`
      }
    }
    document.addEventListener('mousemove', handleMove)
    return () => document.removeEventListener('mousemove', handleMove)
  }, [intensity])

  return ref
}