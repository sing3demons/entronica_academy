import { Document } from 'mongoose'

export interface IUser extends Document {
  username: string
  password: string
  email: string
  phone: string
  age: Number
  created?: Date
}
