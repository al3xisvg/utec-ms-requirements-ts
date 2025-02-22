import mongoose from 'mongoose'

import config from '../config/app'

const connectDB = async () => {
  try {
    await mongoose.connect(config.dbUri as string, {
      serverSelectionTimeoutMS: 5000, // Tiempo de espera para conectarse
    })
    console.log('✅ MongoDB conectado correctamente')
  } catch (error) {
    console.error('❌ Error al conectar MongoDB:', error)
    process.exit(1) // Salir de la aplicación si hay un error
  }
}

export default connectDB
