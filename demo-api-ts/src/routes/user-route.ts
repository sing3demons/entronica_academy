import Express, { Request, Response, Router } from 'express'
const router: Router = Express.Router()
import { getUser } from '../controllers/user-ctrl'

router.get('/api/user/user', getUser)

export default router
