const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const {
  sequelize
} = require('./models/index.js')

const app = express()
app.use(bodyParser.json())
app.use(morgan('combined'))

require('./router')(app)

// app.post('/users', (req, res) => {
//   console.log(req.body)
//   res.send({
//     code: 200,
//     data: req.body
//   })
// })

sequelize.sync({
  force: true
}).then(() => {
  console.log('Connection has been established sucessfully')
  app.listen(3000, () => console.log(`server has been started on port 3000`))
}).catch(err => {
  console.error('Unable to connect to the database:', err)
})