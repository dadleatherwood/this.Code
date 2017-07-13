require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')
const massive = require('massive')
const usersCtrl = require('./usersCtrl.js')
const challengesCtrl = require('./challengesCtrl.js')

const app = express()

app.use(bodyParser.json())
app.use(express.static(__dirname + "/public"))


massive(process.env.DATABASE_URL)
  .then(db => {
    app.set('db', db)
    db.create_users_table()
    db.create_topics_table()
    .then(() => db.create_challenges_table())
    .then(() => db.create_tests_table())
    .then(() => db.create_challenges_users_table())
    .catch(err => {
      console.log(err)
    })
  })

//endpoints
app.post('/api/users',usersCtrl.createUser)
app.post('/api/login', usersCtrl.loginUser)
app.get('/api/challenges',challengesCtrl.getChallenges)
app.get('/api/challenge/:id', challengesCtrl.getChallengeById)
app.post('/api/test',challengesCtrl.testCode)
app.get('/api/hint/:id', challengesCtrl.getHintInfo)
app.post('/api/user/challenge', challengesCtrl.createUserChallenge)
app.put('/api/user/challenge', challengesCtrl.updateUserChallenge)
app.get('/api/users', usersCtrl.getUsers)
app.get('/api/user/days/:id', challengesCtrl.getDaysInCode)




app.listen(process.env.PORT, function(){
  console.log("I am listening on port 3000")
})
