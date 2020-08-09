import express from 'express'
import cors from 'cors'
import db from './db.json'
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'
import studentRoute from './routes/students'
import energyRoute from './routes/energy'

const server = express()

server.use(cors())
server.use(express.json()) //parses incoming request with json payload
server.use('/students', studentRoute)
server.use('/energy', energyRoute)

server.listen(4002, () =>
  console.log('Server started on http://localhost:4002')
)
