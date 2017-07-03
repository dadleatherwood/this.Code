module.exports = {

  create: function (req, res, next) {
    const dbInstance = req.app.get('db')
    const {firstName, lastName, username, email, password} = req.body
    const inputs = [firstName, lastName, username, email, password]
    dbInstance.create_user(inputs).then(function(user){
      res.send(user)
    })
  },

  getUser: function(req, res, next) {
    const dbInstance = req.app.get('db')
    let id = req.params.userId
    dbInstance.read_user(id).then(function(user){
      res.send(user)
    })
  }


}
