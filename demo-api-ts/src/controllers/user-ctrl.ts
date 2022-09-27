import { Request, Response } from 'express'
import User from '../models/User'

export const getUser = async (req: Request, res: Response) => {
  try {
    const result = await User.find({})
    res.status(200).json({
      resultCode: 20000,
      resultDescription: 'Success',
      resultData: {
        users: result,
      },
    })
  } catch (error: any) {
    res.status(500).json({
      resultCode: 50000,
      resultDescription: error.message,
    })
  }
}
