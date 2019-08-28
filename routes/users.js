var express = require('express');
const { getUsers, getUser } = require('./controller');
const { User } = require('../models');
var router = express.Router();

/* GET users listing. */
router.get('/', getUsers);

// router.get('/users', getUsers);
router.get('/:id', getUser);

module.exports = router;
