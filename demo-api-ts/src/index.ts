import express, { Application, Request, Response, NextFunction } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import apiRoutes from './routes/apiRoutes'
import * as db from './utils/db'

const app: Application = express()
const port: number = 3000

db.startup()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())

app.get('/healthz', (req: Request, res: Response) => {
  return res.status(200)
})
app.use(apiRoutes)
app.use((req: Request, res: Response, next: NextFunction) => {
  return res.status(404).json({
    resultCode: 40400,
    developerMessage: 'Unknown URL',
  })
})

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
