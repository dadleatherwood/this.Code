// NodeMailer Info
const nodemailer = require('nodemailer')
const config = require('./config')
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jacob.leatherwood.22@gmail.com',
        pass: config.gmailPassword
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"this.Code()" <heythere@thiscode.com>', //  Can I send from dummy address?,
    to: '',
    subject: 'Welcome to this.Code()', // Subject line
    text: 'Welcome to this.Code(), a site designed to help you improve your JavaScript abilities with fun and complex coding challenges.  We hope you enjoy!', // plain text body
    html: '<p>Welcome to this.Code(), a site designed to help you improve your JavaScript abilities with fun and complex coding challenges.  We hope you enjoy!</p>' // html body
};


module.exports = {

  createUser: (req, res, next) => {
    const dbInstance = req.app.get('db')
    const {first_name, last_name, username, email, password} = req.body
    const inputs = [first_name, last_name, username, email, password]
    dbInstance.create_user(inputs)
    .then(function(user){
      if (user.length) {
        // send mail with defined transport object
        const options = Object.assign({}, mailOptions, {to: email})
        transporter.sendMail(options, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        });

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
