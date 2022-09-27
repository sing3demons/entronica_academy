const express = require('express')
require('dotenv').config()
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const logger = morgan('tiny')
const port = process.env.PORT || 3000
app.use(cors())

const home = require('./routes/home.js')
const dotA2 = require('./routes/dota2.js')
const users = require('./routes/user.js')

const connectMongoDB = require('./db/mongo.js')

// create "middleware"
connectMongoDB()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger)

app.use('/', home)
app.use('/api/dota2/', dotA2)
app.use('/api/user/', users)

app.listen(port, () => console.log(`Example app listening on port ${port}`))
