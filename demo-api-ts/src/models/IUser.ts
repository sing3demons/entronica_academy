import { Document } from 'mongoose'

export interface IUser extends Document {
  username: string
  password: string
  name: string
  email: string
  mobileNo: string
  age: Number
  created?: Date
}
