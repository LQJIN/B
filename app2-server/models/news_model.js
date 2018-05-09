var db = require('./db.js');

exports.getAllNews = function (callback) {
    var sql = "select * from t_news";
    db.query(sql,[],callback);
};