import express from 'express'
import db from '../db.json'
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'

const router = express.Router()

router.get('/:id', (req, res) => {
  const { id } = req.params
  const { timestamp, energylevel } = getEnergyFromId(id)
  const other = getAverageEnergyFromAllStudents()

  res.json({
    timestamp,
    energylevel,
    other,
  })
  console.log(req.body)
})

router.post('/', (req, res) => {
  const date = new Date()
  const timestamp = date.toUTCString()
  const name = getNameFromId(req.body.id).name
  const energyObject = {
    studentID: req.body.id,
    energylevel: req.body.energylevel,
    timestamp,
    postID: uuidv4(),
    name,
  }
  db.energy.push(energyObject)
  fs.writeFile('./db.json', JSON.stringify(db, null, 2), 'utf8', (error) =>
    console.log(error)
  )

  res.json({ msg: 'Energy' })
  console.log(req.body)
  console.log(energyObject)
})

export default router

function getNameFromId(id) {
  const foundStudent = db.students.find((student) => {
    return student.id === id //find-Methode, gibt den Werte des Elements eines Arrays zurück, welches als Erstes "true" erfüllt. Tipp: MDN-Artikel
  })
  return foundStudent
}

function getEnergyFromId(id) {
  const foundStudent = db.energy.find((student) => {
    return student.studentID === id //find-Methode, gibt den Werte des Elements eines Arrays zurück, welches als Erstes "true" erfüllt. Tipp: MDN-Artikel
  })
  return foundStudent
}

function getAverageEnergyFromAllStudents() {
  const sumOfAllEnergy = db.energy.reduce(
    (acc, cur) => acc + Number(cur.energylevel),
    0
  )
  return Math.round(sumOfAllEnergy / db.energy.length)
}
