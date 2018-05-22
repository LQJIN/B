var express = require('express');
var router = express.Router();

var user = require('../controllers/user.js');

/* check the account exists or not . */
router.get('/check_account', user.check_account);

/* insert account . */
router.post('/insert_account', user.insert_account);

module.exports = router;
