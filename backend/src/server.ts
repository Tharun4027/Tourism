import express from 'express'
import router from './routes/index.js'
import { env } from './config/env.js'
import { errorMiddleware } from './middleware/error.middleware.js'

const app = express()

app.use(express.json())
app.use('/api', router)
app.use(errorMiddleware)

app.listen(env.port, () => {
  console.log(`Backend running on http://localhost:${env.port}`)
})
