var db = require('./db.js');

exports.getAllNews = function (callback) {
    var sql = "select * from news";
    db.query(sql,[],callback);
};

exports.getNewsDetail = function (newsId, callback) {
    var sql = "select * from news where nid = ? ";
    db.query(sql,[newsId],callback);
};
exports.getNewsCommentNum = function (newsId, callback) {
    var sql = "select count(a.cid) as comm from comment a where a.idnews = ? ";
    db.query(sql,[newsId],callback);
};
exports.getcommentDetail = function (newsId, callback) {
    var sql = "select a.text,a.addtime,c.account from comment a ,user c where a.idnews = ? and a.uid = c.userid";
    db.query(sql,[newsId],callback);
};
/*exports.getNewsByTagId = function (tagId, callback) {
    var sql = "select * from news where tid = ?";
    db.query(sql,[tagId],callback);
};*/
exports.getNewsChina = function (callback) {
    var sql = "select a.nid,a.title,a.content,a.time from news a where a.tid = 1 group by a.nid desc";
    db.query(sql,[],callback);
};
exports.getNewsWorld = function (callback) {
    var sql = "select a.nid,a.title,a.content,a.time from news a where a.tid = 2 group by a.nid desc";
    db.query(sql,[],callback);
};
exports.getNewsBusiness = function (callback) {
    var sql = "select a.nid,a.title,a.content,a.time from news a where a.tid = 3 group by a.nid desc";
    db.query(sql,[],callback);
};
exports.getNewsSports = function (callback) {
    var sql = "select a.nid,a.title,a.content,a.time from news a where a.tid = 4 group by a.nid desc";
    db.query(sql,[],callback);
};
exports.getNewsOpinion = function (callback) {
    var sql = "select a.nid,a.title,a.content,a.time from news a where a.tid = 5 group by a.nid desc";
    db.query(sql,[],callback);
};
exports.getNewsLife = function (callback) {
    var sql = "select a.nid,a.title,a.content,a.time from news a where a.tid = 6 group by a.nid desc";
    db.query(sql,[],callback);
};








/*server*/
exports.getNewsCommentTag = function (callback) {
    var sql = "select a.nid,a.title,a.content,a.time,t.name,count(b.idnews) as comm from news a left join tag t on a.tid=t.tagid left join comment b on a.nid=b.idnews group by a.nid desc";
    db.query(sql,[],callback);
};
exports.insertArticle = function (title,content,tag,nowTime,callback) {
    var sql = "insert into news(title,content,tid,time) values (?,?,?,?)";
    db.query(sql,[title,content,tag,nowTime],callback);
};
exports.deleteArticle = function (articleid,callback) {
    var sql = "delete from news where nid = ?;";
    db.query(sql,[articleid],callback);
};
exports.getTag = function (callback) {
    var sql = "select a.tagid,a.name from tag a";
    db.query(sql, [], callback);
};
exports.insertTag = function (title,callback) {
    var sql = "insert into tag(name) values (?)";
    db.query(sql,[title],callback);
};
exports.deleteTag = function (tagid,callback) {
    var sql = "delete from tag where tagid = ?;";
    db.query(sql,[tagid],callback);
};
exports.getComment = function (callback) {
    var sql = "select b.cid,b.idnews, b.uid,b.text,b.addtime from comment b";
    db.query(sql,[],callback);
};
exports.deleteComment = function (cid,callback) {
    var sql = "delete from comment where cid = ?;";
    db.query(sql,[cid],callback);
};
exports.getAllUser = function (callback) {
    var sql = "select b.userid, b.account,b.password from user b";
    db.query(sql, [], callback);
};
exports.deleteUser = function (userid,callback) {
    var sql = "delete from user where userid = ?;";
    db.query(sql,[userid],callback);
};
exports.insertUser = function (account,password,callback) {
    var sql = "insert into user(account,password) values (?,?)";
    db.query(sql,[account,password],callback);
};