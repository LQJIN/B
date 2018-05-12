var news_model = require('../models/news_model.js');

//获取所有news
exports.index = function (req,res,next) {
    /*res.render('index',{title:'Express'});*/
    //res.send('跨域请求，请求所有的文章数据。');
    news_model.getAllNews (function (results) {
        return res.json(results);
    });
};
//获取指定id的detail
exports.detail = function (req, res, next) {
    var newsId = req.query.newsId;//获取url上的nid
    //console.log(newsId);
    news_model.getNewsDetail (newsId, function (results) {
        return res.json(results);
    });
};

