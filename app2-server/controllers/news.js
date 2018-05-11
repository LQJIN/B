var news_model = require('../models/news_model.js');

exports.index = function (req,res,next) {
    /*res.render('index',{title:'Express'});*/
    //res.send('跨域请求，请求所有的文章数据。');
    news_model.getAllNews(function (results) {
        return res.json(results);
    });
};

