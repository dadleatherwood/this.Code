const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const config = require('./config.js')
const massive = require('massive')
const usersCtrl = require('./usersCtrl.js')
const challengesCtrl = require('./challengesCtrl.js')

const app = express()

app.use(bodyParser.json())
app.use(express.static(__dirname + "/public"))

massive('postgres://localhost:5432/this_code')
  .then(db => {
    app.set('db', db)
    db.create_users_table()
    db.create_topics_table().then(function() {
      db.create_challenges_table()
    })
  })

//endpoints
app.post('/api/users',usersCtrl.createUser)
app.post('/api/login', usersCtrl.loginUser)
app.get('/api/challenges',challengesCtrl.getChallenges)
app.get('/api/challenge/:id', challengesCtrl.getChallengeById)


app.listen(3000, function(){
  console.log("I am listening on port 3000")
})
