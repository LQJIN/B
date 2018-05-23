var db = require('./db.js');

exports.checkAccount = function (Account, callback) {
    var sql = "select count(user_id) from users where account = ? ";
    db.query(sql,[Account],callback);
};

exports.insertAccount = function (account, password, callback) {
    var sql = "insert into users(account,password) values (?,?)";
    db.query(sql, [account,password], callback);
};

exports.signIn = function (account, password, callback) {
    var sql = "select * from users where account = ? and password = ?";
    db.query(sql, [account,password], callback);
};