import express from 'express'
import cors from 'cors'
import db from './db.json'
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'

const server = express()
//const students = ['Anna', 'Caro', 'Deniz', 'Nina']

server.use(cors())
server.use(express.json()) //parses incoming request with json payload

server.get('/', (req, res) => {
  console.log('Ich hab einen get request bekommen')
  const responseBody = {
    msg: 'Hallo ich bin dein Server',
    students,
  }
  res.json(responseBody)
})

server.post('/', (req, res) => {
  console.log('Ich hab einen post request bekommen')
  console.log(req.body)

  db.students.push({ id: uuidv4(), name: req.body.name })
  fs.writeFile('./db.json', JSON.stringify(db, null, 2), 'utf8', (error) =>
    console.log(error)
  )
  res.json({
    'response-message': 'Ich habe deinen request bekommen',
    request: req.body,
  })
})

server.listen(4002, () =>
  console.log('Server started on http://localhost:4002')
)
