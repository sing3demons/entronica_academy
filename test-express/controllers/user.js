const User = require('../model/user.js')

exports.users = async (req, res) => {
  try {
    const users = await User.find({})
    res.status(200).json({
      resultCode: 20000,
      resultDescription: 'Success',
      resultData: {
        users: users,
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

exports.user = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    res.status(200).json({
      resultCode: 20000,
      resultDescription: 'Success',
      resultData: {
        user: user,
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