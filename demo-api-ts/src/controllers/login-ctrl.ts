import { Request, Response } from 'express'
import User from '../models/User'
import bcrypt from 'bcrypt'

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email: email })

    if (!user) {
      return res
        .status(401)
        .json({ resultCode: 40101, resultDescription: 'Access denied' })
    }

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) {
      return res
        .status(401)
        .json({ resultCode: 40101, resultDescription: 'Access denied' })
    }

    res
      .status(200)
      .json({ resultCode: 20000, resultDescription: 'Login Success' })
  } catch (error: any) {
    res.status(500).json({
      resultCode: 50000,
      resultDescription: error.message,
    })
  }
}

// export default login
export { login }
