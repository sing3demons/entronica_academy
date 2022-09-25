import { Schema, model } from 'mongoose'
import { IUser } from './IUser'

const userSchema = new Schema<IUser>(
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
      trim: true,
      lowercase: true,
      unique: true,
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

const User = model<IUser>('User', userSchema)

export default User
