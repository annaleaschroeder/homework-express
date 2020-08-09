import express from 'express'
import cors from 'cors'

const server = express()

server.use(cors())
server.use(express.json()) //parses incoming request with json payload

server.get('/', (req, res) => {
  console.log('Ich hab einen get request bekommen')
  res.json('Hallo ich bin dein Server')
})

server.post('/', (req, res) => {
  console.log('Ich hab einen post request bekommen')
  console.log(req.body)
  res.json({
    'response-message': 'Ich habe deinen request bekommen',
    request: req.body,
  })
})

server.listen(4002, () =>
  console.log('Server started on http://localhost:4002')
)
