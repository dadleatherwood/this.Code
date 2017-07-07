module.exports = {

  getChallenges : (req, res, next) => {
    const dbInstance = req.app.get('db')
    dbInstance.read_challenges()
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
    req.app.get('db').read_challenge_hint(req.params.id)
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
      return res.status(200).json(result)
    })
    .catch(err => res.status(500).json(err))
  }

}
