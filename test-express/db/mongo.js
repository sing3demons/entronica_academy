const mongoose = require('mongoose')
const mongoUri = process.env.MONGO_URI

module.exports = async () => {
  await mongoose.connect(mongoUri)
  console.log('Connected to MongoDB...')
}

// module.exports = { connectMongoDB, mongoose }
