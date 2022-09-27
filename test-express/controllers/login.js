const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const User = require('../model/user.js')

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({
      email: email,
    })
      
    if (!user) {
      const error = new Error('not email')
      error.statusCode = 404
      throw error
    }

    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) {
      const error = new Error('password')
      error.statusCode = 404
      throw error
    }

    res.status(200).json({
      resultCode: 20000,
      resultDescription: 'Success',
      resultData: {
        users: user,
      },
    })
  } catch (error) {
    res.status(error.status || 500).json({
      resultCode: 50000,
      resultDescription: 'Error',
      resultData: error.message,
    })
  }
}
