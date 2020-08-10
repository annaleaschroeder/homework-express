import express from 'express'
import Student from '../models/Student'

const router = express.Router()

router.get('/', (req, res) => {
  Student.find()
    .then((students) => res.json(students))
    .catch((error) => res.json(error))

  console.log('Ich hab einen get request bekommen')
})

router.post('/', (req, res) => {
  Student.create(req.body)
    .then((student) => res.json(student))
    .catch((error) => res.json(error))
  console.log('Ich hab einen post request bekommen')
})

router.patch('/', (req, res) => {
  Student.
})

export default router
