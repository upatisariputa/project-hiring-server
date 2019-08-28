var express = require('express');
const { getTodo } = require('./controller');
var router = express.Router();

/* GET todos listing. */
router.get('/:id', getTodo);

module.exports = router;
