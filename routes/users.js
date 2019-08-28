var express = require('express');
const { getUsers, getUser } = require('./controller');
const { User } = require('../models');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.error(err);
      next(err);
    });
});

router.get('/users', getUsers);
router.get('/users/:id', getUser);

module.exports = router;
