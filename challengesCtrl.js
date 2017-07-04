module.exports = {

  getChallenges : (req, res, next) => {
    const dbInstance = req.app.get('db')
    dbInstance.read_challenges().then(challenges => {
      return res.status(200).json(challenges)
    })
  },

  getChallengeById : (req, res, next) => {
    const dbInstance = req.app.get('db')
    dbInstance.read_challenge(req.params.id).then(challenge => {
      return res.status(200).json(challenge)
    })
  },

  testCode : (req, res, next) => {
    const dbInstance = req.app.get('db')
    dbInstance.read_tests_by_id(req.body.challenge_id).then(tests => {
      return res.status(200).json(tests)
    })
  }

}
