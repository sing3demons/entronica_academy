import { Schema, model, Model } from 'mongoose'
import { IUser } from './IUser'

const userSchema: Schema = new Schema<IUser>(
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

const User: Model<IUser> = model<IUser>('User', userSchema)

export default User
