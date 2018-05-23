var express = require('express');
var router = express.Router();

var user = require('../controllers/user.js');

/* check the account exists or not . */
router.get('/check_account', user.check_account);

/* insert account . 只能够用post方法*/
router.post('/insert_account', user.insert_account);
/*router.get('/insert_account', user.insert_account);*/

/* sign in . 只能够用post方法*/
router.post('/sign_in', user.sign_in);
/*router.get('/sign_in', user.sign_in);*/

module.exports = router;
