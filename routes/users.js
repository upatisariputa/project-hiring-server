var express = require('express');
const { getUsers, getUser } = require('./controller');
var router = express.Router();

/* GET users listing. */
router.get('/', getUsers);
// router.get('/:id', getUser);

module.exports = router;
