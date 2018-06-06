const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = express.Router();

let User = require('../models/User');

userRoutes.use(bodyParser.urlencoded({extended: true}));
userRoutes.use(bodyParser.json());

// POST
userRoutes.route('/add').post(function (req, res) {
  let user = new User(req.body);
  user.save()
    .then(user => {
      res.status(200).json(user);
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
  User.findOne({ email: req.body.email, password: req.body.password }, function (err, User){
    if(err){
      console.log('err');
      console.log(err);
    } else {
      console.log('success');
      res.json(User);
    }
  });
});

// GET
userRoutes.route('/:id').get(function (req, res) {
    User.findById(req.params.id, function (err, User){
      if(err){
        console.log('err');
        console.log(err);
      } else {
        console.log('success');
        res.json(User);
      }
    });
});

// GET ALL
userRoutes.route('/').get(function (req, res) {
  console.log('get');
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