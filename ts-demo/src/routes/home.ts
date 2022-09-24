import express, { Router, Request, Response } from 'express'
const router: Router = express.Router()

router.get('', async (req: Request, res: Response): Promise<void> => {
  res.send('Hello World!!')
})

export default router
