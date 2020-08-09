import express from 'express'
import fs from 'fs'
import { v4 as uuidv4 } from 'uuid'
import db from '../db.json'

const router = express.Router()

router.get('/', (req, res) => {
  console.log('Ich hab einen get request bekommen')
  const responseBody = {
    msg: 'Hallo ich bin dein Server',
    students: db.students,
  }
  res.json(responseBody)
})

router.post('/', (req, res) => {
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
export default router
