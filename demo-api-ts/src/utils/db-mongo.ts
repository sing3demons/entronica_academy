import { connect } from 'mongoose'
const uri: string =
  process.env.MONGO_URI || 'mongodb://localhost:27017/test-api'

const initMongodb = async () => {
  try {
    await connect(uri)
    console.log('Connected to MongoDB')
  } catch (error) {
    throw error
  }
}

export default initMongodb
