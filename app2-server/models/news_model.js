var db = require('./db.js');

exports.getAllNews = function (callback) {
    var sql = "select * from news";
    db.query(sql,[],callback);
};

exports.getNewsDetail = function (newsId, callback) {
    var sql = "select * from news where nid = ? ";
    db.query(sql,[newsId],callback);
};