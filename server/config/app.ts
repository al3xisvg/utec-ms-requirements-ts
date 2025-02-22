import dotenv from 'dotenv'

dotenv.config()

const config = {
  port: process.env.PORT || 3000,
  dbUri: process.env.MONGO_DB_REQUIREMENTS || '',
}

export default config
