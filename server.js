const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const config = require('./config.js')
const massive = require('massive')

const app = express()

app.use(bodyParser.json())
app.use(express.static(__dirname + "/public"))

//endpoints


app.listen(3000, function(){
  console.log("I am listening on port 3000")
})
