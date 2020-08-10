import cors from 'cors'
import express from 'express'
import energyRoute from './routes/energy'
import studentRoute from './routes/students'
import mongoose from 'mongoose'

mongoose
  .connect('mongodb://localhost:27017/homework-express', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Starrrrrt'))

const server = express()

server.use(cors())
server.use(express.json()) //parses incoming request with json payload
server.use('/students', studentRoute)
server.use('/energy', energyRoute)

server.listen(4002, () =>
  console.log('Server started on http://localhost:4002')
)
