var express = require('express');
var router = express.Router();

var user = require('../controllers/user.js');
var news = require('../controllers/news.js');


/* GET home page. */
router.get('/index', news.index);

/* GET news detail page */
router.get('/newsDetail', news.detail);


/* GET reg page. */
router.get('/reg',user.reg);

module.exports = router;
