import Express, { Router } from 'express'
const router: Router = Express.Router()

import loginRouter from './login-route'
import registerRouter from './register-route'
import userRouter from './user-route'

router.use(loginRouter)
router.use(registerRouter)
router.use(userRouter)

export default router
