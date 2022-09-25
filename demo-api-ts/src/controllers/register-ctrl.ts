import { Request, Response } from 'express'
import User from '../models/User'
import bcrypt from 'bcrypt'

export const register = async (req: Request, res: Response) => {
  try {
    const { username, password, email, phone, age } = req.body

    // check for duplicate usernames in the db
    const duplicate = await User.findOne({ username: username })
    if (duplicate) {
      return res.status(403).json({
        resultCode: 40301,
        resultDescription: 'Data existed',
      })
    } else {
      //encrypt the password
      const salt: string = await bcrypt.genSalt(10)
      const hashPwd: string = await bcrypt.hash(password, salt)

      // create and store the new user
      const result = await User.create({
        username: username,
        password: hashPwd,
        email: email,
        phone: phone,
        age: age,
        // created: new Date(),
      })

      console.log(result)

      res.status(201).json({
        resultCode: 20100,
        resultDescription: `New user ${username} created!`,
      })
    }
  } catch (error: any) {
    res.status(500).json({
      resultCode: 50000,
      resultDescription: error.message,
    })
  }
}

// export default register
