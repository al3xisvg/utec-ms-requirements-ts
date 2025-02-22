import express from 'express'

import routes from './routes'

import config from './config/app'

import connectDB from './db'

const app = express()

// Middleware
app.use(express.json())
app.use('/api', routes)

connectDB()

// Servidor
app.listen(config.port, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${config.port}`)
})
