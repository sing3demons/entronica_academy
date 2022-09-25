import Express, { Request, Response, Router } from 'express'
const router: Router = Express.Router()
import { register } from '../controllers/register-ctrl'

router.post('/register', register)

export default router
