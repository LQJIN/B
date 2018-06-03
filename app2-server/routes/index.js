var express = require('express');
var router = express.Router();

var news = require('../controllers/news.js');


/* GET all news page */
router.get('/index', news.index);
/* GET tag */
router.get('/tag', news.tag);
/* GET getNewsByTagId
router.get('/getNewsByTagId', news.getNewsByTagId);*/
/* GET news detail page */
router.get('/newsDetail', news.detail);
router.get('/newsCommentNum', news.newsCommentNum);
router.get('/commentDetail', news.commentDetail);
router.post('/commentPost', news.commentPost);
router.get('/personalcomment', news.personalcomment);

/* GET news newsChina page */
router.get('/newsChina', news.newsChina);
router.get('/newsWorld', news.newsWorld);
router.get('/newsBusiness', news.newsBusiness);
router.get('/newsSports', news.newsSports);
router.get('/newsOpinion', news.newsOpinion);
router.get('/newsLife', news.newsLife);


module.exports = router;
