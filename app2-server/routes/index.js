var express = require('express');
var router = express.Router();

var news = require('../controllers/news.js');


/* GET all news page */
router.get('/index', news.index);

/* GET news detail page */
router.get('/newsDetail', news.detail);


module.exports = router;
