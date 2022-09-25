import Express, { Request, Response, Router } from 'express'
const router: Router = Express.Router()
import * as loginCtrl from '../controllers/login-ctrl'

router.post('/login', loginCtrl.login)

export default router
