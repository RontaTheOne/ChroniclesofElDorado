import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  console.log('La logica del servidor se ha ejecutado correctamente.')
  res.json({ message: 'La logica del servidor se ha ejecutado correctamente.' })
})

export default app