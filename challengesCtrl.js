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
  }

}
