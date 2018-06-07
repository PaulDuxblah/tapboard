const express = require('express');
const bodyParser = require('body-parser');
const scoreRoutes = express.Router();

let Score = require('../models/Score');

scoreRoutes.use(bodyParser.urlencoded({extended: true}));
scoreRoutes.use(bodyParser.json());

// ADD
scoreRoutes.route('/add').post(function (req, res) {
  let score = new Score(req.body);
  score.save()
    .then(score => {
      res.json(score);
    })
    .catch(err => {
      console.log(err);
      res.status(400).send("unable to save to database");
    });
});

// GET ALL
scoreRoutes.route('/').get(function (req, res) {
  Score.find().populate('user', 'email firstName lastName').exec(function (err, Scores) {
    if(err){
      console.log('err');
      console.log(err);
    }
    else {
      console.log('success');
      res.json(Scores);
    }
  });
});

module.exports = scoreRoutes;