import { useCustomCursor } from '../hooks/useCustomCursor.js'
import '../assets/styles/cursor.css'

export default function Cursor() {
  const cursorRef = useCustomCursor()
  return <div ref={cursorRef} className="cursor" />
}