var express = require('express');
var router = express.Router();
var session = require('express-session');
/*var request = require('request');*/

var user = require('../controllers/user.js');

/* check the account exists or not . */
router.get('/check_account', user.check_account);
/* insert account . 只能够用post方法*/
router.post('/insert_account', user.insert_account);
/*router.get('/insert_account', user.insert_account);*/
/* sign in . 只能够用post方法*/
router.post('/sign_in', user.sign_in);
router.post('/account_by_id', user.account_by_id);



/*server*/
/* get server login page */
router.get('/server_login', user.serverLogin);
router.post('/server_login', user.serverDoLogin);

/* GET article page */
router.get('/server_article', user.serverArticle);
router.get('/add_article', user.addArticle);
router.post('/add_article', user.addDoArticle);
router.get('/delete_article/:nid', user.deleteArticle);

/* GET tag page */
router.get('/server_tag', user.serverTag);
router.get('/add_tag', user.addTag);
router.post('/insert_tag', user.addDoTag);
router.get('/delete_tag/:tagid', user.deleteTag);

/* GET comment page */
router.get('/server_comment', user.serverComment);
router.get('/delete_comment/:cid', user.deleteComment);

/* GET user page */
router.get('/server_user', user.serverUser);
router.get('/add_user', user.addUser);
router.post('/insert_user', user.addDoUser);
router.get('/delete_user/:userid', user.deleteUser);


module.exports = router;
