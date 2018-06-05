const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = express.Router();

let User = require('../models/User');

userRoutes.use(bodyParser.urlencoded({extended: true}));
userRoutes.use(bodyParser.json());

  console.log('route');
// POST
userRoutes.route('/add').post(function (req, res) {
  let user = new User(req.body);
  console.log(user);
  user.save()
    .then(game => {
      res.status(200).json({'user': 'User added successfully'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// GET
userRoutes.route('/:id').get(function (req, res) {
    console.log('get');
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