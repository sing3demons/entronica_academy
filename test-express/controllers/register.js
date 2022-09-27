const bcrypt = require('bcrypt')

const User = require('../model/user.js')

exports.register = async (req, res) => {
  try {
    const { username, name, password, email, mobileNo, age } = req.body

    const hash = await bcrypt.hash(password, 10)

    let user = new User()
    user.username = username
    user.name = name
    user.email = email
    user.password = hash
    user.mobileNo = mobileNo
    user.age = age
    //   const user = new User({ username, password, email, phone, age })
    const result = await user.save()
    res.status(201).json({
      resultCode: 20100,
      resultDescription: 'Success',
      resultData: {
        users: result,
      },
    })
  } catch (error) {
    res.status(500).json({
      resultCode: 50000,
      resultDescription: 'Error',
      resultData: error.message,
    })
  }
}
