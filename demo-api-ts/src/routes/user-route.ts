import Express, { Request, Response, Router } from 'express'
const router: Router = Express.Router()
import { getUser } from '../controllers/user-ctrl'

router.get('/user', getUser)

export default router
