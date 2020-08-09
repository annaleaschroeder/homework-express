import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.json('I am your energy-route')
  console.log(req.body)
})
router.post('/', (req, res) => {
  res.json((msg: 'Energy'))
  console.log(req.body)
})

export default router
