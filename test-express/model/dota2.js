const mongoose = require('mongoose')

const dota2Schema = new mongoose.Schema(
  {
    name: { type: String, unique: true },
    localized_name: String,
    date: { type: Date, default: Date.now },
  },
  {
    collection: 'heroDota2',
    versionKey: false,
  }
)

module.exports = mongoose.model('heroData2', dota2Schema)
