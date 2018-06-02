var news_model = require('../models/news_model.js');

//获取所有news
exports.index = function (req,res,next) {
    /*res.render('index',{title:'Express'});*/
    //res.send('跨域请求，请求所有的文章数据。');
    //var length = req.query.length;//获取请求length条数据的长度
    news_model.getNewsCommentTag ( function (results) {
        return res.json(results);
    });
};
exports.tag = function (req,res,next) {
    news_model.getTag ( function (results) {
        return res.json(results);
    });
};
//获取指定tagid的news列表
/*exports.getNewsByTagId = function (req, res, next) {
    var tagId = req.query.tagId;//获取参数index
    console.log(tagId);
    /!*news_model.getNewsByTagId (tagId, function (results) {
        return res.json(results);
    });*!/
};*/
//跟据id获取detail
exports.detail = function (req, res, next) {
    var newsId = req.query.newsId;//获取url上的nid
    //console.log(newsId);
    news_model.getNewsDetail (newsId, function (results) {
        return res.json(results);
    });
};
exports.newsChina = function (req, res, next) {
    news_model.getNewsChina ( function (results) {
        return res.json(results);
    });
};
exports.newsWorld = function (req, res, next) {
    news_model.getNewsWorld ( function (results) {
        return res.json(results);
    });
};
exports.newsBusiness = function (req, res, next) {
    news_model.getNewsBusiness ( function (results) {
        return res.json(results);
    });
};
exports.newsSports = function (req, res, next) {
    news_model.getNewsSports ( function (results) {
        return res.json(results);
    });
};
exports.newsOpinion = function (req, res, next) {
    news_model.getNewsOpinion ( function (results) {
        return res.json(results);
    });
};
exports.newsLife = function (req, res, next) {
    news_model.getNewsLife ( function (results) {
        return res.json(results);
    });
};

