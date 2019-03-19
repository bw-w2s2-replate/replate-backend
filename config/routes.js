const bcrypt = require ('bcryptjs');
const db = require('../data/dbConfig.js');
const { authenticate, generateToken } = require('../auth/authenticate.js');

module.exports = server => {
    server.post('/api/register', register);
    server.post('/api/login', login);
}

function register(req, res) {
    // implement user registration
    const user = req.body;
    //console.log('1. req.body:', user)
    if(user.username && user.password) {
      const hash = bcrypt.hashSync(user.password, 3)
      user.password = hash
      db('user_pass').insert(user)
      .then(result => {
        //console.log('2. result:', result)
        const [id] = result;
        db('user_pass').where({id})
        .first()
        .then(userAdded => {
          //console.log('3. userAdded:', userAdded)
          res.status(200).json(userAdded)
        })
        .catch(err => {
          console.log(err)
          res.status(500).json({message: 'Error accessing DB'})
        })
      })
      .catch(err => {
        res.status(400).json({message: "Error, probably the user already exists"})
        console.log(err);
      })
    } else {
      res.status(422).json({message: "Error, probably you've made a mistake"})
    }
  }

  function login(req, res) {
    // implement user login
    const {username, password} = req.body
    //console.log('req.body:',req.body)
    db('user_pass').where('username', username)
    .first()
    .then(user => {
      //console.log('user after then:', user)
      if(user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user)
        res.status(200).json({
          message: `Login completed for ${user.username}`, token
        })
      } else {
        res.status(401).json({message: 'Invalid credentials'})
      }
    })
    .catch(err => {
      console.log(err)
      res.status(422).json({message: "Error, probably you've made a mistake"})
    })
  }