const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: 'Email address is required',
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    created: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    collection: 'user',
    versionKey: false,
  }
)
// const User = mongoose.model('User', userSchema)

module.exports = mongoose.model('User', userSchema)
