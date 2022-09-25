import { connect } from 'mongoose'
const uri: string = process.env.MONGO_URI || 'mongodb://localhost:27017/test-api'

const initMongodb = async (): Promise<void> => {
  try {
    await connect(uri)
  } catch (error) {
    throw error
  }
}

export default initMongodb
