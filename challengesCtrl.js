module.exports = {

  getChallenges : (req, res, next) => {
    const dbInstance = req.app.get('db')
    dbInstance.read_challenges(req.query.user_id)
    .then(challenges => {
      return res.status(200).json(challenges)
    })
  },


  getChallengeById : (req, res, next) => {
    const dbInstance = req.app.get('db')
    dbInstance.read_challenge(req.params.id)
    .then(challenge => {
      return res.status(200).json(challenge)
    })
  },


  testCode : (req, res, next) => {
    const dbInstance = req.app.get('db')
    dbInstance.read_tests_by_id(req.body.challenge_id)
    .then(tests => {
      return res.status(200).json(tests)
    })
  },


  getHintInfo : (req, res, next) => {
    const dbInstance = req.app.get('db')
    dbInstance.read_challenge_hint(req.params.id)
    .then(hint => {
      return res.status(200).json(hint)
    })
    .catch(err => res.status(500).json(err))
  },


  createUserChallenge: (req, res, next) => {
    const db = req.app.get('db')
    db.read_user_challenge([req.body.challenge_id, req.body.user_id])
    .then(userChallenges => {
      if (userChallenges.length) {
        return res.status(200).json(userChallenges)
      }
      db.create_user_challenge([req.body.challenge_id, req.body.user_id])
      .then(result => {
        return res.status(200).json(result)
      })
    })
    .catch(err => res.status(500).json(err))
  },


  updateUserChallenge: (req, res, next) => {
    req.app.get('db').update_user_challenge([req.body.challenge_id, req.body.user_id, req.body.completed])
    .then(result => {
      if (result.length) {
        return req.app.get('db').update_user_score([req.body.value, req.body.user_id])
      }
      return result
    })
    .then(result => {
      return res.status(200).json(result)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  },


  getDaysInCode: (req, res, next) => {
    const db = req.app.get('db')
    db.read_user_days(req.params.id)
    .then(result => {
      console.log(result[0].update_days)
      if (result[0].greater_than_24 && result[0].less_than_48) {
        db.update_user_days(req.params.id)
        .then(result => {
          return res.status(200).json(result)
        })
        .catch(err => {
          console.log(err)
        })
      } else if (!result[0].less_than_48) {
        db.reset_user_days(req.params.id)
        .then(result => {
          return res.status(200).json(result)
        })
        .catch(err => {
          console.log(err)
        })
      } else {
        return res.status(200).json(result)
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  }

}
