import { useEffect, useRef } from 'react'

export function useCustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const handleMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.top = `${e.clientY}px`
        cursorRef.current.style.left = `${e.clientX}px`
      }
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return cursorRef
}