var db = require('./db.js');

exports.checkAccount = function (Account, callback) {
    var sql = "select count(user_id) from user where account = ? ";
    db.query(sql,[Account],callback);
};

exports.insertAccount = function (account, password, callback) {
    var sql = "insert into user(account,password) values (?,?)";
    db.query(sql, [account,password], callback);
};

exports.signIn = function (account, password, callback) {
    var sql = "select userid from user where account = ? and password = ?";
    db.query(sql, [account,password], callback);
};

exports.accountById = function (accountId, callback) {
    var sql = "select * from user where userid = ? ";
    db.query(sql, [accountId], callback);
};