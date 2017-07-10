module.exports = {

  createUser: (req, res, next) => {
    const dbInstance = req.app.get('db')
    const {first_name, last_name, username, email, password} = req.body
    const inputs = [first_name, last_name, username, email, password]
    dbInstance.create_user(inputs)
    .then(function(user){
      if (user.length) {
        return res.status(200).json(user)
      }
        return res.status(401).json({message: "Sorry! There was a problem creating your account. Please try again."})
    })
    .catch(err => res.status(500).json(err))
  },

  loginUser: (req, res, next) => {
    const dbInstance = req.app.get('db')
    const username = req.body.username
    const password = req.body.password
    dbInstance.read_user([username, password])
    .then(function(user){
      if (user.length) {
          return res.status(200).json(user)
      }
      return res.status(401).json({message: "Incorrect login, please try again."})
    })
    .catch(err => res.status(500).json(err))
  },

  getUsers: (req, res, next) => {
    const dbInstance = req.app.get('db')
    dbInstance.read_users()
    .then(users => {
      return res.status(200).json(users)
    })
    .catch(err => res.status(500).json(err))
  }


}
