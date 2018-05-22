var express = require('express');
var router = express.Router();

var user = require('../controllers/user.js');

/* Check the account exists or not . */
router.get('/check_account', user.check_account);

module.exports = router;
