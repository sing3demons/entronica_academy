const express = require('express')
const router = express.Router()

const loginController = require('../controllers/login')
const registerController = require('../controllers/register.js')
const usersController = require('../controllers/user.js')

router.get('/user', usersController.users)
router.get('/user/:id', usersController.user)

router.post('/register', registerController.register)

router.post('/login', loginController.login)

module.exports = router
