import express, { Application } from 'express'
import morgan from 'morgan'
import apiRoutes from './routes/apiRoutes'
import * as db from './utils/db'

const app: Application = express()
const port = 3000


db.startup()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('tiny'))

app.use(apiRoutes)

const server = app.listen(port, () =>
  console.log(`Start node.js on port ${port}`)
)

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.')
  console.log('Closing http server.')
  server.close(() => {
    console.log('Http server closed.')
  })
})
