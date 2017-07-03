module.exports = {

  createUser: function (req, res, next) {
    const dbInstance = req.app.get('db')
    const {first_name, last_name, username, email, password} = req.body
    const inputs = [first_name, last_name, username, email, password]
    dbInstance.create_user(inputs).then(function(user){
      res.send(user)
    })
  },

  loginUser: function(req, res, next) {
    const dbInstance = req.app.get('db')
    const username = req.body.username
    const password = req.body.password
    dbInstance.read_user([username, password]).then(function(user){
      if (user.length) {
          return res.status(200).json(user)
      }
      return res.status(401).json({message: "Incorrect login"})
    }).catch(function(err) {
      console.log(err)
    })
  }


}
