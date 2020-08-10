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
  Student.update(
    { _id: req.body._id },
    { $set: { name: req.body.newName } },
    { new: true }
  )
    .then((updatedStudent) => res.json(updatedStudent))
    .catch((error) => res.json(error))
})

router.delete('/', (req, res) => {
  Student.remove({ _id: req.body._id })
    .then((data) => res.json(data))
    .catch((error) => res.json(error))
})

export default router
