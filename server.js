const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const port = 8080
const sequelize = require('./models/index')
// models
const models = require('./models')

// routes
const books = require('./routes/books')

sequelize.sync().then((result) => {
  // console.log(result)
})

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// register routes
app.use('/books', books)

// index path
app.get('/', function (req, res) {
  console.log('app listening on port: ' + port)
  res.send('tes express nodejs mysql')
})

app.listen(port, function () {
  console.log('app listening on port: ' + port)
})
