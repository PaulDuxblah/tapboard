const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = express.Router();
const jwt = require('jsonwebtoken');
const fs = require("fs");
const RSA_PRIVATE_KEY = fs.readFileSync('jwtRS256.key');

let User = require('../models/User');

userRoutes.use(bodyParser.urlencoded({extended: true}));
userRoutes.use(bodyParser.json());

function generateJWT(userId) {
  return jwt.sign({}, RSA_PRIVATE_KEY, {
    algorithm: 'RS256',
    expiresIn: 120,
    subject: userId
  });
}

function getJWTObject(jwtBearerToken, user) {
  return {
    idToken: jwtBearerToken, 
    user: {
      _id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    },
    expiresIn: 120
  };
}

function userLogged(res, user) {
    console.log('success');
    const jwtBearerToken = generateJWT(user.id);
    res.cookie("UserID", jwtBearerToken, {httpOnly:true, secure:true});
    res.status(200).json(getJWTObject(jwtBearerToken, user));
}

// REGISTER
userRoutes.route('/add').post(function (req, res) {
  let user = new User(req.body);
  user.save()
    .then(user => {
      userLogged(res, user);
    })
    .catch(err => {
      console.log(err);
      switch (err.code) {
        case 11000:
          res.status(400).send("This email already exists");
          break;
        default:
          res.status(400).send("unable to save to database");
          break;
      }
    });
});

// LOGIN
userRoutes.route('/login').post(function (req, res) {
  User.findOne({ email: req.body.email, password: req.body.password }, function (err, User) {
    if(err){
      console.log('err');
      console.log(err);
    } else {
      userLogged(res, User);
    }
  });
});

// GET ALL
userRoutes.route('/').get(function (req, res) {
  User.find(function (err, Users){
    if(err){
      console.log('err');
      console.log(err);
    }
    else {
      console.log('success');
      res.json(Users);
    }
  });
});

module.exports = userRoutes;